'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { SectionInroType } from '@/data/sectionInros'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'

const MotionBadge = motion(Badge)

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
        className={cn(`badge flex-inline ${badgeStyles}`)}
        initial={fadeDown.initial}
        whileInView={fadeDown.whileInView}
        transition={fadeDown.transition}
        viewport={{ amount: 0.5 }}>
        {icon}
        <Paragraph className="badge-typo" variant="small" as="span">
          {slot}
        </Paragraph>
      </MotionBadge>
      <Heading
        className={headingStyles}
        variant={'primary'}
        animated
        initial={fadeDown.initial}
        whileInView={fadeDown.whileInView}
        transition={{ ...fadeDown.transition, delay: 0.2 }}>
        {title}
      </Heading>
      <Paragraph
        className={cn(`text-center ${paragraphStyles}`)}
        variant="lead"
        animated
        initial={fadeDown.initial}
        whileInView={fadeDown.whileInView}
        transition={{ ...fadeDown.transition, delay: 0.2 * 2 }}>
        {description}
      </Paragraph>
    </div>
  )
}
