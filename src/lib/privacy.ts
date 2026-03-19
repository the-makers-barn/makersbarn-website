/**
 * Privacy utilities for GDPR-compliant data handling
 */

const MASKED_PLACEHOLDER = '***' as const

/**
 * Mask email for logging (GDPR compliance)
 * e.g., "john@example.com" → "j***@example.com"
 */
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!domain) {
    return MASKED_PLACEHOLDER
  }
  const maskedLocal = local.length > 1 ? `${local[0]}${MASKED_PLACEHOLDER}` : MASKED_PLACEHOLDER
  return `${maskedLocal}@${domain}`
}
