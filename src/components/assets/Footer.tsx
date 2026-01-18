'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export default function Footer() {
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
    <footer className="border-t">
      <div className="w-full max-w-[1536px] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 py-12 md:py-20 mx-auto">
        <address className="flex flex-col justify-center not-italic">
          Lives in{' '}
          <a
            href="mailto:contact@mehmedkhan.dev"
            className="text-primary hover:underline">
            Dhaka, Bangladesh
          </a>
          .
          <br />
          Available for freelance projects and collaborations.
          <br />
          <br />
          Get in touch via email or social media.
        </address>
        <ul className="flex flex-col items-start md:items-center justify-center gap-4">
          <li>
            <Link href="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="nav-links">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col justify-center">
          <Link href="/" className="inline-block">
            <h1 className="text-xl font-black">Mehmed Khan</h1>
          </Link>
        </div>
        <div className="flex flex-col items-start md:items-center justify-center gap-6 md:gap-8">
          <div className="w-full text-center">
            <h3 className="text-xl font-bold text-violet-500">
              Subscribe to my newsletter
            </h3>
            <p className="text-center text-gray-300 mt-2.5">
              Stay updated with my latest projects, tech insights, and
              development tips delivered to your inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-start md:items-center gap-5"
            noValidate>
            <div className="w-full">
              <Input
                type="email"
                placeholder="Enter your email"
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
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              className="w-fit bg-red-500 hover:bg-red-600 cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
      <hr className="w-full" />
      <div className="w-full py-2 text-center">Copyright</div>
    </footer>
  )
}
