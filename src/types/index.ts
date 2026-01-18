export interface ProjectTypes {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

export interface ProjectProps {
  project: ProjectTypes
  index: number
}

export interface CardProps {
  image: string
  title: string
}

export interface InfoProps {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}
