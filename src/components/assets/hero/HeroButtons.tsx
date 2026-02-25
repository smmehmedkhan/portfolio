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
      className="buttons box-border"
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay: 0.6 }}>
      <MBtn className="btn">
        <Link href="/contact">Contact Me</Link>
      </MBtn>
      <MBtn className="btn" variant="secondary">
        <Link href="/#">Resume</Link>
      </MBtn>
    </MDiv>
  )
}
