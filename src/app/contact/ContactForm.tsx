'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Input } from '@/components/ui/input'
import { CONFIG } from '@/constants/config'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
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
    <main className="w-full min-h-dvh container py-20">
      <div className="flex flex-col items-center gap-12 max-w-3xl mx-auto">
        <Heading variant="primary-heading">Get In Touch</Heading>

        <div className="w-full grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href={`mailto:${CONFIG.PERSONAL.EMAIL}`}
                  className="text-primary hover:underline">
                  {CONFIG.PERSONAL.EMAIL}
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Dhaka, Bangladesh</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Social Media</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href={CONFIG.SOCIAL.GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline">
                    GitHub
                  </Link>
                  <Link
                    href={CONFIG.SOCIAL.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline">
                    LinkedIn
                  </Link>
                  <Link
                    href={CONFIG.SOCIAL.TWITTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline">
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                aria-label="Name"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-destructive"
                  role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
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

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="What's this about?"
                aria-label="Subject"
                aria-invalid={errors.subject ? 'true' : 'false'}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
                {...register('subject')}
              />
              {errors.subject && (
                <p
                  id="subject-error"
                  className="mt-1 text-sm text-destructive"
                  role="alert">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Your message here..."
                className="w-full px-3 py-2 bg-background border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Message"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message')}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-destructive"
                  role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="default"
              disabled={isSubmitting}
              className="w-full">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </main>
  )
}
