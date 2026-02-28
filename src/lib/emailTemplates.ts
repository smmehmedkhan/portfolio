import { env } from './env'

export const contactNotificationTemplate = (data: {
  name: string
  email: string
  subject: string
  message: string
}) => `
  <div style="font-family: Inter, Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff;">
    <div style="background: #0f172a; padding: 24px 32px;">
      <h1 style="color: #f8fafc; margin: 0; font-size: 20px;">📬 New Contact Form Submission</h1>
    </div>
    <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 0; font-weight: 600; color: #475569; width: 100px;">Name</td>
          <td style="padding: 10px 0; color: #0f172a;">${data.name}</td>
        </tr>
        <tr style="border-top: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #475569;">Email</td>
          <td style="padding: 10px 0;"><a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></td>
        </tr>
        <tr style="border-top: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; font-weight: 600; color: #475569;">Subject</td>
          <td style="padding: 10px 0; color: #0f172a;">${data.subject}</td>
        </tr>
      </table>
      <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px;">
        <p style="margin: 0; color: #334155; line-height: 1.7;">${data.message.replace(/\n/g, '<br/>')}</p>
      </div>
    </div>
  </div>
`

export const contactAutoReplyTemplate = (name: string) => `
  <div style="font-family: Inter, Arial, sans-serif; max-width: 640px; margin: 0 auto;">
    <div style="background: #0f172a; padding: 24px 32px;">
      <h1 style="color: #f8fafc; margin: 0; font-size: 20px;">Thank you, ${name}!</h1>
    </div>
    <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
      <p style="color: #334155; font-size: 16px; line-height: 1.7;">
        We've received your message and will get back to you within <strong>24–48 business hours</strong>.
      </p>
      <p style="color: #64748b; font-size: 14px; margin-top: 32px;">
        You're receiving this because you contacted us via our website. Please do not reply to this email.
      </p>
    </div>
  </div>
`

export const newsletterWelcomeTemplate = (email: string) => `
  <div style="font-family: Inter, Arial, sans-serif; max-width: 640px; margin: 0 auto;">
    <div style="background: #0f172a; padding: 24px 32px;">
      <h1 style="color: #f8fafc; margin: 0; font-size: 20px;">🎉 Welcome to the Newsletter!</h1>
    </div>
    <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
      <p style="color: #334155; font-size: 16px; line-height: 1.7;">
        You've successfully subscribed with <strong>${email}</strong>.
        Expect curated updates, tips, and news delivered straight to your inbox.
      </p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
      <p style="color: #94a3b8; font-size: 12px;">
        Don't want these emails?
        <a href="${env.NEXT_PUBLIC_SITE_URL}/api/v1/unsubscribe?email=${encodeURIComponent(email)}" style="color: #3b82f6;">Unsubscribe</a>
      </p>
    </div>
  </div>
`

export const newsletterUnsubscribeTemplate = (email: string) => `
  <div style="font-family: Inter, Arial, sans-serif; max-width: 640px; margin: 0 auto;">
    <div style="background: #0f172a; padding: 24px 32px;">
      <h1 style="color: #f8fafc; margin: 0; font-size: 20px;">👋 You've been unsubscribed</h1>
    </div>
    <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
      <p style="color: #334155; font-size: 16px; line-height: 1.7;">
        <strong>${email}</strong> has been successfully removed from our newsletter.
      </p>
      <p style="color: #334155; font-size: 16px; line-height: 1.7;">
        We're sorry to see you go! If you change your mind, you can always subscribe again.
      </p>
      <p style="color: #64748b; font-size: 14px; margin-top: 32px;">
        This is a confirmation email. Please do not reply.
      </p>
    </div>
  </div>
`
