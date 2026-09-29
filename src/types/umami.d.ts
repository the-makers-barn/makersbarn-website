import type { AnalyticsProperties } from '@/lib/analytics'

interface UmamiTracker {
  track(event: string, data?: AnalyticsProperties): void
}

declare global {
  interface Window {
    umami?: UmamiTracker
  }
}

export {}
