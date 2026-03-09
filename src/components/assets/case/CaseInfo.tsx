import CaseBadges from '@/components/assets/case/CaseBadges'
import ProjectButtons from '@/components/assets/case/ProjectButtons'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { CaseInfoProps } from '@/types'

export default function CaseInfo({ isEven, page, data }: CaseInfoProps) {
  const { name, bio, shortDescription, longDescription, technologies } = data

  const getInfoClasses = (isEven: boolean) => {
    const alignment = isEven
      ? 'lg:items-start lg:text-left'
      : 'lg:items-end lg:text-right'
    return `case-info ${alignment}`
  }

  return (
    <div className="wrapper">
      <div className={getInfoClasses(isEven)}>
        <Heading
          className="text-primary dark:text-secondary"
          variant="secondary"
          animated>
          {name}
        </Heading>
        <Paragraph
          className="leading-none"
          variant="large"
          animated
          transition={{ delay: 0.2 }}>
          {bio}
        </Paragraph>
        <Paragraph
          className="leading-relaxed"
          animated
          transition={{ delay: 0.4 }}>
          {shortDescription}
        </Paragraph>
        {page && (
          <Paragraph
            className="leading-relaxed"
            animated
            transition={{ delay: 0.6 }}>
            {longDescription}
          </Paragraph>
        )}
        <CaseBadges isEven={isEven} technologies={technologies} />
        {page && <ProjectButtons isEven={isEven} {...data} />}
      </div>
    </div>
  )
}
