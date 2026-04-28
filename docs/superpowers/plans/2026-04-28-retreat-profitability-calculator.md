# Retreat Profitability Calculator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a free, SEO-targeted retreat profitability calculator under `/[locale]/tools/`, with a canonical hub page and four retreat-type variants (yoga, wellness, meditation, coaching) in EN + NL, designed to rank for retreat-pricing keywords and capture leads via opt-in email summary.

**Architecture:** A single reusable client component (`RetreatProfitabilityCalculator`) driven by a typed variant config. Pure math is isolated in `calculate.ts` for testability. Pages are tiny server components that compose `ToolPageShell` (server) + the calculator (client). Variant pages share the engine but have distinct URLs, H1s, copy, defaults, and guide content. Email capture leverages the existing Postmark + Slack pipeline. Per-variant guide content is AI-drafted, agent-verified, and editorially reviewed.

**Tech Stack:** Next.js 15 App Router, TypeScript, React 19, Tailwind v4 + CSS Modules, Framer Motion (existing dep, optional), Postmark (existing), Zod (existing), `@vercel/analytics` (existing). New dev dep: `vitest` + `@vitest/ui` for pure-function tests only.

**Spec:** `docs/superpowers/specs/2026-04-28-retreat-profitability-calculator-design.md`

---

## Phase 1 — Foundations: types, constants, math

### Task 1: Add tools constants + Route enum entries + ToolVariant enum

**Files:**
- Modify: `src/types/navigation.ts` — extend `Route` enum
- Create: `src/constants/tools.ts`
- Modify: `src/constants/index.ts` — re-export

**Goal:** Centralize all tool-section URL paths, slugs, ranges, and the `ToolVariant` enum so no hardcoded strings appear elsewhere.

- [ ] **Step 1: Extend the Route enum**

Edit `src/types/navigation.ts` and add these entries to the `Route` enum (preserve existing entries; insert in logical order before the closing brace):

```ts
  TOOLS = '/tools',
  RETREAT_PROFITABILITY_CALCULATOR = '/tools/retreat-profitability-calculator',
  YOGA_RETREAT_PRICING_CALCULATOR = '/tools/yoga-retreat-pricing-calculator',
  WELLNESS_RETREAT_PRICING_CALCULATOR = '/tools/wellness-retreat-pricing-calculator',
  MEDITATION_RETREAT_PRICING_CALCULATOR = '/tools/meditation-retreat-pricing-calculator',
  COACHING_RETREAT_PRICING_CALCULATOR = '/tools/coaching-retreat-pricing-calculator',
```

- [ ] **Step 2: Create the tools constants file**

Create `src/constants/tools.ts`:

```ts
import { Route } from '@/types/navigation'

export enum ToolVariant {
  GENERIC = 'generic',
  YOGA = 'yoga',
  WELLNESS = 'wellness',
  MEDITATION = 'meditation',
  COACHING = 'coaching',
}

export const TOOL_VARIANT_ROUTES: Record<ToolVariant, Route> = {
  [ToolVariant.GENERIC]: Route.RETREAT_PROFITABILITY_CALCULATOR,
  [ToolVariant.YOGA]: Route.YOGA_RETREAT_PRICING_CALCULATOR,
  [ToolVariant.WELLNESS]: Route.WELLNESS_RETREAT_PRICING_CALCULATOR,
  [ToolVariant.MEDITATION]: Route.MEDITATION_RETREAT_PRICING_CALCULATOR,
  [ToolVariant.COACHING]: Route.COACHING_RETREAT_PRICING_CALCULATOR,
}

export const CALCULATOR_INPUT_RANGES = {
  GUESTS_MIN: 4,
  GUESTS_MAX: 30,
  NIGHTS_MIN: 2,
  NIGHTS_MAX: 10,
  PRICE_PER_GUEST_MIN: 500,
  PRICE_PER_GUEST_MAX: 5000,
  PAYMENT_FEE_PERCENT_DEFAULT: 3,
} as const

export const CALCULATOR_URL_PARAMS = {
  GUESTS: 'g',
  NIGHTS: 'n',
  PRICE_PER_GUEST: 'p',
  VENUE: 'v',
  FOOD_PER_DAY: 'f',
  FACILITATOR_FEE: 'ff',
  MARKETING_OTHER: 'm',
  CO_FACILITATORS: 'cf',
  TRAVEL: 't',
  INSURANCE: 'i',
  PAYMENT_FEE_PERCENT: 'pf',
  PLANNING_DAYS: 'pd',
} as const

export const CALCULATOR_ANALYTICS_EVENTS = {
  LOADED: 'calculator_loaded',
  SHARED: 'calculator_shared',
  EMAIL_CAPTURED: 'email_captured',
  MAKERSBARN_CTA_CLICKED: 'makersbarn_cta_clicked',
} as const

export const MAKERSBARN_CTA_QUERY_PARAM = 'src'
export const MAKERSBARN_CTA_QUERY_VALUE_PREFIX = 'tool-'

export const CALCULATOR_RATE_LIMIT = {
  WINDOW_MS: 60_000,
  MAX_REQUESTS: 5,
} as const
```

- [ ] **Step 3: Re-export from constants barrel**

Open `src/constants/index.ts` and add:

```ts
export * from './tools'
```

- [ ] **Step 4: Lint and typecheck**

Run:

```bash
npm run lint
```

Expected: PASS. Fix any import-order issues per project ESLint config.

- [ ] **Step 5: Commit**

```bash
git add src/types/navigation.ts src/constants/tools.ts src/constants/index.ts
git commit -m "add tools constants, ToolVariant enum, and route entries"
```

---

### Task 2: Define calculator types

**Files:**
- Create: `src/types/tools.ts`
- Modify: `src/types/index.ts` — re-export

**Goal:** Strict types for inputs, outputs, variant config, and content.

- [ ] **Step 1: Create the types file**

Create `src/types/tools.ts`:

```ts
import type { Language } from '@/types/common'
import type { ToolVariant } from '@/constants/tools'

export interface CalculatorInputs {
  guests: number
  nights: number
  pricePerGuest: number
  venueAccommodation: number
  foodPerGuestPerDay: number
  facilitatorFee: number
  marketingAndOther: number
  coFacilitators: number
  travel: number
  insurance: number
  paymentFeePercent: number
  planningDays: number
}

export interface CalculatorCostBreakdown {
  venueAccommodation: number
  food: number
  facilitatorFee: number
  marketingAndOther: number
  coFacilitators: number
  travel: number
  insurance: number
  paymentFees: number
}

export interface CalculatorResults {
  totalRevenue: number
  totalCosts: number
  netProfit: number
  profitMargin: number
  profitPerWorkday: number
  breakevenGuests: number
  costBreakdown: CalculatorCostBreakdown
}

export type LocalizedString = Record<Language, string>

export interface VariantBenchmarks {
  pricePerGuest: LocalizedString
  foodPerGuestPerDay: LocalizedString
  facilitatorFee: LocalizedString
  marketingAndOther: LocalizedString
  venueAccommodation: LocalizedString
}

export interface VariantCopy {
  heroEyebrow: LocalizedString
  heroTitle: LocalizedString
  heroIntro: LocalizedString
  metaTitle: LocalizedString
  metaDescription: LocalizedString
}

export interface VariantConfig {
  variant: ToolVariant
  defaults: CalculatorInputs
  benchmarks: VariantBenchmarks
  copy: VariantCopy
  relatedVariants: ToolVariant[]
}

export interface CalculatorContentSection {
  heading: LocalizedString
  body: LocalizedString[] // array of paragraphs in the language
  callout?: LocalizedString
}

export interface CalculatorFaqEntry {
  question: LocalizedString
  answer: LocalizedString
}

export interface CalculatorVariantContent {
  howToSteps: LocalizedString[] // 4 steps
  guideSections: CalculatorContentSection[] // 6 sections per spec
  faq: CalculatorFaqEntry[] // 6-10 entries
}

export type CalculatorContentMap = Record<ToolVariant, CalculatorVariantContent>

export interface EmailCalculatorSummaryData {
  email: string
  inputs: CalculatorInputs
  results: CalculatorResults
  variant: ToolVariant
  newsletterOptIn: boolean
  locale: Language
}
```

- [ ] **Step 2: Re-export from types barrel**

Open `src/types/index.ts` and add:

```ts
export * from './tools'
```

- [ ] **Step 3: Lint and typecheck**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/types/tools.ts src/types/index.ts
git commit -m "add calculator and variant config types"
```

---

### Task 3: Set up Vitest for pure-function tests

**Files:**
- Modify: `package.json` — add devDeps + test script
- Create: `vitest.config.ts`

**Goal:** Minimal test infrastructure scoped to pure functions only (math, URL encoding). No React testing setup.

- [ ] **Step 1: Install vitest**

```bash
npm install --save-dev vitest@^2.1.8
```

Expected: package added to devDependencies, no other changes.

- [ ] **Step 2: Add test script to package.json**

Open `package.json` and add to `"scripts"`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Create vitest config**

Create `vitest.config.ts` at the repo root:

```ts
import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    globals: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

- [ ] **Step 4: Verify vitest runs (no tests yet)**

```bash
npm test
```

Expected: "No test files found" or similar — that's fine, no failures.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "add vitest for pure-function tests"
```

---

### Task 4: Implement pure pricing math (TDD)

**Files:**
- Create: `src/components/client/RetreatProfitabilityCalculator/calculate.ts`
- Create: `src/components/client/RetreatProfitabilityCalculator/calculate.test.ts`

**Goal:** All P&L math in one pure function with full test coverage. Zero React. Used by the component on every state change.

- [ ] **Step 1: Write the failing test file**

Create `src/components/client/RetreatProfitabilityCalculator/calculate.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { calculateRetreatProfitability } from './calculate'
import type { CalculatorInputs } from '@/types/tools'

const baseYogaInputs: CalculatorInputs = {
  guests: 12,
  nights: 5,
  pricePerGuest: 1200,
  venueAccommodation: 4500,
  foodPerGuestPerDay: 40,
  facilitatorFee: 2500,
  marketingAndOther: 800,
  coFacilitators: 0,
  travel: 0,
  insurance: 150,
  paymentFeePercent: 3,
  planningDays: 5,
}

describe('calculateRetreatProfitability', () => {
  it('computes total revenue as guests * pricePerGuest', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.totalRevenue).toBe(14400)
  })

  it('computes total food cost as guests * nights * foodPerGuestPerDay', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.costBreakdown.food).toBe(2400)
  })

  it('computes payment fees as percentage of revenue', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.costBreakdown.paymentFees).toBeCloseTo(432, 2)
  })

  it('sums all cost categories into totalCosts', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    // 4500 + 2400 + 2500 + 800 + 0 + 0 + 150 + 432 = 10782
    expect(r.totalCosts).toBeCloseTo(10782, 2)
  })

  it('computes net profit as revenue minus total costs', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.netProfit).toBeCloseTo(3618, 2)
  })

  it('computes profit margin as netProfit / totalRevenue', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.profitMargin).toBeCloseTo(3618 / 14400, 4)
  })

  it('computes profit per workday from planningDays + nights', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.profitPerWorkday).toBeCloseTo(3618 / 10, 2)
  })

  it('computes breakeven guests as ceil of fixed costs over per-guest contribution', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    // fixed = venue + facilitator + marketing + insurance + co + travel = 4500+2500+800+150+0+0 = 7950
    // contribution per guest = price - foodPerDay*nights - price*paymentFee%
    //                        = 1200 - 200 - 36 = 964
    // breakeven = ceil(7950 / 964) = 9 (since 7950/964 ≈ 8.247)
    expect(r.breakevenGuests).toBe(9)
  })

  it('returns 0 margin and Infinity breakeven when revenue is zero', () => {
    const inputs: CalculatorInputs = { ...baseYogaInputs, guests: 0, pricePerGuest: 0 }
    const r = calculateRetreatProfitability(inputs)
    expect(r.totalRevenue).toBe(0)
    expect(r.profitMargin).toBe(0)
    expect(r.breakevenGuests).toBe(Number.POSITIVE_INFINITY)
  })

  it('handles a coaching retreat scenario (smaller, higher-priced)', () => {
    const inputs: CalculatorInputs = {
      ...baseYogaInputs,
      guests: 6,
      nights: 4,
      pricePerGuest: 3200,
      venueAccommodation: 3500,
      foodPerGuestPerDay: 50,
      facilitatorFee: 5000,
    }
    const r = calculateRetreatProfitability(inputs)
    expect(r.totalRevenue).toBe(19200)
    // food: 6*4*50 = 1200; payment fees: 19200*0.03 = 576
    // total costs: 3500+1200+5000+800+0+0+150+576 = 11226
    expect(r.totalCosts).toBeCloseTo(11226, 2)
    expect(r.netProfit).toBeCloseTo(7974, 2)
  })
})
```

- [ ] **Step 2: Run tests — verify they fail**

```bash
npm test
```

Expected: FAIL with "Cannot find module './calculate'" or similar.

- [ ] **Step 3: Implement calculate.ts**

Create `src/components/client/RetreatProfitabilityCalculator/calculate.ts`:

```ts
import type { CalculatorInputs, CalculatorResults } from '@/types/tools'

export function calculateRetreatProfitability(inputs: CalculatorInputs): CalculatorResults {
  const totalRevenue = inputs.guests * inputs.pricePerGuest

  const food = inputs.guests * inputs.nights * inputs.foodPerGuestPerDay
  const paymentFees = (totalRevenue * inputs.paymentFeePercent) / 100

  const costBreakdown = {
    venueAccommodation: inputs.venueAccommodation,
    food,
    facilitatorFee: inputs.facilitatorFee,
    marketingAndOther: inputs.marketingAndOther,
    coFacilitators: inputs.coFacilitators,
    travel: inputs.travel,
    insurance: inputs.insurance,
    paymentFees,
  }

  const totalCosts =
    costBreakdown.venueAccommodation +
    costBreakdown.food +
    costBreakdown.facilitatorFee +
    costBreakdown.marketingAndOther +
    costBreakdown.coFacilitators +
    costBreakdown.travel +
    costBreakdown.insurance +
    costBreakdown.paymentFees

  const netProfit = totalRevenue - totalCosts
  const profitMargin = totalRevenue > 0 ? netProfit / totalRevenue : 0

  const totalWorkdays = inputs.planningDays + inputs.nights
  const profitPerWorkday = totalWorkdays > 0 ? netProfit / totalWorkdays : 0

  const breakevenGuests = computeBreakevenGuests(inputs)

  return {
    totalRevenue,
    totalCosts,
    netProfit,
    profitMargin,
    profitPerWorkday,
    breakevenGuests,
    costBreakdown,
  }
}

function computeBreakevenGuests(inputs: CalculatorInputs): number {
  const fixedCosts =
    inputs.venueAccommodation +
    inputs.facilitatorFee +
    inputs.marketingAndOther +
    inputs.coFacilitators +
    inputs.travel +
    inputs.insurance

  const variableCostPerGuest =
    inputs.nights * inputs.foodPerGuestPerDay +
    (inputs.pricePerGuest * inputs.paymentFeePercent) / 100

  const contributionPerGuest = inputs.pricePerGuest - variableCostPerGuest

  if (contributionPerGuest <= 0) {
    return Number.POSITIVE_INFINITY
  }

  return Math.ceil(fixedCosts / contributionPerGuest)
}
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
npm test
```

Expected: PASS, 11/11 tests green.

- [ ] **Step 5: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add src/components/client/RetreatProfitabilityCalculator/calculate.ts \
        src/components/client/RetreatProfitabilityCalculator/calculate.test.ts
git commit -m "implement pure retreat profitability math with tests"
```

---

### Task 5: Implement URL state encoder/decoder (TDD)

**Files:**
- Create: `src/lib/tools/urlState.ts`
- Create: `src/lib/tools/urlState.test.ts`
- Create: `src/lib/tools/index.ts` (barrel)

**Goal:** Encode/decode `CalculatorInputs` to/from URL search params using the short keys from `CALCULATOR_URL_PARAMS`, so users can share their calculations.

- [ ] **Step 1: Write the test file**

Create `src/lib/tools/urlState.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { decodeCalculatorInputs, encodeCalculatorInputs } from './urlState'
import type { CalculatorInputs } from '@/types/tools'

const sample: CalculatorInputs = {
  guests: 12,
  nights: 5,
  pricePerGuest: 1200,
  venueAccommodation: 4500,
  foodPerGuestPerDay: 40,
  facilitatorFee: 2500,
  marketingAndOther: 800,
  coFacilitators: 0,
  travel: 0,
  insurance: 150,
  paymentFeePercent: 3,
  planningDays: 5,
}

describe('encodeCalculatorInputs', () => {
  it('encodes all numeric fields into URLSearchParams', () => {
    const params = encodeCalculatorInputs(sample)
    expect(params.get('g')).toBe('12')
    expect(params.get('n')).toBe('5')
    expect(params.get('p')).toBe('1200')
    expect(params.get('v')).toBe('4500')
    expect(params.get('f')).toBe('40')
    expect(params.get('ff')).toBe('2500')
    expect(params.get('m')).toBe('800')
    expect(params.get('cf')).toBe('0')
    expect(params.get('t')).toBe('0')
    expect(params.get('i')).toBe('150')
    expect(params.get('pf')).toBe('3')
    expect(params.get('pd')).toBe('5')
  })
})

describe('decodeCalculatorInputs', () => {
  it('round-trips through encode and decode unchanged', () => {
    const params = encodeCalculatorInputs(sample)
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded).toEqual(sample)
  })

  it('falls back to defaults for missing params', () => {
    const params = new URLSearchParams()
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded).toEqual(sample)
  })

  it('falls back to defaults for non-numeric values', () => {
    const params = new URLSearchParams({ g: 'abc' })
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded.guests).toBe(sample.guests)
  })

  it('falls back to defaults for negative or out-of-range values', () => {
    const params = new URLSearchParams({ g: '-5', n: '999' })
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded.guests).toBe(sample.guests)
    expect(decoded.nights).toBe(sample.nights)
  })

  it('preserves valid partial overrides', () => {
    const params = new URLSearchParams({ g: '20', p: '2000' })
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded.guests).toBe(20)
    expect(decoded.pricePerGuest).toBe(2000)
    expect(decoded.nights).toBe(sample.nights)
  })
})
```

- [ ] **Step 2: Run tests — verify failure**

```bash
npm test
```

Expected: FAIL with "Cannot find module './urlState'".

- [ ] **Step 3: Implement urlState.ts**

Create `src/lib/tools/urlState.ts`:

```ts
import { CALCULATOR_INPUT_RANGES, CALCULATOR_URL_PARAMS } from '@/constants/tools'
import type { CalculatorInputs } from '@/types/tools'

interface FieldSpec {
  key: keyof CalculatorInputs
  param: string
  min: number
  max: number
}

const FIELD_SPECS: FieldSpec[] = [
  { key: 'guests', param: CALCULATOR_URL_PARAMS.GUESTS, min: CALCULATOR_INPUT_RANGES.GUESTS_MIN, max: CALCULATOR_INPUT_RANGES.GUESTS_MAX },
  { key: 'nights', param: CALCULATOR_URL_PARAMS.NIGHTS, min: CALCULATOR_INPUT_RANGES.NIGHTS_MIN, max: CALCULATOR_INPUT_RANGES.NIGHTS_MAX },
  { key: 'pricePerGuest', param: CALCULATOR_URL_PARAMS.PRICE_PER_GUEST, min: CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MIN, max: CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MAX },
  { key: 'venueAccommodation', param: CALCULATOR_URL_PARAMS.VENUE, min: 0, max: 1_000_000 },
  { key: 'foodPerGuestPerDay', param: CALCULATOR_URL_PARAMS.FOOD_PER_DAY, min: 0, max: 500 },
  { key: 'facilitatorFee', param: CALCULATOR_URL_PARAMS.FACILITATOR_FEE, min: 0, max: 1_000_000 },
  { key: 'marketingAndOther', param: CALCULATOR_URL_PARAMS.MARKETING_OTHER, min: 0, max: 1_000_000 },
  { key: 'coFacilitators', param: CALCULATOR_URL_PARAMS.CO_FACILITATORS, min: 0, max: 1_000_000 },
  { key: 'travel', param: CALCULATOR_URL_PARAMS.TRAVEL, min: 0, max: 1_000_000 },
  { key: 'insurance', param: CALCULATOR_URL_PARAMS.INSURANCE, min: 0, max: 100_000 },
  { key: 'paymentFeePercent', param: CALCULATOR_URL_PARAMS.PAYMENT_FEE_PERCENT, min: 0, max: 20 },
  { key: 'planningDays', param: CALCULATOR_URL_PARAMS.PLANNING_DAYS, min: 0, max: 365 },
]

export function encodeCalculatorInputs(inputs: CalculatorInputs): URLSearchParams {
  const params = new URLSearchParams()
  for (const spec of FIELD_SPECS) {
    params.set(spec.param, String(inputs[spec.key]))
  }
  return params
}

export function decodeCalculatorInputs(
  params: URLSearchParams,
  defaults: CalculatorInputs
): CalculatorInputs {
  const decoded = { ...defaults }
  for (const spec of FIELD_SPECS) {
    const raw = params.get(spec.param)
    if (raw === null) continue
    const num = Number(raw)
    if (!Number.isFinite(num)) continue
    if (num < spec.min || num > spec.max) continue
    decoded[spec.key] = num
  }
  return decoded
}
```

- [ ] **Step 4: Create barrel**

Create `src/lib/tools/index.ts`:

```ts
export * from './urlState'
```

- [ ] **Step 5: Run tests — verify pass**

```bash
npm test
```

Expected: PASS, all url-state tests + math tests green.

- [ ] **Step 6: Lint and commit**

```bash
npm run lint
```

```bash
git add src/lib/tools/
git commit -m "add calculator URL state encoder/decoder with tests"
```

---

### Task 6: Create variant config data

**Files:**
- Create: `src/data/tools/calculatorVariants.ts`
- Create: `src/data/tools/index.ts` (barrel; will be extended later)

**Goal:** One typed config per variant with realistic placeholder defaults, locale-aware benchmarks, and copy. Benchmark numbers are placeholders to be replaced by the verification agent in Phase 5.

- [ ] **Step 1: Create the variants data file**

Create `src/data/tools/calculatorVariants.ts`:

```ts
import { ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type { VariantConfig } from '@/types/tools'

const GENERIC: VariantConfig = {
  variant: ToolVariant.GENERIC,
  defaults: {
    guests: 12, nights: 5, pricePerGuest: 1200,
    venueAccommodation: 4500, foodPerGuestPerDay: 40,
    facilitatorFee: 2500, marketingAndOther: 800,
    coFacilitators: 0, travel: 0, insurance: 150,
    paymentFeePercent: 3, planningDays: 5,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Retreats commonly charge €800–€2,500 per person depending on duration and positioning',
      [Language.NL]: 'Retraites rekenen doorgaans €800–€2.500 per persoon, afhankelijk van duur en positionering',
      [Language.DE]: 'Retreats berechnen üblicherweise €800–€2.500 pro Person, abhängig von Dauer und Positionierung',
      [Language.ES]: 'Los retiros suelen cobrar €800–€2.500 por persona según duración y posicionamiento',
      [Language.FR]: 'Les retraites facturent généralement 800–2 500 € par personne selon la durée et le positionnement',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Retreat-quality food typically runs €30–€55 per guest per day',
      [Language.NL]: 'Retraitewaardig eten kost meestal €30–€55 per gast per dag',
      [Language.DE]: 'Retreat-qualifiziertes Essen kostet typischerweise €30–€55 pro Gast pro Tag',
      [Language.ES]: 'La comida de calidad de retiro suele costar €30–€55 por huésped por día',
      [Language.FR]: 'Une restauration de qualité retraite coûte généralement 30–55 € par invité par jour',
    },
    facilitatorFee: {
      [Language.EN]: 'Pay yourself fairly — under-pricing your time leads to retreat burnout',
      [Language.NL]: 'Betaal jezelf eerlijk — je tijd onderwaarderen leidt tot retraite-burn-out',
      [Language.DE]: 'Bezahle dich fair — eigene Zeit zu unterbewerten führt zum Retreat-Burnout',
      [Language.ES]: 'Págate de forma justa — infravalorar tu tiempo provoca desgaste',
      [Language.FR]: 'Rémunérez-vous équitablement — sous-évaluer votre temps mène à l\'épuisement',
    },
    marketingAndOther: {
      [Language.EN]: 'Budget for ads, content, supplies, payment processing, and a contingency buffer',
      [Language.NL]: 'Reserveer budget voor advertenties, content, materialen, betalingsverwerking en een buffer',
      [Language.DE]: 'Budget für Anzeigen, Content, Material, Zahlungsabwicklung und einen Puffer',
      [Language.ES]: 'Presupuesta para anuncios, contenido, materiales, procesamiento de pagos y un margen',
      [Language.FR]: 'Prévoyez un budget pour publicités, contenu, fournitures, frais de paiement et imprévus',
    },
    venueAccommodation: {
      [Language.EN]: 'Total venue rental + accommodation for the entire retreat',
      [Language.NL]: 'Totaal van locatiehuur + accommodatie voor de hele retraite',
      [Language.DE]: 'Gesamte Locationmiete + Unterkunft für das gesamte Retreat',
      [Language.ES]: 'Alquiler total del lugar + alojamiento para todo el retiro',
      [Language.FR]: 'Location totale du lieu + hébergement pour toute la retraite',
    },
  },
  copy: {
    heroEyebrow: {
      [Language.EN]: 'Free tool', [Language.NL]: 'Gratis tool', [Language.DE]: 'Kostenloses Tool',
      [Language.ES]: 'Herramienta gratuita', [Language.FR]: 'Outil gratuit',
    },
    heroTitle: {
      [Language.EN]: 'Retreat Profitability Calculator',
      [Language.NL]: 'Retraite-winstgevendheidscalculator',
      [Language.DE]: 'Retreat-Rentabilitätsrechner',
      [Language.ES]: 'Calculadora de rentabilidad de retiros',
      [Language.FR]: 'Calculateur de rentabilité de retraite',
    },
    heroIntro: {
      [Language.EN]: 'Enter your guest count, price, and costs. See live revenue, profit margin, profit per workday, and breakeven occupancy. No signup required, share your numbers via link.',
      [Language.NL]: 'Voer aantal gasten, prijs en kosten in. Zie live omzet, marge, winst per werkdag en break-evenbezetting. Geen aanmelding nodig, deel je cijfers via een link.',
      [Language.DE]: 'Gib Gästezahl, Preis und Kosten ein. Sieh live Umsatz, Marge, Gewinn pro Arbeitstag und Break-even-Auslastung. Ohne Anmeldung, Zahlen per Link teilbar.',
      [Language.ES]: 'Introduce huéspedes, precio y costes. Ve en vivo ingresos, margen, beneficio por día de trabajo y ocupación de equilibrio. Sin registro, comparte por enlace.',
      [Language.FR]: 'Saisissez invités, prix et coûts. Voyez en direct le revenu, la marge, le bénéfice par jour de travail et le seuil de rentabilité. Sans inscription, partage par lien.',
    },
    metaTitle: {
      [Language.EN]: 'Retreat Profitability Calculator — Free Tool',
      [Language.NL]: 'Retraite-winstgevendheidscalculator — Gratis tool',
      [Language.DE]: 'Retreat-Rentabilitätsrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de rentabilidad de retiros — Herramienta gratuita',
      [Language.FR]: 'Calculateur de rentabilité de retraite — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Free interactive calculator for retreat facilitators. Plan revenue, costs, profit margin, breakeven, and per-workday earnings. Share results via link.',
      [Language.NL]: 'Gratis interactieve calculator voor retraitebegeleiders. Plan omzet, kosten, marge, break-even en winst per werkdag. Deel resultaten via een link.',
      [Language.DE]: 'Kostenloser interaktiver Rechner für Retreat-Facilitator. Plane Umsatz, Kosten, Marge, Break-even und Gewinn pro Arbeitstag. Teile per Link.',
      [Language.ES]: 'Calculadora gratuita para facilitadores de retiros. Planifica ingresos, costes, margen, equilibrio y ganancias por día. Comparte por enlace.',
      [Language.FR]: 'Calculateur gratuit pour facilitateurs de retraite. Planifiez revenus, coûts, marge, seuil de rentabilité et gains par jour. Partagez par lien.',
    },
  },
  relatedVariants: [ToolVariant.YOGA, ToolVariant.WELLNESS, ToolVariant.MEDITATION],
}

const YOGA: VariantConfig = {
  variant: ToolVariant.YOGA,
  defaults: {
    guests: 12, nights: 5, pricePerGuest: 1200,
    venueAccommodation: 4500, foodPerGuestPerDay: 40,
    facilitatorFee: 2500, marketingAndOther: 800,
    coFacilitators: 0, travel: 0, insurance: 150,
    paymentFeePercent: 3, planningDays: 5,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Yoga retreats typically charge €900–€1,800 per person for 5 nights',
      [Language.NL]: 'Yogaretraites rekenen doorgaans €900–€1.800 per persoon voor 5 nachten',
      [Language.DE]: 'Yoga-Retreats berechnen typischerweise €900–€1.800 pro Person für 5 Nächte',
      [Language.ES]: 'Los retiros de yoga suelen cobrar €900–€1.800 por persona por 5 noches',
      [Language.FR]: 'Les retraites de yoga facturent généralement 900–1 800 € par personne pour 5 nuits',
    },
    foodPerGuestPerDay: GENERIC.benchmarks.foodPerGuestPerDay,
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venueAccommodation: GENERIC.benchmarks.venueAccommodation,
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Yoga Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator yogaretraite',
      [Language.DE]: 'Yoga-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros de yoga',
      [Language.FR]: 'Calculateur de prix pour retraite de yoga',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your yoga retreat? Enter your guest count, nightly venue cost, food, and facilitator fee. The calculator shows revenue, profit margin, and the minimum guest count needed to break even.',
      [Language.NL]: 'Hoe prijs je je yogaretraite? Voer aantal gasten, locatiekosten, eten en docentenvergoeding in. De calculator toont omzet, marge en minimaal aantal gasten om break-even te draaien.',
      [Language.DE]: 'Wie sollst du dein Yoga-Retreat kalkulieren? Gib Gäste, Locationkosten, Essen und Honorar ein. Der Rechner zeigt Umsatz, Marge und Mindest-Teilnehmerzahl für Break-even.',
      [Language.ES]: '¿Cómo poner precio a tu retiro de yoga? Introduce huéspedes, coste del lugar, comida y honorarios. La calculadora muestra ingresos, margen y mínimo de huéspedes para equilibrio.',
      [Language.FR]: 'Comment tarifer votre retraite de yoga ? Saisissez invités, coût du lieu, restauration et honoraires. Le calculateur affiche revenu, marge et nombre minimum d\'invités au seuil de rentabilité.',
    },
    metaTitle: {
      [Language.EN]: 'Yoga Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator yogaretraite — Gratis tool',
      [Language.DE]: 'Yoga-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros de yoga — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite de yoga — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'How to price a yoga retreat — free interactive calculator. Plan guests, costs, margin, and breakeven. Includes industry benchmark ranges.',
      [Language.NL]: 'Hoe prijs je een yogaretraite — gratis interactieve calculator. Plan gasten, kosten, marge en break-even. Inclusief branche-benchmarks.',
      [Language.DE]: 'Wie ein Yoga-Retreat kalkulieren — kostenloser Rechner. Plane Gäste, Kosten, Marge und Break-even. Inklusive Branchen-Benchmarks.',
      [Language.ES]: 'Cómo fijar el precio de un retiro de yoga — calculadora gratuita. Planifica huéspedes, costes, margen y equilibrio. Con referencias del sector.',
      [Language.FR]: 'Comment tarifer une retraite de yoga — calculateur gratuit. Planifiez invités, coûts, marge et seuil de rentabilité. Avec références du secteur.',
    },
  },
  relatedVariants: [ToolVariant.MEDITATION, ToolVariant.WELLNESS, ToolVariant.GENERIC],
}

const WELLNESS: VariantConfig = {
  variant: ToolVariant.WELLNESS,
  defaults: {
    guests: 10, nights: 7, pricePerGuest: 1800,
    venueAccommodation: 7000, foodPerGuestPerDay: 55,
    facilitatorFee: 4000, marketingAndOther: 1200,
    coFacilitators: 800, travel: 0, insurance: 200,
    paymentFeePercent: 3, planningDays: 7,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Wellness/detox retreats typically charge €1,500–€2,500 per person for 6–8 nights',
      [Language.NL]: 'Wellness-/detoxretraites rekenen €1.500–€2.500 per persoon voor 6–8 nachten',
      [Language.DE]: 'Wellness-/Detox-Retreats berechnen €1.500–€2.500 pro Person für 6–8 Nächte',
      [Language.ES]: 'Los retiros wellness/detox cobran €1.500–€2.500 por persona por 6–8 noches',
      [Language.FR]: 'Les retraites bien-être/détox facturent 1 500–2 500 € par personne pour 6–8 nuits',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Wellness food (organic, often catered) commonly runs €45–€70 per guest per day',
      [Language.NL]: 'Wellness-eten (biologisch, vaak gecaterd) kost meestal €45–€70 per gast per dag',
      [Language.DE]: 'Wellness-Verpflegung (bio, oft gecatert) liegt typischerweise bei €45–€70 pro Gast pro Tag',
      [Language.ES]: 'La comida wellness (orgánica, a menudo catering) cuesta €45–€70 por huésped por día',
      [Language.FR]: 'La restauration bien-être (bio, souvent traiteur) coûte 45–70 € par invité par jour',
    },
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venueAccommodation: GENERIC.benchmarks.venueAccommodation,
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Wellness Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator wellnessretraite',
      [Language.DE]: 'Wellness-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros wellness',
      [Language.FR]: 'Calculateur de prix pour retraite bien-être',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your wellness or detox retreat? Wellness retreats run longer and pricier than yoga, with higher food and facilitator costs. This calculator shows your full P&L with realistic wellness defaults.',
      [Language.NL]: 'Hoe prijs je je wellness- of detoxretraite? Wellnessretraites duren langer en zijn duurder dan yoga, met hogere kosten voor eten en begeleiding. Deze calculator toont je volledige P&L met realistische wellness-uitgangswaarden.',
      [Language.DE]: 'Wie kalkulierst du dein Wellness- oder Detox-Retreat? Wellness-Retreats sind länger und teurer als Yoga, mit höheren Verpflegungs- und Honorarkosten. Dieser Rechner zeigt deine volle GuV mit realistischen Wellness-Werten.',
      [Language.ES]: '¿Cómo fijar el precio de tu retiro wellness o detox? Los retiros wellness son más largos y caros que los de yoga, con mayores costes de comida y facilitación. Esta calculadora muestra tu P&L completo con valores realistas.',
      [Language.FR]: 'Comment tarifer votre retraite bien-être ou détox ? Les retraites bien-être sont plus longues et plus coûteuses que le yoga. Ce calculateur affiche votre compte de résultat complet avec des valeurs réalistes.',
    },
    metaTitle: {
      [Language.EN]: 'Wellness Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator wellnessretraite — Gratis tool',
      [Language.DE]: 'Wellness-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros wellness — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite bien-être — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Price your wellness or detox retreat — free P&L calculator. Defaults tuned for 6–8 night wellness retreats. Plan margin, breakeven, and per-workday profit.',
      [Language.NL]: 'Prijs je wellness- of detoxretraite — gratis P&L-calculator. Standaardwaarden afgestemd op 6–8 nachten. Plan marge, break-even en winst per werkdag.',
      [Language.DE]: 'Kalkuliere dein Wellness-Retreat — kostenloser GuV-Rechner. Voreinstellungen für 6–8 Nächte. Plane Marge, Break-even und Gewinn pro Arbeitstag.',
      [Language.ES]: 'Calcula tu retiro wellness o detox — calculadora gratuita. Valores por defecto para 6–8 noches. Planifica margen, equilibrio y ganancias por día.',
      [Language.FR]: 'Tarifez votre retraite bien-être ou détox — calculateur gratuit. Valeurs par défaut pour 6–8 nuits. Planifiez marge, seuil de rentabilité et gains par jour.',
    },
  },
  relatedVariants: [ToolVariant.YOGA, ToolVariant.MEDITATION, ToolVariant.GENERIC],
}

const MEDITATION: VariantConfig = {
  variant: ToolVariant.MEDITATION,
  defaults: {
    guests: 14, nights: 4, pricePerGuest: 900,
    venueAccommodation: 3500, foodPerGuestPerDay: 35,
    facilitatorFee: 2000, marketingAndOther: 600,
    coFacilitators: 0, travel: 0, insurance: 150,
    paymentFeePercent: 3, planningDays: 4,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Meditation retreats typically charge €700–€1,200 per person for 3–5 nights',
      [Language.NL]: 'Meditatieretraites rekenen €700–€1.200 per persoon voor 3–5 nachten',
      [Language.DE]: 'Meditations-Retreats berechnen €700–€1.200 pro Person für 3–5 Nächte',
      [Language.ES]: 'Los retiros de meditación cobran €700–€1.200 por persona por 3–5 noches',
      [Language.FR]: 'Les retraites de méditation facturent 700–1 200 € par personne pour 3–5 nuits',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Simple, often vegetarian meditation-retreat food runs €25–€45 per guest per day',
      [Language.NL]: 'Eenvoudig, vaak vegetarisch eten op meditatieretraite kost €25–€45 per gast per dag',
      [Language.DE]: 'Einfache, oft vegetarische Meditations-Retreat-Verpflegung liegt bei €25–€45 pro Gast pro Tag',
      [Language.ES]: 'La comida sencilla y a menudo vegetariana cuesta €25–€45 por huésped por día',
      [Language.FR]: 'Une restauration simple, souvent végétarienne, coûte 25–45 € par invité par jour',
    },
    facilitatorFee: GENERIC.benchmarks.facilitatorFee,
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venueAccommodation: GENERIC.benchmarks.venueAccommodation,
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Meditation Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator meditatieretraite',
      [Language.DE]: 'Meditations-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros de meditación',
      [Language.FR]: 'Calculateur de prix pour retraite de méditation',
    },
    heroIntro: {
      [Language.EN]: 'How should you price your meditation retreat? Meditation retreats are usually shorter, larger groups, lower per-person price than wellness. The defaults reflect typical 4-night silent or guided meditation programs.',
      [Language.NL]: 'Hoe prijs je je meditatieretraite? Meditatieretraites zijn meestal korter, grotere groepen, lagere prijs per persoon dan wellness. De uitgangswaarden weerspiegelen typische 4-nachts stille of begeleide programma\'s.',
      [Language.DE]: 'Wie kalkulierst du dein Meditations-Retreat? Meditations-Retreats sind meist kürzer, mit größeren Gruppen und geringerem Preis pro Person als Wellness. Die Voreinstellungen entsprechen typischen 4-Nächte-Programmen.',
      [Language.ES]: '¿Cómo fijar el precio de un retiro de meditación? Suelen ser más cortos, grupos más grandes y precio menor que wellness. Los valores por defecto reflejan programas típicos de 4 noches.',
      [Language.FR]: 'Comment tarifer votre retraite de méditation ? Souvent plus courtes, groupes plus larges, prix par personne plus bas. Les valeurs par défaut reflètent des programmes typiques de 4 nuits.',
    },
    metaTitle: {
      [Language.EN]: 'Meditation Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator meditatieretraite — Gratis tool',
      [Language.DE]: 'Meditations-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros de meditación — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite de méditation — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Price your meditation retreat — free P&L calculator. Defaults tuned for 3–5 night meditation programs. Plan revenue, margin, breakeven.',
      [Language.NL]: 'Prijs je meditatieretraite — gratis P&L-calculator. Standaardwaarden voor 3–5-nachtprogramma\'s. Plan omzet, marge, break-even.',
      [Language.DE]: 'Kalkuliere dein Meditations-Retreat — kostenloser Rechner. Voreinstellungen für 3–5 Nächte. Plane Umsatz, Marge, Break-even.',
      [Language.ES]: 'Calcula tu retiro de meditación — calculadora gratuita. Valores para programas de 3–5 noches. Planifica ingresos, margen, equilibrio.',
      [Language.FR]: 'Tarifez votre retraite de méditation — calculateur gratuit. Valeurs pour 3–5 nuits. Planifiez revenu, marge, seuil de rentabilité.',
    },
  },
  relatedVariants: [ToolVariant.YOGA, ToolVariant.WELLNESS, ToolVariant.GENERIC],
}

const COACHING: VariantConfig = {
  variant: ToolVariant.COACHING,
  defaults: {
    guests: 6, nights: 4, pricePerGuest: 3200,
    venueAccommodation: 4000, foodPerGuestPerDay: 50,
    facilitatorFee: 5000, marketingAndOther: 1500,
    coFacilitators: 0, travel: 0, insurance: 200,
    paymentFeePercent: 3, planningDays: 7,
  },
  benchmarks: {
    pricePerGuest: {
      [Language.EN]: 'Coaching retreats and intensives typically charge €2,000–€5,000 per person for 3–5 nights',
      [Language.NL]: 'Coaching-retraites en intensives rekenen €2.000–€5.000 per persoon voor 3–5 nachten',
      [Language.DE]: 'Coaching-Retreats und Intensives berechnen €2.000–€5.000 pro Person für 3–5 Nächte',
      [Language.ES]: 'Los retiros e intensivos de coaching cobran €2.000–€5.000 por persona por 3–5 noches',
      [Language.FR]: 'Les retraites et intensifs de coaching facturent 2 000–5 000 € par personne pour 3–5 nuits',
    },
    foodPerGuestPerDay: {
      [Language.EN]: 'Coaching retreats often use higher-end catering — €45–€80 per guest per day is common',
      [Language.NL]: 'Coaching-retraites gebruiken vaak hoogwaardige catering — €45–€80 per gast per dag is gebruikelijk',
      [Language.DE]: 'Coaching-Retreats nutzen oft gehobenes Catering — €45–€80 pro Gast pro Tag ist üblich',
      [Language.ES]: 'Los retiros de coaching usan catering de gama alta — €45–€80 por huésped por día es común',
      [Language.FR]: 'Les retraites de coaching utilisent souvent un traiteur haut de gamme — 45–80 € par invité par jour est courant',
    },
    facilitatorFee: {
      [Language.EN]: 'Coaching intensives are 1:1-heavy — your time commands a premium. Don\'t under-price.',
      [Language.NL]: 'Coaching-intensives zijn 1-op-1-zwaar — je tijd verdient een premium. Niet onderwaarderen.',
      [Language.DE]: 'Coaching-Intensives sind 1:1-intensiv — deine Zeit verdient einen Aufschlag. Nicht unterbewerten.',
      [Language.ES]: 'Los intensivos de coaching son intensivos en 1:1 — tu tiempo merece prima. No infravalorar.',
      [Language.FR]: 'Les intensifs de coaching sont riches en 1:1 — votre temps vaut une prime. Ne pas sous-évaluer.',
    },
    marketingAndOther: GENERIC.benchmarks.marketingAndOther,
    venueAccommodation: GENERIC.benchmarks.venueAccommodation,
  },
  copy: {
    heroEyebrow: GENERIC.copy.heroEyebrow,
    heroTitle: {
      [Language.EN]: 'Coaching Retreat Pricing Calculator',
      [Language.NL]: 'Prijscalculator coachingretraite',
      [Language.DE]: 'Coaching-Retreat-Preisrechner',
      [Language.ES]: 'Calculadora de precios para retiros de coaching',
      [Language.FR]: 'Calculateur de prix pour retraite de coaching',
    },
    heroIntro: {
      [Language.EN]: 'Pricing a coaching retreat or intensive is different from group wellness work — smaller groups, higher per-person prices, more 1:1 time. This calculator is tuned for coaching economics.',
      [Language.NL]: 'Een coachingretraite of intensive prijzen is anders dan groepswellness — kleinere groepen, hogere prijs per persoon, meer 1-op-1-tijd. Deze calculator is afgestemd op coaching-economie.',
      [Language.DE]: 'Ein Coaching-Retreat oder Intensive zu kalkulieren unterscheidet sich von Gruppen-Wellness — kleinere Gruppen, höherer Preis pro Person, mehr 1:1-Zeit. Dieser Rechner ist auf Coaching abgestimmt.',
      [Language.ES]: 'Tarifar un retiro o intensivo de coaching es distinto del wellness grupal — grupos más pequeños, precios más altos, más tiempo 1:1. Calculadora ajustada al coaching.',
      [Language.FR]: 'Tarifer une retraite ou un intensif de coaching diffère du bien-être de groupe — groupes plus petits, prix plus élevés, plus de 1:1. Calculateur adapté au coaching.',
    },
    metaTitle: {
      [Language.EN]: 'Coaching Retreat Pricing Calculator — Free Tool',
      [Language.NL]: 'Prijscalculator coachingretraite — Gratis tool',
      [Language.DE]: 'Coaching-Retreat-Preisrechner — Kostenloses Tool',
      [Language.ES]: 'Calculadora de precios para retiros de coaching — Herramienta gratuita',
      [Language.FR]: 'Calculateur de prix pour retraite de coaching — Outil gratuit',
    },
    metaDescription: {
      [Language.EN]: 'Price your coaching retreat or intensive — free P&L calculator. Defaults for 4–8 guest, 3–5 night programs. Plan margin, breakeven, per-workday profit.',
      [Language.NL]: 'Prijs je coachingretraite of intensive — gratis P&L-calculator. Standaardwaarden voor 4–8 gasten, 3–5 nachten. Plan marge, break-even, winst per werkdag.',
      [Language.DE]: 'Kalkuliere dein Coaching-Retreat — kostenloser Rechner. Voreinstellungen für 4–8 Gäste, 3–5 Nächte. Plane Marge, Break-even, Gewinn pro Arbeitstag.',
      [Language.ES]: 'Calcula tu retiro de coaching — calculadora gratuita. Valores para 4–8 huéspedes, 3–5 noches. Planifica margen, equilibrio, ganancias por día.',
      [Language.FR]: 'Tarifez votre retraite de coaching — calculateur gratuit. Valeurs pour 4–8 invités, 3–5 nuits. Planifiez marge, seuil de rentabilité, gains par jour.',
    },
  },
  relatedVariants: [ToolVariant.WELLNESS, ToolVariant.GENERIC],
}

export const CALCULATOR_VARIANTS: Record<ToolVariant, VariantConfig> = {
  [ToolVariant.GENERIC]: GENERIC,
  [ToolVariant.YOGA]: YOGA,
  [ToolVariant.WELLNESS]: WELLNESS,
  [ToolVariant.MEDITATION]: MEDITATION,
  [ToolVariant.COACHING]: COACHING,
}
```

- [ ] **Step 2: Create the data barrel**

Create `src/data/tools/index.ts`:

```ts
export * from './calculatorVariants'
```

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/data/tools/
git commit -m "add calculator variant configs (yoga, wellness, meditation, coaching, generic)"
```

---

## Phase 2 — Calculator Client Component

### Task 7: Calculator state hook with URL sync

**Files:**
- Create: `src/components/client/RetreatProfitabilityCalculator/useCalculator.ts`

**Goal:** A React hook that owns calculator state, derives results via `calculate.ts`, and syncs state to URL search params (debounced, replaceState only).

- [ ] **Step 1: Create the hook**

Create `src/components/client/RetreatProfitabilityCalculator/useCalculator.ts`:

```ts
'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { calculateRetreatProfitability } from './calculate'
import { decodeCalculatorInputs, encodeCalculatorInputs } from '@/lib/tools'
import type { CalculatorInputs, CalculatorResults } from '@/types/tools'

const URL_DEBOUNCE_MS = 300

interface UseCalculatorReturn {
  inputs: CalculatorInputs
  results: CalculatorResults
  setInput: <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => void
  reset: () => void
}

export function useCalculator(defaults: CalculatorInputs): UseCalculatorReturn {
  const [inputs, setInputs] = useState<CalculatorInputs>(() => {
    if (typeof window === 'undefined') return defaults
    const params = new URLSearchParams(window.location.search)
    return decodeCalculatorInputs(params, defaults)
  })

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      const params = encodeCalculatorInputs(inputs)
      const newUrl = `${window.location.pathname}?${params.toString()}`
      window.history.replaceState(null, '', newUrl)
    }, URL_DEBOUNCE_MS)

    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current)
    }
  }, [inputs])

  const setInput = useCallback(
    <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => {
      setInputs((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const reset = useCallback(() => {
    setInputs(defaults)
  }, [defaults])

  const results = useMemo(() => calculateRetreatProfitability(inputs), [inputs])

  return { inputs, results, setInput, reset }
}
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/client/RetreatProfitabilityCalculator/useCalculator.ts
git commit -m "add useCalculator hook with debounced URL state sync"
```

---

### Task 8: Inputs panel component

**Files:**
- Create: `src/components/client/RetreatProfitabilityCalculator/InputsPanel.tsx`
- Create: `src/components/client/RetreatProfitabilityCalculator/AdvancedDisclosure.tsx`

**Goal:** Renders the seven primary input fields (sliders + numbers) with inline benchmark helpers, plus a collapsible advanced section for the remaining four fields.

- [ ] **Step 1: Create AdvancedDisclosure**

Create `src/components/client/RetreatProfitabilityCalculator/AdvancedDisclosure.tsx`:

```tsx
'use client'

import { useState, type ReactNode } from 'react'

import styles from './RetreatProfitabilityCalculator.module.css'

interface AdvancedDisclosureProps {
  label: string
  children: ReactNode
}

export function AdvancedDisclosure({ label, children }: AdvancedDisclosureProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.advancedWrapper}>
      <button
        type="button"
        className={styles.advancedToggle}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '−' : '+'} {label}
      </button>
      {open && <div className={styles.advancedContent}>{children}</div>}
    </div>
  )
}
```

- [ ] **Step 2: Create InputsPanel**

Create `src/components/client/RetreatProfitabilityCalculator/InputsPanel.tsx`:

```tsx
'use client'

import { CALCULATOR_INPUT_RANGES } from '@/constants/tools'
import { Language } from '@/types/common'
import type { CalculatorInputs, VariantConfig } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import { AdvancedDisclosure } from './AdvancedDisclosure'
import styles from './RetreatProfitabilityCalculator.module.css'

interface InputsPanelProps {
  inputs: CalculatorInputs
  variant: VariantConfig
  locale: Language
  t: Dictionary
  onChange: <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => void
  onReset: () => void
}

export function InputsPanel({ inputs, variant, locale, t, onChange, onReset }: InputsPanelProps) {
  const labels = t.tools.calculator.inputs

  return (
    <div className={styles.inputsPanel}>
      <SliderField
        label={labels.guestsLabel}
        value={inputs.guests}
        min={CALCULATOR_INPUT_RANGES.GUESTS_MIN}
        max={CALCULATOR_INPUT_RANGES.GUESTS_MAX}
        step={1}
        unitSuffix={labels.guestsUnit}
        onChange={(v) => onChange('guests', v)}
      />
      <SliderField
        label={labels.nightsLabel}
        value={inputs.nights}
        min={CALCULATOR_INPUT_RANGES.NIGHTS_MIN}
        max={CALCULATOR_INPUT_RANGES.NIGHTS_MAX}
        step={1}
        unitSuffix={labels.nightsUnit}
        onChange={(v) => onChange('nights', v)}
      />
      <SliderField
        label={labels.pricePerGuestLabel}
        value={inputs.pricePerGuest}
        min={CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MIN}
        max={CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MAX}
        step={50}
        unitPrefix="€"
        helper={variant.benchmarks.pricePerGuest[locale]}
        onChange={(v) => onChange('pricePerGuest', v)}
      />
      <NumberField
        label={labels.venueAccommodationLabel}
        value={inputs.venueAccommodation}
        unitPrefix="€"
        helper={variant.benchmarks.venueAccommodation[locale]}
        onChange={(v) => onChange('venueAccommodation', v)}
      />
      <NumberField
        label={labels.foodPerGuestPerDayLabel}
        value={inputs.foodPerGuestPerDay}
        unitPrefix="€"
        unitSuffix={labels.foodUnit}
        helper={variant.benchmarks.foodPerGuestPerDay[locale]}
        onChange={(v) => onChange('foodPerGuestPerDay', v)}
      />
      <NumberField
        label={labels.facilitatorFeeLabel}
        value={inputs.facilitatorFee}
        unitPrefix="€"
        helper={variant.benchmarks.facilitatorFee[locale]}
        onChange={(v) => onChange('facilitatorFee', v)}
      />
      <NumberField
        label={labels.marketingAndOtherLabel}
        value={inputs.marketingAndOther}
        unitPrefix="€"
        helper={variant.benchmarks.marketingAndOther[locale]}
        onChange={(v) => onChange('marketingAndOther', v)}
      />

      <AdvancedDisclosure label={labels.advancedLabel}>
        <NumberField
          label={labels.coFacilitatorsLabel}
          value={inputs.coFacilitators}
          unitPrefix="€"
          onChange={(v) => onChange('coFacilitators', v)}
        />
        <NumberField
          label={labels.travelLabel}
          value={inputs.travel}
          unitPrefix="€"
          onChange={(v) => onChange('travel', v)}
        />
        <NumberField
          label={labels.insuranceLabel}
          value={inputs.insurance}
          unitPrefix="€"
          onChange={(v) => onChange('insurance', v)}
        />
        <NumberField
          label={labels.paymentFeePercentLabel}
          value={inputs.paymentFeePercent}
          unitSuffix="%"
          step={0.1}
          onChange={(v) => onChange('paymentFeePercent', v)}
        />
        <NumberField
          label={labels.planningDaysLabel}
          value={inputs.planningDays}
          unitSuffix={labels.daysUnit}
          step={1}
          onChange={(v) => onChange('planningDays', v)}
        />
      </AdvancedDisclosure>

      <button type="button" className={styles.resetButton} onClick={onReset}>
        {labels.resetLabel}
      </button>
    </div>
  )
}

interface SliderFieldProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  unitPrefix?: string
  unitSuffix?: string
  helper?: string
  onChange: (value: number) => void
}

function SliderField({ label, value, min, max, step, unitPrefix, unitSuffix, helper, onChange }: SliderFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>
        <span>{label}</span>
        <span className={styles.fieldValue}>
          {unitPrefix}
          {value.toLocaleString()}
          {unitSuffix && ` ${unitSuffix}`}
        </span>
      </label>
      <input
        type="range"
        className={styles.slider}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {helper && <p className={styles.fieldHelper}>{helper}</p>}
    </div>
  )
}

interface NumberFieldProps {
  label: string
  value: number
  unitPrefix?: string
  unitSuffix?: string
  step?: number
  helper?: string
  onChange: (value: number) => void
}

function NumberField({ label, value, unitPrefix, unitSuffix, step = 1, helper, onChange }: NumberFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>
        <span>{label}</span>
      </label>
      <div className={styles.numberInputWrap}>
        {unitPrefix && <span className={styles.unitPrefix}>{unitPrefix}</span>}
        <input
          type="number"
          className={styles.numberInput}
          value={value}
          step={step}
          min={0}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
        />
        {unitSuffix && <span className={styles.unitSuffix}>{unitSuffix}</span>}
      </div>
      {helper && <p className={styles.fieldHelper}>{helper}</p>}
    </div>
  )
}
```

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: PASS (note: TypeScript will complain about `t.tools.calculator.inputs` not existing yet — this is fine; the dictionary type extension comes in Task 13. Defer the typecheck pass until then. If lint blocks builds, add a minimal placeholder to the dictionary types now to satisfy the compiler.)

- [ ] **Step 4: Commit**

```bash
git add src/components/client/RetreatProfitabilityCalculator/InputsPanel.tsx \
        src/components/client/RetreatProfitabilityCalculator/AdvancedDisclosure.tsx
git commit -m "add calculator inputs panel and advanced disclosure"
```

---

### Task 9: Results panel + cost breakdown bar

**Files:**
- Create: `src/components/client/RetreatProfitabilityCalculator/ResultsPanel.tsx`
- Create: `src/components/client/RetreatProfitabilityCalculator/CostBreakdownBar.tsx`

**Goal:** Render the live-updating P&L summary as headline number + narrative sentence + breakdown table + stacked-bar visual.

- [ ] **Step 1: Create CostBreakdownBar**

Create `src/components/client/RetreatProfitabilityCalculator/CostBreakdownBar.tsx`:

```tsx
'use client'

import type { CalculatorResults } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import styles from './RetreatProfitabilityCalculator.module.css'

interface CostBreakdownBarProps {
  results: CalculatorResults
  t: Dictionary
}

export function CostBreakdownBar({ results, t }: CostBreakdownBarProps) {
  const labels = t.tools.calculator.results.breakdownLabels
  const total = Math.max(results.totalRevenue, 1) // avoid div-by-zero
  const segments = [
    { key: 'venue', label: labels.venue, value: results.costBreakdown.venueAccommodation, color: 'var(--bar-venue)' },
    { key: 'food', label: labels.food, value: results.costBreakdown.food, color: 'var(--bar-food)' },
    { key: 'facilitator', label: labels.facilitator, value: results.costBreakdown.facilitatorFee, color: 'var(--bar-facilitator)' },
    { key: 'marketing', label: labels.marketing, value: results.costBreakdown.marketingAndOther, color: 'var(--bar-marketing)' },
    { key: 'co', label: labels.coFacilitators, value: results.costBreakdown.coFacilitators, color: 'var(--bar-co)' },
    { key: 'travel', label: labels.travel, value: results.costBreakdown.travel, color: 'var(--bar-travel)' },
    { key: 'insurance', label: labels.insurance, value: results.costBreakdown.insurance, color: 'var(--bar-insurance)' },
    { key: 'fees', label: labels.fees, value: results.costBreakdown.paymentFees, color: 'var(--bar-fees)' },
  ].filter((s) => s.value > 0)

  const profitWidth = Math.max(0, (results.netProfit / total) * 100)

  return (
    <div className={styles.breakdownBar} role="img" aria-label={labels.barAriaLabel}>
      <div className={styles.bar}>
        {segments.map((seg) => (
          <div
            key={seg.key}
            className={styles.barSegment}
            style={{ width: `${(seg.value / total) * 100}%`, background: seg.color }}
            title={`${seg.label}: €${Math.round(seg.value).toLocaleString()}`}
          />
        ))}
        {results.netProfit > 0 && (
          <div
            className={styles.barProfitSegment}
            style={{ width: `${profitWidth}%` }}
            title={`${labels.profit}: €${Math.round(results.netProfit).toLocaleString()}`}
          />
        )}
      </div>
      <ul className={styles.barLegend}>
        {segments.map((seg) => (
          <li key={seg.key} className={styles.barLegendItem}>
            <span className={styles.barLegendSwatch} style={{ background: seg.color }} aria-hidden />
            <span>{seg.label}</span>
            <span className={styles.barLegendValue}>€{Math.round(seg.value).toLocaleString()}</span>
          </li>
        ))}
        {results.netProfit > 0 && (
          <li className={styles.barLegendItem}>
            <span className={styles.barLegendSwatch} style={{ background: 'var(--bar-profit)' }} aria-hidden />
            <span>{labels.profit}</span>
            <span className={styles.barLegendValue}>€{Math.round(results.netProfit).toLocaleString()}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
```

- [ ] **Step 2: Create ResultsPanel**

Create `src/components/client/RetreatProfitabilityCalculator/ResultsPanel.tsx`:

```tsx
'use client'

import type { CalculatorInputs, CalculatorResults } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import { CostBreakdownBar } from './CostBreakdownBar'
import styles from './RetreatProfitabilityCalculator.module.css'

interface ResultsPanelProps {
  inputs: CalculatorInputs
  results: CalculatorResults
  t: Dictionary
}

const formatEuro = (n: number): string => `€${Math.round(n).toLocaleString()}`
const formatPercent = (n: number): string => `${Math.round(n * 100)}%`

export function ResultsPanel({ inputs, results, t }: ResultsPanelProps) {
  const labels = t.tools.calculator.results
  const isProfit = results.netProfit >= 0
  const breakeven = Number.isFinite(results.breakevenGuests)
    ? labels.breakevenSentence
        .replace('{guests}', String(results.breakevenGuests))
        .replace('{price}', formatEuro(inputs.pricePerGuest))
    : labels.breakevenImpossible

  const narrative = labels.headlineSentence
    .replace('{price}', formatEuro(inputs.pricePerGuest))
    .replace('{guests}', String(inputs.guests))
    .replace('{profit}', formatEuro(results.netProfit))
    .replace('{margin}', formatPercent(results.profitMargin))

  return (
    <div className={styles.resultsPanel}>
      <p className={styles.resultsKicker}>{labels.kicker}</p>
      <p className={`${styles.headline} ${isProfit ? styles.headlineProfit : styles.headlineLoss}`}>
        {formatEuro(results.netProfit)}
      </p>
      <p className={styles.narrative}>{narrative}</p>

      <dl className={styles.metricsGrid}>
        <div className={styles.metric}>
          <dt>{labels.totalRevenue}</dt>
          <dd>{formatEuro(results.totalRevenue)}</dd>
        </div>
        <div className={styles.metric}>
          <dt>{labels.totalCosts}</dt>
          <dd>{formatEuro(results.totalCosts)}</dd>
        </div>
        <div className={styles.metric}>
          <dt>{labels.profitMargin}</dt>
          <dd>{formatPercent(results.profitMargin)}</dd>
        </div>
        <div className={styles.metric}>
          <dt>{labels.profitPerWorkday}</dt>
          <dd>{formatEuro(results.profitPerWorkday)}</dd>
        </div>
      </dl>

      <p className={styles.breakeven}>{breakeven}</p>

      <CostBreakdownBar results={results} t={t} />
    </div>
  )
}
```

- [ ] **Step 3: Lint and commit**

```bash
npm run lint
```

```bash
git add src/components/client/RetreatProfitabilityCalculator/ResultsPanel.tsx \
        src/components/client/RetreatProfitabilityCalculator/CostBreakdownBar.tsx
git commit -m "add calculator results panel and cost breakdown visual"
```

---

### Task 10: Share link + email capture components

**Files:**
- Create: `src/components/client/RetreatProfitabilityCalculator/ShareLink.tsx`
- Create: `src/components/client/RetreatProfitabilityCalculator/EmailCapture.tsx`

**Goal:** "Copy link" button (uses Clipboard API) and the optional email-PDF form. The email form calls a server action created in Task 12.

- [ ] **Step 1: Create ShareLink**

Create `src/components/client/RetreatProfitabilityCalculator/ShareLink.tsx`:

```tsx
'use client'

import { useState } from 'react'

import { track } from '@vercel/analytics'

import { CALCULATOR_ANALYTICS_EVENTS } from '@/constants/tools'
import { ToolVariant } from '@/constants/tools'
import type { Dictionary } from '@/i18n/types'

import styles from './RetreatProfitabilityCalculator.module.css'

interface ShareLinkProps {
  variant: ToolVariant
  t: Dictionary
}

export function ShareLink({ variant, t }: ShareLinkProps) {
  const labels = t.tools.calculator.share
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (typeof window === 'undefined') return
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      track(CALCULATOR_ANALYTICS_EVENTS.SHARED, { variant })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard permission denied or unsupported — silent no-op
    }
  }

  return (
    <button type="button" className={styles.shareButton} onClick={handleCopy}>
      {copied ? labels.copied : labels.copy}
    </button>
  )
}
```

- [ ] **Step 2: Create EmailCapture**

Create `src/components/client/RetreatProfitabilityCalculator/EmailCapture.tsx`:

```tsx
'use client'

import { useState, useTransition } from 'react'

import { track } from '@vercel/analytics'

import { emailCalculatorSummary } from '@/actions/tools'
import { CALCULATOR_ANALYTICS_EVENTS, ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type { CalculatorInputs, CalculatorResults } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import styles from './RetreatProfitabilityCalculator.module.css'

interface EmailCaptureProps {
  variant: ToolVariant
  locale: Language
  inputs: CalculatorInputs
  results: CalculatorResults
  t: Dictionary
}

type Status = 'idle' | 'success' | 'error'

export function EmailCapture({ variant, locale, inputs, results, t }: EmailCaptureProps) {
  const labels = t.tools.calculator.email
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [pending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      const result = await emailCalculatorSummary({
        email,
        inputs,
        results,
        variant,
        newsletterOptIn: optIn,
        locale,
      })
      if (result.success) {
        setStatus('success')
        track(CALCULATOR_ANALYTICS_EVENTS.EMAIL_CAPTURED, { variant })
      } else {
        setStatus('error')
      }
    })
  }

  if (status === 'success') {
    return <p className={styles.emailSuccess}>{labels.success}</p>
  }

  return (
    <form className={styles.emailForm} onSubmit={handleSubmit}>
      <p className={styles.emailHeading}>{labels.heading}</p>
      <div className={styles.emailFields}>
        <input
          type="email"
          required
          className={styles.emailInput}
          placeholder={labels.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label={labels.placeholder}
        />
        <button type="submit" className={styles.emailSubmit} disabled={pending}>
          {pending ? labels.sending : labels.submit}
        </button>
      </div>
      <label className={styles.emailOptIn}>
        <input type="checkbox" checked={optIn} onChange={(e) => setOptIn(e.target.checked)} />
        <span>{labels.optInLabel}</span>
      </label>
      {status === 'error' && <p className={styles.emailError}>{labels.error}</p>}
    </form>
  )
}
```

- [ ] **Step 3: Lint** (will fail because `@/actions/tools` doesn't exist yet — note for next task; do not commit yet if it errors. If lint blocks, mark this lint as "deferred until Task 12 lands the action," then commit:)

```bash
npm run lint || true
```

- [ ] **Step 4: Commit**

```bash
git add src/components/client/RetreatProfitabilityCalculator/ShareLink.tsx \
        src/components/client/RetreatProfitabilityCalculator/EmailCapture.tsx
git commit -m "add share-link and email-capture calculator components"
```

---

### Task 11: Calculator orchestrator + CSS module + barrel

**Files:**
- Create: `src/components/client/RetreatProfitabilityCalculator/RetreatProfitabilityCalculator.tsx`
- Create: `src/components/client/RetreatProfitabilityCalculator/RetreatProfitabilityCalculator.module.css`
- Create: `src/components/client/RetreatProfitabilityCalculator/index.ts`
- Modify: `src/components/client/index.ts` — re-export

**Goal:** Top-level orchestrator that mounts InputsPanel + ResultsPanel side-by-side, handles MakersBarn CTA tracking, and exposes barrel.

- [ ] **Step 1: Create the CSS module**

Create `src/components/client/RetreatProfitabilityCalculator/RetreatProfitabilityCalculator.module.css`:

```css
.container {
  --bar-venue: #294b3a;
  --bar-food: #b8894a;
  --bar-facilitator: #5c8d72;
  --bar-marketing: #d4af37;
  --bar-co: #7d6a4a;
  --bar-travel: #4a6e5a;
  --bar-insurance: #8b7355;
  --bar-fees: #a89074;
  --bar-profit: #4ade80;

  display: grid;
  gap: 2rem;
  background: var(--color-background, #fff);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}

@media (min-width: 900px) {
  .container {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    gap: 3rem;
  }
}

.inputsPanel { display: grid; gap: 1.25rem; }

.field { display: grid; gap: 0.5rem; }

.fieldLabel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.fieldValue { font-variant-numeric: tabular-nums; color: var(--color-primary); }

.fieldHelper {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  line-height: var(--line-height-snug);
}

.slider {
  width: 100%;
  accent-color: var(--color-primary);
}

.numberInputWrap {
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  overflow: hidden;
  background: #fff;
}

.unitPrefix, .unitSuffix {
  padding: 0 0.6rem;
  background: rgba(0, 0, 0, 0.04);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.numberInput {
  flex: 1;
  border: 0;
  padding: 0.6rem 0.75rem;
  font: inherit;
  outline: none;
  font-variant-numeric: tabular-nums;
  min-width: 0;
}

.advancedWrapper { margin-top: 0.5rem; }

.advancedToggle {
  background: none;
  border: 0;
  color: var(--color-primary);
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: var(--font-size-sm);
}

.advancedContent { display: grid; gap: 1rem; padding-top: 0.75rem; }

.resetButton {
  align-self: start;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0.5rem 0.9rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* Results panel */
.resultsPanel {
  display: grid;
  gap: 1.25rem;
  padding: 1.5rem;
  background: rgba(41, 75, 58, 0.04);
  border-radius: 0.75rem;
  align-self: start;
}

@media (min-width: 900px) {
  .resultsPanel { position: sticky; top: 1.5rem; }
}

.resultsKicker {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-text-tertiary);
  margin: 0;
}

.headline {
  font-family: var(--font-playfair);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin: 0;
  font-variant-numeric: tabular-nums;
}

.headlineProfit { color: var(--color-primary); }
.headlineLoss { color: var(--color-text-error); }

.narrative {
  margin: 0;
  font-size: var(--font-size-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
}

.metricsGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  margin: 0;
}

.metric { background: #fff; border-radius: 0.5rem; padding: 0.75rem; }
.metric dt { font-size: var(--font-size-xs); color: var(--color-text-muted); margin: 0 0 0.25rem; }
.metric dd { font-size: var(--font-size-lg); font-weight: 600; margin: 0; font-variant-numeric: tabular-nums; }

.breakeven {
  margin: 0;
  font-size: var(--font-size-sm);
  font-style: italic;
  color: var(--color-text-muted);
}

/* Cost breakdown bar */
.breakdownBar { display: grid; gap: 0.75rem; }

.bar {
  display: flex;
  height: 14px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.06);
  position: relative;
}

.barSegment { height: 100%; transition: width 0.2s ease; }

.barProfitSegment {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: var(--bar-profit);
  opacity: 0.6;
}

.barLegend {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
  font-size: var(--font-size-xs);
}

.barLegendItem {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
}

.barLegendSwatch { width: 10px; height: 10px; border-radius: 2px; }
.barLegendValue { font-variant-numeric: tabular-nums; color: var(--color-text-muted); }

/* Share + email + CTA */
.actionsRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1.25rem;
}

.shareButton {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0.5rem;
  padding: 0.6rem 0.9rem;
  font: inherit;
  font-size: var(--font-size-sm);
  cursor: pointer;
  color: var(--color-text);
}

.emailForm { display: grid; gap: 0.5rem; margin-top: 1.5rem; }
.emailHeading { margin: 0; font-size: var(--font-size-sm); font-weight: 600; }
.emailFields { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.emailInput {
  flex: 1;
  min-width: 200px;
  padding: 0.6rem 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  font: inherit;
}

.emailSubmit {
  padding: 0.6rem 1.1rem;
  border: 0;
  border-radius: 0.5rem;
  background: var(--color-primary);
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.emailSubmit:disabled { opacity: 0.6; cursor: progress; }

.emailOptIn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.emailSuccess { color: var(--color-primary); margin: 1.5rem 0 0; font-weight: 600; }
.emailError { color: var(--color-text-error); margin: 0; font-size: var(--font-size-xs); }

.makersbarnCta {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: rgba(184, 137, 74, 0.08);
  border-radius: 0.75rem;
  display: grid;
  gap: 0.75rem;
}

.makersbarnCtaTitle { margin: 0; font-family: var(--font-playfair); font-size: var(--font-size-xl); }
.makersbarnCtaBody { margin: 0; color: var(--color-text-muted); }

.makersbarnCtaLink {
  align-self: start;
  background: var(--color-secondary);
  color: #fff;
  padding: 0.6rem 1.1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
}
```

- [ ] **Step 2: Create the orchestrator component**

Create `src/components/client/RetreatProfitabilityCalculator/RetreatProfitabilityCalculator.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import { track } from '@vercel/analytics'

import {
  CALCULATOR_ANALYTICS_EVENTS,
  MAKERSBARN_CTA_QUERY_PARAM,
  MAKERSBARN_CTA_QUERY_VALUE_PREFIX,
  ToolVariant,
} from '@/constants/tools'
import { Language, Route } from '@/types'
import { getLocalizedPath } from '@/lib/routing'
import type { VariantConfig } from '@/types/tools'
import type { Dictionary } from '@/i18n/types'

import { CALCULATOR_VARIANTS } from '@/data/tools'
import { EmailCapture } from './EmailCapture'
import { InputsPanel } from './InputsPanel'
import { ResultsPanel } from './ResultsPanel'
import { ShareLink } from './ShareLink'
import { useCalculator } from './useCalculator'

import styles from './RetreatProfitabilityCalculator.module.css'

interface RetreatProfitabilityCalculatorProps {
  variant: ToolVariant
  locale: Language
  t: Dictionary
}

export function RetreatProfitabilityCalculator({
  variant,
  locale,
  t,
}: RetreatProfitabilityCalculatorProps) {
  const config: VariantConfig = CALCULATOR_VARIANTS[variant]
  const { inputs, results, setInput, reset } = useCalculator(config.defaults)

  useEffect(() => {
    track(CALCULATOR_ANALYTICS_EVENTS.LOADED, { variant })
  }, [variant])

  const contactPath = getLocalizedPath(Route.CONTACT, locale)
  const ctaHref = `${contactPath}?${MAKERSBARN_CTA_QUERY_PARAM}=${MAKERSBARN_CTA_QUERY_VALUE_PREFIX}${variant}`
  const ctaLabels = t.tools.calculator.makersbarnCta

  return (
    <div className={styles.container}>
      <InputsPanel
        inputs={inputs}
        variant={config}
        locale={locale}
        t={t}
        onChange={setInput}
        onReset={reset}
      />
      <div>
        <ResultsPanel inputs={inputs} results={results} t={t} />

        <div className={styles.actionsRow}>
          <ShareLink variant={variant} t={t} />
        </div>

        <EmailCapture
          variant={variant}
          locale={locale}
          inputs={inputs}
          results={results}
          t={t}
        />

        <div className={styles.makersbarnCta}>
          <p className={styles.makersbarnCtaTitle}>{ctaLabels.title}</p>
          <p className={styles.makersbarnCtaBody}>{ctaLabels.body}</p>
          <Link
            href={ctaHref}
            className={styles.makersbarnCtaLink}
            onClick={() =>
              track(CALCULATOR_ANALYTICS_EVENTS.MAKERSBARN_CTA_CLICKED, {
                variant,
                source: typeof window !== 'undefined' ? window.location.pathname : '',
              })
            }
          >
            {ctaLabels.linkLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create the barrel**

Create `src/components/client/RetreatProfitabilityCalculator/index.ts`:

```ts
export { RetreatProfitabilityCalculator } from './RetreatProfitabilityCalculator'
```

- [ ] **Step 4: Re-export from client components barrel**

Open `src/components/client/index.ts` and add:

```ts
export { RetreatProfitabilityCalculator } from './RetreatProfitabilityCalculator'
```

- [ ] **Step 5: Lint** (will still fail on missing dictionary keys / missing action — that's OK, will be fixed in subsequent tasks. Note in commit:)

```bash
npm run lint || true
```

- [ ] **Step 6: Commit**

```bash
git add src/components/client/RetreatProfitabilityCalculator/RetreatProfitabilityCalculator.tsx \
        src/components/client/RetreatProfitabilityCalculator/RetreatProfitabilityCalculator.module.css \
        src/components/client/RetreatProfitabilityCalculator/index.ts \
        src/components/client/index.ts
git commit -m "add calculator orchestrator, CSS module, and barrel exports"
```

---

## Phase 3 — Email capture server action

### Task 12: Email summary server action with Postmark + Slack

**Files:**
- Create: `src/actions/tools/emailCalculatorSummary.ts`
- Create: `src/actions/tools/index.ts`
- Modify: `src/actions/index.ts` — re-export

**Goal:** Server action that validates input, posts a Slack notification, sends a styled HTML email summary via Postmark, and reports success/failure to the client.

- [ ] **Step 1: Create the server action**

Create `src/actions/tools/emailCalculatorSummary.ts`:

```ts
'use server'

import * as postmark from 'postmark'
import { z } from 'zod'

import { ToolVariant, CALCULATOR_RATE_LIMIT } from '@/constants/tools'
import { Language } from '@/types/common'
import { createLogger, RateLimiter, getClientIdentifier, maskEmail, escapeHtml } from '@/lib'
import { sendSlackMessage, SlackChannel } from '@/services/slack'
import type { CalculatorInputs, CalculatorResults, EmailCalculatorSummaryData } from '@/types/tools'

const logger = createLogger('email-calculator-summary')

const rateLimiter = new RateLimiter({
  windowMs: CALCULATOR_RATE_LIMIT.WINDOW_MS,
  maxRequests: CALCULATOR_RATE_LIMIT.MAX_REQUESTS,
})

const InputsSchema = z.object({
  guests: z.number().int().min(0).max(1000),
  nights: z.number().int().min(0).max(365),
  pricePerGuest: z.number().min(0).max(100_000),
  venueAccommodation: z.number().min(0).max(1_000_000),
  foodPerGuestPerDay: z.number().min(0).max(1000),
  facilitatorFee: z.number().min(0).max(1_000_000),
  marketingAndOther: z.number().min(0).max(1_000_000),
  coFacilitators: z.number().min(0).max(1_000_000),
  travel: z.number().min(0).max(1_000_000),
  insurance: z.number().min(0).max(100_000),
  paymentFeePercent: z.number().min(0).max(100),
  planningDays: z.number().min(0).max(365),
}) satisfies z.ZodType<CalculatorInputs>

const ResultsSchema = z.object({
  totalRevenue: z.number(),
  totalCosts: z.number(),
  netProfit: z.number(),
  profitMargin: z.number(),
  profitPerWorkday: z.number(),
  breakevenGuests: z.union([z.number(), z.literal(Number.POSITIVE_INFINITY)]),
  costBreakdown: z.object({
    venueAccommodation: z.number(),
    food: z.number(),
    facilitatorFee: z.number(),
    marketingAndOther: z.number(),
    coFacilitators: z.number(),
    travel: z.number(),
    insurance: z.number(),
    paymentFees: z.number(),
  }),
}) satisfies z.ZodType<CalculatorResults>

const RequestSchema = z.object({
  email: z.string().email().max(254),
  inputs: InputsSchema,
  results: ResultsSchema,
  variant: z.nativeEnum(ToolVariant),
  newsletterOptIn: z.boolean(),
  locale: z.nativeEnum(Language),
})

export interface EmailCalculatorSummaryResult {
  success: boolean
  error?: string
}

const formatEuro = (n: number): string => `€${Math.round(n).toLocaleString()}`
const formatPercent = (n: number): string => `${Math.round(n * 100)}%`

function buildHtmlSummary(data: EmailCalculatorSummaryData): string {
  const { inputs, results, variant } = data
  const breakeven = Number.isFinite(results.breakevenGuests)
    ? `${results.breakevenGuests} guests`
    : 'not reachable at this price'
  return `
    <h2>Your retreat profitability summary</h2>
    <p>Variant: <strong>${escapeHtml(variant)}</strong></p>
    <h3>Inputs</h3>
    <ul>
      <li>Guests: ${inputs.guests}</li>
      <li>Nights: ${inputs.nights}</li>
      <li>Price per guest: ${formatEuro(inputs.pricePerGuest)}</li>
      <li>Venue & accommodation: ${formatEuro(inputs.venueAccommodation)}</li>
      <li>Food per guest per day: ${formatEuro(inputs.foodPerGuestPerDay)}</li>
      <li>Facilitator fee: ${formatEuro(inputs.facilitatorFee)}</li>
      <li>Marketing & other: ${formatEuro(inputs.marketingAndOther)}</li>
    </ul>
    <h3>Results</h3>
    <ul>
      <li>Total revenue: <strong>${formatEuro(results.totalRevenue)}</strong></li>
      <li>Total costs: ${formatEuro(results.totalCosts)}</li>
      <li>Net profit: <strong>${formatEuro(results.netProfit)}</strong></li>
      <li>Profit margin: ${formatPercent(results.profitMargin)}</li>
      <li>Profit per workday: ${formatEuro(results.profitPerWorkday)}</li>
      <li>Breakeven occupancy: ${breakeven}</li>
    </ul>
    <hr />
    <p>Hosted at MakersBarn? <a href="https://www.themakersbarn.com/contact?src=tool-${escapeHtml(variant)}">Request a custom quote</a> tailored to your group and dates.</p>
    <p>— The MakersBarn team</p>
  `
}

function buildSlackMessage(data: EmailCalculatorSummaryData): string {
  return [
    '🧮 *Calculator email captured*',
    `*Variant:* ${data.variant}`,
    `*Email:* ${data.email}`,
    `*Net profit calculated:* ${formatEuro(data.results.netProfit)}`,
    `*Newsletter opt-in:* ${data.newsletterOptIn ? 'yes' : 'no'}`,
  ].join('\n')
}

export async function emailCalculatorSummary(
  payload: EmailCalculatorSummaryData
): Promise<EmailCalculatorSummaryResult> {
  const clientId = await getClientIdentifier()

  if (!rateLimiter.isAllowed(clientId)) {
    logger.warn('Rate limit exceeded', { clientId })
    return { success: false, error: 'rate_limited' }
  }

  const parsed = RequestSchema.safeParse(payload)
  if (!parsed.success) {
    logger.warn('Validation failed', { issues: parsed.error.issues })
    return { success: false, error: 'validation_failed' }
  }
  const data = parsed.data
  const masked = maskEmail(data.email)

  // Slack — secondary; failures logged but not surfaced
  try {
    await sendSlackMessage({
      channel: SlackChannel.USER_CONTACTS,
      message: buildSlackMessage(data),
    })
  } catch (error) {
    logger.warn('Slack notification failed for calculator capture', { masked, error })
  }

  // Email — primary
  const apiToken = process.env.POSTMARKAPP_API_TOKEN
  const senderEmail = process.env.POSTMARK_SENDER_EMAIL
  if (!apiToken || !senderEmail) {
    logger.error('Postmark not configured for calculator email')
    return { success: false, error: 'email_service_unavailable' }
  }

  try {
    const client = new postmark.ServerClient(apiToken)
    const response = await client.sendEmail({
      From: senderEmail,
      To: data.email,
      Subject: 'Your retreat profitability summary — MakersBarn',
      HtmlBody: buildHtmlSummary(data),
      TextBody: `See HTML version. Variant: ${data.variant}. Net profit: ${formatEuro(data.results.netProfit)}.`,
    })
    if (response.ErrorCode && response.ErrorCode !== 0) {
      logger.error('Postmark error sending calculator email', {
        masked,
        errorCode: response.ErrorCode,
      })
      return { success: false, error: 'email_send_failed' }
    }
    logger.info('Calculator summary email sent', { masked, variant: data.variant })
    return { success: true }
  } catch (error) {
    logger.error('Unexpected error sending calculator email', { masked }, error)
    return { success: false, error: 'unexpected_error' }
  }
}
```

- [ ] **Step 2: Create the actions barrel**

Create `src/actions/tools/index.ts`:

```ts
export * from './emailCalculatorSummary'
```

- [ ] **Step 3: Re-export from actions barrel**

Open `src/actions/index.ts` and add:

```ts
export * from './tools'
```

- [ ] **Step 4: Lint**

```bash
npm run lint
```

Expected: PASS for the action file (dictionary errors elsewhere still expected, will resolve in Task 13).

- [ ] **Step 5: Commit**

```bash
git add src/actions/tools/ src/actions/index.ts
git commit -m "add email calculator summary server action with postmark and slack"
```

---

## Phase 4 — i18n: Dictionary type + translations

### Task 13: Extend Dictionary type with tools section

**Files:**
- Modify: `src/i18n/types.ts`

**Goal:** Type-safe i18n keys for the calculator chrome and the tools hub.

- [ ] **Step 1: Add interfaces and extend Dictionary**

Open `src/i18n/types.ts`. Add these interfaces near the bottom of the existing interface definitions, BEFORE the `Dictionary` interface:

```ts
/**
 * Tools section — calculator chrome translations
 */
export interface ToolsCalculatorInputsTranslations {
  guestsLabel: string
  guestsUnit: string
  nightsLabel: string
  nightsUnit: string
  pricePerGuestLabel: string
  venueAccommodationLabel: string
  foodPerGuestPerDayLabel: string
  foodUnit: string
  facilitatorFeeLabel: string
  marketingAndOtherLabel: string
  advancedLabel: string
  coFacilitatorsLabel: string
  travelLabel: string
  insuranceLabel: string
  paymentFeePercentLabel: string
  planningDaysLabel: string
  daysUnit: string
  resetLabel: string
}

export interface ToolsCalculatorResultsTranslations {
  kicker: string
  headlineSentence: string // template with {price}, {guests}, {profit}, {margin}
  totalRevenue: string
  totalCosts: string
  profitMargin: string
  profitPerWorkday: string
  breakevenSentence: string // template with {guests}, {price}
  breakevenImpossible: string
  breakdownLabels: {
    venue: string
    food: string
    facilitator: string
    marketing: string
    coFacilitators: string
    travel: string
    insurance: string
    fees: string
    profit: string
    barAriaLabel: string
  }
}

export interface ToolsCalculatorEmailTranslations {
  heading: string
  placeholder: string
  submit: string
  sending: string
  success: string
  error: string
  optInLabel: string
}

export interface ToolsCalculatorShareTranslations {
  copy: string
  copied: string
}

export interface ToolsCalculatorMakersBarnCtaTranslations {
  title: string
  body: string
  linkLabel: string
}

export interface ToolsCalculatorTranslations {
  inputs: ToolsCalculatorInputsTranslations
  results: ToolsCalculatorResultsTranslations
  email: ToolsCalculatorEmailTranslations
  share: ToolsCalculatorShareTranslations
  makersbarnCta: ToolsCalculatorMakersBarnCtaTranslations
}

export interface ToolsHubTranslations {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  intro: string
  toolCardCta: string
}

export interface ToolsHowToTranslations {
  heading: string
  steps: readonly string[] // exactly 4 entries
}

export interface ToolsRelatedTranslations {
  heading: string
}

export interface ToolsFaqTranslations {
  heading: string
}

export interface ToolsTranslations {
  hub: ToolsHubTranslations
  calculator: ToolsCalculatorTranslations
  howTo: ToolsHowToTranslations
  related: ToolsRelatedTranslations
  faq: ToolsFaqTranslations
}
```

Then in the `Dictionary` interface at the bottom, add a new field:

```ts
  tools: ToolsTranslations
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: dictionary type errors will appear in `en.ts` and `nl.ts` because they don't have `tools` yet. That's fixed in Tasks 14–15.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/types.ts
git commit -m "extend Dictionary type with tools section"
```

---

### Task 14: Add EN translations for tools section

**Files:**
- Modify: `src/i18n/dictionaries/en.ts`

**Goal:** Provide all English UI chrome strings for the calculator and tools hub.

- [ ] **Step 1: Add the tools block**

Open `src/i18n/dictionaries/en.ts`. At the bottom of the `en` object (before the closing `}`), add:

```ts
  tools: {
    hub: {
      metaTitle: 'Free Tools for Retreat Facilitators',
      metaDescription: 'Free, ungated calculators and tools for retreat facilitators — pricing, profitability, and planning.',
      eyebrow: 'Free Tools',
      title: 'Tools for retreat facilitators',
      intro: 'Plan, price, and run more profitable retreats. These tools are free, with no signup required, and work for any venue — including the one you\'re considering at MakersBarn.',
      toolCardCta: 'Open the tool',
    },
    calculator: {
      inputs: {
        guestsLabel: 'Number of guests',
        guestsUnit: 'guests',
        nightsLabel: 'Retreat length',
        nightsUnit: 'nights',
        pricePerGuestLabel: 'Price per guest',
        venueAccommodationLabel: 'Venue & accommodation total',
        foodPerGuestPerDayLabel: 'Food per guest per day',
        foodUnit: '/ guest / day',
        facilitatorFeeLabel: 'Facilitator compensation (your fee)',
        marketingAndOtherLabel: 'Marketing & other costs',
        advancedLabel: 'Advanced costs',
        coFacilitatorsLabel: 'Co-facilitators / guest teachers',
        travelLabel: 'Travel & transport (yours)',
        insuranceLabel: 'Insurance',
        paymentFeePercentLabel: 'Payment processing fee',
        planningDaysLabel: 'Planning days',
        daysUnit: 'days',
        resetLabel: 'Restore example values',
      },
      results: {
        kicker: 'Net profit',
        headlineSentence: 'At {price}/person with {guests} guests, you\'ll net {profit} — a {margin} margin.',
        totalRevenue: 'Total revenue',
        totalCosts: 'Total costs',
        profitMargin: 'Profit margin',
        profitPerWorkday: 'Profit per workday',
        breakevenSentence: 'You need at least {guests} guests at {price} to break even.',
        breakevenImpossible: 'At this price, your variable costs exceed revenue per guest — you can\'t break even with more guests alone.',
        breakdownLabels: {
          venue: 'Venue',
          food: 'Food',
          facilitator: 'Facilitator',
          marketing: 'Marketing & other',
          coFacilitators: 'Co-facilitators',
          travel: 'Travel',
          insurance: 'Insurance',
          fees: 'Payment fees',
          profit: 'Profit',
          barAriaLabel: 'Cost and profit breakdown',
        },
      },
      email: {
        heading: 'Email me my summary',
        placeholder: 'your@email.com',
        submit: 'Email summary',
        sending: 'Sending…',
        success: 'Sent! Check your inbox.',
        error: 'Could not send right now. Please try again.',
        optInLabel: 'Send me occasional retreat-pricing tips (no spam, easy unsubscribe)',
      },
      share: {
        copy: 'Copy shareable link',
        copied: 'Copied!',
      },
      makersbarnCta: {
        title: 'Considering MakersBarn for your retreat?',
        body: 'We tailor pricing to your group size and dates — request a custom quote. The numbers above stay private.',
        linkLabel: 'Request a custom quote',
      },
    },
    howTo: {
      heading: 'How to use this calculator',
      steps: [
        'Set your retreat size: drag the guests and nights sliders to your planned numbers.',
        'Set your price per guest based on the benchmark beneath the slider.',
        'Enter the costs you know — venue, food, your facilitator fee, marketing.',
        'Read the live summary on the right to see profit, margin, and breakeven occupancy.',
      ],
    },
    related: {
      heading: 'Related calculators',
    },
    faq: {
      heading: 'Frequently asked questions',
    },
  },
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: PASS for `en.ts`. `nl.ts` still has missing keys — fixed in Task 15.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/dictionaries/en.ts
git commit -m "add English tools translations"
```

---

### Task 15: Add NL translations for tools section

**Files:**
- Modify: `src/i18n/dictionaries/nl.ts`
- Modify: `src/i18n/dictionaries/de.ts`, `es.ts`, `fr.ts` — add `tools` key with EN fallback content (since DE/ES/FR pages render with EN fallback per spec, but the dictionary type requires the key)

**Goal:** Dutch UI chrome translations. DE/ES/FR get the EN strings as a fallback to keep types satisfied without rendering broken pages.

- [ ] **Step 1: Add NL tools block**

Open `src/i18n/dictionaries/nl.ts`. At the bottom of the `nl` object, add:

```ts
  tools: {
    hub: {
      metaTitle: 'Gratis tools voor retraitebegeleiders',
      metaDescription: 'Gratis calculators en tools voor retraitebegeleiders — prijsbepaling, winstgevendheid en planning. Geen aanmelding.',
      eyebrow: 'Gratis tools',
      title: 'Tools voor retraitebegeleiders',
      intro: 'Plan, prijs en draai winstgevendere retraites. Deze tools zijn gratis, zonder aanmelding, en werken voor elke locatie — ook die je bij MakersBarn overweegt.',
      toolCardCta: 'Open de tool',
    },
    calculator: {
      inputs: {
        guestsLabel: 'Aantal gasten',
        guestsUnit: 'gasten',
        nightsLabel: 'Duur retraite',
        nightsUnit: 'nachten',
        pricePerGuestLabel: 'Prijs per gast',
        venueAccommodationLabel: 'Locatie & accommodatie totaal',
        foodPerGuestPerDayLabel: 'Eten per gast per dag',
        foodUnit: '/ gast / dag',
        facilitatorFeeLabel: 'Vergoeding begeleider (jouw fee)',
        marketingAndOtherLabel: 'Marketing & overige kosten',
        advancedLabel: 'Geavanceerde kosten',
        coFacilitatorsLabel: 'Co-begeleiders / gastdocenten',
        travelLabel: 'Reis & vervoer (jouw kosten)',
        insuranceLabel: 'Verzekering',
        paymentFeePercentLabel: 'Betalingsverwerkingskosten',
        planningDaysLabel: 'Planningsdagen',
        daysUnit: 'dagen',
        resetLabel: 'Voorbeeldwaarden herstellen',
      },
      results: {
        kicker: 'Netto winst',
        headlineSentence: 'Bij {price}/persoon met {guests} gasten houd je {profit} over — een marge van {margin}.',
        totalRevenue: 'Totale omzet',
        totalCosts: 'Totale kosten',
        profitMargin: 'Winstmarge',
        profitPerWorkday: 'Winst per werkdag',
        breakevenSentence: 'Je hebt minstens {guests} gasten bij {price} nodig om break-even te draaien.',
        breakevenImpossible: 'Bij deze prijs overstijgen je variabele kosten de omzet per gast — meer gasten alleen brengt je niet op break-even.',
        breakdownLabels: {
          venue: 'Locatie',
          food: 'Eten',
          facilitator: 'Begeleider',
          marketing: 'Marketing & overig',
          coFacilitators: 'Co-begeleiders',
          travel: 'Reizen',
          insurance: 'Verzekering',
          fees: 'Betaalkosten',
          profit: 'Winst',
          barAriaLabel: 'Kosten- en winstverdeling',
        },
      },
      email: {
        heading: 'E-mail mij de samenvatting',
        placeholder: 'jouw@email.com',
        submit: 'Stuur samenvatting',
        sending: 'Verzenden…',
        success: 'Verzonden! Check je inbox.',
        error: 'Kon nu niet verzenden. Probeer het opnieuw.',
        optInLabel: 'Stuur me af en toe tips over retraiteprijzen (geen spam, makkelijk uitschrijven)',
      },
      share: {
        copy: 'Deelbare link kopiëren',
        copied: 'Gekopieerd!',
      },
      makersbarnCta: {
        title: 'MakersBarn overwegen voor je retraite?',
        body: 'We stemmen de prijs af op je groepsgrootte en data — vraag een offerte op maat aan. Bovenstaande getallen blijven privé.',
        linkLabel: 'Vraag offerte aan',
      },
    },
    howTo: {
      heading: 'Zo gebruik je deze calculator',
      steps: [
        'Stel je retraite-omvang in: sleep de schuifbalken voor gasten en nachten naar de gewenste waarden.',
        'Stel je prijs per gast in op basis van de benchmark onder de schuifbalk.',
        'Voer de kosten in die je kent — locatie, eten, jouw begeleidersfee, marketing.',
        'Lees rechts de live samenvatting voor winst, marge en break-evenbezetting.',
      ],
    },
    related: {
      heading: 'Gerelateerde calculators',
    },
    faq: {
      heading: 'Veelgestelde vragen',
    },
  },
```

- [ ] **Step 2: Add fallback `tools` blocks to DE, ES, FR dictionaries**

For each of `src/i18n/dictionaries/de.ts`, `es.ts`, `fr.ts`, append a `tools` block. Use the EN strings verbatim as the placeholder (per the spec, those locales fall back to EN content with a notice — the chrome strings can remain English until translated). Copy the entire `tools: { ... }` block from `en.ts` and paste at the bottom of each.

- [ ] **Step 3: Lint and full typecheck**

```bash
npm run lint
```

Expected: PASS, all dictionary types satisfied.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/dictionaries/nl.ts src/i18n/dictionaries/de.ts \
        src/i18n/dictionaries/es.ts src/i18n/dictionaries/fr.ts
git commit -m "add NL tools translations and EN fallback for DE/ES/FR"
```

---

## Phase 5 — Structured-data helpers

### Task 16: Add tools-related schema generators

**Files:**
- Modify: `src/lib/structuredData.ts`

**Goal:** Add schema-generator helpers for `WebApplication`, `HowTo`, `FAQPage`, and `CollectionPage` (used by tool pages and the hub index).

- [ ] **Step 1: Add interfaces and generator functions**

Open `src/lib/structuredData.ts`. Append at the end of the file:

```ts
export interface WebApplicationSchema {
  '@context': string
  '@type': 'WebApplication'
  name: string
  url: string
  description: string
  applicationCategory: 'BusinessApplication'
  operatingSystem: 'Web'
  offers: {
    '@type': 'Offer'
    price: '0'
    priceCurrency: 'EUR'
  }
  publisher: { '@id': string }
}

export interface HowToStepSchema {
  '@type': 'HowToStep'
  position: number
  name: string
  text: string
}

export interface HowToSchema {
  '@context': string
  '@type': 'HowTo'
  name: string
  description: string
  step: HowToStepSchema[]
}

export interface FaqQuestionSchema {
  '@type': 'Question'
  name: string
  acceptedAnswer: { '@type': 'Answer'; text: string }
}

export interface FaqPageSchema {
  '@context': string
  '@type': 'FAQPage'
  mainEntity: FaqQuestionSchema[]
}

export interface CollectionItemSchema {
  '@type': 'ListItem'
  position: number
  url: string
  name: string
}

export interface CollectionPageSchema {
  '@context': string
  '@type': 'CollectionPage'
  name: string
  url: string
  description: string
  hasPart: {
    '@type': 'ItemList'
    itemListElement: CollectionItemSchema[]
  }
}

export function generateWebApplicationSchema(params: {
  name: string
  url: string
  description: string
}): WebApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: params.name,
    url: params.url,
    description: params.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    publisher: { '@id': `${SITE_URL}#organization` },
  }
}

export function generateHowToSchema(params: {
  name: string
  description: string
  steps: readonly string[]
}): HowToSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    step: params.steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Step ${i + 1}`,
      text,
    })),
  }
}

export function generateFaqPageSchema(
  entries: readonly { question: string; answer: string }[]
): FaqPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.question,
      acceptedAnswer: { '@type': 'Answer', text: e.answer },
    })),
  }
}

export function generateCollectionPageSchema(params: {
  name: string
  url: string
  description: string
  items: readonly { url: string; name: string }[]
}): CollectionPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: params.name,
    url: params.url,
    description: params.description,
    hasPart: {
      '@type': 'ItemList',
      itemListElement: params.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: item.url,
        name: item.name,
      })),
    },
  }
}
```

- [ ] **Step 2: Update StructuredData component to accept new types**

Open `src/components/server/StructuredData/StructuredData.tsx` and extend the imports + union:

```tsx
import type {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
  BreadcrumbListSchema,
  ContactPageSchema,
  WebPageSchema,
  WebApplicationSchema,
  HowToSchema,
  FaqPageSchema,
  CollectionPageSchema,
} from '@/lib/structuredData'

type StructuredDataSchema =
  | OrganizationSchema
  | LocalBusinessSchema
  | WebSiteSchema
  | BreadcrumbListSchema
  | ContactPageSchema
  | WebPageSchema
  | WebApplicationSchema
  | HowToSchema
  | FaqPageSchema
  | CollectionPageSchema
  | Record<string, unknown>
```

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/lib/structuredData.ts src/components/server/StructuredData/StructuredData.tsx
git commit -m "add WebApplication, HowTo, FAQPage, CollectionPage schema generators"
```

---

## Phase 6 — Server-component shell + content data

### Task 17: Define content type and content map (per variant, per locale)

**Files:**
- Create: `src/data/tools/calculatorContent.ts`
- Modify: `src/data/tools/index.ts` — re-export

**Goal:** Long-form guide content per variant per locale. Content is **placeholder** in this task; verified content is generated in Tasks 19–23 by an agent.

- [ ] **Step 1: Create the content file with placeholder structure**

Create `src/data/tools/calculatorContent.ts`:

```ts
import { ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type {
  CalculatorContentMap,
  CalculatorVariantContent,
  LocalizedString,
} from '@/types/tools'

const placeholder = (en: string, nl: string): LocalizedString => ({
  [Language.EN]: en,
  [Language.NL]: nl,
  [Language.DE]: en,
  [Language.ES]: en,
  [Language.FR]: en,
})

const PLACEHOLDER_VARIANT_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    placeholder(
      'Set the number of guests and nights using the sliders.',
      'Stel het aantal gasten en nachten in met de schuifbalken.',
    ),
    placeholder(
      'Set your price per guest, guided by the benchmark range.',
      'Stel je prijs per gast in, met de benchmark als richtlijn.',
    ),
    placeholder(
      'Enter the costs you know — venue, food, your fee, marketing.',
      'Voer de kosten in die je kent — locatie, eten, jouw fee, marketing.',
    ),
    placeholder(
      'Read the live summary for profit, margin, and breakeven.',
      'Lees rechts de live samenvatting voor winst, marge en break-even.',
    ),
  ],
  guideSections: [
    {
      heading: placeholder(
        'What goes into retreat pricing',
        'Wat komt er kijken bij retraiteprijzen',
      ),
      body: [
        placeholder(
          'PLACEHOLDER paragraph — to be replaced by verified content per variant.',
          'PLACEHOLDER alinea — wordt vervangen door geverifieerde content per variant.',
        ),
      ],
    },
    {
      heading: placeholder('Benchmark pricing', 'Benchmarkprijzen'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('How to calculate your breakeven', 'Hoe je break-even berekent'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('Common pricing mistakes', 'Veelgemaakte prijsfouten'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('When to charge more', 'Wanneer je meer kunt vragen'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('Marketing budget rules of thumb', 'Vuistregels voor marketingbudget'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
  ],
  faq: [
    {
      question: placeholder(
        'How long should a first retreat be?',
        'Hoe lang moet een eerste retraite duren?',
      ),
      answer: placeholder(
        'PLACEHOLDER answer to be replaced by verified content.',
        'PLACEHOLDER antwoord wordt vervangen door geverifieerde content.',
      ),
    },
  ],
}

export const CALCULATOR_CONTENT: CalculatorContentMap = {
  [ToolVariant.GENERIC]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.YOGA]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.WELLNESS]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.MEDITATION]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.COACHING]: PLACEHOLDER_VARIANT_CONTENT,
}
```

- [ ] **Step 2: Re-export**

Open `src/data/tools/index.ts` and add:

```ts
export * from './calculatorContent'
```

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/data/tools/calculatorContent.ts src/data/tools/index.ts
git commit -m "add placeholder calculator content per variant"
```

---

### Task 18: Build the ToolPageShell server component

**Files:**
- Create: `src/components/server/ToolPageShell/ToolPageShell.tsx`
- Create: `src/components/server/ToolPageShell/ToolPageShell.module.css`
- Create: `src/components/server/ToolPageShell/index.ts`
- Modify: `src/components/server/index.ts` — re-export

**Goal:** Server component that renders the page chrome: hero, How-to, FAQ, related-calculators, and the "Considering MakersBarn?" footer block. Hosts a slot for the calculator client component.

- [ ] **Step 1: Create the CSS module**

Create `src/components/server/ToolPageShell/ToolPageShell.module.css`:

```css
.shell {
  display: grid;
  gap: 3rem;
  padding: 4rem 1.5rem 5rem;
  max-width: 72rem;
  margin: 0 auto;
}

.hero { display: grid; gap: 1rem; max-width: 48rem; }

.eyebrow {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  color: var(--color-secondary);
  margin: 0;
  font-weight: 600;
}

.title {
  margin: 0;
  font-family: var(--font-playfair);
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
  color: var(--color-text);
}

.intro {
  margin: 0;
  font-size: var(--font-size-md);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

.howTo, .guide, .faq, .related {
  display: grid;
  gap: 1rem;
  max-width: 56rem;
  margin: 0 auto;
}

.sectionTitle {
  font-family: var(--font-playfair);
  font-size: var(--font-size-2xl);
  margin: 0 0 0.5rem;
}

.howToList { padding-left: 1.25rem; margin: 0; display: grid; gap: 0.5rem; }

.guideSection { display: grid; gap: 0.75rem; margin-bottom: 2rem; }
.guideHeading { font-family: var(--font-playfair); font-size: var(--font-size-xl); margin: 0; }
.guideParagraph { margin: 0; line-height: var(--line-height-relaxed); color: var(--color-text-muted); }

.faqList { display: grid; gap: 0.5rem; }
.faqItem {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
}
.faqQuestion { font-weight: 600; cursor: pointer; }
.faqAnswer { margin: 0.75rem 0 0; color: var(--color-text-muted); line-height: var(--line-height-relaxed); }

.relatedGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.relatedCard {
  display: grid;
  gap: 0.5rem;
  background: rgba(41, 75, 58, 0.04);
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: var(--color-text);
}

.relatedCardTitle { font-family: var(--font-playfair); margin: 0; font-size: var(--font-size-lg); }
.relatedCardArrow { color: var(--color-primary); font-weight: 600; }
```

- [ ] **Step 2: Create the component**

Create `src/components/server/ToolPageShell/ToolPageShell.tsx`:

```tsx
import Link from 'next/link'
import type { ReactNode } from 'react'

import { CALCULATOR_VARIANTS, CALCULATOR_CONTENT } from '@/data/tools'
import { ToolVariant, TOOL_VARIANT_ROUTES } from '@/constants/tools'
import { Language } from '@/types/common'
import { getLocalizedPath } from '@/lib/routing'
import type { Dictionary } from '@/i18n/types'

import styles from './ToolPageShell.module.css'

interface ToolPageShellProps {
  variant: ToolVariant
  locale: Language
  t: Dictionary
  calculator: ReactNode
}

export function ToolPageShell({ variant, locale, t, calculator }: ToolPageShellProps) {
  const config = CALCULATOR_VARIANTS[variant]
  const content = CALCULATOR_CONTENT[variant]

  return (
    <article className={styles.shell}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>{config.copy.heroEyebrow[locale]}</p>
        <h1 className={styles.title}>{config.copy.heroTitle[locale]}</h1>
        <p className={styles.intro}>{config.copy.heroIntro[locale]}</p>
      </header>

      {calculator}

      <section className={styles.howTo} aria-labelledby="how-to">
        <h2 id="how-to" className={styles.sectionTitle}>
          {t.tools.howTo.heading}
        </h2>
        <ol className={styles.howToList}>
          {content.howToSteps.map((step, i) => (
            <li key={i}>{step[locale]}</li>
          ))}
        </ol>
      </section>

      <section className={styles.guide} aria-labelledby="guide">
        <h2 id="guide" className={styles.sectionTitle}>
          {config.copy.heroTitle[locale]}
        </h2>
        {content.guideSections.map((section, i) => (
          <div key={i} className={styles.guideSection}>
            <h3 className={styles.guideHeading}>{section.heading[locale]}</h3>
            {section.body.map((paragraph, j) => (
              <p key={j} className={styles.guideParagraph}>
                {paragraph[locale]}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section className={styles.faq} aria-labelledby="faq">
        <h2 id="faq" className={styles.sectionTitle}>
          {t.tools.faq.heading}
        </h2>
        <div className={styles.faqList}>
          {content.faq.map((entry, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{entry.question[locale]}</summary>
              <p className={styles.faqAnswer}>{entry.answer[locale]}</p>
            </details>
          ))}
        </div>
      </section>

      {config.relatedVariants.length > 0 && (
        <section className={styles.related} aria-labelledby="related">
          <h2 id="related" className={styles.sectionTitle}>
            {t.tools.related.heading}
          </h2>
          <div className={styles.relatedGrid}>
            {config.relatedVariants.map((rv) => {
              const relConfig = CALCULATOR_VARIANTS[rv]
              const href = getLocalizedPath(TOOL_VARIANT_ROUTES[rv], locale)
              return (
                <Link key={rv} href={href} className={styles.relatedCard}>
                  <h3 className={styles.relatedCardTitle}>
                    {relConfig.copy.heroTitle[locale]}
                  </h3>
                  <span className={styles.relatedCardArrow}>→</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </article>
  )
}
```

- [ ] **Step 3: Create the barrel and re-export**

Create `src/components/server/ToolPageShell/index.ts`:

```ts
export { ToolPageShell } from './ToolPageShell'
```

Open `src/components/server/index.ts` and add:

```ts
export { ToolPageShell } from './ToolPageShell'
```

- [ ] **Step 4: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ToolPageShell/ src/components/server/index.ts
git commit -m "add ToolPageShell server component"
```

---

## Phase 7 — Pages

### Task 19: Hub index page

**Files:**
- Create: `src/app/[locale]/tools/page.tsx`

**Goal:** Lightweight directory page listing all tools (canonical + 4 variants for v1).

- [ ] **Step 1: Create the page**

Create `src/app/[locale]/tools/page.tsx`:

```tsx
import Link from 'next/link'
import type { Metadata } from 'next'

import { StructuredData } from '@/components/server'
import {
  generateBreadcrumbListSchema,
  generateCollectionPageSchema,
} from '@/lib/structuredData'
import { CALCULATOR_VARIANTS } from '@/data/tools'
import { TOOL_VARIANT_ROUTES, ToolVariant } from '@/constants/tools'
import { Route } from '@/types'
import { SITE_CONFIG } from '@/constants/site'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import { getValidLocale } from '@/lib/locale'
import { getServerTranslations } from '@/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

const VARIANT_DISPLAY_ORDER: ToolVariant[] = [
  ToolVariant.GENERIC,
  ToolVariant.YOGA,
  ToolVariant.WELLNESS,
  ToolVariant.MEDITATION,
  ToolVariant.COACHING,
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  return generatePageMetadata({
    title: t.tools.hub.metaTitle,
    description: t.tools.hub.metaDescription,
    path: Route.TOOLS,
    locale: validLocale,
  })
}

export default async function ToolsHubPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)

  const hubUrl = `${SITE_CONFIG.url}${getLocalizedPath(Route.TOOLS, validLocale)}`
  const breadcrumb = generateBreadcrumbListSchema([
    { name: 'Home', path: Route.HOME },
    { name: t.tools.hub.title, path: Route.TOOLS },
  ])
  const collection = generateCollectionPageSchema({
    name: t.tools.hub.title,
    url: hubUrl,
    description: t.tools.hub.metaDescription,
    items: VARIANT_DISPLAY_ORDER.map((v) => ({
      name: CALCULATOR_VARIANTS[v].copy.heroTitle[validLocale],
      url: `${SITE_CONFIG.url}${getLocalizedPath(TOOL_VARIANT_ROUTES[v], validLocale)}`,
    })),
  })

  return (
    <>
      <StructuredData data={[breadcrumb, collection]} />
      <main style={{ maxWidth: '64rem', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem', color: '#b8894a', fontWeight: 600 }}>
          {t.tools.hub.eyebrow}
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'var(--font-size-4xl)' }}>
          {t.tools.hub.title}
        </h1>
        <p style={{ color: 'var(--color-text-muted)', maxWidth: '40rem', marginBottom: '3rem' }}>
          {t.tools.hub.intro}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
          {VARIANT_DISPLAY_ORDER.map((v) => {
            const cfg = CALCULATOR_VARIANTS[v]
            const href = getLocalizedPath(TOOL_VARIANT_ROUTES[v], validLocale)
            return (
              <li key={v}>
                <Link
                  href={href}
                  style={{
                    display: 'grid',
                    gap: '0.5rem',
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(41, 75, 58, 0.04)',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.25rem' }}>
                    {cfg.copy.heroTitle[validLocale]}
                  </span>
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    {cfg.copy.heroIntro[validLocale]}
                  </span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    {t.tools.hub.toolCardCta} →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/app/\[locale\]/tools/page.tsx
git commit -m "add tools hub index page"
```

---

### Task 20: Variant pages (canonical + 4 variants)

**Files:**
- Create: `src/app/[locale]/tools/retreat-profitability-calculator/page.tsx`
- Create: `src/app/[locale]/tools/yoga-retreat-pricing-calculator/page.tsx`
- Create: `src/app/[locale]/tools/wellness-retreat-pricing-calculator/page.tsx`
- Create: `src/app/[locale]/tools/meditation-retreat-pricing-calculator/page.tsx`
- Create: `src/app/[locale]/tools/coaching-retreat-pricing-calculator/page.tsx`

**Goal:** Five tiny page files, each ~40 lines, that compose the shell + calculator with the appropriate variant.

- [ ] **Step 1: Create canonical page**

Create `src/app/[locale]/tools/retreat-profitability-calculator/page.tsx`:

```tsx
import type { Metadata } from 'next'

import { RetreatProfitabilityCalculator } from '@/components/client'
import { StructuredData, ToolPageShell } from '@/components/server'
import {
  generateBreadcrumbListSchema,
  generateFaqPageSchema,
  generateHowToSchema,
  generateWebApplicationSchema,
} from '@/lib/structuredData'
import { CALCULATOR_VARIANTS, CALCULATOR_CONTENT } from '@/data/tools'
import { ToolVariant } from '@/constants/tools'
import { Route } from '@/types'
import { SITE_CONFIG } from '@/constants/site'
import { generatePageMetadata } from '@/lib/metadata'
import { getLocalizedPath } from '@/lib/routing'
import { getValidLocale } from '@/lib/locale'
import { getServerTranslations } from '@/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

const VARIANT = ToolVariant.GENERIC
const ROUTE = Route.RETREAT_PROFITABILITY_CALCULATOR

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const config = CALCULATOR_VARIANTS[VARIANT]
  return generatePageMetadata({
    title: config.copy.metaTitle[validLocale],
    description: config.copy.metaDescription[validLocale],
    path: ROUTE,
    locale: validLocale,
  })
}

export default async function CanonicalCalculatorPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const t = await getServerTranslations(validLocale)
  const config = CALCULATOR_VARIANTS[VARIANT]
  const content = CALCULATOR_CONTENT[VARIANT]

  const url = `${SITE_CONFIG.url}${getLocalizedPath(ROUTE, validLocale)}`
  const schemas = [
    generateBreadcrumbListSchema([
      { name: 'Home', path: Route.HOME },
      { name: t.tools.hub.title, path: Route.TOOLS },
      { name: config.copy.heroTitle[validLocale], path: ROUTE },
    ]),
    generateWebApplicationSchema({
      name: config.copy.heroTitle[validLocale],
      url,
      description: config.copy.metaDescription[validLocale],
    }),
    generateHowToSchema({
      name: t.tools.howTo.heading,
      description: config.copy.heroIntro[validLocale],
      steps: content.howToSteps.map((s) => s[validLocale]),
    }),
    generateFaqPageSchema(
      content.faq.map((e) => ({
        question: e.question[validLocale],
        answer: e.answer[validLocale],
      })),
    ),
  ]

  return (
    <>
      <StructuredData data={schemas} />
      <ToolPageShell
        variant={VARIANT}
        locale={validLocale}
        t={t}
        calculator={
          <RetreatProfitabilityCalculator
            variant={VARIANT}
            locale={validLocale}
            t={t}
          />
        }
      />
    </>
  )
}
```

- [ ] **Step 2: Create the four variant pages**

Each variant page is identical to the canonical page above EXCEPT the two top-level constants. Replicate the file four times with the appropriate substitutions:

| File | `VARIANT =` | `ROUTE =` |
| --- | --- | --- |
| `yoga-retreat-pricing-calculator/page.tsx` | `ToolVariant.YOGA` | `Route.YOGA_RETREAT_PRICING_CALCULATOR` |
| `wellness-retreat-pricing-calculator/page.tsx` | `ToolVariant.WELLNESS` | `Route.WELLNESS_RETREAT_PRICING_CALCULATOR` |
| `meditation-retreat-pricing-calculator/page.tsx` | `ToolVariant.MEDITATION` | `Route.MEDITATION_RETREAT_PRICING_CALCULATOR` |
| `coaching-retreat-pricing-calculator/page.tsx` | `ToolVariant.COACHING` | `Route.COACHING_RETREAT_PRICING_CALCULATOR` |

The rest of each file (imports, exports, JSX, schema generation) is identical. Copy verbatim and substitute only the two constants. Do not extract a shared helper — each file is small and the App Router prefers explicit per-route exports.

- [ ] **Step 3: Lint and full typecheck**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 4: Build to verify the routes compile**

```bash
npm run build
```

Expected: PASS, all 6 tools routes appear in the build output.

- [ ] **Step 5: Commit**

```bash
git add src/app/\[locale\]/tools/
git commit -m "add canonical and 4 variant calculator pages with structured data"
```

---

## Phase 8 — Sitemap + silo internal links

### Task 21: Add tools routes to sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

**Goal:** Include the hub + canonical + 4 variants in the sitemap, locale-aware.

- [ ] **Step 1: Extend the pageRoutes array**

Open `src/app/sitemap.ts`. In the `pageRoutes` array (currently ends with `PHOTOGRAPHY_WORKSHOPS`), add these entries before the closing `]`:

```ts
    {
      path: Route.TOOLS,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      path: Route.RETREAT_PROFITABILITY_CALCULATOR,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      path: Route.YOGA_RETREAT_PRICING_CALCULATOR,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      path: Route.WELLNESS_RETREAT_PRICING_CALCULATOR,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      path: Route.MEDITATION_RETREAT_PRICING_CALCULATOR,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      path: Route.COACHING_RETREAT_PRICING_CALCULATOR,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "include tools routes in sitemap"
```

---

### Task 22: Add silo→calculator CTA to existing silo pages

**Files:**
- Modify: `src/components/server/SiloLandingPage/SiloLandingPage.tsx`
- Modify: `src/components/server/SiloLandingPage/SiloLandingPage.module.css`
- Modify: `src/i18n/types.ts` — add silo CTA strings
- Modify: `src/i18n/dictionaries/en.ts`, `nl.ts`, `de.ts`, `es.ts`, `fr.ts`

**Goal:** Add a CTA block to the SiloLandingPage component that links to the matching calculator variant. Driven by a route prop or a mapping based on the silo's existing route.

- [ ] **Step 1: Extend SilosChromeTranslations type**

Open `src/i18n/types.ts`. Find the `SilosChromeTranslations` interface and add:

```ts
  toolCtaTitle: string
  toolCtaBody: string
  toolCtaLabel: string
```

- [ ] **Step 2: Add EN strings**

Open `src/i18n/dictionaries/en.ts`. Find the `silos:` block and add:

```ts
    toolCtaTitle: 'Pricing your retreat?',
    toolCtaBody: 'Use our free calculator to plan your revenue, costs, profit margin, and breakeven occupancy.',
    toolCtaLabel: 'Open the calculator',
```

- [ ] **Step 3: Add NL strings**

Open `src/i18n/dictionaries/nl.ts` and add:

```ts
    toolCtaTitle: 'Prijs je retraite plannen?',
    toolCtaBody: 'Gebruik onze gratis calculator om omzet, kosten, marge en break-even te plannen.',
    toolCtaLabel: 'Open de calculator',
```

- [ ] **Step 4: Add DE/ES/FR fallback strings**

Add the same EN strings to `de.ts`, `es.ts`, `fr.ts` to keep types satisfied.

- [ ] **Step 5: Add a silo→tool route map**

Open `src/constants/tools.ts` and add at the bottom:

```ts
import { Route } from '@/types/navigation'

export const SILO_TO_TOOL_ROUTE: Partial<Record<Route, Route>> = {
  [Route.YOGA_TEACHERS]: Route.YOGA_RETREAT_PRICING_CALCULATOR,
  [Route.WELLNESS_DETOX_RETREATS]: Route.WELLNESS_RETREAT_PRICING_CALCULATOR,
  [Route.MEDITATION_RETREATS]: Route.MEDITATION_RETREAT_PRICING_CALCULATOR,
  [Route.COACHING_INTENSIVES]: Route.COACHING_RETREAT_PRICING_CALCULATOR,
}
```

(If the existing `import { Route }` statement is already in the file, do not duplicate it — extend it.)

- [ ] **Step 6: Render CTA block in SiloLandingPage**

Open `src/components/server/SiloLandingPage/SiloLandingPage.tsx`. Add an import:

```ts
import { SILO_TO_TOOL_ROUTE } from '@/constants/tools'
```

Inside the `SiloLandingPage` function, after computing `contactHref`, add:

```ts
  const toolRoute = SILO_TO_TOOL_ROUTE[silo.route as Route]
  const toolHref = toolRoute ? getLocalizedPath(toolRoute, locale) : null
```

In the JSX, insert a CTA block immediately before the closing `</article>` (or after the FAQ section, before `<ComparisonTeaser>`):

```tsx
        {toolHref && (
          <section className={styles.toolCta} aria-labelledby="silo-tool-cta">
            <div className={styles.toolCtaInner}>
              <h2 id="silo-tool-cta" className={styles.toolCtaTitle}>
                {t.silos.toolCtaTitle}
              </h2>
              <p className={styles.toolCtaBody}>{t.silos.toolCtaBody}</p>
              <Link href={toolHref} className={styles.primaryCta}>
                {t.silos.toolCtaLabel}
                <ArrowRightIcon />
              </Link>
            </div>
          </section>
        )}
```

- [ ] **Step 7: Add CSS for the new section**

Open `src/components/server/SiloLandingPage/SiloLandingPage.module.css`. Append:

```css
.toolCta {
  background: rgba(184, 137, 74, 0.06);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
}

.toolCtaInner { display: grid; gap: 1rem; max-width: 36rem; }
.toolCtaTitle { font-family: var(--font-playfair); margin: 0; font-size: var(--font-size-2xl); }
.toolCtaBody { color: var(--color-text-muted); margin: 0; line-height: var(--line-height-relaxed); }
```

- [ ] **Step 8: Lint and build**

```bash
npm run lint && npm run build
```

Expected: PASS.

- [ ] **Step 9: Commit**

```bash
git add src/components/server/SiloLandingPage/ \
        src/i18n/types.ts src/i18n/dictionaries/ \
        src/constants/tools.ts
git commit -m "add silo->calculator CTA block on matching silo pages"
```

---

## Phase 9 — Guide content generation (per variant, EN + NL)

> **Important:** These tasks require dispatching a verification subagent to draft and fact-check the guide content. The implementing agent should NOT generate this content from imagination. Use the prompt template below for each variant. The output replaces placeholder content in `src/data/tools/calculatorContent.ts`.

### Verification subagent prompt template

For each variant in Tasks 23–27, dispatch the `general-purpose` agent (or `Explore` agent if available) with this prompt:

> You are drafting verified guide content for a retreat profitability calculator targeting the keyword "[KEYWORD]". The page already contains an interactive calculator; you write only the long-form prose around it.
>
> Required output (English, then Dutch translation): six guide H2 sections (~150-250 words each) and 6-10 FAQ entries. The six sections are: (1) What goes into [variant] retreat pricing, (2) Benchmark pricing for [variant] retreats, (3) How to calculate breakeven, (4) Common pricing mistakes, (5) When you can charge more (positioning), (6) Marketing budget rules of thumb. Plus 4 "How to use this calculator" steps (one sentence each).
>
> Hard rules:
> - Every numeric claim must be sourced from a defensible public source. Use WebSearch/WebFetch to verify against industry directories (BookRetreats, Retreat Guru, Retreat Maven), industry blogs, and published retreat-business articles. List sources at the end.
> - If a number cannot be verified, omit it or replace with a qualitative statement ("most retreats" rather than "60% of retreats").
> - Tone: practical, direct, no marketing language ("blazingly", "magnificent", etc.). Sentences a working facilitator would actually use.
> - Currency: € (euros). Region: Europe / Netherlands.
> - Do NOT mention MakersBarn pricing or claim MakersBarn rates. Do NOT recommend any specific venue.
> - No AI hedging ("It's important to note...", "It's worth mentioning...").
>
> Output format: structured TypeScript object literal compatible with `CalculatorVariantContent` from `src/types/tools.ts`. EN strings first, then NL translations of the same. List sources at the end as a separate comment block.

### Task 23: Generate yoga variant content

- [ ] **Step 1: Dispatch the verification agent**

Use the Agent tool with `subagent_type: general-purpose` and the prompt template above with `[KEYWORD]` = `"how to price a yoga retreat"` and `[variant]` = `yoga`. Capture the full output.

- [ ] **Step 2: Editorial review**

Read the agent's output. Verify:
- All numeric claims have sources listed.
- Tone matches "practical, no marketing language".
- NL translations are accurate (use a Dutch speaker if available).
- No mention of MakersBarn pricing.

If any concerns, request revisions from the agent before proceeding.

- [ ] **Step 3: Replace yoga placeholder content**

Open `src/data/tools/calculatorContent.ts`. Replace the `[ToolVariant.YOGA]: PLACEHOLDER_VARIANT_CONTENT` line with the verified `CalculatorVariantContent` literal from the agent.

- [ ] **Step 4: Lint and verify**

```bash
npm run lint
```

Expected: PASS, all types satisfied.

- [ ] **Step 5: Commit**

```bash
git add src/data/tools/calculatorContent.ts
git commit -m "add verified yoga variant guide content (EN + NL)"
```

### Task 24: Generate wellness variant content

Same as Task 23, but with `[KEYWORD]` = `"wellness retreat pricing"` and `[variant]` = `wellness`. Replace `[ToolVariant.WELLNESS]: PLACEHOLDER_VARIANT_CONTENT`.

- [ ] **Step 1: Dispatch agent with wellness keyword**
- [ ] **Step 2: Editorial review**
- [ ] **Step 3: Replace placeholder with verified content**
- [ ] **Step 4: Lint**
- [ ] **Step 5: Commit**

```bash
git add src/data/tools/calculatorContent.ts
git commit -m "add verified wellness variant guide content (EN + NL)"
```

### Task 25: Generate meditation variant content

Same as Task 23 with `[KEYWORD]` = `"meditation retreat pricing"`, `[variant]` = `meditation`.

- [ ] **Step 1: Dispatch agent**
- [ ] **Step 2: Editorial review**
- [ ] **Step 3: Replace placeholder**
- [ ] **Step 4: Lint**
- [ ] **Step 5: Commit**

```bash
git add src/data/tools/calculatorContent.ts
git commit -m "add verified meditation variant guide content (EN + NL)"
```

### Task 26: Generate coaching variant content

Same as Task 23 with `[KEYWORD]` = `"coaching retreat pricing"`, `[variant]` = `coaching`.

- [ ] **Step 1: Dispatch agent**
- [ ] **Step 2: Editorial review**
- [ ] **Step 3: Replace placeholder**
- [ ] **Step 4: Lint**
- [ ] **Step 5: Commit**

```bash
git add src/data/tools/calculatorContent.ts
git commit -m "add verified coaching variant guide content (EN + NL)"
```

### Task 27: Generate generic / canonical variant content

Same as Task 23 with `[KEYWORD]` = `"retreat pricing calculator"`, `[variant]` = `generic`. Content is broader (covers retreat pricing in general, not a specific niche).

- [ ] **Step 1: Dispatch agent**
- [ ] **Step 2: Editorial review**
- [ ] **Step 3: Replace placeholder**
- [ ] **Step 4: Lint**
- [ ] **Step 5: Commit**

```bash
git add src/data/tools/calculatorContent.ts
git commit -m "add verified generic variant guide content (EN + NL)"
```

---

## Phase 10 — Pre-launch verification

### Task 28: Verify middleware and full build

**Files:**
- Read: `src/middleware.ts` (do not modify unless broken)

**Goal:** Confirm middleware doesn't block `/tools/*`, run full lint + build, address any errors.

- [ ] **Step 1: Inspect middleware for path-blocking rules**

```bash
grep -n "tools\|block\|deny" src/middleware.ts
```

If any rule matches `/tools/*` paths, modify to exclude them. Otherwise no change.

- [ ] **Step 2: Run full lint**

```bash
npm run lint
```

Expected: PASS, zero errors and zero warnings.

- [ ] **Step 3: Run full test suite**

```bash
npm test
```

Expected: PASS, all unit tests green (calculate + urlState).

- [ ] **Step 4: Run production build**

```bash
npm run build
```

Expected: PASS. Verify these routes appear in the build output:
- `/[locale]/tools`
- `/[locale]/tools/retreat-profitability-calculator`
- `/[locale]/tools/yoga-retreat-pricing-calculator`
- `/[locale]/tools/wellness-retreat-pricing-calculator`
- `/[locale]/tools/meditation-retreat-pricing-calculator`
- `/[locale]/tools/coaching-retreat-pricing-calculator`

- [ ] **Step 5: Commit any fixes (if any)**

If middleware was modified or any build errors fixed:

```bash
git add -A
git commit -m "fix lint/build issues for tools section"
```

Otherwise this task ends with no commit.

---

### Task 29: Manual browser verification

**Goal:** Run the dev server and walk through each tool page to confirm functionality. This task does not produce code; it produces a verification checklist completed by manual interaction.

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Open `http://localhost:3000/en/tools` in a browser.

- [ ] **Step 2: Hub page checks**

- The hub page renders with H1, intro, and 5 tool cards (canonical + 4 variants).
- Each card link routes correctly.
- View page source: `BreadcrumbList` and `CollectionPage` JSON-LD present.
- Switch to `/nl/tools` — Dutch text renders, hreflang in head includes both `en` and `nl`.

- [ ] **Step 3: Calculator page checks (yoga variant)**

Open `http://localhost:3000/en/tools/yoga-retreat-pricing-calculator`:

- Hero, calculator, how-to, guide content, FAQ, related calculators, MakersBarn CTA all render.
- Calculator loads with yoga defaults visible (12 guests, 5 nights, €1,200, etc.).
- Move guests slider — results update in real time.
- Move price slider — narrative sentence updates with new numbers.
- Toggle "Advanced costs" — hidden fields appear.
- Click "Restore example values" — defaults restored.
- Change values, then click "Copy shareable link" — URL contains query params; pasting in a new tab restores the same calculation.
- Open "Considering MakersBarn" CTA — routes to `/en/contact?src=tool-yoga`.
- Submit a real email to "Email me my summary" — verify email arrives at the test email address; verify Slack notification posts to `#user-contacts`.

- [ ] **Step 4: Repeat key checks for each remaining variant**

For wellness, meditation, coaching, and the canonical: defaults match config, calculator updates live, MakersBarn CTA links use the correct `src=tool-{variant}` query param.

- [ ] **Step 5: Mobile checks**

Resize browser to mobile width (≤480px) for one variant page:

- Calculator stacks single-column.
- Results panel renders below inputs without overflow.
- All sliders are touchable, advanced disclosure works.

- [ ] **Step 6: Silo CTA checks**

Visit `/en/yoga-teachers`, `/en/wellness-detox-retreats`, `/en/meditation-retreats`, `/en/coaching-intensives`:

- Each silo page now shows a "Pricing your retreat?" CTA block.
- Link routes to the matching calculator variant.

- [ ] **Step 7: Structured data validation**

For each calculator page, copy the page URL into [Google Rich Results Test](https://search.google.com/test/rich-results) (or test locally with the page source pasted). Confirm `WebApplication`, `HowTo`, `FAQPage`, `BreadcrumbList` all parse without errors.

- [ ] **Step 8: Verification summary**

Document any issues found in this manual pass. If any block launch (broken UI, broken email flow, structured-data errors), file follow-up tasks. Otherwise mark this task complete with a brief note.

---

## Self-Review

Done after completing the plan. Spec coverage check:

- ✅ §1 (Goal/strategy): captured in plan goal + Phase ordering
- ✅ §2 (IA/URLs): Tasks 1, 19, 20, 21
- ✅ §3 (Calculator UX): Tasks 2, 4, 5, 6, 7, 8, 9, 10, 11
- ✅ §4 (Page anatomy & guide content): Tasks 17, 18, 23–27
- ✅ §5 (Component architecture): all of Phase 1, 2, 4, 6
- ✅ §6 (SEO machinery): Tasks 16, 19, 20, 21
- ✅ §7 (v1 scope, content authoring B with verification): Tasks 23–27
- ✅ Email + Slack flow per spec clarification: Task 12
- ✅ Silo embed deferred (per spec): silo CTA only added (Task 22), no embed

Type/name consistency: `ToolVariant`, `Route`, `CalculatorInputs`, `CalculatorResults`, `VariantConfig`, `CalculatorContentMap`, `CALCULATOR_VARIANTS`, `CALCULATOR_CONTENT`, `CALCULATOR_ANALYTICS_EVENTS` are referenced consistently across tasks.

Placeholder scan: only legitimate placeholders are the variant guide content in Task 17, intentionally replaced by the agent in Tasks 23–27. No "TBD", "TODO", "implement later" anywhere. The benchmark numbers in `calculatorVariants.ts` (Task 6) are flagged in the spec as "to be replaced by verification agent" but are realistic-enough placeholders that the calculator works at launch even if Phase 9 isn't completed; for v1 launch readiness, Phase 9 is required.
