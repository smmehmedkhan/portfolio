export interface ProjectTypes {
  id: number
  name: string
  bio: string
  shortDescription: string
  longDescription?: string
  image: string
  technologies: string[]
  projectUrl?: string
  sourceUrl?: string
}

export interface ProjectProps {
  data: ProjectTypes
  isProjectPage: boolean
  index: number
}

export interface CaseCardProps {
  image: string
  name: string
}

export interface CaseInfoProps {
  name: string
  bio: string
  shortDescription: string
  longDescription?: string
  technologies: string[]
  projectUrl?: string
  sourceUrl?: string
}

export interface ProjectBtnTypes {
  isEven: boolean
  projectUrl?: string
  sourceUrl?: string
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
