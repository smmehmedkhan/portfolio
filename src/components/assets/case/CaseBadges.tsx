'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { getAnimationPreset } from '@/lib/animations/registry'

const MBadge = motion.create(Badge)

export default function CaseBadges({
  isEven,
  technologies,
}: {
  isEven: boolean
  technologies: string[]
}) {
  const fadeDown = getAnimationPreset('fade-down')

  const getBadgeClasses = (isEven: boolean) => {
    const justify = isEven ? 'lg:justify-start' : 'lg:justify-end'
    return `badge-container ${justify}`
  }

  return (
    <div className={getBadgeClasses(isEven)}>
      {technologies.map((item, index) => (
        <MBadge
          key={item}
          className="w-fit xs:px-2 px-3 xs:py-0.5 py-1 bg-accent text-accent-foreground text-sm lg:text-nm font-medium"
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.2 * index }}
          viewport={{ amount: 0.6 }}>
          {item}
        </MBadge>
      ))}
    </div>
  )
}
