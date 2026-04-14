import SectionHeader from '@/components/assets/SectionHeader'
import SkillGrid from '@/components/assets/skill/SkillsGrid'
import { sectionInros } from '@/data/sectionInros'

export default function TechStack() {
  return (
    <section className="container tech-stack flex-box">
      <SectionHeader data={sectionInros.skills} />
      <SkillGrid />
    </section>
  )
}
