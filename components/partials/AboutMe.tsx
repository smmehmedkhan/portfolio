'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import SecondaryHeading from '../ui/SecondaryHeading'

const MotionImage = motion(Image)

/**
 * AboutMe component displaying short summary of about page
 *
 * @description About me component dispay a short summary of about page,
 * with additional images and a CTA button to navigate about page.
 *
 * @returns JSX element with about section and a CTA button
 *
 * @example
 * ```tsx
 * <AboutMe />
 * ```
 */
export default function AboutMe() {
  return (
    <section className="about">
      <div className="flex-box container">
        <SecondaryHeading>A bit about me</SecondaryHeading>
        <div className="flex-box-inline">
          <div className="w-full flex-box">
            <MotionImage
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', duration: 0.8 },
              }}
              src="/avatars/cool-guy-avatar.svg"
              alt="file"
              width={340}
              height={340}
            />
          </div>
          <div className="w-full flex-box gap-6">
            <motion.p
              className="text-center text-xl"
              initial={{ opacity: 0, transform: 'translateY(-100%)' }}
              whileInView={{
                opacity: 1,
                transform: 'translateY(0%)',
                transition: { duration: 0.5 },
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              similique provident voluptates repellat officiis fugit soluta
              illum eligendi dolorem quasi!
            </motion.p>
            <motion.p
              className="text-center text-xl"
              initial={{ opacity: 0, transform: 'translateY(-100%)' }}
              whileInView={{
                opacity: 1,
                transform: 'translateY(0%)',
                transition: { delay: 0.5, duration: 0.5 },
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
              delectus. Repellat ratione numquam vel inventore veritatis quos
              ipsum cupiditate, mollitia debitis aut aspernatur tempore
              praesentium.
            </motion.p>
            <motion.p
              className="text-center text-xl"
              initial={{ opacity: 0, transform: 'translateY(-100%)' }}
              whileInView={{
                opacity: 1,
                transform: 'translateY(0%)',
                transition: { delay: 1, duration: 0.5 },
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              dignissimos placeat eligendi, accusamus voluptatum atque?
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
