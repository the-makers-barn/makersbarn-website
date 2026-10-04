import { HeardAboutSource, type HeardAboutDetailSource } from '@/types'

export const HEARD_ABOUT_DETAIL_SOURCES: ReadonlySet<HeardAboutSource> = new Set<HeardAboutDetailSource>([
  HeardAboutSource.FRIEND,
  HeardAboutSource.EVENT_OR_PARTNER,
  HeardAboutSource.OTHER,
])

export const HEARD_ABOUT_DETAIL_MAX = 200
export const ATTRIBUTION_CAMPAIGN_MAX = 100

/** English labels for the admin email and Slack; visitors see the translated labels. */
export const HEARD_ABOUT_ADMIN_LABEL: Record<HeardAboutSource, string> = {
  [HeardAboutSource.GOOGLE]: 'Google search',
  [HeardAboutSource.SOCIAL_MEDIA]: 'Instagram / Facebook',
  [HeardAboutSource.AI_ASSISTANT]: 'AI assistant',
  [HeardAboutSource.FRIEND]: 'Friend or colleague',
  [HeardAboutSource.RETURNING]: 'Been here before',
  [HeardAboutSource.EVENT_OR_PARTNER]: 'Event or partner',
  [HeardAboutSource.OTHER]: 'Other',
}
