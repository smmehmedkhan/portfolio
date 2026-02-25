'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { getAnimationPreset } from '@/lib/animations/registry'

const MInput = motion.create(Input)
const MButton = motion.create(Button)

const newsletterSchema = z.object({
  email: z.email({ error: 'Please enter a valid email address' }),
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
      <Field className="wrapper">
        <MInput
          className="input"
          type="email"
          placeholder="johndoe@example.com"
          aria-label="Email address"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
          {...register('email')}
          {...fadeDown}
          transition={{ ...fadeDown.transition, delay: 0.4 }}
        />
        <FieldError errors={[errors.email]} />
      </Field>
      <MButton
        type="submit"
        disabled={isSubmitting}
        {...fadeDown}
        transition={{ ...fadeDown.transition, delay: 0.6 }}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </MButton>
    </form>
  )
}
