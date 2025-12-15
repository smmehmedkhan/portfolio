import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { skills } from '@/constants/skillsList'
import PrimaryHeading from '../ui/PrimaryHeading'

export default function TechStack() {
  return (
    <section className="flex-box container gap-16 py-24">
      <PrimaryHeading>My skill sets</PrimaryHeading>
      <div className="grid-box">
        {/* Languages */}
        <div className="wrapper">
          <GroupTitle>Languages</GroupTitle>
          <ul className="flex-box-inline gap-5">
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
          <ul className="flex-box-inline gap-5">
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
          <ul className="flex-box-inline gap-5">
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
          <ul className="flex-box-inline gap-5">
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
          <ul className="flex-box-inline gap-5">
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
          <ul className="flex-box-inline gap-5">
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
        <div className="w-16 h-16 p-2 border-border border-2 rounded-2xl flex place-content-center bg-accent/50 hover:bg-primary/15 hover:border-primary/50 transition-colors duration-300 ease-in-out">
          <Link href={siteLink} target="_blank">
            <Image
              src={imageSource}
              alt={title}
              width={48}
              height={48}
              className="flex-box object-contain"
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
