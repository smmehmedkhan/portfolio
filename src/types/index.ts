import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
  ViewportOptions,
} from 'motion/react'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'

// ============================================
// Navigation Types
// ============================================
export interface NavLink {
  id: number
  href: string
  label: string
}

// ============================================
// Social Links Types
// ============================================
export interface SocialLink {
  id: string
  name: string
  href: string
  icon: IconType
}

export interface SocialLinksProps {
  className?: string
  buttonClassName?: string
  iconClassName?: string
  animated?: boolean
  delay?: number
}

// ============================================
// Animation Types
// ============================================
export interface AnimationConfig {
  initial: TargetAndTransition | VariantLabels
  whileInView?: TargetAndTransition | VariantLabels
  animate?: TargetAndTransition | VariantLabels
  transition: Transition
  viewport?: ViewportOptions
}

export type AnimationPresetName = string

// ============================================
// UI Component Types
// ============================================
export interface StarRatingProps {
  rating: number
  size?: number
}

export type AnimatedButtonProps = {
  href: string
  target?: string
  btnText: string
  icon?: ReactNode
  variant?:
    | 'link'
    | 'outline'
    | 'default'
    | 'destructive'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
  className?: string
  delay?: number
  swap?: boolean
}

// ============================================
// Error Types
// ============================================
export type AppError = Error & { statusCode?: number; digest?: string }

export interface ErrorInfo {
  code: string
  title: string
  message: string
}

export interface ErrorProps {
  error?: AppError | null
  reset?: () => void
}

export interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export interface ErrorBoundaryState {
  hasError: boolean
  error: AppError | null
}

// ============================================
// Hero Types
// ============================================
export type HeroTitleProps = {
  titles: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pause?: number
}

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
  headingAs?: 'h1' | 'h2' | 'h3'
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
  title: string
  features: ProjectFeatures[]
  image: string
  technologies: string[]
  url?: string
  source?: string
}

export type ProjectFeatures = {
  id: number
  name: string
  description: string
}

export type ProjectFeaturesProps = {
  page?: boolean
  features: ProjectFeatures[]
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
  url?: string
  source?: string
}

export type CaseBadgesProps = {
  isEven: boolean
  technologies: string[]
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
// Education Section Types
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
