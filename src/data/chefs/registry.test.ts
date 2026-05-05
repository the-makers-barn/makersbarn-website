import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ChefStatus } from '@/constants/chef'

describe('chef registry', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    vi.resetModules()
  })

  it('CHEFS_BY_SLUG keys all chefs by their slug', async () => {
    const { CHEFS_BY_SLUG, ALL_CHEFS } = await import('./index')
    for (const chef of ALL_CHEFS) {
      expect(CHEFS_BY_SLUG[chef.slug]).toBe(chef)
    }
  })

  it('PUBLISHED_CHEFS only includes chefs with status=PUBLISHED', async () => {
    const { PUBLISHED_CHEFS } = await import('./index')
    for (const chef of PUBLISHED_CHEFS) {
      expect(chef.status).toBe(ChefStatus.PUBLISHED)
    }
  })

  it('getChefBySlug returns undefined for unknown slug', async () => {
    const { getChefBySlug } = await import('./index')
    expect(getChefBySlug('definitely-not-a-real-chef')).toBeUndefined()
  })

  it('getChefBySlug returns the chef for any registered slug regardless of status', async () => {
    const { getChefBySlug, ALL_CHEFS } = await import('./index')
    for (const chef of ALL_CHEFS) {
      expect(getChefBySlug(chef.slug)).toBe(chef)
    }
  })

  it('getChefsForListing returns PUBLISHED_CHEFS in production', async () => {
    const ORIGINAL = process.env.VERCEL_ENV
    process.env.VERCEL_ENV = 'production'
    try {
      vi.resetModules()
      const { getChefsForListing, PUBLISHED_CHEFS } = await import('./index')
      expect(getChefsForListing()).toEqual(PUBLISHED_CHEFS)
    } finally {
      if (ORIGINAL === undefined) {
        delete process.env.VERCEL_ENV
      } else {
        process.env.VERCEL_ENV = ORIGINAL
      }
    }
  })

  it('getChefsForListing returns ALL_CHEFS outside production', async () => {
    const ORIGINAL = process.env.VERCEL_ENV
    process.env.VERCEL_ENV = 'preview'
    try {
      vi.resetModules()
      const { getChefsForListing, ALL_CHEFS } = await import('./index')
      expect(getChefsForListing()).toEqual(ALL_CHEFS)
    } finally {
      if (ORIGINAL === undefined) {
        delete process.env.VERCEL_ENV
      } else {
        process.env.VERCEL_ENV = ORIGINAL
      }
    }
  })
})
