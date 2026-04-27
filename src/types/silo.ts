import { Language } from './common'
import { Route } from './navigation'

export enum SiloSlug {
  YOGA_TEACHERS = 'yoga-teachers',
  MEDITATION_RETREATS = 'meditation-retreats',
  WRITING_RETREATS = 'writing-retreats',
  TEAM_OFFSITES = 'team-offsites',
  BREATHWORK_SOUND_HEALING = 'breathwork-sound-healing',
  COACHING_INTENSIVES = 'coaching-intensives',
  SOMATIC_THERAPY_RETREATS = 'somatic-therapy-retreats',
  WELLNESS_DETOX_RETREATS = 'wellness-detox-retreats',
  CIRCLE_RETREATS = 'circle-retreats',
  PHOTOGRAPHY_WORKSHOPS = 'photography-workshops',
}

export type SiloLocalizedString = Record<Language, string>
export type SiloLocalizedStringList = Record<Language, readonly string[]>

export interface SiloHero {
  eyebrow: SiloLocalizedString
  title: SiloLocalizedString
  subtitle: SiloLocalizedString
}

export interface SiloHook {
  text: SiloLocalizedString
  caption?: SiloLocalizedString
}

export interface SiloSection {
  h2: SiloLocalizedString
  body: SiloLocalizedStringList
  imageSrc?: string
  imageAlt?: SiloLocalizedString
}

export interface SiloFact {
  number: string
  description: SiloLocalizedString
}

export interface SiloScheduleItem {
  time: string
  activity: SiloLocalizedString
}

export interface SiloSchedule {
  title: SiloLocalizedString
  intro?: SiloLocalizedString
  items: readonly SiloScheduleItem[]
}

export interface SiloFaqItem {
  question: SiloLocalizedString
  answer: SiloLocalizedString
}

export interface SiloFinalCta {
  title: SiloLocalizedString
  body: SiloLocalizedString
}

export interface SiloMeta {
  title: SiloLocalizedString
  description: SiloLocalizedString
}

export interface SiloContent {
  slug: SiloSlug
  route: Route
  heroImageSrc: string
  heroImageAlt: SiloLocalizedString
  meta: SiloMeta
  hero: SiloHero
  hook: SiloHook
  sections: readonly SiloSection[]
  facts: readonly SiloFact[]
  schedule?: SiloSchedule
  faq: readonly SiloFaqItem[]
  finalCta: SiloFinalCta
}

export interface SiloHubCardSummary {
  slug: SiloSlug
  route: Route
  imageSrc: string
  imageAlt: SiloLocalizedString
}
