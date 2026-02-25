'use client'

import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { getAnimationPreset } from '@/lib/animations/registry'

const MDiv = motion.create('div')
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
    <MDiv
      className={getBadgeClasses(isEven)}
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay: 0.6 }}>
      {technologies.map((item, index) => (
        <MBadge
          key={item}
          className="w-fit xs:px-2 px-3 xs:py-0.5 py-1 bg-accent text-accent-foreground text-sm lg:text-nm font-medium"
          {...fadeDown}
          transition={{ ...fadeDown.transition, delay: 0.6 + 0.2 * index }}>
          {item}
        </MBadge>
      ))}
    </MDiv>
  )
}
