'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'

const MButton = motion.create(Button)

export default function ReadMore() {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <MButton
      className="w-full lg:w-fit"
      variant="outline"
      initial={fadeDown.initial}
      whileInView={fadeDown.whileInView}
      transition={{ ...fadeDown.transition, delay: 0.6 }}
      viewport={{ amount: 0.6 }}
      asChild>
      <Link href="/about">Read More</Link>
    </MButton>
  )
}
