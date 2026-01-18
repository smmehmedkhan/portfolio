import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import SiteHeadings from '@/components/ui/SiteHeadings'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { skills } from '@/data/skillsList'

export default function TechStack() {
  return (
    <section className="skills flex-box">
      <div className="container flex-box">
        <SiteHeadings className="secondary-headings">
          My skill sets
        </SiteHeadings>
        <div className="grid-box mb-20">
          {/* Languages */}
          <div className="wrapper gap-10">
            <GroupTitle>Languages</GroupTitle>
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
          <div className="wrapper gap-10">
            <GroupTitle>Frontend</GroupTitle>
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
          <div className="wrapper gap-10">
            <GroupTitle>Backend</GroupTitle>
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
          <div className="wrapper gap-10">
            <GroupTitle>Database</GroupTitle>
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
          <div className="wrapper gap-10">
            <GroupTitle>Advanced</GroupTitle>
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
          <div className="wrapper gap-10">
            <GroupTitle>Tools</GroupTitle>
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
      </div>
    </section>
  )
}

function GroupTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xl text-secondary-foreground font-bold">{children}</h3>
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
        <div className="skill-item">
          <Link href={siteLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageSource}
              alt={title}
              width={48}
              height={48}
              className="size-12 object-contain"
              sizes="48px"
            />
          </Link>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
