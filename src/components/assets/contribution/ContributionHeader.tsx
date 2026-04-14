import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export default function ContributionHeader() {
  return (
    <header className="wrapper gap-3">
      <Heading className="leading-tight" animated>
        Contributions
        <br />
        <span className="text-amber-600 dark:text-accent">&</span>{' '}
        <span className="text-primary">Activity</span>
      </Heading>
      <Paragraph
        variant="lead"
        className="w-full max-w-lg text-center"
        animated
        transition={{ delay: 0.2 }}>
        A visual representation of my coding journey and open-source
        contributions.
      </Paragraph>
    </header>
  )
}
