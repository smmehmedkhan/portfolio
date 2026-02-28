import { z } from 'zod'

export const newsletterSchema = z.object({
  email: z.email('Please enter a valid email address'),
})

export type NewsletterFormData = z.infer<typeof newsletterSchema>
