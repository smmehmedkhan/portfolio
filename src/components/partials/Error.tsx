'use client'

import { RefreshCw } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import { env } from '@/lib/env'
import { resolveErrorInfo } from '@/lib/errors'
import type { ErrorProps } from '@/types'

const Wrapper = motion.create('header')

export default function ErrorLayout({ error, reset }: ErrorProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const fade = getAnimationPreset('fade')
  const { code, title, message } = resolveErrorInfo(error)

  // Return a stable shell if not mounted to prevent hydration mismatch from animations
  const animationProps = mounted ? fade : {}
  const transitionProps = mounted ? { ...fade.transition, delay: 0.5 } : {}

  return (
    <div className="container flex-box gap-5 sm:gap-7.5 md:gap-10">
      <Wrapper
        className="wrapper"
        {...animationProps}
        transition={transitionProps}>
        <Image
          src="/icons/server-error.svg"
          alt="Server error illustration"
          width={860}
          height={571}
          priority
          className="w-full h-auto max-w-xs sm:max-w-sm"
        />
      </Wrapper>
      <div className="wrapper gap-3 sm:gap-4 md:gap-5">
        <Heading variant="main" as="h1" size="4xl" animated>
          {code}
        </Heading>
        <Heading
          variant="sub"
          as="h2"
          size="xl"
          animated
          transition={{ delay: 0.2 }}>
          {title}
        </Heading>
        <Paragraph
          variant="lead"
          className="max-w-lg text-center text-pretty"
          animated
          transition={{ delay: 0.4 }}>
          {message}
        </Paragraph>
        {mounted && env.NODE_ENV === 'development' && error && (
          <details className="mt-2 text-left w-full max-w-lg">
            <summary className="cursor-pointer text-sm font-medium text-muted-foreground mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="text-xs bg-muted p-4 rounded overflow-auto max-h-48">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
      <div className="size-full flex-center gap-4">
        {reset && (
          <Button variant="default" onClick={reset}>
            <RefreshCw />
            Try Again
          </Button>
        )}
        <Button variant="outline" asChild>
          <Link href="/" target="_self">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
