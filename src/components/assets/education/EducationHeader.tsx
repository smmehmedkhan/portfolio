import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export default function EducationHeader() {
  return (
    <header className="wrapper xs:max-w-md sm:max-w-lg md:max-w-2xl gap-3 sm:gap-4 md:gap-5">
      <Heading className="size-full text-center leading-tight" as="h2" animated>
        Education
        <br />
        <span className="text-amber-600 dark:text-accent">&</span>{' '}
        <span className="text-primary">Learnings</span>
      </Heading>
      <Paragraph
        variant="lead"
        className="w-full text-center text-balance"
        animated
        transition={{ delay: 0.2 }}>
        I am a lifelong learner, constantly seeking new knowledge and skills to
        stay at the forefront of the industry.
      </Paragraph>
    </header>
  )
}
