import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ChefStatus } from '@/constants/chef'

describe('chef registry', () => {
  const ORIGINAL_VERCEL_ENV = process.env.VERCEL_ENV

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    if (ORIGINAL_VERCEL_ENV === undefined) {
      delete process.env.VERCEL_ENV
    } else {
      process.env.VERCEL_ENV = ORIGINAL_VERCEL_ENV
    }
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

  it('getChefsForEnv returns PUBLISHED_CHEFS only when VERCEL_ENV=production', async () => {
    process.env.VERCEL_ENV = 'production'
    vi.resetModules()
    const { getChefsForEnv, PUBLISHED_CHEFS } = await import('./index')
    expect(getChefsForEnv()).toEqual(PUBLISHED_CHEFS)
  })

  it('getChefsForEnv returns ALL_CHEFS when VERCEL_ENV=preview', async () => {
    process.env.VERCEL_ENV = 'preview'
    vi.resetModules()
    const { getChefsForEnv, ALL_CHEFS } = await import('./index')
    expect(getChefsForEnv()).toEqual(ALL_CHEFS)
  })

  it('getChefsForEnv returns ALL_CHEFS when VERCEL_ENV is unset (dev)', async () => {
    delete process.env.VERCEL_ENV
    vi.resetModules()
    const { getChefsForEnv, ALL_CHEFS } = await import('./index')
    expect(getChefsForEnv()).toEqual(ALL_CHEFS)
  })

  it('getChefBySlug returns undefined for unknown slug', async () => {
    const { getChefBySlug } = await import('./index')
    expect(getChefBySlug('definitely-not-a-real-chef')).toBeUndefined()
  })
})
