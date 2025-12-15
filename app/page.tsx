import type { JSX } from 'react'
import ScrollTriggered from '@/components/assets/ScrollTriggered'
import AboutMe from '@/components/partials/AboutMe'
import HeroBanner from '@/components/partials/HeroBanner'
import ProjectSection from '@/components/partials/ProjectSection'
import TechStack from '@/components/partials/TechStack'
import Testimonials from '@/components/partials/Testimonials'

export default function Home(): JSX.Element {
  return (
    <>
      <HeroBanner />
      <AboutMe />
      <TechStack />
      <ScrollTriggered />
      <Testimonials />
    </>
  )
}
