import { MessageSquareText } from 'lucide-react'
import AboutCaro from '@/components/assets/about/AboutCaro'
import AboutTypo from '@/components/assets/about/AboutTypo'
import SectionInro from '@/components/assets/SectionInro'
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
      <div className="container about-layout flex-center flip">
        <AboutCaro data={aboutImages} />

        <AboutTypo data={aboutTypographys} />
      </div>
    </section>
  )
}
