# Web Insights (Umami + `/api/insights/web`) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Send page views and product events from themakersbarn.nl to a self-hosted Umami, and expose one bearer-protected JSON endpoint that summarises a week or a month for the scheduled digest task.

**Architecture:** A client component loads Umami's tracker through a same-origin `/stats/*` rewrite; a pure attribution module tags every event with a channel decided on the landing page. A Node route handler reads Umami's HTTP API through a small typed client and a pure builder, and returns aggregates only.

**Tech Stack:** Next.js 15 App Router, TypeScript strict, vitest + jsdom, date-fns 4 with `@date-fns/tz`, Umami 3.4 self-hosted on Railway.

**Spec:** `docs/superpowers/specs/2026-09-28-web-insights-umami-design.md`

## Global Constraints

- No `any`; explicit parameter and return types on every exported function (CLAUDE.md).
- Multi-valued strings are enums; single values are named constants. No magic numbers.
- Imports grouped builtin → external → internal (`@/…`), then sibling; `pnpm exec eslint <files>` must pass on every touched file.
- No `console.*` in product code; use `createLogger` from `@/lib/logger`.
- Tests are vitest, environment jsdom, files `src/**/*.test.ts(x)`; run one file with `pnpm vitest run <path>`.
- Property keys the site sends to Umami: `attribution_channel`, `attribution_campaign`. Never `channel` (already used by share buttons).
- Collect path is `/stats/api/send`; script path is `/stats/script.js`; one rewrite `/stats/:path*`.
- Paid traffic is decided by UTM tags only. `fbclid` alone is `META_ORGANIC`.
- Timezone for periods: `Europe/Amsterdam`; week starts Monday; `startAt` inclusive, `endAt` exclusive, milliseconds.
- Every endpoint response carries `Cache-Control: private, no-store`.
- Commit after every task with the message given; never push from a task.

## Review Focus

1. An event fired before the tracker script has loaded (calculator page hard landing) must still reach Umami with the landing attribution. Pinned in Task 3 (queue flush test).
2. A visitor arriving from `gemini.google.com` must be `AI_ASSISTANT`, not `GOOGLE`. Pinned in Task 2.
3. The Monday-morning `week` run in the last week of October (DST end) must return a 169-hour week with correct `from`/`to`. Pinned in Task 4.
4. An anonymous caller with the wrong secret must never consume the rate limit of the real caller. Pinned in Task 7 (429 only after authenticated calls).
5. Umami answering with HTML (a login page after a bad key) must become a 502, not an unhandled JSON parse error. Pinned in Task 5.

---

### Task 1: Constants, enums and the tracker type

**Files:**
- Modify: `src/constants/analytics.ts` (append)
- Create: `src/constants/insights.ts`
- Modify: `src/constants/index.ts` (add `export * from './insights'` after the analytics line)
- Create: `src/types/umami.d.ts`
- Test: `src/constants/insights.test.ts`

**Interfaces:**
- Produces: `Channel` enum, `ATTRIBUTION_CHANNEL_KEY`, `ATTRIBUTION_CAMPAIGN_KEY`, host and UTM lists, `InsightsPeriod`, `InsightsDomain`, `InsightsSource`, `UmamiMetricType`, `UmamiUtmType`, numeric constants, `CONTACT_EVENTS`, `INSIGHTS_TIMEZONE`, global `Window.umami`.

- [ ] **Step 1: Write the failing test**

`src/constants/insights.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { AnalyticsEvent, Channel } from './analytics'
import { CONTACT_EVENTS, INSIGHTS_RATE_LIMIT, InsightsPeriod, UmamiMetricType } from './insights'

describe('insights constants', () => {
  it('lists every contact event as a known analytics event', () => {
    for (const event of CONTACT_EVENTS) {
      expect(Object.values(AnalyticsEvent)).toContain(event)
    }
    expect(CONTACT_EVENTS).toHaveLength(5)
  })

  it('exposes the enum values the endpoint and Umami expect', () => {
    expect(InsightsPeriod.WEEK).toBe('week')
    expect(InsightsPeriod.MONTH).toBe('month')
    expect(UmamiMetricType.CHANNEL).toBe('channel')
    expect(Channel.UNKNOWN).toBe('unknown')
    expect(INSIGHTS_RATE_LIMIT.maxRequests).toBe(30)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run src/constants/insights.test.ts`
Expected: FAIL, cannot resolve `./insights`.

- [ ] **Step 3: Append to `src/constants/analytics.ts`**

```ts
/** Where a visit came from, decided once on the landing page and attached to every event. */
export enum Channel {
  INSTAGRAM_PAID = 'instagram_paid',
  META_ORGANIC = 'meta_organic',
  AI_ASSISTANT = 'ai_assistant',
  GOOGLE = 'google',
  DIRECT = 'direct',
  OTHER = 'other',
  UNKNOWN = 'unknown',
}

/** Event property keys. Prefixed so they never collide with call-site properties such as `channel`. */
export const ATTRIBUTION_CHANNEL_KEY = 'attribution_channel'
export const ATTRIBUTION_CAMPAIGN_KEY = 'attribution_campaign'
export const ATTRIBUTION_STORAGE_KEY = 'tmb.attribution'

export const META_UTM_SOURCES: ReadonlySet<string> = new Set(['instagram', 'ig', 'facebook', 'fb', 'meta'])
export const PAID_UTM_MEDIUMS: ReadonlySet<string> = new Set([
  'paid',
  'paid-social',
  'paid_social',
  'paidsocial',
  'cpc',
  'ppc',
])
export const AI_ASSISTANT_UTM_SOURCES: ReadonlySet<string> = new Set(['chatgpt.com'])
export const AI_ASSISTANT_HOSTS: ReadonlySet<string> = new Set([
  'chatgpt.com',
  'chat.openai.com',
  'perplexity.ai',
  'claude.ai',
  'gemini.google.com',
  'copilot.microsoft.com',
  'meta.ai',
  'you.com',
])
export const META_HOSTS: ReadonlySet<string> = new Set([
  'instagram.com',
  'l.instagram.com',
  'facebook.com',
  'l.facebook.com',
  'lm.facebook.com',
  'm.facebook.com',
])
export const GOOGLE_HOST_PATTERN = /^google\.[a-z.]+$/
export const META_CLICK_ID_PARAM = 'fbclid'

/** Events queued in the browser until the tracker script has loaded. */
export const MAX_QUEUED_EVENTS = 20
```

- [ ] **Step 4: Create `src/constants/insights.ts`**

```ts
import { AnalyticsEvent } from './analytics'

export enum InsightsPeriod {
  WEEK = 'week',
  MONTH = 'month',
}

export enum InsightsDomain {
  WEB = 'web',
}

export enum InsightsSource {
  UMAMI = 'umami',
}

export enum InsightsErrorCode {
  NOT_CONFIGURED = 'not_configured',
  UNAUTHORIZED = 'unauthorized',
  RATE_LIMITED = 'rate_limited',
  BAD_PERIOD = 'bad_period',
  UPSTREAM = 'upstream',
  TIMEOUT = 'timeout',
}

/** Metric types of Umami's GET /api/websites/{id}/metrics endpoint that the builder uses. */
export enum UmamiMetricType {
  PATH = 'path',
  REFERRER = 'referrer',
  CHANNEL = 'channel',
  EVENT = 'event',
}

/** Types of Umami's GET /api/websites/{id}/utm/metrics endpoint. */
export enum UmamiUtmType {
  CAMPAIGN = 'utm_campaign',
  SOURCE = 'utm_source',
  MEDIUM = 'utm_medium',
}

export const INSIGHTS_TIMEZONE = 'Europe/Amsterdam'
export const INSIGHTS_RATE_LIMIT = { windowMs: 15 * 60 * 1000, maxRequests: 30 } as const
/** One legitimate caller, so one bucket. */
export const INSIGHTS_RATE_LIMIT_KEY = 'insights'
export const INSIGHTS_TIMEOUT_MS = 30_000
export const UMAMI_REQUEST_TIMEOUT_MS = 10_000
export const TOP_ROWS = 10
export const MAX_UTM_VALUE_LENGTH = 100

/** Events that mean a visitor tried to reach the barn. Summed per channel in the digest. */
export const CONTACT_EVENTS: readonly AnalyticsEvent[] = [
  AnalyticsEvent.CONTACT_FORM_SUBMITTED,
  AnalyticsEvent.BOOKING_FORM_SUBMITTED,
  AnalyticsEvent.QUESTION_FORM_SUBMITTED,
  AnalyticsEvent.WHATSAPP_BOOKING_CLICKED,
  AnalyticsEvent.TICKETSHOP_CTA_CLICKED,
]
```

- [ ] **Step 5: Create `src/types/umami.d.ts`**

```ts
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
```

- [ ] **Step 6: Add `export * from './insights'` to `src/constants/index.ts`** right after `export * from './analytics'`.

- [ ] **Step 7: Run test and lint**

Run: `pnpm vitest run src/constants/insights.test.ts && pnpm exec tsc --noEmit && pnpm exec eslint src/constants/analytics.ts src/constants/insights.ts src/constants/insights.test.ts src/types/umami.d.ts`
Expected: PASS, no type or lint errors.

- [ ] **Step 8: Commit**

```bash
git add src/constants/analytics.ts src/constants/insights.ts src/constants/insights.test.ts src/constants/index.ts src/types/umami.d.ts
git commit -m "feat(analytics): channel enum, insights constants and Umami tracker type"
```

---

### Task 2: Attribution module

**Files:**
- Create: `src/lib/attribution.ts`
- Test: `src/lib/attribution.test.ts`

**Interfaces:**
- Consumes: Task 1 constants.
- Produces:
  ```ts
  export interface Attribution { attribution_channel: Channel; attribution_campaign?: string }
  export interface ClassifyInput { referrer: string; currentHost: string; params: URLSearchParams }
  export function classifyChannel(input: ClassifyInput): Channel
  export function extractCampaign(params: URLSearchParams): string | undefined
  export function rememberAttribution(): void
  export function getAttribution(): Attribution
  ```

- [ ] **Step 1: Write the failing tests**

`src/lib/attribution.test.ts`:

```ts
import { afterEach, describe, expect, it } from 'vitest'

import { ATTRIBUTION_STORAGE_KEY, Channel } from '@/constants/analytics'

import { classifyChannel, extractCampaign, getAttribution, rememberAttribution } from './attribution'

const HOST = 'themakersbarn.nl'

function classify(referrer: string, query = ''): Channel {
  return classifyChannel({ referrer, currentHost: HOST, params: new URLSearchParams(query) })
}

describe('classifyChannel', () => {
  it.each([
    ['UTM paid Instagram', 'https://l.instagram.com/', 'utm_source=instagram&utm_medium=paid-social', Channel.INSTAGRAM_PAID],
    ['UTM paid with cpc medium and no referrer', '', 'utm_source=fb&utm_medium=cpc', Channel.INSTAGRAM_PAID],
    ['UTM paid is case-insensitive', '', 'utm_source=Instagram&utm_medium=Paid_Social', Channel.INSTAGRAM_PAID],
    ['ChatGPT utm without referrer', '', 'utm_source=chatgpt.com', Channel.AI_ASSISTANT],
    ['Perplexity referrer', 'https://www.perplexity.ai/search/x', '', Channel.AI_ASSISTANT],
    ['Gemini is AI, not Google', 'https://gemini.google.com/app', '', Channel.AI_ASSISTANT],
    ['AI beats a Meta utm without paid medium', 'https://chatgpt.com/', 'utm_source=instagram', Channel.AI_ASSISTANT],
    ['Meta utm source without paid medium', '', 'utm_source=instagram&utm_medium=social', Channel.META_ORGANIC],
    ['fbclid alone is organic', '', 'fbclid=abc123', Channel.META_ORGANIC],
    ['Instagram referrer', 'https://l.instagram.com/?u=x', '', Channel.META_ORGANIC],
    ['Facebook mobile referrer', 'https://m.facebook.com/', '', Channel.META_ORGANIC],
    ['Google search', 'https://www.google.nl/', '', Channel.GOOGLE],
    ['Google with path', 'https://www.google.com/search?q=barn', '', Channel.GOOGLE],
    ['no referrer, no utm', '', '', Channel.DIRECT],
    ['no referrer, only fbclid-less unrelated params', '', 'ref=newsletter', Channel.DIRECT],
    ['same-origin referrer is direct', 'https://themakersbarn.nl/en/about', '', Channel.DIRECT],
    ['same-origin with www prefix is direct', 'https://www.themakersbarn.nl/', '', Channel.DIRECT],
    ['unknown referrer', 'https://duckduckgo.com/', '', Channel.OTHER],
    ['unknown utm source', '', 'utm_source=newsletter', Channel.OTHER],
    ['unparseable referrer', 'not a url', '', Channel.OTHER],
  ])('%s', (_label, referrer, query, expected) => {
    expect(classify(referrer, query)).toBe(expected)
  })
})

describe('extractCampaign', () => {
  it('returns the campaign when present', () => {
    expect(extractCampaign(new URLSearchParams('utm_campaign=autumn'))).toBe('autumn')
  })
  it('returns undefined for missing or empty campaign', () => {
    expect(extractCampaign(new URLSearchParams(''))).toBeUndefined()
    expect(extractCampaign(new URLSearchParams('utm_campaign='))).toBeUndefined()
  })
})

describe('rememberAttribution and getAttribution', () => {
  afterEach(() => {
    window.sessionStorage.clear()
    window.history.replaceState(null, '', '/')
  })

  it('stores the landing attribution and never overwrites it', () => {
    window.history.replaceState(null, '', '/nl?utm_source=instagram&utm_medium=paid-social&utm_campaign=autumn')
    rememberAttribution()
    window.history.replaceState(null, '', '/nl/contact')
    rememberAttribution()
    expect(getAttribution()).toEqual({ attribution_channel: Channel.INSTAGRAM_PAID, attribution_campaign: 'autumn' })
  })

  it('classifies lazily when nothing was stored yet', () => {
    window.history.replaceState(null, '', '/en?fbclid=xyz')
    expect(getAttribution()).toEqual({ attribution_channel: Channel.META_ORGANIC })
    expect(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)).not.toBeNull()
  })

  it('omits the campaign key when there is no campaign', () => {
    rememberAttribution()
    expect(getAttribution()).not.toHaveProperty('attribution_campaign')
  })

  it('returns UNKNOWN when storage throws', () => {
    const original = window.sessionStorage
    Object.defineProperty(window, 'sessionStorage', {
      configurable: true,
      get: () => {
        throw new Error('blocked')
      },
    })
    try {
      expect(getAttribution()).toEqual({ attribution_channel: Channel.UNKNOWN })
    } finally {
      Object.defineProperty(window, 'sessionStorage', { configurable: true, value: original })
    }
  })

  it('ignores corrupt stored values', () => {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, '{not json')
    window.history.replaceState(null, '', '/en')
    expect(getAttribution()).toEqual({ attribution_channel: Channel.DIRECT })
  })
})
```

- [ ] **Step 2: Run to verify it fails**

Run: `pnpm vitest run src/lib/attribution.test.ts`
Expected: FAIL, cannot resolve `./attribution`.

- [ ] **Step 3: Implement `src/lib/attribution.ts`**

```ts
import {
  AI_ASSISTANT_HOSTS,
  AI_ASSISTANT_UTM_SOURCES,
  ATTRIBUTION_STORAGE_KEY,
  Channel,
  GOOGLE_HOST_PATTERN,
  META_CLICK_ID_PARAM,
  META_HOSTS,
  META_UTM_SOURCES,
  PAID_UTM_MEDIUMS,
} from '@/constants/analytics'

/**
 * Where the visit came from, decided once on the landing page.
 *
 * Umami stores referrers and UTM tags per session but cannot join them to a
 * custom event, so the site tags every event itself. Keys are prefixed so a
 * call site's own `channel` property is never overwritten.
 */
export interface Attribution {
  attribution_channel: Channel
  attribution_campaign?: string
}

export interface ClassifyInput {
  referrer: string
  currentHost: string
  params: URLSearchParams
}

const UTM_SOURCE = 'utm_source'
const UTM_MEDIUM = 'utm_medium'
const UTM_CAMPAIGN = 'utm_campaign'
const WWW_PREFIX = 'www.'

function stripWww(host: string): string {
  return host.startsWith(WWW_PREFIX) ? host.slice(WWW_PREFIX.length) : host
}

/** Hostname of the referrer, lower-cased and without `www.`; empty when absent, unparseable, or our own host. */
function referrerHost(referrer: string, currentHost: string): string {
  if (!referrer) {
    return ''
  }
  let host: string
  try {
    host = stripWww(new URL(referrer).hostname.toLowerCase())
  } catch {
    return ''
  }
  return host === stripWww(currentHost.toLowerCase()) ? '' : host
}

function lowerParam(params: URLSearchParams, key: string): string {
  return (params.get(key) ?? '').trim().toLowerCase()
}

export function classifyChannel({ referrer, currentHost, params }: ClassifyInput): Channel {
  const source = lowerParam(params, UTM_SOURCE)
  const medium = lowerParam(params, UTM_MEDIUM)
  const host = referrerHost(referrer, currentHost)
  const unparseableReferrer = referrer !== '' && host === '' && !isSameHost(referrer, currentHost)

  if (META_UTM_SOURCES.has(source) && PAID_UTM_MEDIUMS.has(medium)) {
    return Channel.INSTAGRAM_PAID
  }
  if (AI_ASSISTANT_UTM_SOURCES.has(source) || AI_ASSISTANT_HOSTS.has(host)) {
    return Channel.AI_ASSISTANT
  }
  if (META_UTM_SOURCES.has(source) || params.has(META_CLICK_ID_PARAM) || META_HOSTS.has(host)) {
    return Channel.META_ORGANIC
  }
  if (GOOGLE_HOST_PATTERN.test(host)) {
    return Channel.GOOGLE
  }
  if (host === '' && source === '' && !unparseableReferrer) {
    return Channel.DIRECT
  }
  return Channel.OTHER
}

function isSameHost(referrer: string, currentHost: string): boolean {
  try {
    return stripWww(new URL(referrer).hostname.toLowerCase()) === stripWww(currentHost.toLowerCase())
  } catch {
    return false
  }
}

export function extractCampaign(params: URLSearchParams): string | undefined {
  const campaign = (params.get(UTM_CAMPAIGN) ?? '').trim()
  return campaign === '' ? undefined : campaign
}

function classifyCurrentPage(): Attribution {
  const params = new URLSearchParams(window.location.search)
  const attribution: Attribution = {
    attribution_channel: classifyChannel({
      referrer: document.referrer,
      currentHost: window.location.host,
      params,
    }),
  }
  const campaign = extractCampaign(params)
  if (campaign !== undefined) {
    attribution.attribution_campaign = campaign
  }
  return attribution
}

function isChannel(value: unknown): value is Channel {
  return typeof value === 'string' && (Object.values(Channel) as string[]).includes(value)
}

function readStored(): Attribution | null {
  const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
  if (raw === null) {
    return null
  }
  try {
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) {
      return null
    }
    const candidate = parsed as Partial<Attribution>
    if (!isChannel(candidate.attribution_channel)) {
      return null
    }
    return typeof candidate.attribution_campaign === 'string'
      ? { attribution_channel: candidate.attribution_channel, attribution_campaign: candidate.attribution_campaign }
      : { attribution_channel: candidate.attribution_channel }
  } catch {
    return null
  }
}

/** Classifies and stores the landing attribution once per visit. Later pages never overwrite it. */
export function rememberAttribution(): void {
  try {
    if (readStored() !== null) {
      return
    }
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(classifyCurrentPage()))
  } catch {
    // Storage blocked: events fall back to UNKNOWN in getAttribution.
  }
}

/** Stored attribution, classified lazily when nothing was stored yet; UNKNOWN when storage is unavailable. */
export function getAttribution(): Attribution {
  try {
    const stored = readStored()
    if (stored !== null) {
      return stored
    }
    const fresh = classifyCurrentPage()
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(fresh))
    return fresh
  } catch {
    return { attribution_channel: Channel.UNKNOWN }
  }
}
```

Note on rule order: the spec's rule 0 (same-origin referrer counts as none) is implemented inside `referrerHost`. An unparseable referrer is `OTHER`, never `DIRECT`.

- [ ] **Step 4: Run tests, type-check and lint**

Run: `pnpm vitest run src/lib/attribution.test.ts && pnpm exec tsc --noEmit && pnpm exec eslint src/lib/attribution.ts src/lib/attribution.test.ts`
Expected: all PASS. If eslint flags `isSameHost` as used before definition, move it above `classifyChannel`.

- [ ] **Step 5: Commit**

```bash
git add src/lib/attribution.ts src/lib/attribution.test.ts
git commit -m "feat(analytics): classify the landing channel and keep it for the visit"
```

---

### Task 3: `track()` through Umami, tracker component, rewrite and middleware

**Files:**
- Modify: `src/lib/analytics.ts` (rewrite)
- Modify: `src/lib/analytics.test.ts` (rewrite)
- Create: `src/components/client/UmamiTracker/UmamiTracker.tsx`, `src/components/client/UmamiTracker/index.ts`
- Modify: `src/components/client/index.ts` (add `export { UmamiTracker } from './UmamiTracker'`; check the file's existing export style first and match it)
- Modify: `src/app/layout.tsx`
- Modify: `next.config.ts`
- Modify: `src/middleware.ts:93` (`SKIP_PATHS`)
- Modify: `.env.example`
- Test: `src/lib/analytics.test.ts`, `src/components/client/UmamiTracker/UmamiTracker.test.tsx`

**Interfaces:**
- Consumes: `getAttribution` (Task 2), `MAX_QUEUED_EVENTS`, `AnalyticsEvent` (Task 1).
- Produces: `track(event, properties?)` unchanged signature; `flushQueuedEvents(): void`; `AnalyticsProperties` type unchanged; `<UmamiTracker />`.

- [ ] **Step 1: Rewrite `src/lib/analytics.test.ts` (failing)**

```ts
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ATTRIBUTION_STORAGE_KEY, AnalyticsEvent, Channel, MAX_QUEUED_EVENTS } from '@/constants/analytics'

import { flushQueuedEvents, track } from './analytics'

function installUmami(): ReturnType<typeof vi.fn> {
  const trackSpy = vi.fn()
  window.umami = { track: trackSpy }
  return trackSpy
}

describe('track', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
    window.history.replaceState(null, '', '/en?utm_source=instagram&utm_medium=paid-social&utm_campaign=autumn')
    vi.spyOn(console, 'info').mockImplementation(() => undefined)
  })

  afterEach(() => {
    delete window.umami
    flushQueuedEvents()
    vi.restoreAllMocks()
  })

  it('sends the event to Umami with the landing attribution merged in', () => {
    const umamiTrack = installUmami()

    track(AnalyticsEvent.CONTACT_FORM_SUBMITTED)

    expect(umamiTrack).toHaveBeenCalledWith(AnalyticsEvent.CONTACT_FORM_SUBMITTED, {
      attribution_channel: Channel.INSTAGRAM_PAID,
      attribution_campaign: 'autumn',
    })
  })

  it('lets call-site properties win and keeps the existing channel property intact', () => {
    const umamiTrack = installUmami()

    track(AnalyticsEvent.CALCULATOR_SHARED, { variant: 'a', channel: 'copy' })

    expect(umamiTrack).toHaveBeenCalledWith(AnalyticsEvent.CALCULATOR_SHARED, {
      attribution_channel: Channel.INSTAGRAM_PAID,
      attribution_campaign: 'autumn',
      variant: 'a',
      channel: 'copy',
    })
  })

  it('queues events until the tracker loads, then flushes them in order', () => {
    track(AnalyticsEvent.CALCULATOR_LOADED, { variant: 'a' })
    track(AnalyticsEvent.WHATSAPP_BOOKING_CLICKED)
    const umamiTrack = installUmami()
    expect(umamiTrack).not.toHaveBeenCalled()

    flushQueuedEvents()

    expect(umamiTrack.mock.calls.map((call) => call[0])).toEqual([
      AnalyticsEvent.CALCULATOR_LOADED,
      AnalyticsEvent.WHATSAPP_BOOKING_CLICKED,
    ])
    expect(umamiTrack.mock.calls[0]?.[1]).toMatchObject({ variant: 'a', attribution_channel: Channel.INSTAGRAM_PAID })
  })

  it('caps the queue and drops the newest events beyond the cap', () => {
    for (let i = 0; i < MAX_QUEUED_EVENTS + 5; i += 1) {
      track(AnalyticsEvent.CALCULATOR_LOADED, { i })
    }
    const umamiTrack = installUmami()
    flushQueuedEvents()
    expect(umamiTrack).toHaveBeenCalledTimes(MAX_QUEUED_EVENTS)
  })

  it('flushing without a tracker keeps the queue for later', () => {
    track(AnalyticsEvent.CALCULATOR_LOADED)
    flushQueuedEvents()
    const umamiTrack = installUmami()
    flushQueuedEvents()
    expect(umamiTrack).toHaveBeenCalledTimes(1)
  })

  it('logs at debug level while queuing', () => {
    track(AnalyticsEvent.CONTACT_FORM_SUBMITTED)
    const line = String(vi.mocked(console.info).mock.calls[0]?.[0])
    expect(line).toContain(AnalyticsEvent.CONTACT_FORM_SUBMITTED)
    expect(window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)).not.toBeNull()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

Run: `pnpm vitest run src/lib/analytics.test.ts`
Expected: FAIL (`flushQueuedEvents` not exported; Umami not called).

- [ ] **Step 3: Rewrite `src/lib/analytics.ts`**

```ts
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
```

Note: the afterEach in the test calls `flushQueuedEvents()` after deleting `window.umami`, which leaves the queue intact; the "caps the queue" test therefore starts with `queue` possibly non-empty. To keep tests independent, also export a test-only reset: add `export function resetAnalyticsQueue(): void { queue.length = 0 }` and call it in the test's `beforeEach`. Update the test's import line to `import { flushQueuedEvents, resetAnalyticsQueue, track } from './analytics'` and add `resetAnalyticsQueue()` as the first line of `beforeEach`.

- [ ] **Step 4: Run tests**

Run: `pnpm vitest run src/lib/analytics.test.ts`
Expected: PASS.

- [ ] **Step 5: Write the failing tracker component test**

`src/components/client/UmamiTracker/UmamiTracker.test.tsx`:

```tsx
import { render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('next/script', () => ({
  default: (props: { src: string; 'data-website-id': string }) => (
    <script data-testid="umami-script" src={props.src} data-website-id={props['data-website-id']} />
  ),
}))

describe('UmamiTracker', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('renders nothing without a website id', async () => {
    vi.stubEnv('NEXT_PUBLIC_UMAMI_WEBSITE_ID', '')
    const { UmamiTracker } = await import('./UmamiTracker')
    const { container } = render(<UmamiTracker />)
    expect(container.querySelector('script')).toBeNull()
  })

  it('renders the tracker from the same-origin stats path when the id is set', async () => {
    vi.stubEnv('NEXT_PUBLIC_UMAMI_WEBSITE_ID', 'site-123')
    const { UmamiTracker } = await import('./UmamiTracker')
    const { getByTestId } = render(<UmamiTracker />)
    const script = getByTestId('umami-script')
    expect(script.getAttribute('src')).toBe('/stats/script.js')
    expect(script.getAttribute('data-website-id')).toBe('site-123')
  })
})
```

- [ ] **Step 6: Implement the component**

`src/components/client/UmamiTracker/UmamiTracker.tsx`:

```tsx
'use client'

import Script from 'next/script'

import { flushQueuedEvents } from '@/lib/analytics'
import { rememberAttribution } from '@/lib/attribution'

/** Same-origin path that next.config rewrites to the Umami service. */
export const UMAMI_SCRIPT_PATH = '/stats/script.js'

/**
 * Loads the Umami tracker through the site's own domain.
 *
 * The tracker derives its collect endpoint from the script's directory, so it
 * posts to /stats/api/send, which the same rewrite forwards. Renders nothing
 * without a website id, so local development sends no data.
 */
export function UmamiTracker(): React.JSX.Element | null {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  if (!websiteId) {
    return null
  }

  const handleLoad = (): void => {
    rememberAttribution()
    flushQueuedEvents()
  }

  return (
    <Script
      src={UMAMI_SCRIPT_PATH}
      strategy="afterInteractive"
      data-website-id={websiteId}
      data-exclude-hash="true"
      onLoad={handleLoad}
    />
  )
}
```

`src/components/client/UmamiTracker/index.ts`:

```ts
export { UmamiTracker, UMAMI_SCRIPT_PATH } from './UmamiTracker'
```

Add the export to `src/components/client/index.ts` in the same style as its neighbours.

- [ ] **Step 7: Render it in `src/app/layout.tsx`**

Add `import { UmamiTracker } from '@/components/client'` with the other `@/` imports and render `<UmamiTracker />` directly after `{children}` inside `<body>`.

- [ ] **Step 8: Add the rewrite to `next.config.ts`**

Above `const nextConfig`, add:

```ts
/** Same-origin prefix the browser uses for the Umami tracker and its collect endpoint. */
const STATS_PROXY_PREFIX = '/stats'
/** Local fallback so the config loads without an Umami service (the tracker is not rendered then). */
const DEFAULT_UMAMI_URL = 'http://localhost:3000'
const umamiUrl = (process.env.UMAMI_URL ?? DEFAULT_UMAMI_URL).replace(/\/$/, '')
```

Inside `nextConfig`, after `headers()`, add:

```ts
  rewrites() {
    return Promise.resolve({
      beforeFiles: [],
      afterFiles: [
        {
          source: `${STATS_PROXY_PREFIX}/:path*`,
          destination: `${umamiUrl}/:path*`,
        },
      ],
      fallback: [],
    })
  },
```

- [ ] **Step 9: Middleware skip and env example**

In `src/middleware.ts`, change the `SKIP_PATHS` array to include `'/stats/'` and extend its doc comment with one line: `/stats/` is the same-origin proxy for the Umami tracker; its collect call has no extension.

Append to `.env.example`:

```
# Umami analytics (self-hosted on Railway)
# Website id from the Umami dashboard; the tracker is rendered only when set
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
# Base URL of the Umami service for the /stats rewrite and the insights API (build-time)
UMAMI_URL=http://localhost:3000
# API key of the insights-reader user (Umami 3.4+, Settings > API keys)
UMAMI_API_KEY=
# Bearer secret the scheduled digest task sends to /api/insights/web
INSIGHTS_API_SECRET=
```

- [ ] **Step 10: Run everything**

Run: `pnpm vitest run src/lib/analytics.test.ts src/components/client/UmamiTracker && pnpm exec tsc --noEmit && pnpm exec eslint src/lib/analytics.ts src/lib/analytics.test.ts src/components/client/UmamiTracker src/app/layout.tsx next.config.ts src/middleware.ts && pnpm build`
Expected: all PASS; the build prints the `/stats/:path*` rewrite without errors.

- [ ] **Step 11: Commit**

```bash
git add src/lib/analytics.ts src/lib/analytics.test.ts src/components/client/UmamiTracker src/components/client/index.ts src/app/layout.tsx next.config.ts src/middleware.ts .env.example
git commit -m "feat(analytics): load Umami through a same-origin proxy and queue events until it is ready"
```

---

### Task 4: Reporting periods

**Files:**
- Create: `src/lib/insights/periods.ts`
- Test: `src/lib/insights/periods.test.ts`
- Modify: `package.json` (add `@date-fns/tz` dependency via `pnpm add @date-fns/tz@1.4.1`)

**Interfaces:**
- Consumes: `InsightsPeriod`, `INSIGHTS_TIMEZONE` (Task 1).
- Produces:
  ```ts
  export interface DateRange { startAt: number; endAt: number; from: string; to: string }
  export interface ReportingPeriods { kind: InsightsPeriod; timezone: string; current: DateRange; previous: DateRange }
  export function resolvePeriods(kind: InsightsPeriod, now: Date): ReportingPeriods
  ```

- [ ] **Step 1: Add the dependency**

Run: `pnpm add @date-fns/tz@1.4.1`

- [ ] **Step 2: Write the failing test**

`src/lib/insights/periods.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { InsightsPeriod, INSIGHTS_TIMEZONE } from '@/constants/insights'

import { resolvePeriods } from './periods'

const HOUR = 60 * 60 * 1000

describe('resolvePeriods', () => {
  it('week: last complete Monday-to-Sunday week and the one before, Amsterdam midnight', () => {
    const now = new Date('2026-09-28T06:00:00Z') // Monday 08:00 in Amsterdam (CEST)
    const periods = resolvePeriods(InsightsPeriod.WEEK, now)
    expect(periods.kind).toBe(InsightsPeriod.WEEK)
    expect(periods.timezone).toBe(INSIGHTS_TIMEZONE)
    expect(periods.current).toEqual({
      startAt: Date.parse('2026-09-20T22:00:00Z'),
      endAt: Date.parse('2026-09-27T22:00:00Z'),
      from: '2026-09-21',
      to: '2026-09-27',
    })
    expect(periods.previous).toEqual({
      startAt: Date.parse('2026-09-13T22:00:00Z'),
      endAt: Date.parse('2026-09-20T22:00:00Z'),
      from: '2026-09-14',
      to: '2026-09-20',
    })
  })

  it('week: a Sunday still reports the week that ended a week ago', () => {
    const periods = resolvePeriods(InsightsPeriod.WEEK, new Date('2026-09-27T10:00:00Z'))
    expect(periods.current.from).toBe('2026-09-14')
    expect(periods.current.to).toBe('2026-09-20')
  })

  it('week: the DST-end week is 169 hours long and boundaries stay at local midnight', () => {
    const periods = resolvePeriods(InsightsPeriod.WEEK, new Date('2026-11-02T07:00:00Z'))
    expect(periods.current.from).toBe('2026-10-26')
    expect(periods.current.to).toBe('2026-11-01')
    expect(periods.current.startAt).toBe(Date.parse('2026-10-25T23:00:00Z'))
    expect(periods.current.endAt).toBe(Date.parse('2026-11-01T23:00:00Z'))
    expect((periods.current.endAt - periods.current.startAt) / HOUR).toBe(168)
    expect((periods.previous.endAt - periods.previous.startAt) / HOUR).toBe(169)
  })

  it('month: last complete calendar month and the one before it', () => {
    const periods = resolvePeriods(InsightsPeriod.MONTH, new Date('2026-10-01T05:00:00Z'))
    expect(periods.current).toEqual({
      startAt: Date.parse('2026-08-31T22:00:00Z'),
      endAt: Date.parse('2026-09-30T22:00:00Z'),
      from: '2026-09-01',
      to: '2026-09-30',
    })
    expect(periods.previous.from).toBe('2026-08-01')
    expect(periods.previous.to).toBe('2026-08-31')
  })

  it('month: January reports December of the previous year', () => {
    const periods = resolvePeriods(InsightsPeriod.MONTH, new Date('2027-01-01T05:00:00Z'))
    expect(periods.current.from).toBe('2026-12-01')
    expect(periods.current.to).toBe('2026-12-31')
    expect(periods.previous.from).toBe('2026-11-01')
    expect(periods.current.startAt).toBe(Date.parse('2026-11-30T23:00:00Z'))
  })
})
```

- [ ] **Step 3: Run to verify it fails**

Run: `pnpm vitest run src/lib/insights/periods.test.ts`
Expected: FAIL, cannot resolve `./periods`.

- [ ] **Step 4: Implement `src/lib/insights/periods.ts`**

```ts
import { tz } from '@date-fns/tz'
import { addDays, addMonths, addWeeks, format, startOfMonth, startOfWeek } from 'date-fns'

import { INSIGHTS_TIMEZONE, InsightsPeriod } from '@/constants/insights'

/** A half-open range: startAt inclusive, endAt exclusive, both Amsterdam midnight in ms. */
export interface DateRange {
  startAt: number
  endAt: number
  /** Inclusive first day, YYYY-MM-DD in the reporting timezone. */
  from: string
  /** Inclusive last day, YYYY-MM-DD in the reporting timezone. */
  to: string
}

export interface ReportingPeriods {
  kind: InsightsPeriod
  timezone: string
  current: DateRange
  previous: DateRange
}

const MONDAY = 1
const IN_ZONE = { in: tz(INSIGHTS_TIMEZONE) }
const DAY_FORMAT = 'yyyy-MM-dd'

function toRange(start: Date, end: Date): DateRange {
  return {
    startAt: start.getTime(),
    endAt: end.getTime(),
    from: format(start, DAY_FORMAT, IN_ZONE),
    to: format(addDays(end, -1, IN_ZONE), DAY_FORMAT, IN_ZONE),
  }
}

/**
 * The last complete week or month before `now`, plus the one before it.
 * Calendar arithmetic runs in the reporting zone so DST changes keep
 * boundaries at local midnight (a DST week is 167 or 169 hours).
 */
export function resolvePeriods(kind: InsightsPeriod, now: Date): ReportingPeriods {
  if (kind === InsightsPeriod.WEEK) {
    const thisWeek = startOfWeek(now, { ...IN_ZONE, weekStartsOn: MONDAY })
    const currentStart = addWeeks(thisWeek, -1, IN_ZONE)
    const previousStart = addWeeks(thisWeek, -2, IN_ZONE)
    return {
      kind,
      timezone: INSIGHTS_TIMEZONE,
      current: toRange(currentStart, thisWeek),
      previous: toRange(previousStart, currentStart),
    }
  }
  const thisMonth = startOfMonth(now, IN_ZONE)
  const currentStart = addMonths(thisMonth, -1, IN_ZONE)
  const previousStart = addMonths(thisMonth, -2, IN_ZONE)
  return {
    kind,
    timezone: INSIGHTS_TIMEZONE,
    current: toRange(currentStart, thisMonth),
    previous: toRange(previousStart, currentStart),
  }
}
```

If `format`/`addDays` do not accept the `in` option in the installed date-fns version, check `node_modules/date-fns/package.json` version (must be ≥ 4.0) and the `TZDate` alternative: `new TZDate(now, INSIGHTS_TIMEZONE)` wraps the input and all date-fns functions then operate in that zone.

- [ ] **Step 5: Run tests, type-check, lint**

Run: `pnpm vitest run src/lib/insights/periods.test.ts && pnpm exec tsc --noEmit && pnpm exec eslint src/lib/insights`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add package.json pnpm-lock.yaml src/lib/insights/periods.ts src/lib/insights/periods.test.ts
git commit -m "feat(insights): resolve the last complete week or month in Europe/Amsterdam"
```

---

### Task 5: Umami API client

**Files:**
- Create: `src/services/umami.ts`
- Test: `src/services/umami.test.ts`

**Interfaces:**
- Consumes: `UmamiMetricType`, `UmamiUtmType`, `UMAMI_REQUEST_TIMEOUT_MS` (Task 1), `DateRange` (Task 4).
- Produces:
  ```ts
  export interface UmamiStats { pageviews: number; visitors: number; visits: number; bounces: number; totaltime: number }
  export interface UmamiMetric { x: string; y: number }
  export interface UmamiUtmMetric { utm: string; views: number }
  export interface UmamiEventValue { value: string; total: number }
  export interface UmamiReader {
    getStats(range: DateRange): Promise<UmamiStats>
    getMetrics(range: DateRange, type: UmamiMetricType, limit: number): Promise<UmamiMetric[]>
    getUtmMetrics(range: DateRange, type: UmamiUtmType): Promise<UmamiUtmMetric[]>
    getEventPropertyValues(range: DateRange, eventName: string, propertyName: string): Promise<UmamiEventValue[]>
  }
  export interface UmamiClientConfig { baseUrl: string; websiteId: string; apiKey: string; fetchImpl?: typeof fetch }
  export class UmamiError extends Error { readonly status: number | null }
  export function createUmamiClient(config: UmamiClientConfig): UmamiReader
  ```

- [ ] **Step 1: Write the failing tests**

`src/services/umami.test.ts`:

```ts
import { describe, expect, it, vi } from 'vitest'

import { UmamiMetricType, UmamiUtmType } from '@/constants/insights'
import type { DateRange } from '@/lib/insights/periods'

import { createUmamiClient, UmamiError } from './umami'

const RANGE: DateRange = { startAt: 1_000, endAt: 2_000, from: '2026-09-21', to: '2026-09-27' }

function jsonResponse(body: unknown, status = 200, contentType = 'application/json'): Response {
  return new Response(typeof body === 'string' ? body : JSON.stringify(body), {
    status,
    headers: { 'content-type': contentType },
  })
}

function client(fetchImpl: typeof fetch) {
  return createUmamiClient({ baseUrl: 'http://umami.test', websiteId: 'w1', apiKey: 'umami_key', fetchImpl })
}

describe('createUmamiClient', () => {
  it('sends the bearer key and the range to the stats endpoint', async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse({ pageviews: 10, visitors: 4, visits: 5, bounces: 2, totaltime: 300, comparison: {} }),
    )
    const stats = await client(fetchImpl as unknown as typeof fetch).getStats(RANGE)

    expect(stats).toEqual({ pageviews: 10, visitors: 4, visits: 5, bounces: 2, totaltime: 300 })
    const [url, init] = fetchImpl.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('http://umami.test/api/websites/w1/stats?startAt=1000&endAt=2000')
    expect(new Headers(init.headers).get('authorization')).toBe('Bearer umami_key')
  })

  it('builds metric, utm and event-data URLs', async () => {
    const fetchImpl = vi.fn(async () => jsonResponse([]))
    const c = client(fetchImpl as unknown as typeof fetch)
    await c.getMetrics(RANGE, UmamiMetricType.PATH, 10)
    await c.getUtmMetrics(RANGE, UmamiUtmType.CAMPAIGN)
    await c.getEventPropertyValues(RANGE, 'contact_form_submitted', 'attribution_channel')
    const urls = fetchImpl.mock.calls.map((call) => String((call as unknown as [string])[0]))
    expect(urls[0]).toBe('http://umami.test/api/websites/w1/metrics?startAt=1000&endAt=2000&type=path&limit=10')
    expect(urls[1]).toBe('http://umami.test/api/websites/w1/utm/metrics?startAt=1000&endAt=2000&type=utm_campaign')
    expect(urls[2]).toBe(
      'http://umami.test/api/websites/w1/event-data/values?startAt=1000&endAt=2000&eventName=contact_form_submitted&propertyName=attribution_channel',
    )
  })

  it.each([401, 500])('turns HTTP %s into UmamiError with the status', async (status) => {
    const fetchImpl = vi.fn(async () => jsonResponse({ error: 'x' }, status))
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toMatchObject({
      name: 'UmamiError',
      status,
    })
  })

  it('turns an HTML body into UmamiError', async () => {
    const fetchImpl = vi.fn(async () => jsonResponse('<html>login</html>', 200, 'text/html'))
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toBeInstanceOf(UmamiError)
  })

  it('turns a network failure or timeout into UmamiError with null status', async () => {
    const fetchImpl = vi.fn(async () => {
      throw new DOMException('aborted', 'TimeoutError')
    })
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toMatchObject({
      name: 'UmamiError',
      status: null,
    })
  })

  it('rejects a stats body with missing numbers', async () => {
    const fetchImpl = vi.fn(async () => jsonResponse({ pageviews: 'ten' }))
    await expect(client(fetchImpl as unknown as typeof fetch).getStats(RANGE)).rejects.toBeInstanceOf(UmamiError)
  })
})
```

- [ ] **Step 2: Run to verify it fails**

Run: `pnpm vitest run src/services/umami.test.ts`
Expected: FAIL, cannot resolve `./umami`.

- [ ] **Step 3: Implement `src/services/umami.ts`**

```ts
import { UMAMI_REQUEST_TIMEOUT_MS, UmamiMetricType, UmamiUtmType } from '@/constants/insights'
import type { DateRange } from '@/lib/insights/periods'

/**
 * Read-only client for the self-hosted Umami HTTP API (v3.4).
 *
 * Authentication is an API key sent as a bearer token; keys never expire, so
 * there is no login or token cache. Every failure becomes an UmamiError so
 * the route can answer 502 without leaking upstream details.
 */
export interface UmamiStats {
  pageviews: number
  visitors: number
  visits: number
  bounces: number
  totaltime: number
}

export interface UmamiMetric {
  x: string
  y: number
}

export interface UmamiUtmMetric {
  utm: string
  views: number
}

export interface UmamiEventValue {
  value: string
  total: number
}

export interface UmamiReader {
  getStats(range: DateRange): Promise<UmamiStats>
  getMetrics(range: DateRange, type: UmamiMetricType, limit: number): Promise<UmamiMetric[]>
  getUtmMetrics(range: DateRange, type: UmamiUtmType): Promise<UmamiUtmMetric[]>
  getEventPropertyValues(range: DateRange, eventName: string, propertyName: string): Promise<UmamiEventValue[]>
}

export interface UmamiClientConfig {
  baseUrl: string
  websiteId: string
  apiKey: string
  fetchImpl?: typeof fetch
}

export class UmamiError extends Error {
  readonly status: number | null

  constructor(message: string, status: number | null) {
    super(message)
    this.name = 'UmamiError'
    this.status = status
  }
}

const STATS_FIELDS: readonly (keyof UmamiStats)[] = ['pageviews', 'visitors', 'visits', 'bounces', 'totaltime']

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function parseStats(body: unknown): UmamiStats {
  if (!isRecord(body)) {
    throw new UmamiError('stats body is not an object', null)
  }
  const stats: Partial<UmamiStats> = {}
  for (const field of STATS_FIELDS) {
    const value = body[field]
    if (typeof value !== 'number') {
      throw new UmamiError(`stats field ${field} is not a number`, null)
    }
    stats[field] = value
  }
  return stats as UmamiStats
}

function parseRows<T>(body: unknown, keys: readonly string[]): T[] {
  if (!Array.isArray(body)) {
    throw new UmamiError('expected an array', null)
  }
  return body.filter((row): row is T => isRecord(row) && keys.every((key) => key in row))
}

export function createUmamiClient(config: UmamiClientConfig): UmamiReader {
  const fetchImpl = config.fetchImpl ?? fetch
  const base = `${config.baseUrl.replace(/\/$/, '')}/api/websites/${encodeURIComponent(config.websiteId)}`

  async function getJson(path: string, params: Record<string, string>): Promise<unknown> {
    const query = new URLSearchParams(params).toString()
    const url = `${base}/${path}?${query}`
    let response: Response
    try {
      response = await fetchImpl(url, {
        headers: { authorization: `Bearer ${config.apiKey}`, accept: 'application/json' },
        signal: AbortSignal.timeout(UMAMI_REQUEST_TIMEOUT_MS),
      })
    } catch (error) {
      throw new UmamiError(error instanceof Error ? error.message : 'request failed', null)
    }
    if (!response.ok) {
      throw new UmamiError(`umami answered ${response.status} for ${path}`, response.status)
    }
    const contentType = response.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      throw new UmamiError(`umami answered ${contentType || 'no content type'} for ${path}`, response.status)
    }
    try {
      return await response.json()
    } catch {
      throw new UmamiError(`umami body for ${path} is not JSON`, response.status)
    }
  }

  function rangeParams(range: DateRange): Record<string, string> {
    return { startAt: String(range.startAt), endAt: String(range.endAt) }
  }

  return {
    async getStats(range) {
      return parseStats(await getJson('stats', rangeParams(range)))
    },
    async getMetrics(range, type, limit) {
      return parseRows<UmamiMetric>(await getJson('metrics', { ...rangeParams(range), type, limit: String(limit) }), ['x', 'y'])
    },
    async getUtmMetrics(range, type) {
      return parseRows<UmamiUtmMetric>(await getJson('utm/metrics', { ...rangeParams(range), type }), ['utm', 'views'])
    },
    async getEventPropertyValues(range, eventName, propertyName) {
      return parseRows<UmamiEventValue>(
        await getJson('event-data/values', { ...rangeParams(range), eventName, propertyName }),
        ['value', 'total'],
      )
    },
  }
}
```

- [ ] **Step 4: Run tests, type-check, lint**

Run: `pnpm vitest run src/services/umami.test.ts && pnpm exec tsc --noEmit && pnpm exec eslint src/services/umami.ts src/services/umami.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/services/umami.ts src/services/umami.test.ts
git commit -m "feat(insights): typed read-only client for the Umami API"
```

---

### Task 6: The insights builder

**Files:**
- Create: `src/lib/insights/buildWebInsights.ts`
- Create: `src/types/insights.ts` and add `export * from './insights'` to `src/types/index.ts`
- Test: `src/lib/insights/buildWebInsights.test.ts`

**Interfaces:**
- Consumes: `UmamiReader` and row types (Task 5), `ReportingPeriods` (Task 4), constants (Task 1).
- Produces:
  ```ts
  // src/types/insights.ts
  export interface MetricComparison { current: number; previous: number; changePct: number | null }
  export interface WebInsights { domain: InsightsDomain; period: { kind: InsightsPeriod; from: string; to: string; timezone: string }; previousPeriod: { from: string; to: string }; totals: {...}; topPages: {path,visitors}[]; topReferrers: {host,visitors}[]; umamiChannels: {channel,visitors}[]; campaigns: Record<UmamiUtmType, {value,views}[]>; events: {name,current,previous}[]; contactsByChannel: {channel: Channel, contacts}[]; generatedAt: string; source: InsightsSource }
  // builder
  export function buildWebInsights(reader: UmamiReader, periods: ReportingPeriods, now: Date): Promise<WebInsights>
  ```

- [ ] **Step 1: Write the types file `src/types/insights.ts`**

```ts
import type { Channel } from '@/constants/analytics'
import type { InsightsDomain, InsightsPeriod, InsightsSource, UmamiUtmType } from '@/constants/insights'

export interface MetricComparison {
  current: number
  previous: number
  /** Percentage change, one decimal; null when the previous value is 0. */
  changePct: number | null
}

export interface PeriodSummary {
  kind: InsightsPeriod
  from: string
  to: string
  timezone: string
}

export interface PageRow {
  path: string
  visitors: number
}

export interface ReferrerRow {
  host: string
  visitors: number
}

export interface UmamiChannelRow {
  channel: string
  visitors: number
}

export interface UtmRow {
  value: string
  views: number
}

export interface EventRow {
  name: string
  current: number
  previous: number
}

export interface ContactsByChannelRow {
  channel: Channel
  contacts: number
}

export interface WebInsights {
  domain: InsightsDomain
  period: PeriodSummary
  previousPeriod: Pick<PeriodSummary, 'from' | 'to'>
  totals: {
    visitors: MetricComparison
    pageviews: MetricComparison
    visits: MetricComparison
    avgVisitSeconds: MetricComparison
    bounceRatePct: MetricComparison
  }
  topPages: PageRow[]
  topReferrers: ReferrerRow[]
  umamiChannels: UmamiChannelRow[]
  campaigns: Record<UmamiUtmType, UtmRow[]>
  events: EventRow[]
  contactsByChannel: ContactsByChannelRow[]
  generatedAt: string
  source: InsightsSource
}
```

- [ ] **Step 2: Write the failing test**

`src/lib/insights/buildWebInsights.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { AnalyticsEvent, Channel } from '@/constants/analytics'
import { InsightsDomain, InsightsPeriod, InsightsSource, MAX_UTM_VALUE_LENGTH, TOP_ROWS, UmamiMetricType, UmamiUtmType } from '@/constants/insights'
import type { UmamiEventValue, UmamiMetric, UmamiReader, UmamiStats, UmamiUtmMetric } from '@/services/umami'

import { buildWebInsights } from './buildWebInsights'
import type { DateRange, ReportingPeriods } from './periods'

const CURRENT: DateRange = { startAt: 2_000, endAt: 3_000, from: '2026-09-21', to: '2026-09-27' }
const PREVIOUS: DateRange = { startAt: 1_000, endAt: 2_000, from: '2026-09-14', to: '2026-09-20' }
const PERIODS: ReportingPeriods = { kind: InsightsPeriod.WEEK, timezone: 'Europe/Amsterdam', current: CURRENT, previous: PREVIOUS }
const NOW = new Date('2026-09-28T06:00:12Z')

interface FakeData {
  stats: Record<number, UmamiStats>
  metrics: Partial<Record<UmamiMetricType, Record<number, UmamiMetric[]>>>
  utm: Partial<Record<UmamiUtmType, UmamiUtmMetric[]>>
  eventValues: Record<string, UmamiEventValue[]>
}

function fakeReader(data: FakeData): UmamiReader {
  return {
    getStats: async (range) => data.stats[range.startAt] ?? { pageviews: 0, visitors: 0, visits: 0, bounces: 0, totaltime: 0 },
    getMetrics: async (range, type, limit) => (data.metrics[type]?.[range.startAt] ?? []).slice(0, limit),
    getUtmMetrics: async (_range, type) => data.utm[type] ?? [],
    getEventPropertyValues: async (_range, eventName) => data.eventValues[eventName] ?? [],
  }
}

const BASE: FakeData = {
  stats: {
    [CURRENT.startAt]: { pageviews: 2310, visitors: 812, visits: 903, bounces: 372, totaltime: 86_688 },
    [PREVIOUS.startAt]: { pageviews: 2105, visitors: 740, visits: 811, bounces: 357, totaltime: 71_368 },
  },
  metrics: {
    [UmamiMetricType.PATH]: { [CURRENT.startAt]: Array.from({ length: 15 }, (_, i) => ({ x: `/p${i}`, y: 100 - i })) },
    [UmamiMetricType.REFERRER]: { [CURRENT.startAt]: [{ x: 'instagram.com', y: 120 }] },
    [UmamiMetricType.CHANNEL]: { [CURRENT.startAt]: [{ x: 'organicSocial', y: 130 }, { x: 'llm', y: 9 }] },
    [UmamiMetricType.EVENT]: {
      [CURRENT.startAt]: [{ x: AnalyticsEvent.CONTACT_FORM_SUBMITTED, y: 7 }, { x: AnalyticsEvent.CALCULATOR_LOADED, y: 40 }],
      [PREVIOUS.startAt]: [{ x: AnalyticsEvent.CONTACT_FORM_SUBMITTED, y: 4 }],
    },
  },
  utm: {
    [UmamiUtmType.CAMPAIGN]: [{ utm: 'autumn-retreat', views: 44 }, { utm: 'x'.repeat(300), views: 1 }],
    [UmamiUtmType.SOURCE]: [{ utm: 'instagram', views: 60 }],
    [UmamiUtmType.MEDIUM]: [],
  },
  eventValues: {
    [AnalyticsEvent.CONTACT_FORM_SUBMITTED]: [{ value: Channel.INSTAGRAM_PAID, total: 3 }, { value: Channel.DIRECT, total: 4 }],
    [AnalyticsEvent.WHATSAPP_BOOKING_CLICKED]: [{ value: Channel.INSTAGRAM_PAID, total: 2 }, { value: '<script>', total: 1 }],
  },
}

describe('buildWebInsights', () => {
  it('computes totals with one-decimal percentage changes', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.totals.visitors).toEqual({ current: 812, previous: 740, changePct: 9.7 })
    expect(insights.totals.visits).toEqual({ current: 903, previous: 811, changePct: 11.3 })
    expect(insights.totals.avgVisitSeconds).toEqual({ current: 96, previous: 88, changePct: 9.1 })
    expect(insights.totals.bounceRatePct).toEqual({ current: 41.2, previous: 44, changePct: -6.4 })
  })

  it('returns null change when the previous value is zero and zero rates when there are no visits', async () => {
    const empty: FakeData = { ...BASE, stats: { [CURRENT.startAt]: BASE.stats[CURRENT.startAt]!, [PREVIOUS.startAt]: { pageviews: 0, visitors: 0, visits: 0, bounces: 0, totaltime: 0 } } }
    const insights = await buildWebInsights(fakeReader(empty), PERIODS, NOW)
    expect(insights.totals.visitors.changePct).toBeNull()
    expect(insights.totals.avgVisitSeconds.previous).toBe(0)
    expect(insights.totals.bounceRatePct.previous).toBe(0)
  })

  it('caps top rows, passes Umami channels through, and truncates UTM values', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.topPages).toHaveLength(TOP_ROWS)
    expect(insights.topPages[0]).toEqual({ path: '/p0', visitors: 100 })
    expect(insights.topReferrers).toEqual([{ host: 'instagram.com', visitors: 120 }])
    expect(insights.umamiChannels).toEqual([{ channel: 'organicSocial', visitors: 130 }, { channel: 'llm', visitors: 9 }])
    expect(insights.campaigns[UmamiUtmType.CAMPAIGN][1]?.value).toHaveLength(MAX_UTM_VALUE_LENGTH)
    expect(insights.campaigns[UmamiUtmType.MEDIUM]).toEqual([])
  })

  it('pairs event counts for both periods', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.events).toEqual([
      { name: AnalyticsEvent.CONTACT_FORM_SUBMITTED, current: 7, previous: 4 },
      { name: AnalyticsEvent.CALCULATOR_LOADED, current: 40, previous: 0 },
    ])
  })

  it('sums contacts per channel over all contact events and folds unknown values', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.contactsByChannel).toEqual([
      { channel: Channel.INSTAGRAM_PAID, contacts: 5 },
      { channel: Channel.DIRECT, contacts: 4 },
      { channel: Channel.UNKNOWN, contacts: 1 },
    ])
  })

  it('fills the envelope', async () => {
    const insights = await buildWebInsights(fakeReader(BASE), PERIODS, NOW)
    expect(insights.domain).toBe(InsightsDomain.WEB)
    expect(insights.source).toBe(InsightsSource.UMAMI)
    expect(insights.period).toEqual({ kind: InsightsPeriod.WEEK, from: '2026-09-21', to: '2026-09-27', timezone: 'Europe/Amsterdam' })
    expect(insights.previousPeriod).toEqual({ from: '2026-09-14', to: '2026-09-20' })
    expect(insights.generatedAt).toBe('2026-09-28T06:00:12.000Z')
  })
})
```

- [ ] **Step 3: Run to verify it fails**

Run: `pnpm vitest run src/lib/insights/buildWebInsights.test.ts`
Expected: FAIL, cannot resolve `./buildWebInsights`.

- [ ] **Step 4: Implement `src/lib/insights/buildWebInsights.ts`**

```ts
import { ATTRIBUTION_CHANNEL_KEY, Channel } from '@/constants/analytics'
import {
  CONTACT_EVENTS,
  InsightsDomain,
  InsightsSource,
  MAX_UTM_VALUE_LENGTH,
  TOP_ROWS,
  UmamiMetricType,
  UmamiUtmType,
} from '@/constants/insights'
import type { UmamiMetric, UmamiReader, UmamiStats, UmamiUtmMetric } from '@/services/umami'
import type { ContactsByChannelRow, EventRow, MetricComparison, UtmRow, WebInsights } from '@/types/insights'

import type { ReportingPeriods } from './periods'

const PERCENT = 100
const ONE_DECIMAL = 10

function round1(value: number): number {
  return Math.round(value * ONE_DECIMAL) / ONE_DECIMAL
}

function compare(current: number, previous: number): MetricComparison {
  return {
    current,
    previous,
    changePct: previous === 0 ? null : round1(((current - previous) / previous) * PERCENT),
  }
}

function avgVisitSeconds(stats: UmamiStats): number {
  return stats.visits === 0 ? 0 : Math.round(stats.totaltime / stats.visits)
}

function bounceRatePct(stats: UmamiStats): number {
  return stats.visits === 0 ? 0 : round1((stats.bounces / stats.visits) * PERCENT)
}

function toUtmRows(rows: UmamiUtmMetric[]): UtmRow[] {
  return rows.slice(0, TOP_ROWS).map((row) => ({ value: row.utm.slice(0, MAX_UTM_VALUE_LENGTH), views: row.views }))
}

function pairEvents(current: UmamiMetric[], previous: UmamiMetric[]): EventRow[] {
  const previousByName = new Map(previous.map((row) => [row.x, row.y]))
  return current.map((row) => ({ name: row.x, current: row.y, previous: previousByName.get(row.x) ?? 0 }))
}

function isChannel(value: string): value is Channel {
  return (Object.values(Channel) as string[]).includes(value)
}

function sumContactsByChannel(valueLists: { value: string; total: number }[][]): ContactsByChannelRow[] {
  const totals = new Map<Channel, number>()
  for (const list of valueLists) {
    for (const row of list) {
      const channel = isChannel(row.value) ? row.value : Channel.UNKNOWN
      totals.set(channel, (totals.get(channel) ?? 0) + row.total)
    }
  }
  return [...totals.entries()].map(([channel, contacts]) => ({ channel, contacts }))
}

/**
 * Turns Umami's raw answers for a period and its predecessor into the digest
 * contract. Pure: every number comes from the reader, `now` stamps the output.
 */
export async function buildWebInsights(reader: UmamiReader, periods: ReportingPeriods, now: Date): Promise<WebInsights> {
  const { current, previous } = periods
  const [
    currentStats,
    previousStats,
    paths,
    referrers,
    channels,
    currentEvents,
    previousEvents,
    utmCampaign,
    utmSource,
    utmMedium,
    contactValues,
  ] = await Promise.all([
    reader.getStats(current),
    reader.getStats(previous),
    reader.getMetrics(current, UmamiMetricType.PATH, TOP_ROWS),
    reader.getMetrics(current, UmamiMetricType.REFERRER, TOP_ROWS),
    reader.getMetrics(current, UmamiMetricType.CHANNEL, TOP_ROWS),
    reader.getMetrics(current, UmamiMetricType.EVENT, TOP_ROWS),
    reader.getMetrics(previous, UmamiMetricType.EVENT, TOP_ROWS),
    reader.getUtmMetrics(current, UmamiUtmType.CAMPAIGN),
    reader.getUtmMetrics(current, UmamiUtmType.SOURCE),
    reader.getUtmMetrics(current, UmamiUtmType.MEDIUM),
    Promise.all(CONTACT_EVENTS.map((event) => reader.getEventPropertyValues(current, event, ATTRIBUTION_CHANNEL_KEY))),
  ])

  return {
    domain: InsightsDomain.WEB,
    period: { kind: periods.kind, from: current.from, to: current.to, timezone: periods.timezone },
    previousPeriod: { from: previous.from, to: previous.to },
    totals: {
      visitors: compare(currentStats.visitors, previousStats.visitors),
      pageviews: compare(currentStats.pageviews, previousStats.pageviews),
      visits: compare(currentStats.visits, previousStats.visits),
      avgVisitSeconds: compare(avgVisitSeconds(currentStats), avgVisitSeconds(previousStats)),
      bounceRatePct: compare(bounceRatePct(currentStats), bounceRatePct(previousStats)),
    },
    topPages: paths.slice(0, TOP_ROWS).map((row) => ({ path: row.x, visitors: row.y })),
    topReferrers: referrers.slice(0, TOP_ROWS).map((row) => ({ host: row.x, visitors: row.y })),
    umamiChannels: channels.map((row) => ({ channel: row.x, visitors: row.y })),
    campaigns: {
      [UmamiUtmType.CAMPAIGN]: toUtmRows(utmCampaign),
      [UmamiUtmType.SOURCE]: toUtmRows(utmSource),
      [UmamiUtmType.MEDIUM]: toUtmRows(utmMedium),
    },
    events: pairEvents(currentEvents, previousEvents),
    contactsByChannel: sumContactsByChannel(contactValues),
    generatedAt: now.toISOString(),
    source: InsightsSource.UMAMI,
  }
}
```

Note: the event metric asks Umami for `TOP_ROWS` events; the site has 10 event names, so nothing is cut. If more events are added later, raise the limit in one place.

- [ ] **Step 5: Run tests, type-check, lint**

Run: `pnpm vitest run src/lib/insights/buildWebInsights.test.ts && pnpm exec tsc --noEmit && pnpm exec eslint src/lib/insights src/types/insights.ts`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/lib/insights/buildWebInsights.ts src/lib/insights/buildWebInsights.test.ts src/types/insights.ts src/types/index.ts
git commit -m "feat(insights): build the weekly and monthly web summary from Umami data"
```

---

### Task 7: The route handler

**Files:**
- Create: `src/app/api/insights/web/route.ts`
- Create: `src/lib/insights/auth.ts` (bearer comparison, pure)
- Test: `src/lib/insights/auth.test.ts`, `src/app/api/insights/web/route.test.ts`

**Interfaces:**
- Consumes: `resolvePeriods` (Task 4), `createUmamiClient` + `UmamiError` (Task 5), `buildWebInsights` (Task 6), `RateLimiter` from `@/lib/security`, constants (Task 1).
- Produces: `GET(request: Request): Promise<Response>`; `isAuthorized(header: string | null, secret: string): boolean`.

- [ ] **Step 1: Write the failing auth test**

`src/lib/insights/auth.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { isAuthorized } from './auth'

describe('isAuthorized', () => {
  it('accepts the exact bearer secret', () => {
    expect(isAuthorized('Bearer s3cret', 's3cret')).toBe(true)
  })
  it.each([
    ['missing header', null],
    ['wrong scheme', 'Basic s3cret'],
    ['wrong secret of the same length', 'Bearer s3cREt'],
    ['different length', 'Bearer s3cret-longer'],
    ['empty bearer', 'Bearer '],
  ])('rejects %s', (_label, header) => {
    expect(isAuthorized(header, 's3cret')).toBe(false)
  })
  it('never accepts an empty configured secret', () => {
    expect(isAuthorized('Bearer ', '')).toBe(false)
  })
})
```

- [ ] **Step 2: Implement `src/lib/insights/auth.ts`**

```ts
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
```

Run: `pnpm vitest run src/lib/insights/auth.test.ts` → PASS.

- [ ] **Step 3: Write the failing route test**

`src/app/api/insights/web/route.test.ts`:

```ts
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { InsightsErrorCode, INSIGHTS_RATE_LIMIT } from '@/constants/insights'
import { UmamiError } from '@/services/umami'

const buildWebInsights = vi.fn()
vi.mock('@/lib/insights/buildWebInsights', () => ({ buildWebInsights: (...args: unknown[]) => buildWebInsights(...args) }))

const SECRET = 'digest-secret'
const URL_WEEK = 'https://themakersbarn.nl/api/insights/web?period=week'

function request(url: string, authorization?: string): Request {
  return new Request(url, { headers: authorization ? { authorization } : {} })
}

async function loadRoute() {
  return import('./route')
}

describe('GET /api/insights/web', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.stubEnv('INSIGHTS_API_SECRET', SECRET)
    vi.stubEnv('UMAMI_URL', 'http://umami.test')
    vi.stubEnv('UMAMI_API_KEY', 'umami_key')
    vi.stubEnv('NEXT_PUBLIC_UMAMI_WEBSITE_ID', 'w1')
    buildWebInsights.mockReset()
    buildWebInsights.mockResolvedValue({ domain: 'web', totals: {} })
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('answers 503 when the server secret is missing', async () => {
    vi.stubEnv('INSIGHTS_API_SECRET', '')
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(response.status).toBe(503)
    expect(await response.json()).toEqual({ error: InsightsErrorCode.NOT_CONFIGURED })
    expect(response.headers.get('cache-control')).toBe('private, no-store')
  })

  it.each([undefined, 'Bearer nope', 'Bearer digest-secret-longer'])('answers 401 for authorization %s', async (auth) => {
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, auth))
    expect(response.status).toBe(401)
    expect(response.headers.get('cache-control')).toBe('private, no-store')
  })

  it('answers 400 for a missing or unknown period', async () => {
    const { GET } = await loadRoute()
    expect((await GET(request('https://themakersbarn.nl/api/insights/web', `Bearer ${SECRET}`))).status).toBe(400)
    expect((await GET(request('https://themakersbarn.nl/api/insights/web?period=year', `Bearer ${SECRET}`))).status).toBe(400)
  })

  it('answers 200 with the built insights and no-store', async () => {
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(response.status).toBe(200)
    expect(response.headers.get('cache-control')).toBe('private, no-store')
    expect(await response.json()).toEqual({ domain: 'web', totals: {} })
    expect(buildWebInsights).toHaveBeenCalledTimes(1)
  })

  it('rate-limits only authenticated calls', async () => {
    const { GET } = await loadRoute()
    for (let i = 0; i < INSIGHTS_RATE_LIMIT.maxRequests; i += 1) {
      await GET(request(URL_WEEK, 'Bearer wrong'))
    }
    expect((await GET(request(URL_WEEK, `Bearer ${SECRET}`))).status).toBe(200)
    for (let i = 1; i < INSIGHTS_RATE_LIMIT.maxRequests; i += 1) {
      await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    }
    const limited = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(limited.status).toBe(429)
    expect(await limited.json()).toEqual({ error: InsightsErrorCode.RATE_LIMITED })
  })

  it('answers 502 when Umami fails', async () => {
    buildWebInsights.mockRejectedValue(new UmamiError('down', 500))
    const { GET } = await loadRoute()
    const response = await GET(request(URL_WEEK, `Bearer ${SECRET}`))
    expect(response.status).toBe(502)
    expect(await response.json()).toEqual({ error: InsightsErrorCode.UPSTREAM })
  })

  it('answers 504 when the build exceeds the budget', async () => {
    vi.useFakeTimers()
    buildWebInsights.mockImplementation(() => new Promise(() => undefined))
    const { GET } = await loadRoute()
    const pending = GET(request(URL_WEEK, `Bearer ${SECRET}`))
    await vi.advanceTimersByTimeAsync(31_000)
    const response = await pending
    expect(response.status).toBe(504)
    vi.useRealTimers()
  })
})
```

- [ ] **Step 4: Implement `src/app/api/insights/web/route.ts`**

```ts
import {
  INSIGHTS_RATE_LIMIT,
  INSIGHTS_RATE_LIMIT_KEY,
  INSIGHTS_TIMEOUT_MS,
  InsightsErrorCode,
  InsightsPeriod,
} from '@/constants/insights'
import { createLogger, RateLimiter } from '@/lib'
import { isAuthorized } from '@/lib/insights/auth'
import { buildWebInsights } from '@/lib/insights/buildWebInsights'
import { resolvePeriods } from '@/lib/insights/periods'
import { createUmamiClient, UmamiError } from '@/services/umami'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const logger = createLogger('insights-web')
const rateLimiter = new RateLimiter(INSIGHTS_RATE_LIMIT)

const NO_STORE = 'private, no-store'
const PERIOD_PARAM = 'period'

enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  TOO_MANY_REQUESTS = 429,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

function json(body: unknown, status: HttpStatus): Response {
  return Response.json(body, { status, headers: { 'cache-control': NO_STORE } })
}

function errorResponse(code: InsightsErrorCode, status: HttpStatus): Response {
  return json({ error: code }, status)
}

function isPeriod(value: string | null): value is InsightsPeriod {
  return value !== null && (Object.values(InsightsPeriod) as string[]).includes(value)
}

class BuildTimeoutError extends Error {}

function withBudget<T>(work: Promise<T>, budgetMs: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new BuildTimeoutError('insights build exceeded its budget')), budgetMs)
    work.then(resolve, reject).finally(() => clearTimeout(timer))
  })
}

export async function GET(request: Request): Promise<Response> {
  const secret = process.env.INSIGHTS_API_SECRET ?? ''
  if (secret === '') {
    logger.error('INSIGHTS_API_SECRET is not set')
    return errorResponse(InsightsErrorCode.NOT_CONFIGURED, HttpStatus.SERVICE_UNAVAILABLE)
  }
  if (!isAuthorized(request.headers.get('authorization'), secret)) {
    return errorResponse(InsightsErrorCode.UNAUTHORIZED, HttpStatus.UNAUTHORIZED)
  }
  if (!rateLimiter.isAllowed(INSIGHTS_RATE_LIMIT_KEY)) {
    return errorResponse(InsightsErrorCode.RATE_LIMITED, HttpStatus.TOO_MANY_REQUESTS)
  }
  const period = new URL(request.url).searchParams.get(PERIOD_PARAM)
  if (!isPeriod(period)) {
    return errorResponse(InsightsErrorCode.BAD_PERIOD, HttpStatus.BAD_REQUEST)
  }

  const now = new Date()
  const reader = createUmamiClient({
    baseUrl: process.env.UMAMI_URL ?? '',
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? '',
    apiKey: process.env.UMAMI_API_KEY ?? '',
  })

  try {
    const insights = await withBudget(buildWebInsights(reader, resolvePeriods(period, now), now), INSIGHTS_TIMEOUT_MS)
    return json(insights, HttpStatus.OK)
  } catch (error) {
    if (error instanceof BuildTimeoutError) {
      logger.warn('insights build timed out', { period })
      return errorResponse(InsightsErrorCode.TIMEOUT, HttpStatus.GATEWAY_TIMEOUT)
    }
    if (error instanceof UmamiError) {
      logger.error('umami request failed', { period, status: error.status }, error)
      return errorResponse(InsightsErrorCode.UPSTREAM, HttpStatus.BAD_GATEWAY)
    }
    throw error
  }
}
```

Check `createLogger`'s `error` signature in `src/lib/logger.ts` (message, context, error) and match it. `Response.json` exists on Node 18+ and in the Next.js runtime.

- [ ] **Step 5: Run tests, type-check, lint, build**

Run: `pnpm vitest run src/lib/insights src/app/api && pnpm exec tsc --noEmit && pnpm exec eslint src/app/api src/lib/insights && pnpm build`
Expected: PASS; the build lists `ƒ /api/insights/web`.

- [ ] **Step 6: Commit**

```bash
git add src/app/api/insights/web/route.ts src/app/api/insights/web/route.test.ts src/lib/insights/auth.ts src/lib/insights/auth.test.ts
git commit -m "feat(insights): bearer-protected /api/insights/web endpoint"
```

---

### Task 8: Full-suite gate and docs

**Files:**
- Modify: `CLAUDE.md` (Environment Variables section: add the four new variables with one line each; add a short "Analytics" bullet under Key Patterns naming `src/lib/analytics.ts`, `src/lib/attribution.ts`, the `/stats` proxy and `/api/insights/web`).

- [ ] **Step 1: Run the whole suite**

Run: `pnpm test && pnpm exec tsc --noEmit && pnpm lint && pnpm build`
Expected: all green.

- [ ] **Step 2: Update CLAUDE.md as above and commit**

```bash
git add CLAUDE.md
git commit -m "docs: document Umami analytics and the insights endpoint"
```

---

### Task 9 (session-driven, not a coding task): Umami setup, deploy, browser validation

Done by the run session against the live services, not by a coding subagent:

1. Wait for `https://umami-production-3a02.up.railway.app/api/heartbeat` to answer 200.
2. Log in as admin through `POST /api/auth/login`, change the admin password (`POST /api/users/{id}` or dashboard), create the website (`POST /api/websites` with `name`, `domain`), create team + reader user, log in as reader, create API key (`POST /api/me/api-keys` or the 3.4 equivalent; verify path in the running instance's `/api` responses). Record ids on the run ledger. Never print secrets.
3. Set `NEXT_PUBLIC_UMAMI_WEBSITE_ID`, `UMAMI_URL=http://umami.railway.internal:3000`, `UMAMI_API_KEY`, `INSIGHTS_API_SECRET` on the site service. Deploy the branch with `railway up --service makersbarn-website`.
4. Browser check with Claude in Chrome: open `https://themakersbarn.nl/nl?utm_source=instagram&utm_medium=paid-social&utm_campaign=qa`, confirm `/stats/script.js` is 200 and `/stats/api/send` returns 200 in the network log; click a WhatsApp CTA or submit the question form; confirm in Umami realtime that the event carries `attribution_channel=instagram_paid` and `attribution_campaign=qa`.
5. `curl` the endpoint for `week` and `month` with the secret; confirm 200 JSON and 401 without.
6. Write the QA brief on the run ledger, merge the branch to `main`, push, redeploy.
