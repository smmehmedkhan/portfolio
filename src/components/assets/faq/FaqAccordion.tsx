'use client'

import { motion } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Paragraph } from '@/components/ui/paragraph'
import { faqData } from '@/data/faq'
import { getAnimationPreset } from '@/lib/animations/registry'

const MAccordion = motion.create(Accordion)

export default function FaqAccordion() {
  const fade = getAnimationPreset('fade')

  return (
    <MAccordion
      className="accordion"
      type="single"
      // @ts-expect-error - motion.create doesn't properly infer Radix UI discriminated union types
      collapsible
      defaultValue={faqData[0]?.id}
      initial={fade.initial}
      whileInView={fade.whileInView}
      transition={{ ...fade.transition, delay: 0.2 }}
      viewport={{ amount: 0.6 }}>
      {faqData.map((faq, index) => (
        <AccordionItem
          key={faq.id}
          value={faq.id}
          className={`px-5 ${index < faqData.length - 1 ? 'border-b border-border' : ''}`}>
          <AccordionTrigger className="cursor-pointer group hover:no-underline">
            <span className="text-md md:text-lg group-hover:text-accent transition-colors duration-300 ease-in-out">
              {faq.question}
            </span>
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
    </MAccordion>
  )
}
