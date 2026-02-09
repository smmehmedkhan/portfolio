import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/assets/Logo'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from '@/components/ui/theme-switcher'
import { navLinks } from '@/data/nav-links'

export default function Hamburger() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: Intentionaly need pathname as dependencies.
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} modal>
      <Dialog.Trigger className="w-max flex md:hidden" asChild>
        <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="size-6" size={20} />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="hamburger">
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
          <motion.div
            className="hamburger-content w-full min-h-dvh p-2 flex flex-col gap-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.6 }}>
            {/* Dialog Close Button */}
            <Dialog.Close className="hamburger-header" asChild>
              <Button
                className="size-fit"
                variant="ghost"
                onClick={() => setMobileMenuOpen(false)}>
                <X className="size-6" size={20} />
              </Button>
            </Dialog.Close>

            <Logo />

            {/* Mobile Navigation Links */}
            <menu className="hamburger-links">
              {navLinks.map(({ id, href, label }, index) => (
                <li
                  key={id}
                  tabIndex={index}
                  className="not-last:border-b border-border">
                  <Link
                    href={href}
                    className="hamburger-link text-center dark:hover:text-accent dark:hover:bg-accent/30 border border-transparent dark:hover:border-accent">
                    {label}
                  </Link>
                </li>
              ))}
            </menu>

            {/* Theme switcher */}
            <ThemeSwitcher />
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
