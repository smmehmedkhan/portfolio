import { Gem } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SectionInro from '@/components/assets/SectionInro'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { sectionInros } from '@/data/sectionInros'
import { skills } from '@/data/skillsList'

export default function TechStack() {
  return (
    <section className="container skills flex-box">
      <SectionInro
        data={sectionInros.skills}
        icon={<Gem className="xs:size-3 sm:size-4 md:size-5" />}
      />

      {/* Bottom: Skills layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full">
        {/* Languages */}
        <div className="wrapper gap-4 md:gap-6 lg:gap-7.5">
          <Heading variant="secondary-heading" size="xl">
            Languages
          </Heading>
          <ul className="flex-center skills-list">
            {skills.languages.map(lang => (
              <li key={lang.id}>
                <ItemCard
                  title={lang.title}
                  imageSource={lang.src}
                  siteLink={lang.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Frontend */}
        <div className="wrapper gap-4 md:gap-6 lg:gap-7.5">
          <Heading variant="secondary-heading" size="xl">
            Frontend
          </Heading>
          <ul className="flex-center skills-list">
            {skills.frontend.map(lang => (
              <li key={lang.id}>
                <ItemCard
                  title={lang.title}
                  imageSource={lang.src}
                  siteLink={lang.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="wrapper gap-4 md:gap-6 lg:gap-7.5">
          <Heading variant="secondary-heading" size="xl">
            Backend
          </Heading>
          <ul className="flex-center skills-list">
            {skills.backend.map(lang => (
              <li key={lang.id}>
                <ItemCard
                  title={lang.title}
                  imageSource={lang.src}
                  siteLink={lang.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Database */}
        <div className="wrapper gap-4 md:gap-6 lg:gap-7.5">
          <Heading variant="secondary-heading" size="xl">
            Database
          </Heading>
          <ul className="flex-center skills-list">
            {skills.database.map(lang => (
              <li key={lang.id}>
                <ItemCard
                  title={lang.title}
                  imageSource={lang.src}
                  siteLink={lang.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Advanced */}
        <div className="wrapper gap-4 md:gap-6 lg:gap-7.5">
          <Heading variant="secondary-heading" size="xl">
            Advanced
          </Heading>
          <ul className="flex-center skills-list">
            {skills.advanced.map(lang => (
              <li key={lang.id}>
                <ItemCard
                  title={lang.title}
                  imageSource={lang.src}
                  siteLink={lang.link}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="wrapper gap-4 md:gap-6 lg:gap-7.5">
          <Heading variant="secondary-heading" size="xl">
            Tools
          </Heading>
          <ul className="flex-center skills-list">
            {skills.tools.map(lang => (
              <li key={lang.id}>
                <ItemCard
                  title={lang.title}
                  imageSource={lang.src}
                  siteLink={lang.link}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ItemCard({
  title,
  imageSource,
  siteLink,
}: {
  title: string
  imageSource: string
  siteLink: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" className="size-12 sm:size-14 p-2 rounded-xl">
          <Link href={siteLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageSource}
              alt={title}
              width={48}
              height={48}
              className="size-8 sm:size-10 lg:size-12 object-contain"
            />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
