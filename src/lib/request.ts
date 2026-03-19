/**
 * Shared request utilities for extracting client information
 * from incoming HTTP requests in a Vercel-compatible way
 *
 * Note: getClientIdentifier uses next/headers and must only be
 * imported in server actions. getClientIpFromRequest is safe for
 * route handlers and any server context.
 */

const VERCEL_FORWARDED_HEADER = 'x-vercel-forwarded-for' as const
const REAL_IP_HEADER = 'x-real-ip' as const

const UNKNOWN_IDENTIFIER = 'unknown' as const

/**
 * Validate IP address format (IPv4 or IPv6)
 */
function isValidIpFormat(ip: string): boolean {
  const ipv4Parts = ip.split('.')
  if (ipv4Parts.length === 4) {
    return ipv4Parts.every((part) => {
      const num = parseInt(part, 10)
      return !isNaN(num) && num >= 0 && num <= 255 && String(num) === part
    })
  }
  const ipv6Pattern = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/
  return ipv6Pattern.test(ip)
}

function extractIpFromHeaders(headerGetter: (name: string) => string | null): string {
  const vercelForwardedFor = headerGetter(VERCEL_FORWARDED_HEADER)
  const realIp = headerGetter(REAL_IP_HEADER)

  const clientIp = vercelForwardedFor?.split(',')[0]?.trim() || realIp

  if (clientIp && isValidIpFormat(clientIp)) {
    return clientIp
  }

  return UNKNOWN_IDENTIFIER
}

/**
 * Extract client IP from a Headers object (for route handlers)
 * Uses only Vercel-set headers that cannot be spoofed by clients
 */
export function getClientIpFromRequest(requestHeaders: Headers): string {
  return extractIpFromHeaders((name) => requestHeaders.get(name))
}

/**
 * Extract client IP using next/headers (for server actions)
 * Lazily imports next/headers to avoid bundling issues in client components
 */
export async function getClientIdentifier(): Promise<string> {
  const { headers } = await import('next/headers')
  const headersList = await headers()
  return extractIpFromHeaders((name) => headersList.get(name))
}
