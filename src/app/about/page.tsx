import type { Metadata } from 'next'
import AboutAvater from '@/components/assets/about/AboutAvater'
import AboutCard from '@/components/assets/about/AboutCard'
import AboutContributions from '@/components/assets/about/AboutContributions'
import AboutTypo from '@/components/assets/about/AboutTypo'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { CONFIG } from '@/constants/config'
import { aboutCardContent, aboutTypographys } from '@/data/about'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE} specializing in ${CONFIG.SITE.KEYWORDS.join(', ')}. ${CONFIG.PERSONAL.BIO}`,
  openGraph: {
    title: `About | ${CONFIG.SITE.NAME}`,
    description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE} specializing in modern web development.`,
    url: `${CONFIG.SITE.URL}/about`,
    images: [
      {
        url: '/images/Mehmed_Khan.png',
        width: 1200,
        height: 630,
        alt: `${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${CONFIG.SITE.NAME}`,
    description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE}.`,
    images: ['/images/mehmed_khan.webp'],
  },
}

export default function AboutPage() {
  return (
    <main className="wrapper about-page">
      <section className="container about-pg-container flex-box">
        {/* Top: Page Introduction */}
        <div className="wrapper gap-3">
          <Heading className="leading-tight" animated>
            Who am I
            <br />
            <span className="text-accent">behind</span>{' '}
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
          <AboutTypo data={aboutTypographys} page={true} />
        </div>
      </section>

      {/* Experience & Evoluation */}
      <section className="container about-expevo flex-center flip">
        {/* left: Expevo Headings */}
        <div className="expevo-container">
          <Heading
            className="size-full text-center lg:text-start leading-tight"
            animated>
            Experience
            <br />
            <span className="text-accent">&</span>{' '}
            <span className="text-primary">Evolution</span>
          </Heading>
          <Paragraph
            variant="lead"
            className="w-full lg:max-w-2xl text-center lg:text-start"
            animated
            transition={{ delay: 0.2 }}>
            I specialize in building performant, accessible applications that
            solve real-world problems.
          </Paragraph>
        </div>

        {/* Right: About Cards */}
        <div className="wrapper about-card-container">
          <div className="about-card-grid">
            {aboutCardContent.map((item, index) => (
              <AboutCard key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="container flex-box gap-10 sm:gap-15 md:gap-20 lg:gap-25">
        <div className="wrapper gap-3">
          <Heading className="leading-tight" animated>
            Contributions
            <br />
            <span className="text-accent">&</span>{' '}
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
    </main>
  )
}
