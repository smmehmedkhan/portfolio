// ============================================
// Sections Intro Types
// ============================================
export interface SectionIntro {
  id: number
  icon: string
  label: string
  title: string
  description: string
}

export type SectionIntroProps = {
  badgeStyles?: string
  headingStyles?: string
  paragraphStyles?: string
  data: SectionIntro
}

// ============================================
// About Section Types
// ============================================
export interface AboutImage {
  id: number
  url: string
  alt: string
}

export interface AboutDescription {
  id: number
  title: string
  description: string
}

export type AboutTypoBlockProps = {
  index: number
  data: AboutDescription
}

// ============================================
// Experience Section Types
// ============================================
export interface Experience {
  id: number
  icon: string
  title: string
  description: string
  expertise: string
}

export type ExperienceCardProps = {
  index?: number
  data: Experience
}

// ============================================
// Projects Section Types
// ============================================
export interface Project {
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

export type ProjectProps = {
  index: number
  data: Project
  page?: boolean
}

export type CaseCardProps = {
  image: string
  name: string
}

export type CaseInfoProps = {
  isEven: boolean
  page?: boolean
  data: Project
}

export type ProjectBtnProps = {
  isEven: boolean
  projectUrl?: string
  sourceUrl?: string
}

// ============================================
// Skills Section Types
// ============================================
export interface SkillsCategory {
  id: number
  icon: string
  title: string
  skills: Skill[]
}

export interface Skill {
  id: number
  title: string
  description: string
  image: string
  url: string
  joined: string
}

export type SkillItemProps = {
  index: number
  data: Skill
}

// ============================================
// Testimonial Section Types
// ============================================
export interface Testimonial {
  id: number
  name: string
  image: string
  position: string
  feedback: string
  rating: number
}

// ============================================
// FAQ Section Types
// ============================================
export interface FAQItem {
  id: string
  question: string
  answer: string[]
}

// ============================================
// Educatons Section Types
// ============================================
export interface Educaton {
  id: number
  icon: string
  degree: string
  institute: string
  board: string
  description: string
  startDate: Date
  endDate: Date | string
  field?: string
  gpa?: number
}

export type EducationCardProps = {
  index: number
  data: Educaton
}
