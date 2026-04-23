'use client'

import { Home } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import AnimatedButton from '@/components/assets/AnimatedButton'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'

const Wrapper = motion.create('header')

export default function NotFound() {
  const fade = getAnimationPreset('fade')

  return (
    <div className="container flex-box gap-5 sm:gap-7.5 md:gap-10 overflow-hidden">
      <Wrapper
        className="wrapper w-full max-w-full overflow-hidden"
        {...fade}
        transition={{ ...fade.transition, delay: 0.5 }}>
        <Image
          src="/icons/not-found.svg"
          alt="Page not found illustration"
          width={860}
          height={571}
          priority
          className="w-full max-w-full xs:max-w-xs sm:max-w-sm"
        />
      </Wrapper>
      <div className="wrapper gap-3 sm:gap-4 md:gap-5">
        <Heading variant="main" as="h1" size="4xl" animated>
          404
        </Heading>
        <Heading
          variant="sub"
          as="h2"
          size="xl"
          animated
          transition={{ delay: 0.2 }}>
          Page Not Found
        </Heading>
        <Paragraph
          variant="lead"
          className="max-w-lg text-center text-pretty"
          animated
          transition={{ delay: 0.4 }}>
          Looks like this page wandered off. Let&apos;s get you back on track.
        </Paragraph>
      </div>
      <AnimatedButton
        className="wrapper"
        variant="default"
        href="/"
        target="_self"
        icon={<Home />}
        btnText="Go Back"
        swap
      />
    </div>
  )
}
