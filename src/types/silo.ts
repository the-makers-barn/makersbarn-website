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

export interface SiloOrganizerSeo {
  /**
   * Organizer-facing search vocabulary (e.g. "silent retreat venue", "Vipassana", "EMDR intensive").
   * Emitted as `keywords` on the silo's EventVenue JSON-LD so AI agents can match queries.
   */
  keywords: SiloLocalizedStringList
  /**
   * Audience description (e.g. "licensed therapists", "published authors").
   * Emitted as `audience.audienceType` on the EventVenue.
   */
  audience: SiloLocalizedString
  /** Typical cohort size this silo is built for. Display copy lives in `facts`. */
  cohortSize?: { min: number; max: number }
  /** Override the venue's default 14-bed overnight capacity (rare). */
  overnightCapacityOverride?: number
  /** Override the venue's default 20-participant day-programme capacity (rare). */
  dayProgramCapacityOverride?: number
  /** Stable @ids of past hosted Events to cross-link as proof-of-fit. */
  linkedEventIds?: readonly string[]
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
  organizerSeo?: SiloOrganizerSeo
}

export interface SiloHubCardSummary {
  slug: SiloSlug
  route: Route
  imageSrc: string
  imageAlt: SiloLocalizedString
}
