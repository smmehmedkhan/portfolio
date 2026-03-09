import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export default function ExperienceIntro() {
  return (
    <div className="expevo-container">
      <Heading
        className="size-full text-center lg:text-start leading-tight"
        animated>
        Experience
        <br />
        <span className="text-amber-500 dark:text-accent">&</span>{' '}
        <span className="text-primary">Evolution</span>
      </Heading>
      <Paragraph
        variant="lead"
        className="w-full lg:max-w-2xl text-center lg:text-start"
        animated
        transition={{ delay: 0.2 }}>
        I specialize in building performant, accessible applications that solve
        real-world problems.
      </Paragraph>
    </div>
  )
}
