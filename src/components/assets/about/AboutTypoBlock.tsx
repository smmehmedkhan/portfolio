import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { AboutTypographyType } from '@/data/about'

export default function AboutTypoBlock({
  item,
  index,
}: {
  item: AboutTypographyType
  index: number
}) {
  return (
    <div className="wrapper gap-2" key={index}>
      <Heading
        className="size-full text-center lg:text-left tracking-normal lg:tracking-wide"
        variant="role"
        size="nm"
        animated
        transition={{ delay: 0.2 * index }}>
        {item.title}
      </Heading>
      <Paragraph
        className="text-center lg:text-left tracking-normal lg:tracking-wide"
        animated
        transition={{ delay: 0.2 * index * 2 }}>
        {item.description}
      </Paragraph>
    </div>
  )
}
