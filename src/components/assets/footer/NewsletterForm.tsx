'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAnimationPreset } from '@/lib/animations/registry'

const MInput = motion.create(Input)
const MButton = motion.create(Button)

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>
export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const fadeDown = getAnimationPreset('fade-down')

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // TODO: Implement actual newsletter subscription API call
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
    <form
      className="newsletter-form flex-box"
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      <div className="wrapper">
        <MInput
          className="input"
          type="email"
          placeholder="johndoe@example.com"
          aria-label="Email address"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.4 }}
          viewport={{ amount: 0.6 }}
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
      <MButton
        type="submit"
        disabled={isSubmitting}
        initial={fadeDown.initial}
        whileInView={fadeDown.whileInView}
        transition={{ ...fadeDown.transition, delay: 0.6 }}
        viewport={{ amount: 0.6 }}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </MButton>
    </form>
  )
}
