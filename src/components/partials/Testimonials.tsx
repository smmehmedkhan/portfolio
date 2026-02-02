import { BadgeCheck } from 'lucide-react'
import ReviewCarousel from '@/components/assets/ReviewCarousel'
import { siteHeadings } from '@/data/siteHeadings'
import { testimonials } from '@/data/testimonials'
import SiteHeading from '../assets/SiteHeading'

export default function Testimonials() {
  const { id, slot, title, description } = siteHeadings.testimonials

  return (
    <section className="container testimonials flex-box">
      <SiteHeading
        icon={<BadgeCheck className="size-5" />}
        id={id}
        slot={slot}
        title={title}
        description={description}
      />

      <ReviewCarousel data={testimonials} />
    </section>
  )
}
