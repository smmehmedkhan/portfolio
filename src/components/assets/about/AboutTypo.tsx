import { Paragraph } from '@/components/ui/paragraph'
import type { AboutTypographyType } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'
import ReadMore from './ReadMore'

export default function AboutTypo({ data }: { data: AboutTypographyType[] }) {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper about-typo">
      {/* Top: About typography items */}
      {data.map((item, index) => (
        <Paragraph
          key={item.id}
          className="text-center lg:text-left tracking-tighter lg:tracking-wide"
          tabIndex={index}
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: index * 0.2 }}>
          {item.description}
        </Paragraph>
      ))}
      {/* Bottom: See more button */}
      <div className="cta-btn">
        <ReadMore />
      </div>
    </div>
  )
}
