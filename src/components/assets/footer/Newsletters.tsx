import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { getAnimationPreset } from '@/lib/animations/registry'
import NewsletterForm from './NewsletterForm'

export default function Newsletters() {
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper newsletters">
      <div className="newsletters-intro">
        <Heading
          className="text-foreground capitalize"
          variant="secondary"
          size="md"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={fadeDown.transition}>
          Subscribe to my newsletter
        </Heading>
        <Paragraph
          variant="lead"
          className="text-center"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.2 }}>
          Stay updated with my latest projects, tech insights, and development
          tips delivered to your inbox.
        </Paragraph>
      </div>
      <NewsletterForm />
    </div>
  )
}
