import { MessageSquareText } from 'lucide-react'
import Link from 'next/link'
import AboutTypographys from '@/components/assets/AboutTypographys'
import ImageCarousel from '@/components/assets/ImageCarousel'
import SiteHeading from '@/components/assets/SiteHeading'
import { Button } from '@/components/ui/button'
import { aboutImages, aboutTypographys } from '@/data/about'
import { siteHeadings } from '@/data/siteHeadings'

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
  const { id, slot, title, description } = siteHeadings.about

  return (
    <section className="container about flex-box">
      <SiteHeading
        id={id}
        slot={slot}
        title={title}
        description={description}
        icon={<MessageSquareText className="size-5" />}
      />

      {/* About content layout */}
      <div className="about-layout">
        <div className="w-full lg:w-1/2">
          <ImageCarousel data={aboutImages} />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <AboutTypographys data={aboutTypographys} />

          {/* Bottom: See more button */}
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
