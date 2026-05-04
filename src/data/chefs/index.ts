import { ChefStatus } from '@/constants/chef'
import type { Chef } from '@/types'

import { BRENDA_ANNA_CHEF } from './brenda-anna'
import { BURO_BROCCOLI_CHEF } from './buro-broccoli'
import { DE_GROENE_CHEF_CHEF } from './de-groene-chef'
import { DE_KOOKSTUDIO_CHEF } from './de-kookstudio'
import { EVELINE_COOKS_CHEF } from './eveline-cooks'
import { GROENTJE_CHEF } from './groentje'
import { JENNIFER_ABECK_CHEF } from './jennifer-abeck'
import { KARIN_VAN_HAL_CHEF } from './karin-van-hal'
import { LA_MAMA_GAIA_CHEF } from './la-mama-gaia'
import { LIESBETH_VAN_DER_VELDEN_CHEF } from './liesbeth-van-der-velden'
import { MARIJE_GROTE_PANNEN_CHEF } from './marije-grote-pannen'
import { NITZAN_ZEIRA_CHEF } from './nitzan-zeira'
import { PLANTICIOUS_BLISS_CHEF } from './planticious-bliss'
import { REBELICIOUS_CHEF } from './rebelicious'
import { ROOTED_IN_RAW_CHEF } from './rooted-in-raw'
import { SUZANNE_VAN_DEN_HEUVEL_CHEF } from './suzanne-van-den-heuvel'
import { THE_FOOD_CIRCLE_CHEF } from './the-food-circle'
import { VEGA_HAPPIE_CHEF } from './vega-happie'

// Chefs are added one file per chef. Import each here and append to ALL_CHEFS.
// Naming convention: <SLUG_UPPER_SNAKE>_CHEF (mirrors YOGA_TEACHERS_SILO).

export const ALL_CHEFS: readonly Chef[] = [
  LIESBETH_VAN_DER_VELDEN_CHEF,
  BRENDA_ANNA_CHEF,
  BURO_BROCCOLI_CHEF,
  DE_GROENE_CHEF_CHEF,
  DE_KOOKSTUDIO_CHEF,
  EVELINE_COOKS_CHEF,
  GROENTJE_CHEF,
  JENNIFER_ABECK_CHEF,
  KARIN_VAN_HAL_CHEF,
  LA_MAMA_GAIA_CHEF,
  MARIJE_GROTE_PANNEN_CHEF,
  NITZAN_ZEIRA_CHEF,
  PLANTICIOUS_BLISS_CHEF,
  REBELICIOUS_CHEF,
  ROOTED_IN_RAW_CHEF,
  SUZANNE_VAN_DEN_HEUVEL_CHEF,
  THE_FOOD_CIRCLE_CHEF,
  VEGA_HAPPIE_CHEF,
]

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
