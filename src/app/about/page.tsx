import { Book, MessageSquareText } from 'lucide-react'
import type { Metadata } from 'next'
import AboutCaro from '@/components/assets/about/AboutCaro'
import AboutTypoBlock from '@/components/assets/about/AboutTypoBlock'
import SectionInro from '@/components/assets/SectionInro'
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
import { aboutImages, aboutTypographys } from '@/data/about'
import { sectionInros } from '@/data/sectionInros'

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
    <main className="wrapper pt-10 sm:pt-15 md:pt-20 lg:pt-25">
      <SectionInro data={sectionInros.about} icon={<MessageSquareText />} />

      <section className="container about flex-box">
        <div className="about-layout flip">
          <AboutCaro data={aboutImages} className="wrapper about-caro" />
          <div className="wrapper about-typo">
            {/* Top: About typography items */}
            {aboutTypographys.map((item, index) => (
              <AboutTypoBlock key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
        <div className="about-layout flip">
          {/* left: About Headings */}
          <div className="size-full flex flex-col flex-2/5 gap-2">
            <Heading size="xl" className="text-center lg:text-start">
              My Working Exprience
            </Heading>
            <Paragraph variant="lead" className="text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              aut?
            </Paragraph>
          </div>

          {/* Right: About Cards */}
          <div className="wrapper flex-3/5">
            <div className="size-full grid grid-cols-1 lg:grid-cols-2 gap-7.5">
              {[1, 2, 3, 4, 5, 6].map(item => (
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
        </div>
        <div className="about-layout flex-box">
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
        </div>
      </section>
    </main>
  )
}
