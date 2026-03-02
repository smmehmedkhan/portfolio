'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'

const MDiv = motion.create('div')
const MBtn = motion.create(Button)

type AnimatedButtonProps = {
  href: string
  target?: string
  btnText: string
  icon?: React.ReactNode
  variant?:
    | 'link'
    | 'outline'
    | 'default'
    | 'destructive'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
  className?: string
  delay?: number
  swap?: boolean
}

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

  const Container = motion.create('div')
  const Wrapper = motion.create('div')
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
