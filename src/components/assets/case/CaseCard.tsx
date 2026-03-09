'use client'

import { motion, type Variants } from 'motion/react'
import Image from 'next/image'
import { getAnimationPreset } from '@/lib/animations/registry'
import type { CaseCardProps } from '@/types'

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const Wrapper = motion.create('div')
const MotionImage = motion.create(Image)

export default function CaseCard({ image, name }: CaseCardProps) {
  const fade = getAnimationPreset('fade')

  return (
    <div className="wrapper">
      <Wrapper
        className={'case-card-container flex-center'}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}>
        {/* Splash Canvas */}
        <svg
          className="splash"
          viewBox="0 0 500 450"
          width="500"
          height="450"
          preserveAspectRatio="xMidYMid meet">
          <title>Splash canvas</title>
          <defs>
            <linearGradient
              id="splashGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor="#fd9a00" />
              <stop offset="50%" stopColor="#7ccf00" />
              <stop offset="100%" stopColor="#00bc7d" />
            </linearGradient>
          </defs>
          <path
            d="M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
            fill="url(#splashGradient)"
          />
        </svg>

        {/* Project Image */}
        <Wrapper className="case-card flex-box" variants={cardVariants}>
          <MotionImage
            className="case-card-image"
            src={image}
            alt={name}
            width={300}
            height={300}
            {...fade}
            transition={{ ...fade.transition, delay: 0.4 }}
          />
        </Wrapper>
      </Wrapper>
    </div>
  )
}
