import { describe, expect, it, vi } from 'vitest'

import { UmamiMetricType, UmamiUtmType } from '@/constants/insights'
import type { DateRange } from '@/lib/insights/periods'

import { createUmamiClient, UmamiError } from './umami'

const RANGE: DateRange = { startAt: 1_000, endAt: 2_000, from: '2026-09-21', to: '2026-09-27' }

function jsonResponse(body: unknown, status = 200, contentType = 'application/json'): Response {
  return new Response(typeof body === 'string' ? body : JSON.stringify(body), {
    status,
    headers: { 'content-type': contentType },
  })
}

function client(fetchImpl: typeof fetch) {
  return createUmamiClient({ baseUrl: 'http://umami.test', websiteId: 'w1', apiKey: 'umami_key', fetchImpl })
}

describe('createUmamiClient', () => {
  it('sends the bearer key and the range to the stats endpoint', async () => {
    const fetchImpl = vi.fn(() =>
      jsonResponse({ pageviews: 10, visitors: 4, visits: 5, bounces: 2, totaltime: 300, comparison: {} }),
    )
    const stats = await client(fetchImpl as unknown as typeof fetch).getStats(RANGE)

    expect(stats).toEqual({ pageviews: 10, visitors: 4, visits: 5, bounces: 2, totaltime: 300 })
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('http://umami.test/api/websites/w1/stats?startAt=1000&endAt=2000')
    expect(new Headers(init.headers).get('authorization')).toBe('Bearer umami_key')
  })

  it('builds metric, utm and event-data URLs', async () => {
    const fetchImpl = vi.fn(() => jsonResponse([]))
    const c = client(fetchImpl as unknown as typeof fetch)
    await c.getMetrics(RANGE, UmamiMetricType.PATH, 10)
    await c.getUtmMetrics(RANGE, UmamiUtmType.CAMPAIGN)
    await c.getEventPropertyValues(RANGE, 'contact_form_submitted', 'attribution_channel')
    const urls = fetchImpl.mock.calls.map((call) => String((call as unknown as [string])[0]))
    expect(urls[0]).toBe('http://umami.test/api/websites/w1/metrics?startAt=1000&endAt=2000&type=path&limit=10')
    expect(urls[1]).toBe('http://umami.test/api/websites/w1/utm/metrics?startAt=1000&endAt=2000&type=utm_campaign')
    expect(urls[2]).toBe(
      'http://umami.test/api/websites/w1/event-data/values?startAt=1000&endAt=2000&eventName=contact_form_submitted&propertyName=attribution_channel',
    )
  })

  it.each([401, 500])('turns HTTP %s into UmamiError with the status', async (status) => {
    const fetchImpl = vi.fn(() => jsonResponse({ error: 'x' }, status))
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toMatchObject({
      name: 'UmamiError',
      status,
    })
  })

  it('turns an HTML body into UmamiError', async () => {
    const fetchImpl = vi.fn(() => jsonResponse('<html>login</html>', 200, 'text/html'))
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toBeInstanceOf(UmamiError)
  })

  it('turns a network failure or timeout into UmamiError with null status', async () => {
    const fetchImpl = vi.fn(() => {
      throw new DOMException('aborted', 'TimeoutError')
    })
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toMatchObject({
      name: 'UmamiError',
      status: null,
    })
  })

  it('rejects a stats body with missing numbers', async () => {
    const fetchImpl = vi.fn(() => jsonResponse({ pageviews: 'ten' }))
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toBeInstanceOf(UmamiError)
  })
})
