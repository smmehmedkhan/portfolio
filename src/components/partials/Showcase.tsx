import { FolderKanban } from 'lucide-react'
import type { Variants } from 'motion/react'

import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'
import SectionInro from '@/components/assets/SectionInro'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { projects } from '@/data/projects'
import { sectionInros } from '@/data/sectionInros'
import type { CardProps, InfoProps, ProjectProps, ProjectTypes } from '@/types'
import { Paragraph } from '../ui/paragraph'

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
        {/* Splash Canvas */}
        <motion.svg
          className="splash"
          viewBox="0 0 500 450"
          width="500"
          height="450"
          preserveAspectRatio="xMidYMid meet">
          <title>Splash canvas</title>
          <defs>
            <linearGradient
              id="splashGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor="#fd9a00" />
              <stop offset="50%" stopColor="#7ccf00" />
              <stop offset="100%" stopColor="#00bc7d" />
            </linearGradient>
          </defs>
          <path
            d="M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z"
            fill="url(#splashGradient)"
          />
        </motion.svg>
        <motion.div
          variants={cardVariants}
          className="card flex-box xs:w-50 sm:w-80 xl:w-85 xs:h-65 sm:h-100 xl:h-110">
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
    const alignment = isEven
      ? 'lg:items-start lg:text-left'
      : 'lg:items-end lg:text-right'
    return `info ${alignment}`
  }

  const getBadgeClasses = (isEven: boolean) => {
    const justify = isEven ? 'lg:justify-start' : 'lg:justify-end'
    return `badge-container ${justify}`
  }

  return (
    <div className="wrapper">
      <div className={getInfoClasses(isEven)}>
        <Heading variant="secondary-heading" className="text-foreground">
          {title}
        </Heading>
        <Paragraph variant="lead">{description}</Paragraph>
        <Paragraph className="leading-relaxed">{longDescription}</Paragraph>
        <div className={getBadgeClasses(isEven)}>
          {technologies.map((tech: string) => (
            <Badge
              className="w-fit xs:px-2 px-3 xs:py-0.5 py-1 bg-accent text-accent-foreground text-sm lg:text-nm font-medium"
              key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
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
      <div className={`alignment ${getFlexDirection(isEven)}`}>
        <Card {...project} />
        <Info isEven={isEven} {...project} />
      </div>
      <div className="wrapper">
        <Button
          variant="outline"
          className="size-full max-w-sm lg:w-fit"
          asChild>
          <Link
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
  return (
    <section className="container showcase flex-box">
      <SectionInro
        data={sectionInros.project}
        icon={<FolderKanban className="xs:size-3 sm:size-4 md:size-5" />}
      />

      {projects.map((project: ProjectTypes, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </section>
  )
}
