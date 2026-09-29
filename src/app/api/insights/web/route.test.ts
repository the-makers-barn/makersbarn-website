import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

import { InsightsErrorCode, INSIGHTS_RATE_LIMIT } from '@/constants/insights'

const buildWebInsights = vi.fn<(...args: unknown[]) => Promise<unknown>>()
vi.mock('@/lib/insights/buildWebInsights', () => ({ buildWebInsights: (...args: unknown[]) => buildWebInsights(...args) }))

const SECRET = 'digest-secret'
const URL_WEEK = 'https://themakersbarn.nl/api/insights/web?period=week'

function request(url: string, authorization?: string): Request {
  return new Request(url, { headers: authorization ? { authorization } : {} })
}

async function loadRoute() {
  return import('./route')
}

describe('GET /api/insights/web', () => {
  beforeAll(async () => {
    // Warms the module cache before the first resetModules() so the timed
    // tests below do not also pay the cost of a cold TS transform.
    await import('./route')
  }, 30_000)

  beforeEach(() => {
    vi.resetModules()
    vi.stubEnv('INSIGHTS_API_SECRET', SECRET)
    vi.stubEnv('UMAMI_URL', 'http://umami.test')
    vi.stubEnv('UMAMI_API_KEY', 'umami_key')
    vi.stubEnv('NEXT_PUBLIC_UMAMI_WEBSITE_ID', 'w1')
    buildWebInsights.mockReset()
    buildWebInsights.mockResolvedValue({ domain: 'web', totals: {} })
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.useRealTimers()
  })

  it('answers 503 when the server secret is missing', async () => {
    vi.stubEnv('INSIGHTS_API_SECRET', '')
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(response.status).toBe(503)
    expect(await response.json()).toEqual({ error: InsightsErrorCode.NOT_CONFIGURED })
    expect(response.headers.get('cache-control')).toBe('private, no-store')
  })

  it.each([undefined, 'Bearer nope', 'Bearer digest-secret-longer'])('answers 401 for authorization %s', async (auth) => {
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, auth))
    expect(response.status).toBe(401)
    expect(response.headers.get('cache-control')).toBe('private, no-store')
  })

  it('answers 400 for a missing or unknown period', async () => {
    const { GET } = await loadRoute()
    expect((await GET(request('https://themakersbarn.nl/api/insights/web', `Bearer ${SECRET}`))).status).toBe(400)
    expect((await GET(request('https://themakersbarn.nl/api/insights/web?period=year', `Bearer ${SECRET}`))).status).toBe(400)
  })

  it.each(['UMAMI_URL', 'UMAMI_API_KEY', 'NEXT_PUBLIC_UMAMI_WEBSITE_ID'])(
    'answers 503 when %s is unset',
    async (missingVar) => {
      vi.stubEnv(missingVar, '')
      const { GET } = await loadRoute()
      const response = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
      expect(response.status).toBe(503)
      expect(await response.json()).toEqual({ error: InsightsErrorCode.NOT_CONFIGURED })
      expect(response.headers.get('cache-control')).toBe('private, no-store')
    },
  )

  it('answers 200 with the built insights and no-store', async () => {
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(response.status).toBe(200)
    expect(response.headers.get('cache-control')).toBe('private, no-store')
    expect(await response.json()).toEqual({ domain: 'web', totals: {} })
    expect(buildWebInsights).toHaveBeenCalledTimes(1)
  })

  it('rate-limits only authenticated calls', async () => {
    const { GET } = await loadRoute()
    for (let i = 0; i < INSIGHTS_RATE_LIMIT.maxRequests; i += 1) {
      await GET(request(URL_WEEK, 'Bearer wrong'))
    }
    expect((await GET(request(URL_WEEK, `Bearer ${SECRET}`))).status).toBe(200)
    for (let i = 1; i < INSIGHTS_RATE_LIMIT.maxRequests; i += 1) {
      await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    }
    const limited = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(limited.status).toBe(429)
    expect(await limited.json()).toEqual({ error: InsightsErrorCode.RATE_LIMITED })
    expect(limited.headers.get('cache-control')).toBe('private, no-store')
  })

  it('answers 502 when Umami fails', async () => {
    const { UmamiError } = await import('@/services/umami')
    buildWebInsights.mockRejectedValue(new UmamiError('down', 500))
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(response.status).toBe(502)
    expect(await response.json()).toEqual({ error: InsightsErrorCode.UPSTREAM })
    expect(response.headers.get('cache-control')).toBe('private, no-store')
  })

  it('answers 504 when the build exceeds the budget', async () => {
    vi.useFakeTimers()
    buildWebInsights.mockImplementation(() => new Promise(() => undefined))
    const { GET } = await loadRoute()
    const pending = GET(request(URL_WEEK, `Bearer ${SECRET}`))
    await vi.advanceTimersByTimeAsync(31_000)
    const response = await pending
    expect(response.status).toBe(504)
  })
})
