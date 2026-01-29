'use client'

import { useMotionValueEvent, useScroll } from 'motion/react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '@/components/assets/Logo'
import ThemeToggler from '@/components/ui/theme-toggler'

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
      className="flex-center"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: scrollDirection === 'down' ? 1 : 0,
        y: scrollDirection === 'down' ? 0 : -100,
      }}
      transition={{ type: 'tween', duration: 0.6 }}>
      <div className="container flex-inline navigation">
        {/* left: Site's pages */}
        <div className="flex-inline gap-5">
          {/* Left: Logo */}
          <Logo />

          {/* Right: Navigation links */}
          <ul className="flex-inline">
            <li>
              <Link href="/about" className="nav-links nav-link-dark">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="nav-links nav-link-dark">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-links nav-link-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* right: Additionals */}
        <div>
          <ThemeToggler />
        </div>
      </div>
    </motion.nav>
  )
}
