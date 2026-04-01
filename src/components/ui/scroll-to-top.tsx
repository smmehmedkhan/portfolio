'use client'

import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ScrollToTop({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const threshold = document.body.scrollHeight * 0.5
      setVisible(window.scrollY > threshold)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className={cn(
            'fixed bottom-6 right-6 z-50 flex-center size-10 rounded-full',
            'bg-primary text-primary-foreground shadow-lg',
            'hover:bg-primary/90 transition-colors duration-200 cursor-pointer',
            className
          )}>
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
