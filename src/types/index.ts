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

export interface CaseCardProps {
  image: string
  title: string
}

export interface CaseInfoProps {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
}

export interface SkillCategory {
  id: number
  title: string
  icon: string
  items: SkillItem[]
}

export interface SkillItem {
  id: number
  title: string
  src: string
  link: string
  description: string
  joined: string
}

export interface SkillCardProps {
  item: SkillItem
  index: number
}
