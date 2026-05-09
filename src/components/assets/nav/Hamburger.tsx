'use client'

import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import SocialLinks from '@/components/assets/git/SocialLinks'
import Logo from '@/components/assets/nav/Logo'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Heading } from '@/components/ui/heading'
import ThemeSwitcher from '@/components/ui/theme-switcher'
import { hamburgerLinks } from '@/data/nav-links'
import { getAnimationPreset } from '@/lib/animations/registry'

const MenuItem = motion.create('li')

export default function Hamburger() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const fade = getAnimationPreset('fade')

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: Intentionaly need pathname as dependencies.
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <Drawer
      open={mobileMenuOpen}
      onOpenChange={setMobileMenuOpen}
      direction="right">
      <DrawerTrigger asChild>
        <Button
          className="flex md:hidden p-0!"
          variant="ghost"
          onClick={() => setMobileMenuOpen(true)}
          name="Hamburger menu"
          aria-label="Hamburger menu">
          <Menu className="size-9" size={28} />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="drawer-content h-full max-h-svh flex flex-col gap-10"
        aria-describedby={undefined}>
        {/* Drawer Header */}
        <DrawerHeader className="drawer-header">
          <DrawerClose asChild>
            <Button
              className="size-fit bg-transparent p-0!"
              variant="ghost"
              onClick={() => setMobileMenuOpen(false)}
              name="Close menu"
              aria-label="Close menu">
              <X className="size-9" size={28} />
            </Button>
          </DrawerClose>
          <DrawerTitle className="sr-only">Hamburger Menu</DrawerTitle>
        </DrawerHeader>

        {/* Brand Logo */}
        <Logo />

        {/* Mobile Navigation Links */}
        <menu className="links-menu">
          {hamburgerLinks.map(({ id, href, label }, index) => (
            <MenuItem
              key={id}
              className="link-item"
              {...fade}
              transition={{ ...fade.transition, delay: 0.2 * index }}>
              <Link
                href={href}
                className={`link ${pathname === href ? 'text-amber-700 dark:text-accent' : ''}`}>
                {label}
              </Link>
            </MenuItem>
          ))}
        </menu>

        {/* Theme switcher */}
        <ThemeSwitcher />

        {/* Drawer Footer */}
        <DrawerFooter className="drawer-footer flex-center">
          <Heading variant="title" size="nm" animated>
            Follow Me
          </Heading>
          <SocialLinks
            className="items-center flex-wrap gap-2 sm:gap-2.5 md:gap-3"
            buttonClassName="size-9"
            iconClassName="size-7"
            animated
            delay={0.2}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
