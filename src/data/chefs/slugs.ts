/**
 * Chef slugs, as a standalone list.
 *
 * Middleware needs to reject unknown chef URLs before rendering, but importing
 * the chef records themselves pulls every bio, tagline and image reference into
 * the edge bundle that runs on every request. This list carries only what the
 * routing decision needs; `registry.test.ts` asserts it stays identical to the
 * slugs in ALL_CHEFS, so it cannot drift.
 */
export const CHEF_SLUGS = [
  'brenda-anna',
  'buro-broccoli',
  'de-groene-chef',
  'de-kookstudio',
  'eveline-cooks',
  'groentje',
  'jennifer-abeck',
  'karin-van-hal',
  'la-mama-gaia',
  'marije-grote-pannen',
  'nitzan-zeira',
  'planticious-bliss',
  'rebelicious',
  'rooted-in-raw',
  'suzanne-van-den-heuvel',
  'the-food-circle',
  'vega-happie',
] as const
