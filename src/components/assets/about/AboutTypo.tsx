import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { AboutTypographyType } from '@/data/about'
import { getAnimationPreset } from '@/lib/animations/registry'
import ReadMore from './ReadMore'

export default function AboutTypo({ data }: { data: AboutTypographyType[] }) {
  return (
    <div className="wrapper about-typo">
      {/* Top: About typography items */}
      {data.map((item, index) => (
        <AboutTypoBlock key={item.id} item={item} index={index} />
      ))}
      {/* Bottom: See more button */}
      <div className="cta-btn">
        <ReadMore />
      </div>
    </div>
  )
}

function AboutTypoBlock({
  item,
  index,
}: {
  item: AboutTypographyType
  index: number
}) {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper gap-2" key={index}>
      <Heading
        className="size-full text-center lg:text-left tracking-normal lg:tracking-wide"
        variant="role"
        size="nm"
        animated
        initial={fadeDown.initial}
        whileInView={fadeDown.whileInView}
        transition={{ ...fadeDown.transition, delay: index * 0.2 }}>
        {item.title}
      </Heading>
      <Paragraph
        className="text-center lg:text-left tracking-normal lg:tracking-wide"
        animated
        initial={fadeDown.initial}
        whileInView={fadeDown.whileInView}
        transition={{ ...fadeDown.transition, delay: index * 0.2 }}>
        {item.description}
      </Paragraph>
    </div>
  )
}
