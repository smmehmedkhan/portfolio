'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAnimationPreset } from '@/lib/animations/registry'

const MDiv = motion.create('div')
const MBtn = motion.create(Button)

export function HeroButtons() {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <MDiv
      className="buttons"
      initial={fadeDown.initial}
      whileInView={fadeDown.whileInView}
      transition={{ ...fadeDown.transition, delay: 0.8 }}>
      <MBtn className="w-full sm:w-fit max-w-md">
        <Link href="/contact">Contact Me</Link>
      </MBtn>
      <MBtn className="w-full sm:w-fit max-w-md" variant="secondary">
        <Link href="/#">Resume</Link>
      </MBtn>
    </MDiv>
  )
}
