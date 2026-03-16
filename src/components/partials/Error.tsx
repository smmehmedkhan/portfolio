'use client'

import { RefreshCw } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import AnimatedButton from '@/components/assets/AnimatedButton'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'

const Wrapper = motion.create('div')

interface ErrorProps {
  error?: Error | null
  reset?: () => void
}

export default function ErrorLayout({ error, reset }: ErrorProps) {
  const fade = getAnimationPreset('fade')

  return (
    <div className="container flex-box gap-5 sm:gap-7.5 md:gap-10">
      <Wrapper
        className="wrapper"
        {...fade}
        transition={{ ...fade.transition, delay: 0.5 }}>
        <Image
          src="/icons/server-error.svg"
          alt="Server error illustration"
          width={860}
          height={571}
          priority
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </Wrapper>
      <div className="wrapper gap-3 sm:gap-4 md:gap-5">
        <Heading variant="main" as="h1" size="4xl" animated>
          500
        </Heading>
        <Heading
          variant="sub"
          as="h2"
          size="xl"
          animated
          transition={{ delay: 0.2 }}>
          Something Went Wrong
        </Heading>
        <Paragraph
          variant="lead"
          className="max-w-lg text-center text-pretty"
          animated
          transition={{ delay: 0.4 }}>
          An unexpected error occurred. Please try again or go back home.
        </Paragraph>
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-2 text-left w-full max-w-lg">
            <summary className="cursor-pointer text-sm font-medium text-muted-foreground mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="text-xs bg-muted p-4 rounded overflow-auto max-h-48">
              {error.toString()}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {reset && (
          <Button variant="default" onClick={reset}>
            <RefreshCw />
            Try Again
          </Button>
        )}
        <AnimatedButton
          variant="outline"
          href="/"
          target="_self"
          btnText="Go Home"
          swap
        />
      </div>
    </div>
  )
}
