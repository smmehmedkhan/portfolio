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
      <div className="size-full flex flex-col gap-2">
        <Heading
          className="text-lg sm:text-xl"
          variant="sub"
          size="xl"
          animated
          initial={fadeDown.initial}
          whileInView={fadeDown.whileInView}
          transition={{ ...fadeDown.transition, delay: 0.2 }}>
          {greeting}
        </Heading>
        <Heading
          className="text-xl sm:text-2xl h-12.5 sm:h-17.5 md:h-9 lg:h-18 2xl:h-10"
          variant="main"
          size="2xl"
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
