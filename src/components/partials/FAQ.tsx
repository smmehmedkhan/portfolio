import { MessageCircleQuestionMark } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { faqData } from '@/data/faq'
import { sectionInros } from '@/data/sectionInros'
import SectionInro from '../assets/SectionInro'

export default function FAQ() {
  return (
    <section className="container flex-box py-24 gap-30">
      <SectionInro
        data={sectionInros.faq}
        icon={
          <MessageCircleQuestionMark className="xs:size-3 sm:size-4 md:size-5" />
        }
      />

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-mobile bg-card border border-border rounded-md"
        defaultValue={faqData[0]?.id}>
        {faqData.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className={`px-3 ${index < faqData.length - 1 ? 'border-b border-border' : ''}`}>
            <AccordionTrigger className="hover:text-accent transition-colors duration-200 ease-in">
              <Heading size="md">{faq.question}</Heading>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {faq.answer.map((paragraph, pIndex) => (
                <Paragraph
                  key={paragraph.slice(0, 10) + pIndex.toString()}
                  tabIndex={pIndex}>
                  {paragraph}
                </Paragraph>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
