'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { SectionInroType } from '@/data/sectionInros'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'

const MotionBadge = motion.create(Badge)

type SectionInroProps = {
  data: SectionInroType
  icon: React.ReactNode
  badgeStyles?: string
  headingStyles?: string
  paragraphStyles?: string
}

export default function SectionInro({
  badgeStyles,
  headingStyles,
  paragraphStyles,
  icon,
  data,
}: SectionInroProps) {
  const { id, slot, title, description } = data
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="section-intro flex-box" data-slot={slot} data-id={id}>
      <MotionBadge
        className={cn(
          'flex-inline',
          'size-max py-1 md:py-1.5 px-3 md:px-4 gap-1',
          badgeStyles
        )}
        {...fadeDown}>
        <span className="flex-box size-4 lg:size-5" aria-hidden="true">
          {icon}
        </span>
        <Paragraph
          className="text-primary-foreground"
          variant="small"
          size="sm"
          as="span">
          {slot}
        </Paragraph>
      </MotionBadge>
      <Heading className={headingStyles} animated transition={{ delay: 0.2 }}>
        {title}
      </Heading>
      <Paragraph
        className={cn(`text-center ${paragraphStyles}`)}
        variant="lead"
        animated
        transition={{ delay: 0.4 }}>
        {description}
      </Paragraph>
    </div>
  )
}
