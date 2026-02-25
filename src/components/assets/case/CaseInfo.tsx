import { data } from 'motion/react-client'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { CaseInfoProps } from '@/types'
import CaseBadges from './CaseBadges'
import ProjectButtons from './ProjectButtons'

export default function CaseInfo({
  name,
  bio,
  shortDescription,
  longDescription,
  technologies,
  isEven,
  isProjectPage,
}: CaseInfoProps & { isEven: boolean; isProjectPage: boolean }) {
  const getInfoClasses = (isEven: boolean) => {
    const alignment = isEven
      ? 'lg:items-start lg:text-left'
      : 'lg:items-end lg:text-right'
    return `case-info ${alignment}`
  }

  return (
    <div className="wrapper">
      <div className={getInfoClasses(isEven)}>
        <Heading className="text-secondary" variant="secondary" animated>
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
        {isProjectPage && (
          <Paragraph
            className="leading-relaxed"
            animated
            transition={{ delay: 0.6 }}>
            {longDescription}
          </Paragraph>
        )}
        <CaseBadges isEven={isEven} technologies={technologies} />
        {isProjectPage && <ProjectButtons isEven={isEven} {...data} />}
      </div>
    </div>
  )
}
