import { Gem } from 'lucide-react'
import SectionInro from '@/components/assets/SectionInro'
import SkillGrid from '@/components/assets/skill/SkillsGrid'
import { sectionInros } from '@/data/sectionInros'
import { skillsData } from '@/data/skillsList'

export default function TechStack() {
  return (
    <section className="container tech-stack flex-box">
      <SectionInro data={sectionInros.skills} icon={<Gem />} />
      <SkillGrid categories={skillsData} />
    </section>
  )
}
