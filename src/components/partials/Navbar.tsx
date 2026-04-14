'use client'

import { FilesIcon } from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Hamburger from '@/components/assets/nav/Hamburger'
import Logo from '@/components/assets/nav/Logo'
import { Button } from '@/components/ui/button'
import ThemeToggler from '@/components/ui/theme-toggler'
import { navLinks } from '@/data/nav-links'
import { cn } from '@/lib/utils'

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
  const [scrollDirection, setScrollDirection] = useState('down')

  const handleScrollChange = (current: number) => {
    const previous = scrollY.getPrevious() ?? current
    const diff = current - previous
    if (diff !== 0) setScrollDirection(diff > 0 ? 'up' : 'down')
  }

  useMotionValueEvent(scrollY, 'change', handleScrollChange)

  const getClasses = (item: { href: string }) => {
    return `hover:text-accent-foreground ${pathname === item.href ? 'text-amber-700 dark:text-accent' : ''}`
  }

  return (
    <motion.nav
      className="site-navigation flex-center"
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: scrollDirection === 'down' ? 1 : 0,
        y: scrollDirection === 'down' ? 0 : -100,
      }}
      transition={{ type: 'tween', duration: 0.6 }}>
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
