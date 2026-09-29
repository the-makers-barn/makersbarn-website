import { render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('next/script', () => ({
  default: (props: { src: string; 'data-website-id': string }) => (
    <script data-testid="umami-script" src={props.src} data-website-id={props['data-website-id']} />
  ),
}))

describe('UmamiTracker', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
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
})
