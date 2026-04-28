'use client'

import { FilesIcon } from 'lucide-react'
import { motion, useTransform } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Hamburger from '@/components/assets/nav/Hamburger'
import Logo from '@/components/assets/nav/Logo'
import { Button } from '@/components/ui/button'
import ThemeToggler from '@/components/ui/theme-toggler'
import { navLinks } from '@/data/nav-links'
import { useNavbarVisibility } from '@/hooks/useNavbarVisibility'
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
  const hidden = useNavbarVisibility()
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
