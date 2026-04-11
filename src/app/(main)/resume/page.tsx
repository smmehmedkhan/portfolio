import type { Metadata } from 'next'
import SectionInro from '@/components/assets/SectionInro'
import ResumeViewer from '@/components/partials/ResumeViewer'
import { CONFIG } from '@/constants/config'
import { sectionInros } from '@/data/sectionInros'

export const metadata: Metadata = {
  title: 'Resume',
  description: `View and download the resume of ${CONFIG.PERSONAL.NAME} — ${CONFIG.PERSONAL.ROLE} based in ${CONFIG.PERSONAL.LOCATION}.`,
  openGraph: {
    title: `Resume | ${CONFIG.SITE.NAME}`,
    description: `View and download the resume of ${CONFIG.PERSONAL.NAME} — ${CONFIG.PERSONAL.ROLE}.`,
    url: `${CONFIG.SITE.URL}/resume`,
  },
}

export default function ResumePage() {
  return (
    <>
      <header className="sr-only">
        <h1>Resume page</h1>
      </header>
      <main className="wrapper resume-page">
        <SectionInro data={sectionInros.resume} />
        <ResumeViewer />
      </main>
    </>
  )
}
