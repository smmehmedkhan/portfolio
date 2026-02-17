import { MessageSquareText } from 'lucide-react'
import Link from 'next/link'
import AboutTypographys from '@/components/assets/AboutTypographys'
import ImageCarousel from '@/components/assets/ImageCarousel'
import SectionInro from '@/components/assets/SectionInro'
import { Button } from '@/components/ui/button'
import { aboutImages, aboutTypographys } from '@/data/about'
import { sectionInros } from '@/data/sectionInros'

/**
 * AboutMe component displaying short summary of about page
 *
 * @description About me component dispay a short summary of about page,
 * with additional images and a CTA button to navigate about page.
 *
 * @returns JSX element with about section and a CTA button
 *
 * @example
 * ```tsx
 * <AboutMe />
 * ```
 */
export default function About() {
  return (
    <section className="container about flex-box">
      <SectionInro
        data={sectionInros.about}
        icon={<MessageSquareText className="xs:size-3 sm:size-4 md:size-5" />}
      />

      {/* About content layout */}
      <div className="about-layout flex-box flex-direction">
        <ImageCarousel data={aboutImages} />

        <AboutTypographys data={aboutTypographys} />
      </div>
    </section>
  )
}
