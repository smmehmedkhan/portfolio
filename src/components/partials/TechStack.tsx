import SectionInro from '@/components/assets/SectionInro'
import SkillGrid from '@/components/assets/skill/SkillsGrid'
import { sectionInros } from '@/data/sectionInros'

export default function TechStack() {
  return (
    <section className="container tech-stack flex-box">
      <SectionInro data={sectionInros.skills} />
      <SkillGrid />
    </section>
  )
}
