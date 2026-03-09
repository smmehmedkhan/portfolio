import SkillGroup from '@/components/assets/skill/SkillGroup'
import { skills } from '@/data/skills'

export default function SkillGrid() {
  return (
    <div className="skill-grid">
      {skills.map(category => (
        <SkillGroup key={category.id} {...category} />
      ))}
    </div>
  )
}
