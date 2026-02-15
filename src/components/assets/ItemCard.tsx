'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { getAnimationPreset } from '@/lib/animations/registry'
import type { SkillItem } from '@/types'
import { Heading } from '../ui/heading'
import { Paragraph } from '../ui/paragraph'

interface ItemCardProps {
  item: SkillItem
  index: number
}

export default function ItemCard({ item, index }: ItemCardProps) {
  const fadeDown = getAnimationPreset('fade-down')
  const pulse = getAnimationPreset('pulse')

  return (
    <motion.li
      initial={fadeDown.initial}
      whileInView={fadeDown.whileInView}
      transition={{
        ...fadeDown.transition,
        delay: 0.2 * index,
      }}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <motion.div
            initial={pulse.initial}
            whileInView={pulse.whileInView}
            whileHover={pulse.animate}
            transition={pulse.transition}>
            <Button
              variant="outline"
              className="size-12 sm:size-14 p-2 rounded-xl">
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="size-8 sm:size-10 lg:size-12 object-contain"
                />
              </Link>
            </Button>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent className="size-full xs:max-w-60 sm:max-w-sm max-w-2xl flex flex-col gap-2">
          <Heading
            variant="title-heading"
            className="text-accent font-semibold flex-inline gap-2"
            size="md">
            <span>@</span>
            {item.title}
          </Heading>
          <Paragraph>{item.description}</Paragraph>
          <Paragraph variant="muted" className="mt-1 text-xs">
            Joined {item.joined}
          </Paragraph>
        </HoverCardContent>
      </HoverCard>
    </motion.li>
  )
}
