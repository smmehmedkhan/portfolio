import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { Heading } from '../ui/heading'
import { Paragraph } from '../ui/paragraph'

type SiteHeadingProps = {
  icon: React.ReactElement
  id: number
  slot: string
  title: string
  description: string
  badgeStyles?: string
  headingStyles?: string
  paragraphStyles?: string
}

export default function SiteHeading({
  badgeStyles,
  headingStyles,
  paragraphStyles,
  icon,
  id,
  slot,
  title,
  description,
}: SiteHeadingProps) {
  return (
    <div className="wrapper gap-3" data-slot={slot} data-id={id}>
      <Badge className={cn(`flex-inline py-2 px-5 gap-1 ${badgeStyles}`)}>
        <div className="relative">{icon}</div>
        <Paragraph size="nm" className="font-bold">
          {slot}
        </Paragraph>
      </Badge>
      <Heading
        className={headingStyles}
        variant={'primary-heading'}
        size={'2xl'}
        animated={true}>
        {title}
      </Heading>
      <Paragraph
        className={cn(`max-w-mobile text-center ${paragraphStyles}`)}
        variant="lead"
        animated={true}>
        {description}
      </Paragraph>
    </div>
  )
}
