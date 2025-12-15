import * as motion from 'motion/react-client'

type PrimaryHeadingProps = {
  className?: string
  initial?: Record<string, string | number>
  whileInView?: Record<string, string | number>
  animate?: Record<string, string | number>
  transition?: Record<string, string | number>
  children: React.ReactNode
}

/**
 * Generic animated heading.
 * Usage: <PrimaryHeading tag="h1" className="primary-heading">Title</PrimaryHeading>
 */
export default function PrimaryHeading({
  className,
  initial,
  whileInView,
  animate,
  transition,
  children,
}: PrimaryHeadingProps) {
  return (
    <motion.h2
      className={`primary-heading ${className}`}
      initial={
        initial ?? {
          opacity: 0,
          transform: 'translateX(-100%)',
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
