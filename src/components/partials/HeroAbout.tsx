import AboutAvater from '@/components/assets/about/AboutAvater'
import AboutTypo from '@/components/assets/about/AboutTypo'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'

export default function HeroAbout() {
  return (
    <header className="wrapper hero-about">
      {/* Top: Page Introduction */}
      <div className="wrapper xs:max-w-md sm:max-w-lg md:max-w-2xl gap-3 sm:gap-4 md:gap-5">
        <Heading className="leading-tight" animated>
          Who am I
          <br />
          <span className="text-amber-500 dark:text-accent">behind</span>{' '}
          <span className="text-primary">the code?</span>
        </Heading>
        <Paragraph
          variant="lead"
          className="w-full text-center text-balance"
          animated
          transition={{ delay: 0.2 }}>
          I craft engaging digital experiences with modern web technologies.
        </Paragraph>
      </div>

      {/* Bottom: About Avatar & Typography */}
      <div className="illustratioin flex-center flip">
        <AboutAvater />
        <AboutTypo page={true} />
      </div>
    </header>
  )
}
