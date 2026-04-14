import ReviewCarousel from '@/components/assets/review/ReviewCarousel'
import SectionHeader from '@/components/assets/SectionHeader'
import { sectionInros } from '@/data/sectionInros'

export default function Testimonials() {
  return (
    <section className="container testimonials flex-box">
      <SectionHeader data={sectionInros.testimonials} />
      <ReviewCarousel />
    </section>
  )
}
