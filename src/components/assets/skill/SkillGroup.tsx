import {
  Code2,
  Database,
  HelpCircle,
  Palette,
  Server,
  Wrench,
  Zap,
} from 'lucide-react'
import SkillItem from '@/components/assets/skill/SkillItem'
import { Heading } from '@/components/ui/heading'
import type { SkillsCategory } from '@/types'

export const iconMap = {
  Code2,
  Palette,
  Server,
  Database,
  Zap,
  Wrench,
}

export default function SkillGroup({
  id,
  icon,
  title,
  skills,
}: SkillsCategory) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] ?? HelpCircle

  return (
    <div className="skillset">
      <Heading
        className="flex-inline gap-1"
        variant="secondary"
        size="lg"
        animated
        transition={{ delay: 0.2 * id }}>
        <span className="flex-box size-4 sm:size-6 md:size-8 text-secondary">
          <IconComponent />
        </span>
        <span>{title}</span>
      </Heading>
      <ul className="flex-center skills-list">
        {skills.map((item, index) => (
          <SkillItem key={item.id} index={index} data={item} />
        ))}
      </ul>
    </div>
  )
}
