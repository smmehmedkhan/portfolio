import arcjet, { detectBot, fixedWindow, shield } from '@arcjet/next'
import { type NextRequest, NextResponse } from 'next/server'
import { ZodError, z } from 'zod'
import getBrevoClient from '@/lib/brevo'
import { newsletterWelcomeTemplate } from '@/lib/emailTemplates'
import { env } from '@/lib/env'
import { apiLogger } from '@/lib/logger'
import connectDB from '@/lib/mongodb'
import Subscriber from '@/models/Subscriber'
import { newsletterSchema } from '@/schemas/newsletterSchema'

const log = apiLogger.child({ route: 'newsletter' })

function normalizeOrigin(value: string | null | undefined) {
  if (!value) return null
  try {
    return new URL(value).origin
  } catch {
    return null
  }
}

const isDev = env.NODE_ENV === 'development'

const ajNewsletter = arcjet({
  key: env.ARCJET_KEY || 'placeholder_key',
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({ mode: isDev ? 'DRY_RUN' : 'LIVE', allow: [] }),
    fixedWindow({ mode: 'LIVE', window: '1h', max: 20 }),
  ],
})

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

    const decision = await ajNewsletter.protect(req)

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
    const { email } = newsletterSchema.parse(body)

    // 2. Check for existing subscription in MongoDB
    await connectDB()
    const existing = await Subscriber.findOne({ email })

    if (existing?.isActive) {
      return NextResponse.json(
        { error: 'This email is already subscribed.' },
        { status: 409 }
      )
    }

    // 3. Add contact to Brevo contact list
    let brevoContactId: string | undefined
    let brevo: ReturnType<typeof getBrevoClient> | null = null
    try {
      brevo = getBrevoClient()
    } catch (clientError) {
      log.warn({ err: clientError }, 'Brevo client unavailable')
    }

    try {
      if (!brevo) throw new Error('Brevo client unavailable')
      const contact = await brevo.contacts.createContact({
        email,
        listIds: [], // Add your Brevo list ID(s) here, e.g. [5]
        updateEnabled: true,
      })
      brevoContactId = contact?.id?.toString()
    } catch (contactError) {
      // Non-fatal: log but continue
      log.warn(
        { err: contactError },
        'Failed to add contact to Brevo list — continuing'
      )
    }

    // 4. Upsert subscriber in MongoDB
    await Subscriber.findOneAndUpdate(
      { email },
      { email, isActive: true, brevoContactId },
      { returnDocument: 'after', upsert: true }
    )

    // 5. Send welcome email via Brevo
    if (brevo) {
      await brevo.transactionalEmails.sendTransacEmail({
        sender: {
          email: env.BREVO_SENDER_EMAIL || '',
          name: env.BREVO_SENDER_NAME || '',
        },
        to: [{ email }],
        subject: "Welcome! You're subscribed 🎉",
        htmlContent: newsletterWelcomeTemplate(email),
      })
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 201 }
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
    log.error({ err: error }, 'Unhandled error in newsletter POST')
    return NextResponse.json(
      { error: 'Subscription failed. Please try again.' },
      { status: 500 }
    )
  }
}
