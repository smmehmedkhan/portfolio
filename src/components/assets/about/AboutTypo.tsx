import { ArrowUpRight } from 'lucide-react'
import AnimatedButton from '@/components/assets/AnimatedButton'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { aboutDescription } from '@/data/about'
import type { AboutTypoBlockProps } from '@/types'

export default function AboutTypo({
  page = false,
  asOverride,
}: {
  page?: boolean
  asOverride?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) {
  return (
    <div className="about-typo">
      {/* Top: About typography items */}
      {aboutDescription.map((item, index) => (
        <AboutTypoBlock
          key={item.id}
          data={item}
          index={index}
          asOverride={asOverride}
        />
      ))}
      {/* Bottom: See more button */}
      {!page && (
        <AnimatedButton
          className="lg:size-fit"
          href="/about"
          btnText="Read More"
          icon={<ArrowUpRight />}
        />
      )}
    </div>
  )
}

function AboutTypoBlock({
  index,
  data,
  asOverride,
}: AboutTypoBlockProps & {
  asOverride?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) {
  const { title, description } = data

  return (
    <div className="wrapper gap-2" key={index}>
      <Heading
        className="size-full text-center lg:text-left tracking-normal lg:tracking-wide"
        variant="title"
        as={asOverride || 'h3'}
        size="md"
        animated
        transition={{ delay: 0.2 * index }}>
        {title}
      </Heading>
      <Paragraph
        className="text-muted-foreground text-center lg:text-left tracking-normal lg:tracking-wide"
        size="nm"
        animated
        transition={{ delay: 0.2 * index * 2 }}>
        {description}
      </Paragraph>
    </div>
  )
}
