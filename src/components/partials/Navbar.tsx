'use client'

import { FilesIcon } from 'lucide-react'
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Hamburger from '@/components/assets/nav/Hamburger'
import Logo from '@/components/assets/nav/Logo'
import { Button } from '@/components/ui/button'
import ThemeToggler from '@/components/ui/theme-toggler'
import { navLinks } from '@/data/nav-links'
import { cn } from '@/lib/utils'

const NAVBAR_TOGGLE_OFFSET = 12
type ScrollDirection = 'up' | 'down' | null

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
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const hidden = useMotionValue(0)
  const lastScrollY = useRef(0)
  const directionStartY = useRef(0)
  const lastDirection = useRef<ScrollDirection>(null)
  const isHidden = useRef(false)

  useEffect(() => {
    const initialScrollY =
      typeof window === 'undefined'
        ? scrollY.get()
        : (document.scrollingElement?.scrollTop ?? window.scrollY)

    lastScrollY.current = initialScrollY
    directionStartY.current = initialScrollY
    lastDirection.current = null
    isHidden.current = hidden.get() === 1

    return scrollY.on('change', current => {
      const previousScrollY = lastScrollY.current
      const diff = current - previousScrollY
      lastScrollY.current = current

      // Always show navbar at top
      if (current <= 0) {
        directionStartY.current = 0
        lastDirection.current = null

        if (isHidden.current) {
          isHidden.current = false
          animate(hidden, 0, {
            duration: 0.3,
            ease: 'easeInOut',
          })
        }
        return
      }

      if (diff === 0) return

      const direction: ScrollDirection = diff > 0 ? 'down' : 'up'

      if (direction !== lastDirection.current) {
        lastDirection.current = direction
        directionStartY.current = previousScrollY
      }

      const distanceInDirection = Math.abs(current - directionStartY.current)
      if (distanceInDirection < NAVBAR_TOGGLE_OFFSET) return

      const shouldHide = direction === 'down'
      if (shouldHide !== isHidden.current) {
        isHidden.current = shouldHide
        animate(hidden, shouldHide ? 1 : 0, {
          duration: 0.3,
          ease: 'easeInOut',
        })
      }
    })
  }, [scrollY, hidden])

  const navY = useTransform(hidden, [0, 1], ['0%', '-110%'])
  const navOpacity = useTransform(hidden, [0, 1], [1, 0])

  const getClasses = (item: { href: string }) => {
    return `hover:text-accent-foreground ${pathname === item.href ? 'text-amber-700 dark:text-accent' : ''}`
  }

  return (
    <motion.nav
      className="site-navigation flex-center"
      style={{ y: navY, opacity: navOpacity }}>
      <motion.div className="container flex-inline navigation">
        {/* Left: Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <motion.ul className="nav-link-lists">
          {navLinks.map(({ id, href, label }) => (
            <motion.li key={id}>
              <Link
                href={href}
                className={cn('nav-link nav-link-dark', getClasses({ href }))}>
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right: Theme Toggle + Mobile Menu */}
        <motion.div className="hidden md:flex w-max items-center gap-4">
          <ThemeToggler />
          <Button variant="outline" asChild>
            <Link href="/resume">
              <FilesIcon />
              <span>Resume</span>
            </Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <Hamburger />
      </motion.div>
    </motion.nav>
  )
}
