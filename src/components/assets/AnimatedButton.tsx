'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'
import type { AnimatedButtonProps } from '@/types'

const Container = motion.create('div')
const Wrapper = motion.create('div')

export default function AnimatedButton({
  className,
  delay = 0.6,
  variant = 'outline',
  href,
  target,
  icon,
  btnText,
  swap = false,
}: AnimatedButtonProps) {
  const fadeDown = getAnimationPreset('fade-down')
  const bounce = getAnimationPreset('bounce')

  return (
    <Container
      className={cn('size-full', className)}
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay }}>
      <Wrapper whileHover={bounce.animate} transition={bounce.transition}>
        <Button className="w-full max-w-lg lg:w-fit" variant={variant} asChild>
          <Link href={href} target={target}>
            {swap ? (
              <>
                {icon}
                <span>{btnText}</span>
              </>
            ) : (
              <>
                <span>{btnText}</span>
                {icon}
              </>
            )}
          </Link>
        </Button>
      </Wrapper>
    </Container>
  )
}
