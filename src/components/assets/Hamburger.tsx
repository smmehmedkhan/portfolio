import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/assets/Logo'
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
import ThemeSwitcher from '@/components/ui/theme-switcher'
import { navLinks } from '@/data/nav-links'
import SocialLinks from './SocialLinks'

export default function Hamburger() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
      <DrawerTrigger className="w-max flex md:hidden" asChild>
        <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="size-6" size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="drawer-content h-full max-h-svh flex flex-col gap-10">
        {/* Drawer Header */}
        <DrawerHeader className="drawer-header">
          <DrawerClose asChild>
            <Button
              className="size-fit"
              variant="ghost"
              onClick={() => setMobileMenuOpen(false)}>
              <X className="size-6" size={24} />
            </Button>
          </DrawerClose>
          <DrawerTitle className="sr-only">Hamburger Menu</DrawerTitle>
        </DrawerHeader>

        {/* Brand Logo */}
        <Logo />

        {/* Mobile Navigation Links */}
        <menu className="links-menu">
          {navLinks.map(({ id, href, label }) => (
            <li key={id} className="link-item">
              <Link href={href} className="link">
                {label}
              </Link>
            </li>
          ))}
        </menu>

        {/* Theme switcher */}
        <ThemeSwitcher />

        {/* Drawer Footer */}
        <DrawerFooter className="drawer-footer flex-inline">
          <SocialLinks
            className="items-center flex-wrap gap-2 sm:gap-2.5 md:gap-3"
            buttonClassName="size-8"
            iconClassName="size-6"
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
