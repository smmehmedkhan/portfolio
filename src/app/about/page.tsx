import { Book } from 'lucide-react'
import type { Metadata } from 'next'
import AboutAvater from '@/components/assets/about/AboutAvater'
import AboutCard from '@/components/assets/about/AboutCard'
import AboutTypo from '@/components/assets/about/AboutTypo'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
            Proven expertise in full-stack development, cloud infrastructure,
            and agile methodologies. I specialize in building performant,
            accessible applications that solve real-world problems.
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

      <section className="container flex-box gap-10">
        <Heading className="text-center">Educations & Qualifications</Heading>

        <div className="wrapper">
          <div className="size-full grid grid-cols-1 lg:grid-cols-3 gap-7.5">
            {[1, 2, 3].map(item => (
              <Card key={item} className="border border-border bg-card">
                <CardHeader className="flex items-center justify-between">
                  <div className="size-12 p-2 rounded-lg bg-primary dark:bg-primary/15 flex-center">
                    <Book
                      size={100}
                      className="size-10 text-primary-foreground dark:text-primary"
                    />
                  </div>
                  <Badge className="bg-accent dark:bg-accent/15 text-accent-foreground dark:text-accent">
                    hello
                  </Badge>
                </CardHeader>
                <CardContent className="size-full flex flex-col gap-2">
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    <Paragraph
                      variant="muted"
                      size="nm"
                      className="text-sm md:text-nm leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Paragraph>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
