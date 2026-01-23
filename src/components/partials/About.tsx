import Link from 'next/link'
import AboutTypographys from '@/components/assets/AboutTypographys'
import ImageCarousel from '@/components/assets/ImageCarousel'
import { aboutImages, aboutTypographys } from '@/data/about'
import { siteHeadings } from '@/data/siteHeadings'
import { Button } from '../ui/button'
import { Heading } from '../ui/heading'
import { Paragraph } from '../ui/paragraph'

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
      {/* Top: See more button */}
      <div
        className="wrapper"
        data-slot={siteHeadings.about.id}
        data-id={siteHeadings.about.id}>
        <Heading variant={'primary-heading'} size={'2xl'} animated={true}>
          {siteHeadings.about.title}
        </Heading>
        <Paragraph variant="lead" animated={true}>
          {siteHeadings.about.description}
        </Paragraph>
      </div>

      {/* Middle: Flexbox Layout */}
      <div className="about-layout">
        <div className="w-full">
          <ImageCarousel data={aboutImages} />
        </div>

        <div className="w-full">
          <AboutTypographys data={aboutTypographys} />
        </div>
      </div>

      {/* Bottom: See more button */}
      <div className="w-full flex-center">
        <Button variant="outline" asChild>
          <Link href="/about">Read More</Link>
        </Button>
      </div>
    </section>
  )
}
