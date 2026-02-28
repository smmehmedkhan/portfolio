import { type NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'
import brevo from '@/lib/brevo'
import {
  contactAutoReplyTemplate,
  contactNotificationTemplate,
} from '@/lib/emailTemplates'
import { env } from '@/lib/env'
import connectDB from '@/lib/mongodb'
import ContactMessage from '@/models/ContactMessage'
import { contactSchema } from '@/schemas/contactSchema'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // 1. Validate with Zod
    const data = contactSchema.parse(body)

    // 2. Save to MongoDB
    await connectDB()
    await ContactMessage.create(data)

    const sender = {
      email: env.BREVO_SENDER_EMAIL || '',
      name: env.BREVO_SENDER_NAME || '',
    }

    // 3. Send emails in parallel via Brevo
    await Promise.all([
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

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', issues: error.flatten().fieldErrors },
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
