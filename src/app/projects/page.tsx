import { FolderKanbanIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Project from '@/components/assets/case/Project'
import SectionInro from '@/components/assets/SectionInro'
import { CONFIG } from '@/constants/config'
import { projects } from '@/data/projects'
import { sectionInros } from '@/data/sectionInros'
import type { ProjectTypes } from '@/types'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore projects by ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Showcase of web applications built with ${CONFIG.SITE.KEYWORDS.slice(0, 3).join(', ')}, and modern web technologies.`,
  openGraph: {
    title: `Projects | ${CONFIG.SITE.NAME}`,
    description: `Explore projects by ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Showcase of web applications and modern web technologies.`,
    url: `${CONFIG.SITE.URL}/projects`,
    images: [
      {
        url: '/images/mehmed-khan.png',
        width: 1200,
        height: 630,
        alt: `Projects by ${CONFIG.PERSONAL.NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${CONFIG.SITE.NAME}`,
    description: `Explore projects by ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}.`,
    images: ['/images/mehmed-khan.png'],
  },
}

export default function ProjectPage() {
  return (
    <main className="wrapper pt-10 sm:pt-15 md:pt-20 lg:pt-25">
      <SectionInro data={sectionInros.project} icon={<FolderKanbanIcon />} />

      <section className="container case-studies flex-box">
        {projects.map((project: ProjectTypes, index) => (
          <Project
            key={project.id}
            data={project}
            isProjectPage={true}
            index={index}
          />
        ))}
      </section>
    </main>
  )
}
