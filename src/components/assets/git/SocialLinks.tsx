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
}

const MDiv = motion.create('div')
export default function SocialLinks({
  className,
  buttonClassName,
  iconClassName,
  animated = true,
}: SocialLinksProps) {
  const containerAnimation = getAnimationPreset('fade-down')
  const buttonHoverAnimation = {
    y: -6,
    transition: { duration: 0.3, type: 'spring', stiffness: 300 },
  } as const

  const Container = animated ? motion.div : 'div'

  return (
    <Container
      className={cn('flex-inline gap-5 md:gap-7.5 lg:gap-10', className)}
      {...(animated && containerAnimation)}>
      {socialLinks.map(({ id, name, href, icon: Icon }) => (
        <MDiv key={id} whileHover={animated ? buttonHoverAnimation : undefined}>
          <Button
            variant="outline"
            className={cn(
              'size-8 md:size-10 lg:size-12 p-2 bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-card/90 dark:hover:text-accent dark:hover:border-accent',
              buttonClassName
            )}>
            <Link
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer">
              <Icon
                className={cn('size-6 md:size-8 lg:size-10', iconClassName)}
              />
            </Link>
          </Button>
        </MDiv>
      ))}
    </Container>
  )
}
