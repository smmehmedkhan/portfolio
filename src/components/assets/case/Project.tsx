import CaseButton from '@/components/assets/case/CaseButton'
import CaseCard from '@/components/assets/case/CaseCard'
import CaseInfo from '@/components/assets/case/CaseInfo'
import type { ProjectProps } from '@/types'

export default function Project({ project, index }: ProjectProps) {
  const isEven = index % 2 === 0

  const getFlexDirection = (isEven: boolean) =>
    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'

  return (
    <div className="wrapper project">
      <div className={`project-content ${getFlexDirection(isEven)}`}>
        <CaseCard {...project} />
        <CaseInfo isEven={isEven} {...project} />
      </div>
      <div className="wrapper">
        <CaseButton project={project} />
      </div>
    </div>
  )
}
