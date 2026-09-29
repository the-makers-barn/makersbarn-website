import { timingSafeEqual } from 'node:crypto'

const BEARER_PREFIX = 'Bearer '

/** Constant-time bearer check. Length mismatch and an empty secret are rejected before comparing. */
export function isAuthorized(authorizationHeader: string | null, secret: string): boolean {
  if (secret === '' || authorizationHeader === null || !authorizationHeader.startsWith(BEARER_PREFIX)) {
    return false
  }
  const presented = Buffer.from(authorizationHeader.slice(BEARER_PREFIX.length))
  const expected = Buffer.from(secret)
  return presented.length === expected.length && timingSafeEqual(presented, expected)
}
