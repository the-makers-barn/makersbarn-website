import { describe, expect, it } from 'vitest'

import { CHEFS_LISTING_ANCHOR } from './chefsListing'

describe('CHEFS_LISTING_ANCHOR', () => {
  it('exposes anchor IDs for the grid and dual-cta sections', () => {
    expect(CHEFS_LISTING_ANCHOR.GRID).toBe('chefs-grid')
    expect(CHEFS_LISTING_ANCHOR.DUAL_CTA).toBe('chefs-dual-cta')
  })

  it('values are non-empty kebab-case strings safe for URL fragments', () => {
    for (const value of Object.values(CHEFS_LISTING_ANCHOR)) {
      expect(value).toMatch(/^[a-z][a-z0-9-]*$/)
    }
  })
})
