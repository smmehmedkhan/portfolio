import { FolderKanban } from 'lucide-react'
import Project from '@/components/assets/case/Project'
import SectionInro from '@/components/assets/SectionInro'
import { projects } from '@/data/projects'
import { sectionInros } from '@/data/sectionInros'
import type { ProjectTypes } from '@/types'

export default function CaseStudies() {
  const topProjects = projects.slice(0, 3)

  return (
    <section className="container case-studies flex-box">
      <SectionInro data={sectionInros.project} icon={<FolderKanban />} />

      {topProjects.map((project: ProjectTypes, index) => (
        <Project
          key={project.id}
          data={project}
          isProjectPage={false}
          index={index}
        />
      ))}
    </section>
  )
}
