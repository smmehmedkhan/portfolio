'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getAnimationPreset } from '@/lib/animations/registry'

const MForm = motion.create('form')

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const fade = getAnimationPreset('fade')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Implement actual contact form API call
      console.log('Contact form submission:', data)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      reset()
      alert('Thank you for your message! I will get back to you soon.')
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again later.')
    }
  }

  return (
    <MForm
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
      initial={fade.initial}
      whileInView={fade.whileInView}
      transition={{ ...fade.transition, delay: 0.2 }}>
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

      <Button type="submit" disabled={isSubmitting} className="w-full">
        <Send />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </Button>
    </MForm>
  )
}
