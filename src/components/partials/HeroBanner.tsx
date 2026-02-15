'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import HeroTitle from '@/components/ui/hero-title'
import { heroIntro } from '@/data/HeroIntro'
import { Paragraph } from '../ui/paragraph'

const MotionImage = motion.create(Image)

export default function HeroBanner() {
  const { greeting, titles, description } = heroIntro

  return (
    <header className="hero-banner flex-center">
      {/* left: Hero intros */}
      <div className="hero-intros flex-box sm:max-w-2xl">
        {/* Headings */}
        <div className="size-full max-w-md sm:max-w-full">
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(-100%)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <Heading variant={'sub-heading'} size={'xl'} animated={true}>
              {greeting}
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(-100%)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ delay: 0.4, duration: 0.6 }}>
            <Heading variant={'main-heading'} size="3xl" animated={true}>
              <span className="block md:inline lg:block 2xl:inline">I'm a</span>{' '}
              <HeroTitle titles={titles} />
            </Heading>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          className="size-full max-w-md sm:max-w-full"
          initial={{ opacity: 0, transform: 'translateY(-100%)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          <Paragraph>
            <Paragraph className="mr-2" as="span">
              ❛
            </Paragraph>
            {description}
            <Paragraph className="ml-2" as="span">
              ❜
            </Paragraph>
          </Paragraph>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="buttons"
          initial={{ opacity: 0, transform: 'translateY(-100%)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ delay: 0.8, duration: 0.6 }}>
          <Button className="w-full sm:w-fit max-w-md">
            <Link href="/contact">Contact Me</Link>
          </Button>
          <Button className="w-full sm:w-fit max-w-md" variant="secondary">
            <Link href="/#">Resume</Link>
          </Button>
        </motion.div>
      </div>

      {/* right: Hero images */}
      <div className="wrapper">
        <motion.div
          className="hero-images"
          initial={{ opacity: 0, transform: 'translateY(50%)' }}
          whileInView={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: { duration: 0.8, ease: 'easeIn' },
          }}>
          {/* Hero Image */}
          <MotionImage
            className="hero-image"
            src="/images/Mehmed_Khan.webp"
            alt="Mehmed Khan - Full Stack Developer"
            width={1024}
            height={1365}
            priority
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 1.2, duration: 0.8, ease: 'easeIn' },
            }}
          />

          {/* Hero Canvas */}
          <motion.svg
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
          </motion.svg>
        </motion.div>
      </div>
    </header>
  )
}
