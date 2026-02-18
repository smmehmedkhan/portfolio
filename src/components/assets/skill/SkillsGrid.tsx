import Skillset from '@/components/assets/skill/Skillset'
import type { SkillCategory } from '@/types'

interface SkillsGridProps {
  categories: SkillCategory[]
}

export default function SkillGrid({ categories }: SkillsGridProps) {
  return (
    <div className="skill-grid">
      {categories.map(category => (
        <Skillset key={category.id} category={category} />
      ))}
    </div>
  )
}
