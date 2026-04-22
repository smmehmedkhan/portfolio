'use client'

import {
  BadgeCheck,
  FileText,
  FolderKanban,
  Gem,
  HelpCircle,
  Mailbox,
  MessageCircleQuestionMark,
  ScrollText,
} from 'lucide-react'
import { motion } from 'motion/react'
import { FaBolt } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'
import type { SectionIntroProps } from '@/types'

const MotionBadge = motion.create(Badge)

const iconMap = {
  ScrollText,
  Gem,
  FolderKanban,
  BadgeCheck,
  MessageCircleQuestionMark,
  FaBolt,
  Mailbox,
  FileText,
}

export default function SectionHeader({
  badgeStyles,
  headingStyles,
  paragraphStyles,
  headingAs = 'h2',
  data,
}: SectionIntroProps) {
  const { id, icon, label, title, description } = data
  const fadeDown = getAnimationPreset('fade-down')
  const IconComponent = iconMap[icon as keyof typeof iconMap] ?? HelpCircle

  return (
    <header className="section-intro flex-box" data-id={id} data-slot={label}>
      <MotionBadge
        className={cn(
          'flex-inline',
          'size-max py-1 md:py-1.5 px-3 md:px-4 gap-1',
          badgeStyles
        )}
        {...fadeDown}>
        <span className="flex-box size-4 lg:size-5" aria-hidden="true">
          <IconComponent />
        </span>
        <Paragraph
          className="text-primary-foreground"
          variant="small"
          size="sm"
          as="span">
          {label}
        </Paragraph>
      </MotionBadge>
      <Heading
        as={headingAs}
        className={headingStyles}
        animated
        transition={{ delay: 0.2 }}>
        {title}
      </Heading>
      <Paragraph
        className={cn(`text-center ${paragraphStyles}`)}
        variant="lead"
        animated
        transition={{ delay: 0.4 }}>
        {description}
      </Paragraph>
    </header>
  )
}
