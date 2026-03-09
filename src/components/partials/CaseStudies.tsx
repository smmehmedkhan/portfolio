import Project from '@/components/assets/case/Project'
import SectionInro from '@/components/assets/SectionInro'
import { projects } from '@/data/projects'
import { sectionInros } from '@/data/sectionInros'

export default function CaseStudies() {
  const topProjects = projects.slice(0, 3)

  return (
    <section className="container case-studies flex-box">
      <SectionInro data={sectionInros.project} />

      {topProjects.map((project, index) => (
        <Project key={project.id} index={index} data={project} page={false} />
      ))}
    </section>
  )
}
