import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import brevo from '@/lib/brevo'
import { newsletterUnsubscribeTemplate } from '@/lib/emailTemplates'
import connectDB from '@/lib/mongodb'
import Subscriber from '@/models/Subscriber'

// TODO: Add proper logger (e.g., winston, pino) for production logging

const unsubscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')

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

    // Send unsubscribe confirmation email via Brevo
    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL || '',
        name: process.env.BREVO_SENDER_NAME || '',
      },
      to: [{ email: validEmail }],
      subject: "You've been unsubscribed",
      htmlContent: newsletterUnsubscribeTemplate(validEmail),
    })

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
