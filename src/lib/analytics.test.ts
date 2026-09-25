import { afterEach, describe, expect, it, vi } from 'vitest'

import { AnalyticsEvent } from '@/constants/analytics'

import { track } from './analytics'

describe('track', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('records the event and its properties through the logger instead of a vendor SDK', () => {
    const info = vi.spyOn(console, "info").mockImplementation(() => undefined)

    track(AnalyticsEvent.CALCULATOR_SHARED, { variant: 'a', channel: 'copy' })

    expect(info).toHaveBeenCalledTimes(1)
    const line = String(info.mock.calls[0]?.[0])
    expect(line).toContain(AnalyticsEvent.CALCULATOR_SHARED)
    expect(line).toContain('"channel":"copy"')
  })

  it('accepts an event without properties', () => {
    vi.spyOn(console, "info").mockImplementation(() => undefined)
    expect(() => track(AnalyticsEvent.CONTACT_FORM_SUBMITTED)).not.toThrow()
  })
})
