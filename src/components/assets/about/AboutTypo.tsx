import { Paragraph } from '@/components/ui/paragraph'
import type { AboutTypographyType } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'
import ReadMore from './ReadMore'

export default function AboutTypo({ data }: { data: AboutTypographyType[] }) {
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
      <div className="size-full max-w-sm lg:max-w-full mx-auto lg:mx-0">
        <ReadMore />
      </div>
    </div>
  )
}
