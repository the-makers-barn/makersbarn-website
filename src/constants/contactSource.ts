import { ContactIntent } from '@/types'

export const CONTACT_SOURCE_SLACK_LABEL: Record<ContactIntent, string | undefined> = {
  [ContactIntent.QUESTION]: undefined,
  [ContactIntent.BOOKING]: undefined,
  [ContactIntent.LOOKING_FOR_CHEF]: 'Chef directory — looking for a chef',
  [ContactIntent.CHEF_JOIN]: 'Chef directory — apply to join',
}

export const CONTACT_SOURCE_EMAIL_SUBJECT_PREFIX: Record<ContactIntent, string | undefined> = {
  [ContactIntent.QUESTION]: undefined,
  [ContactIntent.BOOKING]: undefined,
  [ContactIntent.LOOKING_FOR_CHEF]: '[Chef directory — looking]',
  [ContactIntent.CHEF_JOIN]: '[Chef directory — joining]',
}
