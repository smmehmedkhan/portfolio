import type { Metadata } from 'next'
import type { JSX } from 'react'
import About from '@/components/partials/About'
import CaseStudies from '@/components/partials/CaseStudies'
import FAQ from '@/components/partials/FAQ'
import Hero from '@/components/partials/Hero'
import TechStack from '@/components/partials/TechStack'
import Testimonials from '@/components/partials/Testimonials'
import { CONFIG } from '@/constants/config'

export const metadata: Metadata = {
  title: 'Home',
  description: CONFIG.SITE.DESCRIPTION,
  openGraph: {
    title: CONFIG.SITE.TITLE,
    description: CONFIG.SITE.DESCRIPTION,
    url: CONFIG.SITE.URL,
    images: [
      {
        url: '/images/Mehmed_Khan.webp',
        width: 1200,
        height: 630,
        alt: CONFIG.SITE.AUTHOR,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: CONFIG.SITE.TITLE,
    description: CONFIG.SITE.DESCRIPTION,
    images: ['/images/Mehmed_Khan.webp'],
  },
}

export default function Home(): JSX.Element {
  return (
    <main className="wrapper">
      <Hero />
      <About />
      <TechStack />
      <CaseStudies />
      <Testimonials />
      <FAQ />
    </main>
  )
}
