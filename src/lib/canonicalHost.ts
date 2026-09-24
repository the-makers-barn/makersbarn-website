import { SITE_CONFIG } from '@/constants/site'

/**
 * Hosts that must permanently redirect to the canonical domain.
 *
 * Vercel handled these through host-matched redirects in vercel.json. That
 * file is platform-specific, so the rule lives here where every host runs it.
 */
const REDIRECTED_HOSTS: ReadonlySet<string> = new Set([
  'themakersbarn.com',
  'www.themakersbarn.com',
  `www.${SITE_CONFIG.domain}`,
])

/** Strips the optional port and normalises case, so the Host header can be compared. */
function normaliseHost(host: string): string {
  return host.toLowerCase().split(':')[0]
}

/**
 * Returns the absolute canonical URL for a request that arrived on a
 * redirected host, or null when the request may be served as-is.
 */
export function getCanonicalHostRedirect(
  host: string | null,
  pathname: string,
  search: string,
): string | null {
  if (!host || !REDIRECTED_HOSTS.has(normaliseHost(host))) {
    return null
  }
  return `${SITE_CONFIG.url}${pathname}${search}`
}
