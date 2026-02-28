import { MessageSquareText } from 'lucide-react'
import type { Metadata } from 'next'
import AboutCaro from '@/components/assets/about/AboutCaro'
import AboutTypoBlock from '@/components/assets/about/AboutTypoBlock'
import SectionInro from '@/components/assets/SectionInro'
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
        <div className="about-layout">
          <AboutCaro data={aboutImages} />
          <div className="wrapper about-typo">
            {/* Top: About typography items */}
            {aboutTypographys.map((item, index) => (
              <AboutTypoBlock key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
        <div className="size-full flex-center gap-10">
          <div className="size-full max-w-md p-10 bg-card border border-border rounded-lg flex-box gap-2">
            <h3 className="text-center font-bold">Available for work</h3>
            <p className="text-center text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic
              sint at totam modi vel voluptate nobis architecto blanditiis magni
              neque ratione excepturi beatae ducimus asperiores eos adipisci
              nisi maiores, laudantium, tempora dignissimos sed dolorum. Iusto
              cum veritatis fugiat dolorum, eius, fuga voluptas veniam labore
              molestiae dignissimos beatae quas non?
            </p>
          </div>
          <div className="size-full max-w-md p-10 bg-card border border-border rounded-lg flex-box gap-2">
            <h3 className="text-center font-bold">Available for work</h3>
            <p className="text-center text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic
              sint at totam modi vel voluptate nobis architecto blanditiis magni
              neque ratione excepturi beatae ducimus asperiores eos adipisci
              nisi maiores, laudantium, tempora dignissimos sed dolorum. Iusto
              cum veritatis fugiat dolorum, eius, fuga voluptas veniam labore
              molestiae dignissimos beatae quas non?
            </p>
          </div>
          <div className="size-full max-w-md p-10 bg-card border border-border rounded-lg flex-box gap-2">
            <h3 className="text-center font-bold">Available for work</h3>
            <p className="text-center text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic
              sint at totam modi vel voluptate nobis architecto blanditiis magni
              neque ratione excepturi beatae ducimus asperiores eos adipisci
              nisi maiores, laudantium, tempora dignissimos sed dolorum. Iusto
              cum veritatis fugiat dolorum, eius, fuga voluptas veniam labore
              molestiae dignissimos beatae quas non?
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
