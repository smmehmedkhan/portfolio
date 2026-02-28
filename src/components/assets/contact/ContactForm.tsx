'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Send } from 'lucide-react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getAnimationPreset } from '@/lib/animations/registry'
import { type ContactFormData, contactSchema } from '@/schemas/contactSchema'

const MForm = motion.create('form')

export default function ContactForm() {
  const fade = getAnimationPreset('fade')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const onSubmit = async (values: ContactFormData) => {
    // Show a loading toast and capture its ID so we can update it later
    const toastId = toast.loading('Sending your message...')

    try {
      const res = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Submission failed')

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
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
      {...fade}
      transition={{ ...fade.transition, delay: 0.5 }}>
      <Field data-invalid={!!errors.name}>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          placeholder="Your name"
          required
          {...register('name')}
        />
        <FieldError errors={[errors.name]} />
      </Field>

      <Field data-invalid={!!errors.email}>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          required
          {...register('email')}
        />
        <FieldError errors={[errors.email]} />
      </Field>

      <Field data-invalid={!!errors.subject}>
        <FieldLabel htmlFor="subject">Subject</FieldLabel>
        <Input
          id="subject"
          placeholder="What's this about?"
          required
          {...register('subject')}
        />
        <FieldError errors={[errors.subject]} />
      </Field>

      <Field data-invalid={!!errors.message}>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea
          id="message"
          rows={6}
          placeholder="Your message here..."
          required
          {...register('message')}
        />
        <FieldError errors={[errors.message]} />
      </Field>

      <Button className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send />
            <span>Send Message</span>
          </>
        )}
      </Button>
    </MForm>
  )
}
