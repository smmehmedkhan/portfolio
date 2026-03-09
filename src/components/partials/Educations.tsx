import { Heading } from '../ui/heading'
import { Paragraph } from '../ui/paragraph'

export default function Educations() {
  return (
    <section className="container about-expevo flex-center flip">
      {/* left: Expevo Headings */}
      <div className="expevo-container">
        <Heading
          className="size-full text-center lg:text-start leading-tight"
          animated>
          Education
          <br />
          <span className="text-amber-500 dark:text-accent">&</span>{' '}
          <span className="text-primary">Learnings</span>
        </Heading>
        <Paragraph
          variant="lead"
          className="w-full lg:max-w-2xl text-center lg:text-start"
          animated
          transition={{ delay: 0.2 }}>
          I am a lifelong learner, constantly seeking new knowledge and skills
          to stay at the forefront of the industry. I am passionate about
          sharing my learnings with others and contributing to the growth of the
          tech community.
        </Paragraph>
      </div>

      {/* Right: About Cards */}
      <div className="wrapper about-card-container">
        {/* <div className="about-card-grid">
          {aboutCardContent.map((item, index) => (
            <AboutCard key={item.id} {...item} index={index} />
          ))}
        </div> */}
      </div>
    </section>
  )
}
