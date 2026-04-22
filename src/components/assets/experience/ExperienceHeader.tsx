import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export default function ExperienceHeader() {
  return (
    <header className="exp-intro">
      <Heading
        className="size-full text-center lg:text-start leading-tight"
        as="h2"
        animated>
        Experience
        <br />
        <span className="text-amber-600 dark:text-accent">&</span>{' '}
        <span className="text-primary">Evolution</span>
      </Heading>
      <Paragraph
        variant="lead"
        className="w-full max-w-2xl text-center lg:text-start"
        animated
        transition={{ delay: 0.2 }}>
        I specialize in building performant, accessible applications that solve
        real-world problems.
      </Paragraph>
    </header>
  )
}
