import { describe, expect, it } from 'vitest'

import { AnalyticsEvent, Channel } from './analytics'
import { CONTACT_EVENTS, INSIGHTS_RATE_LIMIT, InsightsPeriod, UmamiMetricType } from './insights'

describe('insights constants', () => {
  it('lists every contact event as a known analytics event', () => {
    for (const event of CONTACT_EVENTS) {
      expect(Object.values(AnalyticsEvent)).toContain(event)
    }
    expect(CONTACT_EVENTS).toHaveLength(5)
  })

  it('exposes the enum values the endpoint and Umami expect', () => {
    expect(InsightsPeriod.WEEK).toBe('week')
    expect(InsightsPeriod.MONTH).toBe('month')
    expect(UmamiMetricType.CHANNEL).toBe('channel')
    expect(Channel.UNKNOWN).toBe('unknown')
    expect(INSIGHTS_RATE_LIMIT.maxRequests).toBe(30)
  })
})
