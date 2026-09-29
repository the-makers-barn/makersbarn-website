import { render } from '@testing-library/react'
import { useEffect } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { AnalyticsEvent } from '@/constants/analytics'

interface MockScriptProps {
  src: string
  'data-website-id': string
  onLoad?: () => void
}

vi.mock('next/script', () => ({
  default: (props: MockScriptProps) => {
    useEffect(() => {
      props.onLoad?.()
      // Runs once on mount, matching next/script's real onLoad timing.
    }, [])
    return <script data-testid="umami-script" src={props.src} data-website-id={props['data-website-id']} />
  },
}))

describe('UmamiTracker', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
    delete window.umami
    window.sessionStorage.clear()
  })

  it('renders nothing without a website id', async () => {
    vi.stubEnv('NEXT_PUBLIC_UMAMI_WEBSITE_ID', '')
    const { UmamiTracker } = await import('./UmamiTracker')
    const { container } = render(<UmamiTracker />)
    expect(container.querySelector('script')).toBeNull()
  })

  it('renders the tracker from the same-origin stats path when the id is set', async () => {
    vi.stubEnv('NEXT_PUBLIC_UMAMI_WEBSITE_ID', 'site-123')
    const { UmamiTracker } = await import('./UmamiTracker')
    const { getByTestId } = render(<UmamiTracker />)
    const script = getByTestId('umami-script')
    expect(script.getAttribute('src')).toBe('/stats/script.js')
    expect(script.getAttribute('data-website-id')).toBe('site-123')
  })

  it('flushes a queued event with attribution once the mocked script fires onLoad', async () => {
    vi.stubEnv('NEXT_PUBLIC_UMAMI_WEBSITE_ID', 'site-123')
    const { track, resetAnalyticsQueue } = await import('@/lib/analytics')
    resetAnalyticsQueue()
    track(AnalyticsEvent.CONTACT_FORM_SUBMITTED)

    const umamiTrack = vi.fn()
    window.umami = { track: umamiTrack }

    const { UmamiTracker } = await import('./UmamiTracker')
    render(<UmamiTracker />)

    expect(umamiTrack).toHaveBeenCalledTimes(1)
    const [event, properties] = umamiTrack.mock.calls[0] as [AnalyticsEvent, Record<string, unknown>]
    expect(event).toBe(AnalyticsEvent.CONTACT_FORM_SUBMITTED)
    expect(properties).toHaveProperty('attribution_channel')
  })
})
