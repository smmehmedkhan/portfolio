import CaseBadges from '@/components/assets/case/CaseBadges'
import ProjectButtons from '@/components/assets/case/ProjectButtons'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import type { CaseInfoProps } from '@/types'

export default function CaseInfo({ isEven, page, data }: CaseInfoProps) {
  const { name, title, features, technologies } = data
  const selectedFeature = features.slice(0, 3)

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
          className="leading-normal"
          variant="large"
          animated
          transition={{ delay: 0.2 }}>
          {title}
        </Paragraph>
        {!page && (
          <ul className="size-full list-disc list-inside flex flex-col gap-2">
            {selectedFeature.map((p, i) => (
              <li key={p.id} className="w-full leading-relaxed">
                <Paragraph
                  as="span"
                  className="font-bold"
                  animated
                  transition={{ delay: 0.4 + i * 0.2 }}>
                  {p.name}:{' '}
                </Paragraph>
                <Paragraph
                  className="text-muted-foreground"
                  as="span"
                  animated
                  transition={{ delay: 0.4 + i * 0.2 }}>
                  {p.description}
                </Paragraph>
              </li>
            ))}
          </ul>
        )}
        {page && (
          <ul className="size-full list-disc list-inside flex flex-col gap-2">
            {features.map((p, i) => (
              <li key={p.id} className="w-full leading-relaxed">
                <Paragraph
                  as="span"
                  className="font-bold"
                  animated
                  transition={{ delay: 0.4 + i * 0.2 }}>
                  {p.name}:{' '}
                </Paragraph>
                <Paragraph
                  className="text-muted-foreground"
                  as="span"
                  animated
                  transition={{ delay: 0.4 + i * 0.2 }}>
                  {p.description}
                </Paragraph>
              </li>
            ))}
          </ul>
        )}
        <CaseBadges isEven={isEven} technologies={technologies} />
        {page && <ProjectButtons isEven={isEven} {...data} />}
      </div>
    </div>
  )
}
