import { FolderKanban } from 'lucide-react'
import type { Variants } from 'motion/react'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'
import { siteHeadings } from '@/data/siteHeadings'
import type { CardProps, InfoProps, ProjectProps, ProjectTypes } from '@/types'
import SiteHeading from '../assets/SiteHeading'
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
  return (
    <div
      className={`info ${isEven ? 'items-start text-left' : 'items-end text-right'}`}>
      <Heading variant="primary-heading" size="xl">
        {title}
      </Heading>
      <Heading variant="secondary-heading" size="lg">
        {description}
      </Heading>
      <p className="leading-relaxed">{longDescription}</p>
      <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'justify-end'}`}>
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

  return (
    <div className={`project flex-inline ${isEven ? '' : 'flex-row-reverse'}`}>
      <Card {...project} />
      <Info isEven={isEven} {...project} />
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
