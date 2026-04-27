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
}

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <main className="wrapper">
        <About />
        <TechStack />
        <CaseStudies />
        <Testimonials />
        <FAQ />
      </main>
    </>
  )
}
