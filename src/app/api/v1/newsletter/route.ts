import { type NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'
import getBrevoClient from '@/lib/brevo'
import { newsletterWelcomeTemplate } from '@/lib/emailTemplates'
import { env } from '@/lib/env'
import connectDB from '@/lib/mongodb'
import Subscriber from '@/models/Subscriber'
import { newsletterSchema } from '@/schemas/newsletterSchema'

// TODO: Add proper logger (e.g., winston, pino) for production logging

export async function POST(req: NextRequest) {
  try {
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
      console.warn('[BREVO_CLIENT_WARN]', clientError)
    }

    try {
      if (!brevo) throw new Error('Brevo client unavailable')
      const contact = await brevo.contacts.createContact({
        email,
        listIds: [], // Add your Brevo list ID(s) here, e.g. [5]
        updateEnabled: true,
      })
      brevoContactId = contact.id?.toString()
    } catch (contactError) {
      // Non-fatal: log but continue
      console.warn('[BREVO_CONTACT_WARN]', contactError)
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
        { error: 'Validation failed', issues: error.flatten().fieldErrors },
        { status: 422 }
      )
    }
    console.error('[NEWSLETTER_API_ERROR]', error)
    return NextResponse.json(
      { error: 'Subscription failed. Please try again.' },
      { status: 500 }
    )
  }
}
