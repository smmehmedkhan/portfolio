'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { socialLinks } from '@/data/socialLinks'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'
import type { SocialLinksProps } from '@/types'

const Wrapper = motion.create('div')

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
      className={cn(
        'flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5',
        className
      )}
      {...(animated && fadeDown)}
      transition={{ ...fadeDown.transition, delay }}>
      {socialLinks.map(({ id, name, href, icon: Icon }) => (
        <Wrapper
          key={id}
          whileHover={animated ? bounce.animate : undefined}
          transition={bounce.transition}>
          <Link
            href={href}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center min-h-9 min-w-9 size-10 md:size-12 p-1 md:p-1.25 rounded-md border border-input bg-popover text-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-popover/90 dark:hover:text-accent dark:hover:border-accent',
              buttonClassName
            )}>
            <Icon
              className={cn('size-full', iconClassName)}
              aria-hidden="true"
            />
          </Link>
        </Wrapper>
      ))}
    </Container>
  )
}
