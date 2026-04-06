import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { arcjetDenialResponse, createArcjet } from '@/lib/arcjet'
import getBrevoClient from '@/lib/brevo'
import { newsletterUnsubscribeTemplate } from '@/lib/emailTemplates'
import { env } from '@/lib/env'
import connectDB from '@/lib/mongodb'
import Subscriber from '@/models/Subscriber'

// TODO: Add proper logger (e.g., winston, pino) for production logging

const unsubscribeSchema = z.object({
  email: z.email('Invalid email address'),
})

let _ajUnsubscribe: ReturnType<typeof createArcjet> | null = null

function getArcjet() {
  if (!_ajUnsubscribe) _ajUnsubscribe = createArcjet({ max: 20 })
  return _ajUnsubscribe
}

export async function GET(req: NextRequest) {
  try {
    const decision = await getArcjet().protect(req)

    if (decision.isDenied()) {
      const denial = arcjetDenialResponse(decision)
      return NextResponse.json(denial.json, { status: denial.status })
    }

    if (decision.isErrored()) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }

    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')

    return NextResponse.redirect(
      new URL(`/unsubscribe?email=${encodeURIComponent(email || '')}`, req.url)
    )
  } catch (error) {
    console.error('Error in unsubscribe GET:', error)
    return NextResponse.json(
      { error: 'Service temporarily unavailable' },
      { status: 503 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const decision = await getArcjet().protect(req)

    if (decision.isDenied()) {
      const denial = arcjetDenialResponse(decision)
      // Add shield-specific message if applicable
      if (decision.reason.isShield?.()) {
        return NextResponse.json(
          { error: 'Request blocked for security reasons' },
          { status: 403 }
        )
      }
      return NextResponse.json(denial.json, { status: denial.status })
    }

    if (decision.isErrored()) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      )
    }

    const body = await req.json()
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const { email } = body

    // Validate email
    const { email: validEmail } = unsubscribeSchema.parse({ email })

    // Update subscriber status in MongoDB
    await connectDB()
    const subscriber = await Subscriber.findOneAndUpdate(
      { email: validEmail },
      { isActive: false },
      { returnDocument: 'after' }
    )

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Email not found in our records.' },
        { status: 404 }
      )
    }

    try {
      // Send unsubscribe confirmation email via Brevo
      const brevo = getBrevoClient()
      await brevo.transactionalEmails.sendTransacEmail({
        sender: {
          email: env.BREVO_SENDER_EMAIL || '',
          name: env.BREVO_SENDER_NAME || '',
        },
        to: [{ email: validEmail }],
        subject: "You've been unsubscribed",
        htmlContent: newsletterUnsubscribeTemplate(validEmail),
      })
    } catch (error) {
      console.warn('[UNSUBSCRIBE_EMAIL_WARN]', error)
    }

    return NextResponse.json(
      { message: 'Successfully unsubscribed!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    console.error('[UNSUBSCRIBE_API_ERROR]', error)
    return NextResponse.json(
      { error: 'Failed to unsubscribe. Please try again.' },
      { status: 500 }
    )
  }
}
