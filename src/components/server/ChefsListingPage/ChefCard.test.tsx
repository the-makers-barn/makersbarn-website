import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ChefStatus } from '@/constants/chef'
import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
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
      grid: { card: { viewProfile: 'View profile', draftBadge: 'DRAFT' } },
    },
  }),
}))

describe('ChefCard', () => {
  it('renders the chef name, region, and view-profile link', async () => {
    const result = await ChefCard({ chef: LIESBETH_VAN_DER_VELDEN_CHEF, lang: Language.EN })
    render(result)
    expect(screen.getByText(LIESBETH_VAN_DER_VELDEN_CHEF.name)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view profile/i })).toHaveAttribute(
      'href',
      `/en/chefs/${LIESBETH_VAN_DER_VELDEN_CHEF.slug}`,
    )
  })

  it('shows the draft badge for a DRAFT chef', async () => {
    const draft = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.DRAFT }
    const result = await ChefCard({ chef: draft, lang: Language.EN })
    render(result)
    expect(screen.getByText('DRAFT')).toBeInTheDocument()
  })

  it('hides the draft badge for a PUBLISHED chef', async () => {
    const published = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.PUBLISHED }
    const result = await ChefCard({ chef: published, lang: Language.EN })
    render(result)
    expect(screen.queryByText('DRAFT')).not.toBeInTheDocument()
  })
})
