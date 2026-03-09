import type { Metadata } from 'next'
import Contributions from '@/components/partials/Contributions'
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
    images: [
      {
        url: '/images/Mehmed_Khan.png',
        width: 1200,
        height: 630,
        alt: `${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${CONFIG.SITE.NAME}`,
    description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE}.`,
    images: ['/images/mehmed_khan.webp'],
  },
}

export default function AboutPage() {
  return (
    <main className="wrapper about-page">
      <HeroAbout />
      <Experience />
      <Contributions />
    </main>
  )
}
