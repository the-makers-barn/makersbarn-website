import { NextRequest, NextResponse } from 'next/server'

import {
  isMaliciousPath,
  getBlockReason,
  createLogger,
  detectLanguageFromDomain,
  getLanguageFromCookieString,
  createLanguageCookieValue,
  LANGUAGE_HEADER_NAME,
} from '@/lib'
import { DEFAULT_LANGUAGE, REDIRECT_BASE_PATH } from '@/constants'
import { isValidLocale } from '@/lib/locale'
import { getLocaleFromPath, getLocalizedPath, getPathWithoutLocale } from '@/lib/routing'
import { ContactIntent, Language, Route } from '@/types'

const logger = createLogger('middleware')

/** Redirect whose target is the same for every visitor, so caches may keep it. */
const PERMANENT_REDIRECT = 308
/** Redirect whose target depends on the visitor's language, so it must not be cached as final. */
const NEGOTIATED_REDIRECT = 307

/**
 * Routes retired in favour of another route within the same locale.
 *
 * These live here rather than in the page because a page-level redirect() runs
 * after the layout has already streamed, which makes Next.js fall back to a
 * `200 + <meta http-equiv="refresh">` soft redirect with no canonical tag —
 * exactly what Search Console files under "Duplicate without user-selected
 * canonical".
 */
const RETIRED_ROUTES: ReadonlyMap<string, string> = new Map([
  [Route.BOOK, `${Route.CONTACT}#${ContactIntent.BOOKING}`],
  [Route.SURROUNDINGS, Route.ABOUT],
])

/** Every public route, derived from the enum so the list cannot drift out of date. */
const KNOWN_ROUTES: ReadonlySet<string> = new Set<string>(Object.values(Route))

/** Chef profiles are data-driven; the page itself 404s on an unknown slug. */
const CHEF_DETAIL_PREFIX = `${Route.CHEFS}/`

/** Routes that deliberately live outside the localized tree and must pass through. */
const NON_LOCALIZED_PREFIXES = [REDIRECT_BASE_PATH] as const

/**
 * Path used to force Next.js to render its own 404. Any path under a valid
 * locale that matches no route produces a real 404 response, which is what an
 * unrecognised URL must return.
 */
const NOT_FOUND_PATH = `/${DEFAULT_LANGUAGE}/__not-found__`

function isKnownRoute(pathWithoutLocale: string): boolean {
  return (
    KNOWN_ROUTES.has(pathWithoutLocale) ||
    pathWithoutLocale.startsWith(CHEF_DETAIL_PREFIX)
  )
}

const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
} as const

const SKIP_PATHS = ['/_next/', '/api/', '/static/', '/public/'] as const

/**
 * Extensions served straight from /public.
 *
 * Middleware has to let these through, but it must not skip on the mere
 * presence of a dot: that let probes like /index.php and /foo.bar past the
 * unknown-path check and into the [locale] segment, where they rendered the
 * home page with a 200 and a canonical pointing at it.
 */
const STATIC_ASSET_EXTENSIONS: ReadonlySet<string> = new Set([
  'ico', 'png', 'jpg', 'jpeg', 'webp', 'avif', 'gif', 'svg',
  'webmanifest', 'xml', 'txt', 'pdf',
  'woff', 'woff2', 'ttf', 'eot', 'css', 'js', 'map',
])

function hasStaticAssetExtension(pathname: string): boolean {
  const lastDot = pathname.lastIndexOf('.')
  if (lastDot === -1) {
    return false
  }
  return STATIC_ASSET_EXTENSIONS.has(pathname.slice(lastDot + 1).toLowerCase())
}

function shouldSkipMiddleware(pathname: string): boolean {
  return SKIP_PATHS.some((path) => pathname.startsWith(path)) || hasStaticAssetExtension(pathname)
}

function addSecurityHeaders(response: NextResponse): NextResponse {
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  return response
}

/**
 * Handles language detection and cookie setting
 * Priority: Existing cookie > Domain detection
 */
function handleLanguageDetection(request: NextRequest, response: NextResponse): NextResponse {
  const cookieString = request.headers.get('cookie') || ''
  const existingLanguage = getLanguageFromCookieString(cookieString)

  // If no language cookie exists, detect from domain and set cookie
  if (!existingLanguage) {
    const hostname = request.headers.get('host') || ''
    const detectedLanguage = detectLanguageFromDomain(hostname)
    response.headers.set('Set-Cookie', createLanguageCookieValue(detectedLanguage))
  }

  return response
}

function getPreferredLanguage(request: NextRequest, cookieString: string): Language {
  return (
    getLanguageFromCookieString(cookieString) ||
    detectLanguageFromDomain(request.headers.get('host') || '')
  )
}

/** Builds a redirect to `target`, which may carry a `#fragment`. */
function redirectTo(request: NextRequest, target: string, status: number): NextResponse {
  const [pathname, fragment] = target.split('#')
  const url = request.nextUrl.clone()
  url.pathname = pathname
  url.hash = fragment ? `#${fragment}` : ''
  return NextResponse.redirect(url, status)
}

/** Redirect to the visitor's language. Must stay temporary — the target varies per visitor. */
function redirectToPreferredLanguage(
  request: NextRequest,
  cookieString: string,
  pathWithoutLocale: string,
): NextResponse {
  const language = getPreferredLanguage(request, cookieString)
  const response = redirectTo(
    request,
    getLocalizedPath(pathWithoutLocale, language),
    NEGOTIATED_REDIRECT,
  )
  // Shared caches must not hand one visitor's language to the next visitor.
  response.headers.set('Vary', 'Cookie')
  return response
}

/**
 * Handles locale routing and redirects
 * - Redirects root (/) and bare paths to the visitor's preferred language
 * - Redirects retired routes to their replacement
 * - Sets language cookie based on URL locale
 */
function handleLocaleRouting(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl
  const cookieString = request.headers.get('cookie') || ''

  // Handle root redirect
  if (pathname === '/') {
    return redirectToPreferredLanguage(request, cookieString, Route.HOME)
  }

  // Salvage links that carry the locale in the wrong case (/EN/about) rather
  // than letting them 404 against the lowercase-only [locale] segment.
  const [firstSegment = ''] = pathname.split('/').filter(Boolean)
  if (!isValidLocale(firstSegment) && isValidLocale(firstSegment.toLowerCase())) {
    const target = `/${firstSegment.toLowerCase()}${pathname.slice(firstSegment.length + 1)}`
    return redirectTo(request, target, PERMANENT_REDIRECT)
  }

  const pathLocale = getLocaleFromPath(pathname)
  const pathWithoutLocale = getPathWithoutLocale(pathname)

  const replacementRoute = RETIRED_ROUTES.get(pathWithoutLocale)
  if (replacementRoute && pathLocale) {
    return redirectTo(request, `/${pathLocale}${replacementRoute}`, PERMANENT_REDIRECT)
  }

  // If path has a locale, keep it as-is and align the cookie with the URL
  if (pathLocale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname
    // Forward the locale on the request itself. The cookie is only set on the
    // response, so without this a first-time visitor renders in the default
    // language — which is why every page declared <html lang="en">.
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set(LANGUAGE_HEADER_NAME, pathLocale)
    const response = NextResponse.rewrite(url, { request: { headers: requestHeaders } })
    response.headers.set('Set-Cookie', createLanguageCookieValue(pathLocale))
    return response
  }

  // No locale in path - send known routes to their localized version
  if (isKnownRoute(pathWithoutLocale)) {
    return redirectToPreferredLanguage(request, cookieString, pathWithoutLocale)
  }

  if (NON_LOCALIZED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return null
  }

  // Unrecognised path. Without this it would match the [locale] segment, and
  // an unknown locale renders the English page with a 200 — handing every bad
  // URL a duplicate of a real page.
  const url = request.nextUrl.clone()
  url.pathname = NOT_FOUND_PATH
  // A rewrite alone would serve the 404 page with a 200; the status has to be
  // set explicitly or crawlers treat the page as real content.
  return NextResponse.rewrite(url, { status: 404 })
}

function logSecurityEvent(request: NextRequest, pathname: string, reason: string): void {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'

  logger.warn('Blocked malicious request', {
    ip,
    userAgent,
    path: pathname,
    reason,
  })
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block malicious requests immediately
  // Check both the full pathname and path without locale for security
  const pathWithoutLocale = getPathWithoutLocale(pathname)
  if (isMaliciousPath(pathname) || isMaliciousPath(pathWithoutLocale)) {
    const reason = getBlockReason(pathname)
    logSecurityEvent(request, pathname, reason)
    return new NextResponse('Not Found', { status: 404 })
  }

  // Skip middleware for static assets and API routes
  if (shouldSkipMiddleware(pathname)) {
    return NextResponse.next()
  }

  // Handle locale routing (redirects, etc.)
  const localeResponse = handleLocaleRouting(request)
  if (localeResponse) {
    addSecurityHeaders(localeResponse)
    return localeResponse
  }

  // For requests that don't need locale routing, continue normally
  const response = NextResponse.next()
  addSecurityHeaders(response)
  handleLanguageDetection(request, response)
  return response
}

export const config = {
  matcher: [
    /*
     * Everything except Next.js internals.
     *
     * The exclusions used to be bare prefixes (`api`, `static`, `public`,
     * `sitemap.xml`), which are unanchored: /publications, /apidocs and
     * /sitemap.xml.gz all matched them, skipped middleware entirely and
     * rendered the home page with a 200. Only the trailing-slash form is
     * excluded here; everything else is filtered by shouldSkipMiddleware,
     * which matches on whole path segments and real asset extensions.
     */
    '/((?!_next/).*)',
  ],
}
