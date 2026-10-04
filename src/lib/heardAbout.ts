import { HEARD_ABOUT_ADMIN_LABEL, HEARD_ABOUT_DETAIL_SOURCES } from '@/constants/heardAbout'
import type { HeardAboutDetailSource, HeardAboutSource, SubmissionSource } from '@/types'

export function isHeardAboutDetailSource(source: HeardAboutSource | undefined): source is HeardAboutDetailSource {
  return source !== undefined && HEARD_ABOUT_DETAIL_SOURCES.has(source)
}

/** "Friend or colleague: Anna", or undefined when the visitor skipped the question. */
export function formatHeardAbout({ heardAbout, heardAboutDetail }: SubmissionSource): string | undefined {
  if (!heardAbout) {
    return undefined
  }
  const label = HEARD_ABOUT_ADMIN_LABEL[heardAbout]
  return heardAboutDetail ? `${label}: ${heardAboutDetail}` : label
}

/** "google (campaign: spring-retreats)", or undefined when the client sent no channel. */
export function formatLandingChannel({ attributionChannel, attributionCampaign }: SubmissionSource): string | undefined {
  if (!attributionChannel) {
    return undefined
  }
  return attributionCampaign ? `${attributionChannel} (campaign: ${attributionCampaign})` : attributionChannel
}
