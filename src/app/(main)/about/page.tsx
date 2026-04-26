import type { Metadata } from 'next'
import Contributions from '@/components/partials/Contributions'
import Educations from '@/components/partials/Educations'
import Experience from '@/components/partials/Experience'
import HeroAbout from '@/components/partials/HeroAbout'
import { CONFIG } from '@/constants/config'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE} specializing in ${CONFIG.SITE.KEYWORDS.join(', ')}. ${CONFIG.PERSONAL.BIO}`,
  openGraph: {
    title: `About | ${CONFIG.SITE.NAME}`,
    description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE} specializing in modern web development.`,
    url: `${CONFIG.SITE.URL}/about`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${CONFIG.SITE.NAME}`,
    description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE}.`,
  },
}

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <main className="container about-page flex-box">
        <Experience />
        <Educations />
        <Contributions />
      </main>
    </>
  )
}
