import type { Metadata } from 'next'
import SectionHeader from '@/components/assets/SectionHeader'
import PaginatedProjects from '@/components/partials/PaginatedProjects'
import { CONFIG } from '@/constants/config'
import { sectionInros } from '@/data/sectionInros'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore projects by ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Showcase of web applications built with ${CONFIG.SITE.KEYWORDS.slice(0, 3).join(', ')}, and modern web technologies.`,
}

export default function ProjectPage() {
  return (
    <main className="wrapper mt-5 sm:mt-2.5 md:mt-0">
      <SectionHeader data={sectionInros.project} headingAs="h1" />
      <PaginatedProjects />
    </main>
  )
}
