'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { getAnimationPreset } from '@/lib/animations/registry'

const MotionImage = motion.create(Image)

export default function AboutAvater() {
  const fade = getAnimationPreset('fade-instant')

  return (
    <div className="wrapper about-avater">
      <MotionImage
        className="size-full max-w-lg object-contain"
        src="/icons/undraw_programming.svg"
        alt="Photo"
        width={300}
        height={300}
        {...fade}
        transition={{ ...fade.transition, delay: 0.4 }}
      />
    </div>
  )
}
