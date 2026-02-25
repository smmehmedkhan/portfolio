'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import type { SkillCardProps } from '@/types'

const MLi = motion.create('li')
const MDiv = motion.create('div')

export default function SkillCard({ item, index }: SkillCardProps) {
  const fadeDown = getAnimationPreset('fade-down')
  const pulse = getAnimationPreset('pulse')

  return (
    <MLi
      {...fadeDown}
      transition={{ ...fadeDown.transition, delay: 0.2 * index }}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button
            asChild
            variant="outline"
            className="size-12 sm:size-14 p-2 rounded-xl">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <MDiv {...pulse}>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="size-8 sm:size-10 lg:size-12 object-contain"
                />
              </MDiv>
            </Link>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="size-full xs:max-w-60 sm:max-w-sm max-w-2xl flex flex-col gap-2">
          <Heading
            variant="title"
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
    </MLi>
  )
}
