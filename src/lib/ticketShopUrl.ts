/**
 * UTM parameters forwarded from the visitor's own URL into the embedded
 * ticketshop, so a sale can be traced back to the ad that produced it.
 *
 * `utm_medium` is deliberately absent: it is pinned to `iframe` so that a sale
 * made through our embed is always distinguishable from one made on Hipsy
 * directly, regardless of what the visitor arrived with.
 */
const FORWARDED_UTM_PARAMS = [
  'utm_source',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const

const PINNED_MEDIUM = 'iframe'
const DEFAULT_SOURCE = 'themakersbarn'

/** Guards against a hostile query string bloating the iframe URL. */
const MAX_PARAM_LENGTH = 128

/**
 * Builds the embedded ticketshop URL for a visitor.
 *
 * The origin and path come from `shopUrl` and are never derived from
 * `incoming`: values are only ever written through `searchParams.set` on an
 * already-parsed URL, so a crafted query string cannot repoint the frame at
 * another host.
 */
export function buildTicketShopUrl(
  shopUrl: string,
  incoming: URLSearchParams | null
): string {
  const url = new URL(shopUrl)

  url.searchParams.set('utm_medium', PINNED_MEDIUM)

  let hasSource = false

  for (const param of FORWARDED_UTM_PARAMS) {
    const value = incoming?.get(param)

    if (!value) {
      continue
    }

    const trimmed = value.slice(0, MAX_PARAM_LENGTH)
    url.searchParams.set(param, trimmed)

    if (param === 'utm_source') {
      hasSource = true
    }
  }

  if (!hasSource) {
    url.searchParams.set('utm_source', DEFAULT_SOURCE)
  }

  return url.toString()
}
