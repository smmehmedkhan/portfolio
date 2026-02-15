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
    <div className="wrapper lg:w-1/2 px-5 lg:px-0 text-left space-y-6">
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
      <div className="w-full xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto lg:mx-0">
        <Button className="w-full lg:w-fit" variant="outline" asChild>
          <Link href="/about">Read More</Link>
        </Button>
      </div>
    </div>
  )
}
