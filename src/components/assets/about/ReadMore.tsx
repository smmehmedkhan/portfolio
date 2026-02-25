'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'

const MButton = motion.create(Button)

export default function ReadMore() {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <MButton
      className="w-full max-w-lg lg:w-fit"
      variant="outline"
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay: 0.6 }}
      asChild>
      <Link href="/about">
        <span>Read More</span>
        <ArrowUpRight />
      </Link>
    </MButton>
  )
}
