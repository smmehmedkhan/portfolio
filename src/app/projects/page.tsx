import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import SiteHeadings from '@/components/ui/SiteHeadings'
import { CONFIG } from '@/constants/config'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore projects by ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Showcase of web applications built with ${CONFIG.SITE.KEYWORDS.slice(0, 3).join(', ')}, and modern web technologies.`,
  openGraph: {
    title: `Projects | ${CONFIG.SITE.NAME}`,
    description: `Explore projects by ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}. Showcase of web applications and modern web technologies.`,
    url: `${CONFIG.SITE.URL}/projects`,
    images: [
      {
        url: '/images/mehmed-khan.png',
        width: 1200,
        height: 630,
        alt: `Projects by ${CONFIG.PERSONAL.NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${CONFIG.SITE.NAME}`,
    description: `Explore projects by ${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}.`,
    images: ['/images/mehmed-khan.png'],
  },
}

export default function ProjectPage() {
  return (
    <main className="w-full min-h-dvh container py-20">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <SiteHeadings>My Projects</SiteHeadings>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore a collection of projects I've built using modern web
            technologies. Each project demonstrates different aspects of
            full-stack development, from responsive frontends to scalable
            backend APIs.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center border-b border-border pb-12 last:border-b-0`}>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square border-2 border-border rounded-lg p-8 bg-muted/20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>

              <div
                className={`w-full md:w-1/2 flex flex-col gap-4 ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                <h2 className="text-3xl font-bold text-primary">
                  {project.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
                <p className="text-base leading-relaxed">
                  {project.longDescription}
                </p>

                <div
                  className={`flex flex-wrap gap-2 mt-4 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}>
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {(project.demoUrl || project.githubUrl) && (
                  <div
                    className={`flex gap-4 mt-6 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}>
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium">
                        Live Demo →
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium">
                        View Code →
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in working together or have a project in mind?
          </p>
          <Link
            href="/contact"
            className="text-primary hover:underline font-medium text-lg">
            Get in touch →
          </Link>
        </div>
      </div>
    </main>
  )
}
