'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heading } from '@/components/ui/heading'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'

const MotionItem = motion.create('li')
const listItems = [
  { id: 1, label: 'About', href: '/about' },
  { id: 2, label: 'Projects', href: '/projects' },
  { id: 3, label: 'Contact', href: '/contact' },
  { id: 4, label: 'Resume', href: '/resume' },
]

export default function Resources() {
  const pathname = usePathname()
  const fade = getAnimationPreset('fade')
  const getClasses = (item: { href: string }) => {
    return pathname === item.href && 'text-amber-700 dark:text-accent'
  }

  return (
    <div className="wrapper gap-5">
      <Heading variant="title" size="lg" as="h3" animated>
        Resources
      </Heading>

      <ul className="resources">
        {listItems.map((item, index) => (
          <MotionItem
            key={item.id}
            {...fade}
            transition={{ ...fade.transition, delay: 0.2 * index }}>
            <Link href={item.href} className={cn('rs-link', getClasses(item))}>
              {item.label}
            </Link>
          </MotionItem>
        ))}
      </ul>
    </div>
  )
}
