import { BadgeCheck } from 'lucide-react'
import ReviewCarousel from '@/components/assets/ReviewCarousel'
import SectionInro from '@/components/assets/SectionInro'
import { sectionInros } from '@/data/sectionInros'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="container testimonials flex-box">
      <SectionInro
        data={sectionInros.testimonials}
        icon={<BadgeCheck className="xs:size-3 sm:size-4 md:size-5" />}
      />

      <ReviewCarousel data={testimonials} />
    </section>
  )
}
