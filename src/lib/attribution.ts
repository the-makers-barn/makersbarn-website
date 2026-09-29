import {
  AI_ASSISTANT_HOSTS,
  AI_ASSISTANT_UTM_SOURCES,
  ATTRIBUTION_STORAGE_KEY,
  Channel,
  GOOGLE_HOST_PATTERN,
  META_CLICK_ID_PARAM,
  META_HOSTS,
  META_UTM_SOURCES,
  PAID_UTM_MEDIUMS,
} from '@/constants/analytics'

/**
 * Where the visit came from, decided once on the landing page.
 *
 * Umami stores referrers and UTM tags per session but cannot join them to a
 * custom event, so the site tags every event itself. Keys are prefixed so a
 * call site's own `channel` property is never overwritten.
 */
export interface Attribution {
  attribution_channel: Channel
  attribution_campaign?: string
}

export interface ClassifyInput {
  referrer: string
  currentHost: string
  params: URLSearchParams
}

const UTM_SOURCE = 'utm_source'
const UTM_MEDIUM = 'utm_medium'
const UTM_CAMPAIGN = 'utm_campaign'
const WWW_PREFIX = 'www.'

function stripWww(host: string): string {
  return host.startsWith(WWW_PREFIX) ? host.slice(WWW_PREFIX.length) : host
}

function isSameHost(referrer: string, currentHost: string): boolean {
  try {
    return stripWww(new URL(referrer).hostname.toLowerCase()) === stripWww(currentHost.toLowerCase())
  } catch {
    return false
  }
}

/** Hostname of the referrer, lower-cased and without `www.`; empty when absent, unparseable, or our own host. */
function referrerHost(referrer: string, currentHost: string): string {
  if (!referrer) {
    return ''
  }
  let host: string
  try {
    host = stripWww(new URL(referrer).hostname.toLowerCase())
  } catch {
    return ''
  }
  return host === stripWww(currentHost.toLowerCase()) ? '' : host
}

function lowerParam(params: URLSearchParams, key: string): string {
  return (params.get(key) ?? '').trim().toLowerCase()
}

export function classifyChannel({ referrer, currentHost, params }: ClassifyInput): Channel {
  const source = lowerParam(params, UTM_SOURCE)
  const medium = lowerParam(params, UTM_MEDIUM)
  const host = referrerHost(referrer, currentHost)
  const unparseableReferrer = referrer !== '' && host === '' && !isSameHost(referrer, currentHost)

  if (META_UTM_SOURCES.has(source) && PAID_UTM_MEDIUMS.has(medium)) {
    return Channel.INSTAGRAM_PAID
  }
  if (AI_ASSISTANT_UTM_SOURCES.has(source) || AI_ASSISTANT_HOSTS.has(host)) {
    return Channel.AI_ASSISTANT
  }
  if (META_UTM_SOURCES.has(source) || params.has(META_CLICK_ID_PARAM) || META_HOSTS.has(host)) {
    return Channel.META_ORGANIC
  }
  if (GOOGLE_HOST_PATTERN.test(host)) {
    return Channel.GOOGLE
  }
  if (host === '' && source === '' && !unparseableReferrer) {
    return Channel.DIRECT
  }
  return Channel.OTHER
}

export function extractCampaign(params: URLSearchParams): string | undefined {
  const campaign = (params.get(UTM_CAMPAIGN) ?? '').trim()
  return campaign === '' ? undefined : campaign
}

function classifyCurrentPage(): Attribution {
  const params = new URLSearchParams(window.location.search)
  const attribution: Attribution = {
    attribution_channel: classifyChannel({
      referrer: document.referrer,
      currentHost: window.location.host,
      params,
    }),
  }
  const campaign = extractCampaign(params)
  if (campaign !== undefined) {
    attribution.attribution_campaign = campaign
  }
  return attribution
}

function isChannel(value: unknown): value is Channel {
  return typeof value === 'string' && (Object.values(Channel) as string[]).includes(value)
}

function readStored(): Attribution | null {
  const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
  if (raw === null) {
    return null
  }
  try {
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) {
      return null
    }
    const candidate = parsed as Partial<Attribution>
    if (!isChannel(candidate.attribution_channel)) {
      return null
    }
    return typeof candidate.attribution_campaign === 'string'
      ? { attribution_channel: candidate.attribution_channel, attribution_campaign: candidate.attribution_campaign }
      : { attribution_channel: candidate.attribution_channel }
  } catch {
    return null
  }
}

/** Classifies and stores the landing attribution once per visit. Later pages never overwrite it. */
export function rememberAttribution(): void {
  try {
    if (readStored() !== null) {
      return
    }
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(classifyCurrentPage()))
  } catch {
    // Storage blocked: events fall back to UNKNOWN in getAttribution.
  }
}

/** Stored attribution, classified lazily when nothing was stored yet; UNKNOWN when storage is unavailable. */
export function getAttribution(): Attribution {
  try {
    const stored = readStored()
    if (stored !== null) {
      return stored
    }
    const fresh = classifyCurrentPage()
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(fresh))
    return fresh
  } catch {
    return { attribution_channel: Channel.UNKNOWN }
  }
}
