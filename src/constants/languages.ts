import { Language, LanguageOption } from '@/types'

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: Language.EN, label: 'English', title: 'United Kingdom' },
  { code: Language.NL, label: 'Nederlands', title: 'Netherlands' },
  { code: Language.DE, label: 'Deutsch', title: 'Germany' },
  { code: Language.ES, label: 'Español', title: 'Spain' },
  { code: Language.FR, label: 'Français', title: 'France' },
]

export const DEFAULT_LANGUAGE = Language.EN

/**
 * HTML lang attribute values for proper locale specification
 * Used in <html lang="..."> for SEO and accessibility
 */
export const LANG_ATTRIBUTES: Record<Language, string> = {
  [Language.EN]: 'en-GB',
  [Language.NL]: 'nl-NL',
  [Language.DE]: 'de-DE',
  [Language.ES]: 'es-ES',
  [Language.FR]: 'fr-FR',
}
