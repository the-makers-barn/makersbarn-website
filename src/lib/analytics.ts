import { AnalyticsEvent } from '@/constants/analytics'
import { createLogger } from '@/lib/logger'

/**
 * Product events emitted from the browser.
 *
 * Vercel Analytics received these until the move to Railway. Page views now
 * come from Cloudflare Web Analytics, which has no custom-event API, so the
 * events are kept at debug level until an event sink (Umami or similar) is
 * wired in here. Call sites and event names stay stable either way.
 */
const logger = createLogger('analytics')

export type AnalyticsProperties = Record<string, string | number | boolean>

export function track(event: AnalyticsEvent, properties?: AnalyticsProperties): void {
  logger.debug(event, properties)
}
