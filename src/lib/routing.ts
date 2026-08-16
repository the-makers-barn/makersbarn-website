import { REDIRECT_BASE_PATH } from '@/constants/redirects'
import { Language } from '@/types'
import { Route } from '@/types/navigation'

import { isValidLocale } from './locale'

/**
 * Gets a localized path by adding the locale prefix
 * @param path - The path without locale (e.g., '/about' or '/facilities')
 * @param locale - The locale to add (e.g., 'en' or 'nl')
 * @returns The localized path (e.g., '/en/about' or '/nl/facilities')
 */
export function getLocalizedPath(path: string, locale: Language): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  // Remove any existing locale prefix
  const pathWithoutLocale = getPathWithoutLocale(normalizedPath)
  // Add the new locale prefix
  return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
}

/**
 * Replaces the locale in a path with a new locale
 * @param path - The path that may or may not contain a locale (e.g., '/en/about' or '/about')
 * @param newLocale - The new locale to use
 * @returns The path with the new locale prefix
 */
export function replaceLocaleInPath(path: string, newLocale: Language): string {
  const pathWithoutLocale = getPathWithoutLocale(path)
  return getLocalizedPath(pathWithoutLocale, newLocale)
}

/**
 * Removes the locale prefix from a path
 * @param path - The path that may contain a locale (e.g., '/en/about' or '/nl/facilities')
 * @returns The path without the locale prefix (e.g., '/about' or '/facilities')
 */
export function getPathWithoutLocale(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Split the path into segments
  const segments = normalizedPath.split('/').filter(Boolean)

  // If the first segment is a valid locale, remove it
  if (segments.length > 0 && isValidLocale(segments[0])) {
    const pathWithoutLocale = '/' + segments.slice(1).join('/')
    return pathWithoutLocale || '/'
  }

  // Return the original path if no locale prefix found
  return normalizedPath
}

/**
 * Extracts the locale from a path
 * @param path - The path that may contain a locale (e.g., '/en/about' or '/nl/facilities')
 * @returns The locale if found, null otherwise
 */
export function getLocaleFromPath(path: string): Language | null {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  // Split the path into segments
  const segments = normalizedPath.split('/').filter(Boolean)

  // Check if the first segment is a valid locale
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return segments[0]
  }

  return null
}

/**
 * Build the localized URL for a chef detail page.
 * Example: getChefDetailPath('eveline-cooks', Language.EN) → '/en/chefs/eveline-cooks'
 */
export function getChefDetailPath(slug: string, locale: Language): string {
  return `/${locale}${Route.CHEFS}/${slug}`
}

/** Every public route, derived from the enum so the list cannot drift out of date. */
const KNOWN_ROUTES: ReadonlySet<string> = new Set<string>(Object.values(Route))

/** Chef profiles are data-driven; the page itself 404s on an unknown slug. */
const CHEF_DETAIL_PREFIX = `${Route.CHEFS}/`

/**
 * Extensions served straight from /public.
 *
 * The test has to be on the extension, never on "the path contains a dot":
 * that let probes like /index.php and /foo.bar skip routing entirely and
 * render the home page with a 200.
 */
const STATIC_ASSET_EXTENSIONS: ReadonlySet<string> = new Set([
  'ico', 'png', 'jpg', 'jpeg', 'webp', 'avif', 'gif', 'svg',
  'webmanifest', 'xml', 'txt', 'pdf',
  'woff', 'woff2', 'ttf', 'eot', 'css', 'js', 'map',
])

/** Route bases that deliberately live outside the localized tree. */
const NON_LOCALIZED_BASES = [REDIRECT_BASE_PATH] as const

/**
 * Whether a locale-stripped path is a real page.
 *
 * Every one of these predicates must match whole segments. A bare prefix test
 * is what repeatedly let /publications, /golf and /chefsfoo through to the
 * [locale] segment, where an unknown locale renders the English page with a
 * 200 and hands Google a duplicate.
 */
export function isKnownRoute(pathWithoutLocale: string): boolean {
  return (
    KNOWN_ROUTES.has(pathWithoutLocale) ||
    pathWithoutLocale.startsWith(CHEF_DETAIL_PREFIX)
  )
}

/** Whether the path is a file served from /public rather than a page. */
export function hasStaticAssetExtension(pathname: string): boolean {
  const lastDot = pathname.lastIndexOf('.')
  if (lastDot === -1) {
    return false
  }
  return STATIC_ASSET_EXTENSIONS.has(pathname.slice(lastDot + 1).toLowerCase())
}

/**
 * Whether the path belongs to a route tree that is deliberately not localized.
 * The base itself has no route, so only paths beneath it pass through.
 */
export function isNonLocalizedRoute(pathname: string): boolean {
  return NON_LOCALIZED_BASES.some((base) => pathname.startsWith(`${base}/`))
}

