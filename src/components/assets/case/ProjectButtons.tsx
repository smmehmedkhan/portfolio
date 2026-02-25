'use client'

import { Link2Icon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'
import type { ProjectBtnTypes } from '@/types'

const MButton = motion.create(Button)

export default function ProjectButtons({
  isEven,
  projectUrl,
  sourceUrl,
}: ProjectBtnTypes) {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-center gap-5',
        !isEven && 'md:flex-row-reverse'
      )}>
      <MButton
        className="project-btn"
        variant="outline"
        {...fadeDown}
        transition={{ ...fadeDown.transition, delay: 0.8 }}
        asChild>
        <Link href={`${projectUrl}`}>
          <span>Visit Site</span>
          <Link2Icon />
        </Link>
      </MButton>
      <MButton
        className="project-btn"
        variant="outline"
        {...fadeDown}
        transition={{ ...fadeDown.transition, delay: 1 }}
        asChild>
        <Link href={`${sourceUrl}`}>
          <FaGithub />
          <span>Source Code</span>
        </Link>
      </MButton>
    </div>
  )
}
