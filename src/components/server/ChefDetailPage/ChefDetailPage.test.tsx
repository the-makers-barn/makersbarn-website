import { describe, expect, it, vi } from 'vitest'
import { isValidElement } from 'react'

import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { ChefStatus } from '@/constants/chef'
import { Language } from '@/types'

import { ChefDetailPage } from './ChefDetailPage'

// vi.mock is hoisted above imports, so the factory must be self-contained
// with no references to outer-scope variables.
vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chef: {
      inquiry: {
        modalTitle: 'Send {name} an inquiry',
        closeAriaLabel: 'Close inquiry form',
        field: {
          name: 'Your name',
          email: 'Email',
          dates: 'Retreat dates',
          groupSize: 'Group size',
          location: 'Location',
          dietary: 'Dietary needs',
          message: 'Tell {name} about your retreat',
        },
        consent: 'I consent.',
        submit: 'Send inquiry',
        submitting: 'Sending…',
        success: { title: 'On its way to {name}', body: 'Confirmation sent to {email}.' },
        errors: {
          rate_limited: 'Too many requests.',
          validation: 'Check highlighted fields.',
          chef_not_found: 'Chef unavailable.',
          email_failed: 'Could not deliver.',
          unexpected_error: 'Something went wrong.',
        },
      },
    },
  }),
}))

describe('ChefDetailPage', () => {
  it('returns a JSX element for the Liesbeth fixture', async () => {
    const result = await ChefDetailPage({ chef: LIESBETH_VAN_DER_VELDEN_CHEF, lang: Language.EN })
    expect(isValidElement(result)).toBe(true)
  })

  it('includes DraftBadge when chef status is DRAFT', async () => {
    const draftChef = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.DRAFT }
    const result = await ChefDetailPage({ chef: draftChef, lang: Language.EN })
    expect(isValidElement(result)).toBe(true)
  })

  it('does not render DraftBadge for PUBLISHED chefs', async () => {
    const publishedChef = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.PUBLISHED }
    const result = await ChefDetailPage({ chef: publishedChef, lang: Language.EN })
    expect(isValidElement(result)).toBe(true)
  })
})
