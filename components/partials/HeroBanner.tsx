'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { heroIntro } from '@/constants/HeroIntro'
import { Button } from '../ui/button'

const MotionButton = motion(Button)
const MotionImage = motion(Image)

/**
 * Hero banner component displaying the main introduction section
 *
 * @description Main landing section featuring personal introduction,
 * professional title, description, and call-to-action button with avatar image
 *
 * @returns JSX element containing the hero section
 *
 * @example
 * ```tsx
 * <HeroBanner />
 * ```
 */
export default function HeroBanner() {
  const { greeting, titles, description } = heroIntro
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(prev => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <header className="container hero-banner">
      <motion.div
        className="flex-box hero-intro"
        initial={{ opacity: 0, transform: 'translateX(-100%)' }}
        whileInView={{
          opacity: 1,
          transform: 'translateX(0%)',
          transition: { duration: 0.8, ease: 'easeOut' },
        }}>
        <h2 className="text-muted-foreground text-2xl font-bold mb-2">
          {greeting}
        </h2>
        <h1 className="text-4xl font-semibold my-4">
          I'm a{' '}
          <motion.span
            key={currentTitle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="hero-text">
            {titles[currentTitle]}
          </motion.span>
        </h1>
        <p className="text-muted-foreground mb-10">
          <span className="font-bold text-2xl mr-2 text-primary">❛</span>
          {description}
          <span className="font-bold text-2xl ml-2 text-primary">❜</span>
        </p>
        <MotionButton
          whileHover={{
            transform: 'translateY(-10%)',
          }}
          className="shadow-md hover:shadow-lg shadow-primary/50"
          size="lg"
          onClick={() => {
            window.location.href = '/contact'
          }}>
          Contact Me
        </MotionButton>
      </motion.div>
      <motion.div
        className="flex-box hero-image"
        initial={{ opacity: 0, transform: 'translateY(100%)' }}
        whileInView={{
          opacity: 1,
          transform: 'translateY(0%)',
          transition: { duration: 0.8, ease: 'easeOut' },
        }}>
        <MotionImage
          src="/images/user-avatar.webp"
          alt="User avatar"
          width={320}
          height={480}
          initial={{ opacity: 0, transform: 'translateX(100%)' }}
          whileInView={{
            opacity: 1,
            transform: 'translateX(0%)',
            transition: { duration: 0.8, ease: 'easeOut' },
          }}
        />
        <motion.svg
          initial={{ opacity: 0, transform: 'translateY(100%)' }}
          whileInView={{
            opacity: 1,
            transform: 'translateY(0%)',
            transition: { duration: 0.8, ease: 'easeOut' },
          }}
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
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <g transform="translate(337.5 337.5)">
            <path
              d="M89.9 -161.6C117.8 -103.5 142.6 -78.9 191.4 -36.7C240.3 5.6 313.2 65.5 326.5 131.2C339.7 196.9 293.3 268.3 228.9 293.4C164.6 318.5 82.3 297.3 -0.2 297.5C-82.7 297.8 -165.3 319.5 -197.8 284.1C-230.3 248.7 -212.6 156 -237.9 77.5C-263.1 -1 -331.3 -65.4 -318.4 -102.9C-305.5 -140.5 -211.5 -151.1 -144.9 -196.7C-78.4 -242.2 -39.2 -322.6 -4.1 -317C31 -311.3 62 -219.7 89.9 -161.6"
              fill="url(#gumGradient)"
            />
          </g>
        </motion.svg>
      </motion.div>
    </header>
  )
}
