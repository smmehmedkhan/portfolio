import Footer from '@/components/assets/Footer'
import HeroBanner from '@/components/assets/HeroBanner'
import AboutMe from '@/components/partials/AboutMe'
import ProjectSection from '@/components/partials/ProjectSection'
import TechStack from '@/components/partials/TechStack'
import Testimonials from '@/components/partials/Testimonials'

export default function Home() {
  return (
    <>
      <main>
        <HeroBanner />
        <AboutMe />
        <TechStack />
        <ProjectSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
