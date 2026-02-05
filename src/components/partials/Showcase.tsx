import { FolderKanban } from 'lucide-react'
import type { Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'
import { siteHeadings } from '@/data/siteHeadings'
import type { CardProps, InfoProps, ProjectProps, ProjectTypes } from '@/types'
import SiteHeading from '../assets/SiteHeading'
import { Button } from '../ui/button'
import { Heading } from '../ui/heading'

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

function Card({ image, title }: CardProps) {
  return (
    <div className="wrapper">
      <motion.div
        className={'card-container flex-center'}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}>
        <div className="splash" />
        <motion.div variants={cardVariants} className="card flex-box">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

function Info({
  title,
  description,
  longDescription,
  technologies,
  isEven,
}: InfoProps & { isEven: boolean }) {
  const getInfoClasses = (isEven: boolean) => {
    const base = 'info text-center lg:text-left'
    const alignment = isEven
      ? 'lg:items-start lg:text-left'
      : 'lg:items-end lg:text-right'
    return `${base} ${alignment}`
  }

  const getBadgeClasses = (isEven: boolean) => {
    const base = 'flex flex-wrap gap-2 justify-center'
    const justify = isEven ? 'lg:justify-start' : 'lg:justify-end'
    return `${base} ${justify}`
  }

  return (
    <div className={getInfoClasses(isEven)}>
      <Heading variant="primary-heading" size="xl">
        {title}
      </Heading>
      <Heading variant="secondary-heading" size="lg">
        {description}
      </Heading>
      <p className="leading-relaxed">{longDescription}</p>
      <div className={getBadgeClasses(isEven)}>
        {technologies.map((tech: string) => (
          <Badge key={tech} className="bg-accent text-accent-foreground">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function Project({ project, index }: ProjectProps) {
  const isEven = index % 2 === 0

  const getFlexDirection = (isEven: boolean) =>
    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'

  return (
    <div className="wrapper project">
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-0 ${getFlexDirection(isEven)}`}>
        <div className="w-full lg:w-1/2 flex justify-center">
          <Card {...project} />
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <Info isEven={isEven} {...project} />
        </div>
      </div>
      <div className="wrapper">
        <Button variant="outline" className="w-full sm:w-auto" asChild>
          <Link
            // amazonq-ignore-next-line
            href={`${project?.demoUrl}`}
            target="_blank"
            rel="noopener noreferrer">
            View Project
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function Showcase() {
  const { id, slot, title, description } = siteHeadings.project

  return (
    <section className="container showcase flex-box">
      <SiteHeading
        icon={<FolderKanban className="size-5" />}
        id={id}
        slot={slot}
        title={title}
        description={description}
      />

      {projects.map((project: ProjectTypes, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}
