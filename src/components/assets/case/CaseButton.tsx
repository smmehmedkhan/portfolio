'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'

const MButton = motion.create(Button)

export default function CaseButton({
  project,
}: {
  project: { demoUrl?: string }
}) {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <MButton
      className="project-btn"
      variant="outline"
      initial={fadeDown.initial}
      whileInView={fadeDown.whileInView}
      transition={{ ...fadeDown.transition, delay: 0.6 }}
      asChild>
      <Link
        href={`${project?.demoUrl}`}
        target="_blank"
        rel="noopener noreferrer">
        View Project
      </Link>
    </MButton>
  )
}
