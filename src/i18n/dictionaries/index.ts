import { Language } from '@/types'

import type { Dictionary, Dictionaries } from '../types'

import { de } from './de'
import { en } from './en'
import { nl } from './nl'

/**
 * All dictionaries indexed by language
 */
export const dictionaries: Dictionaries = {
  [Language.EN]: en,
  [Language.NL]: nl,
  [Language.DE]: de,
}

/**
 * Get dictionary for a specific language
 * Falls back to English if language not found
 */
export function getDictionary(language: Language): Dictionary {
  return dictionaries[language]
}

export { en, nl, de }
export type { Dictionary }
