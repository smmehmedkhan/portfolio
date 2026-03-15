'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Heading } from '@/components/ui/heading'
import { getAnimationPreset } from '@/lib/animations/registry'

const listItems = [
  { id: 1, label: 'About', href: '/about' },
  { id: 2, label: 'Projects', href: '/projects' },
  { id: 3, label: 'Contact', href: '/contact' },
  { id: 4, label: 'Resume', href: '/resume' },
]

export default function Resources() {
  const fade = getAnimationPreset('fade')
  const MotionItem = motion.create('li')

  return (
    <div className="wrapper gap-5">
      <Heading variant="title" size="lg" animated>
        Resources
      </Heading>

      <ul className="resources">
        {listItems.map((item, index) => (
          <MotionItem
            key={item.id}
            {...fade}
            transition={{ ...fade.transition, delay: 0.2 * index }}>
            <Link
              href={item.href}
              className="text-md text-muted-foreground hover:text-accent">
              {item.label}
            </Link>
          </MotionItem>
        ))}
      </ul>
    </div>
  )
}
