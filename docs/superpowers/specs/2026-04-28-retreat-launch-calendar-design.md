# Retreat Launch Calendar — Design Spec

**Status:** Approved (brainstorming phase) — ready for implementation planning
**Date:** 2026-04-28
**Owner:** Benny Vaksendiser
**Route:** `/tools/retreat-launch-calendar`

---

## 1. Goal & Strategic Context

Add a new tool to the `/tools` hub: an interactive **12-Month Retreat Launch Calendar** that helps prospective retreat hosts plan the work involved in launching a retreat across a phased timeline. The tool is part of the site's pSEO (programmatic SEO) and multi-landing-page strategy: it joins the five existing pricing-calculator variants in attracting search traffic from retreat hosts, capturing leads via email, and driving toward the `/host-a-retreat` conversion path.

The page is intentionally generic (no per-niche fan-out for v1) — niche variants (yoga, wellness, meditation, coaching launch calendars) are a v2 expansion path that mirrors the existing pricing-calculator fan-out.

The tool supplements the existing **Retreat Profitability Calculator** ecosystem and shares its lead-capture infrastructure (Postmark email, Slack admin notifications, rate limiting).

### Success criteria

- Indexable as the canonical 12-month retreat launch calendar / planning timeline keyword space
- Functional dynamic personalization (check off, dismiss, add custom items) that survives across preset switches
- Email-the-list lead capture mirroring the calculator's existing flow (Postmark + Slack + rate limit)
- Pairs with the calculator pages via internal linking from each silo and from `/host-a-retreat`

---

## 2. Locked Decisions (from brainstorming)

| # | Decision |
|---|---|
| 1 | One generic page in v1 — no per-niche fan-out |
| 2 | Time-horizon presets: **3 / 6 / 9 / 12 months**, default 12, indexed canonical |
| 3 | URL state: `?m=N` for share-back; canonical link points to bare URL |
| 4 | Layout: vertical stepper with month-range rail (lower number on the left, e.g. "9–12 months before") |
| 5 | Six phases: Foundation → Anchor → Launch & sell → Lock-in → Final weeks → Post-retreat |
| 6 | Interactive milestones: ✓ done (checkbox); soft-dismiss (strike-through, click to revert) |
| 7 | Custom items per phase: max 20 per phase, max 120 chars each, max 120 total across all phases |
| 8 | State persistence: localStorage on the client, key `mb_retreat_launch_calendar_v1` |
| 9 | Email-the-list flow: server action mirroring `emailCalculatorSummary` (Postmark + Slack admin notification, rate-limited) |
| 10 | i18n: EN, NL, DE proper translations; ES, FR copy EN strings verbatim (per CLAUDE.md updated policy) |
| 11 | Preset content strategy: **Approach C** — one canonical 12-month set + per-preset overrides (impact subtitle + targeted phase/milestone changes) |
| 12 | All adaptive copy (H1, hero intro, impact subtitle, phase content, email form heading, sent-email subject) reflects the selected preset; eyebrow / HowTo / FAQ / Related / sticky CTA / OG image stay static |
| 13 | Reuse existing `ToolPageShell` (rename `calculator` slot → `tool`), do not fork a separate shell |
| 14 | No external links on the page (keep traffic on-site) |

### Deferred to v2 (explicitly out of scope)

- Per-niche fan-out (yoga / wellness / meditation / coaching launch calendars)
- Time-horizon-as-separate-pages (e.g. `/tools/3-month-retreat-launch-calendar`)
- `.ics` calendar export
- Recurring email reminders / drip sequence
- Cross-device sync / user accounts
- Shareable personalized URLs (with full state encoded)
- Side-by-side preset comparison view

---

## 3. Architecture & File Layout

```
src/
├── app/[locale]/tools/retreat-launch-calendar/
│   ├── page.tsx                                # server component — metadata, structured data, ToolPageShell
│   └── opengraph-image.tsx                     # OG image (single, preset-agnostic)
│
├── components/
│   ├── client/RetreatLaunchCalendar/
│   │   ├── RetreatLaunchCalendar.tsx           # 'use client' — root, owns state
│   │   ├── RetreatLaunchCalendar.module.css
│   │   ├── PresetSwitcher.tsx                  # tab list, 4 tabs
│   │   ├── PhaseCard.tsx                       # one phase row (rail + content card)
│   │   ├── MilestoneItem.tsx                   # checkbox + soft-dismiss + revert
│   │   ├── CustomItemInput.tsx                 # "+ Add a milestone" inline input + counter
│   │   ├── EmailPlanForm.tsx                   # email-the-list form
│   │   ├── useCalendarState.ts                 # useReducer + localStorage persistence
│   │   └── index.ts                            # barrel export
│   │
│   └── server/ToolPageShell/                   # existing — slot rename: calculator → tool
│
├── data/tools/
│   ├── calendarContent.ts                      # canonical 12-month content + per-preset overrides
│   └── index.ts                                # update barrel export
│
├── actions/tools/
│   ├── emailCalendarPlan.ts                    # server action mirroring emailCalculatorSummary
│   └── index.ts                                # update barrel export
│
├── lib/tools/
│   ├── calendarPresets.ts                      # pure: applyPresetOverrides(canonical, preset) → resolved phases
│   ├── calendarEmail.ts                        # pure: composeEmailHtml(phases, state, locale) → string
│   └── index.ts                                # update barrel export
│
├── types/tools.ts                              # extend with calendar types
├── constants/tools.ts                          # extend with calendar enums + ranges + storage key
└── i18n/dictionaries/{en,nl,de,es,fr}.ts       # add tools.calendar.* keys
```

### Server vs client split

- **Server**: `page.tsx`, `ToolPageShell` and all its sections (hero, HowTo, FAQ, Related, sticky CTA), structured data
- **Client**: `RetreatLaunchCalendar` and its children only (preset switcher, phase rows, milestone items, custom-item input, email form)

The server reads `?m=N` from `searchParams` and passes the validated initial preset as a prop to the calendar root. This makes shared `?m=6` links render the correct content on first paint (no hydration flash).

### One existing-file refactor

Rename the `calculator: ReactNode` prop on `ToolPageShell` to `tool: ReactNode`. Update its four current callers (the four calculator variant pages). Trivial 1-line touch each. Justified because the shell is generic and the new tool is not a calculator.

---

## 4. Data Model

All content uses `LocalizedString = Record<Language, string>` so every authored string carries entries for EN, NL, DE, ES, FR (per the i18n policy in §8).

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

export interface CalendarPresetOverride {
  impactSubtitle: LocalizedString     // shown above the calendar for non-default presets
  phases?: Partial<Record<CalendarPhaseId, Partial<CalendarPhase>>>
  removedPhaseIds?: CalendarPhaseId[]
  extraMilestones?: Partial<Record<CalendarPhaseId, CalendarMilestone[]>>
}

export interface CalendarContent {
  canonical: CalendarPhase[]          // 12-month source of truth
  overrides: Partial<Record<TimelinePreset, CalendarPresetOverride>>
}

export interface CustomMilestone {
  id: string                          // crypto.randomUUID()
  phaseId: CalendarPhaseId
  text: string
  status: MilestoneStatus
}

export interface CalendarState {
  schemaVersion: 1
  preset: TimelinePreset
  itemStates: Record<string, MilestoneStatus.DONE | MilestoneStatus.DISMISSED>
  customItems: CustomMilestone[]
}

export interface EmailCalendarPlanInput {
  email: string
  preset: TimelinePreset
  itemStates: Record<string, MilestoneStatus.DONE | MilestoneStatus.DISMISSED>
  customItems: Array<{
    phaseId: CalendarPhaseId
    text: string
    status: MilestoneStatus.DONE | MilestoneStatus.DISMISSED
  }>
  newsletterOptIn: boolean
  locale: Language
}

export interface EmailCalendarPlanResult {
  ok: boolean
  error?: 'rate_limit' | 'validation' | 'send_failed'
}
```

### 4.2 Constants in `constants/tools.ts`

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
export const CALENDAR_URL_PARAM_PRESET = 'm' as const
export const CALENDAR_RATE_LIMIT = {
  WINDOW_MS: 60_000,
  MAX_REQUESTS: 5,
  KEY_PREFIX: 'calendar:' as const,    // separate bucket from calculator
} as const
```

Stable milestone IDs are defined inline in `data/tools/calendarContent.ts` and follow the convention `p<phaseNumber>-<short-slug>` for canonical milestones (e.g. `p1-vision`, `p2-venue-contract`) and `m<presetMonths>-<short-slug>` for preset-specific milestones (e.g. `m6-sprint-foundation-anchor`). Once shipped, IDs become a state migration concern — they cannot change without a schemaVersion bump.

### 4.3 Pure resolver

```ts
// lib/tools/calendarPresets.ts
export function resolvePhases(
  content: CalendarContent,
  preset: TimelinePreset,
): CalendarPhase[]
```

Applies the preset override to the canonical phase list and returns the resolved set. Pure function, no React, fully unit-testable.

### 4.4 Pure email composer

```ts
// lib/tools/calendarEmail.ts
export function composeEmailHtml(input: {
  phases: CalendarPhase[]    // already resolved for the chosen preset
  state: CalendarState
  locale: Language
}): string
```

Returns the HTML body for the user-facing email. Tested via snapshot tests across preset × locale combinations.

---

## 5. State Management

`useCalendarState.ts` is a custom hook wrapping `useReducer` with discriminated-union actions:

```ts
type Action =
  | { type: 'SET_PRESET'; preset: TimelinePreset }
  | { type: 'TOGGLE_DONE'; milestoneId: string }
  | { type: 'TOGGLE_DISMISSED'; milestoneId: string }
  | { type: 'ADD_CUSTOM'; phaseId: CalendarPhaseId; text: string }
  | { type: 'EDIT_CUSTOM'; id: string; text: string }
  | { type: 'REMOVE_CUSTOM'; id: string }
  | { type: 'TOGGLE_CUSTOM_DONE'; id: string }
  | { type: 'TOGGLE_CUSTOM_DISMISSED'; id: string }
  | { type: 'RESET' }
  | { type: 'HYDRATE'; state: CalendarState }
```

### Persistence

- localStorage write happens in a `useEffect` watching the state, debounced 200ms to avoid thrash on rapid toggles
- Initial state is hydrated from localStorage on mount via the `HYDRATE` action; if parse fails or `schemaVersion` is unrecognized, the hook resets to default
- The `?m=N` URL param, if present and valid, overrides the persisted preset on initial load — this is what makes shared `?m=6` links work

### Cap enforcement (in the reducer)

- `ADD_CUSTOM`: no-op if any of (a) phase already has 20 custom items (b) total custom items already at 120
- `EDIT_CUSTOM` / `ADD_CUSTOM`: text is trimmed, HTML-stripped via `lib/security` helpers, sliced to 120 chars before commit
- UI mirrors these caps with disabled inputs + helper messaging — the reducer is the source of truth, the UI is defensive

### Cross-preset state preservation

- `SET_PRESET` only changes `state.preset` — `itemStates` and `customItems` are untouched
- Milestones with stable IDs that exist in both presets retain their done/dismissed status across the switch
- Preset-specific milestones (e.g. `m6-sprint-foundation-anchor`) keep their state in the map even when not visible — when the user returns to that preset, the state re-renders correctly
- Custom items keyed by `phaseId` stay in storage; they only render in presets where their phase is present (3-month preset removes FOUNDATION, so custom items added there reappear when the user switches back to a longer preset)

---

## 6. Page Composition & SEO

### 6.1 Page sections (top → bottom)

1. **Hero** (server, via `ToolPageShell`)
   - Eyebrow: "Free planning tool" (static)
   - H1: "The {months}-Month Retreat Launch Calendar" (preset-aware via `searchParams`)
   - Intro paragraph: 2 sentences mentioning the {months} framing (preset-aware)
2. **Calendar** (client — `RetreatLaunchCalendar`)
   - Preset switcher (4 tabs, ARIA tablist)
   - Impact subtitle (only shown when preset ≠ 12)
   - Resolved phase rows
   - "Reset progress" button (with confirmation) at the bottom
3. **Email-the-list form** (client — `EmailPlanForm`)
   - Inline below the calendar (not sticky)
   - Heading reflects current preset: "Email me my {months}-month plan"
   - Fields: email, newsletter opt-in checkbox, submit
4. **How to use this calendar** (server — `ToolPageShell.howTo`) → `HowTo` schema
5. **FAQ** (server — `ToolPageShell.faq`) → `FAQPage` schema
   - Includes an entry covering "Is my progress saved across devices?" → answer sets expectation that it is device-only and points to the email-the-list flow as the portability path
6. **Related tools** (server — `ToolPageShell.related`)
   - Card 1: Retreat Profitability Calculator
   - Card 2: Host a Retreat at MakersBarn
7. **Sticky bottom-right CTA** (existing, in `ToolPageShell`)
   - "Host your retreat at MakersBarn →" with `?src=tool-retreat-launch-calendar`

### 6.2 Adaptive vs static content matrix

| Element | Adapts to preset? | Source |
|---|---|---|
| `<title>` | ✅ | Server `generateMetadata` reads `searchParams.m` |
| `<meta name="description">` | ✅ | Server `generateMetadata` |
| `<h1>` | ✅ | Server initial render + client re-render |
| Hero intro paragraph | ✅ | Server initial render + client re-render |
| Impact subtitle | ✅ | Client (only non-default presets) |
| Phase content (ranges, titles, milestones) | ✅ | Client via `resolvePhases(content, preset)` |
| Email form heading + button | ✅ | Client |
| Sent email subject + body | ✅ | Server action |
| Eyebrow | ❌ | Server, static |
| HowTo / FAQ / Related / sticky CTA | ❌ | Server, static |
| OG image | ❌ | Single preset-agnostic image |
| `<link rel="canonical">` | ❌ | Always points to `/tools/retreat-launch-calendar` (no query) |

### 6.3 Structured data (JSON-LD via `StructuredData` component)

| Schema | Preset-aware? | Notes |
|---|---|---|
| `BreadcrumbList` | ❌ | Home → Tools → Retreat Launch Calendar |
| `WebApplication` | ✅ name + description | applicationCategory `BusinessApplication`, free offer |
| `HowTo` | ❌ | Generic "how to use this calendar" steps from the static section |
| `FAQPage` | ❌ | Generic Q/A entries from the static FAQ section |

All schemas are generated server-side. Only `WebApplication` varies with the preset (the `name` field reflects the H1 string for the requested preset). The other schemas are identical across `?m=N` variants — fine because canonical dedupes them anyway.

### 6.4 Routes & sitemap

- New route enum: `Route.RETREAT_LAUNCH_CALENDAR = '/tools/retreat-launch-calendar'`
- `app/sitemap.ts`: add EN and NL entries (matches existing `/tools/*` pattern)
- `getLocalizedPath` automatically handles the new route once added to the enum

### 6.5 Tools hub page (`/tools`) update

The existing hub page (`app/[locale]/tools/page.tsx`) renders cards from `CALCULATOR_VARIANTS`. It needs to grow to support non-calculator tools. Cleanest minimal approach:

- Introduce `TOOLS_HUB_ITEMS: ToolsHubItem[]` in `data/tools` — a list including both calculator variants and the new calendar
- `ToolsHubItem = { kind: 'calculator-variant' | 'tool'; route, title, intro, eyebrow }` (shape compatible with how the existing variant cards render)
- Hub page renders from this list; existing cards keep working unchanged
- Display order: calendar first (newest, freshest content), then the existing 5 calculator variants

### 6.6 Internal linking (pSEO leverage)

- `/host-a-retreat`: add a small "Tools for retreat hosts" block linking to both the calculator (Profitability) and the calendar
- Each silo page (`/yoga-teachers`, `/wellness-detox-retreats`, `/meditation-retreats`, `/coaching-intensives`, `/circle-retreats`, `/somatic-therapy-retreats`, etc.): the existing CTAs to the niche calculator should sit alongside a new CTA to the calendar
- Footer: no change

---

## 7. Server Action & Email Flow

### 7.1 Server action: `actions/tools/emailCalendarPlan.ts`

Follows the same pattern as `emailCalculatorSummary` — same Postmark sender, same Slack hook, same rate-limit helper, same admin-notification flow. Differs in payload shape (calendar state vs calculator inputs/results) and uses a separate rate-limit bucket (`KEY_PREFIX: 'calendar:'`).

### 7.2 Validation pipeline (fail-fast, in order)

1. `checkRateLimit(headers, prefix='calendar:')` — separate bucket from calculator
2. Email validation via existing helper
3. Preset enum check
4. `itemStates` keys validated against `^p\d+-[a-z0-9-]+$` or `^m\d+-[a-z0-9-]+$` or known custom-item UUID format; unknown keys dropped silently
5. `customItems`:
   - Max 120 total
   - Each `text`: trim → HTML-strip via `lib/security` → cap at 120 chars
   - Each `phaseId`: enum check
   - Each `status`: enum check
6. Locale check (must be in active locale set)

Generic error responses (`rate_limit | validation | send_failed`); never leak which validator failed.

### 7.3 Email composition

Two emails sent per submission:

**User-facing email** — "Your {months}-month retreat launch plan"
- Sender: `POSTMARK_SENDER_EMAIL`
- Subject (localized): preset-aware. Composed in the server action by interpolating `{months}` into the locale's `tools.calendar.email.subject` template
- Body: composed by `composeEmailHtml(phases, state, locale)` — phases with done items checked, dismissed items struck-through, custom items appended in their phase
- Footer: link back to `/tools/retreat-launch-calendar?m=N` to return to the saved plan + CTA card linking to `/host-a-retreat?src=email-calendar-plan`

**Admin notification email** — `POSTMARK_ADMIN_EMAIL`
- Subject: "Calendar plan lead: {email} · {preset}-month"
- Body: lead email, preset, % completion, dismissed count, custom-item count, newsletter opt-in flag, locale
- Same admin inbox as the calculator's lead notifications

### 7.4 Slack notification

- `services/slack.ts` (existing) via `SLACK_WEBHOOK_USER_CONTACTS`
- Suppressed in dev when `SUPPRESS_SLACK_MESSAGES=true`
- Payload: emoji, lead email, preset, completion stats, custom-item count

### 7.5 Newsletter opt-in

- If true, route to whatever destination the calculator currently routes opt-ins to (no new infra introduced — match existing exact behavior)

### 7.6 Failure UI handling

| Server result | UI |
|---|---|
| `ok: true` | Inline success: "Sent — check your inbox." |
| `error: 'rate_limit'` | "Too many emails just now — try again in a minute." |
| `error: 'validation'` | "Couldn't send — please check your email and try again." |
| `error: 'send_failed'` | "Send failed — please retry." |

Form keeps its filled state on every error, so retry is one click.

---

## 8. Content Strategy & i18n

### 8.1 Canonical 12-month content

| # | Phase | Range | Approximate milestone count |
|---|---|---|---|
| 1 | Foundation | 9–12 months before | 4–6 |
| 2 | Anchor | 6–9 months before | 5–7 |
| 3 | Launch & sell | 3–6 months before | 5–7 |
| 4 | Lock-in | 1–3 months before | 5–7 |
| 5 | Final weeks | 0–1 month before | 5–7 |
| 6 | Post-retreat | 1–2 weeks after | 4–5 |

Total: ~30–40 milestones. Tone: matter-of-fact, imperative ("Sign venue contract"), no marketing language.

### 8.2 Preset overrides (hand-written)

**9-month preset**
- Impact subtitle: *"Three months less runway. Foundation work runs in parallel with venue lock-in — workable, but the early-bird launch window tightens."*
- Phase 1 range relabel to "6–9 months before"; Phase 2 range relabel to "4–6 months before"
- Otherwise canonical

**6-month preset**
- Impact subtitle: *"At 6 months you'll need to compress foundation work. Best for facilitators who already have venue chemistry, a warm audience, or a returning cohort."*
- Phase 1 + Phase 2 merge into a "Sprint" phase with a relabeled "4–6 months before" range, containing the must-haves from both
- Phases 3–6 with tightened ranges

**3-month preset**
- Impact subtitle: *"Tight, but possible. Assumes your venue is already booked and your audience is warm. Smaller intimate cohorts are realistic; large public retreats may not sell out."*
- `removedPhaseIds: [FOUNDATION]` — drops Foundation as a standalone phase
- Phase 2 → relabeled "Anchor & launch sprint" (2–3 months before), absorbs critical Foundation must-haves
- Phases 3–6 with compressed ranges

### 8.3 Translation policy (per CLAUDE.md)

| Locale | Treatment |
|---|---|
| EN | Authored from scratch (source) |
| NL | Proper translation |
| DE | Proper translation |
| ES | Copy EN strings verbatim |
| FR | Copy EN strings verbatim |

Applies uniformly to:
- `data/tools/calendarContent.ts` (canonical phases + override content)
- `i18n/dictionaries/{en,nl,de,es,fr}.ts` (UI chrome strings)
- Postmark email subject + body strings (per recipient locale)

### 8.4 Dictionary key shape (additions to existing `tools.*` namespace)

```ts
tools: {
  // existing keys preserved
  calendar: {
    metaTitle: '...',                 // accepts {months} interpolation
    metaDescription: '...',           // accepts {months}
    heroEyebrow: 'Free planning tool',
    heroTitle: 'The {months}-Month Retreat Launch Calendar',
    heroIntro: '...',                 // accepts {months}
    presetSwitcher: {
      label: 'Choose your runway',
      preset3: '3 months', preset6: '6 months',
      preset9: '9 months', preset12: '12 months',
    },
    milestoneItem: {
      markDone: 'Mark done',
      markPending: 'Mark pending',
      dismiss: 'Dismiss',
      restore: 'Restore',
    },
    customItem: {
      addLabel: 'Add a milestone',
      placeholder: 'What else needs to happen?',
      remove: 'Remove',
      capReached: 'Maximum reached for this phase',
      totalCapReached: 'You\'ve reached the total custom-item limit',
    },
    reset: {
      button: 'Reset progress',
      confirm: 'Clear all your progress on this calendar?',
    },
    emailForm: {
      heading: 'Email me my {months}-month plan',
      placeholder: 'your@email.com',
      newsletterOptIn: 'Send me practical retreat-host tips occasionally',
      submit: 'Email my plan',
      sending: 'Sending…',
      success: 'Sent — check your inbox.',
      errorRateLimit: 'Too many emails just now — try again in a minute.',
      errorGeneric: "Couldn't send — please check your email and try again.",
      errorSendFailed: 'Send failed — please retry.',
    },
    email: {
      // Strings used to compose the outbound email (subject + body chrome)
      subject: 'Your {months}-month retreat launch plan',
      preheader: '...',                          // accepts {months}
      bodyIntro: '...',                          // accepts {months}
      doneLabel: 'Done',
      dismissedLabel: 'Dismissed',
      customLabel: 'Custom',
      backToPlanCta: 'Open your saved plan',
      hostARetreatCta: 'Host your retreat at MakersBarn',
      footer: '...',
    },
    howTo: { heading: '...', steps: [...] },
    faq: { heading: '...', entries: [...] },
    related: {
      heading: '...',
      profitabilityCalculator: '...',
      hostARetreat: '...',
    },
  },
}
```

### 8.5 Implementation phasing for content authoring

To keep PRs reviewable, content lands in three commits:

1. **EN-only canonical + working calendar end-to-end** — all infrastructure shipped, only EN strings populated
2. **NL + DE proper translations** — populate the dictionaries and content data
3. **ES + FR stub copies** — copy EN strings into ES and FR to satisfy the `Dictionary` type

Each commit ships a working app (no broken types between commits).

---

## 9. Edge Cases & Security

### 9.1 Hydration & SSR safety

- Calendar is `'use client'` but renders on the server with neutral defaults — no localStorage access during SSR
- Initial preset comes from `searchParams.m`, validated server-side, passed as a prop → matches first paint, no hydration mismatch
- localStorage hydration runs in a post-mount `useEffect`; the moment between server render (all pending) and client hydration (done/dismissed merged in) is acceptable

### 9.2 No-JS / crawler fallback

- Full canonical content visible without JS; structured data intact
- Interactive layer (checkboxes, dismiss, custom items, email form, preset switcher) is non-functional but doesn't break the page
- Acceptable — the canonical 12-month content is what we want indexed

### 9.3 Security & input sanitization

- Custom item text: trim → strip HTML via `lib/security` `sanitizeUserInput` → reject if length > 120 → reject URL-like patterns to discourage spam injection (existing helper already used by contact form)
- Email field: existing email validation helper
- Server action: rate-limited (5 req/min/IP) in a separate bucket from the calculator (`KEY_PREFIX: 'calendar:'`) so cross-tool abuse is isolated
- localStorage: never trusted as input source — every submission re-validated server-side
- `?m=N` parsing: explicit allowlist `[3, 6, 9, 12]`; anything else falls back silently to default 12

### 9.4 Edge case behaviors

| Case | Behavior |
|---|---|
| Corrupt localStorage JSON | Catch parse error, log, reset to default state, continue silently |
| `schemaVersion` from a future version | Reset to default; don't try to read incompatible shape |
| `?m=99` or other invalid value | Falls back to 12; URL normalized via `replaceState` after mount |
| Custom item: enter on empty input | No-op |
| Custom item: text exceeds 120 chars | Hard-truncate; show inline counter while typing |
| Phase already at 20 custom items | Add input disabled with cap message |
| Total custom items reaches 120 | All add inputs disabled with banner at top |
| Email form submitted before hydration | Form disabled until hydration completes; brief skeleton on submit button |
| Tab closed mid-action | Debounced write may lose the very last toggle — acceptable; persistence is best-effort |
| All milestones in a phase dismissed | Phase still renders with empty state: "All items dismissed in this phase — restore one above" |
| 3-month preset with localStorage state for FOUNDATION milestones | State preserved (not deleted); items just don't render until preset includes FOUNDATION |
| Email submitted with zero done/dismissed/custom items | Allowed — sends the canonical plan as-is |
| Two browser tabs open with the same calendar | Each tab has its own state; last write to localStorage wins. No `storage` event sync in v1. |
| Preset switch with unsaved text in custom-item input | Discard the unsaved text (keeps reducer simple); document in a comment |
| Network failure mid-submit | Server action rejects → form shows generic retry error → state stays editable |

### 9.5 Accessibility

- Preset switcher: `role="tablist"`, each tab `role="tab"` per WAI-ARIA tabs pattern
- Milestone checkbox: native `<input type="checkbox">` with associated `<label>`
- Soft-dismiss button: `<button aria-pressed>` so screen readers announce state
- Custom item input: associated `<label>`
- Strike-through dismissed items: `aria-label="Dismissed milestone — click to restore"` so meaning is not conveyed by visual style alone
- Skip-link from the top of the calendar to the email form (keyboard users)
- Color contrast: rail backgrounds against white text meet 4.5:1 in the brand palette

### 9.6 Observability

- Existing `lib/logger` calls in the server action: success, validation rejection (with reason category), rate-limit hit, Postmark failure
- No client-side analytics events specced — defer to whatever the project already does (existing pattern: nothing custom for the calculator)

---

## 10. Testing Strategy

### 10.1 Unit tests (Vitest, mirroring `urlState.test.ts`)

- `lib/tools/calendarPresets.ts`:
  - `resolvePhases` for all 4 presets
  - ID stability for milestones present in multiple presets
  - `removedPhaseIds` correctly excludes phases
  - `extraMilestones` correctly appends per-phase
  - Override field-level merging works as expected

- `lib/tools/calendarEmail.ts`:
  - Snapshot tests for `composeEmailHtml` across each preset × locale
  - Done items render checked
  - Dismissed items render struck-through
  - Custom items appear in their phase

- `useCalendarState` reducer:
  - `SET_PRESET` preserves `itemStates` and `customItems`
  - `TOGGLE_DONE` toggles correctly between PENDING and DONE
  - `TOGGLE_DISMISSED` toggles correctly between PENDING and DISMISSED
  - `ADD_CUSTOM` enforces per-phase cap (20)
  - `ADD_CUSTOM` enforces total cap (120)
  - `ADD_CUSTOM` strips HTML and truncates at 120 chars
  - `REMOVE_CUSTOM` removes by ID
  - `RESET` clears all state but preserves schema/preset defaults
  - `HYDRATE` from corrupt state falls back to default

### 10.2 Server action integration tests

- `emailCalendarPlan` happy path (Postmark mocked, payload shape asserted)
- Rate-limit hit returns `error: 'rate_limit'`
- Validation rejection returns `error: 'validation'` for invalid email, invalid preset, oversized custom items, unknown enum values
- Postmark failure returns `error: 'send_failed'`

### 10.3 Component smoke tests (minimal)

- Render `RetreatLaunchCalendar` with default state, assert all 6 phases visible
- Render with `?m=3` initial preset, assert FOUNDATION phase absent + impact subtitle visible
- Click a milestone checkbox, assert it persists across re-render

### 10.4 No E2E for v1

Calculator pages don't have E2E either — pattern match. Manual QA gate: across the 4 presets × EN/NL/DE locales × happy-path + email-the-list flow.

---

## 11. Performance

- Calendar component bundle should be modest — no new heavy dependencies; `useReducer` is built-in; localStorage helpers stay inline
- Server action payload capped at ~5KB (120 custom items × ~50 bytes + state map) — well under any platform limit
- The calendar's `module.css` should stay focused; reuse `ToolPageShell.module.css` chrome
- Page is dynamic on `searchParams.m` — that means no static cache for `?m=N` variants, but the bare URL still benefits from edge caching

---

## 12. Implementation Phasing Hint (for the planning step)

To produce reviewable PRs, the implementation plan should consider this rough phasing:

1. **Scaffolding & types** — route enum, types, constants, empty content file, dictionary key stubs (EN), `ToolPageShell` slot rename
2. **Pure logic** — `resolvePhases`, `composeEmailHtml`, reducer, `useCalendarState`, all unit-tested
3. **UI components** — `RetreatLaunchCalendar`, `PresetSwitcher`, `PhaseCard`, `MilestoneItem`, `CustomItemInput`, `EmailPlanForm`
4. **Page wiring** — `page.tsx`, metadata, structured data, OG image, sitemap, hub-page integration, internal linking from `/host-a-retreat` + silo pages
5. **Server action** — `emailCalendarPlan` with validation, rate limit, Postmark, Slack
6. **Canonical EN content** — populate `calendarContent.ts` with full canonical 12-month content + 3 overrides + impact subtitles
7. **NL + DE translations** — populate dictionaries + content
8. **ES + FR verbatim stubs** — copy EN strings into the dictionaries

The exact PR boundaries live in the implementation plan; this is just a phasing hint.
