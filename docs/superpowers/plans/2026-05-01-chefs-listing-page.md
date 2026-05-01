# Chefs Listing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `/[locale]/chefs`, a programmatic-SEO landing page for the Makers Barn chef directory that renders gracefully when zero chefs are PUBLISHED, populates with chef cards as the directory grows, and routes a dual-audience contact CTA through the existing `UnifiedContact` flow with intent attribution.

**Architecture:** New server composer `ChefsListingPage` under `src/components/server/ChefsListingPage/` orchestrates focused subcomponents (hero, intro hook, three educational H2 sections, chef grid with empty-state panel, facts strip, FAQ, dual CTA). Page route at `src/app/[locale]/chefs/page.tsx` reads chefs via the existing `getChefsForEnv()`, builds JSON-LD via a sibling `ChefsStructuredData` (BreadcrumbList + CollectionPage + conditional ItemList + FAQPage), and emits localized metadata via `generatePageMetadata`. The dual CTA extends `ContactIntent` with `LOOKING_FOR_CHEF` and `CHEF_JOIN`; `UnifiedContact` renders a chef-specific lead-in panel for those intents, the ContactFormSchema gains an optional `source` field, and Slack/Postmark notifications include source attribution. Sitemap, primary nav, chef detail-page back-link, and 5 cross-page link injections complete site-wide integration. Implementation order: foundations (enum, constants, EN dictionary) → UnifiedContact extension → bottom-up components → composer → route → integration → NL/DE translations → manual browser verification.

**Tech Stack:** Next.js 15 App Router, TypeScript, React Server Components, CSS Modules, Vitest + React Testing Library + jsdom, Zod, framer-motion (already in use), Postmark, Slack webhooks.

**Spec:** `docs/superpowers/specs/2026-05-01-chefs-listing-page-design.md`

---

## Phase 1 — Foundations

These tasks add the lowest-level building blocks (enum, constants, EN dictionary keys + types) so subsequent tasks can import them. EN i18n is authored fully here; NL/DE are translated in Phase 6.

### Task 1: Extend `ContactIntent` enum

**Files:**
- Modify: `src/types/contact.ts`
- Test: `src/types/contact.test.ts` (new)

- [ ] **Step 1: Write the failing test**

```ts
// src/types/contact.test.ts
import { describe, expect, it } from 'vitest'

import { ContactIntent } from './contact'

describe('ContactIntent', () => {
  it('exposes the four supported intents with stable string values', () => {
    expect(ContactIntent.QUESTION).toBe('question')
    expect(ContactIntent.BOOKING).toBe('booking')
    expect(ContactIntent.LOOKING_FOR_CHEF).toBe('looking-for-chef')
    expect(ContactIntent.CHEF_JOIN).toBe('chef-join')
  })

  it('has exactly four members', () => {
    expect(Object.values(ContactIntent)).toHaveLength(4)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/types/contact.test.ts`
Expected: FAIL — `ContactIntent.LOOKING_FOR_CHEF` and `ContactIntent.CHEF_JOIN` are undefined.

- [ ] **Step 3: Extend the enum**

Edit `src/types/contact.ts`:

```ts
export enum ContactIntent {
  QUESTION = 'question',
  BOOKING = 'booking',
  LOOKING_FOR_CHEF = 'looking-for-chef',
  CHEF_JOIN = 'chef-join',
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/types/contact.test.ts`
Expected: PASS, both tests green.

- [ ] **Step 5: Commit**

```bash
git add src/types/contact.ts src/types/contact.test.ts
git commit -m "feat(contact): add LOOKING_FOR_CHEF and CHEF_JOIN intents"
```

---

### Task 2: Add `CHEFS_LISTING_ANCHOR` constants

**Files:**
- Create: `src/constants/chefsListing.ts`
- Modify: `src/constants/index.ts` (barrel — add export)
- Test: `src/constants/chefsListing.test.ts` (new)

- [ ] **Step 1: Write the failing test**

```ts
// src/constants/chefsListing.test.ts
import { describe, expect, it } from 'vitest'

import { CHEFS_LISTING_ANCHOR } from './chefsListing'

describe('CHEFS_LISTING_ANCHOR', () => {
  it('exposes anchor IDs for the grid and dual-cta sections', () => {
    expect(CHEFS_LISTING_ANCHOR.GRID).toBe('chefs-grid')
    expect(CHEFS_LISTING_ANCHOR.DUAL_CTA).toBe('chefs-dual-cta')
  })

  it('values are non-empty kebab-case strings safe for URL fragments', () => {
    for (const value of Object.values(CHEFS_LISTING_ANCHOR)) {
      expect(value).toMatch(/^[a-z][a-z0-9-]*$/)
    }
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/constants/chefsListing.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Create the constants file**

Create `src/constants/chefsListing.ts`:

```ts
export const CHEFS_LISTING_ANCHOR = {
  GRID: 'chefs-grid',
  DUAL_CTA: 'chefs-dual-cta',
} as const
```

Add the export to `src/constants/index.ts`:

```ts
export * from './chefsListing'
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/constants/chefsListing.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/constants/chefsListing.ts src/constants/chefsListing.test.ts src/constants/index.ts
git commit -m "feat(chefs): add CHEFS_LISTING_ANCHOR constants for on-page anchors"
```

---

### Task 3: Add `ChefsListingDict` type + EN dictionary content

This task defines the dictionary type, registers it on the root `Dictionary` type, and authors the full EN content. NL/DE come in Phase 6 — but the type contract is locked here. TypeScript will refuse to compile NL/DE later if any key is missing.

**Files:**
- Modify: `src/i18n/types.ts`
- Modify: `src/i18n/dictionaries/en.ts`
- Modify: `src/i18n/dictionaries/nl.ts` (placeholder block — see Step 5)
- Modify: `src/i18n/dictionaries/de.ts` (placeholder block — see Step 5)

- [ ] **Step 1: Inspect existing `Dictionary` shape**

Run: `grep -n "interface Dictionary\|type Dictionary\b" src/i18n/types.ts`
Expected: A single root `Dictionary` interface or type. Note its current keys for context.

- [ ] **Step 2: Add the new types**

Edit `src/i18n/types.ts`. Add the following interface block; then add `chefsListing: ChefsListingDict` and `intentLeadIn` extension to whatever `unifiedContact` interface exists.

```ts
export interface ChefsListingFaqItem {
  question: string
  answer: string
}

export interface ChefsListingFactItem {
  number: string
  description: string
}

export interface ChefsListingSection {
  h2: string
  paragraphs: readonly string[]
}

export interface ChefsListingDualCtaCard {
  eyebrow: string
  h3: string
  body: string
  button: string
}

export interface ChefsListingDict {
  meta: { title: string; description: string }
  hero: { eyebrow: string; h1: string; subtitle: string }
  intro: string
  sections: {
    whatToLookFor: ChefsListingSection
    pricing: ChefsListingSection
    coverage: ChefsListingSection
  }
  grid: {
    h2: string
    framingLine: string
    card: { viewProfile: string; draftBadge: string }
  }
  launchingSoon: {
    headline: string
    body: string
    inlineCtaLabel: string
  }
  facts: readonly ChefsListingFactItem[]
  faq: {
    h2: string
    items: readonly ChefsListingFaqItem[]
  }
  dualCta: {
    looking: ChefsListingDualCtaCard
    join: ChefsListingDualCtaCard
  }
}
```

Then locate the `Dictionary` interface and add:

```ts
export interface Dictionary {
  // ... existing keys unchanged
  chefsListing: ChefsListingDict
}
```

Locate the existing `unifiedContact` interface (likely `UnifiedContactDict` or similar — search for `pageTitle: string` near contact context) and add the new lead-in block:

```ts
export interface UnifiedContactDict {
  // ... existing fields unchanged
  intentLeadIn: {
    looking: string
    join: string
  }
}
```

If the existing dictionary types are inlined into `Dictionary` (no named interfaces), add the `intentLeadIn` block as a nested type on `unifiedContact` directly.

- [ ] **Step 3: Append the EN content**

Edit `src/i18n/dictionaries/en.ts`. Inside the existing `unifiedContact` block, add:

```ts
unifiedContact: {
  // ... existing keys unchanged
  intentLeadIn: {
    looking: "You're asking about finding a chef for your retreat. Tell us what you're planning and we'll match from our directory or point you elsewhere.",
    join: "You're asking about joining the Makers Barn chef directory. Tell us about your kitchen and we'll be in touch.",
  },
},
```

At the top level of the dictionary export, add:

```ts
chefsListing: {
  meta: {
    title: 'Private chefs for retreats in the Netherlands',
    description: 'A practical guide to finding, evaluating, and booking a private chef for your retreat in the Netherlands. Pricing, lead times, dietary fit, and our curated directory.',
  },
  hero: {
    eyebrow: 'Chefs',
    h1: 'Private chefs for retreats in the Netherlands',
    subtitle: 'A practical guide to finding, evaluating, and booking a chef for your retreat — plus the small directory we have curated at Makers Barn.',
  },
  intro: {
    paragraph: 'Most retreat hosts underestimate what booking a chef actually involves. Lead times, dietary fit, on-site logistics, and pricing structures vary widely. This guide covers what to look for, how pricing works in the Netherlands, and where to find chefs who travel.',
  },
  sections: {
    whatToLookFor: {
      h2: 'What to look for in a retreat chef',
      paragraphs: [
        'Cooking for a retreat is closer to running a small kitchen than catering an event. Look for chefs with experience cooking for sustained groups of 8–20 over multiple days, not just one-off dinners — the rhythm, sourcing, and recovery between services is genuinely different.',
        'Ask how they handle dietary mixing: how do they keep a vegan main satisfying when half the table is omnivore, and how do they avoid making accommodations feel like an afterthought? Strong retreat chefs treat dietary diversity as a creative constraint, not a logistical one.',
        'Confirm sourcing transparency. Most NL retreat chefs work with one or two specific farms, dairies, or fishmongers. If they cannot name them, that is a signal worth probing.',
      ],
    },
    pricing: {
      h2: 'How retreat-chef pricing works in the Netherlands',
      paragraphs: [
        'Three pricing structures dominate the Dutch market. Day rates (€350–€650/day for one chef, plus food cost) suit retreats where you want flexibility on menu and shopping. Per-meal pricing (€18–€45 per person per meal, all-in) is common for shorter retreats and gives you a clean per-head budget. All-inclusive packages (€80–€150 per person per day) wrap food, prep, service, and cleanup into one number — useful when you want to hand the kitchen off entirely.',
        'Watch for what is excluded. Travel time, kitchen prep equipment, dishwashing labour, and dietary substitutions are the most common line items that quietly inflate the final invoice. Ask for a sample contract before committing.',
        'Lead times are 4–8 weeks for established chefs, longer in peak season (May–September). Book early.',
      ],
    },
    coverage: {
      h2: 'Regional coverage and travel',
      paragraphs: [
        'Most established retreat chefs are based in Noord-Holland, Utrecht, or Gelderland and travel to venues in Drenthe, Friesland, Overijssel, and Flevoland for retreats lasting two days or more. Travel within the country is generally included in day rates above €450; below that, expect a kilometric supplement.',
        'For multi-day retreats outside their home province, most chefs prefer overnight accommodation on-site rather than commuting. Plan one bed for the chef in your booking.',
        'If you are hosting at Makers Barn in Drenthe, our directory below is curated for our venue but most chefs in it travel beyond it.',
      ],
    },
  },
  grid: {
    h2: 'Chefs in our directory',
    framingLine: 'These are chefs we have worked with and trust. Most travel beyond Makers Barn.',
    card: {
      viewProfile: 'View profile',
      draftBadge: 'Draft',
    },
  },
  launchingSoon: {
    headline: 'Our directory is in private beta.',
    body: 'We are vetting chefs in small batches. The guidance above is free to use — and if you would like to be matched when chefs go live, tell us what you are planning.',
    inlineCtaLabel: 'Tell us what you are planning →',
  },
  facts: {
    items: [
      { number: '8–20', description: 'Typical retreat group size' },
      { number: '€350–€650', description: 'Day-rate range for one chef' },
      { number: '4–8 wks', description: 'Typical lead time to book' },
      { number: '12 provinces', description: 'Coverage across the Netherlands' },
    ],
  },
  faq: {
    h2: 'Frequently asked questions',
    items: [
      {
        question: 'How much does a private chef cost for a retreat in the Netherlands?',
        answer: 'Day rates run €350–€650 for a single chef plus food cost. Per-meal pricing is €18–€45 per person. All-inclusive packages run €80–€150 per person per day. Final cost depends on group size, dietary complexity, and whether prep equipment is provided.',
      },
      {
        question: 'What is the typical lead time to book a retreat chef?',
        answer: 'Plan 4–8 weeks for most established chefs, longer between May and September. Last-minute bookings (under two weeks) are possible but expect a smaller pool to choose from.',
      },
      {
        question: 'Do chefs travel to retreat venues?',
        answer: 'Most established retreat chefs travel within the Netherlands. Travel is usually included in day rates above €450; below that, expect a per-kilometre supplement. For multi-day retreats outside the chef\'s home province, plan an overnight bed for them on-site.',
      },
      {
        question: 'How do chefs handle dietary requirements?',
        answer: 'Strong retreat chefs handle vegetarian, vegan, gluten-free, and dairy-free as standard. Allergies (nut, shellfish, sesame) and medical diets (FODMAP, low-histamine) are typically supported with two weeks notice. Always share dietary needs at the time of booking, not the week before.',
      },
      {
        question: 'Who contracts the chef — the venue or the host?',
        answer: 'Almost always the host. Venues like Makers Barn introduce chefs and may handle scheduling, but the contractual relationship and payment runs directly between host and chef. Confirm this on your venue\'s booking terms.',
      },
      {
        question: 'Can I cook myself instead?',
        answer: 'Yes — many smaller retreats (under 10 people, simpler menus) self-cater successfully. Hiring a chef pays off above 12 guests, with multiple dietary requirements, or when the host is also a teacher and cannot afford the kitchen overhead.',
      },
    ],
  },
  dualCta: {
    looking: {
      eyebrow: 'For retreat hosts',
      h3: 'Need help finding the right chef?',
      body: 'Tell us what you are planning. We will match from our directory or point you elsewhere.',
      button: 'Get matched',
    },
    join: {
      eyebrow: 'For chefs',
      h3: 'Are you a chef working in the Netherlands?',
      body: 'Apply to join the Makers Barn directory.',
      button: 'Apply to join',
    },
  },
},
```

- [ ] **Step 4: Verify TypeScript still compiles for EN, fails for NL/DE**

Run: `npx tsc --noEmit`
Expected: TypeScript errors on `src/i18n/dictionaries/nl.ts` and `de.ts` (missing `chefsListing` and `unifiedContact.intentLeadIn`). EN is fine.

- [ ] **Step 5: Add NL and DE placeholder blocks (English text — to be translated in Phase 6)**

In each of `src/i18n/dictionaries/nl.ts` and `de.ts`, copy the entire `chefsListing` block from EN verbatim and add the same `unifiedContact.intentLeadIn` block. Mark with a comment so Phase 6 finds them:

```ts
// TODO(i18n): translate to nl — placeholder copy from en.ts (Phase 6)
chefsListing: { /* paste EN block exactly */ },
```

(Same in `de.ts` with `// TODO(i18n): translate to de`.)

- [ ] **Step 6: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 7: Commit**

```bash
git add src/i18n/types.ts src/i18n/dictionaries/en.ts src/i18n/dictionaries/nl.ts src/i18n/dictionaries/de.ts
git commit -m "feat(chefs): add ChefsListingDict + EN content (NL/DE placeholders)"
```

---

## Phase 2 — UnifiedContact Extension

`UnifiedContact` already parses `ContactIntent` from the URL hash. Adding the two new intents to the enum (Task 1) automatically expands `parseContactIntent`. We need to:
1. Fix the form-rendering ternary so non-BOOKING intents render `QuestionForm`.
2. Render the chef-specific lead-in panel above the form for `LOOKING_FOR_CHEF` and `CHEF_JOIN`.
3. Add a hidden `source` field to `QuestionForm` so the intent flows to the server action.
4. Extend the contact server action + Slack formatter + Postmark subject to surface attribution.

### Task 4: Fix form-rendering ternary + add lead-in panel in `UnifiedContact`

**Files:**
- Modify: `src/components/client/UnifiedContact/UnifiedContact.tsx`
- Modify: `src/components/client/UnifiedContact/UnifiedContact.module.css`
- Test: `src/components/client/UnifiedContact/UnifiedContact.test.tsx` (new)

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/client/UnifiedContact/UnifiedContact.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { UnifiedContact } from './UnifiedContact'

vi.mock('@/context', () => ({
  useTranslation: (ns: string) => {
    if (ns === 'unifiedContact') {
      return {
        t: {
          pageTitle: 'Get in Touch',
          pageSubtitle: 'Subtitle.',
          selectorAriaLabel: 'Contact options',
          intentSelector: {
            questionLabel: 'Ask',
            questionSublabel: 'sub',
            bookingLabel: 'Book',
            bookingSublabel: 'sub',
          },
          mapTitle: 'Map',
          questionFormImageAlt: 'alt',
          intentLeadIn: {
            looking: 'You are asking about finding a chef.',
            join: 'You are asking about joining.',
          },
        },
      }
    }
    return {
      t: {
        emailAlternative: { text: '' },
        whatsappAlternative: { text: '' },
      },
    }
  },
}))

vi.mock('../BookingForm', () => ({ BookingForm: () => <div data-testid="booking-form" /> }))
vi.mock('./QuestionForm', () => ({ QuestionForm: () => <div data-testid="question-form" /> }))

function setHash(hash: string) {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { ...window.location, hash: `#${hash}` },
  })
}

describe('UnifiedContact', () => {
  it('renders QuestionForm and the looking lead-in for #looking-for-chef', () => {
    setHash('looking-for-chef')
    render(<UnifiedContact />)
    expect(screen.getByTestId('question-form')).toBeInTheDocument()
    expect(screen.queryByTestId('booking-form')).not.toBeInTheDocument()
    expect(screen.getByText('You are asking about finding a chef.')).toBeInTheDocument()
  })

  it('renders QuestionForm and the join lead-in for #chef-join', () => {
    setHash('chef-join')
    render(<UnifiedContact />)
    expect(screen.getByTestId('question-form')).toBeInTheDocument()
    expect(screen.getByText('You are asking about joining.')).toBeInTheDocument()
  })

  it('renders BookingForm only for #booking, no lead-in', () => {
    setHash('booking')
    render(<UnifiedContact />)
    expect(screen.getByTestId('booking-form')).toBeInTheDocument()
    expect(screen.queryByTestId('question-form')).not.toBeInTheDocument()
    expect(screen.queryByText(/asking about/)).not.toBeInTheDocument()
  })

  it('renders QuestionForm with no lead-in for #question (default)', () => {
    setHash('question')
    render(<UnifiedContact />)
    expect(screen.getByTestId('question-form')).toBeInTheDocument()
    expect(screen.queryByText(/asking about/)).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/client/UnifiedContact/UnifiedContact.test.tsx`
Expected: FAIL — at least one assertion fails (current ternary renders `BookingForm` for any non-QUESTION intent including the chef intents; lead-in panel does not exist).

- [ ] **Step 3: Update `UnifiedContact.tsx`**

In `src/components/client/UnifiedContact/UnifiedContact.tsx`:

a) Change the form-rendering ternary (currently around line 138) so BOOKING is the only intent that renders `BookingForm`; everything else renders `QuestionForm`:

```tsx
{intent === ContactIntent.BOOKING ? (
  <motion.div
    key="booking"
    role="tabpanel"
    id="booking-panel"
    aria-labelledby="booking-tab"
    variants={CONTENT_VARIANTS}
    initial="hidden"
    animate="visible"
    exit="exit"
    className={styles.bookingWrapper}
  >
    <BookingForm />
  </motion.div>
) : (
  <motion.div
    key="question"
    role="tabpanel"
    id="question-panel"
    aria-labelledby="question-tab"
    variants={CONTENT_VARIANTS}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <QuestionForm contactIntent={intent} />
  </motion.div>
)}
```

(The `contactIntent` prop is consumed by `QuestionForm` in Task 5 — adding it now keeps the wiring contained.)

b) Update the contact-alternatives gate to hide them when intent is `BOOKING` (current behaviour: shown for `QUESTION` only — extend to all non-BOOKING intents so chef intents see them too):

```tsx
{intent !== ContactIntent.BOOKING && (
  <div className={styles.contactAlternatives}>
    {/* existing content unchanged */}
  </div>
)}
```

c) Add the lead-in panel above the form section. After the IntentSelector section and before the form section:

```tsx
{(intent === ContactIntent.LOOKING_FOR_CHEF || intent === ContactIntent.CHEF_JOIN) && (
  <section className={styles.leadInSection}>
    <p className={styles.leadInText}>
      {intent === ContactIntent.LOOKING_FOR_CHEF
        ? unifiedContact.intentLeadIn.looking
        : unifiedContact.intentLeadIn.join}
    </p>
  </section>
)}
```

d) Add the matching CSS in `UnifiedContact.module.css`:

```css
.leadInSection {
  max-width: 720px;
  margin: 0 auto 1.5rem;
  padding: 1rem 1.5rem;
  background: var(--color-background);
  border-left: 3px solid var(--color-secondary);
  border-radius: 4px;
}

.leadInText {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-md);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  margin: 0;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/client/UnifiedContact/UnifiedContact.test.tsx`
Expected: PASS, all four tests green.

- [ ] **Step 5: Commit**

```bash
git add src/components/client/UnifiedContact/
git commit -m "feat(contact): render chef-intent lead-in panel + route non-BOOKING intents to QuestionForm"
```

---

### Task 5: Pass intent through `QuestionForm` to the server action

**Files:**
- Modify: `src/components/client/UnifiedContact/QuestionForm.tsx`
- Modify: `src/lib/validation.ts`
- Modify: `src/types/contact.ts`
- Modify: `src/services/slack.ts` (`formatContactFormMessage`)
- Modify: `src/services/email.ts` (subject derivation)
- Test: `src/lib/validation.test.ts` (add new test cases — file may already exist)
- Test: `src/services/slack.test.ts` (add new test case — file may already exist)

- [ ] **Step 1: Write the failing tests**

For `validation.ts`, append (or create) `src/lib/validation.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { ContactIntent } from '@/types'
import { validateContactForm } from './validation'

describe('validateContactForm — source field', () => {
  const base = { name: 'Ada', email: 'ada@example.com', phone: '', message: 'hello world' }

  it('accepts a valid ContactIntent as source', () => {
    const result = validateContactForm({ ...base, source: ContactIntent.LOOKING_FOR_CHEF })
    expect(result.success).toBe(true)
    expect(result.data?.source).toBe(ContactIntent.LOOKING_FOR_CHEF)
  })

  it('accepts payloads without a source (back-compat)', () => {
    const result = validateContactForm(base)
    expect(result.success).toBe(true)
    expect(result.data?.source).toBeUndefined()
  })

  it('rejects an invalid source value', () => {
    const result = validateContactForm({ ...base, source: 'not-an-intent' })
    expect(result.success).toBe(false)
  })
})
```

For `slack.ts`, append (or create) `src/services/slack.test.ts`:

```ts
import { describe, expect, it } from 'vitest'

import { ContactIntent } from '@/types'
import { formatContactFormMessage } from './slack'

describe('formatContactFormMessage', () => {
  const base = { name: 'Ada', email: 'ada@example.com', message: 'hello' } as const

  it('includes the chef-join source label when source is CHEF_JOIN', () => {
    const out = formatContactFormMessage({ ...base, source: ContactIntent.CHEF_JOIN })
    expect(out).toContain('Chef directory — apply to join')
  })

  it('includes the looking-for-chef source label when source is LOOKING_FOR_CHEF', () => {
    const out = formatContactFormMessage({ ...base, source: ContactIntent.LOOKING_FOR_CHEF })
    expect(out).toContain('Chef directory — looking for a chef')
  })

  it('omits any source line when source is undefined', () => {
    const out = formatContactFormMessage(base)
    expect(out).not.toContain('Chef directory')
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/lib/validation.test.ts src/services/slack.test.ts`
Expected: FAIL — `source` field is unknown to the schema; Slack formatter has no source branch.

- [ ] **Step 3: Extend `ContactFormData` and `ContactFormSchema`**

In `src/types/contact.ts`, extend `ContactFormData`:

```ts
import type { ContactIntent } from './contact' // already in same file — adjust import

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  source?: ContactIntent
}
```

In `src/lib/validation.ts`, extend the schema:

```ts
import { ContactIntent } from '@/types'

export const ContactFormSchema = z.object({
  // existing name, email, phone, message fields unchanged
  source: z.nativeEnum(ContactIntent).optional(),
})
```

- [ ] **Step 4: Add source labels and update Slack formatter**

In `src/constants/` (extend the existing contact-related constants file or add to `chefsListing.ts`):

```ts
export const CONTACT_SOURCE_SLACK_LABEL: Record<ContactIntent, string | undefined> = {
  [ContactIntent.QUESTION]: undefined,
  [ContactIntent.BOOKING]: undefined,
  [ContactIntent.LOOKING_FOR_CHEF]: 'Chef directory — looking for a chef',
  [ContactIntent.CHEF_JOIN]: 'Chef directory — apply to join',
}
```

In `src/services/slack.ts`, update `formatContactFormMessage`:

```ts
import { CONTACT_SOURCE_SLACK_LABEL } from '@/constants'

export function formatContactFormMessage(data: ValidatedContactFormData): string {
  const lines = [
    '📬 *New Contact Form Submission*',
    '',
    `*Name:* ${escapeSlackMarkdown(data.name)}`,
    `*Email:* ${escapeSlackMarkdown(data.email)}`,
  ]
  if (data.phone) lines.push(`*Phone:* ${escapeSlackMarkdown(data.phone)}`)

  const sourceLabel = data.source ? CONTACT_SOURCE_SLACK_LABEL[data.source] : undefined
  if (sourceLabel) lines.push(`*Source:* ${sourceLabel}`)

  lines.push('', `*Message:*`, escapeSlackMarkdown(data.message))
  return lines.join('\n')
}
```

- [ ] **Step 5: Update `sendEmail` subject derivation**

In `src/services/email.ts`, find where the Postmark subject line is built. Add a parallel constant `CONTACT_SOURCE_EMAIL_SUBJECT_PREFIX` mirroring the Slack constant and apply it as a subject prefix when present:

```ts
// in src/constants (same block)
export const CONTACT_SOURCE_EMAIL_SUBJECT_PREFIX: Record<ContactIntent, string | undefined> = {
  [ContactIntent.QUESTION]: undefined,
  [ContactIntent.BOOKING]: undefined,
  [ContactIntent.LOOKING_FOR_CHEF]: '[Chef directory — looking]',
  [ContactIntent.CHEF_JOIN]: '[Chef directory — joining]',
}
```

Then in `sendEmail` (or the function that builds the admin notification subject), prefix the existing subject when `data.source` resolves to a non-undefined label.

- [ ] **Step 6: Pass intent from `QuestionForm` to the server action**

Edit `src/components/client/UnifiedContact/QuestionForm.tsx`. Accept the new prop and include it in the submitted payload:

```tsx
interface QuestionFormProps {
  contactIntent?: ContactIntent
}

export function QuestionForm({ contactIntent }: QuestionFormProps) {
  // ... existing state
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const payload: ContactFormData = {
      name, email, phone, message,
      ...(contactIntent ? { source: contactIntent } : {}),
    }
    const result = await submitContactForm(payload)
    // ... existing success/error handling
  }
  // ... existing JSX
}
```

If `QuestionForm` does not currently take props, add the interface and accept the optional prop. Default-undefined is fine for direct `/contact` visits where intent is QUESTION.

- [ ] **Step 7: Run tests to verify they pass**

Run: `npx vitest run src/lib/validation.test.ts src/services/slack.test.ts src/types/contact.test.ts src/components/client/UnifiedContact/UnifiedContact.test.tsx`
Expected: PASS, all green.

- [ ] **Step 8: Commit**

```bash
git add src/types/contact.ts src/lib/validation.ts src/services/slack.ts src/services/email.ts src/constants/ src/components/client/UnifiedContact/QuestionForm.tsx
git commit -m "feat(contact): pass ContactIntent as source to server action; tag Slack + email"
```

---

## Phase 3 — Bottom-up Components

These components are independent and can be built in any order. Each is self-contained: data in via props, dictionary via `getServerTranslations` (server components) or `useTranslation` (client). All are server components unless explicitly noted.

### Task 6: `ChefCard` server component

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefCard.tsx`
- Create: `src/components/server/ChefsListingPage/ChefCard.module.css`
- Test: `src/components/server/ChefsListingPage/ChefCard.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// ChefCard.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ChefStatus } from '@/constants/chef'
import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'

import { ChefCard } from './ChefCard'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chef: {
      enums: { region: { drenthe: 'Drenthe', friesland: 'Friesland', overijssel: 'Overijssel', flevoland: 'Flevoland', groningen: 'Groningen', gelderland: 'Gelderland', utrecht: 'Utrecht', 'noord-holland': 'Noord-Holland', 'zuid-holland': 'Zuid-Holland', 'noord-brabant': 'Noord-Brabant', limburg: 'Limburg', zeeland: 'Zeeland' } },
    },
    chefsListing: {
      grid: { card: { viewProfile: 'View profile', draftBadge: 'Draft' } },
    },
  }),
}))

describe('ChefCard', () => {
  it('renders the chef name, region, and view-profile link', async () => {
    const result = await ChefCard({ chef: LIESBETH_VAN_DER_VELDEN_CHEF, lang: Language.EN })
    render(result)
    expect(screen.getByText(LIESBETH_VAN_DER_VELDEN_CHEF.name)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view profile/i })).toHaveAttribute(
      'href',
      `/en/chefs/${LIESBETH_VAN_DER_VELDEN_CHEF.slug}`,
    )
  })

  it('shows the draft badge for a DRAFT chef', async () => {
    const draft = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.DRAFT }
    const result = await ChefCard({ chef: draft, lang: Language.EN })
    render(result)
    expect(screen.getByText('Draft')).toBeInTheDocument()
  })

  it('hides the draft badge for a PUBLISHED chef', async () => {
    const published = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.PUBLISHED }
    const result = await ChefCard({ chef: published, lang: Language.EN })
    render(result)
    expect(screen.queryByText('Draft')).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefCard.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement `ChefCard.tsx`**

```tsx
// src/components/server/ChefsListingPage/ChefCard.tsx
import Image from 'next/image'
import Link from 'next/link'

import { ChefStatus } from '@/constants/chef'
import { getServerTranslations } from '@/i18n/server'
import { localize } from '@/lib'
import { getChefDetailPath } from '@/lib/routing'
import type { Chef, Language } from '@/types'

import styles from './ChefCard.module.css'

const MAX_CUISINE_CHIPS = 3
const AVATAR_SIZE = 96

interface Props {
  chef: Chef
  lang: Language
}

export async function ChefCard({ chef, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const regionLabel = dict.chef.enums.region[chef.homeBase.region]
  const cardCopy = dict.chefsListing.grid.card
  const cuisines = chef.cuisineStyles.slice(0, MAX_CUISINE_CHIPS)
  const isDraft = chef.status === ChefStatus.DRAFT
  const detailHref = getChefDetailPath(chef.slug, lang)

  return (
    <article className={styles.card}>
      {isDraft && <span className={styles.draftBadge}>{cardCopy.draftBadge}</span>}
      <div className={styles.avatarWrapper}>
        <Image
          src={chef.avatar.src}
          alt={chef.name}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className={styles.avatar}
        />
      </div>
      <h3 className={styles.name}>{chef.name}</h3>
      <p className={styles.location}>
        {chef.homeBase.city} · {regionLabel}
      </p>
      <p className={styles.tagline}>{localize(chef.tagline, lang)}</p>
      <ul className={styles.chips} aria-label="Cuisine styles">
        {cuisines.map((style, i) => (
          <li key={i} className={styles.chip}>
            {localize(style, lang)}
          </li>
        ))}
      </ul>
      <Link href={detailHref} className={styles.viewProfile}>
        {cardCopy.viewProfile} →
      </Link>
    </article>
  )
}
```

CSS (`ChefCard.module.css`) — author with these tokens (don't hardcode):

```css
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  background: var(--color-background);
  border: 1px solid rgba(31, 19, 12, 0.08);
  border-radius: 8px;
  position: relative;
}

.draftBadge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--chef-draft-badge-color, var(--color-text-tertiary));
  background: var(--chef-draft-badge-bg, rgba(184, 137, 74, 0.12));
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.avatarWrapper {
  margin-bottom: 1rem;
}

.avatar {
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-family: var(--font-playfair);
  font-size: var(--font-size-xl);
  color: var(--color-text);
  margin: 0 0 0.25rem;
}

.location {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin: 0 0 0.75rem;
}

.tagline {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  margin: 0 0 1rem;
}

.chips {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0 0 1rem;
}

.chip {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  background: rgba(41, 75, 58, 0.08);
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
}

.viewProfile {
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  text-decoration: none;
  margin-top: auto;
}

.viewProfile:hover {
  text-decoration: underline;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefCard.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefCard.{tsx,module.css,test.tsx}
git commit -m "feat(chefs): add ChefCard server component"
```

---

### Task 7: `LaunchingSoonPanel` server component

**Files:**
- Create: `src/components/server/ChefsListingPage/LaunchingSoonPanel.tsx`
- Create: `src/components/server/ChefsListingPage/LaunchingSoonPanel.module.css`
- Test: `src/components/server/ChefsListingPage/LaunchingSoonPanel.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Language } from '@/types'
import { LaunchingSoonPanel } from './LaunchingSoonPanel'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chefsListing: {
      launchingSoon: {
        headline: 'Our directory is in private beta.',
        body: 'Body copy.',
        inlineCtaLabel: 'Tell us what you are planning →',
      },
    },
  }),
}))

describe('LaunchingSoonPanel', () => {
  it('renders the headline, body, and inline anchor link to the dual-cta', async () => {
    const result = await LaunchingSoonPanel({ lang: Language.EN })
    render(result)
    expect(screen.getByText('Our directory is in private beta.')).toBeInTheDocument()
    expect(screen.getByText('Body copy.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tell us what you are planning/i })).toHaveAttribute(
      'href',
      '#chefs-dual-cta',
    )
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/server/ChefsListingPage/LaunchingSoonPanel.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```tsx
// LaunchingSoonPanel.tsx
import { CHEFS_LISTING_ANCHOR } from '@/constants'
import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './LaunchingSoonPanel.module.css'

interface Props { lang: Language }

export async function LaunchingSoonPanel({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const copy = dict.chefsListing.launchingSoon
  return (
    <div className={styles.panel}>
      <p className={styles.headline}>{copy.headline}</p>
      <p className={styles.body}>{copy.body}</p>
      <a href={`#${CHEFS_LISTING_ANCHOR.DUAL_CTA}`} className={styles.cta}>
        {copy.inlineCtaLabel}
      </a>
    </div>
  )
}
```

CSS — keep restrained, single tinted card spanning the grid width.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/server/ChefsListingPage/LaunchingSoonPanel.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ChefsListingPage/LaunchingSoonPanel.{tsx,module.css,test.tsx}
git commit -m "feat(chefs): add LaunchingSoonPanel for empty directory state"
```

---

### Task 8: `ChefGrid` server component

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefGrid.tsx`
- Create: `src/components/server/ChefsListingPage/ChefGrid.module.css`
- Test: `src/components/server/ChefsListingPage/ChefGrid.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'
import { ChefGrid } from './ChefGrid'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chef: { enums: { region: { drenthe: 'Drenthe' } } },
    chefsListing: {
      grid: { h2: 'Chefs in our directory', framingLine: 'These are chefs we trust.', card: { viewProfile: 'View profile', draftBadge: 'Draft' } },
      launchingSoon: { headline: 'Soon.', body: 'Body.', inlineCtaLabel: 'Tell us →' },
    },
  }),
}))

describe('ChefGrid', () => {
  it('renders the LaunchingSoonPanel when chefs is empty', async () => {
    const result = await ChefGrid({ chefs: [], lang: Language.EN })
    render(result)
    expect(screen.getByText('Soon.')).toBeInTheDocument()
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })

  it('renders one card per chef when chefs is non-empty', async () => {
    const result = await ChefGrid({ chefs: [LIESBETH_VAN_DER_VELDEN_CHEF], lang: Language.EN })
    render(result)
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.queryByText('Soon.')).not.toBeInTheDocument()
  })

  it('renders the H2 heading and framing line in both states', async () => {
    const empty = await ChefGrid({ chefs: [], lang: Language.EN })
    const { container, rerender } = render(empty)
    expect(within(container).getByRole('heading', { level: 2, name: 'Chefs in our directory' })).toBeInTheDocument()

    const populated = await ChefGrid({ chefs: [LIESBETH_VAN_DER_VELDEN_CHEF], lang: Language.EN })
    rerender(populated)
    expect(within(container).getByRole('heading', { level: 2, name: 'Chefs in our directory' })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefGrid.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```tsx
// ChefGrid.tsx
import { CHEFS_LISTING_ANCHOR } from '@/constants'
import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import { ChefCard } from './ChefCard'
import { LaunchingSoonPanel } from './LaunchingSoonPanel'
import styles from './ChefGrid.module.css'

interface Props {
  chefs: readonly Chef[]
  lang: Language
}

export async function ChefGrid({ chefs, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const gridCopy = dict.chefsListing.grid
  const isEmpty = chefs.length === 0

  return (
    <section id={CHEFS_LISTING_ANCHOR.GRID} className={styles.section}>
      <h2 className={styles.h2}>{gridCopy.h2}</h2>
      <p className={styles.framingLine}>{gridCopy.framingLine}</p>
      {isEmpty ? (
        <LaunchingSoonPanel lang={lang} />
      ) : (
        <div className={styles.grid}>
          {chefs.map((chef) => (
            <ChefCard key={chef.slug} chef={chef} lang={lang} />
          ))}
        </div>
      )}
    </section>
  )
}
```

CSS: 1-col mobile, 2-col tablet (≥640px), 3-col desktop (≥960px).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefGrid.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefGrid.{tsx,module.css,test.tsx}
git commit -m "feat(chefs): add ChefGrid composer with empty-state behaviour"
```

---

### Task 9: `ChefsHero` server component

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsHero.tsx`
- Create: `src/components/server/ChefsListingPage/ChefsHero.module.css`

- [ ] **Step 1: Implement (no separate test — covered by composer smoke test in Task 16)**

```tsx
// ChefsHero.tsx
import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsHero.module.css'

interface Props { lang: Language }

export async function ChefsHero({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const hero = dict.chefsListing.hero
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.h1}>{hero.h1}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
      </div>
    </section>
  )
}
```

CSS: full-width, eyebrow uppercase + tracked, H1 uses `--font-playfair` + `--font-size-5xl`, subtitle uses `--font-quicksand` + `--font-size-lg`. Background image is placed via the existing image registry — pick an existing kitchen/table image when wiring (or add the path TODO and let the implementer pick during browser verification).

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsHero.{tsx,module.css}
git commit -m "feat(chefs): add ChefsHero server component"
```

---

### Task 10: `ChefsIntro` server component

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsIntro.tsx`
- Create: `src/components/server/ChefsListingPage/ChefsIntro.module.css`

- [ ] **Step 1: Implement**

```tsx
// ChefsIntro.tsx
import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsIntro.module.css'

interface Props { lang: Language }

export async function ChefsIntro({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  return (
    <section className={styles.section}>
      <p className={styles.paragraph}>{dict.chefsListing.intro.paragraph}</p>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsIntro.{tsx,module.css}
git commit -m "feat(chefs): add ChefsIntro hook paragraph"
```

---

### Task 11: `ChefsContentSection` server component (reused 3x)

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsContentSection.tsx`
- Create: `src/components/server/ChefsListingPage/ChefsContentSection.module.css`

- [ ] **Step 1: Implement**

Generic component — takes the H2 + paragraphs as props so the composer can pass any of the three section dictionaries.

```tsx
// ChefsContentSection.tsx
import styles from './ChefsContentSection.module.css'

interface Props {
  h2: string
  paragraphs: readonly string[]
}

export function ChefsContentSection({ h2, paragraphs }: Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>{h2}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className={styles.paragraph}>{p}</p>
      ))}
    </section>
  )
}
```

This is a synchronous component (no i18n call needed — caller passes the strings).

- [ ] **Step 2: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsContentSection.{tsx,module.css}
git commit -m "feat(chefs): add reusable ChefsContentSection"
```

---

### Task 12: `ChefsFactsStrip` server component

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsFactsStrip.tsx`
- Create: `src/components/server/ChefsListingPage/ChefsFactsStrip.module.css`

- [ ] **Step 1: Implement**

```tsx
// ChefsFactsStrip.tsx
import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsFactsStrip.module.css'

interface Props { lang: Language }

export async function ChefsFactsStrip({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  return (
    <section className={styles.strip}>
      {dict.chefsListing.facts.items.map((fact, i) => (
        <div key={i} className={styles.fact}>
          <p className={styles.number}>{fact.number}</p>
          <p className={styles.description}>{fact.description}</p>
        </div>
      ))}
    </section>
  )
}
```

CSS: horizontal flex strip, 1-col mobile / 2-col tablet / 4-col desktop.

- [ ] **Step 2: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsFactsStrip.{tsx,module.css}
git commit -m "feat(chefs): add ChefsFactsStrip"
```

---

### Task 13: `ChefsFaq` server component (with stable data shape for structured data)

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsFaq.tsx`
- Create: `src/components/server/ChefsListingPage/ChefsFaq.module.css`

This component is the single source of truth for the FAQ items rendered on the page AND used by `ChefsStructuredData` (Task 14) to build the `FAQPage` schema. To avoid duplicating data, the structured-data builder reads the same `dict.chefsListing.faq.items` array.

- [ ] **Step 1: Implement**

```tsx
// ChefsFaq.tsx
import { getServerTranslations } from '@/i18n/server'
import type { Language } from '@/types'

import styles from './ChefsFaq.module.css'

interface Props { lang: Language }

export async function ChefsFaq({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const { h2, items } = dict.chefsListing.faq
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>{h2}</h2>
      <dl className={styles.list}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <dt className={styles.question}>{item.question}</dt>
            <dd className={styles.answer}>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsFaq.{tsx,module.css}
git commit -m "feat(chefs): add ChefsFaq server component"
```

---

### Task 14: `ChefsDualCta` server component

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsDualCta.tsx`
- Create: `src/components/server/ChefsListingPage/ChefsDualCta.module.css`
- Test: `src/components/server/ChefsListingPage/ChefsDualCta.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Language } from '@/types'
import { ChefsDualCta } from './ChefsDualCta'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chefsListing: {
      dualCta: {
        looking: { eyebrow: 'For hosts', h3: 'Looking?', body: 'Tell us.', button: 'Get matched' },
        join: { eyebrow: 'For chefs', h3: 'Are you a chef?', body: 'Apply.', button: 'Apply to join' },
      },
    },
  }),
}))

describe('ChefsDualCta', () => {
  it('renders both CTAs with correct hash links', async () => {
    const result = await ChefsDualCta({ lang: Language.EN })
    render(result)
    expect(screen.getByRole('link', { name: 'Get matched' })).toHaveAttribute(
      'href',
      '/en/contact#looking-for-chef',
    )
    expect(screen.getByRole('link', { name: 'Apply to join' })).toHaveAttribute(
      'href',
      '/en/contact#chef-join',
    )
  })

  it('renders both card headings', async () => {
    const result = await ChefsDualCta({ lang: Language.EN })
    render(result)
    expect(screen.getByRole('heading', { level: 3, name: 'Looking?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Are you a chef?' })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefsDualCta.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```tsx
// ChefsDualCta.tsx
import Link from 'next/link'

import { CHEFS_LISTING_ANCHOR } from '@/constants'
import { getServerTranslations } from '@/i18n/server'
import { getLocalizedPath } from '@/lib/routing'
import { ContactIntent, Route } from '@/types'
import type { Language } from '@/types'

import styles from './ChefsDualCta.module.css'

interface Props { lang: Language }

export async function ChefsDualCta({ lang }: Props) {
  const dict = await getServerTranslations(lang)
  const { looking, join } = dict.chefsListing.dualCta
  const contactBase = getLocalizedPath(Route.CONTACT, lang)
  const lookingHref = `${contactBase}#${ContactIntent.LOOKING_FOR_CHEF}`
  const joinHref = `${contactBase}#${ContactIntent.CHEF_JOIN}`

  return (
    <section id={CHEFS_LISTING_ANCHOR.DUAL_CTA} className={styles.section}>
      <div className={styles.cards}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>{looking.eyebrow}</p>
          <h3 className={styles.h3}>{looking.h3}</h3>
          <p className={styles.body}>{looking.body}</p>
          <Link href={lookingHref} className={styles.button}>{looking.button}</Link>
        </article>
        <article className={styles.card}>
          <p className={styles.eyebrow}>{join.eyebrow}</p>
          <h3 className={styles.h3}>{join.h3}</h3>
          <p className={styles.body}>{join.body}</p>
          <Link href={joinHref} className={styles.button}>{join.button}</Link>
        </article>
      </div>
    </section>
  )
}
```

CSS: side-by-side on tablet+ (`grid-template-columns: 1fr 1fr; gap: 1.5rem`), stacked on mobile.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefsDualCta.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsDualCta.{tsx,module.css,test.tsx}
git commit -m "feat(chefs): add ChefsDualCta with hash-linked contact intents"
```

---

### Task 15: `ChefsStructuredData` server component + JSON-LD builder

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsStructuredData.tsx`
- Test: `src/components/server/ChefsListingPage/ChefsStructuredData.test.tsx`

Pattern mirrors existing `ChefStructuredData.tsx`: pure builder function returning the JSON object, thin async server component wrapping it.

- [ ] **Step 1: Write the failing test**

```tsx
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ChefStatus } from '@/constants/chef'
import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'

import { buildChefsListingStructuredDataLd } from './ChefsStructuredData'

const FAQ_FIXTURE = [
  { question: 'Q1?', answer: 'A1.' },
  { question: 'Q2?', answer: 'A2.' },
] as const
const META_FIXTURE = { title: 'Title', description: 'Desc' }

describe('buildChefsListingStructuredDataLd', () => {
  it('always emits BreadcrumbList, CollectionPage, FAQPage', () => {
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const types = (ld as { '@graph': { '@type': string }[] })['@graph'].map((n) => n['@type'])
    expect(types).toContain('BreadcrumbList')
    expect(types).toContain('CollectionPage')
    expect(types).toContain('FAQPage')
  })

  it('omits ItemList when publishedChefs is empty', () => {
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const types = (ld as { '@graph': { '@type': string }[] })['@graph'].map((n) => n['@type'])
    expect(types).not.toContain('ItemList')
  })

  it('emits ItemList with positions when publishedChefs is non-empty', () => {
    const published = { ...LIESBETH_VAN_DER_VELDEN_CHEF, status: ChefStatus.PUBLISHED }
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [published],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const itemList = (ld as { '@graph': { '@type': string; itemListElement?: unknown[] }[] })
      ['@graph'].find((n) => n['@type'] === 'ItemList')
    expect(itemList).toBeDefined()
    expect(itemList?.itemListElement).toHaveLength(1)
    const first = (itemList?.itemListElement?.[0] as { position: number; url: string; name: string })
    expect(first.position).toBe(1)
    expect(first.url).toBe(`https://makersbarn.com/en/chefs/${published.slug}`)
    expect(first.name).toBe(published.name)
  })

  it('FAQPage.mainEntity length matches input faqItems length', () => {
    const ld = buildChefsListingStructuredDataLd({
      lang: Language.EN,
      publishedChefs: [],
      faqItems: FAQ_FIXTURE,
      meta: META_FIXTURE,
    })
    const faq = (ld as { '@graph': { '@type': string; mainEntity?: unknown[] }[] })
      ['@graph'].find((n) => n['@type'] === 'FAQPage')
    expect(faq?.mainEntity).toHaveLength(FAQ_FIXTURE.length)
  })
})
```

(Adjust the URL host in the test from `https://makersbarn.com` to whatever `SITE_CONFIG.url` resolves to in test environment.)

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefsStructuredData.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```tsx
// ChefsStructuredData.tsx
import { SITE_CONFIG } from '@/constants/site'
import { getServerTranslations } from '@/i18n/server'
import { getChefDetailPath, getLocalizedPath } from '@/lib/routing'
import { Language, Route } from '@/types'
import type { Chef } from '@/types'

const SCHEMA_CONTEXT = 'https://schema.org'

interface BuildArgs {
  lang: Language
  publishedChefs: readonly Chef[]
  faqItems: readonly { question: string; answer: string }[]
  meta: { title: string; description: string }
}

export function buildChefsListingStructuredDataLd(args: BuildArgs): object {
  const { lang, publishedChefs, faqItems, meta } = args
  const canonical = `${SITE_CONFIG.url}${getLocalizedPath(Route.CHEFS, lang)}`

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_CONFIG.url}${getLocalizedPath('/', lang)}` },
      { '@type': 'ListItem', position: 2, name: meta.title, item: canonical },
    ],
  }

  const collectionPage = {
    '@type': 'CollectionPage',
    '@id': canonical,
    name: meta.title,
    description: meta.description,
    inLanguage: lang,
    isPartOf: { '@type': 'WebSite', url: SITE_CONFIG.url, name: SITE_CONFIG.name },
  }

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const graph: object[] = [breadcrumb, collectionPage, faqPage]

  if (publishedChefs.length > 0) {
    graph.push({
      '@type': 'ItemList',
      itemListElement: publishedChefs.map((chef, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_CONFIG.url}${getChefDetailPath(chef.slug, lang)}`,
        name: chef.name,
      })),
    })
  }

  return { '@context': SCHEMA_CONTEXT, '@graph': graph }
}

interface ComponentProps {
  lang: Language
  publishedChefs: readonly Chef[]
}

export async function ChefsStructuredData({ lang, publishedChefs }: ComponentProps) {
  const dict = await getServerTranslations(lang)
  const ld = buildChefsListingStructuredDataLd({
    lang,
    publishedChefs,
    faqItems: dict.chefsListing.faq.items,
    meta: dict.chefsListing.meta,
  })
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefsStructuredData.test.tsx`
Expected: PASS — all four tests green.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsStructuredData.{tsx,test.tsx}
git commit -m "feat(chefs): add ChefsStructuredData with conditional ItemList"
```

---

## Phase 4 — Composer + Route

### Task 16: `ChefsListingPage` composer + smoke tests

**Files:**
- Create: `src/components/server/ChefsListingPage/ChefsListingPage.tsx`
- Create: `src/components/server/ChefsListingPage/ChefsListingPage.module.css`
- Create: `src/components/server/ChefsListingPage/index.ts`
- Test: `src/components/server/ChefsListingPage/ChefsListingPage.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { describe, expect, it, vi } from 'vitest'
import { isValidElement } from 'react'

import { LIESBETH_VAN_DER_VELDEN_CHEF } from '@/data/chefs/liesbeth-van-der-velden'
import { Language } from '@/types'

import { ChefsListingPage } from './ChefsListingPage'

vi.mock('@/i18n/server', () => ({
  getServerTranslations: vi.fn().mockResolvedValue({
    chef: { enums: { region: { drenthe: 'Drenthe' } } },
    chefsListing: {
      meta: { title: 'T', description: 'D' },
      hero: { eyebrow: 'Chefs', h1: 'H1', subtitle: 'sub' },
      intro: { paragraph: 'intro' },
      sections: {
        whatToLookFor: { h2: 'A', paragraphs: ['p1'] },
        pricing: { h2: 'B', paragraphs: ['p1'] },
        coverage: { h2: 'C', paragraphs: ['p1'] },
      },
      grid: { h2: 'Grid', framingLine: 'fl', card: { viewProfile: 'View', draftBadge: 'Draft' } },
      launchingSoon: { headline: 'Soon', body: 'b', inlineCtaLabel: 'cta' },
      facts: { items: [{ number: '1', description: 'd' }] },
      faq: { h2: 'FAQ', items: [{ question: 'q', answer: 'a' }] },
      dualCta: {
        looking: { eyebrow: 'e', h3: 'h', body: 'b', button: 'b' },
        join: { eyebrow: 'e', h3: 'h', body: 'b', button: 'b' },
      },
    },
  }),
}))

describe('ChefsListingPage', () => {
  it('returns a JSX element with no chefs', async () => {
    const result = await ChefsListingPage({ chefs: [], publishedChefs: [], lang: Language.EN })
    expect(isValidElement(result)).toBe(true)
  })

  it('returns a JSX element with one chef', async () => {
    const result = await ChefsListingPage({ chefs: [LIESBETH_VAN_DER_VELDEN_CHEF], publishedChefs: [], lang: Language.EN })
    expect(isValidElement(result)).toBe(true)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefsListingPage.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the composer**

```tsx
// ChefsListingPage.tsx
import { getServerTranslations } from '@/i18n/server'
import type { Chef, Language } from '@/types'

import { ChefGrid } from './ChefGrid'
import { ChefsContentSection } from './ChefsContentSection'
import { ChefsDualCta } from './ChefsDualCta'
import { ChefsFactsStrip } from './ChefsFactsStrip'
import { ChefsFaq } from './ChefsFaq'
import { ChefsHero } from './ChefsHero'
import { ChefsIntro } from './ChefsIntro'
import { ChefsStructuredData } from './ChefsStructuredData'
import styles from './ChefsListingPage.module.css'

interface Props {
  /** Chefs to render in the grid (drafts visible in non-prod). */
  chefs: readonly Chef[]
  /** Published-only subset for ItemList JSON-LD; never includes drafts. */
  publishedChefs: readonly Chef[]
  lang: Language
}

export async function ChefsListingPage({ chefs, publishedChefs, lang }: Props) {
  const dict = await getServerTranslations(lang)
  const sections = dict.chefsListing.sections
  return (
    <>
      <ChefsStructuredData lang={lang} publishedChefs={publishedChefs} />
      <main className={styles.page}>
        <ChefsHero lang={lang} />
        <ChefsIntro lang={lang} />
        <ChefsContentSection h2={sections.whatToLookFor.h2} paragraphs={sections.whatToLookFor.paragraphs} />
        <ChefsContentSection h2={sections.pricing.h2} paragraphs={sections.pricing.paragraphs} />
        <ChefsContentSection h2={sections.coverage.h2} paragraphs={sections.coverage.paragraphs} />
        <ChefGrid chefs={chefs} lang={lang} />
        <ChefsFactsStrip lang={lang} />
        <ChefsFaq lang={lang} />
        <ChefsDualCta lang={lang} />
      </main>
    </>
  )
}
```

Create `index.ts`:

```ts
export { ChefsListingPage } from './ChefsListingPage'
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/server/ChefsListingPage/ChefsListingPage.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/server/ChefsListingPage/ChefsListingPage.{tsx,module.css,test.tsx} src/components/server/ChefsListingPage/index.ts
git commit -m "feat(chefs): add ChefsListingPage composer"
```

---

### Task 17: Page route at `/[locale]/chefs/page.tsx`

**Files:**
- Create: `src/app/[locale]/chefs/page.tsx`

(Note: the `/[locale]/chefs/[slug]/page.tsx` route already exists at `src/app/[locale]/chefs/[slug]/page.tsx` and should not be touched.)

- [ ] **Step 1: Implement the route**

```tsx
// src/app/[locale]/chefs/page.tsx
import type { Metadata } from 'next'

import { ChefsListingPage } from '@/components/server'
import { PUBLISHED_CHEFS, getChefsForEnv } from '@/data/chefs'
import { getServerTranslations } from '@/i18n'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { Route } from '@/types'

interface PageProps {
  params: Promise<{ locale: string }>
}

const IS_PROD = process.env.VERCEL_ENV === 'production'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const dict = await getServerTranslations(validLocale)
  return {
    ...generatePageMetadata({
      title: dict.chefsListing.meta.title,
      description: dict.chefsListing.meta.description,
      path: Route.CHEFS,
      locale: validLocale,
    }),
    robots: IS_PROD ? undefined : { index: false, follow: false },
  }
}

export default async function ChefsListingRoute({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const chefs = getChefsForEnv()
  return (
    <ChefsListingPage
      chefs={chefs}
      publishedChefs={PUBLISHED_CHEFS}
      lang={validLocale}
    />
  )
}
```

- [ ] **Step 2: Add the barrel export**

If `src/components/server/index.ts` does not yet re-export `ChefsListingPage`, add:

```ts
export { ChefsListingPage } from './ChefsListingPage'
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build succeeds, route appears in the build output for all three locales.

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/chefs/page.tsx src/components/server/index.ts
git commit -m "feat(chefs): add /[locale]/chefs route with metadata"
```

---

## Phase 5 — Site-wide Integration

### Task 18: Add `/chefs` to sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Inspect**

Read `src/app/sitemap.ts`. The `PAGE_ROUTES` array (around lines 29–56) drives locale fan-out for the standard pages. Detail pages have their own loop using `PUBLISHED_CHEFS`.

- [ ] **Step 2: Add the listing route**

Insert into `PAGE_ROUTES`:

```ts
{ path: Route.CHEFS, changeFrequency: 'monthly', priority: 0.85 },
```

(Placement: alphabetical or grouped with other monthly silo entries — doesn't matter functionally.)

- [ ] **Step 3: Verify the route renders in the sitemap output**

Run: `npm run build && npm run start &` (start the production server in the background)
Then: `curl -s http://localhost:3000/sitemap.xml | grep '/chefs<\|/chefs/'`
Expected: All three locale variants of `/chefs` appear (in addition to existing chef detail URLs from PUBLISHED chefs).
Stop the server: `kill %1`

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(chefs): add /chefs listing route to sitemap"
```

---

### Task 19: Add "Chefs" to primary nav

**Files:**
- Modify: `src/components/client/Navbar/Navbar.tsx`
- Modify: `src/i18n/dictionaries/{en,nl,de}.ts` (add `nav.chefs` key)
- Modify: `src/i18n/types.ts` (extend `NavTranslations`)

- [ ] **Step 1: Add the i18n key in all three dictionaries**

In each dictionary, locate the `nav` namespace and add:

```ts
nav: {
  // existing keys
  chefs: 'Chefs',  // EN
  // chefs: 'Koks',  // NL
  // chefs: 'Köche', // DE
},
```

In `src/i18n/types.ts`, extend the `NavTranslations` interface with `chefs: string`.

- [ ] **Step 2: Add the route to `NAV_ROUTES`**

In `src/components/client/Navbar/Navbar.tsx` (around line 33):

```ts
const NAV_ROUTES = [
  { href: Route.HOME, key: 'home' as const },
  { href: Route.FACILITIES, key: 'facilities' as const },
  { href: Route.ABOUT, key: 'about' as const },
  { href: Route.EXPERIENCES, key: 'experiences' as const },
  { href: Route.CHEFS, key: 'chefs' as const },
]
```

- [ ] **Step 3: Verify the nav renders the new link**

Run: `npm run dev` and visit `http://localhost:3000/en` — the "Chefs" link should appear in the primary nav.

- [ ] **Step 4: Verify TypeScript + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/client/Navbar/Navbar.tsx src/i18n/dictionaries/ src/i18n/types.ts
git commit -m "feat(nav): add Chefs link to primary navigation"
```

---

### Task 20: Wire chef detail page back-link to `/chefs`

**Files:**
- Modify: `src/components/server/ChefDetailPage/...` (file containing the `chef.backLink` rendering — locate by `grep -rn "backLink" src/components/server/ChefDetailPage`)

- [ ] **Step 1: Find the back-link rendering site**

Run: `grep -rn "backLink\|chef.backLink" src/components/server/ChefDetailPage/`
Expected: A single render site (likely in `ChefDetailPage.tsx` or `ChefHeader.tsx`).

- [ ] **Step 2: Verify or update the destination**

The link should resolve to `getLocalizedPath(Route.CHEFS, lang)`. If it currently points elsewhere (e.g. `/`), update it. If it already points to `Route.CHEFS`, this task is a no-op — close it as `[x]` with a note in the commit.

```tsx
import { getLocalizedPath } from '@/lib/routing'
import { Route } from '@/types'

<Link href={getLocalizedPath(Route.CHEFS, lang)} className={styles.backLink}>
  {dict.chef.backLink}
</Link>
```

- [ ] **Step 3: Manual verification**

Run: `npm run dev`. Visit `http://localhost:3000/en/chefs/liesbeth-van-der-velden` and click the back-link. Should navigate to `/en/chefs`.

- [ ] **Step 4: Commit (if any change made)**

```bash
git add src/components/server/ChefDetailPage/
git commit -m "fix(chefs): wire chef detail back-link to /chefs listing"
```

(If the back-link already pointed correctly, skip the commit and mark the task completed.)

---

### Task 21: Cross-page link injections

Add a single one-line link "Working with a chef? See our guide →" near the bottom of the page body (above the footer or above the next-page CTA, depending on each page's structure) on:

- `src/app/[locale]/host-a-retreat/page.tsx`
- `src/app/[locale]/experiences/page.tsx`
- `src/app/[locale]/yoga-teachers/page.tsx`
- `src/app/[locale]/writing-retreats/page.tsx`
- `src/app/[locale]/meditation-retreats/page.tsx`

**Files (all five above)**

- [ ] **Step 1: Add a shared dictionary key for the cross-link**

In each of `src/i18n/dictionaries/{en,nl,de}.ts`, add to `chefsListing`:

```ts
chefsListing: {
  // existing keys
  crossLink: {
    label: 'Working with a chef? See our guide →',  // EN
    // label: 'Met een kok werken? Bekijk onze gids →',  // NL
    // label: 'Mit einem Koch arbeiten? Unser Leitfaden →',  // DE
  },
},
```

Extend `ChefsListingDict` in `src/i18n/types.ts`:

```ts
crossLink: { label: string }
```

- [ ] **Step 2: Add the link on each page**

For each of the 5 pages, locate the page composer's render output. Add a single anchor near the bottom of the main content (above any footer/contact CTA). For server-component pages, fetch the dictionary directly. Example for `host-a-retreat/page.tsx`:

```tsx
import Link from 'next/link'
import { getLocalizedPath } from '@/lib/routing'
import { Route } from '@/types'

// inside the page, near the bottom of the main content:
<p style={{ textAlign: 'center', margin: '2rem 0' }}>
  <Link href={getLocalizedPath(Route.CHEFS, validLocale)}>
    {t.chefsListing.crossLink.label}
  </Link>
</p>
```

(Replace inline style with a CSS module class if the page already has a styles object.)

- [ ] **Step 3: Verify TypeScript + lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: No errors.

- [ ] **Step 4: Manual verification**

Run: `npm run dev`. Visit each of the 5 pages and confirm the link appears and resolves to `/[locale]/chefs`.

- [ ] **Step 5: Commit**

```bash
git add src/app/[locale]/host-a-retreat/ src/app/[locale]/experiences/ src/app/[locale]/yoga-teachers/ src/app/[locale]/writing-retreats/ src/app/[locale]/meditation-retreats/ src/i18n/
git commit -m "feat(chefs): add cross-page link to chefs guide on related pages"
```

---

## Phase 6 — Translations (NL + DE)

These tasks replace the placeholder English copy left in `nl.ts` and `de.ts` (Task 3 Step 5) with proper translations. Translations should be natural-sounding, not literal — the EN copy is the source of truth for meaning, not for word choice.

### Task 22: Translate `chefsListing` namespace to NL

**Files:**
- Modify: `src/i18n/dictionaries/nl.ts`

- [ ] **Step 1: Locate the placeholder**

Run: `grep -n "TODO(i18n): translate to nl" src/i18n/dictionaries/nl.ts`

- [ ] **Step 2: Replace each EN string with a Dutch translation**

Translate every leaf string under `chefsListing`, `unifiedContact.intentLeadIn`, `nav.chefs`, and `chefsListing.crossLink.label`. The plan does not enumerate every translated string — use natural Dutch phrasing that conveys the same meaning. For currency/numeric ranges (`€350–€650`, `8–20`, `4–8 wks`), keep numerals identical and translate only the `description` text. For domain terms ("retreat" → "retraite", "chef" → "kok", "directory" → "gids" or "directory"), match the conventions used elsewhere in the existing NL dictionary.

Remove the `// TODO(i18n)` comments after translating.

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 4: Manual verification**

Run: `npm run dev`. Visit `http://localhost:3000/nl/chefs`. Read through the page in Dutch — sanity-check the prose for awkwardness. Adjust as needed before committing.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/dictionaries/nl.ts
git commit -m "i18n(nl): translate chefsListing namespace + intentLeadIn"
```

---

### Task 23: Translate `chefsListing` namespace to DE

**Files:**
- Modify: `src/i18n/dictionaries/de.ts`

- [ ] **Step 1: Locate the placeholder**

Run: `grep -n "TODO(i18n): translate to de" src/i18n/dictionaries/de.ts`

- [ ] **Step 2: Replace each EN string with a German translation**

Same shape as Task 22, but translated to German. Domain terms: "retreat" → "Retreat", "chef" → "Koch / Köchin" (use neutral phrasing in headlines, e.g. "Privatköche für Retreats" — confirm with existing conventions in the dictionary). Currency/numeric ranges keep numerals unchanged.

Remove the `// TODO(i18n)` comments after translating.

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 4: Manual verification**

Run: `npm run dev`. Visit `http://localhost:3000/de/chefs`. Read through the page in German.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/dictionaries/de.ts
git commit -m "i18n(de): translate chefsListing namespace + intentLeadIn"
```

---

## Phase 7 — Verification

### Task 24: Manual browser verification

- [ ] **Step 1: Run dev server**

Run: `npm run dev`

- [ ] **Step 2: Verify empty state in production-like mode**

Set `VERCEL_ENV=production` for the dev server (just for this verification — kill the dev server, restart with `VERCEL_ENV=production npm run dev`).
Visit `http://localhost:3000/en/chefs`.
Confirm:
- Hero, intro, three H2 sections, facts strip, FAQ, dual CTA all render.
- Grid section renders the H2 + framing line + `LaunchingSoonPanel` (no chef cards — Liesbeth is DRAFT).
- Inline CTA in `LaunchingSoonPanel` jumps to `#chefs-dual-cta`.
- View-source: JSON-LD includes `BreadcrumbList`, `CollectionPage`, `FAQPage`. **Does NOT include `ItemList`.**
- View-source: meta tags include `noindex, nofollow` (because we faked production but on localhost).

Stop the server: `kill %1`

- [ ] **Step 3: Verify draft-visible state in non-prod**

Restart dev server normally: `npm run dev`
Visit `http://localhost:3000/en/chefs`.
Confirm:
- Liesbeth's chef card appears in the grid with a `Draft` badge.
- `LaunchingSoonPanel` does NOT appear.
- Card click navigates to `/en/chefs/liesbeth-van-der-velden`.
- View-source: JSON-LD `ItemList` is **still absent** (because `PUBLISHED_CHEFS` is empty regardless of env).

- [ ] **Step 4: Verify dual CTA flow end-to-end**

Click the "Get matched" button. Should navigate to `/en/contact#looking-for-chef`.
Confirm:
- The IntentSelector still shows only "Ask a Question" / "Request a Quote" tabs (no chef-specific tabs).
- The chef-specific lead-in panel appears above the form ("You're asking about finding a chef…").
- The form is `QuestionForm` (not `BookingForm`).

Repeat for "Apply to join" → `/en/contact#chef-join`. Lead-in should reflect the join intent.

- [ ] **Step 5: Verify form submission attribution**

Fill out and submit the QuestionForm from `#looking-for-chef`. Check the dev console / Slack channel / email logs (depending on what's wired in dev) and confirm the inquiry is tagged with the source label `"Chef directory — looking for a chef"`. Repeat for `#chef-join`.

- [ ] **Step 6: Verify chef-detail back-link**

Visit `/en/chefs/liesbeth-van-der-velden` and click the "← Discover more chefs" link. Should navigate to `/en/chefs`.

- [ ] **Step 7: Verify nav and cross-page links**

Confirm "Chefs" appears in the primary nav across multiple pages and resolves to `/[locale]/chefs`. Visit each of the 5 cross-linked pages and confirm the inline chef-guide link is present and works.

- [ ] **Step 8: Verify NL and DE locales**

Switch the language flag to NL. Repeat steps 3, 4, 6 for the NL locale. Then switch to DE and repeat. Spot-check that translated strings render and the URL is `/nl/chefs` or `/de/chefs` accordingly.

- [ ] **Step 9: Build passes**

Run: `npm run build`
Expected: build succeeds with no TypeScript or lint errors.

- [ ] **Step 10: All tests pass**

Run: `npx vitest run`
Expected: All tests green.

- [ ] **Step 11: Final commit (if any small fix-ups were needed during verification)**

```bash
git add -A
git commit -m "fix(chefs): polish issues found during browser verification"
```

(If no fix-ups needed, skip.)

---

## Self-Review Notes

Before declaring the plan complete, I cross-checked it against the spec:

**Spec coverage:**
- §1 Goal & Framing → covered by Tasks 6–17 (page anatomy + composer + route).
- §2 File & Component Layout → matches Task 6–17 file paths exactly.
- §3 Page Anatomy → Task 16 composer renders all 7 anatomy sections in the prescribed order.
- §4 Data Sourcing & Empty-State → Task 8 (ChefGrid empty-state branch) + Task 17 (page passes both `chefs` and `publishedChefs` to composer) + Task 15 (ItemList omitted when empty).
- §5 SEO → Task 17 (metadata + noindex on non-prod) + Task 15 (structured data with all schema entities) + Task 18 (sitemap) + Task 19 (nav) + Task 20 (back-link) + Task 21 (cross-page links).
- §6 Dual CTA & Contact Wiring → Task 1 (enum extension) + Task 4 (UnifiedContact rendering) + Task 5 (intent flows to server action + Slack + email).
- §7 i18n → Task 3 (EN content + types) + Tasks 22–23 (NL + DE translations).
- §8 Testing → Task 1, 6, 7, 8, 14, 15, 16 each include test steps; Task 4 covers UnifiedContact intent recognition; Task 5 covers validation + Slack formatter.
- §9 Open Questions → hero image is mentioned in Task 9 ("pick during browser verification"); cross-link page list is locked at the 5 pages in Task 21; nav placement is top-level in Task 19.
- §10 Success Criteria → Task 24 verifies each criterion.

**Type consistency check:**
- `ContactIntent` enum values match between Task 1 (definition) and Task 14 (URL hash usage).
- `CHEFS_LISTING_ANCHOR` keys (`GRID`, `DUAL_CTA`) match between Task 2 (definition) and Tasks 7, 8, 14 (usage).
- `ChefsListingDict` shape matches between Task 3 (type) and Tasks 6–14 (consumers).
- `buildChefsListingStructuredDataLd` signature matches between Task 15 (definition) and the composer (Task 16) — the composer doesn't call it directly; the wrapper `ChefsStructuredData` does.
- `ChefsListingPage` props (`chefs`, `publishedChefs`, `lang`) match between Task 16 (definition) and Task 17 (usage).

**Placeholder scan:** No "TBD", "TODO" (other than the intentional `// TODO(i18n)` comments in Task 3 which are explicitly resolved in Tasks 22–23). All steps include either code or a precise command.

**Known plan limitations:**
- Translation tasks (22, 23) intentionally do not enumerate every translated string. The plan assumes the implementer is capable of translating from EN to NL/DE and has access to the existing dictionary's domain conventions. If the translator needs help, they can request a starter draft separately.
- CSS in component tasks shows the typography-token usage but does not exhaustively detail every breakpoint and spacing value. Implementers follow CLAUDE.md typography rules and adapt during browser verification.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-01-chefs-listing-page.md`. Two execution options:

1. **Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach?
