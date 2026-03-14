import { FilesIcon, PhoneIcon } from 'lucide-react'
import HeroTitle from '@/components/assets/hero/HeroTitle'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { heroIntro } from '@/data/HeroIntro'
import AnimatedButton from '../AnimatedButton'

export default function HeroIntro() {
  const { greeting, titles, description } = heroIntro

  return (
    <div className="wrapper hero-intro">
      {/* Headings */}
      <div className="headings">
        <Heading
          className="text-lg sm:text-xl"
          variant="sub"
          size="xl"
          animated>
          {greeting}
        </Heading>
        <Heading
          className="text-xl sm:text-2xl h-12.5 sm:h-17.5 md:h-9 lg:h-18 2xl:h-10"
          variant="main"
          size="2xl"
          animated
          transition={{ delay: 0.2 }}>
          <span className="block md:inline lg:block 2xl:inline">I'm a</span>{' '}
          <HeroTitle titles={titles} />
        </Heading>
      </div>

      {/* Description */}
      <Paragraph
        className="size-full text-balance"
        animated
        transition={{ delay: 0.4 }}>
        <Paragraph className="mr-2" as="span">
          ❛
        </Paragraph>
        {description}
        <Paragraph className="ml-2" as="span">
          ❜
        </Paragraph>
      </Paragraph>

      {/* Call to Action Buttons */}
      <div className="buttons box-border">
        <AnimatedButton
          className="lg:size-fit"
          variant="default"
          href="/contact"
          icon={<PhoneIcon />}
          btnText="Contact Me"
          swap={true}
        />
        <AnimatedButton
          className="lg:size-fit"
          variant="secondary"
          href="/resume"
          icon={<FilesIcon />}
          btnText="Resume"
          swap={true}
        />
      </div>
    </div>
  )
}
