import type { Metadata } from 'next'
import SectionHeader from '@/components/assets/SectionHeader'
import ResumeViewer from '@/components/partials/ResumeViewer'
import { CONFIG } from '@/constants/config'
import { sectionInros } from '@/data/sectionInros'

export const metadata: Metadata = {
  title: 'Resume',
  description: `View and download the resume of ${CONFIG.PERSONAL.NAME} — ${CONFIG.PERSONAL.ROLE} based in ${CONFIG.PERSONAL.LOCATION}.`,
}

export default function ResumePage() {
  return (
    <main className="wrapper resume-page">
      <SectionHeader data={sectionInros.resume} headingAs="h1" />
      <ResumeViewer />
    </main>
  )
}
