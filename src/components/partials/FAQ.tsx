import { MessageCircleQuestionMark } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
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
        className="w-full max-w-tablet bg-card border border-border rounded-md"
        defaultValue="item-1">
        <AccordionItem value="item-1" className="px-3 border-b border-border">
          <AccordionTrigger className="hover:text-primary">
            <Heading size="lg">Product Information</Heading>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <Paragraph>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </Paragraph>
            <Paragraph>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="px-3 border border-border rounded-md">
          <AccordionTrigger>
            <Heading size="lg">Shipping Details</Heading>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <Paragraph>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </Paragraph>
            <Paragraph>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="px-3 border border-border rounded-md">
          <AccordionTrigger>
            <Heading size="lg">Return Policy</Heading>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="px-3 border border-border rounded-md">
          <AccordionTrigger>
            <Heading size="lg">Lorem, ipsum dolor.</Heading>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="px-3 border border-border rounded-md">
          <AccordionTrigger>
            <Heading size="lg">Lorem ipsum dolor sit.</Heading>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
