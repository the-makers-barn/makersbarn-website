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
})
