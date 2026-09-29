import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ATTRIBUTION_STORAGE_KEY, AnalyticsEvent, Channel, MAX_QUEUED_EVENTS } from '@/constants/analytics'

import type { AnalyticsProperties } from './analytics'
import { flushQueuedEvents, resetAnalyticsQueue, track } from './analytics'

type UmamiTrackMock = ReturnType<typeof vi.fn<(event: string, data?: AnalyticsProperties) => void>>

function installUmami(): UmamiTrackMock {
  const trackSpy = vi.fn<(event: string, data?: AnalyticsProperties) => void>()
  window.umami = { track: trackSpy }
  return trackSpy
}

describe('track', () => {
  beforeEach(() => {
    resetAnalyticsQueue()
    window.sessionStorage.clear()
    window.history.replaceState(null, '', '/en?utm_source=instagram&utm_medium=paid-social&utm_campaign=autumn')
    vi.spyOn(console, 'info').mockImplementation(() => undefined)
  })

  afterEach(() => {
    delete window.umami
    flushQueuedEvents()
    vi.restoreAllMocks()
  })

  it('sends the event to Umami with the landing attribution merged in', () => {
    const umamiTrack = installUmami()

    track(AnalyticsEvent.CONTACT_FORM_SUBMITTED)

    expect(umamiTrack).toHaveBeenCalledWith(AnalyticsEvent.CONTACT_FORM_SUBMITTED, {
      attribution_channel: Channel.INSTAGRAM_PAID,
      attribution_campaign: 'autumn',
    })
  })

  it('lets call-site properties win and keeps the existing channel property intact', () => {
    const umamiTrack = installUmami()

    track(AnalyticsEvent.CALCULATOR_SHARED, { variant: 'a', channel: 'copy' })

    expect(umamiTrack).toHaveBeenCalledWith(AnalyticsEvent.CALCULATOR_SHARED, {
      attribution_channel: Channel.INSTAGRAM_PAID,
      attribution_campaign: 'autumn',
      variant: 'a',
      channel: 'copy',
    })
  })

  it('queues events until the tracker loads, then flushes them in order', () => {
    track(AnalyticsEvent.CALCULATOR_LOADED, { variant: 'a' })
    track(AnalyticsEvent.WHATSAPP_BOOKING_CLICKED)
    const umamiTrack = installUmami()
    expect(umamiTrack).not.toHaveBeenCalled()

    flushQueuedEvents()

    expect(umamiTrack.mock.calls.map((call) => call[0])).toEqual([
      AnalyticsEvent.CALCULATOR_LOADED,
      AnalyticsEvent.WHATSAPP_BOOKING_CLICKED,
    ])
    expect(umamiTrack.mock.calls[0]?.[1]).toMatchObject({ variant: 'a', attribution_channel: Channel.INSTAGRAM_PAID })
  })

  it('caps the queue and drops the newest events beyond the cap', () => {
    for (let i = 0; i < MAX_QUEUED_EVENTS + 5; i += 1) {
      track(AnalyticsEvent.CALCULATOR_LOADED, { i })
    }
    const umamiTrack = installUmami()
    flushQueuedEvents()
    expect(umamiTrack).toHaveBeenCalledTimes(MAX_QUEUED_EVENTS)
  })

  it('flushing without a tracker keeps the queue for later', () => {
    track(AnalyticsEvent.CALCULATOR_LOADED)
    flushQueuedEvents()
    const umamiTrack = installUmami()
    flushQueuedEvents()
    expect(umamiTrack).toHaveBeenCalledTimes(1)
  })

  it('logs at debug level while queuing', () => {
    track(AnalyticsEvent.CONTACT_FORM_SUBMITTED)
    const line = String(vi.mocked(console.info).mock.calls[0]?.[0])
    expect(line).toContain(AnalyticsEvent.CONTACT_FORM_SUBMITTED)
    expect(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)).not.toBeNull()
  })
})
