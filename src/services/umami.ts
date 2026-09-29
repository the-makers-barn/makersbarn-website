import { UMAMI_REQUEST_TIMEOUT_MS, UmamiMetricType, UmamiUtmType } from '@/constants/insights'
import type { DateRange } from '@/lib/insights/periods'

/**
 * Read-only client for the self-hosted Umami HTTP API (v3.4).
 *
 * Authentication is an API key sent as a bearer token; keys never expire, so
 * there is no login or token cache. Every failure becomes an UmamiError so
 * the route can answer 502 without leaking upstream details.
 */
export interface UmamiStats {
  pageviews: number
  visitors: number
  visits: number
  bounces: number
  totaltime: number
}

export interface UmamiMetric {
  x: string
  y: number
}

export interface UmamiUtmMetric {
  utm: string
  views: number
}

export interface UmamiEventValue {
  value: string
  total: number
}

export interface UmamiReader {
  getStats(range: DateRange): Promise<UmamiStats>
  getMetrics(range: DateRange, type: UmamiMetricType, limit: number): Promise<UmamiMetric[]>
  getUtmMetrics(range: DateRange, type: UmamiUtmType): Promise<UmamiUtmMetric[]>
  getEventPropertyValues(range: DateRange, eventName: string, propertyName: string): Promise<UmamiEventValue[]>
}

export interface UmamiClientConfig {
  baseUrl: string
  websiteId: string
  apiKey: string
  fetchImpl?: typeof fetch
}

export class UmamiError extends Error {
  readonly status: number | null

  constructor(message: string, status: number | null) {
    super(message)
    this.name = 'UmamiError'
    this.status = status
  }
}

const STATS_FIELDS: readonly (keyof UmamiStats)[] = ['pageviews', 'visitors', 'visits', 'bounces', 'totaltime']
const JSON_CONTENT_TYPE = 'application/json'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function parseStats(body: unknown): UmamiStats {
  if (!isRecord(body)) {
    throw new UmamiError('stats body is not an object', null)
  }
  const stats: Partial<UmamiStats> = {}
  for (const field of STATS_FIELDS) {
    const value = body[field]
    if (typeof value !== 'number') {
      throw new UmamiError(`stats field ${field} is not a number`, null)
    }
    stats[field] = value
  }
  return stats as UmamiStats
}

function isMetricRow(row: unknown): row is UmamiMetric {
  return isRecord(row) && typeof row.x === 'string' && typeof row.y === 'number'
}

function isUtmRow(row: unknown): row is UmamiUtmMetric {
  return isRecord(row) && typeof row.utm === 'string' && typeof row.views === 'number'
}

function isEventValueRow(row: unknown): row is UmamiEventValue {
  return isRecord(row) && typeof row.value === 'string' && typeof row.total === 'number'
}

function parseRows<T>(body: unknown, isRow: (row: unknown) => row is T): T[] {
  if (!Array.isArray(body)) {
    throw new UmamiError('expected an array', null)
  }
  return body.filter(isRow)
}

export function createUmamiClient(config: UmamiClientConfig): UmamiReader {
  const fetchImpl = config.fetchImpl ?? fetch
  const base = `${config.baseUrl.replace(/\/$/, '')}/api/websites/${encodeURIComponent(config.websiteId)}`

  async function getJson(path: string, params: Record<string, string>): Promise<unknown> {
    const query = new URLSearchParams(params).toString()
    const url = `${base}/${path}?${query}`
    let response: Response
    try {
      response = await fetchImpl(url, {
        headers: { authorization: `Bearer ${config.apiKey}`, accept: JSON_CONTENT_TYPE },
        signal: AbortSignal.timeout(UMAMI_REQUEST_TIMEOUT_MS),
      })
    } catch (error) {
      throw new UmamiError(error instanceof Error ? error.message : 'request failed', null)
    }
    if (!response.ok) {
      throw new UmamiError(`umami answered ${response.status} for ${path}`, response.status)
    }
    const contentType = response.headers.get('content-type') ?? ''
    if (!contentType.includes(JSON_CONTENT_TYPE)) {
      throw new UmamiError(`umami answered ${contentType || 'no content type'} for ${path}`, response.status)
    }
    try {
      return await response.json()
    } catch {
      throw new UmamiError(`umami body for ${path} is not JSON`, response.status)
    }
  }

  function rangeParams(range: DateRange): Record<string, string> {
    return { startAt: String(range.startAt), endAt: String(range.endAt) }
  }

  return {
    async getStats(range) {
      return parseStats(await getJson('stats', rangeParams(range)))
    },
    async getMetrics(range, type, limit) {
      return parseRows(
        await getJson('metrics', { ...rangeParams(range), type, limit: String(limit) }),
        isMetricRow,
      )
    },
    async getUtmMetrics(range, type) {
      return parseRows(await getJson('utm/metrics', { ...rangeParams(range), type }), isUtmRow)
    },
    async getEventPropertyValues(range, eventName, propertyName) {
      return parseRows(
        await getJson('event-data/values', { ...rangeParams(range), eventName, propertyName }),
        isEventValueRow,
      )
    },
  }
}
