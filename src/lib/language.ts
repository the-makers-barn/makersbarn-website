import { Language } from '@/types'
import { DEFAULT_LANGUAGE } from '@/constants'

/**
 * Cookie name for storing language preference
 */
export const LANGUAGE_COOKIE_NAME = 'NEXT_LOCALE'

/**
 * Request header carrying the locale taken from the URL.
 *
 * Set by middleware on every localized request so server components resolve the
 * language the visitor actually asked for. The cookie cannot do this: it is
 * written on the response, so a first request has none, and a returning visitor
 * carries a cookie that may disagree with the URL they just opened.
 */
export const LANGUAGE_HEADER_NAME = 'x-locale'

/**
 * localStorage key for storing language preference
 */
export const LANGUAGE_STORAGE_KEY = 'makersbarn_language'

/**
 * Cookie max age in seconds (1 year)
 */
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

/** Request header the browser uses to state its language preferences. */
export const ACCEPT_LANGUAGE_HEADER = 'accept-language'

/** A quality value of zero means "not acceptable", per RFC 9110. */
const UNACCEPTABLE_QUALITY = 0

/** Absent q= means the entry is the most preferred. */
const DEFAULT_QUALITY = 1

/**
 * Validates if a value is a valid Language enum value
 */
export function isValidLanguage(value: unknown): value is Language {
  return Object.values(Language).includes(value as Language)
}

interface LanguageRange {
  tag: string
  quality: number
}

function parseLanguageRanges(header: string): LanguageRange[] {
  return header
    .split(',')
    .map((entry) => {
      const [tag, ...parameters] = entry.trim().split(';')
      const qualityParameter = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith('q='))
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.slice('q='.length))
        : DEFAULT_QUALITY

      return {
        tag: tag.trim().toLowerCase(),
        quality: Number.isFinite(quality) ? quality : UNACCEPTABLE_QUALITY,
      }
    })
    .filter((range) => range.tag !== '' && range.quality > UNACCEPTABLE_QUALITY)
    .sort((a, b) => b.quality - a.quality)
}

/**
 * Picks the best supported language from an Accept-Language header.
 *
 * This replaced detection from the hostname, which could not work: the .com
 * domain redirects to the .nl one, so every visitor arrives on the same host and
 * the hostname says nothing about who they are.
 *
 * Matching is on the primary subtag, so nl-BE counts as Dutch. Unsupported
 * entries are skipped rather than ending the scan, so "fr,nl;q=0.8" resolves to
 * Dutch. A missing, malformed, or wildcard-only header expresses no preference
 * and falls back to the default — which is what crawlers get.
 */
export function detectLanguageFromAcceptLanguage(header: string | null): Language {
  if (!header) {
    return DEFAULT_LANGUAGE
  }

  for (const { tag } of parseLanguageRanges(header)) {
    if (tag === '*') {
      break
    }
    const [primarySubtag] = tag.split('-')
    if (isValidLanguage(primarySubtag)) {
      return primarySubtag
    }
  }

  return DEFAULT_LANGUAGE
}

/**
 * Parses language from cookie string (server-side)
 * Returns null if cookie not found or invalid
 */
export function getLanguageFromCookieString(cookieString: string): Language | null {
  const cookies = cookieString.split(';').reduce<Record<string, string>>((acc, cookie) => {
    const [key, value] = cookie.trim().split('=')
    if (key && value) {
      try {
        acc[key] = decodeURIComponent(value)
      } catch {
        // Handle malformed percent-encoded values (e.g., %ZZ)
        acc[key] = value
      }
    }
    return acc
  }, {})

  const languageValue = cookies[LANGUAGE_COOKIE_NAME]

  if (languageValue && isValidLanguage(languageValue)) {
    return languageValue
  }

  return null
}

/**
 * Creates a Set-Cookie header value for language preference
 */
export function createLanguageCookieValue(language: Language): string {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `${LANGUAGE_COOKIE_NAME}=${language}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`
}

/**
 * Gets language from localStorage (client-side only)
 * Returns null if not available or invalid
 */
export function getLanguageFromLocalStorage(): Language | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored && isValidLanguage(stored)) {
      return stored
    }
  } catch {
    // localStorage may be unavailable (private browsing, etc.)
  }

  return null
}

/**
 * Saves language to localStorage (client-side only)
 */
export function setLanguageToLocalStorage(language: Language): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // localStorage may be unavailable
  }
}

/**
 * Sets language cookie from client-side
 */
export function setLanguageCookie(language: Language): void {
  if (typeof document === 'undefined') {
    return
  }

  document.cookie = createLanguageCookieValue(language)
}

/**
 * Gets language from document.cookie (client-side)
 */
export function getLanguageFromDocumentCookie(): Language | null {
  if (typeof document === 'undefined') {
    return null
  }

  return getLanguageFromCookieString(document.cookie)
}

