'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getAnimationPreset } from '@/lib/animations/registry'
import {
  type NewsletterFormData,
  newsletterSchema,
} from '@/schemas/newsletterSchema'

const MForm = motion.create('form')

export default function NewsletterForm() {
  const fade = getAnimationPreset('fade')
  const bounce = getAnimationPreset('bounce')
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
    const toastId = toast.loading('Subscribing...')

    try {
      const res = await fetch('/api/v1/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Subscription failed')

      // Dismiss the loading toast and replace with success
      toast.success('Subscribed!', {
        id: toastId,
        description: data.message,
        duration: 5000,
      })

      reset()
    } catch (err) {
      console.error('[NEWSLETTER_FORM_ERROR]', err)

      // Dismiss the loading toast and replace with error
      toast.error('Subscription failed', {
        id: toastId,
        description:
          err instanceof Error ? err.message : 'Please try again later.',
        duration: 5000,
      })
    }
  }

  const Wrapper = motion.create('div')

  return (
    <MForm
      className="newsletter-form flex-box"
      onSubmit={handleSubmit(onSubmit)}
      {...fade}
      transition={{ ...fade.transition, delay: 0.5 }}
      noValidate>
      <Field className="wrapper" data-invalid={!!errors.email}>
        <Label htmlFor="subscribeMail" className="sr-only">
          Subscribe Email Address
        </Label>
        <Input
          className="input"
          type="email"
          id="subscribeMail"
          placeholder="your.email@example.com"
          aria-label="Subscribe email address"
          required
          {...register('email')}
        />
        <FieldError className="max-w-md text-center" errors={[errors.email]} />
      </Field>

      <Wrapper whileHover={bounce.animate} transition={bounce.transition}>
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
      </Wrapper>
    </MForm>
  )
}
