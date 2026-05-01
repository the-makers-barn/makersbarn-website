import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Language } from '@/types'

import { ChefsDualCta } from './ChefsDualCta'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chefsListing: {
      dualCta: {
        looking: { eyebrow: 'For hosts', h3: 'Looking?', body: 'Tell us.', button: 'Get matched' },
        join: { eyebrow: 'For chefs', h3: 'Are you a chef?', body: 'Apply.', button: 'Apply to join' },
      },
    },
  }),
}))

describe('ChefsDualCta', () => {
  it('renders both CTAs with correct hash links', async () => {
    const result = await ChefsDualCta({ lang: Language.EN })
    render(result)
    expect(screen.getByRole('link', { name: 'Get matched' })).toHaveAttribute(
      'href',
      '/en/contact#looking-for-chef',
    )
    expect(screen.getByRole('link', { name: 'Apply to join' })).toHaveAttribute(
      'href',
      '/en/contact#chef-join',
    )
  })

  it('renders both card headings', async () => {
    const result = await ChefsDualCta({ lang: Language.EN })
    render(result)
    expect(screen.getByRole('heading', { level: 3, name: 'Looking?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Are you a chef?' })).toBeInTheDocument()
  })
})
