import { NextRequest, NextResponse } from 'next/server'

import { createLogger, anonymizeIp, isBot, getDeviceCategory, getClientIpFromRequest } from '@/lib'
import {
  REDIRECT_CONFIG,
  REDIRECT_FALLBACK_PATH,
  REDIRECT_STATUS,
  UTM_PARAMS,
  UTM_PREFIX,
  UTM_DEFAULTS,
  ALLOWED_PASSTHROUGH_PARAMS,
  RedirectSlug,
  SITE_CONFIG,
} from '@/constants'

const logger = createLogger('qr-redirect')

const MAX_REFERER_LENGTH = 500

interface RedirectParams {
  params: Promise<{ slug: string }>
}

function isActiveSlug(slug: string): slug is RedirectSlug {
  if (!Object.values(RedirectSlug).includes(slug as RedirectSlug)) {
    return false
  }
  return REDIRECT_CONFIG[slug as RedirectSlug].enabled
}

function buildDestinationUrl(baseUrl: string, slug: string, incomingSearch: URLSearchParams): string {
  try {
    const url = new URL(baseUrl)

    url.searchParams.set(UTM_PARAMS.SOURCE, UTM_DEFAULTS.SOURCE)
    url.searchParams.set(UTM_PARAMS.MEDIUM, UTM_DEFAULTS.MEDIUM)
    url.searchParams.set(UTM_PARAMS.CAMPAIGN, slug)

    incomingSearch.forEach((value, key) => {
      const isAllowed = (ALLOWED_PASSTHROUGH_PARAMS as readonly string[]).includes(key)
      if (isAllowed && !key.startsWith(UTM_PREFIX)) {
        url.searchParams.set(key, value)
      }
    })

    return url.toString()
  } catch {
    logger.error('Invalid destination URL in redirect config', { baseUrl, slug })
    return buildFallbackUrl()
  }
}

function sanitizeReferer(referer: string | null): string | undefined {
  if (!referer) {
    return undefined
  }

  try {
    const url = new URL(referer)
    const sanitized = `${url.origin}${url.pathname}`
    return sanitized.slice(0, MAX_REFERER_LENGTH)
  } catch {
    return undefined
  }
}

function buildFallbackUrl(): string {
  return new URL(REDIRECT_FALLBACK_PATH, `https://${SITE_CONFIG.domain}`).toString()
}

function logRedirectVisit(
  slug: string,
  request: NextRequest,
  destination: string,
  matched: boolean
): void {
  const userAgent = request.headers.get('user-agent') || ''

  if (isBot(userAgent)) {
    logger.debug('Bot visit filtered', { slug })
    return
  }

  const rawIp = getClientIpFromRequest(request.headers)
  const ip = anonymizeIp(rawIp)
  const device = getDeviceCategory(userAgent)
  const referer = sanitizeReferer(request.headers.get('referer'))
  const queryParams = Object.fromEntries(request.nextUrl.searchParams.entries())

  const context: Record<string, unknown> = {
    slug,
    destination,
    matched,
    ip,
    device,
    queryParams,
  }

  if (referer) {
    context.referer = referer
  }

  logger.info('QR redirect visit', context)
}

export async function GET(
  request: NextRequest,
  { params }: RedirectParams
): Promise<NextResponse> {
  const { slug } = await params

  if (isActiveSlug(slug)) {
    const entry = REDIRECT_CONFIG[slug]
    const destination = buildDestinationUrl(
      entry.destination,
      slug,
      request.nextUrl.searchParams
    )

    logRedirectVisit(slug, request, destination, true)

    return NextResponse.redirect(destination, REDIRECT_STATUS)
  }

  const fallbackUrl = buildFallbackUrl()
  logRedirectVisit(slug, request, fallbackUrl, false)

  return NextResponse.redirect(fallbackUrl, REDIRECT_STATUS)
}
