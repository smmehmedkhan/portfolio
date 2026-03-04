'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { socialLinks } from '@/data/socialLinks'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
  buttonClassName?: string
  iconClassName?: string
  animated?: boolean
  delay?: number
}

const MDiv = motion.create('div')
export default function SocialLinks({
  className,
  buttonClassName,
  iconClassName,
  animated = true,
  delay,
}: SocialLinksProps) {
  const fadeDown = getAnimationPreset('fade-down')
  const bounce = getAnimationPreset('bounce')

  const Container = animated ? motion.create('div') : 'div'

  return (
    <Container
      className={cn('flex-inline gap-5 md:gap-7.5 lg:gap-10', className)}
      {...(animated && fadeDown)}
      transition={{ ...fadeDown.transition, delay }}>
      {socialLinks.map(({ id, name, href, icon: Icon }) => (
        <MDiv
          key={id}
          whileHover={animated ? bounce.animate : undefined}
          transition={bounce.transition}>
          <Button
            variant="outline"
            className={cn(
              'size-10 md:size-12 p-2 bg-popover text-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-popover/90 dark:hover:text-accent dark:hover:border-accent',
              buttonClassName
            )}>
            <Link
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer">
              <Icon className={cn('size-8 md:size-10', iconClassName)} />
            </Link>
          </Button>
        </MDiv>
      ))}
    </Container>
  )
}
