import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { EVELINE_COOKS_CHEF } from '@/data/chefs/eveline-cooks'
import { Language } from '@/types'

import { ChefGrid } from './ChefGrid'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chef: { enums: { region: { drenthe: 'Drenthe' } } },
    chefsListing: {
      grid: {
        h2: 'Chefs in our directory',
        framingLine: 'These are chefs we trust.',
        card: { viewProfile: 'View profile', draftBadge: 'DRAFT', cuisinesAriaLabel: 'Cuisine styles' },
      },
      launchingSoon: { headline: 'Soon.', body: 'Body.', inlineCtaLabel: 'Tell us →' },
    },
  }),
}))

vi.mock('./ChefCard', () => ({
  ChefCard: ({ chef }: { chef: { slug: string } }) => <article data-testid={`chef-${chef.slug}`} />,
}))

vi.mock('./LaunchingSoonPanel', () => ({
  LaunchingSoonPanel: () => <div>Soon.</div>,
}))

describe('ChefGrid', () => {
  it('renders LaunchingSoonPanel when chefs is empty', async () => {
    const result = await ChefGrid({ chefs: [], lang: Language.EN })
    render(result)
    expect(screen.getByText('Soon.')).toBeInTheDocument()
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })

  it('renders cards when chefs is non-empty', async () => {
    const result = await ChefGrid({ chefs: [EVELINE_COOKS_CHEF], lang: Language.EN })
    render(result)
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.queryByText('Soon.')).not.toBeInTheDocument()
  })

  it('renders the H2 heading and framing line in both states', async () => {
    const empty = await ChefGrid({ chefs: [], lang: Language.EN })
    const { rerender } = render(empty)
    expect(screen.getByRole('heading', { level: 2, name: 'Chefs in our directory' })).toBeInTheDocument()
    expect(screen.getByText('These are chefs we trust.')).toBeInTheDocument()

    const populated = await ChefGrid({ chefs: [EVELINE_COOKS_CHEF], lang: Language.EN })
    rerender(populated)
    expect(screen.getByRole('heading', { level: 2, name: 'Chefs in our directory' })).toBeInTheDocument()
    expect(screen.getByText('These are chefs we trust.')).toBeInTheDocument()
  })
})
