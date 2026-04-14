import ExperienceCard from '@/components/assets/experience/ExperienceCard'
import ExperienceHeader from '@/components/assets/experience/ExperienceHeader'
import { experiences } from '@/data/experiences'

export default function Experience() {
  return (
    <section className="experience flex-center flip">
      {/* left: Experience Introduction */}
      <ExperienceHeader />

      {/* Right: About Cards */}
      <div className="wrapper exp-layout">
        <div className="exp-grid">
          {experiences.map((item, index) => (
            <ExperienceCard key={item.id} index={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
