import { MessageCircleQuestionMark } from 'lucide-react'
import FaqAccordion from '@/components/assets/faq/FaqAccordion'
import SectionInro from '@/components/assets/SectionInro'
import { sectionInros } from '@/data/sectionInros'

export default function FAQ() {
  return (
    <section className="container faq flex-box">
      <SectionInro
        data={sectionInros.faq}
        icon={<MessageCircleQuestionMark />}
      />

      <FaqAccordion />
    </section>
  )
}
