import ReviewCarousel from '@/components/assets/ReviewCarousel'
import { Heading } from '@/components/ui/heading'
import { siteHeadings } from '@/data/siteHeadings'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="flex-box w-full py-20 gap-20">
      {/* Section Heading */}
      <Heading variant={'primary-heading'} size={'3xl'}>
        {siteHeadings.testimonials.title}
      </Heading>

      <div className="container flex-center">
        <ReviewCarousel data={testimonials} />
      </div>
    </section>
  )
}
