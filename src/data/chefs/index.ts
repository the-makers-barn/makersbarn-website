import { ChefStatus } from '@/constants/chef'
import type { Chef } from '@/types'

// Chefs are added one file per chef. Import each here and append to ALL_CHEFS.
// Naming convention: <SLUG_UPPER_SNAKE>_CHEF (mirrors YOGA_TEACHERS_SILO).
// Task 7 adds the first chef (LIESBETH_VAN_DER_VELDEN_CHEF).

export const ALL_CHEFS: readonly Chef[] = [
  // LIESBETH_VAN_DER_VELDEN_CHEF, etc.
] as const

export const CHEFS_BY_SLUG: Readonly<Record<string, Chef | undefined>> = Object.fromEntries(
  ALL_CHEFS.map((chef) => [chef.slug, chef])
)

export const PUBLISHED_CHEFS: readonly Chef[] = ALL_CHEFS.filter(
  (chef) => chef.status === ChefStatus.PUBLISHED
)

export function getChefsForEnv(): readonly Chef[] {
  return process.env.VERCEL_ENV === 'production' ? PUBLISHED_CHEFS : ALL_CHEFS
}

/**
 * Returns the chef for a slug, or undefined if not found OR if the chef is a
 * draft and we are in production. Single source of truth — used by both the
 * route handler and the inquiry server action.
 */
export function getChefBySlug(slug: string): Chef | undefined {
  const chef = CHEFS_BY_SLUG[slug]
  if (!chef) { return undefined }
  if (process.env.VERCEL_ENV === 'production' && chef.status !== ChefStatus.PUBLISHED) {
    return undefined
  }
  return chef
}
