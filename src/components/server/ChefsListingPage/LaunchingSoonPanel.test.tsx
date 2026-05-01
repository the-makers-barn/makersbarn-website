import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Language } from '@/types'

import { LaunchingSoonPanel } from './LaunchingSoonPanel'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chefsListing: {
      launchingSoon: {
        headline: 'Our directory is in private beta.',
        body: 'Body copy.',
        inlineCtaLabel: 'Tell us what you are planning →',
      },
    },
  }),
}))

describe('LaunchingSoonPanel', () => {
  it('renders headline, body, and inline anchor link to dual-cta', async () => {
    const result = await LaunchingSoonPanel({ lang: Language.EN })
    render(result)
    expect(screen.getByText('Our directory is in private beta.')).toBeInTheDocument()
    expect(screen.getByText('Body copy.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tell us what you are planning/i })).toHaveAttribute(
      'href',
      '#chefs-dual-cta',
    )
  })
})
