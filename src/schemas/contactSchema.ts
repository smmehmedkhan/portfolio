import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .trim(),
  email: z.string().email('Please enter a valid email address').toLowerCase(),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject is too long')
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message is too long (max 5000 chars)')
    .trim(),
})

export type ContactFormData = z.infer<typeof contactSchema>
