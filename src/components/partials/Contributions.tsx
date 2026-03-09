import AboutContributions from '@/components/assets/about/GithubContribution'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { CONFIG } from '@/constants/config'

export default function Contributions() {
  return (
    <section className="container flex-box gap-10 sm:gap-15 md:gap-20 lg:gap-25">
      <div className="wrapper gap-3">
        <Heading className="leading-tight" animated>
          Contributions
          <br />
          <span className="text-amber-500 dark:text-accent">&</span>{' '}
          <span className="text-primary">Activity</span>
        </Heading>
        <Paragraph
          variant="lead"
          className="w-full max-w-lg text-center"
          animated
          transition={{ delay: 0.2 }}>
          A visual representation of my coding journey and open-source
          contributions.
        </Paragraph>
      </div>

      <AboutContributions username={CONFIG.SOCIAL.GITHUB_USERNAME} />
    </section>
  )
}
