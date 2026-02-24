import { MessageSquareText } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import AboutCaro from '@/components/assets/about/AboutCaro'
import AboutTypo from '@/components/assets/about/AboutTypo'
import SectionInro from '@/components/assets/SectionInro'
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

      <section className="container about gap-25">
        {/* About content layout */}
        <div className="about-layout alter">
          <div className="wrapper about-typo">
            <div className="wrapper gap-2">
              <Heading
                className="size-full text-center lg:text-right tracking-normal lg:tracking-wide"
                variant="role"
                size="nm">
                My Passion
              </Heading>
              <Paragraph className="text-center lg:text-right tracking-normal lg:tracking-wide">
                Web development isn't just my career — it's what genuinely
                excites me. A simple curiosity about how internet works grew
                into building fast, scalable, and meaningful web experiences.
              </Paragraph>
            </div>
            <div className="wrapper gap-2">
              <Heading
                className="size-full text-center lg:text-right tracking-normal lg:tracking-wide"
                variant="role"
                size="nm">
                My Passion
              </Heading>
              <Paragraph className="text-center lg:text-right tracking-normal lg:tracking-wide">
                Web development isn't just my career — it's what genuinely
                excites me. A simple curiosity about how internet works grew
                into building fast, scalable, and meaningful web experiences.
              </Paragraph>
            </div>
          </div>
          <AboutCaro data={aboutImages} />
        </div>

        <div className="about-layout flip">
          <AboutCaro data={aboutImages} />
          <div className="wrapper about-typo">
            <div className="wrapper gap-2">
              <Heading
                className="size-full text-center lg:text-left tracking-normal lg:tracking-wide"
                variant="role"
                size="nm">
                My Passion
              </Heading>
              <Paragraph className="text-center lg:text-left tracking-normal lg:tracking-wide">
                Web development isn't just my career — it's what genuinely
                excites me. A simple curiosity about how internet works grew
                into building fast, scalable, and meaningful web experiences.
              </Paragraph>
            </div>
            <div className="wrapper gap-2">
              <Heading
                className="size-full text-center lg:text-left tracking-normal lg:tracking-wide"
                variant="role"
                size="nm">
                My Passion
              </Heading>
              <Paragraph className="text-center lg:text-left tracking-normal lg:tracking-wide">
                Web development isn't just my career — it's what genuinely
                excites me. A simple curiosity about how internet works grew
                into building fast, scalable, and meaningful web experiences.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
