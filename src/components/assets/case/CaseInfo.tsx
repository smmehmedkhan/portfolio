import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import type { CaseInfoProps } from '@/types'
import CaseBadges from './CaseBadges'

export default function CaseInfo({
  title,
  description,
  longDescription,
  technologies,
  isEven,
}: CaseInfoProps & { isEven: boolean }) {
  const getInfoClasses = (isEven: boolean) => {
    const alignment = isEven
      ? 'lg:items-start lg:text-left'
      : 'lg:items-end lg:text-right'
    return `case-info ${alignment}`
  }

  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper">
      <div className={getInfoClasses(isEven)}>
        <Heading
          className="text-foreground"
          variant="secondary"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={fadeDown.transition}>
          {title}
        </Heading>
        <Paragraph
          className="leading-relaxed"
          variant="lead"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.2 }}>
          {description}
        </Paragraph>
        <Paragraph
          className="leading-relaxed"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.4 }}>
          {longDescription}
        </Paragraph>
        <CaseBadges isEven={isEven} technologies={technologies} />
      </div>
    </div>
  )
}
