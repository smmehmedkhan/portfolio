import { type NextRequest, NextResponse } from 'next/server'
import { ZodError, z } from 'zod'
import { createArcjet } from '@/lib/arcjet'
import getBrevoClient from '@/lib/brevo'
import {
  contactAutoReplyTemplate,
  contactNotificationTemplate,
} from '@/lib/emailTemplates'
import { env } from '@/lib/env'
import { apiLogger } from '@/lib/logger'
import connectDB from '@/lib/mongodb'
import ContactMessage from '@/models/ContactMessage'
import { contactSchema } from '@/schemas/contactSchema'

const log = apiLogger.child({ route: 'contact' })

function normalizeOrigin(value: string | null | undefined) {
  if (!value) return null
  try {
    return new URL(value).origin
  } catch {
    return null
  }
}

const ajContact = createArcjet({ max: 10 })

function getArcjetDeniedResponse(
  decision: Awaited<ReturnType<typeof ajContact.protect>>
) {
  if (decision.reason.isBot())
    return NextResponse.json(
      { error: 'Automated requests not permitted' },
      { status: 403 }
    )
  if (decision.reason.isRateLimit())
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  if (decision.reason.isShield())
    return NextResponse.json(
      { error: 'Request blocked for security reasons' },
      { status: 403 }
    )
  return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
}

function hasEmailFailure(results: PromiseSettledResult<unknown>[]) {
  return results.some(r => r.status === 'rejected')
}

export async function POST(req: NextRequest) {
  try {
    const origin = normalizeOrigin(req.headers.get('origin'))
    const expectedOrigin = normalizeOrigin(
      env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
    )

    if (
      env.NODE_ENV === 'production'
      && origin
      && expectedOrigin
      && origin !== expectedOrigin
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const decision = await ajContact.protect(req)

    if (decision.isDenied()) return getArcjetDeniedResponse(decision)

    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    // 1. Validate with Zod
    const data = contactSchema.parse(body)

    // 2. Save to MongoDB
    await connectDB()
    await ContactMessage.create(data)

    const sender = {
      email: env.BREVO_SENDER_EMAIL || '',
      name: env.BREVO_SENDER_NAME || '',
    }

    let brevo: ReturnType<typeof getBrevoClient> | null = null
    try {
      brevo = getBrevoClient()
    } catch (clientError) {
      log.warn(
        { err: clientError },
        'Brevo client unavailable — email delivery delayed'
      )
      return NextResponse.json(
        { message: 'Message saved; email delivery is delayed.' },
        { status: 202 }
      )
    }

    // 3. Send emails in parallel via Brevo
    const emailResults = await Promise.allSettled([
      // Admin notification
      brevo.transactionalEmails.sendTransacEmail({
        sender,
        to: [{ email: env.ADMIN_EMAIL || '' }],
        replyTo: { email: data.email, name: data.name },
        subject: `New Contact: ${data.subject}`,
        htmlContent: contactNotificationTemplate(data),
      }),
      // Auto-reply to user
      brevo.transactionalEmails.sendTransacEmail({
        sender,
        to: [{ email: data.email, name: data.name }],
        subject: 'We received your message!',
        htmlContent: contactAutoReplyTemplate(data.name),
      }),
    ])

    if (hasEmailFailure(emailResults)) {
      log.warn(
        { results: emailResults },
        'One or more contact emails failed to send'
      )
      return NextResponse.json(
        { message: 'Message saved; email delivery is delayed.' },
        { status: 202 }
      )
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          issues: z.flattenError(error).fieldErrors,
        },
        { status: 422 }
      )
    }
    log.error({ err: error }, 'Unhandled error in contact POST')
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
