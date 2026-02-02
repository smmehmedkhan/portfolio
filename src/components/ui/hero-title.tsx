'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function HeroTitle({
  titles,
  typingSpeed = 80,
  deletingSpeed = 20,
  pause = 2000,
}: {
  titles: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
}) {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayLength, setDisplayLength] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!titles || titles.length === 0) return
    const full = titles[titleIndex]
    let timer: ReturnType<typeof setTimeout>

    // Typing (left → right) when not deleting, then pause, then delete in reverse
    if (isDeleting) {
      if (displayLength > 0) {
        timer = setTimeout(
          () => setDisplayLength(displayLength - 1),
          deletingSpeed
        )
      } else {
        setIsDeleting(false)
        setTitleIndex(prev => (prev + 1) % titles.length)
      }
    } else {
      if (displayLength < full.length) {
        timer = setTimeout(
          () => setDisplayLength(displayLength + 1),
          typingSpeed
        )
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause)
      }
    }

    return () => clearTimeout(timer)
  }, [
    displayLength,
    isDeleting,
    titleIndex,
    titles,
    typingSpeed,
    deletingSpeed,
    pause,
  ])

  const fullText = titles[titleIndex] || ''
  // reveal the left side so text appears left → right
  const visible = fullText.slice(0, displayLength)

  return (
    <div className="flex-inline" aria-live="polite">
      <motion.span
        initial={false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.08 }}
        className="whitespace-nowrap">
        {visible}
      </motion.span>
      <motion.span
        aria-hidden
        className="flex-center size-fit"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}>
        <span className="hero-caret" />
      </motion.span>
    </div>
  )
}
