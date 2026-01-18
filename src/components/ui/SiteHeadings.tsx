'use client'

import * as motion from 'motion/react-client'

type SiteHeadingsProps = {
  className?: string
  initial?: Record<string, string | number>
  whileInView?: Record<string, string | number>
  animate?: Record<string, string | number>
  transition?: Record<string, string | number>
  children: React.ReactNode
}

/**
 * Generic animated heading.
 * Usage: <SiteHeadings tag="h1" className="primary-heading">Title</SiteHeadings>
 */
export default function SiteHeadings({
  className,
  initial,
  whileInView,
  animate,
  transition,
  children,
}: SiteHeadingsProps) {
  return (
    <motion.h2
      className={`site-headings ${className}`}
      initial={
        initial ?? {
          opacity: 0,
          transform: 'translateY(-100%)',
        }
      }
      whileInView={
        whileInView ?? {
          opacity: 1,
          transform: 'translateY(0)',
          transition: { type: 'spring', duration: 0.6 },
        }
      }
      animate={animate}
      transition={transition}>
      {children}
    </motion.h2>
  )
}
