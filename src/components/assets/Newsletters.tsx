'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import { Paragraph } from '@/components/ui/paragraph'

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export default function Newsletters() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // TODO: Implement actual newsletter subscription API call
      // amazonq-ignore-next-line
      // amazonq-ignore-next-line
      console.log('Newsletter subscription:', data.email)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      reset()
      // In a real implementation, you would show a success message here
    } catch (error) {
      console.error('Failed to subscribe:', error)
      // In a real implementation, you would show an error message here
    }
  }

  return (
    <div className="wrapper gap-10">
      <div className="wrapper gap-3">
        <Heading variant="tertiary-heading" size="xl" className="capitalize">
          Subscribe to my newsletter
        </Heading>
        <Paragraph variant="muted" className="text-center">
          Stay updated with my latest projects, tech insights, and development
          tips delivered to your inbox.
        </Paragraph>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start md:items-center gap-5"
        noValidate>
        <div className="wrapper">
          <Input
            className="w-full max-w-100 mx-auto"
            type="email"
            placeholder="johndoe@example.com"
            aria-label="Email address"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-sm text-destructive"
              role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  )
}
