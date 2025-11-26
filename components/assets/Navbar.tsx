'use client'

// import { useMotionValueEvent, useScroll } from 'motion/react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
// import { useState } from 'react'
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
  // const { scrollY } = useScroll()
  // const [scrollDirection, setScrollDirection] = useState('down')

  // useMotionValueEvent(scrollY, 'change', current => {
  //   const diff = current - scrollY.getPrevious()
  //   setScrollDirection(diff > 0 ? 'down' : 'up')
  // })

  /**
   * Handle navigation to contact page
   *
   * @description Redirects user to contact page when CTA button is clicked
   */
  function handleClick(): void {
    window.location.href = '/contact'
  }

  return (
    <motion.nav>
      <div className="max-w-[1536] w-full h-full flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <h1 className="text-xl font-black">Mehmed Khan</h1>
          </Link>
        </div>
        <ul className="flex items-center gap-4">
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
              variant="secondary"
              size="lg"
              className="w-fit bg-red-500 hover:bg-red-600 cursor-pointer transition-all duration-300"
              onClick={handleClick}>
              Contact Me
            </Button>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}
