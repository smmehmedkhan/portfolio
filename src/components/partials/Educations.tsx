import EducationCard from '@/components/assets/education/EducationCard'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { educatons } from '@/data/education'

export default function Educations() {
  return (
    <section className="wrapper education">
      {/* left: Education Headings */}
      <div className="wrapper xs:max-w-md sm:max-w-lg md:max-w-2xl gap-3 sm:gap-4 md:gap-5">
        <Heading className="size-full text-center leading-tight" animated>
          Education
          <br />
          <span className="text-amber-500 dark:text-accent">&</span>{' '}
          <span className="text-primary">Learnings</span>
        </Heading>
        <Paragraph
          variant="lead"
          className="w-full text-center text-balance"
          animated
          transition={{ delay: 0.2 }}>
          I am a lifelong learner, constantly seeking new knowledge and skills
          to stay at the forefront of the industry.
        </Paragraph>
      </div>

      {/* Right: Education Cards */}
      <div className="edu-layout flex-inline flip">
        {educatons.map((item, index) => (
          <EducationCard key={item.id} data={item} index={index} />
        ))}
      </div>
    </section>
  )
}
