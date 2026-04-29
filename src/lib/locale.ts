import { Language } from '@/types'
import { DEFAULT_LANGUAGE } from '@/constants'

/**
 * Locales for which the tools section content is fully translated.
 * Other locales render English content with a translation notice banner.
 */
export const FULL_TRANSLATION_LOCALES: ReadonlySet<Language> = new Set([
  Language.EN,
  Language.NL,
  Language.DE,
])

/**
 * Returns true when the current locale is not in FULL_TRANSLATION_LOCALES,
 * indicating that a translation notice banner should be shown.
 */
export function shouldShowTranslationNotice(locale: Language): boolean {
  return !FULL_TRANSLATION_LOCALES.has(locale)
}

/**
 * Validates if a string is a valid locale (Language enum value)
 * Type guard function that narrows the type to Language
 */
export function isValidLocale(locale: string): locale is Language {
  return Object.values(Language).includes(locale as Language)
}

/**
 * Gets a valid locale from a string or null value
 * Returns the locale if valid, otherwise falls back to DEFAULT_LANGUAGE
 */
export function getValidLocale(locale: string | null): Language {
  if (locale && isValidLocale(locale)) {
    return locale
  }
  return DEFAULT_LANGUAGE
}

