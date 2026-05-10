'use client'

import { motion } from 'motion/react'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import { cn } from '@/lib/utils'
import type { ProjectFeaturesProps } from '@/types'

const MotionItem = motion.create('li')

export default function ProjectFeatures({
  page = false,
  features,
  isEven,
}: ProjectFeaturesProps) {
  const selectedFeatures = features.slice(0, 3)
  const fade = getAnimationPreset('fade')
  const items = page ? features : selectedFeatures

  return (
    <ul className="size-full list-disc list-inside flex flex-col gap-2">
      {items.map((p, i) => (
        <MotionItem
          className={cn(
            'w-full leading-relaxed text-left',
            !isEven && 'lg:text-right'
          )}
          key={p.id}
          {...fade}
          transition={{ ...fade.transition, delay: 0.4 + i * 0.2 }}>
          <Paragraph as="span" className="font-bold">
            {p.name}:{' '}
          </Paragraph>
          <Paragraph className="text-muted-foreground" as="span">
            {p.description}
          </Paragraph>
        </MotionItem>
      ))}
    </ul>
  )
}
