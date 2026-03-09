import ReviewCarousel from '@/components/assets/review/ReviewCarousel'
import SectionInro from '@/components/assets/SectionInro'
import { sectionInros } from '@/data/sectionInros'

export default function Testimonials() {
  return (
    <section className="container testimonials flex-box">
      <SectionInro data={sectionInros.testimonials} />
      <ReviewCarousel />
    </section>
  )
}
