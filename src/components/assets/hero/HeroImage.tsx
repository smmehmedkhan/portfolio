'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { getAnimationPreset } from '@/lib/animations/registry'

const MImage = motion.create(Image)
const MDiv = motion.create('div')

export default function HeroImage() {
  const fade = getAnimationPreset('fade')
  const fadeUp = getAnimationPreset('fade-up')

  return (
    <div className="wrapper max-w-2xl">
      <MDiv className="hero-images" {...fadeUp} viewport={{ once: true }}>
        {/* Hero Image */}
        <MImage
          className="hero-image"
          src="/images/Mehmed_Khan.webp"
          alt="Mehmed Khan - Full Stack Developer"
          width={1024}
          height={1365}
          priority
          initial={fade.initial}
          whileInView={fade.whileInView}
          transition={{ ...fade.transition, delay: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Hero Canvas */}
        <svg
          className="hero-canvas"
          viewBox="0 0 675 675"
          width="675"
          height="675"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1">
          <title>Chewing gum shape</title>
          <defs>
            <linearGradient
              id="gumGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor="#fd9a00" />
              <stop offset="50%" stopColor="#7ccf00" />
              <stop offset="100%" stopColor="#00bc7d" />
            </linearGradient>
          </defs>
          <g transform="translate(337.5 337.5)">
            <path
              d="M89.9 -161.6
          C117.8 -103.5 142.6 -78.9 191.4 -36.7
          C240.3 5.6 313.2 65.5 326.5 131.2C339.7 196.9 293.3 268.3 228.9 293.4
          C164.6 318.5 82.3 297.3 -0.2 297.5
          C-82.7 297.8 -165.3 319.5 -197.8 284.1
          C-230.3 248.7 -212.6 156 -237.9 77.5
          C-263.1 -1 -331.3 -65.4 -318.4 -102.9
          C-305.5 -140.5 -211.5 -151.1 -144.9 -196.7
          C-78.4 -242.2 -39.2 -322.6 -4.1 -317
          C31 -311.3 62 -219.7 89.9 -161.6"
              fill="url(#gumGradient)"
            />
          </g>
        </svg>
      </MDiv>
    </div>
  )
}
