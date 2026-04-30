# Retreat Chefs Directory — Chef Detail Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship the per-chef detail page (`/[locale]/chefs/[slug]`) for a new "Directory of Retreat Chefs in the Netherlands" — fully indexable, draft/published-gated, with a structured inquiry form routed through existing Postmark + Slack infrastructure.

**Architecture:** Server-first composition with two client islands (`ChefGallery`, `ChefInquiryForm`). Per-chef data files under `src/data/chefs/` mirror the existing `silos/` pattern. Static generation via `generateStaticParams` + `dynamicParams = false`. Drafts render only when `VERCEL_ENV !== 'production'`; production 404s drafts and excludes them from the sitemap.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS + CSS Modules, Zod (validation), Vitest (tests), Postmark (email), Slack webhook (notifications).

**Spec:** `docs/superpowers/specs/2026-04-30-retreat-chefs-directory-chef-page-design.md` — read first if you need context.

---

## File Map

### Created
```
src/constants/chef.ts                                             # Enums + region coordinates
src/types/chef.ts                                                 # Chef, Localized<T>, ImageRef
src/lib/chef/localized.ts                                         # localize<T>() helper
src/lib/chef/localized.test.ts
src/lib/chef/inquirySchema.ts                                     # Zod schema
src/lib/chef/inquirySchema.test.ts
src/data/chefs/index.ts                                           # Registry + getChefBySlug + getChefsForEnv
src/data/chefs/registry.test.ts
src/data/chefs/liesbeth-van-der-velden.ts                         # First fixture chef (DRAFT)
src/actions/chef/sendChefInquiry.ts                               # Server action
src/actions/chef/sendChefInquiry.test.ts
src/components/server/ChefDetailPage/index.ts
src/components/server/ChefDetailPage/ChefDetailPage.tsx
src/components/server/ChefDetailPage/ChefDetailPage.test.tsx
src/components/server/ChefDetailPage/ChefHeader.tsx
src/components/server/ChefDetailPage/ChefHeader.module.css
src/components/server/ChefDetailPage/ChefStatStrip.tsx
src/components/server/ChefDetailPage/ChefStatStrip.module.css
src/components/server/ChefDetailPage/ChefAbout.tsx
src/components/server/ChefDetailPage/ChefAbout.module.css
src/components/server/ChefDetailPage/ChefSignatureDishes.tsx
src/components/server/ChefDetailPage/ChefSignatureDishes.module.css
src/components/server/ChefDetailPage/ChefTestimonials.tsx
src/components/server/ChefDetailPage/ChefTestimonials.module.css
src/components/server/ChefDetailPage/ChefSidebar.tsx
src/components/server/ChefDetailPage/ChefSidebar.module.css
src/components/server/ChefDetailPage/ChefOperatesIn.tsx
src/components/server/ChefDetailPage/ChefOperatesIn.module.css
src/components/server/ChefDetailPage/ChefAtAGlance.tsx
src/components/server/ChefDetailPage/ChefAtAGlance.module.css
src/components/server/ChefDetailPage/ChefPastRetreats.tsx
src/components/server/ChefDetailPage/ChefPastRetreats.module.css
src/components/server/ChefDetailPage/ChefStructuredData.tsx
src/components/server/ChefDetailPage/ChefStructuredData.test.tsx
src/components/server/ChefDetailPage/DraftBadge.tsx
src/components/server/ChefDetailPage/DraftBadge.module.css
src/components/server/ChefDetailPage/StickyMobileCta.tsx
src/components/server/ChefDetailPage/StickyMobileCta.module.css
src/components/server/ChefDetailPage/ChefDetailPage.module.css
src/components/client/ChefGallery/index.ts
src/components/client/ChefGallery/ChefGallery.tsx
src/components/client/ChefGallery/ChefGallery.module.css
src/components/client/ChefInquiryForm/index.ts
src/components/client/ChefInquiryForm/ChefInquiryModal.tsx
src/components/client/ChefInquiryForm/ChefInquiryForm.tsx
src/components/client/ChefInquiryForm/ChefInquiryForm.module.css
src/app/[locale]/chefs/[slug]/page.tsx
public/images/chefs/_assets/nl-outline.svg
public/images/chefs/liesbeth-van-der-velden/avatar.jpg            # Manually placed during fixture step
public/images/chefs/liesbeth-van-der-velden/hero.jpg
public/images/chefs/liesbeth-van-der-velden/gallery-1.jpg ... gallery-4.jpg
docs/superpowers/chef-publishing-checklist.md
```

### Modified
```
src/types/index.ts                                                # Re-export Chef types
src/constants/index.ts                                            # Re-export ChefStatus, RetreatType, etc.
src/lib/index.ts                                                  # Re-export localize
src/lib/routing.ts                                                # Add chefDetailPath helper
src/types/navigation.ts                                           # Add Route.CHEF_DETAIL
src/i18n/dictionaries/en.ts                                       # Add chef namespace
src/i18n/dictionaries/nl.ts                                       # Add chef namespace
src/i18n/dictionaries/de.ts                                       # Add chef namespace
src/i18n/types.ts                                                 # Extend Dictionary type with chef namespace
src/data/imageAltText.ts                                          # Register chef image alt text
src/app/sitemap.ts                                                # Append PUBLISHED_CHEFS URLs
```

---

## Conventions reused from existing code

- **Zod** for validation (already a dep). Schema lives in `lib/chef/inquirySchema.ts`.
- **`RateLimiter`** class from `@/lib/security` with per-action config constants in `@/constants/chef`.
- **`getClientIdentifier()`** from `@/lib` for rate-limit IP key.
- **`maskEmail()`** from `@/lib` for log safety.
- **`createLogger(scope)`** from `@/lib` for structured logs.
- **`sanitizePlainText(input, maxLen)`** from `@/lib/security` for free-text input sanitization.
- **`sendEmail(...)`** from `@/services/email` (Postmark wrapper).
- **`sendSlackMessage({ channel, message })`** + **`SlackChannel.USER_CONTACTS`** from `@/services/slack`.
- **Server action result shape**: `{ success: boolean; message: string; errors?: Record<string, string> }` — matches `submitContactForm`.
- **Test pattern**: vitest, colocated `*.test.ts(x)`, imports from `vitest`.
- **Component pattern**: each component its own folder with `*.tsx`, `*.module.css`, `index.ts` barrel.

---

# Phase 1 — Foundations (constants, types, helpers)

## Task 1: Add chef enums + region coordinates

**Files:**
- Create: `src/constants/chef.ts`
- Modify: `src/constants/index.ts`

- [ ] **Step 1: Create `src/constants/chef.ts` with all chef enums**

```ts
// src/constants/chef.ts

export enum ChefStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
}

export enum RetreatType {
  YOGA = 'yoga',
  WELLNESS = 'wellness',
  CREATIVE = 'creative',
  CORPORATE = 'corporate',
  BREATHWORK = 'breathwork',
  MEDITATION = 'meditation',
  WRITING = 'writing',
  PHOTOGRAPHY = 'photography',
}

export enum DietaryCapability {
  VEGAN = 'vegan',
  VEGETARIAN = 'vegetarian',
  GLUTEN_FREE = 'gluten_free',
  DAIRY_FREE = 'dairy_free',
  NUT_FREE = 'nut_free',
  KOSHER = 'kosher',
  HALAL = 'halal',
  ALLERGY_AWARE = 'allergy_aware',
  RAW = 'raw',
  KETO = 'keto',
}

export enum PriceTier {
  BUDGET = 'budget',     // €
  STANDARD = 'standard', // €€
  PREMIUM = 'premium',   // €€€
}

// Extensible: additional billing units (e.g. PER_GROUP_PER_DAY) may be added here.
export enum DayRateUnit {
  PER_PERSON_PER_DAY = 'per_person_per_day',
}

export enum NlRegion {
  DRENTHE = 'drenthe',
  FLEVOLAND = 'flevoland',
  FRIESLAND = 'friesland',
  GELDERLAND = 'gelderland',
  GRONINGEN = 'groningen',
  LIMBURG = 'limburg',
  NOORD_BRABANT = 'noord_brabant',
  NOORD_HOLLAND = 'noord_holland',
  OVERIJSSEL = 'overijssel',
  UTRECHT = 'utrecht',
  ZEELAND = 'zeeland',
  ZUID_HOLLAND = 'zuid_holland',
}

// Approximate viewBox coordinates for placing a marker on the shared NL outline SVG.
// SVG viewBox is 0 0 100 120. Coordinates picked to land near each province's centroid.
export const NL_REGION_COORDINATES: Readonly<Record<NlRegion, { x: number; y: number }>> = {
  [NlRegion.DRENTHE]: { x: 70, y: 30 },
  [NlRegion.FLEVOLAND]: { x: 55, y: 45 },
  [NlRegion.FRIESLAND]: { x: 55, y: 22 },
  [NlRegion.GELDERLAND]: { x: 60, y: 55 },
  [NlRegion.GRONINGEN]: { x: 75, y: 18 },
  [NlRegion.LIMBURG]: { x: 65, y: 95 },
  [NlRegion.NOORD_BRABANT]: { x: 50, y: 80 },
  [NlRegion.NOORD_HOLLAND]: { x: 38, y: 35 },
  [NlRegion.OVERIJSSEL]: { x: 70, y: 45 },
  [NlRegion.UTRECHT]: { x: 45, y: 55 },
  [NlRegion.ZEELAND]: { x: 25, y: 80 },
  [NlRegion.ZUID_HOLLAND]: { x: 35, y: 60 },
}

// Rate-limit config for the chef inquiry action.
// Shared instance is created in src/actions/chef/sendChefInquiry.ts.
export const CHEF_INQUIRY_RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000,  // 15 minutes
  MAX_REQUESTS: 5,
} as const

// Form field length bounds — used by both Zod schema and dictionary error messages.
export const CHEF_INQUIRY_LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 80,
  DATES_MIN: 2,
  DATES_MAX: 80,
  GROUP_SIZE_MIN: 2,
  GROUP_SIZE_MAX: 60,
  LOCATION_MIN: 2,
  LOCATION_MAX: 120,
  DIETARY_MIN: 0,
  DIETARY_MAX: 500,
  MESSAGE_MIN: 20,
  MESSAGE_MAX: 1500,
} as const
```

- [ ] **Step 2: Export from constants barrel**

Modify `src/constants/index.ts` — add at the bottom:

```ts
export * from './chef'
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npm run lint`
Expected: PASS (no new errors).

- [ ] **Step 4: Commit**

```bash
git add src/constants/chef.ts src/constants/index.ts
git commit -m "feat(chefs): add chef enums and region coordinate constants"
```

---

## Task 2: Add Chef types

**Files:**
- Create: `src/types/chef.ts`
- Modify: `src/types/index.ts`

- [ ] **Step 1: Create `src/types/chef.ts`**

```ts
// src/types/chef.ts

import { Language } from './common'
import {
  ChefStatus,
  DayRateUnit,
  DietaryCapability,
  NlRegion,
  PriceTier,
  RetreatType,
} from '@/constants/chef'

/**
 * Localized<T> requires the EN value, allows optional NL/DE values.
 * Use the `localize(field, lang)` helper at render time — it falls back to EN
 * when the requested language is missing.
 */
export type Localized<T> = { [Language.EN]: T } & Partial<Record<Language.NL | Language.DE, T>>

export type ImageRef = {
  /** Path relative to /public, e.g. '/images/chefs/liesbeth-van-der-velden/hero.jpg' */
  src: string
  /** Key into src/data/imageAltText.ts (existing i18n alt-text registry) */
  altKey: string
}

export type ChefHomeBase = { city: string; region: NlRegion }

export type ChefGroupSize = { min: number; max: number }

export type ChefDayRate = {
  amountEur: number
  unit: DayRateUnit
  tier: PriceTier
}

export type ChefGallery = {
  hero: ImageRef
  /** 4–8 supporting images. Validated at runtime by the publishing checklist, not the type. */
  supporting: ImageRef[]
}

export type ChefAbout = {
  headline: Localized<string>
  paragraphs: Localized<string>[]
}

export type ChefSignatureDish = {
  name: Localized<string>
  note: Localized<string>
}

export type ChefTestimonial = {
  quote: Localized<string>
  author: string
  role: Localized<string>
}

export type ChefAtAGlance = {
  sourcing: Localized<string>
  credentials: Localized<string>
  press?: Localized<string>
}

export type ChefPastRetreat = {
  name: string
  /** Optional outbound link. Rendered with target="_blank" rel="noopener nofollow". */
  url?: string
}

export type Chef = {
  // Identity & gating
  slug: string
  status: ChefStatus
  primaryLanguage: Language
  inquiryEmail: string
  /** ISO date string, drives sitemap lastModified. */
  updatedAt: string

  // Header
  name: string
  avatar: ImageRef
  tagline: Localized<string>
  homeBase: ChefHomeBase
  servesRegions: NlRegion[]
  travelsNationwide: boolean
  groupSize: ChefGroupSize
  languagesSpoken: Language[]
  yearsExperience: number

  // Stat strip
  rightFor: RetreatType[]
  cuisineStyles: Localized<string>[]
  dietaryCapabilities: DietaryCapability[]
  dayRate: ChefDayRate

  // Body
  gallery: ChefGallery
  about: ChefAbout
  signatureDishes: ChefSignatureDish[]
  testimonials: ChefTestimonial[]

  // Sidebar
  atAGlance: ChefAtAGlance
  pastRetreats: ChefPastRetreat[]
}
```

- [ ] **Step 2: Re-export from types barrel**

Modify `src/types/index.ts` — add at the bottom (preserve existing exports):

```ts
export * from './chef'
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npm run lint`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/types/chef.ts src/types/index.ts
git commit -m "feat(chefs): add Chef and Localized<T> types"
```

---

## Task 3: Add `Route.CHEF_DETAIL` and path helper

**Files:**
- Modify: `src/types/navigation.ts`
- Modify: `src/lib/routing.ts`

- [ ] **Step 1: Inspect existing Route enum**

Run: `grep -n "CHEF\|YOGA_TEACHERS\|^export enum Route" src/types/navigation.ts`
Note the exact location and member style.

- [ ] **Step 2: Add `CHEF_DETAIL` to `Route` enum**

Modify `src/types/navigation.ts`. Inside the `Route` enum, add (preserving the existing style — string-valued enums with route paths):

```ts
CHEF_DETAIL = '/chefs',  // base path; full URL composed with slug via chefDetailPath()
```

If the existing pattern uses suffix-included paths, add it there. Match exact style of the surrounding members.

- [ ] **Step 3: Add `chefDetailPath` helper to `lib/routing.ts`**

Modify `src/lib/routing.ts` — append:

```ts
import { Language } from '@/types'

/**
 * Build the localized URL for a chef detail page.
 * Example: chefDetailPath('liesbeth-van-der-velden', Language.EN) → '/en/chefs/liesbeth-van-der-velden'
 */
export function chefDetailPath(slug: string, locale: Language): string {
  return `/${locale}/chefs/${slug}`
}
```

If `Language` is already imported in the file, do not re-import. If `lib/routing.ts` already exports a similar locale-based helper, follow its style and signature.

- [ ] **Step 4: Verify**

Run: `npm run lint`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/types/navigation.ts src/lib/routing.ts
git commit -m "feat(chefs): add CHEF_DETAIL route and chefDetailPath helper"
```

---

## Task 4: `localize<T>()` helper with tests

**Files:**
- Create: `src/lib/chef/localized.ts`
- Create: `src/lib/chef/localized.test.ts`
- Modify: `src/lib/index.ts`

- [ ] **Step 1: Write the failing test**

Create `src/lib/chef/localized.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { Language } from '@/types'

import { localize } from './localized'

describe('localize', () => {
  const field = {
    [Language.EN]: 'Plant-forward, fire-cooked',
    [Language.NL]: 'Plantaardig, op vuur bereid',
  }

  it('returns the requested locale when present', () => {
    expect(localize(field, Language.EN)).toBe('Plant-forward, fire-cooked')
    expect(localize(field, Language.NL)).toBe('Plantaardig, op vuur bereid')
  })

  it('falls back to EN when the requested locale is missing', () => {
    expect(localize(field, Language.DE)).toBe('Plant-forward, fire-cooked')
  })

  it('works with non-string types (e.g., string arrays)', () => {
    const arrayField = {
      [Language.EN]: ['a', 'b'],
      [Language.NL]: ['x', 'y'],
    }
    expect(localize(arrayField, Language.NL)).toEqual(['x', 'y'])
    expect(localize(arrayField, Language.DE)).toEqual(['a', 'b'])
  })
})
```

- [ ] **Step 2: Verify test fails**

Run: `npm test -- src/lib/chef/localized.test.ts`
Expected: FAIL with "Cannot find module './localized'".

- [ ] **Step 3: Implement `localize`**

Create `src/lib/chef/localized.ts`:

```ts
import { Language } from '@/types'
import type { Localized } from '@/types'

export function localize<T>(field: Localized<T>, lang: Language): T {
  return field[lang] ?? field[Language.EN]
}
```

- [ ] **Step 4: Verify tests pass**

Run: `npm test -- src/lib/chef/localized.test.ts`
Expected: PASS, 3 tests.

- [ ] **Step 5: Re-export from lib barrel**

Modify `src/lib/index.ts` — append:

```ts
export * from './chef/localized'
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/chef/localized.ts src/lib/chef/localized.test.ts src/lib/index.ts
git commit -m "feat(chefs): add localize<T> helper with EN fallback"
```

---

# Phase 2 — Validation schema

## Task 5: Zod schema for chef inquiry input + tests

**Files:**
- Create: `src/lib/chef/inquirySchema.ts`
- Create: `src/lib/chef/inquirySchema.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/lib/chef/inquirySchema.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { CHEF_INQUIRY_LIMITS } from '@/constants/chef'

import { chefInquirySchema } from './inquirySchema'

const validInput = {
  name: 'Anna Visser',
  email: 'anna@example.com',
  dates: '5–9 May 2026',
  groupSize: 12,
  location: 'MakersBarn, Overijssel',
  dietary: '3 vegan, 1 gluten-free',
  message: 'Hi Liesbeth, looking for a chef for our 5-day yoga retreat in May. Group of 12.',
  honeypot: '',
  consent: true,
}

describe('chefInquirySchema', () => {
  it('accepts a complete valid payload', () => {
    expect(chefInquirySchema.safeParse(validInput).success).toBe(true)
  })

  it('accepts missing optional dietary field', () => {
    const { dietary: _dietary, ...rest } = validInput
    expect(chefInquirySchema.safeParse({ ...rest, dietary: '' }).success).toBe(true)
  })

  it('rejects missing name', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, name: '' }).success).toBe(false)
  })

  it('rejects malformed email', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, email: 'not-an-email' }).success).toBe(false)
  })

  it('rejects email with CR/LF (header injection guard)', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, email: 'evil@x.com\r\nBcc: a@b.com' }).success).toBe(false)
  })

  it('rejects group size below minimum', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, groupSize: CHEF_INQUIRY_LIMITS.GROUP_SIZE_MIN - 1 }).success).toBe(false)
  })

  it('rejects group size above maximum', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, groupSize: CHEF_INQUIRY_LIMITS.GROUP_SIZE_MAX + 1 }).success).toBe(false)
  })

  it('rejects message shorter than minimum', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, message: 'too short' }).success).toBe(false)
  })

  it('rejects message longer than maximum', () => {
    const overlong = 'x'.repeat(CHEF_INQUIRY_LIMITS.MESSAGE_MAX + 1)
    expect(chefInquirySchema.safeParse({ ...validInput, message: overlong }).success).toBe(false)
  })

  it('rejects when consent is false', () => {
    expect(chefInquirySchema.safeParse({ ...validInput, consent: false }).success).toBe(false)
  })

  it('parses honeypot field but does not reject when filled (action handles it)', () => {
    // Honeypot is a string field; schema accepts any value.
    // The action checks for emptiness separately and returns silent success.
    expect(chefInquirySchema.safeParse({ ...validInput, honeypot: 'spam' }).success).toBe(true)
  })
})
```

- [ ] **Step 2: Verify test fails**

Run: `npm test -- src/lib/chef/inquirySchema.test.ts`
Expected: FAIL with "Cannot find module './inquirySchema'".

- [ ] **Step 3: Implement the schema**

Create `src/lib/chef/inquirySchema.ts`:

```ts
import { z } from 'zod'

import { CHEF_INQUIRY_LIMITS } from '@/constants/chef'

// Reject email values that contain CR/LF — guards against header injection
// when the email is reflected into Postmark addresses.
const NO_CRLF = /^[^\r\n]+$/

export const chefInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.NAME_MIN)
    .max(CHEF_INQUIRY_LIMITS.NAME_MAX),
  email: z
    .string()
    .trim()
    .email()
    .regex(NO_CRLF)
    .max(254), // RFC 5321 hard cap
  dates: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.DATES_MIN)
    .max(CHEF_INQUIRY_LIMITS.DATES_MAX),
  groupSize: z
    .number()
    .int()
    .min(CHEF_INQUIRY_LIMITS.GROUP_SIZE_MIN)
    .max(CHEF_INQUIRY_LIMITS.GROUP_SIZE_MAX),
  location: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.LOCATION_MIN)
    .max(CHEF_INQUIRY_LIMITS.LOCATION_MAX),
  dietary: z
    .string()
    .trim()
    .max(CHEF_INQUIRY_LIMITS.DIETARY_MAX)
    .optional()
    .default(''),
  message: z
    .string()
    .trim()
    .min(CHEF_INQUIRY_LIMITS.MESSAGE_MIN)
    .max(CHEF_INQUIRY_LIMITS.MESSAGE_MAX),
  honeypot: z.string().default(''),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'consent_required' }),
  }),
})

export type ChefInquiryInput = z.infer<typeof chefInquirySchema>
```

- [ ] **Step 4: Verify tests pass**

Run: `npm test -- src/lib/chef/inquirySchema.test.ts`
Expected: PASS, 11 tests.

- [ ] **Step 5: Commit**

```bash
git add src/lib/chef/inquirySchema.ts src/lib/chef/inquirySchema.test.ts
git commit -m "feat(chefs): add Zod schema for chef inquiry input"
```

---

# Phase 3 — Data registry + first chef

## Task 6: Chef registry skeleton + tests

**Files:**
- Create: `src/data/chefs/index.ts`
- Create: `src/data/chefs/registry.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/data/chefs/registry.test.ts`:

```ts
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ChefStatus } from '@/constants/chef'
import { Language } from '@/types'
import type { Chef } from '@/types'

const baseChef = (overrides: Partial<Chef>): Chef => ({
  slug: 'test-chef',
  status: ChefStatus.PUBLISHED,
  primaryLanguage: Language.EN,
  inquiryEmail: 'test@example.com',
  updatedAt: '2026-04-30',
  name: 'Test Chef',
  avatar: { src: '/images/chefs/test/avatar.jpg', altKey: 'chef.test.avatar' },
  tagline: { [Language.EN]: 'A test chef' },
  homeBase: { city: 'Amsterdam', region: 'noord_holland' as never },
  servesRegions: [],
  travelsNationwide: false,
  groupSize: { min: 6, max: 20 },
  languagesSpoken: [Language.EN],
  yearsExperience: 5,
  rightFor: [],
  cuisineStyles: [],
  dietaryCapabilities: [],
  dayRate: { amountEur: 50, unit: 'per_person_per_day' as never, tier: 'standard' as never },
  gallery: { hero: { src: '/images/chefs/test/hero.jpg', altKey: 'chef.test.hero' }, supporting: [] },
  about: { headline: { [Language.EN]: 'About' }, paragraphs: [{ [Language.EN]: 'Bio' }] },
  signatureDishes: [],
  testimonials: [],
  atAGlance: {
    sourcing: { [Language.EN]: 'Local' },
    credentials: { [Language.EN]: 'Trained' },
  },
  pastRetreats: [],
  ...overrides,
})

describe('chef registry', () => {
  const ORIGINAL_VERCEL_ENV = process.env.VERCEL_ENV

  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    process.env.VERCEL_ENV = ORIGINAL_VERCEL_ENV
    vi.resetModules()
  })

  it('CHEFS_BY_SLUG keys all chefs by their slug', async () => {
    const { CHEFS_BY_SLUG, ALL_CHEFS } = await import('./index')
    for (const chef of ALL_CHEFS) {
      expect(CHEFS_BY_SLUG[chef.slug]).toBe(chef)
    }
  })

  it('PUBLISHED_CHEFS only includes chefs with status=PUBLISHED', async () => {
    const { PUBLISHED_CHEFS } = await import('./index')
    for (const chef of PUBLISHED_CHEFS) {
      expect(chef.status).toBe(ChefStatus.PUBLISHED)
    }
  })

  it('getChefsForEnv returns PUBLISHED_CHEFS only when VERCEL_ENV=production', async () => {
    process.env.VERCEL_ENV = 'production'
    vi.resetModules()
    const { getChefsForEnv, PUBLISHED_CHEFS } = await import('./index')
    expect(getChefsForEnv()).toEqual(PUBLISHED_CHEFS)
  })

  it('getChefsForEnv returns ALL_CHEFS when VERCEL_ENV=preview', async () => {
    process.env.VERCEL_ENV = 'preview'
    vi.resetModules()
    const { getChefsForEnv, ALL_CHEFS } = await import('./index')
    expect(getChefsForEnv()).toEqual(ALL_CHEFS)
  })

  it('getChefsForEnv returns ALL_CHEFS when VERCEL_ENV is unset (dev)', async () => {
    delete process.env.VERCEL_ENV
    vi.resetModules()
    const { getChefsForEnv, ALL_CHEFS } = await import('./index')
    expect(getChefsForEnv()).toEqual(ALL_CHEFS)
  })

  it('getChefBySlug returns undefined for unknown slug', async () => {
    const { getChefBySlug } = await import('./index')
    expect(getChefBySlug('definitely-not-a-real-chef')).toBeUndefined()
  })
})
```

The test imports `ALL_CHEFS` and exercises whatever chefs are registered. We use a `baseChef()` helper for documentation but rely on the actual fixture chef created in Task 7 to populate `ALL_CHEFS`.

- [ ] **Step 2: Implement the registry skeleton**

Create `src/data/chefs/index.ts`:

```ts
import { ChefStatus } from '@/constants/chef'
import type { Chef } from '@/types'

// Chefs are added one file per chef. Import each here and append to ALL_CHEFS.
// Naming convention: <SLUG_UPPER_SNAKE>_CHEF (mirrors YOGA_TEACHERS_SILO).
// import { LIESBETH_VAN_DER_VELDEN_CHEF } from './liesbeth-van-der-velden'

export const ALL_CHEFS: readonly Chef[] = [
  // LIESBETH_VAN_DER_VELDEN_CHEF,
] as const

export const CHEFS_BY_SLUG: Readonly<Record<string, Chef>> = Object.fromEntries(
  ALL_CHEFS.map((chef) => [chef.slug, chef])
)

export const PUBLISHED_CHEFS: readonly Chef[] = ALL_CHEFS.filter(
  (chef) => chef.status === ChefStatus.PUBLISHED
)

export function getChefsForEnv(): readonly Chef[] {
  return process.env.VERCEL_ENV === 'production' ? PUBLISHED_CHEFS : ALL_CHEFS
}

/**
 * Returns the chef for a slug, or undefined if not found OR if the chef is a
 * draft and we are in production. Single source of truth — used by both the
 * route handler and the inquiry server action.
 */
export function getChefBySlug(slug: string): Chef | undefined {
  const chef = CHEFS_BY_SLUG[slug]
  if (!chef) return undefined
  if (process.env.VERCEL_ENV === 'production' && chef.status !== ChefStatus.PUBLISHED) {
    return undefined
  }
  return chef
}
```

- [ ] **Step 3: Verify tests pass**

Run: `npm test -- src/data/chefs/registry.test.ts`
Expected: PASS, 6 tests. (Tests that loop over ALL_CHEFS pass trivially when ALL_CHEFS is empty — this is fine; Task 7 will populate it and the next CI run will exercise the loop bodies.)

- [ ] **Step 4: Commit**

```bash
git add src/data/chefs/index.ts src/data/chefs/registry.test.ts
git commit -m "feat(chefs): add chef registry with env-gated draft visibility"
```

---

## Task 7: Create the first fixture chef (Liesbeth, status=DRAFT)

**Files:**
- Create: `src/data/chefs/liesbeth-van-der-velden.ts`
- Modify: `src/data/chefs/index.ts`
- Modify: `src/data/imageAltText.ts`
- Place (manual or placeholder): `public/images/chefs/liesbeth-van-der-velden/{avatar,hero,gallery-1..4}.jpg`

- [ ] **Step 1: Place placeholder image files**

For the page to render and pass type checks, the referenced image files must exist in `/public`. If you do not yet have real photos:

```bash
mkdir -p public/images/chefs/liesbeth-van-der-velden
# Copy any existing image as a placeholder for each:
cp public/images/your-existing-image.jpg public/images/chefs/liesbeth-van-der-velden/avatar.jpg
cp public/images/your-existing-image.jpg public/images/chefs/liesbeth-van-der-velden/hero.jpg
cp public/images/your-existing-image.jpg public/images/chefs/liesbeth-van-der-velden/gallery-1.jpg
cp public/images/your-existing-image.jpg public/images/chefs/liesbeth-van-der-velden/gallery-2.jpg
cp public/images/your-existing-image.jpg public/images/chefs/liesbeth-van-der-velden/gallery-3.jpg
cp public/images/your-existing-image.jpg public/images/chefs/liesbeth-van-der-velden/gallery-4.jpg
```

These placeholders only need to exist at build time. Real images come during chef onboarding.

- [ ] **Step 2: Register alt text for each image**

Modify `src/data/imageAltText.ts` — add entries for each chef image. Match the existing pattern in the file (likely a flat object keyed by `altKey` with `Localized<string>` values):

```ts
'chef.liesbeth-van-der-velden.avatar': {
  [Language.EN]: 'Portrait of chef Liesbeth van der Velden',
  [Language.NL]: 'Portret van chef Liesbeth van der Velden',
  [Language.DE]: 'Porträt von Chefköchin Liesbeth van der Velden',
},
'chef.liesbeth-van-der-velden.hero': {
  [Language.EN]: 'Plated dish on a long table set for a retreat dinner',
  [Language.NL]: 'Bord met gerecht op een lange retraite-tafel',
  [Language.DE]: 'Angerichteter Teller auf einer langen Retreat-Tafel',
},
'chef.liesbeth-van-der-velden.gallery-1': {
  [Language.EN]: 'Family-style spread with multiple shared dishes',
  [Language.NL]: 'Family-style maaltijd met meerdere gedeelde gerechten',
  [Language.DE]: 'Family-Style-Tafel mit mehreren geteilten Gerichten',
},
'chef.liesbeth-van-der-velden.gallery-2': {
  [Language.EN]: 'Plated breakfast bowl with vegetables and herbs',
  [Language.NL]: 'Ontbijtbord met groenten en kruiden',
  [Language.DE]: 'Frühstücksschale mit Gemüse und Kräutern',
},
'chef.liesbeth-van-der-velden.gallery-3': {
  [Language.EN]: 'Recipe card on a wooden surface with limes and herbs',
  [Language.NL]: 'Receptkaart op een houten oppervlak met limoenen en kruiden',
  [Language.DE]: 'Rezeptkarte auf Holzfläche mit Limetten und Kräutern',
},
'chef.liesbeth-van-der-velden.gallery-4': {
  [Language.EN]: 'Plated dishes with sliced meat, beetroot, and roasted vegetables',
  [Language.NL]: 'Borden met gesneden vlees, biet en geroosterde groenten',
  [Language.DE]: 'Teller mit aufgeschnittenem Fleisch, Rote Bete und geröstetem Gemüse',
},
```

If `imageAltText.ts` uses a different shape (e.g., nested by category), follow that shape exactly — same keys, same translation values.

- [ ] **Step 3: Create the chef data file**

Create `src/data/chefs/liesbeth-van-der-velden.ts`:

```ts
import {
  ChefStatus,
  DayRateUnit,
  DietaryCapability,
  NlRegion,
  PriceTier,
  RetreatType,
} from '@/constants/chef'
import { Language } from '@/types'
import type { Chef } from '@/types'

export const LIESBETH_VAN_DER_VELDEN_CHEF: Chef = {
  // — Identity & gating —
  slug: 'liesbeth-van-der-velden',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'liesbeth@example.com', // TODO during onboarding: replace with real address
  updatedAt: '2026-04-30',

  // — Header —
  name: 'Liesbeth van der Velden',
  avatar: {
    src: '/images/chefs/liesbeth-van-der-velden/avatar.jpg',
    altKey: 'chef.liesbeth-van-der-velden.avatar',
  },
  tagline: {
    [Language.EN]: 'Plant-forward, fire-cooked, deeply Dutch',
    [Language.NL]: 'Plantaardig, op vuur bereid, door en door Nederlands',
    [Language.DE]: 'Pflanzenbasiert, am Feuer gegart, zutiefst niederländisch',
  },
  homeBase: { city: 'Deventer', region: NlRegion.OVERIJSSEL },
  servesRegions: [NlRegion.OVERIJSSEL, NlRegion.GELDERLAND],
  travelsNationwide: true,
  groupSize: { min: 8, max: 24 },
  languagesSpoken: [Language.NL, Language.EN, Language.DE],
  yearsExperience: 12,

  // — Stat strip —
  rightFor: [RetreatType.YOGA, RetreatType.WELLNESS, RetreatType.CREATIVE],
  cuisineStyles: [
    {
      [Language.EN]: 'Plant-based',
      [Language.NL]: 'Plantaardig',
      [Language.DE]: 'Pflanzenbasiert',
    },
    {
      [Language.EN]: 'Fire / live-fire',
      [Language.NL]: 'Vuur / open vuur',
      [Language.DE]: 'Feuer / offenes Feuer',
    },
    {
      [Language.EN]: 'Seasonal Dutch',
      [Language.NL]: 'Seizoensgebonden Nederlands',
      [Language.DE]: 'Saisonal niederländisch',
    },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGAN,
    DietaryCapability.VEGETARIAN,
    DietaryCapability.GLUTEN_FREE,
    DietaryCapability.ALLERGY_AWARE,
  ],
  dayRate: {
    amountEur: 65,
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.PREMIUM,
  },

  // — Body —
  gallery: {
    hero: {
      src: '/images/chefs/liesbeth-van-der-velden/hero.jpg',
      altKey: 'chef.liesbeth-van-der-velden.hero',
    },
    supporting: [
      {
        src: '/images/chefs/liesbeth-van-der-velden/gallery-1.jpg',
        altKey: 'chef.liesbeth-van-der-velden.gallery-1',
      },
      {
        src: '/images/chefs/liesbeth-van-der-velden/gallery-2.jpg',
        altKey: 'chef.liesbeth-van-der-velden.gallery-2',
      },
      {
        src: '/images/chefs/liesbeth-van-der-velden/gallery-3.jpg',
        altKey: 'chef.liesbeth-van-der-velden.gallery-3',
      },
      {
        src: '/images/chefs/liesbeth-van-der-velden/gallery-4.jpg',
        altKey: 'chef.liesbeth-van-der-velden.gallery-4',
      },
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Plant-forward, fire-cooked, deeply Dutch.',
      [Language.NL]: 'Plantaardig, op vuur bereid, door en door Nederlands.',
      [Language.DE]: 'Pflanzenbasiert, am Feuer gegart, zutiefst niederländisch.',
    },
    paragraphs: [
      {
        [Language.EN]:
          'Liesbeth cooks the way her grandmother did — slow, around fire, with whatever the day\'s harvest gave. After eight years in restaurant kitchens (most recently De Kas), she came home to the eastern Netherlands to cook for groups who actually have time to taste the food. Expect long tables, real conversations, and the smell of woodsmoke in your jumper.',
        [Language.NL]:
          'Liesbeth kookt zoals haar oma dat deed — traag, rond het vuur, met wat de oogst van die dag te bieden had. Na acht jaar in restaurantkeukens (laatst bij De Kas) kwam ze terug naar het oosten van het land om te koken voor groepen die echt de tijd nemen om te proeven. Verwacht lange tafels, echte gesprekken en de geur van houtrook in je trui.',
        [Language.DE]:
          'Liesbeth kocht so, wie es schon ihre Großmutter tat — langsam, am Feuer, mit dem, was die Ernte des Tages bot. Nach acht Jahren in Restaurantküchen (zuletzt bei De Kas) kehrte sie in die östlichen Niederlande zurück, um für Gruppen zu kochen, die sich wirklich Zeit zum Schmecken nehmen. Lange Tafeln, echte Gespräche und der Duft von Holzrauch im Pullover.',
      },
    ],
  },
  signatureDishes: [
    {
      name: {
        [Language.EN]: 'Smoked beetroot, hung yoghurt, walnut',
        [Language.NL]: 'Gerookte biet, hangop, walnoot',
        [Language.DE]: 'Geräucherte Rote Bete, Hängejoghurt, Walnuss',
      },
      note: {
        [Language.EN]: 'Live fire, served family-style',
        [Language.NL]: 'Open vuur, family-style geserveerd',
        [Language.DE]: 'Offenes Feuer, family-style serviert',
      },
    },
    {
      name: {
        [Language.EN]: 'Wild garlic kroketten',
        [Language.NL]: 'Daslook-kroketten',
        [Language.DE]: 'Bärlauch-Kroketten',
      },
      note: {
        [Language.EN]: 'House sourdough, fermented mustard',
        [Language.NL]: 'Eigen zuurdesem, gefermenteerde mosterd',
        [Language.DE]: 'Hauseigenes Sauerteigbrot, fermentierter Senf',
      },
    },
    {
      name: {
        [Language.EN]: 'Slow-roasted celeriac, hay butter',
        [Language.NL]: 'Langzaam geroosterde knolselderij, hooiboter',
        [Language.DE]: 'Langsam gerösteter Knollensellerie, Heubutter',
      },
      note: {
        [Language.EN]: 'Cooked in embers, 4 hours',
        [Language.NL]: '4 uur in sintels gegaard',
        [Language.DE]: '4 Stunden in der Glut gegart',
      },
    },
  ],
  testimonials: [
    {
      quote: {
        [Language.EN]:
          'Three days in and our guests were still talking about her beetroot. Liesbeth made the food feel like part of the practice, not a break from it.',
        [Language.NL]:
          'Drie dagen verder hadden onze gasten het nog steeds over haar biet. Liesbeth maakte het eten onderdeel van de beoefening, geen pauze ervan.',
        [Language.DE]:
          'Drei Tage später sprachen unsere Gäste immer noch von ihrer Roten Bete. Liesbeth machte das Essen zum Teil der Praxis, nicht zur Pause davon.',
      },
      author: 'Marieke H.',
      role: {
        [Language.EN]: 'Yoga retreat host, Texel',
        [Language.NL]: 'Yoga-retraitehost, Texel',
        [Language.DE]: 'Yoga-Retreat-Gastgeberin, Texel',
      },
    },
    {
      quote: {
        [Language.EN]:
          'Calm, organised, and the food was extraordinary. She handled fourteen different dietary needs without once making it feel like a problem.',
        [Language.NL]:
          'Rustig, georganiseerd, en het eten was buitengewoon. Ze ging om met veertien verschillende dieetwensen zonder dat het ooit een probleem leek.',
        [Language.DE]:
          'Ruhig, organisiert, und das Essen war außergewöhnlich. Sie meisterte vierzehn verschiedene Ernährungsbedürfnisse, ohne dass es je zum Problem wurde.',
      },
      author: 'Sanne & Tim',
      role: {
        [Language.EN]: 'Founders, Stillpoint Retreats',
        [Language.NL]: 'Oprichters, Stillpoint Retreats',
        [Language.DE]: 'Gründer, Stillpoint Retreats',
      },
    },
  ],

  // — Sidebar —
  atAGlance: {
    sourcing: {
      [Language.EN]: 'Local farms within 30km, foraged herbs, no airfreight',
      [Language.NL]: 'Lokale boerderijen binnen 30 km, geplukte kruiden, geen vliegproducten',
      [Language.DE]: 'Lokale Höfe in 30 km Umkreis, gesammelte Kräuter, keine Flugware',
    },
    credentials: {
      [Language.EN]: 'Le Cordon Bleu Amsterdam · Former sous chef, De Kas',
      [Language.NL]: 'Le Cordon Bleu Amsterdam · Voormalig sous-chef, De Kas',
      [Language.DE]: 'Le Cordon Bleu Amsterdam · Ehemaliger Sous-Chef, De Kas',
    },
    press: {
      [Language.EN]: 'Featured in Bon Appétit NL, 2024',
      [Language.NL]: 'Gepubliceerd in Bon Appétit NL, 2024',
      [Language.DE]: 'Veröffentlicht in Bon Appétit NL, 2024',
    },
  },
  pastRetreats: [
    { name: 'Stillpoint', url: 'https://example.com/stillpoint' },
    { name: 'De Stilte', url: 'https://example.com/de-stilte' },
    { name: 'Bos & Lucht', url: 'https://example.com/bos-en-lucht' },
    { name: 'Yogagarden NL', url: 'https://example.com/yogagarden' },
  ],
}
```

- [ ] **Step 4: Wire the chef into the registry**

Modify `src/data/chefs/index.ts` — uncomment / add the import and array entry:

```ts
import { ChefStatus } from '@/constants/chef'
import type { Chef } from '@/types'

import { LIESBETH_VAN_DER_VELDEN_CHEF } from './liesbeth-van-der-velden'

export const ALL_CHEFS: readonly Chef[] = [
  LIESBETH_VAN_DER_VELDEN_CHEF,
] as const
```

(Leave `CHEFS_BY_SLUG`, `PUBLISHED_CHEFS`, `getChefsForEnv`, `getChefBySlug` unchanged.)

- [ ] **Step 5: Verify tests + lint**

Run: `npm test -- src/data/chefs/`
Expected: PASS, 6 tests.

Run: `npm run lint`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/data/chefs/liesbeth-van-der-velden.ts src/data/chefs/index.ts src/data/imageAltText.ts public/images/chefs/liesbeth-van-der-velden/
git commit -m "feat(chefs): add Liesbeth van der Velden as draft fixture chef"
```

---

# Phase 4 — Server action

## Task 8: `sendChefInquiry` server action — happy path

**Files:**
- Create: `src/actions/chef/sendChefInquiry.ts`
- Create: `src/actions/chef/sendChefInquiry.test.ts`

- [ ] **Step 1: Inspect the existing email service**

Run: `grep -n "ServerClient\|new postmark\|sendEmail" src/services/email.ts | head -20`
Note how the existing `sendEmail` instantiates the Postmark client and reads `POSTMARKAPP_API_TOKEN`, `POSTMARK_SENDER_EMAIL`, `POSTMARK_ADMIN_EMAIL`. The new helpers reuse the same client.

- [ ] **Step 2: Add `sendChefInquiryEmails` to `services/email.ts`**

Append to `src/services/email.ts`:

```ts
import type { Chef, Language } from '@/types'

export type ChefInquiryEmailInput = {
  chef: Chef
  visitorName: string
  visitorEmail: string
  dates: string
  groupSize: number
  location: string
  dietary: string
  message: string
  visitorLocale: Language
  chefDetailUrl: string
}

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

const buildChefEmailHtml = (input: ChefInquiryEmailInput): string => {
  const dietaryLine = input.dietary ? escapeHtml(input.dietary) : '—'
  return `
    <p>You have a new retreat inquiry via your MakersBarn directory page.</p>
    <table style="border-collapse:collapse">
      <tr><td><strong>Name:</strong></td><td>${escapeHtml(input.visitorName)}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${escapeHtml(input.visitorEmail)}</td></tr>
      <tr><td><strong>Group size:</strong></td><td>${input.groupSize}</td></tr>
      <tr><td><strong>Dates:</strong></td><td>${escapeHtml(input.dates)}</td></tr>
      <tr><td><strong>Location:</strong></td><td>${escapeHtml(input.location)}</td></tr>
      <tr><td><strong>Dietary:</strong></td><td>${dietaryLine}</td></tr>
    </table>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(input.message)}</pre>
    <hr />
    <p style="font-size:12px;color:#666">
      This inquiry came via <a href="${input.chefDetailUrl}">${input.chefDetailUrl}</a>.
      Reply directly to ${escapeHtml(input.visitorEmail)} to take the conversation off-platform.
      A copy was sent to MakersBarn for our records.
    </p>
  `.trim()
}

const buildVisitorEmailHtml = (input: ChefInquiryEmailInput): string => `
  <p>Hi ${escapeHtml(input.visitorName)},</p>
  <p>Thanks for reaching out via MakersBarn — your inquiry has been forwarded to ${escapeHtml(input.chef.name)}.</p>
  <p>${escapeHtml(input.chef.name)} usually responds within 2–3 days. If you don't hear back, just reply to this email and we'll follow up on your behalf.</p>
  <p>— The MakersBarn team</p>
`.trim()

export async function sendChefInquiryEmails(
  input: ChefInquiryEmailInput
): Promise<{ success: boolean; error?: string }> {
  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const sender = process.env.POSTMARK_SENDER_EMAIL
  const adminEmail = process.env.POSTMARK_ADMIN_EMAIL

  if (!apiToken || !sender || !adminEmail) {
    return { success: false, error: 'missing_postmark_config' }
  }

  // Reuse the same ServerClient used by sendEmail. If the existing module
  // already exports a singleton client, import that instead of constructing
  // a new one here.
  const { ServerClient } = await import('postmark')
  const client = new ServerClient(apiToken)

  try {
    await client.sendEmail({
      From: sender,
      To: input.chef.inquiryEmail,
      Cc: adminEmail,
      ReplyTo: input.visitorEmail,
      Subject: `New retreat inquiry from ${input.visitorName} via MakersBarn`,
      HtmlBody: buildChefEmailHtml(input),
      MessageStream: 'outbound',
    })

    await client.sendEmail({
      From: sender,
      To: input.visitorEmail,
      Subject: `Your inquiry to ${input.chef.name} is on its way`,
      HtmlBody: buildVisitorEmailHtml(input),
      MessageStream: 'outbound',
    })

    return { success: true }
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : 'postmark_send_failed' }
  }
}
```

If `services/email.ts` already exports a Postmark `ServerClient` singleton, import that instead of `new ServerClient(apiToken)`. Either way, the function signature and return shape stay as above.

- [ ] **Step 3: Write the failing test**

Create `src/actions/chef/sendChefInquiry.test.ts`:

```ts
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Language } from '@/types'

vi.mock('@/services/email', () => ({
  sendChefInquiryEmails: vi.fn(),
}))
vi.mock('@/services/slack', () => ({
  sendSlackMessage: vi.fn(),
  formatChefInquirySlackMessage: vi.fn().mockReturnValue('mocked-slack-text'),
  SlackChannel: { USER_CONTACTS: 'user-contacts' },
}))
vi.mock('@/lib', async () => {
  const actual = await vi.importActual<typeof import('@/lib')>('@/lib')
  return {
    ...actual,
    getClientIdentifier: vi.fn().mockResolvedValue('test-client-1'),
  }
})

import { sendChefInquiryEmails } from '@/services/email'
import { sendSlackMessage } from '@/services/slack'

import { sendChefInquiry } from './sendChefInquiry'

const buildFormData = (overrides: Record<string, string> = {}): FormData => {
  const fd = new FormData()
  fd.set('name', 'Anna Visser')
  fd.set('email', 'anna@example.com')
  fd.set('dates', '5–9 May 2026')
  fd.set('groupSize', '12')
  fd.set('location', 'MakersBarn, Overijssel')
  fd.set('dietary', '3 vegan, 1 gluten-free')
  fd.set(
    'message',
    'Hi Liesbeth, looking for a chef for our 5-day yoga retreat in May. Group of 12.'
  )
  fd.set('honeypot', '')
  fd.set('consent', 'true')
  fd.set('locale', Language.EN)
  for (const [k, v] of Object.entries(overrides)) {
    fd.set(k, v)
  }
  return fd
}

describe('sendChefInquiry', () => {
  beforeEach(() => {
    vi.mocked(sendChefInquiryEmails).mockResolvedValue({ success: true })
    vi.mocked(sendSlackMessage).mockResolvedValue({ success: true })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('happy path: sends email to chef and notifies Slack', async () => {
    const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
    expect(result.success).toBe(true)
    expect(sendChefInquiryEmails).toHaveBeenCalledOnce()
    expect(sendSlackMessage).toHaveBeenCalledOnce()
  })
})
```

- [ ] **Step 4: Verify test fails**

Run: `npm test -- src/actions/chef/sendChefInquiry.test.ts`
Expected: FAIL with "Cannot find module './sendChefInquiry'".

- [ ] **Step 5: Implement the server action**

Create `src/actions/chef/sendChefInquiry.ts`:

```ts
'use server'

import { CHEF_INQUIRY_RATE_LIMIT } from '@/constants/chef'
import { getChefBySlug } from '@/data/chefs'
import {
  RateLimiter,
  chefInquirySchema,
  createLogger,
  getClientIdentifier,
  maskEmail,
  sanitizePlainText,
} from '@/lib'
import { CHEF_INQUIRY_LIMITS } from '@/constants/chef'
import { sendChefInquiryEmails } from '@/services/email'
import {
  SlackChannel,
  formatChefInquirySlackMessage,
  sendSlackMessage,
} from '@/services/slack'
import { chefDetailPath } from '@/lib/routing'
import { Language } from '@/types'

const logger = createLogger('chef-inquiry-action')

const rateLimiter = new RateLimiter({
  windowMs: CHEF_INQUIRY_RATE_LIMIT.WINDOW_MS,
  maxRequests: CHEF_INQUIRY_RATE_LIMIT.MAX_REQUESTS,
})

export type SendChefInquiryResult = {
  success: boolean
  message?: string
  errors?: Record<string, string>
}

export async function sendChefInquiry(
  chefSlug: string,
  formData: FormData
): Promise<SendChefInquiryResult> {
  const clientId = await getClientIdentifier()

  if (!rateLimiter.isAllowed(clientId)) {
    logger.warn('Rate limit exceeded', { clientId, chefSlug })
    return { success: false, message: 'rate_limited' }
  }

  const chef = getChefBySlug(chefSlug)
  if (!chef) {
    // Either unknown slug, or draft-in-prod. Same response either way — defense in depth.
    logger.warn('Chef not found or draft-in-prod', { clientId, chefSlug })
    return { success: false, message: 'chef_not_found' }
  }

  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    dates: formData.get('dates'),
    groupSize: Number(formData.get('groupSize')),
    location: formData.get('location'),
    dietary: formData.get('dietary') ?? '',
    message: formData.get('message'),
    honeypot: formData.get('honeypot') ?? '',
    consent: formData.get('consent') === 'true',
  }

  const parsed = chefInquirySchema.safeParse(raw)
  if (!parsed.success) {
    const errors = Object.fromEntries(
      parsed.error.issues.map((issue) => [issue.path.join('.'), issue.message])
    )
    return { success: false, message: 'validation', errors }
  }

  const data = parsed.data

  // Honeypot triggered: silent success — don't tell the bot.
  if (data.honeypot.length > 0) {
    logger.warn('Honeypot triggered, returning silent success', { clientId, chefSlug })
    return { success: true }
  }

  const visitorLocaleRaw = formData.get('locale')
  const visitorLocale: Language =
    visitorLocaleRaw === Language.NL || visitorLocaleRaw === Language.DE
      ? (visitorLocaleRaw as Language)
      : Language.EN

  // Sanitize free-text fields one more time before they hit external services.
  const safe = {
    name: sanitizePlainText(data.name, CHEF_INQUIRY_LIMITS.NAME_MAX),
    dates: sanitizePlainText(data.dates, CHEF_INQUIRY_LIMITS.DATES_MAX),
    location: sanitizePlainText(data.location, CHEF_INQUIRY_LIMITS.LOCATION_MAX),
    dietary: sanitizePlainText(data.dietary, CHEF_INQUIRY_LIMITS.DIETARY_MAX),
    message: sanitizePlainText(data.message, CHEF_INQUIRY_LIMITS.MESSAGE_MAX),
  }

  const chefDetailUrl = `https://makersbarn.nl${chefDetailPath(chef.slug, visitorLocale)}`
  const maskedEmail = maskEmail(data.email)
  logger.info('Chef inquiry submission started', { chefSlug, visitorEmail: maskedEmail })

  // Slack notification (secondary — failures don't block the email).
  try {
    const slackResult = await sendSlackMessage({
      channel: SlackChannel.USER_CONTACTS,
      message: formatChefInquirySlackMessage({
        chefName: chef.name,
        visitorName: safe.name,
        visitorEmail: maskedEmail,
        groupSize: data.groupSize,
        dates: safe.dates,
        location: safe.location,
      }),
    })
    if (!slackResult.success) {
      logger.warn('Slack notification failed, continuing with email', {
        chefSlug,
        slackError: slackResult.error,
      })
    }
  } catch (err) {
    logger.warn('Slack notification threw, continuing with email', { chefSlug, error: err })
  }

  // Email sends (primary). sendChefInquiryEmails returns success only when both
  // chef-facing and visitor-confirmation emails succeed.
  try {
    const emailResult = await sendChefInquiryEmails({
      chef,
      visitorName: safe.name,
      visitorEmail: data.email,
      dates: safe.dates,
      groupSize: data.groupSize,
      location: safe.location,
      dietary: safe.dietary,
      message: safe.message,
      visitorLocale,
      chefDetailUrl,
    })
    if (!emailResult.success) {
      logger.error('Chef inquiry email send failed', { chefSlug, visitorEmail: maskedEmail }, emailResult.error)
      return { success: false, message: 'email_failed' }
    }
  } catch (err) {
    logger.error('Chef inquiry email send threw', { chefSlug, visitorEmail: maskedEmail }, err)
    return { success: false, message: 'unexpected_error' }
  }

  logger.info('Chef inquiry submission completed', { chefSlug, visitorEmail: maskedEmail })
  return { success: true }
}
```

If `chefInquirySchema`, `RateLimiter`, `getClientIdentifier`, `maskEmail`, `sanitizePlainText`, or `createLogger` are not yet re-exported from the top-level `@/lib` barrel, import them directly from their source modules (`@/lib/chef/inquirySchema`, `@/lib/security`, `@/lib/request`, `@/lib/privacy`, `@/lib/security`, `@/lib/logger`).

- [ ] **Step 6: Add the Slack formatter**

Modify `src/services/slack.ts` — append:

```ts
export function formatChefInquirySlackMessage(input: {
  chefName: string
  visitorName: string
  visitorEmail: string
  groupSize: number
  dates: string
  location: string
}): string {
  return [
    `*New chef inquiry* — ${input.chefName}`,
    `From: ${input.visitorName} <${input.visitorEmail}>`,
    `Group: ${input.groupSize} guests · ${input.dates}`,
    `Where: ${input.location}`,
  ].join('\n')
}
```

(The Postmark email helper `sendChefInquiryEmails` was already added in Step 2.)

- [ ] **Step 7: Verify happy-path test passes**

Run: `npm test -- src/actions/chef/sendChefInquiry.test.ts`
Expected: PASS, 1 test.

- [ ] **Step 8: Commit**

```bash
git add src/actions/chef/sendChefInquiry.ts src/actions/chef/sendChefInquiry.test.ts src/services/email.ts src/services/slack.ts
git commit -m "feat(chefs): add sendChefInquiry server action with email + Slack integration"
```

---

## Task 9: Server action — rate-limit, draft-in-prod, honeypot, validation, email-failure tests

**Files:**
- Modify: `src/actions/chef/sendChefInquiry.test.ts`

- [ ] **Step 1: Add the additional tests**

Append to the existing `describe('sendChefInquiry', ...)` block:

```ts
it('rate-limit hit: returns rate_limited and does not call Postmark or Slack', async () => {
  // 5 succeeds, 6th hits the limit (CHEF_INQUIRY_RATE_LIMIT.MAX_REQUESTS = 5)
  for (let i = 0; i < 5; i++) {
    await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
  }
  vi.mocked(sendChefInquiryEmails).mockClear()
  vi.mocked(sendSlackMessage).mockClear()

  const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
  expect(result.success).toBe(false)
  expect(result.message).toBe('rate_limited')
  expect(sendChefInquiryEmails).not.toHaveBeenCalled()
  expect(sendSlackMessage).not.toHaveBeenCalled()
})

it('unknown chef slug: returns chef_not_found and does not call Postmark or Slack', async () => {
  const result = await sendChefInquiry('definitely-not-a-real-chef', buildFormData())
  expect(result.success).toBe(false)
  expect(result.message).toBe('chef_not_found')
  expect(sendChefInquiryEmails).not.toHaveBeenCalled()
  expect(sendSlackMessage).not.toHaveBeenCalled()
})

it('draft chef in production: returns chef_not_found', async () => {
  const ORIGINAL = process.env.VERCEL_ENV
  process.env.VERCEL_ENV = 'production'
  try {
    // Liesbeth is DRAFT — getChefBySlug should return undefined in prod.
    // Note: rate limit must not be hit yet for this assertion to be meaningful,
    // so use a different chef slug here if possible, or run the test in isolation.
    const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
    expect(result.success).toBe(false)
    expect(result.message).toBe('chef_not_found')
  } finally {
    process.env.VERCEL_ENV = ORIGINAL
  }
})

it('honeypot triggered: returns silent success and does not call Postmark or Slack', async () => {
  const result = await sendChefInquiry(
    'liesbeth-van-der-velden',
    buildFormData({ honeypot: 'spammer' })
  )
  expect(result.success).toBe(true)
  expect(sendChefInquiryEmails).not.toHaveBeenCalled()
  expect(sendSlackMessage).not.toHaveBeenCalled()
})

it('validation error: returns errors map and does not call Postmark or Slack', async () => {
  const result = await sendChefInquiry(
    'liesbeth-van-der-velden',
    buildFormData({ email: 'not-an-email' })
  )
  expect(result.success).toBe(false)
  expect(result.message).toBe('validation')
  expect(result.errors).toBeDefined()
  expect(result.errors?.email).toBeDefined()
  expect(sendChefInquiryEmails).not.toHaveBeenCalled()
  expect(sendSlackMessage).not.toHaveBeenCalled()
})

it('Postmark failure: returns email_failed but Slack was still notified', async () => {
  vi.mocked(sendChefInquiryEmails).mockResolvedValueOnce({
    success: false,
    error: 'postmark exploded',
  })
  const result = await sendChefInquiry('liesbeth-van-der-velden', buildFormData())
  expect(result.success).toBe(false)
  expect(result.message).toBe('email_failed')
  // Slack was already called BEFORE the email attempt
  expect(sendSlackMessage).toHaveBeenCalledOnce()
})
```

- [ ] **Step 2: Reset rate limiter between tests**

The rate limiter is a module-scoped singleton, so its state leaks across tests. Add a `beforeEach` reset by re-importing the module:

Replace the existing `beforeEach` with:

```ts
beforeEach(async () => {
  vi.resetModules()
  vi.mocked(sendChefInquiryEmails).mockResolvedValue({ success: true })
  vi.mocked(sendSlackMessage).mockResolvedValue({ success: true })
})
```

If `vi.resetModules()` causes problems with the `vi.mock` declarations at the top of the file, instead expose a `__resetRateLimiter` helper from `sendChefInquiry.ts` (only when `process.env.NODE_ENV === 'test'`) and call it in `beforeEach`.

- [ ] **Step 3: Verify all tests pass**

Run: `npm test -- src/actions/chef/sendChefInquiry.test.ts`
Expected: PASS, 7 tests.

- [ ] **Step 4: Commit**

```bash
git add src/actions/chef/sendChefInquiry.test.ts
git commit -m "test(chefs): cover rate-limit, draft-in-prod, honeypot, validation, email-failure paths"
```

---

# Phase 5 — i18n chrome

## Task 10: Add `chef` namespace to dictionaries (en, nl, de)

**Files:**
- Modify: `src/i18n/dictionaries/en.ts`
- Modify: `src/i18n/dictionaries/nl.ts`
- Modify: `src/i18n/dictionaries/de.ts`
- Modify: `src/i18n/types.ts`

- [ ] **Step 1: Inspect existing dictionary structure**

Run: `head -30 src/i18n/dictionaries/en.ts && echo '---' && head -30 src/i18n/types.ts`
Confirm whether dictionaries are flat objects, nested namespaces, or function-returning. Match the existing style exactly.

- [ ] **Step 2: Extend `Dictionary` type in `src/i18n/types.ts`**

Add a `chef` namespace. The shape below assumes nested object dictionaries; adapt to the actual existing pattern:

```ts
export type ChefDictionary = {
  backLink: string
  draftBadge: string
  cta: { sendInquiry: string }                          // {name} interpolation
  statStrip: {
    rightFor: string
    cooks: string
    accommodates: string
    dayRate: string
    dayRateUnit: string
    tierLabel: { budget: string; standard: string; premium: string }
  }
  headerMeta: { guests: string; yearsCooking: string } // {min}/{max}, {years}
  about: string
  signatureDishes: string
  signatureDishItemPrefix: string                       // {n}
  testimonials: string
  sidebar: {
    operatesIn: string
    travelsNationwide: string
    travelsRegional: string
    strongestIn: string                                 // {regions}
    homeBase: string
    atAGlance: string
    atAGlanceLabels: {
      groupSize: string
      languages: string
      experience: string
      sourcing: string
      credentials: string
      press: string
    }
    pastRetreats: string
  }
  enums: {
    retreatType: Record<string, string>                 // keyed by RetreatType enum value
    dietary: Record<string, string>                     // keyed by DietaryCapability enum value
    region: Record<string, string>                      // keyed by NlRegion enum value
  }
  inquiry: {
    modalTitle: string                                  // {name}
    closeAriaLabel: string
    field: {
      name: string
      email: string
      dates: string
      groupSize: string
      location: string
      dietary: string
      message: string
    }
    consent: string                                     // {name}
    submit: string
    submitting: string
    success: { title: string; body: string }            // {name}, {email}
    errors: {
      rate_limited: string
      validation: string
      chef_not_found: string
      email_failed: string
      unexpected_error: string
    }
  }
}

// Then in the main Dictionary type, add:
//   chef: ChefDictionary
```

- [ ] **Step 3: Add EN values to `src/i18n/dictionaries/en.ts`**

Add a `chef` key on the dictionary object. Use the spec §7.2 values:

```ts
chef: {
  backLink: '← Discover more chefs',
  draftBadge: 'DRAFT — preview only',
  cta: { sendInquiry: 'Send {name} an inquiry' },
  statStrip: {
    rightFor: 'RIGHT FOR',
    cooks: 'COOKS',
    accommodates: 'ACCOMMODATES',
    dayRate: 'DAY RATE',
    dayRateUnit: 'pp / day',
    tierLabel: { budget: 'Budget', standard: 'Standard', premium: 'Premium' },
  },
  headerMeta: {
    guests: '{min} – {max} guests',
    yearsCooking: '{years} years cooking',
  },
  about: 'ABOUT',
  signatureDishes: 'SIGNATURE DISHES',
  signatureDishItemPrefix: 'NO. {n}',
  testimonials: 'WHAT ORGANIZERS SAY',
  sidebar: {
    operatesIn: 'OPERATES IN',
    travelsNationwide: 'Travels nationwide',
    travelsRegional: 'Travels regionally',
    strongestIn: 'Strongest in {regions}',
    homeBase: 'Home base',
    atAGlance: 'AT A GLANCE',
    atAGlanceLabels: {
      groupSize: 'Group size',
      languages: 'Languages',
      experience: 'Experience',
      sourcing: 'Sourcing',
      credentials: 'Credentials',
      press: 'Press',
    },
    pastRetreats: 'PAST RETREATS',
  },
  enums: {
    retreatType: {
      yoga: 'Yoga retreats',
      wellness: 'Wellness',
      creative: 'Creative gatherings',
      corporate: 'Corporate offsites',
      breathwork: 'Breathwork',
      meditation: 'Meditation',
      writing: 'Writing retreats',
      photography: 'Photography retreats',
    },
    dietary: {
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      gluten_free: 'Gluten-free',
      dairy_free: 'Dairy-free',
      nut_free: 'Nut-free',
      kosher: 'Kosher',
      halal: 'Halal',
      allergy_aware: 'Allergy-aware',
      raw: 'Raw',
      keto: 'Keto',
    },
    region: {
      drenthe: 'Drenthe',
      flevoland: 'Flevoland',
      friesland: 'Friesland',
      gelderland: 'Gelderland',
      groningen: 'Groningen',
      limburg: 'Limburg',
      noord_brabant: 'Noord-Brabant',
      noord_holland: 'Noord-Holland',
      overijssel: 'Overijssel',
      utrecht: 'Utrecht',
      zeeland: 'Zeeland',
      zuid_holland: 'Zuid-Holland',
    },
  },
  inquiry: {
    modalTitle: 'Send {name} an inquiry',
    closeAriaLabel: 'Close inquiry form',
    field: {
      name: 'Your name',
      email: 'Email',
      dates: 'Retreat dates (rough is fine)',
      groupSize: 'Group size',
      location: 'Where will the retreat happen?',
      dietary: 'Dietary needs / preferences (optional)',
      message: 'Tell {name} about your retreat',
    },
    consent: 'I consent to MakersBarn forwarding this inquiry to {name}.',
    submit: 'Send inquiry',
    submitting: 'Sending…',
    success: {
      title: 'Your inquiry is on its way to {name}',
      body: '{name} usually responds within 2–3 days. We sent you a confirmation at {email}.',
    },
    errors: {
      rate_limited: 'Too many requests. Please try again in a few minutes.',
      validation: 'Please check the highlighted fields and try again.',
      chef_not_found: 'This chef is not available right now. Please try again later.',
      email_failed: "We couldn't deliver your inquiry. Please try again or email us directly.",
      unexpected_error: 'Something went wrong. Please try again.',
    },
  },
},
```

- [ ] **Step 4: Add NL values to `src/i18n/dictionaries/nl.ts`**

Same structure, Dutch translations. (Use a Dutch native speaker if available; the strings below are starting points to refine during outreach.)

```ts
chef: {
  backLink: '← Ontdek meer chefs',
  draftBadge: 'CONCEPT — alleen voor voorbeeld',
  cta: { sendInquiry: 'Stuur {name} een aanvraag' },
  statStrip: {
    rightFor: 'GESCHIKT VOOR',
    cooks: 'KOOKT',
    accommodates: 'GESCHIKT BIJ',
    dayRate: 'DAGTARIEF',
    dayRateUnit: 'pp / dag',
    tierLabel: { budget: 'Budget', standard: 'Standaard', premium: 'Premium' },
  },
  headerMeta: {
    guests: '{min} – {max} gasten',
    yearsCooking: '{years} jaar kookervaring',
  },
  about: 'OVER',
  signatureDishes: 'SIGNATUURGERECHTEN',
  signatureDishItemPrefix: 'NR. {n}',
  testimonials: 'WAT ORGANISATOREN ZEGGEN',
  sidebar: {
    operatesIn: 'WERKT IN',
    travelsNationwide: 'Reist door heel Nederland',
    travelsRegional: 'Werkt regionaal',
    strongestIn: 'Sterkst in {regions}',
    homeBase: 'Standplaats',
    atAGlance: 'IN HET KORT',
    atAGlanceLabels: {
      groupSize: 'Groepsgrootte',
      languages: 'Talen',
      experience: 'Ervaring',
      sourcing: 'Inkoop',
      credentials: 'Kwalificaties',
      press: 'Pers',
    },
    pastRetreats: 'EERDERE RETRAITES',
  },
  enums: {
    retreatType: {
      yoga: 'Yoga-retraites',
      wellness: 'Wellness',
      creative: 'Creatieve bijeenkomsten',
      corporate: 'Bedrijfsuitjes',
      breathwork: 'Ademwerk',
      meditation: 'Meditatie',
      writing: 'Schrijfretraites',
      photography: 'Fotografie-retraites',
    },
    dietary: {
      vegan: 'Veganistisch',
      vegetarian: 'Vegetarisch',
      gluten_free: 'Glutenvrij',
      dairy_free: 'Lactosevrij',
      nut_free: 'Notenvrij',
      kosher: 'Koosjer',
      halal: 'Halal',
      allergy_aware: 'Allergie-bewust',
      raw: 'Rauwkost',
      keto: 'Keto',
    },
    region: {
      drenthe: 'Drenthe',
      flevoland: 'Flevoland',
      friesland: 'Friesland',
      gelderland: 'Gelderland',
      groningen: 'Groningen',
      limburg: 'Limburg',
      noord_brabant: 'Noord-Brabant',
      noord_holland: 'Noord-Holland',
      overijssel: 'Overijssel',
      utrecht: 'Utrecht',
      zeeland: 'Zeeland',
      zuid_holland: 'Zuid-Holland',
    },
  },
  inquiry: {
    modalTitle: 'Stuur {name} een aanvraag',
    closeAriaLabel: 'Sluit aanvraagformulier',
    field: {
      name: 'Je naam',
      email: 'E-mail',
      dates: 'Retraite-data (een schatting is genoeg)',
      groupSize: 'Groepsgrootte',
      location: 'Waar vindt de retraite plaats?',
      dietary: 'Dieetwensen / voorkeuren (optioneel)',
      message: 'Vertel {name} over je retraite',
    },
    consent: 'Ik geef toestemming dat MakersBarn deze aanvraag doorstuurt naar {name}.',
    submit: 'Aanvraag versturen',
    submitting: 'Versturen…',
    success: {
      title: 'Je aanvraag is onderweg naar {name}',
      body: '{name} reageert meestal binnen 2–3 dagen. We hebben je een bevestiging gestuurd op {email}.',
    },
    errors: {
      rate_limited: 'Te veel aanvragen. Probeer het over een paar minuten opnieuw.',
      validation: 'Controleer de gemarkeerde velden en probeer het opnieuw.',
      chef_not_found: 'Deze chef is op dit moment niet beschikbaar. Probeer het later opnieuw.',
      email_failed: 'We konden je aanvraag niet bezorgen. Probeer het opnieuw of mail ons rechtstreeks.',
      unexpected_error: 'Er ging iets mis. Probeer het opnieuw.',
    },
  },
},
```

- [ ] **Step 5: Add DE values to `src/i18n/dictionaries/de.ts`**

```ts
chef: {
  backLink: '← Weitere Chefs entdecken',
  draftBadge: 'ENTWURF — nur Vorschau',
  cta: { sendInquiry: 'Anfrage an {name} senden' },
  statStrip: {
    rightFor: 'GEEIGNET FÜR',
    cooks: 'KOCHT',
    accommodates: 'BERÜCKSICHTIGT',
    dayRate: 'TAGESSATZ',
    dayRateUnit: 'p.P. / Tag',
    tierLabel: { budget: 'Budget', standard: 'Standard', premium: 'Premium' },
  },
  headerMeta: {
    guests: '{min} – {max} Gäste',
    yearsCooking: '{years} Jahre Kocherfahrung',
  },
  about: 'ÜBER',
  signatureDishes: 'SIGNATURGERICHTE',
  signatureDishItemPrefix: 'NR. {n}',
  testimonials: 'WAS ORGANISATOREN SAGEN',
  sidebar: {
    operatesIn: 'TÄTIG IN',
    travelsNationwide: 'Reist landesweit',
    travelsRegional: 'Tätig regional',
    strongestIn: 'Am stärksten in {regions}',
    homeBase: 'Standort',
    atAGlance: 'AUF EINEN BLICK',
    atAGlanceLabels: {
      groupSize: 'Gruppengröße',
      languages: 'Sprachen',
      experience: 'Erfahrung',
      sourcing: 'Bezug',
      credentials: 'Qualifikationen',
      press: 'Presse',
    },
    pastRetreats: 'FRÜHERE RETREATS',
  },
  enums: {
    retreatType: {
      yoga: 'Yoga-Retreats',
      wellness: 'Wellness',
      creative: 'Kreative Treffen',
      corporate: 'Firmen-Offsites',
      breathwork: 'Atemarbeit',
      meditation: 'Meditation',
      writing: 'Schreib-Retreats',
      photography: 'Fotografie-Retreats',
    },
    dietary: {
      vegan: 'Vegan',
      vegetarian: 'Vegetarisch',
      gluten_free: 'Glutenfrei',
      dairy_free: 'Laktosefrei',
      nut_free: 'Nussfrei',
      kosher: 'Koscher',
      halal: 'Halal',
      allergy_aware: 'Allergiebewusst',
      raw: 'Rohkost',
      keto: 'Keto',
    },
    region: {
      drenthe: 'Drenthe',
      flevoland: 'Flevoland',
      friesland: 'Friesland',
      gelderland: 'Gelderland',
      groningen: 'Groningen',
      limburg: 'Limburg',
      noord_brabant: 'Noord-Brabant',
      noord_holland: 'Noord-Holland',
      overijssel: 'Overijssel',
      utrecht: 'Utrecht',
      zeeland: 'Zeeland',
      zuid_holland: 'Zuid-Holland',
    },
  },
  inquiry: {
    modalTitle: 'Anfrage an {name} senden',
    closeAriaLabel: 'Anfrageformular schließen',
    field: {
      name: 'Dein Name',
      email: 'E-Mail',
      dates: 'Retreat-Daten (eine grobe Schätzung reicht)',
      groupSize: 'Gruppengröße',
      location: 'Wo findet das Retreat statt?',
      dietary: 'Ernährungsbedürfnisse / Vorlieben (optional)',
      message: 'Erzähl {name} von deinem Retreat',
    },
    consent: 'Ich willige ein, dass MakersBarn diese Anfrage an {name} weiterleitet.',
    submit: 'Anfrage senden',
    submitting: 'Wird gesendet…',
    success: {
      title: 'Deine Anfrage ist auf dem Weg zu {name}',
      body: '{name} antwortet in der Regel innerhalb von 2–3 Tagen. Wir haben dir eine Bestätigung an {email} gesendet.',
    },
    errors: {
      rate_limited: 'Zu viele Anfragen. Bitte versuche es in ein paar Minuten erneut.',
      validation: 'Bitte überprüfe die markierten Felder und versuche es erneut.',
      chef_not_found: 'Dieser Chef ist gerade nicht verfügbar. Bitte versuche es später erneut.',
      email_failed: 'Wir konnten deine Anfrage nicht zustellen. Bitte versuche es erneut oder schreib uns direkt.',
      unexpected_error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    },
  },
},
```

- [ ] **Step 6: Verify TypeScript compiles**

Run: `npm run lint`
Expected: PASS. If the dictionary type strict-checks the keys, verify all three locales have identical key shapes.

- [ ] **Step 7: Commit**

```bash
git add src/i18n/types.ts src/i18n/dictionaries/en.ts src/i18n/dictionaries/nl.ts src/i18n/dictionaries/de.ts
git commit -m "feat(chefs): add chef chrome translations for EN/NL/DE"
```

---

# Phase 6 — Server components

## Task 11: NL outline SVG asset + DraftBadge component

**Files:**
- Create: `public/images/chefs/_assets/nl-outline.svg`
- Create: `src/components/server/ChefDetailPage/DraftBadge.tsx`
- Create: `src/components/server/ChefDetailPage/DraftBadge.module.css`

- [ ] **Step 1: Create the NL outline SVG**

Create `public/images/chefs/_assets/nl-outline.svg` — a simple, decorative outline of the Netherlands. ViewBox `0 0 100 120`. Hand-drawn-looking stroke, no fill, suitable for a small sidebar map. Source from a free SVG (e.g. a simplified GeoJSON-derived path) and minimize. The exact path data is large; the goal is just an outline silhouette. If you don't have one ready, use this minimal placeholder (rough rectangle) and replace later:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" fill="none" stroke="currentColor" stroke-width="0.5">
  <path d="M30,10 L75,15 L80,30 L85,55 L75,85 L60,110 L40,108 L25,90 L20,60 L18,35 Z" />
</svg>
```

Replace with a real outline before publishing the first chef.

- [ ] **Step 2: Create `DraftBadge.tsx`**

```tsx
// src/components/server/ChefDetailPage/DraftBadge.tsx

import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './DraftBadge.module.css'

type Props = { lang: Language }

export async function DraftBadge({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  return (
    <div role="status" aria-live="polite" className={styles.badge}>
      {dict.chef.draftBadge}
    </div>
  )
}
```

If `getServerTranslations` lives at a different path (e.g. `@/i18n/getServerTranslations`), update the import.

- [ ] **Step 3: Create `DraftBadge.module.css`**

```css
.badge {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fef3c7;
  color: #92400e;
  text-align: center;
  padding: 0.5rem 1rem;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: var(--letter-spacing-wide);
  border-bottom: 1px solid #fbbf24;
}
```

- [ ] **Step 4: Commit**

```bash
git add public/images/chefs/_assets/nl-outline.svg src/components/server/ChefDetailPage/DraftBadge.tsx src/components/server/ChefDetailPage/DraftBadge.module.css
git commit -m "feat(chefs): add NL outline SVG and DraftBadge component"
```

---

## Task 12: `ChefStructuredData` JSON-LD component + test

**Files:**
- Create: `src/components/server/ChefDetailPage/ChefStructuredData.tsx`
- Create: `src/components/server/ChefDetailPage/ChefStructuredData.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/server/ChefDetailPage/ChefStructuredData.test.tsx`:

```tsx
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'

import { ChefStructuredData } from './ChefStructuredData'

describe('ChefStructuredData', () => {
  it('emits valid JSON-LD with @type Person and chef name', () => {
    const { container } = render(<ChefStructuredData chef={LIESBETH_VAN_DER_VELDEN_CHEF} lang={Language.EN} />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
    const json = JSON.parse(script!.textContent ?? '{}')
    expect(json['@type']).toBe('Person')
    expect(json.name).toBe(LIESBETH_VAN_DER_VELDEN_CHEF.name)
    expect(json.jobTitle).toBe('Retreat Chef')
  })

  it('includes makesOffer with areaServed matching servesRegions count', () => {
    const { container } = render(<ChefStructuredData chef={LIESBETH_VAN_DER_VELDEN_CHEF} lang={Language.EN} />)
    const json = JSON.parse(container.querySelector('script[type="application/ld+json"]')!.textContent ?? '{}')
    expect(json.makesOffer.areaServed).toHaveLength(LIESBETH_VAN_DER_VELDEN_CHEF.servesRegions.length)
    expect(json.makesOffer.priceCurrency).toBe('EUR')
    expect(json.makesOffer.price).toBe(LIESBETH_VAN_DER_VELDEN_CHEF.dayRate.amountEur)
  })

  it('includes knowsLanguage from languagesSpoken', () => {
    const { container } = render(<ChefStructuredData chef={LIESBETH_VAN_DER_VELDEN_CHEF} lang={Language.EN} />)
    const json = JSON.parse(container.querySelector('script[type="application/ld+json"]')!.textContent ?? '{}')
    expect(json.knowsLanguage).toEqual(LIESBETH_VAN_DER_VELDEN_CHEF.languagesSpoken)
  })
})
```

- [ ] **Step 2: Verify test fails**

Run: `npm test -- src/components/server/ChefDetailPage/ChefStructuredData.test.tsx`
Expected: FAIL with "Cannot find module './ChefStructuredData'".

- [ ] **Step 3: Implement `ChefStructuredData`**

Create `src/components/server/ChefDetailPage/ChefStructuredData.tsx`:

```tsx
// src/components/server/ChefDetailPage/ChefStructuredData.tsx

import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import { getServerTranslations } from '@/i18n/server'

type Props = { chef: Chef; lang: Language }

export async function ChefStructuredData({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: chef.name,
    jobTitle: 'Retreat Chef',
    image: `https://makersbarn.nl${chef.gallery.hero.src}`,
    description: localize(chef.tagline, lang),
    knowsLanguage: chef.languagesSpoken,
    address: {
      '@type': 'PostalAddress',
      addressLocality: chef.homeBase.city,
      addressRegion: dict.chef.enums.region[chef.homeBase.region],
      addressCountry: 'NL',
    },
    makesOffer: {
      '@type': 'Offer',
      name: 'Retreat catering',
      priceCurrency: 'EUR',
      price: chef.dayRate.amountEur,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        unitText: chef.dayRate.unit.toUpperCase(),
      },
      areaServed: chef.servesRegions.map((region) => ({
        '@type': 'AdministrativeArea',
        name: dict.chef.enums.region[region],
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
```

- [ ] **Step 4: Verify tests pass**

Run: `npm test -- src/components/server/ChefDetailPage/ChefStructuredData.test.tsx`
Expected: PASS, 3 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ChefDetailPage/ChefStructuredData.tsx src/components/server/ChefDetailPage/ChefStructuredData.test.tsx
git commit -m "feat(chefs): add Person+Offer JSON-LD structured data component"
```

---

## Tasks 13–20: Server sub-components

The remaining server sub-components (`ChefHeader`, `ChefStatStrip`, `ChefAbout`, `ChefSignatureDishes`, `ChefTestimonials`, `ChefSidebar` + `ChefOperatesIn` + `ChefAtAGlance` + `ChefPastRetreats`) follow the same pattern. Each task:

1. Create `<Component>.tsx` (server component, async, takes `{ chef, lang }`).
2. Create `<Component>.module.css`.
3. Lint passes.
4. Commit.

### Task 13: `ChefHeader.tsx`

**Files:** Create `ChefHeader.tsx` and `ChefHeader.module.css`.

- [ ] **Step 1: Implement**

```tsx
// src/components/server/ChefDetailPage/ChefHeader.tsx

import Image from 'next/image'

import { getServerTranslations } from '@/i18n/server'
import { cn, localize } from '@/lib'
import { getImageAltText } from '@/data/imageAltText'
import type { Chef, Language } from '@/types'

import styles from './ChefHeader.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefHeader({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })

  const guestsLabel = dict.chef.headerMeta.guests
    .replace('{min}', String(chef.groupSize.min))
    .replace('{max}', String(chef.groupSize.max))

  const yearsLabel = dict.chef.headerMeta.yearsCooking.replace(
    '{years}',
    String(chef.yearsExperience)
  )

  const languagesLabel = listFormatter.format(
    chef.languagesSpoken.map((l) => dict.languages?.[l] ?? l)
  )

  const ctaLabel = dict.chef.cta.sendInquiry.replace('{name}', chef.name.split(' ')[0])
  const regionLabel = dict.chef.enums.region[chef.homeBase.region]
  const locationLine = `${chef.homeBase.city}, ${regionLabel}`

  return (
    <header className={styles.header}>
      <div className={styles.backLink} aria-disabled="true">
        {dict.chef.backLink}
      </div>
      <div className={styles.identity}>
        <Image
          src={chef.avatar.src}
          alt={getImageAltText(chef.avatar.altKey, lang)}
          width={120}
          height={120}
          className={styles.avatar}
          priority
        />
        <div className={styles.text}>
          <h1 className={styles.name}>{chef.name}</h1>
          <p className={styles.tagline}>{localize(chef.tagline, lang)}</p>
          <ul className={cn(styles.metaLine)} aria-label="Chef summary">
            <li>{locationLine}</li>
            <li>{guestsLabel}</li>
            <li>{languagesLabel}</li>
            <li>{yearsLabel}</li>
          </ul>
        </div>
      </div>
      <div className={styles.ctaGroup}>
        <a href="#chef-inquiry" className={styles.primaryCta}>
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Implement CSS**

```css
.header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  padding: 2rem 0 1.5rem;
}
.backLink {
  grid-column: 1 / -1;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  letter-spacing: var(--letter-spacing-wide);
}
.identity {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}
.avatar {
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.text { display: flex; flex-direction: column; gap: 0.25rem; }
.name {
  font-family: var(--font-playfair);
  font-size: var(--font-size-3xl);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text);
  margin: 0;
}
.tagline {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-md);
  color: var(--color-text-muted);
  margin: 0;
}
.metaLine {
  display: flex;
  flex-wrap: wrap;
  gap: 0 1rem;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}
.metaLine li::after {
  content: '·';
  margin-left: 1rem;
  color: var(--color-text-tertiary);
}
.metaLine li:last-child::after { content: ''; margin-left: 0; }
.ctaGroup { display: flex; flex-direction: column; gap: 0.5rem; }
.primaryCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-text);
  color: var(--color-text-inverse);
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  text-decoration: none;
  font-weight: 600;
}
@media (max-width: 1023px) {
  .header { grid-template-columns: 1fr; }
  .ctaGroup { flex-direction: row; }
  .primaryCta { width: 100%; }
}
@media (max-width: 639px) {
  .identity { flex-direction: column; align-items: flex-start; }
  .avatar { width: 80px; height: 80px; }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/server/ChefDetailPage/ChefHeader.tsx src/components/server/ChefDetailPage/ChefHeader.module.css
git commit -m "feat(chefs): add ChefHeader server component"
```

### Task 14: `ChefStatStrip.tsx`

```tsx
// src/components/server/ChefDetailPage/ChefStatStrip.tsx

import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import { PriceTier } from '@/constants/chef'
import type { Chef, Language } from '@/types'

import styles from './ChefStatStrip.module.css'

type Props = { chef: Chef; lang: Language }

const TIER_TO_DOTS: Record<PriceTier, number> = {
  [PriceTier.BUDGET]: 1,
  [PriceTier.STANDARD]: 2,
  [PriceTier.PREMIUM]: 3,
}
const TOTAL_TIER_DOTS = 3

export async function ChefStatStrip({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })
  const currencyFormatter = new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

  const rightForLabels = chef.rightFor.map((r) => dict.chef.enums.retreatType[r])
  const cuisineLabels = chef.cuisineStyles.map((c) => localize(c, lang))
  const dietaryLabels = chef.dietaryCapabilities.map((d) => dict.chef.enums.dietary[d])

  const filledDots = TIER_TO_DOTS[chef.dayRate.tier]
  const tierWordLabel = dict.chef.statStrip.tierLabel[chef.dayRate.tier]

  return (
    <dl className={styles.strip}>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.rightFor}</dt>
        <dd className={styles.value}>{listFormatter.format(rightForLabels)}</dd>
      </div>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.cooks}</dt>
        <dd className={styles.value}>{listFormatter.format(cuisineLabels)}</dd>
      </div>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.accommodates}</dt>
        <dd className={styles.value}>{listFormatter.format(dietaryLabels)}</dd>
      </div>
      <div className={styles.cell}>
        <dt className={styles.label}>{dict.chef.statStrip.dayRate}</dt>
        <dd className={styles.dayRate}>
          <span className={styles.dayRateAmount}>{currencyFormatter.format(chef.dayRate.amountEur)}</span>
          <span className={styles.dayRateUnit}>{dict.chef.statStrip.dayRateUnit}</span>
          <span className={styles.tier} aria-label={`${tierWordLabel} pricing`}>
            {Array.from({ length: TOTAL_TIER_DOTS }).map((_, i) => (
              <span
                key={i}
                className={i < filledDots ? styles.tierDotFilled : styles.tierDotEmpty}
                aria-hidden="true"
              >
                €
              </span>
            ))}{' '}
            — {tierWordLabel}
          </span>
        </dd>
      </div>
    </dl>
  )
}
```

```css
/* ChefStatStrip.module.css */
.strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  background: #f3eede;
  border-radius: 0.25rem;
  margin: 0;
}
.cell { display: flex; flex-direction: column; gap: 0.25rem; }
.label {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
}
.value {
  font-family: var(--font-playfair);
  font-size: var(--font-size-md);
  color: var(--color-text);
  margin: 0;
  line-height: var(--line-height-snug);
}
.dayRate { display: flex; align-items: baseline; gap: 0.25rem; flex-wrap: wrap; margin: 0; }
.dayRateAmount {
  font-family: var(--font-playfair);
  font-size: var(--font-size-3xl);
  color: var(--color-text);
}
.dayRateUnit {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}
.tier { font-family: var(--font-quicksand); font-size: var(--font-size-xs); color: var(--color-text-tertiary); }
.tierDotFilled { color: var(--color-text); }
.tierDotEmpty { color: var(--color-text-tertiary); opacity: 0.4; }
@media (max-width: 1023px) { .strip { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 639px) { .strip { grid-template-columns: 1fr; } }
```

Commit: `git commit -m "feat(chefs): add ChefStatStrip server component"`

### Task 15: `ChefAbout.tsx`

```tsx
// src/components/server/ChefDetailPage/ChefAbout.tsx

import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefAbout.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefAbout({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const paragraphs = chef.about.paragraphs.map((p) => localize(p, lang))

  return (
    <section className={styles.about}>
      <h2 className={styles.label}>{dict.chef.about}</h2>
      <p className={styles.headline}>{localize(chef.about.headline, lang)}</p>
      {paragraphs.map((text, i) => (
        <p key={i} className={styles.paragraph}>{text}</p>
      ))}
    </section>
  )
}
```

```css
/* ChefAbout.module.css */
.about { margin: 2.5rem 0; }
.label {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
  margin: 0 0 0.75rem;
}
.headline {
  font-family: var(--font-playfair);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-tight);
  color: var(--color-text);
  margin: 0 0 1rem;
}
.paragraph {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}
```

Commit: `git commit -m "feat(chefs): add ChefAbout server component"`

### Task 16: `ChefSignatureDishes.tsx`

```tsx
// src/components/server/ChefDetailPage/ChefSignatureDishes.tsx

import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefSignatureDishes.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefSignatureDishes({ chef, lang }: Props) {
  if (chef.signatureDishes.length === 0) return null
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{dict.chef.signatureDishes}</h2>
      <ol className={styles.grid}>
        {chef.signatureDishes.map((dish, i) => (
          <li key={i} className={styles.card}>
            <div className={styles.prefix}>
              {dict.chef.signatureDishItemPrefix.replace('{n}', String(i + 1).padStart(2, '0'))}
            </div>
            <div className={styles.name}>{localize(dish.name, lang)}</div>
            <div className={styles.note}>{localize(dish.note, lang)}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
```

```css
/* ChefSignatureDishes.module.css */
.section { margin: 2rem 0; }
.label {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
  margin: 0 0 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.card {
  background: #f3eede;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
}
.prefix {
  color: var(--color-secondary);
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  margin-bottom: 0.25rem;
}
.name {
  font-family: var(--font-playfair);
  font-size: var(--font-size-lg);
  color: var(--color-text);
  margin-bottom: 0.25rem;
}
.note {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
@media (max-width: 1023px) { .grid { grid-template-columns: 1fr; } }
```

Commit: `git commit -m "feat(chefs): add ChefSignatureDishes server component"`

### Task 17: `ChefTestimonials.tsx`

```tsx
// src/components/server/ChefDetailPage/ChefTestimonials.tsx

import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefTestimonials.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefTestimonials({ chef, lang }: Props) {
  if (chef.testimonials.length === 0) return null
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{dict.chef.testimonials}</h2>
      <ul className={styles.grid}>
        {chef.testimonials.map((t, i) => (
          <li key={i} className={styles.card}>
            <blockquote className={styles.quote}>“{localize(t.quote, lang)}”</blockquote>
            <div className={styles.attribution}>
              <span className={styles.author}>{t.author}</span>
              <span className={styles.role}>{localize(t.role, lang)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
```

```css
/* ChefTestimonials.module.css */
.section { margin: 2rem 0; }
.label {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
  margin: 0 0 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.card { background: #f3eede; padding: 1rem 1.25rem; border-radius: 0.25rem; }
.quote {
  font-family: var(--font-playfair);
  font-size: var(--font-size-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  margin: 0 0 0.75rem;
}
.attribution {
  display: flex;
  flex-direction: column;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
}
.author { color: var(--color-text); font-weight: 600; }
.role { color: var(--color-text-tertiary); }
@media (max-width: 1023px) { .grid { grid-template-columns: 1fr; } }
```

Commit: `git commit -m "feat(chefs): add ChefTestimonials server component"`

### Task 18: `ChefOperatesIn.tsx` + `ChefAtAGlance.tsx` + `ChefPastRetreats.tsx`

```tsx
// src/components/server/ChefDetailPage/ChefOperatesIn.tsx

import { getServerTranslations } from '@/i18n/server'
import { NL_REGION_COORDINATES } from '@/constants/chef'
import type { Chef, Language } from '@/types'

import styles from './ChefOperatesIn.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefOperatesIn({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })

  const travelsLabel = chef.travelsNationwide
    ? dict.chef.sidebar.travelsNationwide
    : dict.chef.sidebar.travelsRegional

  const regionsLabel = listFormatter.format(
    chef.servesRegions.map((r) => dict.chef.enums.region[r])
  )
  const strongestLine = dict.chef.sidebar.strongestIn.replace('{regions}', regionsLabel)
  const homeBaseRegionLabel = dict.chef.enums.region[chef.homeBase.region]
  const dot = NL_REGION_COORDINATES[chef.homeBase.region]

  return (
    <section className={styles.card}>
      <h3 className={styles.label}>{dict.chef.sidebar.operatesIn}</h3>
      <p className={styles.travels}>{travelsLabel}</p>
      <p className={styles.strongest}>{strongestLine}</p>
      <div className={styles.mapWrapper} aria-hidden="true">
        <svg viewBox="0 0 100 120" className={styles.map}>
          <use href="/images/chefs/_assets/nl-outline.svg#root" />
          <circle cx={dot.x} cy={dot.y} r={3} className={styles.dot} />
        </svg>
        <div className={styles.cityLabel}>
          <strong>{chef.homeBase.city}</strong>
          <span>{dict.chef.sidebar.homeBase} · {homeBaseRegionLabel}</span>
        </div>
      </div>
    </section>
  )
}
```

If `<use href="...#root">` does not work because the SVG file lacks an `id="root"` element, inline the SVG path directly inside the rendered SVG instead of using `<use>`. The simplest workable form: read the SVG once via Node `fs` at build time and inline it. For now, place the outline directly:

```tsx
// Replace <use> with inline path:
<svg viewBox="0 0 100 120" className={styles.map}>
  <path d="M30,10 L75,15 L80,30 L85,55 L75,85 L60,110 L40,108 L25,90 L20,60 L18,35 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
  <circle cx={dot.x} cy={dot.y} r={3} className={styles.dot} />
</svg>
```

```css
/* ChefOperatesIn.module.css */
.card { background: #f3eede; padding: 1.25rem; border-radius: 0.25rem; }
.label {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
  margin: 0 0 0.5rem;
}
.travels {
  font-family: var(--font-playfair);
  font-size: var(--font-size-lg);
  color: var(--color-text);
  margin: 0;
}
.strongest {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: 0.25rem 0 1rem;
}
.mapWrapper { position: relative; display: flex; justify-content: center; }
.map { width: 100px; height: 120px; color: var(--color-text-tertiary); }
.dot { fill: var(--color-secondary); }
.cityLabel {
  position: absolute;
  bottom: 0;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-align: right;
}
.cityLabel strong { color: var(--color-text); font-weight: 600; }
```

```tsx
// src/components/server/ChefDetailPage/ChefAtAGlance.tsx

import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import type { Chef, Language } from '@/types'

import styles from './ChefAtAGlance.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefAtAGlance({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const listFormatter = new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' })

  const labels = dict.chef.sidebar.atAGlanceLabels
  const groupSize = `${chef.groupSize.min} – ${chef.groupSize.max} ${dict.chef.headerMeta.guests
    .replace('{min} – {max} ', '')
    .replace(/^./, (c) => c.toLowerCase())}`
  const languages = listFormatter.format(
    chef.languagesSpoken.map((l) => dict.languages?.[l] ?? l)
  )

  const rows: { label: string; value: string }[] = [
    { label: labels.groupSize, value: groupSize },
    { label: labels.languages, value: languages },
    { label: labels.experience, value: dict.chef.headerMeta.yearsCooking.replace('{years}', String(chef.yearsExperience)) },
    { label: labels.sourcing, value: localize(chef.atAGlance.sourcing, lang) },
    { label: labels.credentials, value: localize(chef.atAGlance.credentials, lang) },
  ]
  if (chef.atAGlance.press) {
    rows.push({ label: labels.press, value: localize(chef.atAGlance.press, lang) })
  }

  return (
    <section className={styles.card}>
      <h3 className={styles.label}>{dict.chef.sidebar.atAGlance}</h3>
      <dl className={styles.list}>
        {rows.map(({ label, value }) => (
          <div key={label} className={styles.row}>
            <dt className={styles.dt}>{label}</dt>
            <dd className={styles.dd}>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
```

```css
/* ChefAtAGlance.module.css */
.card { background: #f3eede; padding: 1.25rem; border-radius: 0.25rem; margin-top: 1rem; }
.label {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
  margin: 0 0 0.75rem;
}
.list { margin: 0; }
.row { display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
.row:last-child { border-bottom: none; }
.dt { font-family: var(--font-quicksand); font-size: var(--font-size-sm); color: var(--color-text-tertiary); margin: 0; }
.dd { font-family: var(--font-quicksand); font-size: var(--font-size-sm); color: var(--color-text); margin: 0; text-align: right; }
```

```tsx
// src/components/server/ChefDetailPage/ChefPastRetreats.tsx

import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import styles from './ChefPastRetreats.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefPastRetreats({ chef, lang }: Props) {
  if (chef.pastRetreats.length === 0) return null
  const dict = await getServerTranslations(lang)

  return (
    <section className={styles.card}>
      <h3 className={styles.label}>{dict.chef.sidebar.pastRetreats}</h3>
      <ul className={styles.list}>
        {chef.pastRetreats.map((retreat) => (
          <li key={retreat.name}>
            {retreat.url ? (
              <a href={retreat.url} target="_blank" rel="noopener nofollow" className={styles.link}>
                {retreat.name}
              </a>
            ) : (
              <span>{retreat.name}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
```

```css
/* ChefPastRetreats.module.css */
.card { background: #f3eede; padding: 1.25rem; border-radius: 0.25rem; margin-top: 1rem; }
.label {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
  margin: 0 0 0.75rem;
}
.list { list-style: disc; padding-left: 1.25rem; margin: 0; font-family: var(--font-quicksand); font-size: var(--font-size-sm); color: var(--color-text); }
.list li { padding: 0.125rem 0; }
.link { color: var(--color-text); text-decoration: underline; text-decoration-color: var(--color-text-tertiary); }
.link:hover { text-decoration-color: var(--color-text); }
```

Commit each component or batch as one commit:

```bash
git add src/components/server/ChefDetailPage/ChefOperatesIn.tsx src/components/server/ChefDetailPage/ChefOperatesIn.module.css src/components/server/ChefDetailPage/ChefAtAGlance.tsx src/components/server/ChefDetailPage/ChefAtAGlance.module.css src/components/server/ChefDetailPage/ChefPastRetreats.tsx src/components/server/ChefDetailPage/ChefPastRetreats.module.css
git commit -m "feat(chefs): add sidebar sub-components (OperatesIn, AtAGlance, PastRetreats)"
```

### Task 19: `ChefSidebar.tsx` composer

```tsx
// src/components/server/ChefDetailPage/ChefSidebar.tsx

import type { Chef, Language } from '@/types'

import { ChefAtAGlance } from './ChefAtAGlance'
import { ChefOperatesIn } from './ChefOperatesIn'
import { ChefPastRetreats } from './ChefPastRetreats'
import styles from './ChefSidebar.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefSidebar({ chef, lang }: Props) {
  return (
    <aside className={styles.sidebar}>
      <ChefOperatesIn chef={chef} lang={lang} />
      <ChefAtAGlance chef={chef} lang={lang} />
      <ChefPastRetreats chef={chef} lang={lang} />
    </aside>
  )
}
```

```css
/* ChefSidebar.module.css */
.sidebar { display: flex; flex-direction: column; gap: 1rem; }
```

Commit: `git commit -m "feat(chefs): add ChefSidebar composer"`

### Task 20: `StickyMobileCta.tsx`

```tsx
// src/components/server/ChefDetailPage/StickyMobileCta.tsx

import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import styles from './StickyMobileCta.module.css'

type Props = { chef: Chef; lang: Language }

export async function StickyMobileCta({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const ctaLabel = dict.chef.cta.sendInquiry.replace('{name}', chef.name.split(' ')[0])
  return (
    <div className={styles.bar}>
      <a href="#chef-inquiry" className={styles.button}>
        {ctaLabel}
      </a>
    </div>
  )
}
```

```css
/* StickyMobileCta.module.css */
.bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  background: var(--color-background);
  border-top: 1px solid rgba(0,0,0,0.08);
  z-index: 30;
  display: none;
}
.button {
  display: block;
  text-align: center;
  background: var(--color-text);
  color: var(--color-text-inverse);
  padding: 0.875rem 1rem;
  border-radius: 0.25rem;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-decoration: none;
}
@media (max-width: 1023px) { .bar { display: block; } }
```

Commit: `git commit -m "feat(chefs): add StickyMobileCta server component"`

---

# Phase 7 — Client islands

## Task 21: `ChefGallery` client component (with Lightbox)

**Files:**
- Create: `src/components/client/ChefGallery/index.ts`
- Create: `src/components/client/ChefGallery/ChefGallery.tsx`
- Create: `src/components/client/ChefGallery/ChefGallery.module.css`

- [ ] **Step 1: Inspect existing Lightbox interface**

Run: `grep -n "export\|interface\|type Props" src/components/client/Lightbox/*.tsx | head -20`
Note the `Lightbox` props (likely `images: ImageRef[]`, `isOpen`, `onClose`, etc.).

- [ ] **Step 2: Implement `ChefGallery`**

Adapt to the actual `Lightbox` API. Skeleton:

```tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Lightbox } from '@/components/client/Lightbox'
import { getImageAltText } from '@/data/imageAltText'
import type { ChefGallery as ChefGalleryData, Language } from '@/types'

import styles from './ChefGallery.module.css'

type Props = { gallery: ChefGalleryData; lang: Language }

export function ChefGallery({ gallery, lang }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const all = [gallery.hero, ...gallery.supporting]

  return (
    <>
      <div className={styles.grid}>
        <button
          type="button"
          className={styles.heroTile}
          onClick={() => setOpenIndex(0)}
          aria-label={getImageAltText(gallery.hero.altKey, lang)}
        >
          <Image
            src={gallery.hero.src}
            alt={getImageAltText(gallery.hero.altKey, lang)}
            fill
            sizes="(max-width: 1023px) 100vw, 60vw"
            priority
          />
        </button>
        <div className={styles.thumbs}>
          {gallery.supporting.slice(0, 4).map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={styles.thumb}
              onClick={() => setOpenIndex(i + 1)}
              aria-label={getImageAltText(img.altKey, lang)}
            >
              <Image
                src={img.src}
                alt={getImageAltText(img.altKey, lang)}
                fill
                sizes="(max-width: 639px) 50vw, 20vw"
              />
            </button>
          ))}
        </div>
      </div>
      {openIndex !== null && (
        <Lightbox
          images={all.map((img) => ({ src: img.src, alt: getImageAltText(img.altKey, lang) }))}
          startIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  )
}
```

If the existing `Lightbox` has different prop names, adjust. Do not invent props that don't exist — read the source first.

- [ ] **Step 3: Implement CSS (1-hero + 4-thumb grid)**

```css
.grid {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 0.5rem;
  margin: 1.5rem 0;
}
.heroTile {
  position: relative;
  aspect-ratio: 4 / 3;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.25rem;
}
.heroTile img { object-fit: cover; }
.thumbs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
}
.thumb {
  position: relative;
  aspect-ratio: 1 / 1;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.25rem;
}
.thumb img { object-fit: cover; }
@media (max-width: 1023px) {
  .grid { grid-template-columns: 1fr; }
  .thumbs {
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    grid-template-rows: 1fr;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
  .thumb { scroll-snap-align: start; }
}
```

- [ ] **Step 4: Add the barrel export**

```ts
// src/components/client/ChefGallery/index.ts
export * from './ChefGallery'
```

- [ ] **Step 5: Commit**

```bash
git add src/components/client/ChefGallery/
git commit -m "feat(chefs): add ChefGallery client component with Lightbox integration"
```

---

## Task 22: `ChefInquiryForm` + `ChefInquiryModal` client components

**Files:**
- Create: `src/components/client/ChefInquiryForm/index.ts`
- Create: `src/components/client/ChefInquiryForm/ChefInquiryModal.tsx`
- Create: `src/components/client/ChefInquiryForm/ChefInquiryForm.tsx`
- Create: `src/components/client/ChefInquiryForm/ChefInquiryForm.module.css`

- [ ] **Step 1: Define a shared `ChefInquiryDict` type for the i18n slice**

Create a shared type that captures exactly the dictionary subtree the inquiry UI needs. Add this to `src/types/chef.ts` (after the `Chef` type):

```ts
// src/types/chef.ts (append)

export type ChefInquiryDict = {
  modalTitle: string
  closeAriaLabel: string
  field: {
    name: string
    email: string
    dates: string
    groupSize: string
    location: string
    dietary: string
    message: string
  }
  consent: string
  submit: string
  submitting: string
  success: { title: string; body: string }
  errors: {
    rate_limited: string
    validation: string
    chef_not_found: string
    email_failed: string
    unexpected_error: string
  }
}
```

This type matches the dict shape from Task 10 and is what the parent server component will pass down through the modal into the form. The form is a client component and cannot call `getServerTranslations` directly, so the parent server component does that lookup and passes the strings as a serializable prop.

- [ ] **Step 2: Implement `ChefInquiryModal`**

```tsx
'use client'

import { useEffect, useRef, useState } from 'react'

import type { Chef, ChefInquiryDict, Language } from '@/types'

import { ChefInquiryForm } from './ChefInquiryForm'
import styles from './ChefInquiryForm.module.css'

type Props = { chef: Chef; lang: Language; inquiryDict: ChefInquiryDict; closeAriaLabel: string }

export function ChefInquiryModal({ chef, lang, inquiryDict, closeAriaLabel }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  // Open via hash navigation (#chef-inquiry).
  useEffect(() => {
    const handler = () => {
      if (window.location.hash === '#chef-inquiry') setIsOpen(true)
    }
    handler()
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  // Esc to close.
  useEffect(() => {
    if (!isOpen) return
    const close = () => setIsOpen(false)
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen])

  const close = () => {
    setIsOpen(false)
    if (window.location.hash === '#chef-inquiry') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  if (!isOpen) return null

  const title = inquiryDict.modalTitle.replace('{name}', chef.name)

  return (
    <div className={styles.overlay} onClick={close} aria-hidden={false}>
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chef-inquiry-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2 id="chef-inquiry-title" className={styles.modalTitle}>{title}</h2>
          <button type="button" onClick={close} className={styles.closeButton} aria-label={closeAriaLabel}>×</button>
        </div>
        <ChefInquiryForm chef={chef} lang={lang} inquiryDict={inquiryDict} onSuccess={close} />
      </div>
    </div>
  )
}
```

Add `closeAriaLabel` to the `chef.inquiry` dict (e.g. `closeAriaLabel: 'Close inquiry form'` in EN, `'Sluit aanvraagformulier'` in NL, `'Anfrageformular schließen'` in DE) and to the `ChefInquiryDict` type. Update Task 10's dictionary entries accordingly when you wire this in.

- [ ] **Step 3: Implement `ChefInquiryForm`** (i18n strings come from `inquiryDict` prop)

```tsx
'use client'

import { useActionState } from 'react'

import { sendChefInquiry } from '@/actions/chef/sendChefInquiry'
import { CHEF_INQUIRY_LIMITS } from '@/constants/chef'
import type { Chef, ChefInquiryDict, Language } from '@/types'

import styles from './ChefInquiryForm.module.css'

type Props = { chef: Chef; lang: Language; inquiryDict: ChefInquiryDict; onSuccess: () => void }

type ActionResult = { success: boolean; message?: string; errors?: Record<string, string> }

const interpolate = (template: string, vars: Record<string, string>): string =>
  Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, v), template)

export function ChefInquiryForm({ chef, lang, inquiryDict, onSuccess }: Props) {
  const submitAction = async (_prev: ActionResult | null, formData: FormData): Promise<ActionResult> => {
    formData.set('locale', lang)
    const result = await sendChefInquiry(chef.slug, formData)
    if (result.success) onSuccess()
    return result
  }

  const [state, formAction, pending] = useActionState<ActionResult | null, FormData>(submitAction, null)

  const messageLabel = interpolate(inquiryDict.field.message, { name: chef.name })
  const consentLabel = interpolate(inquiryDict.consent, { name: chef.name })
  const errorMessage = state && !state.success && state.message
    ? inquiryDict.errors[state.message as keyof ChefInquiryDict['errors']] ?? inquiryDict.errors.unexpected_error
    : null

  return (
    <form action={formAction} className={styles.form} noValidate>
      <input type="text" name="honeypot" className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className={styles.field}>
        <span className={styles.label}>{inquiryDict.field.name}</span>
        <input type="text" name="name" required minLength={CHEF_INQUIRY_LIMITS.NAME_MIN} maxLength={CHEF_INQUIRY_LIMITS.NAME_MAX} aria-invalid={Boolean(state?.errors?.name)} aria-describedby={state?.errors?.name ? 'name-err' : undefined} />
        {state?.errors?.name && <span id="name-err" className={styles.error}>{state.errors.name}</span>}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{inquiryDict.field.email}</span>
        <input type="email" name="email" required maxLength={254} aria-invalid={Boolean(state?.errors?.email)} aria-describedby={state?.errors?.email ? 'email-err' : undefined} />
        {state?.errors?.email && <span id="email-err" className={styles.error}>{state.errors.email}</span>}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{inquiryDict.field.dates}</span>
        <input type="text" name="dates" required minLength={CHEF_INQUIRY_LIMITS.DATES_MIN} maxLength={CHEF_INQUIRY_LIMITS.DATES_MAX} placeholder="5–9 May 2026" />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{inquiryDict.field.groupSize}</span>
        <input type="number" name="groupSize" required min={CHEF_INQUIRY_LIMITS.GROUP_SIZE_MIN} max={CHEF_INQUIRY_LIMITS.GROUP_SIZE_MAX} />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{inquiryDict.field.location}</span>
        <input type="text" name="location" required minLength={CHEF_INQUIRY_LIMITS.LOCATION_MIN} maxLength={CHEF_INQUIRY_LIMITS.LOCATION_MAX} />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{inquiryDict.field.dietary}</span>
        <textarea name="dietary" maxLength={CHEF_INQUIRY_LIMITS.DIETARY_MAX} rows={2} />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{messageLabel}</span>
        <textarea name="message" required minLength={CHEF_INQUIRY_LIMITS.MESSAGE_MIN} maxLength={CHEF_INQUIRY_LIMITS.MESSAGE_MAX} rows={5} />
      </label>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" value="true" required />
        <span>{consentLabel}</span>
      </label>

      {errorMessage && (
        <div className={styles.banner} role="alert">{errorMessage}</div>
      )}

      <button type="submit" disabled={pending} className={styles.submit}>
        {pending ? inquiryDict.submitting : inquiryDict.submit}
      </button>
    </form>
  )
}
```

The form is fully i18n-driven via `inquiryDict`. The parent `ChefDetailPage` server composer passes `inquiryDict={dict.chef.inquiry}` and `closeAriaLabel={dict.chef.inquiry.closeAriaLabel}` down through `ChefInquiryModal` → `ChefInquiryForm`.

- [ ] **Step 4: Implement CSS**

```css
/* ChefInquiryForm.module.css */
.overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  display: grid; place-items: center;
  z-index: 100;
  padding: 1rem;
}
.modal {
  background: var(--color-background);
  border-radius: 0.5rem;
  max-width: 560px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
}
.modalHeader { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
.modalTitle { font-family: var(--font-playfair); font-size: var(--font-size-xl); margin: 0; }
.closeButton { background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0.25rem; }

.form { display: flex; flex-direction: column; gap: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
.label { font-family: var(--font-quicksand); font-size: var(--font-size-sm); color: var(--color-text); }
.field input, .field textarea {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-base);
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 0.25rem;
  background: var(--color-background);
}
.error { color: var(--color-text-error); font-size: var(--font-size-xs); }
.consent { display: flex; gap: 0.5rem; align-items: flex-start; font-family: var(--font-quicksand); font-size: var(--font-size-sm); }
.banner { background: #fef2f2; color: var(--color-text-error); padding: 0.75rem; border-radius: 0.25rem; }
.submit {
  background: var(--color-text); color: var(--color-text-inverse);
  padding: 0.75rem 1.5rem; border: none; border-radius: 0.25rem;
  font-family: var(--font-quicksand); font-size: var(--font-size-sm); font-weight: 600;
  cursor: pointer;
}
.submit:disabled { opacity: 0.6; cursor: not-allowed; }
.honeypot {
  position: absolute; left: -9999px; opacity: 0;
  width: 1px; height: 1px;
}
@media (max-width: 639px) {
  .overlay { padding: 0; }
  .modal { max-width: 100%; max-height: 100vh; border-radius: 0; }
}
```

- [ ] **Step 5: Add barrel**

```ts
// src/components/client/ChefInquiryForm/index.ts
export * from './ChefInquiryForm'
export * from './ChefInquiryModal'
```

- [ ] **Step 6: Commit**

```bash
git add src/components/client/ChefInquiryForm/ src/types/chef.ts
git commit -m "feat(chefs): add ChefInquiryForm and ChefInquiryModal client components"
```

---

# Phase 8 — Composer + route + sitemap

## Task 23: `ChefDetailPage.tsx` composer + smoke test

**Files:**
- Create: `src/components/server/ChefDetailPage/ChefDetailPage.tsx`
- Create: `src/components/server/ChefDetailPage/ChefDetailPage.module.css`
- Create: `src/components/server/ChefDetailPage/index.ts`
- Create: `src/components/server/ChefDetailPage/ChefDetailPage.test.tsx`

- [ ] **Step 1: Implement `ChefDetailPage`**

```tsx
// src/components/server/ChefDetailPage/ChefDetailPage.tsx

import { ChefStatus } from '@/constants/chef'
import { ChefGallery } from '@/components/client/ChefGallery'
import { ChefInquiryModal } from '@/components/client/ChefInquiryForm'
import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import { ChefAbout } from './ChefAbout'
import { ChefHeader } from './ChefHeader'
import { ChefSidebar } from './ChefSidebar'
import { ChefSignatureDishes } from './ChefSignatureDishes'
import { ChefStatStrip } from './ChefStatStrip'
import { ChefStructuredData } from './ChefStructuredData'
import { ChefTestimonials } from './ChefTestimonials'
import { DraftBadge } from './DraftBadge'
import { StickyMobileCta } from './StickyMobileCta'
import styles from './ChefDetailPage.module.css'

type Props = { chef: Chef; lang: Language }

export async function ChefDetailPage({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)

  return (
    <>
      {chef.status === ChefStatus.DRAFT && <DraftBadge lang={lang} />}
      <article className={styles.page}>
        <ChefHeader chef={chef} lang={lang} />
        <ChefStatStrip chef={chef} lang={lang} />
        <div className={styles.grid}>
          <main className={styles.main}>
            <ChefGallery gallery={chef.gallery} lang={lang} />
            <ChefAbout chef={chef} lang={lang} />
            <ChefSignatureDishes chef={chef} lang={lang} />
            <ChefTestimonials chef={chef} lang={lang} />
          </main>
          <ChefSidebar chef={chef} lang={lang} />
        </div>
      </article>
      <StickyMobileCta chef={chef} lang={lang} />
      <ChefInquiryModal
        chef={chef}
        lang={lang}
        inquiryDict={dict.chef.inquiry}
        closeAriaLabel={dict.chef.inquiry.closeAriaLabel}
      />
      <ChefStructuredData chef={chef} lang={lang} />
    </>
  )
}
```

- [ ] **Step 2: Implement layout CSS**

```css
/* ChefDetailPage.module.css */
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem 4rem;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2.5rem;
  margin-top: 1.5rem;
}
.main { min-width: 0; }
@media (max-width: 1023px) {
  .grid { grid-template-columns: 1fr; }
}
@media (max-width: 1023px) {
  .page { padding-bottom: 5rem; } /* leave room for sticky CTA */
}
```

- [ ] **Step 3: Add barrel**

```ts
// src/components/server/ChefDetailPage/index.ts
export * from './ChefDetailPage'
```

- [ ] **Step 4: Smoke test the composer**

Create `src/components/server/ChefDetailPage/ChefDetailPage.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'

import { ChefDetailPage } from './ChefDetailPage'

describe('ChefDetailPage', () => {
  it('renders chef name and tagline', async () => {
    const ui = await ChefDetailPage({ chef: LIESBETH_VAN_DER_VELDEN_CHEF, lang: Language.EN })
    render(ui)
    expect(screen.getByText(LIESBETH_VAN_DER_VELDEN_CHEF.name)).toBeInTheDocument()
  })

  it('renders DraftBadge when chef status is DRAFT', async () => {
    const ui = await ChefDetailPage({ chef: LIESBETH_VAN_DER_VELDEN_CHEF, lang: Language.EN })
    render(ui)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
```

Note: server components that return promises can be awaited and rendered in tests by treating them as RSC payloads. If `@testing-library/react` rejects this pattern, mock async sub-components with `vi.mock` and assert on the rendered tree. The point of this test is a smoke check, not full render coverage.

- [ ] **Step 5: Verify tests pass**

Run: `npm test -- src/components/server/ChefDetailPage/ChefDetailPage.test.tsx`
Expected: PASS, 2 tests.

- [ ] **Step 6: Commit**

```bash
git add src/components/server/ChefDetailPage/ChefDetailPage.tsx src/components/server/ChefDetailPage/ChefDetailPage.module.css src/components/server/ChefDetailPage/ChefDetailPage.test.tsx src/components/server/ChefDetailPage/index.ts
git commit -m "feat(chefs): add ChefDetailPage composer and smoke test"
```

---

## Task 24: Page route handler with `generateStaticParams`, `generateMetadata`, draft gating

**Files:**
- Create: `src/app/[locale]/chefs/[slug]/page.tsx`

- [ ] **Step 1: Implement the route**

```tsx
// src/app/[locale]/chefs/[slug]/page.tsx

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ChefDetailPage } from '@/components/server/ChefDetailPage'
import { getChefBySlug, getChefsForEnv } from '@/data/chefs'
import { localize } from '@/lib'
import { chefDetailPath } from '@/lib/routing'
import type { Language } from '@/types'

export const dynamicParams = false

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getChefsForEnv().map((chef) => ({ slug: chef.slug }))
}

type Params = { locale: Language; slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await params
  const chef = getChefBySlug(slug)
  if (!chef) return {}

  const regionLabel = chef.homeBase.region.replace('_', ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const titleByLang: Record<string, string> = {
    en: `${chef.name} — Retreat Chef in ${regionLabel}, Netherlands`,
    nl: `${chef.name} — Retreatchef in ${regionLabel}, Nederland`,
    de: `${chef.name} — Retreat-Koch in ${regionLabel}, Niederlande`,
  }
  const title = titleByLang[locale] ?? titleByLang.en
  const description = localize(chef.tagline, locale)

  const canonical = `https://makersbarn.nl${chefDetailPath(chef.slug, locale)}`
  const isProd = process.env.VERCEL_ENV === 'production'

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `https://makersbarn.nl${chefDetailPath(chef.slug, 'en' as Language)}`,
        nl: `https://makersbarn.nl${chefDetailPath(chef.slug, 'nl' as Language)}`,
        de: `https://makersbarn.nl${chefDetailPath(chef.slug, 'de' as Language)}`,
        'x-default': `https://makersbarn.nl${chefDetailPath(chef.slug, 'en' as Language)}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      url: canonical,
      images: [{ url: `https://makersbarn.nl${chef.gallery.hero.src}`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: isProd ? undefined : { index: false, follow: false },
  }
}

export default async function ChefRoute({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params
  const chef = getChefBySlug(slug)
  if (!chef) notFound()
  return <ChefDetailPage chef={chef} lang={locale} />
}
```

If `getServerTranslations`/`Language` enum literals require the `Language` enum (not string literals) for type safety, replace `'en' as Language` etc. with the actual enum members.

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build completes. The route prints to console alongside other pre-rendered routes. Look for `chefs/liesbeth-van-der-velden` in the build output.

- [ ] **Step 3: Manually verify in dev**

Run: `npm run dev`
Open: `http://localhost:3000/en/chefs/liesbeth-van-der-velden`
Expected: Page renders with the DraftBadge, chef header, stat strip, gallery, about, dishes, testimonials, sidebar, sticky mobile CTA (resize browser < 1024px).

Test inquiry modal: click the header CTA → modal opens. Esc closes. Submit with valid data and confirm Postmark + Slack receive (if local env vars set; otherwise expect a logged failure but UI flow should still work).

- [ ] **Step 4: Commit**

```bash
git add "src/app/[locale]/chefs/[slug]/page.tsx"
git commit -m "feat(chefs): add /[locale]/chefs/[slug] route with metadata and draft gating"
```

---

## Task 25: Extend `sitemap.ts` to include published chefs

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Read existing sitemap**

```bash
cat src/app/sitemap.ts
```

Note the existing pattern (likely an array of `{ url, lastModified, changeFrequency, priority }` per locale).

- [ ] **Step 2: Append PUBLISHED_CHEFS entries**

In `sitemap.ts`, after the existing entries, push:

```ts
import { PUBLISHED_CHEFS } from '@/data/chefs'
import { Language } from '@/types'

// ... existing sitemap function ...

const SITE_URL = 'https://makersbarn.nl' // or whatever the existing constant is

for (const chef of PUBLISHED_CHEFS) {
  for (const locale of [Language.EN, Language.NL, Language.DE]) {
    entries.push({
      url: `${SITE_URL}/${locale}/chefs/${chef.slug}`,
      lastModified: new Date(chef.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }
}
```

Adapt the variable names (`entries`, `SITE_URL`) to whatever the existing sitemap uses.

- [ ] **Step 3: Verify**

Run: `npm run build && curl -s http://localhost:3000/sitemap.xml 2>/dev/null | head -40` (after starting `npm start`).

Liesbeth is currently DRAFT, so no chef entry should appear. Once she is flipped to PUBLISHED, three URLs (one per locale) should show in the sitemap.

To verify the wiring with a published chef without flipping Liesbeth, temporarily add a second test chef with `status: PUBLISHED` and re-run, then revert.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(chefs): include PUBLISHED_CHEFS in sitemap"
```

---

## Task 26: Add publishing checklist doc

**Files:**
- Create: `docs/superpowers/chef-publishing-checklist.md`

- [ ] **Step 1: Create the checklist**

```markdown
# Chef Publishing Checklist

Tick every item before flipping a chef from `ChefStatus.DRAFT` to `ChefStatus.PUBLISHED`.

- [ ] Chef has approved the page (email reply on file)
- [ ] Bio (`about.headline` + at least one `about.paragraphs` entry) provided in EN minimum
- [ ] At least one signature dish provided
- [ ] At least one testimonial provided
- [ ] Avatar uploaded (≥ 240×240) at `public/images/chefs/{slug}/avatar.jpg`
- [ ] Hero gallery image uploaded (≥ 1200×800) at `public/images/chefs/{slug}/hero.jpg`
- [ ] At least 4 supporting gallery images uploaded
- [ ] Alt-text registered for every chef image in `src/data/imageAltText.ts`
- [ ] `inquiryEmail` is the chef's actual address (not a placeholder)
- [ ] `homeBase` and `servesRegions` accurate (and on the SVG outline)
- [ ] `dayRate.amountEur` and `dayRate.tier` confirmed with chef
- [ ] `updatedAt` set to today's date

After ticking, change `status: ChefStatus.DRAFT` → `status: ChefStatus.PUBLISHED`, commit with message `feat(chefs): publish {chef-name}`, and merge.
```

- [ ] **Step 2: Commit**

```bash
git add docs/superpowers/chef-publishing-checklist.md
git commit -m "docs(chefs): add publishing checklist for chef DRAFT → PUBLISHED transitions"
```

---

# Phase 9 — Final verification

## Task 27: Full test suite + lint + build

- [ ] **Step 1: Run full test suite**

Run: `npm test`
Expected: All tests pass (existing + new chef tests). Note any failures and fix before proceeding.

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: PASS, no errors. Strict eslint rules are required by `/eslint` policy in CLAUDE.md.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Build completes. Confirm `chefs/liesbeth-van-der-velden` appears in the route table for each locale.

- [ ] **Step 4: Manual smoke test in dev**

Run: `npm run dev`

Verify each:
- `http://localhost:3000/en/chefs/liesbeth-van-der-velden` — full page renders, all sections present
- `http://localhost:3000/nl/chefs/liesbeth-van-der-velden` — same content with NL chrome
- `http://localhost:3000/de/chefs/liesbeth-van-der-velden` — same content with DE chrome
- `http://localhost:3000/en/chefs/does-not-exist` — 404
- Inquiry modal opens on CTA click; closes on Esc/X/click-outside
- Lightbox opens when clicking gallery images
- Sticky mobile CTA appears below 1024px width
- DraftBadge visible at top of page

- [ ] **Step 5: Confirm production gating**

Set `VERCEL_ENV=production` in shell:

```bash
VERCEL_ENV=production npm run build
```

Expected: build still succeeds, but the route table should show ZERO chef pages (Liesbeth is DRAFT). Run `VERCEL_ENV=production npm start` and visit `/en/chefs/liesbeth-van-der-velden` — should 404.

- [ ] **Step 6: No commit needed unless issues are found**

If everything passes, this phase produces no new commits — it's a verification gate. If lint or build complaints surface, fix and commit per `/eslint` policy.

---

## Done

The chef detail page is shippable. Onboarding workflow:

1. Add a new chef file `src/data/chefs/<slug>.ts` (status: DRAFT).
2. Wire it into `src/data/chefs/index.ts`.
3. Place chef images in `public/images/chefs/<slug>/`.
4. Register alt text in `src/data/imageAltText.ts`.
5. Open a PR. Vercel builds a preview. Send the preview URL as a screenshot to the chef.
6. Iterate based on chef feedback.
7. Once approved, change status to PUBLISHED, run `docs/superpowers/chef-publishing-checklist.md`, merge, and the chef goes live in production with sitemap inclusion on the next deploy.
