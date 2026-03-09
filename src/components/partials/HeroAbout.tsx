import AboutAvater from '@/components/assets/about/AboutAvater'
import AboutTypo from '@/components/assets/about/AboutTypo'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export default function HeroAbout() {
  return (
    <header className="container about-pg-container flex-box">
      {/* Top: Page Introduction */}
      <div className="wrapper gap-3">
        <Heading className="leading-tight" animated>
          Who am I
          <br />
          <span className="text-amber-500 dark:text-accent">behind</span>{' '}
          <span className="text-primary">the code?</span>
        </Heading>
        <Paragraph
          variant="lead"
          className="w-full max-w-lg text-center"
          animated
          transition={{ delay: 0.2 }}>
          I craft engaging digital experiences with modern web technologies.
        </Paragraph>
      </div>

      {/* Bottom: About Avatar & Typography */}
      <div className="about-pg-layout flex-center flip">
        <AboutAvater />
        <AboutTypo page={true} />
      </div>
    </header>
  )
}
