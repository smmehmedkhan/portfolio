import { ArrowUpRight } from 'lucide-react'
import CaseCard from '@/components/assets/case/CaseCard'
import CaseInfo from '@/components/assets/case/CaseInfo'
import type { ProjectProps } from '@/types'
import AnimatedButton from '../AnimatedButton'

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
      {!isProjectPage && (
        <AnimatedButton
          className="wrapper"
          href={`/projects#project-${data.id}`}
          btnText="View Project"
          icon={<ArrowUpRight />}
        />
      )}
    </div>
  )
}
