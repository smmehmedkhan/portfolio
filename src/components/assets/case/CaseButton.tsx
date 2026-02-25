'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'

const MButton = motion.create(Button)

export default function CaseButton({ data }: { data: { id: number } }) {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper">
      <MButton
        className="project-btn"
        variant="outline"
        {...fadeDown}
        transition={{ ...fadeDown.transition, delay: 0.6 }}
        asChild>
        <Link href={`/projects#project-${data.id}`}>
          <span>View Project</span>
          <ArrowUpRight />
        </Link>
      </MButton>
    </div>
  )
}
