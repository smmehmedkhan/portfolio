'use client'

import { useMotionValueEvent, useScroll } from 'motion/react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { ModeToggle } from '../ui/modeToggle'

/**
 * Navigtion bar component
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
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: scrollDirection === 'down' ? 1 : 0,
        y: scrollDirection === 'down' ? 0 : -100,
      }}
      transition={{ type: 'tween', duration: 0.6 }}>
      <div className="flex-box-inline container justify-between">
        <div className="flex-box-inline justify-start">
          <Link href="/">
            <h3 className="w-fit text-xl font-black">Mehmed Khan</h3>
          </Link>
        </div>
        <ul className="flex-box-inline justify-end gap-5">
          <li>
            <ModeToggle />
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
          <li>
            <Button
              size="lg"
              onClick={() => {
                window.location.href = '/contact'
              }}>
              Contact Me
            </Button>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
