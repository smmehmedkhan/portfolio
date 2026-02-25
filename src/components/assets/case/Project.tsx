import CaseButton from '@/components/assets/case/CaseButton'
import CaseCard from '@/components/assets/case/CaseCard'
import CaseInfo from '@/components/assets/case/CaseInfo'
import type { ProjectProps } from '@/types'
import ProjectButtons from './ProjectButtons'

export default function Project({ data, isProjectPage, index }: ProjectProps) {
  const isEven = index % 2 === 0

  const getFlexDirection = (isEven: boolean) =>
    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'

  return (
    <div id={`project-${data.id}`} className="wrapper project scroll-my-20">
      <div className={`project-content ${getFlexDirection(isEven)}`}>
        <CaseCard {...data} />
        <CaseInfo isEven={isEven} {...data} isProjectPage={isProjectPage} />
      </div>
      {!isProjectPage && <CaseButton data={data} />}
    </div>
  )
}
