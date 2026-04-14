import FaqAccordion from '@/components/assets/faq/FaqAccordion'
import SectionHeader from '@/components/assets/SectionHeader'
import { sectionInros } from '@/data/sectionInros'

export default function FAQ() {
  return (
    <section className="container faq flex-box">
      <SectionHeader data={sectionInros.faq} />
      <FaqAccordion />
    </section>
  )
}
