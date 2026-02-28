import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import getBrevoClient from '@/lib/brevo'
import { newsletterUnsubscribeTemplate } from '@/lib/emailTemplates'
import { env } from '@/lib/env'
import connectDB from '@/lib/mongodb'
import Subscriber from '@/models/Subscriber'

// TODO: Add proper logger (e.g., winston, pino) for production logging

const unsubscribeSchema = z.object({
  email: z.email('Invalid email address'),
})

export function GET(req: NextRequest) {
  // Render confirmation page instead of directly unsubscribing
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')

  // Redirect to a confirmation page
  return NextResponse.redirect(
    new URL(`/unsubscribe?email=${encodeURIComponent(email || '')}`, req.url)
  )
}

export async function POST(req: NextRequest) {
  try {
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
