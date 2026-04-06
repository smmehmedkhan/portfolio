import { Link2Icon } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import type { ProjectBtnProps } from '@/types'
import AnimatedButton from '../AnimatedButton'

export default function ProjectButtons({
  isEven,
  url,
  source,
}: ProjectBtnProps) {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-center gap-5',
        !isEven && 'md:flex-row-reverse'
      )}>
      <AnimatedButton
        href={`${url}`}
        target="_blank"
        btnText="Visit Site"
        delay={0.8}
        icon={<Link2Icon />}
      />
      <AnimatedButton
        href={`${source}`}
        target="_blank"
        btnText="Source Code"
        delay={1}
        icon={<FaGithub />}
        swap={true}
      />
    </div>
  )
}
