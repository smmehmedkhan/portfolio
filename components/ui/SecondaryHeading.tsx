import * as motion from 'motion/react-client'

type SecondaryHeadingProps = {
  className?: string
  initial?: Record<string, string | number>
  whileInView?: Record<string, string | number>
  animate?: Record<string, string | number>
  transition?: Record<string, string | number>
  children: React.ReactNode
}

/**
 * Generic animated heading.
 * Usage: <SecondaryHeading tag="h1" className="secondary-heading">Title</SecondaryHeading>
 */
export default function SecondaryHeading({
  className,
  initial,
  whileInView,
  animate,
  transition,
  children,
}: SecondaryHeadingProps) {
  return (
    <motion.h2
      className={`secondary-heading ${className}`}
      initial={
        initial ?? {
          opacity: 0,
          transform: 'translateX(100%)',
        }
      }
      whileInView={
        whileInView ?? {
          opacity: 1,
          transform: 'translateX(0)',
          transition: { type: 'spring', duration: 0.6 },
        }
      }
      animate={animate}
      transition={transition}>
      {children}
    </motion.h2>
  )
}
