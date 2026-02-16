'use client'

import Link from 'next/link'
import { Paragraph } from '@/components/ui/paragraph'
import type { AboutTypographyType } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'
import { Button } from '../ui/button'

export default function AboutTypographys({
  data,
}: {
  data: AboutTypographyType[]
}) {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper lg:w-1/2 space-y-6">
      {/* Top: About typography items */}
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
      {/* Bottom: See more button */}
      <div className="w-full sm:max-w-sm lg:max-w-full mx-auto lg:mx-0">
        <Button className="w-full lg:w-fit" variant="outline" asChild>
          <Link href="/about">Read More</Link>
        </Button>
      </div>
    </div>
  )
}
