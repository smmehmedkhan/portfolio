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
    <section className="flex-box skills py-24">
      <div className="container flex-box gap-10">
        <SiteHeadings>My skill sets</SiteHeadings>
        <div className="grid-box">
          {/* Languages */}
          <div className="wrapper">
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
          <div className="wrapper">
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
          <div className="wrapper">
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
          <div className="wrapper">
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
          <div className="wrapper">
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
          <div className="wrapper">
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
    <h3 className="text-2xl text-muted-foreground font-semibold my-5">
      {children}
    </h3>
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
