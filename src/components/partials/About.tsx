'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import SiteHeadings from '@/components/ui/SiteHeadings'

// const MotionImage = motion.create(Image)

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
export default function About() {
  return (
    <section className="about flex-center">
      <div className="container flex-box about-outer">
        <SiteHeadings className="secondary-headings">
          A bit about me
        </SiteHeadings>

        <div className="about-inner flex-inline gap-20">
          <div className="wrapper min-h-80 bg-muted">
            {/* <MotionImage
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', duration: 0.8 },
              }}
              src="/avatars/cool-guy-avatar.svg"
              alt="Mehmed Khan - Full Stack Developer"
              width={340}
              height={340}
            /> */}
          </div>
          <div className="flex-box about-contents">
            <motion.p
              initial={{ opacity: 0, transform: 'translateY(-100%)' }}
              whileInView={{
                opacity: 1,
                transform: 'translateY(0%)',
                transition: { duration: 0.5 },
              }}>
              I'm a passionate Full-Stack Engineer with expertise in the MERN
              stack, specializing in building modern, responsive, and scalable
              web applications. My journey in web development started with a
              curiosity about how things work on the internet, and it has
              evolved into a deep passion for creating exceptional digital
              experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, transform: 'translateY(-100%)' }}
              whileInView={{
                opacity: 1,
                transform: 'translateY(0%)',
                transition: { delay: 0.5, duration: 0.5 },
              }}>
              I excel at crafting beautiful, eye-catching frontend interfaces
              using React and Next.js, while also building robust, secure, and
              enterprise-grade APIs on the backend. My approach combines
              creativity with technical excellence, ensuring that every project
              not only looks great but also performs flawlessly.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, transform: 'translateY(-100%)' }}
              whileInView={{
                opacity: 1,
                transform: 'translateY(0%)',
                transition: { delay: 1, duration: 0.5 },
              }}>
              When I'm not coding, I'm continuously learning about the latest
              web technologies, DevOps practices, and security best practices to
              stay at the forefront of modern web development.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
