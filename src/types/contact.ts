import type { Channel } from '@/constants/analytics'

export enum FormStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ContactIntent {
  QUESTION = 'question',
  BOOKING = 'booking',
  LOOKING_FOR_CHEF = 'looking-for-chef',
  CHEF_JOIN = 'chef-join',
  COMPANY_DAY = 'company-day',
}

/** Self-reported answer to "How did you hear about us?" on the contact and quote forms. */
export enum HeardAboutSource {
  GOOGLE = 'google',
  SOCIAL_MEDIA = 'social_media',
  AI_ASSISTANT = 'ai_assistant',
  FRIEND = 'friend',
  RETURNING = 'returning',
  EVENT_OR_PARTNER = 'event_or_partner',
  OTHER = 'other',
}

/** Answers that open a short follow-up text box ("Who?", "Which one?"). */
export type HeardAboutDetailSource =
  | HeardAboutSource.FRIEND
  | HeardAboutSource.EVENT_OR_PARTNER
  | HeardAboutSource.OTHER

/**
 * Where a form submission came from: the visitor's own answer (optional) plus
 * the landing channel the site classified on arrival.
 */
export interface SubmissionSource {
  heardAbout?: HeardAboutSource
  heardAboutDetail?: string
  attributionChannel?: Channel
  attributionCampaign?: string
}

export interface ContactFormData extends SubmissionSource {
  name: string
  email: string
  phone: string
  message: string
  source?: ContactIntent
}
