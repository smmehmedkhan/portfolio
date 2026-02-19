import { BadgeCheck } from 'lucide-react'
import ReviewCarousel from '@/components/assets/review/ReviewCarousel'
import SectionInro from '@/components/assets/SectionInro'
import { sectionInros } from '@/data/sectionInros'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="container testimonials flex-box">
      <SectionInro data={sectionInros.testimonials} icon={<BadgeCheck />} />

      <ReviewCarousel data={testimonials} />
    </section>
  )
}
