import { FolderKanban } from 'lucide-react'
import Project from '@/components/assets/case/Project'
import SectionInro from '@/components/assets/SectionInro'
import { projects } from '@/data/projects'
import { sectionInros } from '@/data/sectionInros'
import type { ProjectTypes } from '@/types'

export default function CaseStudies() {
  return (
    <section className="container case-studies flex-box">
      <SectionInro data={sectionInros.project} icon={<FolderKanban />} />

      {projects.map((project: ProjectTypes, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}
