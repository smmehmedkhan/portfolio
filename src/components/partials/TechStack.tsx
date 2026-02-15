import { Gem } from 'lucide-react'
import SectionInro from '@/components/assets/SectionInro'
import SkillsGrid from '@/components/assets/SkillsGrid'
import { sectionInros } from '@/data/sectionInros'
import { skillsData } from '@/data/skillsList'

export default function TechStack() {
  return (
    <section className="container tech-stack flex-box">
      <SectionInro
        data={sectionInros.skills}
        icon={<Gem className="xs:size-3 sm:size-4 md:size-5" />}
      />
      <SkillsGrid categories={skillsData} />
    </section>
  )
}
