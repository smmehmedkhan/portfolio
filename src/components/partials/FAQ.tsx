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
import { siteHeadings } from '@/data/siteHeadings'
import SiteHeading from '../assets/SiteHeading'

export default function FAQ() {
  const { id, slot, title, description } = siteHeadings.faq

  return (
    <section className="container flex-box py-24 gap-30">
      <SiteHeading
        icon={<MessageCircleQuestionMark className="size-5" />}
        id={id}
        slot={slot}
        title={title}
        description={description}
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
