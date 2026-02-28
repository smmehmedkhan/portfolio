'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { getAnimationPreset } from '@/lib/animations/registry'
import {
  type NewsletterFormData,
  newsletterSchema,
} from '@/schemas/newsletterSchema'

const MForm = motion.create('form')

export default function NewsletterForm() {
  const fade = getAnimationPreset('fade')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = async (values: NewsletterFormData) => {
    // Show a loading toast and capture its ID so we can update it later
    const toastId = toast.loading('Sending your message...')

    try {
      const res = await fetch('/api/v1/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Subscription failed')

      // Dismiss the loading toast and replace with success
      toast.success('Message sent!', {
        id: toastId,
        description: data.message,
        duration: 5000,
      })

      reset()
    } catch (err) {
      console.error('[CONTACT_FORM_ERROR]', err)

      // Dismiss the loading toast and replace with error
      toast.error('Failed to send message', {
        id: toastId,
        description:
          err instanceof Error ? err.message : 'Please try again later.',
        duration: 5000,
      })
    }
  }

  return (
    <MForm
      className="newsletter-form flex-box"
      onSubmit={handleSubmit(onSubmit)}
      {...fade}
      transition={{ ...fade.transition, delay: 0.5 }}
      noValidate>
      <Field className="wrapper" data-invalid={!!errors.email}>
        <Input
          className="input"
          type="email"
          placeholder="your.email@example.com"
          required
          {...register('email')}
        />
        <FieldError className="max-w-md text-center" errors={[errors.email]} />
      </Field>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Subscribing...</span>
          </>
        ) : (
          <>
            <Mail />
            <span>Subscribe</span>
          </>
        )}
      </Button>
    </MForm>
  )
}
