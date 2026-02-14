'use client'

import { Paragraph } from '@/components/ui/paragraph'
import type { AboutTypographyType } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'

export default function AboutTypographys({
  data,
}: {
  data: AboutTypographyType[]
}) {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper text-left">
      {data.map((item, index) => (
        <Paragraph
          key={item.id}
          className="my-2.5 text-center lg:text-left tracking-tighter lg:tracking-wide"
          tabIndex={index}
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: index * 0.2 }}>
          {item.description}
        </Paragraph>
      ))}
    </div>
  )
}
