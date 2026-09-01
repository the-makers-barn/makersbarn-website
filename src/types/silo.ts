import { Language } from './common'
import { ContactIntent } from './contact'
import { Route } from './navigation'

export enum SiloSlug {
  YOGA_TEACHERS = 'yoga-teachers',
  MEDITATION_RETREATS = 'meditation-retreats',
  WRITING_RETREATS = 'writing-retreats',
  TEAM_OFFSITES = 'team-offsites',
  COMPANY_DAY_EVENTS = 'company-day-events',
  BEDRIJFSUITJE_OVERIJSSEL = 'bedrijfsuitje-overijssel',
  MEETING_VENUE_ZWOLLE_DEVENTER = 'meeting-venue-zwolle-deventer',
  BREATHWORK_SOUND_HEALING = 'breathwork-sound-healing',
  COACHING_INTENSIVES = 'coaching-intensives',
  SOMATIC_THERAPY_RETREATS = 'somatic-therapy-retreats',
  WELLNESS_DETOX_RETREATS = 'wellness-detox-retreats',
  CIRCLE_RETREATS = 'circle-retreats',
  PHOTOGRAPHY_WORKSHOPS = 'photography-workshops',
  ART_RETREATS = 'art-retreats',
}

/** Which visitor the foot of a silo page is built for. */
export enum SiloTrack {
  /** Retreat organisers, who get the retreat planning tools. */
  RETREAT_ORGANIZER = 'retreat-organizer',
  /** Companies booking a day or an offsite, to whom those tools do not apply. */
  COMPANY = 'company',
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

export interface SiloBackLink {
  route: Route
  label: SiloLocalizedString
}

export interface SiloRelatedLink {
  route: Route
  label: SiloLocalizedString
  description: SiloLocalizedString
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
  /**
   * Contact intent the page's CTAs open. Defaults to a retreat booking; company
   * pages point at their own intent so those leads arrive tagged.
   */
  contactIntent?: ContactIntent
  /** Visitor the page's foot is built for. Defaults to retreat organisers. */
  track?: SiloTrack
  /** Overrides the default back-link to the retreat hub. */
  backLink?: SiloBackLink
  /** Sibling pages linked above the closing call to action. */
  relatedLinks?: readonly SiloRelatedLink[]
}

/**
 * Silos that appear as cards on the Host a Retreat hub. Company-facing silos
 * address a different audience and are deliberately excluded, so the hub's
 * exhaustive slug-to-label maps stay complete without inventing retreat copy
 * for them.
 */
export type RetreatHubSiloSlug = Exclude<
  SiloSlug,
  | SiloSlug.COMPANY_DAY_EVENTS
  | SiloSlug.BEDRIJFSUITJE_OVERIJSSEL
  | SiloSlug.MEETING_VENUE_ZWOLLE_DEVENTER
>

export interface SiloHubCardSummary {
  slug: RetreatHubSiloSlug
  route: Route
  imageSrc: string
  imageAlt: SiloLocalizedString
}
