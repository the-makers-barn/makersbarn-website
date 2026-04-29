# Retreat Launch Calendar — Design Spec

**Status:** Approved (brainstorming + reviewer pass) — ready for implementation planning
**Date:** 2026-04-28
**Owner:** Benny Vaksendiser
**Routes:** Four self-canonical URLs — `/tools/{3,6,9,12}-month-retreat-launch-calendar`

> Revision history: This is rev 2. Rev 1 used a single canonical URL with `?m=N` UI state.
> Rev 2 follows multi-reviewer feedback (Next.js, security, pSEO, system architecture)
> and pivots to four self-canonical URLs to avoid canonical/metadata conflicts and
> capture the distinct search intents behind each time horizon.

---

## 1. Goal & Strategic Context

Add a new tool family to the `/tools` hub: an interactive **Retreat Launch Calendar** that helps prospective retreat hosts plan the work involved in launching a retreat across a phased timeline. The tool is part of the site's pSEO (programmatic SEO) and multi-landing-page strategy: it joins the five existing pricing-calculator variants in attracting search traffic from retreat hosts, capturing leads via email, and driving toward the `/host-a-retreat` conversion path.

The page is generic across niches for v1 (no per-niche fan-out — that is a v2 expansion path mirroring the existing pricing-calculator niche fan-out). Within v1 itself, four time-horizon variants ship as four self-canonical URLs so each captures the distinct search intent behind its horizon (urgency-driven "3-month plan" vs. comprehensive "12-month plan").

The tool supplements the existing **Retreat Profitability Calculator** ecosystem and shares its lead-capture infrastructure (Postmark email, Slack admin notifications, rate limiting), with security hardening on top per the security review.

### Success criteria

- Indexable as four distinct landing pages capturing 4× the keyword surface for retreat-launch search intents
- Functional dynamic personalization (check off, dismiss, add custom items) that survives across preset URLs (localStorage key is global)
- Email-the-list lead capture mirroring the calculator's existing Postmark + Slack pipeline, with the security improvements specified in §7
- Pairs with the calculator pages via internal linking from each silo and from `/host-a-retreat`

---

## 2. Locked Decisions

| # | Decision |
|---|---|
| 1 | One generic page-family in v1 — no per-niche fan-out; niche fan-out deferred to v2 |
| 2 | Four self-canonical URLs: `/tools/{3,6,9,12}-month-retreat-launch-calendar` |
| 3 | Each URL is its own indexable page; no shared canonical; no `?m=N` query state |
| 4 | Layout: vertical stepper with month-range rail (lower number on the left, e.g. "9–12 months before") |
| 5 | Six phases (canonical 12-month): Foundation → Anchor → Launch & sell → Lock-in → Final weeks → Post-retreat |
| 6 | Interactive milestones: ✓ done (checkbox); soft-dismiss (strike-through, click to revert) |
| 7 | Custom items per phase: max 20 per phase, max 120 chars each, max 120 total across all phases |
| 8 | State persistence: localStorage on the client, key `mb_retreat_launch_calendar_v1`, shared across the four URLs |
| 9 | Email-the-list flow: server action following the `emailCalculatorSummary` pattern, with security hardening per §7 |
| 10 | i18n: EN, NL, DE proper translations; ES, FR copy EN strings verbatim (per CLAUDE.md updated policy) |
| 11 | Preset content strategy: Approach C — one canonical 12-month set + per-preset overrides via discriminated-union per-phase modifications |
| 12 | All on-page copy reflects the URL's preset (server-rendered, no client metadata mutation) |
| 13 | `ToolPageShell` real refactor — accepts injected `hero/howToSteps/guideSections/faq/related` props instead of indexing variant maps |
| 14 | No external links on the page (keep traffic on-site) |
| 15 | Calculator and calendar are sibling tools — no forced ordering. A subtle "First time? Validate profitability with the Profitability Calculator first" pointer in the calendar's hero only |
| 16 | Inline contextual CTA to `/host-a-retreat` within Phase 2 (Anchor — when users are venue-shopping) and Phase 6 (Post-retreat — planning the next one) |
| 17 | Drop newsletter framing entirely — replace with explicit contact consent: "MakersBarn may contact me about retreat hosting at this venue" |
| 18 | Custom-item URLs allowed (http/https) but rendered as plain text everywhere (no anchor tags) — see §7 and §9 |

### Deferred to v2 (explicitly out of scope)

- Per-niche fan-out (yoga / wellness / meditation / coaching launch calendars)
- `.ics` calendar export
- Recurring email reminders / drip sequence
- Cross-device sync / user accounts
- Shareable personalized URLs (with full state encoded)
- Side-by-side preset comparison view
- Real newsletter list-provider integration (when shipped, will be a separate opt-in distinct from contact consent)
- Partial Prerendering (PPR) — pages are static via `generateStaticParams`-style routing already; PPR would only help if dynamic personalization moved server-side

---

## 3. URL Structure & Architecture

### 3.1 Routes

Four routes, each a separate folder under `app/[locale]/tools/`, each statically indexable, each self-canonical:

```
src/app/[locale]/tools/
├── 3-month-retreat-launch-calendar/page.tsx
├── 6-month-retreat-launch-calendar/page.tsx
├── 9-month-retreat-launch-calendar/page.tsx
└── 12-month-retreat-launch-calendar/page.tsx
```

Each `page.tsx` is a thin (~30-line) server component that:
1. Awaits `params: Promise<{ locale: string }>` (Next 15 async-params API)
2. Resolves the preset content via `resolvePhases(content, preset)` server-side
3. Composes metadata via `generateMetadata` from preset-aware copy
4. Renders the shared `RetreatLaunchCalendarPage` shell with the resolved phase data

Route enum additions (`types/navigation.ts`):

```ts
export enum Route {
  // ... existing
  THREE_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/3-month-retreat-launch-calendar',
  SIX_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/6-month-retreat-launch-calendar',
  NINE_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/9-month-retreat-launch-calendar',
  TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR = '/tools/12-month-retreat-launch-calendar',
}
```

A `CALENDAR_ROUTE_BY_PRESET: Record<TimelinePreset, Route>` constant keeps the URL ↔ preset mapping centralized.

### 3.2 File layout

```
src/
├── app/[locale]/tools/{3,6,9,12}-month-retreat-launch-calendar/
│   ├── page.tsx                                # server component; ~30 lines each
│   └── opengraph-image.tsx                     # OG image; one per URL (preset-aware)
│
├── components/
│   ├── client/RetreatLaunchCalendar/
│   │   ├── RetreatLaunchCalendar.tsx           # 'use client' — root, owns state
│   │   ├── RetreatLaunchCalendar.module.css
│   │   ├── PresetSwitcher.tsx                  # 4 anchor links to sibling URLs
│   │   ├── PhaseCard.tsx                       # one phase row (rail + content card)
│   │   ├── MilestoneItem.tsx                   # checkbox + soft-dismiss + revert
│   │   ├── CustomItemInput.tsx                 # "+ Add a milestone" inline input + counter
│   │   ├── CustomItemRow.tsx                   # rendered custom item (plain-text URL handling)
│   │   ├── EmailPlanForm.tsx                   # email-the-list form
│   │   ├── InlinePhaseCta.tsx                  # contextual "Host at MakersBarn" CTA card (Phase 2, Phase 6)
│   │   ├── useCalendarState.ts                 # useReducer + localStorage persistence + hasHydrated
│   │   └── index.ts                            # barrel export
│   │
│   └── server/
│       ├── ToolPageShell/                      # refactored — accepts injected content props (see §3.4)
│       └── RetreatLaunchCalendarPage/          # NEW — composition wrapper specific to the calendar
│           ├── RetreatLaunchCalendarPage.tsx   # server; assembles ToolPageShell + RetreatLaunchCalendar
│           └── index.ts
│
├── data/tools/
│   ├── calendarContent.ts                      # canonical 12-month content + per-preset overrides
│   ├── calendarMilestoneIds.ts                 # `as const` lookup of all canonical milestone IDs
│   └── index.ts                                # update barrel export
│
├── actions/tools/
│   ├── emailCalendarPlan.ts                    # server action with security hardening per §7
│   └── index.ts                                # update barrel export
│
├── lib/tools/
│   ├── calendar/
│   │   ├── presets.ts                          # pure: resolvePhases(content, preset)
│   │   ├── state.ts                            # pure: reducer, migrateState, default-state factory
│   │   ├── email/
│   │   │   ├── compose.ts                      # public composeEmailHtml — orchestration only, ≤50 lines
│   │   │   ├── renderPhaseSection.ts
│   │   │   ├── renderMilestoneRow.ts
│   │   │   ├── renderCustomItem.ts
│   │   │   └── renderEmailShell.ts
│   │   └── index.ts                            # barrel
│   └── index.ts
│
├── lib/security.ts                             # ADD sanitizePlainText helper (see §7.4)
│
├── types/tools.ts                              # extend with calendar types (§4)
├── constants/tools.ts                          # extend with calendar enums + ranges + storage key
├── i18n/dictionaries/{en,nl,de,es,fr}.ts       # add tools.calendar.* keys
└── data/tools/calendarSchemas.ts               # SHARED Zod schemas (client + server)
```

### 3.3 Server vs client split

- **Server**: `page.tsx`, the new `RetreatLaunchCalendarPage` server composer, refactored `ToolPageShell` (and all its sections), structured data, OG image
- **Client**: `RetreatLaunchCalendar` and its children only (preset switcher, phase rows, milestone items, custom-item input, email form, inline CTAs)

The server reads the URL preset from the route folder (no `searchParams` needed) and passes the resolved phase list and the validated `preset: TimelinePreset` as props to the calendar root. First paint is correct, no hydration mismatch on content.

### 3.4 `ToolPageShell` real refactor (B6 fix)

The existing `ToolPageShell` directly imports `CALCULATOR_VARIANTS` and `CALCULATOR_CONTENT` and indexes by `ToolVariant`. **A slot rename does not make it generic.** It is calculator-coupled.

Refactor: change `ToolPageShell` to accept its content as props rather than looking it up internally.

```ts
export interface ToolPageShellContent {
  hero: { eyebrow: string; title: string; intro: string }
  tool: ReactNode                                // the interactive UI itself
  howToHeading: string
  howToSteps: string[]
  guideSections: Array<{ heading: string; paragraphs: string[] }>
  faqHeading: string
  faqEntries: Array<{ question: string; answer: string }>
  relatedHeading: string
  relatedCards: Array<{ href: string; title: string; isPrimary?: boolean }>
}

export function ToolPageShell(props: ToolPageShellContent) { /* ... */ }
```

Update each of the 5 existing calculator pages to assemble this content from `CALCULATOR_VARIANTS[variant]` + `CALCULATOR_CONTENT[variant]` and pass it in. The lookup logic moves out of the shell into per-page composers. Clean, no variant-coupling left in the shell.

The new `RetreatLaunchCalendarPage` server composer assembles its own content from `data/tools/calendarContent.ts` + `i18n` dictionaries.

### 3.5 Implementation phasing for the shell refactor

Ship the `ToolPageShell` refactor as **its own commit** ahead of the calendar feature work. That keeps the diff trivially reviewable and lets the calculator pages keep working through the calendar's incremental commits.

---

## 4. Data Model

### 4.1 Type additions in `types/tools.ts`

```ts
export enum TimelinePreset {
  THREE_MONTHS = 3,
  SIX_MONTHS = 6,
  NINE_MONTHS = 9,
  TWELVE_MONTHS = 12,
}

export enum CalendarPhaseId {
  FOUNDATION = 'foundation',
  ANCHOR = 'anchor',
  LAUNCH = 'launch',
  LOCK_IN = 'lock-in',
  FINAL_WEEKS = 'final-weeks',
  POST_RETREAT = 'post-retreat',
}

export enum MilestoneStatus {
  PENDING = 'pending',     // default; not stored
  DONE = 'done',
  DISMISSED = 'dismissed',
}

export type MilestoneNonDefaultStatus =
  | MilestoneStatus.DONE
  | MilestoneStatus.DISMISSED

export interface CalendarMilestone {
  id: string                          // stable, e.g. 'p1-vision' — never change without state migration
  text: LocalizedString
}

export interface CalendarPhase {
  id: CalendarPhaseId
  range: LocalizedString              // e.g. "9–12 months before"
  rangeStartMonth: number             // 12 (the larger number — the further-out boundary)
  rangeEndMonth: number               // 9
  eyebrow: LocalizedString            // e.g. "Phase 1 · Foundation"
  title: LocalizedString              // e.g. "Set the vision & secure your venue"
  milestones: CalendarMilestone[]
}

// Discriminated-union override per phase — eliminates incoherent states
export type CalendarPhaseOverride =
  | {
      kind: 'modify'
      // Replace specific fields; milestones array is replaced if provided.
      // Use `extraMilestones` (with explicit insertion) to *add* to the canonical list
      // while preserving original IDs.
      patch: Partial<Omit<CalendarPhase, 'id' | 'milestones'>>
      extraMilestones?: Array<{
        position: 'prepend' | 'append' | { afterId: string }
        milestone: CalendarMilestone
      }>
    }
  | { kind: 'remove' }

export interface CalendarPresetOverride {
  impactSubtitle: LocalizedString     // shown above the calendar; explains the trade-off of this horizon
  phases?: Partial<Record<CalendarPhaseId, CalendarPhaseOverride>>
}

export interface CalendarContent {
  canonical: CalendarPhase[]          // 12-month source of truth
  overrides: Partial<Record<TimelinePreset, CalendarPresetOverride>>
}

export interface CustomMilestone {
  id: string                          // generated server-side (see §7); client-side ID is request-only
  phaseId: CalendarPhaseId
  text: string
  status: MilestoneStatus
}

export interface CalendarState {
  schemaVersion: 1
  itemStates: Record<string, MilestoneNonDefaultStatus>
  customItems: CustomMilestone[]      // flat list, filtered by phaseId in render
}

// Server action input — validated via shared Zod schema (see §4.5)
export interface EmailCalendarPlanInput {
  email: string
  preset: TimelinePreset
  itemStates: Record<string, MilestoneNonDefaultStatus>
  customItems: Array<{
    // Note: NO `id` field — server regenerates IDs for the email. Client may have local IDs but
    // never sends them.
    phaseId: CalendarPhaseId
    text: string
    status: MilestoneNonDefaultStatus
  }>
  contactConsent: boolean             // (was: newsletterOptIn) — see §7.7
}

export interface EmailCalendarPlanResult {
  ok: boolean
  error?: 'rate_limit' | 'invalid_email' | 'validation' | 'send_failed'
}

// Tools-hub support
export enum ToolKind {
  CALCULATOR = 'calculator',
  PLANNER = 'planner',
}

export interface ToolsHubItem {
  kind: ToolKind
  route: Route
  eyebrow: LocalizedString
  title: LocalizedString
  intro: LocalizedString
}
```

**Key change vs rev 1:** the override model is now a discriminated union per phase. A phase is either `modify`'d or `remove`'d, never both. `extraMilestones` lives inside `kind: 'modify'` with explicit insertion position. This eliminates the incoherent-state risk the architecture review flagged and makes authoring intent explicit.

### 4.2 Mandate: ID preservation during merges

When an override merges two canonical phases (e.g. 6-month preset merges Foundation + Anchor into a "Sprint" phase), the merge **MUST** be implemented as:

- `phases[FOUNDATION] = { kind: 'remove' }`
- `phases[ANCHOR] = { kind: 'modify', patch: { title: '...Sprint...', range: '...4–6 months...' }, extraMilestones: [{ position: 'prepend', milestone: { id: 'p1-vision', ... } }, ...] }`

The Foundation milestones reappear inside the modified Anchor phase **with their original IDs preserved**. No synthetic merged IDs (`m6-sprint-vision` etc.) — those would silently break state preservation across preset URLs.

This is non-negotiable; future authors must follow it. Documented inline in `data/tools/calendarContent.ts`.

### 4.3 Constants in `constants/tools.ts`

```ts
export const CALENDAR_STORAGE_KEY = 'mb_retreat_launch_calendar_v1'
export const CALENDAR_DEFAULT_PRESET = TimelinePreset.TWELVE_MONTHS
export const CALENDAR_PRESETS_ORDER: readonly TimelinePreset[] = [
  TimelinePreset.THREE_MONTHS,
  TimelinePreset.SIX_MONTHS,
  TimelinePreset.NINE_MONTHS,
  TimelinePreset.TWELVE_MONTHS,
] as const
export const CALENDAR_CUSTOM_ITEM_LIMITS = {
  MAX_PER_PHASE: 20,
  MAX_TEXT_LENGTH: 120,
  MAX_TOTAL: 120,
} as const

export const CALENDAR_RATE_LIMIT_IP = {
  WINDOW_MS: 60_000,
  MAX_REQUESTS: 5,
  KEY_PREFIX: 'calendar-ip:' as const,
} as const

export const CALENDAR_RATE_LIMIT_EMAIL = {
  WINDOW_MS: 3_600_000,                // 1 hour
  MAX_REQUESTS: 3,
  KEY_PREFIX: 'calendar-email:' as const,
} as const

export const CALENDAR_RATE_LIMIT_GLOBAL = {
  WINDOW_MS: 3_600_000,
  MAX_REQUESTS: 200,
  KEY_PREFIX: 'calendar-global:' as const,
} as const

export const CALENDAR_PAYLOAD_MAX_BYTES = 100_000   // 100KB raw JSON cap; enforced before Zod parse

export const CALENDAR_ROUTE_BY_PRESET: Record<TimelinePreset, Route> = {
  [TimelinePreset.THREE_MONTHS]: Route.THREE_MONTH_RETREAT_LAUNCH_CALENDAR,
  [TimelinePreset.SIX_MONTHS]: Route.SIX_MONTH_RETREAT_LAUNCH_CALENDAR,
  [TimelinePreset.NINE_MONTHS]: Route.NINE_MONTH_RETREAT_LAUNCH_CALENDAR,
  [TimelinePreset.TWELVE_MONTHS]: Route.TWELVE_MONTH_RETREAT_LAUNCH_CALENDAR,
} as const
```

### 4.4 Stable milestone IDs as `as const` lookup

`data/tools/calendarMilestoneIds.ts` exports a flat `as const` object:

```ts
export const CALENDAR_MILESTONE_IDS = {
  P1_VISION: 'p1-vision',
  P1_AVATAR: 'p1-avatar',
  P1_VENUE_SCOUT: 'p1-venue-scout',
  P2_VENUE_CONTRACT: 'p2-venue-contract',
  // ... 50–60 total entries
} as const
```

Used by `calendarContent.ts` (canonical), `extraMilestones` author refs, server-side `KNOWN_MILESTONE_IDS` set for validation, snapshot tests. No string typos.

### 4.5 Shared Zod schema (DRY across client + server)

`data/tools/calendarSchemas.ts` exports a single Zod schema definition reused by:
- The client `useReducer` for input shape narrowing (when needed)
- The server action for validation
- Test fixtures

```ts
import { z } from 'zod'

import { Language } from '@/types/common'

import { CalendarPhaseId, MilestoneStatus, TimelinePreset } from '@/types/tools'
import { CALENDAR_CUSTOM_ITEM_LIMITS } from '@/constants/tools'

export const KNOWN_MILESTONE_IDS = new Set<string>([
  /* populated from CALENDAR_MILESTONE_IDS at module load */
])

const milestoneNonDefaultStatusSchema = z.union([
  z.literal(MilestoneStatus.DONE),
  z.literal(MilestoneStatus.DISMISSED),
])

const milestoneIdSchema = z
  .string()
  .min(1)
  .max(40)                                                                  // tight cap
  .refine((id) => KNOWN_MILESTONE_IDS.has(id), 'Unknown milestone ID')      // allowlist

export const emailCalendarPlanSchema = z.object({
  email: z
    .string()
    .max(254)
    .email()
    .regex(/^[^\r\n\t]+$/, 'Header injection guard'),                       // CR/LF rejection
  preset: z.nativeEnum(TimelinePreset),
  itemStates: z
    .record(milestoneIdSchema, milestoneNonDefaultStatusSchema)
    .refine(
      (states) => Object.keys(states).length <= 200,
      'Too many item states',
    ),
  customItems: z
    .array(
      z.object({
        phaseId: z.nativeEnum(CalendarPhaseId),
        text: z.string().min(1).max(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TEXT_LENGTH),
        status: milestoneNonDefaultStatusSchema,
      }),
    )
    .max(CALENDAR_CUSTOM_ITEM_LIMITS.MAX_TOTAL),
  contactConsent: z.boolean(),
})
```

### 4.6 Pure resolver

```ts
// lib/tools/calendar/presets.ts
export function resolvePhases(
  content: CalendarContent,
  preset: TimelinePreset,
): CalendarPhase[]
```

Applies the preset override to the canonical phase list and returns the resolved set. Pure function, no React, fully unit-testable. **Always called server-side** — clients receive the resolved phases as props.

When the override targets a `kind: 'modify'` phase with `extraMilestones`, the insertion-position semantics are honored exactly: `prepend` puts the milestone at the start of the phase's milestone array, `append` at the end, `{ afterId: 'p1-vision' }` immediately after the milestone with that ID (asserts the target ID exists in the canonical or in already-inserted extras).

---

## 5. State Management

`useCalendarState.ts` is a custom hook wrapping `useReducer` with discriminated-union actions:

```ts
type Action =
  | { type: 'TOGGLE_DONE'; milestoneId: string }
  | { type: 'TOGGLE_DISMISSED'; milestoneId: string }
  | { type: 'ADD_CUSTOM'; phaseId: CalendarPhaseId; text: string }
  | { type: 'EDIT_CUSTOM'; localId: string; text: string }
  | { type: 'REMOVE_CUSTOM'; localId: string }
  | { type: 'TOGGLE_CUSTOM_DONE'; localId: string }
  | { type: 'TOGGLE_CUSTOM_DISMISSED'; localId: string }
  | { type: 'RESET' }
  | { type: 'HYDRATE'; state: CalendarState }
```

Note: there is no `SET_PRESET` action — preset is determined by the URL, not by client state. The preset switcher is a navigation control (anchor links). State (item statuses + custom items) is preserved across the four URLs because the localStorage key is shared.

### 5.1 Persistence

- localStorage write happens in a `useEffect` watching the state, debounced 200ms to avoid thrash on rapid toggles
- Initial state is hydrated from localStorage on mount via the `HYDRATE` action; if parse fails or `schemaVersion` is unrecognized, the hook resets to default
- `useCalendarState` exposes a `hasHydrated` boolean — the UI gates done/dismissed visual badges behind it so users don't see a flash of unchecked state on slow devices (B-list fix from Next.js review)

### 5.2 State migration helper

`lib/tools/calendar/state.ts` exports:

```ts
export function migrateState(raw: unknown): CalendarState | null
```

Single arm for v1 (`case 1: return raw as CalendarState`), but the helper exists so v2 can add migration arms without touching the calendar component. Establishes the migration boundary now, before the schema becomes ossified across thousands of users' localStorage.

If the migration returns `null` (incompatible / unknown version), the hook resets to default. Logged via `lib/logger`.

### 5.3 Reducer cap enforcement

- `ADD_CUSTOM`: no-op if any of (a) phase already has 20 custom items (b) total custom items already at 120
- `EDIT_CUSTOM` / `ADD_CUSTOM`: text passes through `sanitizePlainText` (see §7.4) and is sliced to 120 chars before commit
- UI mirrors these caps with disabled inputs + helper messaging — the reducer is the source of truth, the UI is defensive

### 5.4 Cross-URL state preservation

Because preset is in the URL and state is in localStorage:
- User checks `p1-vision` on `/12-month-...`; navigates to `/6-month-...`; the milestone (which appears in the merged Anchor phase, with its original ID preserved per §4.2) is still checked
- User adds a custom item under FOUNDATION on `/12-month-...`; navigates to `/3-month-...` (which removes FOUNDATION); the custom item is still in storage but not visible because no phase with `id: FOUNDATION` exists in the resolved phase list
- User navigates back to `/12-month-...`; the custom item reappears
- Two browser tabs open on different preset URLs: each reads/writes the same localStorage key; last write wins; no `storage` event sync in v1

### 5.5 React 18 Strict Mode hardening

- `useEffect` for localStorage write: idempotent (writes the current state; double-firing is safe)
- No `document.title` mutation needed — title is server-rendered per URL; client never touches it (cleaner than rev 1)

---

## 6. Page Composition & SEO

### 6.1 Page sections (top → bottom, identical structure across all four URLs)

1. **Hero** (server, via refactored `ToolPageShell`)
   - Eyebrow: "Free planning tool" (static)
   - H1: "The {months}-Month Retreat Launch Calendar" (preset-aware, server-rendered)
   - Intro: 2 sentences mentioning the {months} framing (preset-aware, server-rendered)
   - Subtle pointer line below intro: "First time hosting? Validate your retreat's profitability first → Profitability Calculator." (one line, unobtrusive)
2. **Calendar** (client — `RetreatLaunchCalendar`)
   - Preset switcher (4 anchor links, ARIA tablist semantics, current preset marked `aria-current="page"`)
   - Impact subtitle (only shown when preset ≠ 12)
   - Resolved phase rows
   - Inline contextual CTA card embedded after Phase 2 (Anchor) and after Phase 6 (Post-retreat) — see §6.2
   - "Reset progress" button (with confirmation) at the bottom
3. **Email-the-list form** (client — `EmailPlanForm`)
   - Inline below the calendar
   - Heading: "Email me my {months}-month plan" (preset-aware)
   - Fields: email, contact-consent checkbox (see §7.7), submit
4. **How to use this calendar** (server — `ToolPageShell.howTo`) → `HowTo` schema
5. **FAQ** (server — `ToolPageShell.faq`) → `FAQPage` schema; **10–12 entries** (see §8.6 for Q list)
6. **Related tools** (server — `ToolPageShell.related`)
   - Card 1 (primary, visually dominant): "Host a Retreat at MakersBarn"
   - Card 2 (secondary): "Retreat Profitability Calculator"
7. **Sticky bottom-right CTA** (existing pattern in `ToolPageShell`): "Host your retreat at MakersBarn →" with `?src=tool-{N}-month-retreat-launch-calendar`

### 6.2 Inline contextual CTAs (§16)

`InlinePhaseCta` renders a small embedded card inside specific phases:
- **After Phase 2 (Anchor):** *"Looking for a venue? Check MakersBarn dates →"* — links to `/host-a-retreat?src=tool-calendar-phase-anchor`
- **After Phase 6 (Post-retreat):** *"Planning the next one? MakersBarn dates fill 12 months out →"* — links to `/host-a-retreat?src=tool-calendar-phase-post-retreat`

Two CTAs total — deliberately sparse so they read as helpful, not spammy. Other phases stay tool-focused.

### 6.3 SEO content matrix (now consistent because URL = preset)

Each URL's first paint matches its indexed metadata exactly. No client-side mutation of `<title>` or `<h1>` — the entire page is server-rendered with the URL's preset as the source of truth.

| Element | Per URL | Source |
|---|---|---|
| `<title>` | ✅ unique per URL | Server `generateMetadata` |
| `<meta name="description">` | ✅ unique per URL | Server `generateMetadata` |
| `<h1>` | ✅ unique per URL | Server-rendered |
| Hero intro paragraph | ✅ unique per URL | Server-rendered |
| Impact subtitle | ✅ shown for non-12 URLs | Server-rendered |
| Phase content | ✅ unique per URL via `resolvePhases` | Server-rendered |
| Email form heading | ✅ unique per URL | Server-rendered (form is client but receives heading text as prop) |
| Sent email subject + body | ✅ unique per URL | Server action |
| `<link rel="canonical">` | ✅ each URL is self-canonical | Server |
| Eyebrow | ❌ static across URLs | Server |
| HowTo / FAQ | ❌ same content across URLs | Server (still indexed per-URL — fine for FAQ) |
| Related tools / sticky CTA | ❌ same across URLs | Server |
| OG image | ✅ preset-aware, one per URL | `opengraph-image.tsx` per route |

### 6.4 Structured data per URL

| Schema | Preset-aware | Notes |
|---|---|---|
| `BreadcrumbList` | ✅ trail leaf | Home → Tools → "{months}-Month Retreat Launch Calendar" |
| `WebApplication` | ✅ name + description | Each URL's JSON-LD `name` matches its H1 exactly (no Search Console "structured data does not match page" warnings) |
| `HowTo` | ❌ generic | Same across URLs — generic "how to use this calendar" |
| `FAQPage` | ❌ generic | Same across URLs |

### 6.5 Sitemap

`app/sitemap.ts`: add 4 entries per locale (EN + NL) for the four calendar URLs. Total: 8 new sitemap entries.

### 6.6 Tools hub page (`/tools`) update

Replace the variant-only iteration with an iteration over `TOOLS_HUB_ITEMS: ToolsHubItem[]` (in `data/tools`), driven by `ToolKind` (`CALCULATOR | PLANNER`). The hub item type carries only what the card renders — `route`, `eyebrow`, `title`, `intro` — and never leaks the underlying data shape (variant config vs. calendar config).

Display order: the four calendar URLs first (newest, freshest content), then the five existing calculator variants. Each calendar URL is its own card on the hub.

### 6.7 Internal linking (pSEO leverage)

- `/host-a-retreat`: a "Tools for retreat hosts" block linking to (a) the Profitability Calculator and (b) the **12-month** calendar (the most established / canonical horizon)
- Each silo page (`/yoga-teachers`, `/wellness-detox-retreats`, etc.): existing CTAs to the niche calculator stay; add a new CTA to the 12-month calendar
- Footer: no change

### 6.8 Cross-linking between the four calendar URLs

Each calendar URL has a footer block: *"Less time? Try the [6-month](/) variant. More time? Try the [12-month](/) variant."* — links to siblings. Mutual link structure helps Google understand they're related variants, not duplicates.

### 6.9 `hreflang` / locale alternates

Auto-handled by existing `generatePageMetadata`. With four URLs × two active locales = 8 pages, hreflang annotations grow accordingly — verify in `metadata.ts` that the helper handles this fan-out correctly.

---

## 7. Server Action & Email Flow (security-hardened)

### 7.1 Server action: `actions/tools/emailCalendarPlan.ts`

Follows the same pattern as `emailCalculatorSummary` — same Postmark sender, same Slack hook, same logger pattern — with the security additions below.

### 7.2 Validation pipeline (fail-fast, in order)

1. **Raw payload size guard** — check serialized payload size before Zod parse. If `JSON.stringify(input).length > CALENDAR_PAYLOAD_MAX_BYTES`, reject immediately with `error: 'validation'`. Defense against the "send 50MB JSON" DoS vector.
2. **Zod parse** via the shared `emailCalendarPlanSchema` (§4.5). On failure, distinguish:
   - Email-specific failure (invalid format, header-injection regex, length cap) → `error: 'invalid_email'` (safe to surface — helps real users with typos)
   - Any other failure → `error: 'validation'`
3. **IP rate limit** (`CALENDAR_RATE_LIMIT_IP`: 5/min/IP) via existing `RateLimiter`
4. **Per-email rate limit** (`CALENDAR_RATE_LIMIT_EMAIL`: 3/hour/lowercased-email) via a second `RateLimiter` instance
5. **Global circuit breaker** (`CALENDAR_RATE_LIMIT_GLOBAL`: 200/hour total) via a third `RateLimiter` instance keyed on a constant
6. **Custom-item phaseId-vs-preset cross-check**: drop any `customItems` whose `phaseId` is not present in `resolvePhases(content, preset)`. They remain in the user's localStorage; they just don't appear in the email. Logged at info level with count for observability.
7. **Locale resolution**: read locale from the existing locale cookie/header via `getValidLocale` — **not** from the client payload. (Defense against locale spoofing.)
8. **Sanitize and re-tag custom items**: each custom item's `text` runs through `sanitizePlainText` (see §7.4); each custom item gets a fresh server-generated UUID assigned (client IDs discarded entirely — defense against collision attacks).

If steps 3, 4, or 5 fail, return `error: 'rate_limit'`. If 1, 2, or 6 fail, return the appropriate `validation` / `invalid_email` error. If 7 fails (locale unresolvable), fall back to EN.

Each failure mode is logged via `lib/logger` with category, IP-derived clientId (already privacy-truncated by `getClientIdentifier`), and reason.

### 7.3 Email composition

Two emails sent per submission:

**User-facing email** — "Your {months}-month retreat launch plan"
- Sender: `POSTMARK_SENDER_EMAIL`
- Subject (localized): `tools.calendar.email.subject` template with `{months}` interpolated server-side
- Body: composed by `composeEmailHtml(phases, state, locale)` — see §7.5
- Footer: link back to the source URL (`CALENDAR_ROUTE_BY_PRESET[preset]`) so the user can return to their saved plan + CTA card linking to `/host-a-retreat?src=email-calendar-plan`

**Admin notification email** — `POSTMARK_ADMIN_EMAIL`
- Subject: `"Calendar plan lead · {preset}-month"` — **no email interpolated into subject** (closes the header-injection vector even after Zod sanitizes `\r\n`; defense in depth)
- Body: lead email (escaped via `escapeHtml`), preset, % completion, dismissed count, custom-item count, contact-consent flag, locale

### 7.4 Sanitization helper (B3 fix)

Rev 1 referenced a non-existent `sanitizeUserInput`. Rev 2 introduces a precise helper.

Add to `src/lib/security.ts`:

```ts
export function sanitizePlainText(input: string, maxLength: number): string {
  return input
    .replace(/[\x00-\x1F\x7F]/g, '')                      // strip control chars (incl. CR/LF/TAB)
    .replace(/[​-‍﻿]/g, '')                // strip zero-width chars
    .replace(/[‪-‮⁦-⁩]/g, '')         // strip directional overrides (RTL/LTR overrides)
    .replace(/[<>]/g, '')                                 // strip angle brackets (defense vs. naive HTML)
    .trim()
    .slice(0, maxLength)
}
```

This is the **first** line of defense. The **second** line is `escapeHtml` at every render-time interpolation in `composeEmailHtml`. Strip-then-escape; never trust the strip alone.

URLs in user-typed text are preserved (not blocked) but rendered as plain text in both the calendar UI and the email — see §9.3.

### 7.5 `composeEmailHtml` split (architecture review fix)

Public `composeEmailHtml(phases, state, locale): string` is orchestration only — under 50 lines. The work happens in pure helpers:

```
lib/tools/calendar/email/
├── compose.ts              # public composeEmailHtml — orchestration, ≤ 50 lines
├── renderPhaseSection.ts   # one phase: heading, range, milestone list, custom items
├── renderMilestoneRow.ts   # one milestone: text + status (✓ done | ~~dismissed~~ | pending)
├── renderCustomItem.ts     # one custom item: escapeHtml(sanitizePlainText(text))
└── renderEmailShell.ts     # outer HTML wrapper: header, footer CTA, signoff
```

Every user-string interpolation in these helpers — phase title, milestone text, custom-item text — passes through `escapeHtml` at the moment it enters the HTML string. No exceptions.

### 7.6 Slack notification

- `services/slack.ts` (existing) via `SLACK_WEBHOOK_USER_CONTACTS`
- Suppressed in dev when `SUPPRESS_SLACK_MESSAGES=true`
- Payload: emoji, **`maskEmail(email)` only** (existing helper, already imported in `emailCalculatorSummary.ts`), preset, completion stats, custom-item count
- Full unmasked email is **only** in the admin Postmark email + server logs, not in Slack — Slack workspaces aren't always tightly access-controlled

### 7.7 Contact consent (replaces newsletter opt-in)

The previous "newsletter opt-in" was a no-op (no list provider integration) — GDPR-meaningful for EU traffic.

Rev 2 drops the newsletter framing entirely. Replace with:
- Field name: `contactConsent: boolean`
- Form copy (i18n): *"MakersBarn may contact me about retreat hosting at this venue."*
- This is honest — we DO follow up manually on leads. No promise of recurring email infra that doesn't exist.

When a real newsletter ships in v2 or beyond, it gets a **separate** opt-in distinct from this contact consent.

### 7.8 Rate-limit gates both emails

The rate limiters gate the **entire server action** — including the admin send. A user hitting the IP / per-email / global limit produces zero Postmark calls and zero Slack messages. (Otherwise an attacker could DoS the admin inbox even after the user-facing send is throttled.)

### 7.9 Failure UI handling

| Server result | UI |
|---|---|
| `ok: true` | Inline success: "Sent — check your inbox." |
| `error: 'rate_limit'` | "Too many emails just now — try again in a minute." |
| `error: 'invalid_email'` | "That email looks invalid — please double-check and try again." |
| `error: 'validation'` | "Couldn't send — please try again." |
| `error: 'send_failed'` | "Send failed — please retry." |

Form keeps its filled state on every error.

### 7.10 CSRF posture

Next.js 15 server actions enforce origin/host checks by default. No additional CSRF token needed. Implementation note: verify `next.config.ts` doesn't disable origin checks.

---

## 8. Content Strategy & i18n

### 8.1 Canonical 12-month content (target depth: 50–60 milestones)

Per the pSEO review, rev 1's 30–40 milestones was thin vs. competing checklists at 60–100. Rev 2 targets **50–60 canonical milestones** distributed across 6 phases:

| # | Phase | Range | ~Milestones |
|---|---|---|---|
| 1 | Foundation | 9–12 months before | 9–11 |
| 2 | Anchor | 6–9 months before | 9–11 |
| 3 | Launch & sell | 3–6 months before | 9–11 |
| 4 | Lock-in | 1–3 months before | 9–11 |
| 5 | Final weeks | 0–1 month before | 7–9 |
| 6 | Post-retreat | 1–2 weeks after | 5–7 |

Tone: matter-of-fact, imperative ("Sign venue contract"), no marketing language.

### 8.2 Preset overrides — discriminated-union form

Each non-12 preset's override is an object of form `{ impactSubtitle, phases }` where each phase entry is a `CalendarPhaseOverride` (modify or remove). Hand-written.

**9-month preset**
- Impact subtitle: *"Three months less runway. Foundation work runs in parallel with venue lock-in — workable, but the early-bird launch window tightens."*
- `phases.foundation = { kind: 'modify', patch: { range: 'localized "6–9 months before"' } }`
- `phases.anchor = { kind: 'modify', patch: { range: 'localized "4–6 months before"' } }`
- Other phases ranges shift accordingly via `kind: 'modify'`
- Some Foundation milestones drop (preset-specific — e.g. `p1-extended-research` not realistic in 9 months); kept canonical milestones get their original IDs

**6-month preset**
- Impact subtitle: *"At 6 months you'll need to compress foundation work. Best for facilitators who already have venue chemistry, a warm audience, or a returning cohort."*
- `phases.foundation = { kind: 'remove' }` (Foundation milestones migrate into Anchor)
- `phases.anchor = { kind: 'modify', patch: { title: 'localized "Sprint Foundation & Anchor"', range: 'localized "4–6 months before"' }, extraMilestones: [{ position: 'prepend', milestone: { id: 'p1-vision', text: ... } }, { position: 'prepend', milestone: { id: 'p1-avatar', text: ... } }, ...] }` — original IDs preserved per §4.2
- Phases 3–6 ranges tightened via `kind: 'modify'`
- 5–6 preset-specific accelerated-tactics milestones added across phases via `extraMilestones`

**3-month preset**
- Impact subtitle: *"Tight, but possible. Assumes your venue is already booked and your audience is warm. Smaller intimate cohorts are realistic; large public retreats may not sell out."*
- `phases.foundation = { kind: 'remove' }`
- `phases.anchor = { kind: 'modify', patch: { title: 'localized "Anchor & Launch Sprint"', range: 'localized "2–3 months before"' }, extraMilestones: [...preserved Foundation IDs] }`
- Phases 3–6 ranges sharply compressed
- 8–10 preset-specific late-launch milestones added across phases (e.g. *"Send personal outreach to 30 warm contacts"*, *"Open lower-priced founding-cohort tier"*)

Each preset's `extraMilestones` and modified phase content is real, hand-authored — no proportional scaling of the canonical. The 4 URLs each render meaningfully different content.

### 8.3 `LocalizedString` everywhere

All content strings — canonical milestones, phase titles, ranges, eyebrow, override impact subtitles, preset-specific extra milestones — use `LocalizedString = Record<Language, string>` with all 5 active locale keys (EN, NL, DE, ES, FR) populated.

### 8.4 Translation policy (per CLAUDE.md)

| Locale | Treatment |
|---|---|
| EN | Authored from scratch (source) |
| NL | Proper translation |
| DE | Proper translation |
| ES | Copy EN strings verbatim |
| FR | Copy EN strings verbatim |

### 8.5 Implementation phasing for content authoring

To keep PRs reviewable and avoid type errors blocking partial commits, **all locales are populated from commit 1** — but ES and FR are populated with the EN string as a stand-in (per CLAUDE.md policy). NL and DE proper translations land in subsequent commits.

Order:
1. **Infrastructure + EN canonical content** — all 50–60 milestones in EN, ES + FR populated with EN verbatim, NL + DE populated with EN verbatim as placeholder. **All locales typecheck.**
2. **NL proper translations** — replace EN-verbatim NL strings with real NL.
3. **DE proper translations** — replace EN-verbatim DE strings with real DE.

### 8.6 FAQ at 10–12 entries (pSEO long-tail)

Concrete FAQ candidates to prioritize (final wording in EN dictionary):

1. *"How long does it take to plan a retreat?"*
2. *"How far in advance do retreats sell out?"*
3. *"When should I open registration for a retreat?"*
4. *"How early should I book a retreat venue?"*
5. *"Can I launch a retreat in 3 months?"*
6. *"What's the minimum lead time for an international retreat?"*
7. *"What's a realistic retreat launch timeline for a first-time host?"*
8. *"Is my progress saved across devices?"* (sets expectations: device-only; email yourself for portability)
9. *"Does this work for any retreat type?"*
10. *"What's the most common reason retreats don't sell out?"*
11. *"Should I run the Profitability Calculator before or after the calendar?"*
12. *"How do I share my plan with co-facilitators?"*

The FAQ section is shared across all four URLs (per §6.4) — so each FAQPage schema is identical. That's acceptable: the URLs are clearly related variants and Google handles this via the cross-linking in §6.8.

### 8.7 Dictionary key shape

Same as rev 1, with two changes:
- `emailForm.newsletterOptIn` → `emailForm.contactConsent`, with new copy (§7.7)
- Add `tools.calendar.urlNote: "Links you add will appear as plain text in your saved plan and emails."` (small UX hint surfaced near the custom-item input — see §9.3)

---

## 9. Edge Cases, UX Details & Security Hardening

### 9.1 Hydration safety

- Calendar is `'use client'` but renders on the server with neutral defaults — no localStorage access during SSR
- The URL **is** the source of truth for preset; no `searchParams` and no hydration mismatch risk on content
- localStorage hydration runs in a post-mount `useEffect` that dispatches `HYDRATE`; the `hasHydrated` boolean gates **both** the done/dismissed visual state AND the interactive controls (checkboxes, dismiss buttons, custom-item input, email submit) until hydration completes — prevents a race where a user toggles a milestone before hydration overwrites it from localStorage

### 9.2 No-JS / crawler fallback

- Full canonical content is server-rendered; structured data intact
- Interactive layer (checkboxes, dismiss, custom items, email form) is non-functional but doesn't break the page
- Preset switcher works without JS — anchor links navigate to sibling URLs

### 9.3 URL handling in custom-item text (Q5 answer)

Users may legitimately type URLs as part of a milestone (e.g. *"Sign contract at notion.so/my-doc"*).

Behavior:
- **Accepted as input** — `sanitizePlainText` only strips angle brackets, control chars, zero-width chars, and dir-override chars. URL substrings (slashes, colons, dots, ASCII letters, digits) survive intact.
- **No URL allowlist applied** — defense is in the rendering, not the validation. We don't try to whitelist `http`/`https` schemes because the text is never rendered as a clickable link.
- **Rendered as plain text everywhere** — the calendar UI does not auto-link URLs in custom-item text; the email body does not auto-link them either. There are no `<a href>` elements built around custom-item text. Even if a user types `javascript:alert(1)`, it appears in their plan as plain text and never executes.
- **A small UX hint** appears below the custom-item input: *"Links you add will appear as plain text in your saved plan and emails."* — sets expectations.

This is the secure path: instead of validating URLs (which has known regex pitfalls), we render-as-text universally and reject everything that could escape that posture (angle brackets, control chars).

### 9.4 Edge-case behavior table

| Case | Behavior |
|---|---|
| Corrupt localStorage JSON | Catch parse error, log, reset to default state, continue silently |
| `schemaVersion` from a future version | `migrateState` returns `null`, hook resets to default, log at warn level |
| User adds custom item, hits Enter on empty input | No-op |
| User adds custom item with text exceeding 120 chars | Hard-truncate; show inline counter while typing |
| Phase already at 20 custom items | Add input disabled with cap message |
| Total custom items reaches 120 | All add inputs disabled with banner at top |
| Email form submitted before hydration | Form disabled until `hasHydrated` is true; brief skeleton on submit button |
| Tab closed mid-action | Debounced write may lose the very last toggle — acceptable; persistence is best-effort |
| All milestones in a phase dismissed | Phase still renders with empty state: "All items dismissed in this phase — restore one above" |
| User on `/3-month-...` with stored state for FOUNDATION milestones | State preserved (not deleted); milestones simply absent from this URL's render; reappear on `/12-month-...` |
| Custom items with `phaseId: FOUNDATION` submitted from `/3-month-...` form | Server drops them silently from the email (per §7.2 step 6); they remain in client localStorage |
| Email submitted with zero done/dismissed/custom items | Allowed — sends the canonical resolved plan as-is |
| Two browser tabs open on different preset URLs | Each tab has its own state; last write to localStorage wins. No `storage` event sync in v1 |
| Network failure mid-submit | Server action rejects → form shows generic retry error → state stays editable |
| User clicks preset switcher mid-action with unsaved custom-item input | Anchor link navigation; unsaved input lost. Document in a comment. |

### 9.5 Accessibility

- Preset switcher: `role="tablist"`, each link `role="tab"` and `aria-current="page"` for the active preset
- Milestone checkbox: native `<input type="checkbox">` with associated `<label>`
- Soft-dismiss button: `<button aria-pressed>` so screen readers announce state
- Custom item input: associated `<label>`
- Strike-through dismissed items: `aria-label="Dismissed milestone — click to restore"` so meaning is not conveyed by visual style alone
- Skip-link from the top of the calendar to the email form (keyboard users)
- Color contrast: rail backgrounds against white text meet 4.5:1 in the brand palette

### 9.6 Observability

- Existing `lib/logger` calls in the server action: success, validation rejection (with reason category), invalid-email rejection, rate-limit hit (which bucket), email-or-global limit hit, Postmark failure
- Counter (info-level log) for unknown `itemStates` keys dropped — detects ID drift after deploys
- Counter for custom items dropped due to phaseId-vs-preset mismatch
- IP logging via existing privacy-truncated `getClientIdentifier`

### 9.7 GDPR posture

- EU traffic significant (NL, DE locales)
- Contact-consent checkbox is **honest** about what we do (manual outreach), not promising mailing-list infra that doesn't exist
- All PII (email) stored only in: Postmark mailbox + server logs (privacy-truncated IP, masked email) + admin email body (full email)
- Slack payload uses `maskEmail` per §7.6
- Logging of locale, IP, and user-agent at the existing privacy levels — no expansion vs. calculator

---

## 10. Testing Strategy

### 10.1 Unit tests (Vitest, mirroring existing `urlState.test.ts`)

- **`lib/tools/calendar/presets.ts`:**
  - `resolvePhases` for all 4 presets (4 cases)
  - ID stability — milestones present in multiple presets retain their original ID after override
  - `kind: 'remove'` correctly excludes phases
  - `kind: 'modify'` field-level patching works
  - `extraMilestones` insertion positions: `prepend`, `append`, `{ afterId: '...' }`
  - Override targeting same phase ID with conflicting kinds is unrepresentable in the type system (no test needed; flagged at type-check)
  - Schema sanity: every canonical milestone ID is in `KNOWN_MILESTONE_IDS`

- **`lib/tools/calendar/email/*.ts`:**
  - Snapshot tests for `composeEmailHtml` for each preset × **EN + NL** combination (8 snapshots — these are the most volatile copy locales). For DE / ES / FR, structural assertions only: rendered milestone IDs present, `escapeHtml` applied (no raw `<` characters in output), custom items in correct phase. Translation accuracy itself is verified by translation review, not snapshot diff.
  - `escapeHtml` is applied to every user-string interpolation (lint check via grep test)
  - Done items render checked
  - Dismissed items render struck-through
  - Custom items appear in their phase, plain-text only

- **`useCalendarState` reducer / `lib/tools/calendar/state.ts`:**
  - `TOGGLE_DONE` toggles correctly between PENDING and DONE
  - `TOGGLE_DISMISSED` toggles correctly between PENDING and DISMISSED
  - `ADD_CUSTOM` enforces per-phase cap (20)
  - `ADD_CUSTOM` enforces total cap (120)
  - `ADD_CUSTOM` text passes through `sanitizePlainText` and is sliced to 120
  - `REMOVE_CUSTOM` removes by local ID
  - `RESET` clears all state but preserves schema defaults
  - `HYDRATE` from corrupt state falls back to default
  - `migrateState` v1 happy path returns the input unchanged
  - `migrateState` unknown-version returns null

- **`lib/security.ts` `sanitizePlainText`:**
  - Strips `<` and `>`
  - Strips control chars (`\x00`–`\x1F`, `\x7F`)
  - Strips zero-width chars
  - Strips RTL/LTR overrides
  - Preserves URL substrings (the test should include `https://example.com/path?q=1`)
  - Caps length at `maxLength`
  - Trims whitespace

### 10.2 Server action integration tests

- `emailCalendarPlan` happy path (Postmark mocked, payload shape asserted)
- IP rate-limit hit returns `error: 'rate_limit'`
- Per-email rate-limit hit returns `error: 'rate_limit'`
- Global circuit breaker hit returns `error: 'rate_limit'`
- Payload size guard rejects >100KB raw JSON before Zod parses
- Email validation: `error: 'invalid_email'` for malformed email, header-injection chars (CR/LF/TAB), >254 char length
- Other validation: `error: 'validation'` for unknown milestone IDs (over-cap), invalid preset, oversized custom-item arrays
- Custom-item phaseId-vs-preset mismatch: items are dropped silently, success returned
- Server-regenerates custom-item IDs (assert client-supplied IDs are not present in email body)
- Locale resolved server-side (assert spoofed locale in payload is ignored)
- Slack payload uses `maskEmail`

### 10.3 Component smoke tests (minimal)

- Render `RetreatLaunchCalendar` for each of the 4 presets, assert correct phases visible
- Click a milestone checkbox, assert it persists across re-render
- Type a custom item with `<script>alert(1)</script>`, assert it renders sanitized in the DOM and the email-render path produces no `<script>` tag

### 10.4 No E2E for v1

Calculator pages don't have E2E either. Manual QA gate: 4 URLs × EN/NL/DE locales × happy-path + email-the-list + cross-URL state preservation.

---

## 11. Performance

- Calendar component bundle: modest, no new heavy deps. `useReducer` is built-in. `sanitize-html`-style stripping is in-house (`sanitizePlainText`).
- Server action payload: capped at 100KB raw + Zod's `.max()` constraints inside the schema. Well under any platform limit.
- The calendar's `module.css` should stay focused; reuse `ToolPageShell.module.css` chrome.
- All 4 URLs are statically renderable (no `searchParams` dependency). Vercel will edge-cache them well.
- PPR considered and deferred — there's no client-data-bound server work that would benefit from streaming.

---

## 12. Implementation Phasing Hint (for the planning step)

Implementation plan should consider this rough phasing for reviewable PRs:

1. **`ToolPageShell` refactor** — content-source-agnostic shell + update 5 calculator pages to pass content props. Ship before any calendar work. No behavior change visible to users.
2. **Calendar scaffolding & types** — route enums, types, constants, Zod schemas, milestone-IDs lookup, empty content file, dictionary key stubs (EN with all locales mirrored), `lib/security.ts` `sanitizePlainText` helper
3. **Pure logic** — `resolvePhases`, `migrateState`, reducer, `useCalendarState`, email-helpers, all unit-tested
4. **UI components** — `RetreatLaunchCalendar`, `PresetSwitcher` (anchor links), `PhaseCard`, `MilestoneItem`, `CustomItemInput`, `CustomItemRow`, `EmailPlanForm`, `InlinePhaseCta`
5. **Page wiring** — 4 `page.tsx` files, metadata, structured data, OG images, sitemap, hub-page integration, internal linking from `/host-a-retreat` + silo pages, cross-linking footer between calendar URLs
6. **Server action** — `emailCalendarPlan` with all validation layers per §7
7. **Canonical EN content** — populate `calendarContent.ts` with full canonical 12-month content + 3 overrides + impact subtitles (50–60 milestones total)
8. **NL proper translations** — populate dictionaries + content
9. **DE proper translations** — populate dictionaries + content

The exact PR boundaries live in the implementation plan; this is just a phasing hint.

---

## Appendix A — Reviewer-finding traceability

For audit purposes — every blocker and worth-addressing item from the four-reviewer pass is mapped to the spec section that resolves it.

| Reviewer finding | Resolved in |
|---|---|
| B1 — Canonical/metadata mismatch | §3.1 (4 self-canonical URLs); §6.3 (consistent matrix) |
| B2 — `searchParams` Promise in Next 15 | §3.1 (no `searchParams` needed; `params` awaited per Next 15) |
| B3 — `sanitizeUserInput` doesn't exist | §7.4 (defines `sanitizePlainText`) |
| B4 — Email header injection | §4.5 Zod regex; §7.3 admin subject removes email |
| B5 — Email body XSS | §7.5 (escapeHtml at every interpolation, mandate inline) |
| B6 — `ToolPageShell` not generic | §3.4 (real refactor, content via props) |
| B7 — Override incoherent states | §4.1 (discriminated union per phase) |
| Per-email rate limit | §4.3 (`CALENDAR_RATE_LIMIT_EMAIL`); §7.2 step 4 |
| Global circuit breaker | §4.3 (`CALENDAR_RATE_LIMIT_GLOBAL`); §7.2 step 5 |
| Payload size guard | §4.3 (`CALENDAR_PAYLOAD_MAX_BYTES`); §7.2 step 1 |
| `itemStates` validated against known set | §4.5 (`KNOWN_MILESTONE_IDS` allowlist) |
| Custom-item UUIDs server-generated | §4.1 (input has no `id`); §7.2 step 8 |
| Newsletter no-op → contact consent | §7.7; §2 #17 |
| Slack `maskEmail` | §7.6 |
| Locale server-sourced | §7.2 step 7 |
| `error: 'invalid_email'` separate | §4.1 result enum; §7.9 UI table |
| Merged-phase ID preservation | §4.2 (mandate); §8.2 (each override demonstrates) |
| `migrateState` helper now | §5.2 |
| `composeEmailHtml` split | §7.5 |
| Shared Zod schema | §4.5 |
| `ToolKind.CALCULATOR \| PLANNER` | §4.1 (ToolKind enum); §6.6 |
| Content depth 50–60 | §8.1 |
| Inline phase CTAs | §6.2; §2 #16 |
| Related-cards hierarchy | §6.1 #6 |
| FAQ 10–12 entries | §8.6 |
| `hasHydrated` boolean | §5.1 |
| React Strict Mode safety | §5.5 (no `document.title` mutation) |
| PPR deferred explicitly | §2 deferred list |
| Phasing typecheck (all locales populated commit 1) | §8.5 |
| URL handling Q5 | §9.3 |
| Calculator/calendar siblings Q2 | §6.1 #1 (subtle pointer); §6.1 #6 (Related cards) |
