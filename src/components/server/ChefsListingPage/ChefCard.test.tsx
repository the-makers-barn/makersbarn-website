import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ChefStatus } from '@/constants/chef'
import { EVELINE_COOKS_CHEF } from '@/data/chefs/eveline-cooks'
import { Language } from '@/types'

import { ChefCard } from './ChefCard'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chef: {
      enums: {
        region: {
          drenthe: 'Drenthe',
          friesland: 'Friesland',
          overijssel: 'Overijssel',
          flevoland: 'Flevoland',
          groningen: 'Groningen',
          gelderland: 'Gelderland',
          utrecht: 'Utrecht',
          'noord-holland': 'Noord-Holland',
          'zuid-holland': 'Zuid-Holland',
          'noord-brabant': 'Noord-Brabant',
          limburg: 'Limburg',
          zeeland: 'Zeeland',
        },
      },
    },
    chefsListing: {
      grid: { card: { viewProfile: 'View profile', draftBadge: 'DRAFT', cuisinesAriaLabel: 'Cuisine styles' } },
    },
  }),
}))

describe('ChefCard', () => {
  it('renders the chef name, region, and view-profile link', async () => {
    const result = await ChefCard({ chef: EVELINE_COOKS_CHEF, lang: Language.EN })
    render(result)
    expect(screen.getByText(EVELINE_COOKS_CHEF.name)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view profile/i })).toHaveAttribute(
      'href',
      `/en/chefs/${EVELINE_COOKS_CHEF.slug}`,
    )
  })

  it('shows the draft badge for a DRAFT chef', async () => {
    const draft = { ...EVELINE_COOKS_CHEF, status: ChefStatus.DRAFT }
    const result = await ChefCard({ chef: draft, lang: Language.EN })
    render(result)
    expect(screen.getByText('DRAFT')).toBeInTheDocument()
  })

  it('hides the draft badge for a PUBLISHED chef', async () => {
    const published = { ...EVELINE_COOKS_CHEF, status: ChefStatus.PUBLISHED }
    const result = await ChefCard({ chef: published, lang: Language.EN })
    render(result)
    expect(screen.queryByText('DRAFT')).not.toBeInTheDocument()
  })
})
