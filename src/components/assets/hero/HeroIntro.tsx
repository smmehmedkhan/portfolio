import { HeroButtons } from '@/components/assets/hero/HeroButtons'
import HeroTitle from '@/components/assets/hero/HeroTitle'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { heroIntro } from '@/data/HeroIntro'
import { getAnimationPreset } from '@/lib/animations/registry'

export default function HeroIntro() {
  const { greeting, titles, description } = heroIntro
  const fadeDown = getAnimationPreset('fade-down')

  return (
    <div className="wrapper hero-intro">
      {/* Headings */}
      <div className="size-full">
        <Heading
          variant="sub"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.2 }}>
          {greeting}
        </Heading>
        <Heading
          variant="main"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.4 }}>
          <span className="block md:inline lg:block 2xl:inline">I'm a</span>{' '}
          <HeroTitle titles={titles} />
        </Heading>
      </div>

      {/* Description */}
      <div className="size-full">
        <Paragraph
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.6 }}>
          <Paragraph className="mr-2" as="span">
            ❛
          </Paragraph>
          {description}
          <Paragraph className="ml-2" as="span">
            ❜
          </Paragraph>
        </Paragraph>
      </div>

      {/* Call to Action Buttons */}
      <HeroButtons />
    </div>
  )
}
