import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
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
    <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <Dialog.Trigger className="w-max flex md:hidden" asChild>
        <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="size-6" size={20} />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="hamburger w-70 sm:w-96 md:w-120 h-svh">
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
          <motion.div
            className="hamburger-content"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.6 }}>
            {/* Dialog Close Button */}
            <Dialog.Close className="hamburger-header" asChild>
              <Button variant="ghost" onClick={() => setMobileMenuOpen(false)}>
                <X className="size-6" size={20} />
              </Button>
            </Dialog.Close>

            {/* Mobile Navigation Links */}
            <menu className="hamburger-links">
              {navLinks.map(({ id, href, label }, index) => (
                <li
                  key={id}
                  tabIndex={index}
                  className="not-last:border-b border-border">
                  <Link
                    href={href}
                    className="w-full font-medium text-center py-3 hover:bg-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </menu>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
