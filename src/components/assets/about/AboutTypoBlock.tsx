import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { AboutTypoBlockProps } from '@/types'

export default function AboutTypoBlock({ index, data }: AboutTypoBlockProps) {
  const { title, description } = data
  return (
    <div className="wrapper gap-2" key={index}>
      <Heading
        className="size-full text-center lg:text-left tracking-normal lg:tracking-wide"
        variant="title"
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
