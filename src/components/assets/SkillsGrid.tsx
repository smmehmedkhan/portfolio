import Skillset from '@/components/assets/Skillset'
import type { SkillCategory } from '@/types'

interface SkillsGridProps {
  categories: SkillCategory[]
}

export default function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="skill-grid">
      {categories.map(category => (
        <Skillset key={category.id} category={category} />
      ))}
    </div>
  )
}
