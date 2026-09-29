import { AnalyticsEvent, MAX_QUEUED_EVENTS } from '@/constants/analytics'
import { getAttribution } from '@/lib/attribution'
import { createLogger } from '@/lib/logger'

/**
 * Product events emitted from the browser.
 *
 * Events go to the self-hosted Umami tracker (loaded by UmamiTracker). Every
 * event carries the visit's landing attribution so the digest can count
 * contacts per channel. Events fired before the tracker script has loaded
 * are queued and flushed by the tracker's onLoad.
 */
const logger = createLogger('analytics')

export type AnalyticsProperties = Record<string, string | number | boolean>

interface QueuedEvent {
  event: AnalyticsEvent
  properties: AnalyticsProperties
}

const queue: QueuedEvent[] = []

function withAttribution(properties: AnalyticsProperties | undefined): AnalyticsProperties {
  return { ...getAttribution(), ...properties }
}

function tracker(): Window['umami'] | undefined {
  return typeof window === 'undefined' ? undefined : window.umami
}

export function track(event: AnalyticsEvent, properties?: AnalyticsProperties): void {
  const merged = withAttribution(properties)
  const umami = tracker()
  if (umami) {
    umami.track(event, merged)
    return
  }
  if (queue.length < MAX_QUEUED_EVENTS) {
    queue.push({ event, properties: merged })
  }
  logger.debug(event, merged)
}

/** Sends every queued event once the tracker exists. Safe to call any number of times. */
export function flushQueuedEvents(): void {
  const umami = tracker()
  if (!umami) {
    return
  }
  while (queue.length > 0) {
    const next = queue.shift()
    if (next) {
      umami.track(next.event, next.properties)
    }
  }
}

/** Test-only: clears the in-memory queue so tests do not leak events into each other. */
export function resetAnalyticsQueue(): void {
  queue.length = 0
}
