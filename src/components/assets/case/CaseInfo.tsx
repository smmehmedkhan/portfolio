import CaseBadges from '@/components/assets/case/CaseBadges'
import ProjectButtons from '@/components/assets/case/ProjectButtons'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { CaseInfoProps } from '@/types'
import ProjectFeatures from './ProjectFeatures'

export default function CaseInfo({ isEven, page, data }: CaseInfoProps) {
  const { name, title, features, technologies } = data

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
          as="h4"
          variant="secondary"
          animated>
          {name}
        </Heading>
        <Paragraph
          className="leading-normal"
          variant="large"
          animated
          transition={{ delay: 0.2 }}>
          {title}
        </Paragraph>
        <ProjectFeatures page={page} features={features} />
        <CaseBadges isEven={isEven} technologies={technologies} />
        {page && <ProjectButtons isEven={isEven} {...data} />}
      </div>
    </div>
  )
}
