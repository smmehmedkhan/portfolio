'use client'

import { useMotionValueEvent, useScroll } from 'motion/react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '@/components/assets/Logo'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/modeToggle'

/**
 * Navigation bar component
 *
 * @description Main navigation component featuring logo, navigation links,
 * theme toggle, and contact CTA button
 *
 * @returns JSX element containing the navigation bar
 *
 * @example
 * ```tsx
 * <Navbar />
 * ```
 */
export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrollDirection, setScrollDirection] = useState('down')

  useMotionValueEvent(scrollY, 'change', current => {
    const previous = scrollY.getPrevious() ?? current
    const diff = current - previous
    if (diff !== 0) setScrollDirection(diff > 0 ? 'up' : 'down')
  })

  return (
    <motion.nav
      className="site-nav flex-center"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: scrollDirection === 'down' ? 1 : 0,
        y: scrollDirection === 'down' ? 0 : -100,
      }}
      transition={{ type: 'tween', duration: 0.6 }}>
      <div className="container flex-inline nav-box">
        {/* left: Site's pages */}
        <ul className="flex-inline gap-5">
          <li>
            <Logo />
          </li>
          <li>
            <Link href="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="nav-links">
              Projects
            </Link>
          </li>
        </ul>

        {/* right: Additionals */}
        <ul className="flex-inline gap-5">
          <li>
            <ModeToggle />
          </li>
          <li>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
