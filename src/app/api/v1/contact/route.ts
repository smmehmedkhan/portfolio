import arcjet, { detectBot, fixedWindow, shield } from '@arcjet/next'
import { type NextRequest, NextResponse } from 'next/server'
import { ZodError, z } from 'zod'
import getBrevoClient from '@/lib/brevo'
import {
  contactAutoReplyTemplate,
  contactNotificationTemplate,
} from '@/lib/emailTemplates'
import { env } from '@/lib/env'
import connectDB from '@/lib/mongodb'
import ContactMessage from '@/models/ContactMessage'
import { contactSchema } from '@/schemas/contactSchema'

const ajContact = arcjet({
  key: env.ARCJET_KEY || 'placeholder_key',
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({ mode: 'LIVE', allow: [] }),
    fixedWindow({ mode: 'LIVE', window: '1h', max: 10 }),
  ],
})

export async function POST(req: NextRequest) {
  try {
    const decision = await ajContact.protect(req)

    if (decision.isDenied()) {
      if (decision.reason.isBot()) {
        return NextResponse.json(
          { error: 'Automated requests not permitted' },
          { status: 403 }
        )
      }
      if (decision.reason.isRateLimit()) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        )
      }
      if (decision.reason.isShield()) {
        return NextResponse.json(
          { error: 'Request blocked for security reasons' },
          { status: 403 }
        )
      }
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

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
      console.warn('[BREVO_CLIENT_WARN]', clientError)
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

    const emailFailed = emailResults.some(r => r.status === 'rejected')
    if (emailFailed) {
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
    console.error('[CONTACT_API_ERROR]', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
