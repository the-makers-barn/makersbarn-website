# Direct Booking First + Focused Workation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make direct WhatsApp booking the primary CTA on the experiences page and add a Focused Workation offer (card + dedicated page) at `/experiences/focused-workation`.

**Architecture:** Server-rendered Next.js 15 App Router pages; copy in typed i18n dictionaries (EN/NL/DE must change in lockstep or `tsc` fails); one new `'use client'` analytics wrapper for WhatsApp CTAs; a `getWhatsAppUrl` helper reused everywhere a `wa.me` link is built.

**Tech Stack:** Next.js 15, TypeScript, CSS Modules, Vitest, `@vercel/analytics`.

**Spec:** `docs/superpowers/specs/2026-07-18-direct-booking-focused-workation-design.md`

## Global Constraints

- No hardcoded user-facing strings in components — all copy through i18n dictionaries.
- No `any`, no dead code, no restating comments (project CLAUDE.md).
- All three dictionaries (`en.ts`, `nl.ts`, `de.ts`) must be updated in the same task that changes `src/i18n/types.ts` — the `Dictionary` type is exhaustive.
- Primary CTA color: `var(--color-primary)` green with white WhatsApp glyph (NOT WhatsApp green `#25D366` — fails contrast).
- All `wa.me` anchors: `target="_blank" rel="noopener noreferrer"`.
- No invented facts: no prices, no "workspaces" plural claim (only Cosmos writing desk + Horizon long table are backed).
- Venue name: use `SITE_CONFIG.name` where the name appears in code.
- Commit after each task; `pnpm lint && pnpm test` green before each commit.

---

### Task 1: WhatsApp URL helper + analytics event + client CTA component

**Files:**
- Create: `src/lib/whatsapp.ts`, `src/lib/whatsapp.test.ts`
- Create: `src/components/client/WhatsAppCtaLink/WhatsAppCtaLink.tsx`, `src/components/client/WhatsAppCtaLink/index.ts`
- Modify: `src/lib/index.ts` (barrel), `src/components/client/index.ts` (barrel), `src/constants/analytics.ts`

**Interfaces:**
- Produces: `getWhatsAppUrl(message: string): string`; `WhatsAppCtaLink` React component with props `{ href: string; location: WhatsAppCtaLocation; className?: string; children: ReactNode }`; `AnalyticsEvent.WHATSAPP_BOOKING_CLICKED`; `WhatsAppCtaLocation` enum in `src/constants/analytics.ts`.

- [ ] **Step 1: Write the failing test** (`src/lib/whatsapp.test.ts`)

```ts
import { describe, expect, it } from 'vitest'

import { CONTACT_URLS } from '@/constants/contact'

import { getWhatsAppUrl } from './whatsapp'

describe('getWhatsAppUrl', () => {
  it('builds on the shared CONTACT_URLS.WHATSAPP base', () => {
    expect(getWhatsAppUrl('hello')).toBe(`${CONTACT_URLS.WHATSAPP}?text=hello`)
  })

  it('URL-encodes the prefilled message', () => {
    const url = getWhatsAppUrl("Hi! I'd like to book the Cosmos cabin.")
    expect(url).toBe(`${CONTACT_URLS.WHATSAPP}?text=Hi!%20I'd%20like%20to%20book%20the%20Cosmos%20cabin.`)
  })
})
```

- [ ] **Step 2: Run test to verify it fails** — `pnpm vitest run src/lib/whatsapp.test.ts` → FAIL (module not found).

- [ ] **Step 3: Implement** (`src/lib/whatsapp.ts`)

```ts
import { CONTACT_URLS } from '@/constants/contact'

export function getWhatsAppUrl(message: string): string {
  return `${CONTACT_URLS.WHATSAPP}?text=${encodeURIComponent(message)}`
}
```

Add to `src/lib/index.ts`: `export { getWhatsAppUrl } from './whatsapp'`

- [ ] **Step 4: Run test to verify it passes** — `pnpm vitest run src/lib/whatsapp.test.ts` → PASS.

- [ ] **Step 5: Analytics constants** — append to `AnalyticsEvent` in `src/constants/analytics.ts`:

```ts
  WHATSAPP_BOOKING_CLICKED = 'whatsapp_booking_clicked',
```

and add (same file):

```ts
export enum WhatsAppCtaLocation {
  CABIN_COSMOS = 'cabin-cosmos',
  CABIN_HORIZON = 'cabin-horizon',
  WORKATION_HERO = 'workation-hero',
  WORKATION_FOOTER = 'workation-footer',
}
```

- [ ] **Step 6: Client CTA component** (`src/components/client/WhatsAppCtaLink/WhatsAppCtaLink.tsx`)

```tsx
'use client'

import type { ReactNode } from 'react'
import { track } from '@vercel/analytics'

import { AnalyticsEvent, WhatsAppCtaLocation } from '@/constants/analytics'

interface WhatsAppCtaLinkProps {
  href: string
  location: WhatsAppCtaLocation
  className?: string
  children: ReactNode
}

export function WhatsAppCtaLink({ href, location, className, children }: WhatsAppCtaLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track(AnalyticsEvent.WHATSAPP_BOOKING_CLICKED, { location })}
    >
      {children}
    </a>
  )
}
```

`index.ts`: `export { WhatsAppCtaLink } from './WhatsAppCtaLink'` — and add the folder to `src/components/client/index.ts` following the existing barrel style.

- [ ] **Step 7: Lint + full tests + commit**

```bash
pnpm lint && pnpm test
git add -A && git commit -m "feat(booking): add whatsapp url helper and tracked cta link component"
```

---

### Task 2: Experience types, route, data reorder

**Files:**
- Modify: `src/types/experiences.ts`, `src/types/navigation.ts`, `src/data/experiences.ts`

**Interfaces:**
- Consumes: nothing new.
- Produces: `ExperienceType.FOCUSED_WORKATION`; `FocusedWorkationOffer`; `Route.FOCUSED_WORKATION`; reordered `EXPERIENCE_OFFERS` with new `focused-workation` entry.

- [ ] **Step 1: Types** — `src/types/experiences.ts`:

```ts
export enum ExperienceType {
  SOLO_RETREAT = 'solo_retreat',
  ACCOMMODATION = 'accommodation',
  TOGETHER_RETREAT = 'together_retreat',
  FOCUSED_WORKATION = 'focused_workation',
}

export interface FocusedWorkationOffer {
  id: string
  type: ExperienceType.FOCUSED_WORKATION
  image: string
  internalUrl: string
}

export type ExperienceOffer =
  | SoloRetreatOffer
  | TogetherRetreatOffer
  | AccommodationOffer
  | FocusedWorkationOffer
```

- [ ] **Step 2: Route** — `src/types/navigation.ts`, next to `SHANTI_DEVA_RETREAT`:

```ts
  FOCUSED_WORKATION = '/experiences/focused-workation',
```

- [ ] **Step 3: Data** — `src/data/experiences.ts`: reorder `EXPERIENCE_OFFERS` to `accommodation-cosmos`, `accommodation-horizon`, `focused-workation`, `solo-retreat`, `together-retreat` and insert:

```ts
  {
    id: 'focused-workation',
    type: ExperienceType.FOCUSED_WORKATION,
    image: IMAGES.accommodation.cosmosView,
    internalUrl: Route.FOCUSED_WORKATION,
  },
```

(`cosmosView` = living-room-with-view shot — closest existing asset to "work with a view"; import `Route` from `@/types`.)

- [ ] **Step 4: Typecheck + commit** — `pnpm lint && npx tsc --noEmit` (experiences page will NOT fail yet — `getOfferContent` switch has no default; verify it still compiles; if the switch is exhaustive-checked, add the new case as a temporary passthrough is NOT allowed — instead do Task 4 before committing if compile fails; otherwise):

```bash
git add -A && git commit -m "feat(experiences): add focused workation offer type, route, and card data"
```

---

### Task 3: i18n types + all three dictionaries

**Files:**
- Modify: `src/i18n/types.ts`, `src/i18n/dictionaries/en.ts`, `src/i18n/dictionaries/nl.ts`, `src/i18n/dictionaries/de.ts`

**Interfaces:**
- Produces (consumed by Tasks 4–5): `ExperiencesTranslations.directBooking { ctaLabel; benefitLine; responseNote; alsoBookableVia }`; `cabins` record values gain `bookingMessage: string`; `ExperiencesTranslations.focusedWorkation { badge; title; description; features; ctaLabel }`; top-level `Dictionary.focusedWorkation: FocusedWorkationTranslations`.

- [ ] **Step 1: types.ts** — extend `ExperiencesTranslations`:

```ts
  directBooking: {
    ctaLabel: string
    benefitLine: string
    responseNote: string
    alsoBookableVia: string
  }
  cabins: Record<AccommodationCabin, {
    title: string
    description: string
    features: readonly string[]
    bookingMessage: string
  }>
  focusedWorkation: {
    badge: string
    title: string
    description: string
    features: readonly string[]
    ctaLabel: string
  }
```

New interface (place near `ShantiDevaRetreatTranslations`):

```ts
export interface FocusedWorkationTranslations {
  metaTitle: string
  metaDescription: string
  backToExperiences: string
  bookingMessage: string
  hero: {
    kicker: string
    title: string
    subtitle: string
    bookNow: string
  }
  whoItsFor: {
    title: string
    intro: string
    items: readonly string[]
  }
  included: {
    title: string
    intro: string
    items: readonly string[]
  }
  cabins: {
    title: string
    cosmos: { title: string; description: string }
    horizon: { title: string; description: string }
  }
  howItWorks: {
    title: string
    steps: readonly string[]
  }
  practical: {
    title: string
    items: readonly string[]
  }
  cta: {
    title: string
    subtitle: string
    bookNow: string
    alternativeText: string
    alternativeCta: string
  }
}
```

Add `focusedWorkation: FocusedWorkationTranslations` to `Dictionary` (next to `shantiDevaRetreat`).

- [ ] **Step 2: en.ts copy** — inside `experiences`:

```ts
    directBooking: {
      ctaLabel: 'Book your stay with us',
      benefitLine: 'Book direct for the best rate — no platform fees',
      responseNote: 'We typically reply within a few hours',
      alsoBookableVia: 'Also bookable via',
    },
```

Add to `cabins.cosmos`: `bookingMessage: 'Hi! I would like to book a stay in the Cosmos cabin at The Makers Barn.'`
Add to `cabins.horizon`: `bookingMessage: 'Hi! I would like to book a stay in the Horizon loft at The Makers Barn.'`

```ts
    focusedWorkation: {
      badge: 'New',
      title: 'Focused Workation',
      description: 'Bring your laptop to the farm. Deep work on fibre Wi-Fi during the day, and a sauna, swimming pond and quiet evenings when it closes.',
      features: [
        'Fibre Wi-Fi across the whole farm',
        'Quiet work spots with countryside views',
        'Sauna, hot tub & swimming pond',
        'Free bikes to explore the area',
      ],
      ctaLabel: 'Discover the Focused Workation',
    },
```

Top-level `focusedWorkation` (after `shantiDevaRetreat`):

```ts
  focusedWorkation: {
    metaTitle: 'Focused Workation',
    metaDescription: 'Work remotely from a farm in Overijssel. Fibre Wi-Fi across the whole farm, quiet cabins, sauna and swimming pond — book your focused workation directly with us.',
    backToExperiences: 'Back to Experiences',
    bookingMessage: 'Hi! I would like to book a Focused Workation at The Makers Barn.',
    hero: {
      kicker: 'Focused Workation',
      title: 'Deep work, slow surroundings',
      subtitle: 'Swap the home office for the countryside. Work with full focus during the day — fibre Wi-Fi reaches every corner of the farm — and let the evenings be slow: the sauna, the swimming pond, a walk between more than a thousand trees.',
      bookNow: 'Book your workation',
    },
    whoItsFor: {
      title: 'Made for makers',
      intro: 'The best work needs quiet. If your calendar allows you to work from anywhere, this is somewhere worth working from.',
      items: [
        'Remote workers who want a week of real focus',
        'Founders and independents writing, planning or building',
        'Writers, designers and creatives finishing a project',
        'Duos or small teams who think better outside the office',
      ],
    },
    included: {
      title: 'Everything a working stay needs',
      intro: 'No coworking hum, no meeting rooms — just honest places to work and honest ways to stop working.',
      items: [
        'Fibre Wi-Fi across the whole farm',
        'In Cosmos: a writing desk by the window',
        'In Horizon: a long table with plenty of outlets',
        'Sauna and hot tub to close the day',
        'Natural swimming pond and walking trails',
        'Free bikes for a lunch-break ride',
      ],
    },
    cabins: {
      title: 'Two places to stay',
      cosmos: {
        title: 'Cosmos Cabin',
        description: 'A wooden cabin for one or two, with a wood stove, a private terrace and a writing desk facing some of the best views the Netherlands has to offer.',
      },
      horizon: {
        title: 'Horizon Loft',
        description: 'A newly built loft with premium finishes, an open kitchen and a long table that comfortably seats a small team — plus countryside views from every window.',
      },
    },
    howItWorks: {
      title: 'How booking works',
      steps: [
        'Message us on WhatsApp',
        'We confirm dates and rate together',
        'You pack your laptop — you are booked',
      ],
    },
    practical: {
      title: 'Practical details',
      items: [
        'Located in Wijhe, Overijssel — between Zwolle and Deventer',
        'Wijhe train station is ten minutes away by bike',
        'Groceries and restaurants in the village nearby',
        'Hanseatic towns and the IJssel river within cycling distance',
      ],
    },
    cta: {
      title: 'Ready for a week of real focus?',
      subtitle: 'Send us a message and we will set up your workation together.',
      bookNow: 'Book via WhatsApp',
      alternativeText: 'Prefer email?',
      alternativeCta: 'Use the contact form',
    },
  },
```

- [ ] **Step 3: nl.ts and de.ts** — add the same keys with proper, natural NL and DE translations of the EN copy above (brand voice: warm, second person, slow-living — mirror the register of the existing `experiences`/`shantiDevaRetreat` sections in each file). These are real translations, not machine-literal ones: e.g. NL `directBooking.ctaLabel: 'Boek je verblijf bij ons'`, DE `'Buche deinen Aufenthalt bei uns'`; NL benefit line `'Boek direct voor de beste prijs — zonder platformkosten'`, DE `'Direkt buchen zum besten Preis — ohne Plattformgebühren'`. Translate every key added in Step 2.

- [ ] **Step 4: Typecheck all three dictionaries compile** — `npx tsc --noEmit` → no errors.

- [ ] **Step 5: Commit**

```bash
git add src/i18n && git commit -m "feat(i18n): add direct booking and focused workation copy in en, nl, de"
```

---

### Task 4: Experiences page — CTA hierarchy + workation card

**Files:**
- Modify: `src/app/[locale]/experiences/page.tsx`, `src/app/experiences/page.module.css`

**Interfaces:**
- Consumes: `getWhatsAppUrl`, `WhatsAppCtaLink`, `WhatsAppCtaLocation` (Task 1); `ExperienceType.FOCUSED_WORKATION`, `FocusedWorkationOffer` (Task 2); dictionary keys (Task 3).

- [ ] **Step 1: Extend `OfferContent`** in `page.tsx`:

```ts
type OfferContent =
  | { kind: 'cta'; title: string; description: string; features: readonly string[]; ctaLabel: string }
  | {
      kind: 'booking'
      title: string
      description: string
      features: readonly string[]
      platforms: Translations['experiences']['bookingPlatforms']
      directBooking: Translations['experiences']['directBooking']
      bookingMessage: string
    }
  | { kind: 'workation'; badge: string; title: string; description: string; features: readonly string[]; ctaLabel: string }
```

`getOfferContent` switch gains:

```ts
    case ExperienceType.FOCUSED_WORKATION:
      return {
        kind: 'workation',
        badge: t.experiences.focusedWorkation.badge,
        title: t.experiences.focusedWorkation.title,
        description: t.experiences.focusedWorkation.description,
        features: t.experiences.focusedWorkation.features,
        ctaLabel: t.experiences.focusedWorkation.ctaLabel,
      }
```

and the `ACCOMMODATION` case adds `directBooking: t.experiences.directBooking, bookingMessage: cabinCopy.bookingMessage`.

- [ ] **Step 2: Render branches in `OfferCard`** (respect the double-guard narrowing pattern; add a `WhatsAppIcon` SVG component alongside the existing icons; map cabins to analytics locations):

```ts
const CABIN_CTA_LOCATION: Record<AccommodationCabin, WhatsAppCtaLocation> = {
  [AccommodationCabin.COSMOS]: WhatsAppCtaLocation.CABIN_COSMOS,
  [AccommodationCabin.HORIZON]: WhatsAppCtaLocation.CABIN_HORIZON,
}
```

Booking branch (replaces the current platform-only block):

```tsx
{content.kind === 'booking' && offer.type === ExperienceType.ACCOMMODATION && (
  <div className={styles.bookingActions}>
    <WhatsAppCtaLink
      href={getWhatsAppUrl(content.bookingMessage)}
      location={CABIN_CTA_LOCATION[offer.cabin]}
      className={styles.directBookingCta}
    >
      <WhatsAppIcon />
      {content.directBooking.ctaLabel}
    </WhatsAppCtaLink>
    <p className={styles.directBookingBenefit}>{content.directBooking.benefitLine}</p>
    <p className={styles.directBookingNote}>{content.directBooking.responseNote}</p>
    <div className={styles.platformLinks}>
      <span className={styles.platformLabel}>{content.directBooking.alsoBookableVia}</span>
      {offer.bookingLinks.map((link) => (
        <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.platformLink}>
          {link.platform === BookingPlatform.AIRBNB ? content.platforms.airbnb : content.platforms.natuurhuisje}
          <ExternalLinkIcon />
        </a>
      ))}
    </div>
  </div>
)}
```

Workation branch (single CTA — internal link, no WhatsApp on the card):

```tsx
{content.kind === 'workation' && offer.type === ExperienceType.FOCUSED_WORKATION && (
  <Link href={getLocalizedPath(offer.internalUrl as Route, validLocale)} className={styles.offerCta}>
    {content.ctaLabel}
    <ArrowIcon className={styles.offerCtaIcon} />
  </Link>
)}
```

Badge in the image wrapper when `content.kind === 'workation'`:

```tsx
<span className={styles.offerBadge}>{content.badge}</span>
```

Note: `OfferCard` now needs `validLocale` — add it to `OfferCardProps` and pass from the page map.

- [ ] **Step 3: CSS** — in `page.module.css`: delete `.bookingLinkAirbnb`/`.bookingLinkNatuurhuisje` (+hover) and `.bookingLink`/`.bookingLinks`; add:

```css
.bookingActions {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: auto;
}

.directBookingCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-decoration: none;
  color: var(--color-text-inverse);
  background: var(--color-primary);
  transition: all 0.3s ease;
}

.directBookingCta:hover {
  background: #1e3a2c;
  transform: translateY(-1px);
}

.directBookingBenefit {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  text-align: center;
  margin: 0;
}

.directBookingNote {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-align: center;
  margin: 0;
}

.platformLinks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.platformLabel {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.platformLink {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.platformLink:hover {
  color: var(--color-primary);
}

.offerBadge {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: var(--color-secondary);
  color: var(--color-text-inverse);
  font-size: var(--font-size-xs);
  font-weight: 600;
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
}
```

- [ ] **Step 4: Verify** — `pnpm lint && npx tsc --noEmit && pnpm test` → green.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat(experiences): direct whatsapp booking primary cta and focused workation card"`

---

### Task 5: Dedicated page `/experiences/focused-workation`

**Files:**
- Create: `src/app/[locale]/experiences/focused-workation/page.tsx`, `.../page.module.css`

**Interfaces:**
- Consumes: `t.focusedWorkation.*` (Task 3), `getWhatsAppUrl`, `WhatsAppCtaLink`, `WhatsAppCtaLocation` (Task 1), `Route.FOCUSED_WORKATION` (Task 2), `generatePageMetadata`, `generatePageBreadcrumbs`, `generateLocalBusinessSchema`, `getLocalizedPath`, `getValidLocale`, `getServerTranslations`, `IMAGES`.

- [ ] **Step 1: page.tsx** — follow the Shanti Deva page skeleton: `generateMetadata` from `t.focusedWorkation.metaTitle/metaDescription` with `path: Route.FOCUSED_WORKATION`; `StructuredData` with `generateLocalBusinessSchema({ type: 'LodgingBusiness', image: ... })` + `generatePageBreadcrumbs`; back-link to experiences; then sections in this order, all copy from `t.focusedWorkation`:
  1. Hero: kicker, `<h1>` title, subtitle, `WhatsAppCtaLink` (location `WORKATION_HERO`, href `getWhatsAppUrl(t.focusedWorkation.bookingMessage)`) with WhatsApp glyph + `hero.bookNow`.
  2. Who it's for: title, intro, `items` as a checklist (reuse check-icon pattern from experiences page).
  3. What's included: title, intro, `items` checklist.
  4. Cabins: two cards with `IMAGES.accommodation.cosmosView` / `IMAGES.accommodation.horizonExterior`, titles + descriptions.
  5. How it works: `steps` rendered as a numbered 3-step strip.
  6. Practical: `items` list.
  7. Footer CTA: title, subtitle, `WhatsAppCtaLink` (location `WORKATION_FOOTER`) + adjacent `alternativeText` with `Link` to `getLocalizedPath(Route.CONTACT, validLocale)` labeled `alternativeCta`.

- [ ] **Step 2: page.module.css** — self-contained module in the site's visual language (Playfair headings via `var(--font-playfair)`, fluid sizes, `--color-primary` CTAs mirroring `.directBookingCta` from Task 4, responsive single-column under 640px).

- [ ] **Step 3: Verify** — `pnpm lint && npx tsc --noEmit && pnpm build` → build succeeds, page compiles for en/nl/de.

- [ ] **Step 4: Commit** — `git add -A && git commit -m "feat(experiences): add focused workation landing page"`

---

### Task 6: Routing integration — sitemap + middleware + Shanti Deva retrofit

**Files:**
- Modify: `src/app/sitemap.ts`, `src/middleware.ts`, `src/app/[locale]/experiences/shanti-deva-retreat/page.tsx`

- [ ] **Step 1: sitemap** — add to `PAGE_ROUTES` (after `Route.FACILITIES` line, order cosmetic):

```ts
  { path: Route.EXPERIENCES, changeFrequency: 'weekly', priority: 0.9 },
  { path: Route.SHANTI_DEVA_RETREAT, changeFrequency: 'monthly', priority: 0.7 },
  { path: Route.FOCUSED_WORKATION, changeFrequency: 'monthly', priority: 0.8 },
```

- [ ] **Step 2: middleware** — add to `knownRoutes` (file already imports `Route`):

```ts
    Route.EXPERIENCES,
    Route.SHANTI_DEVA_RETREAT,
    Route.FOCUSED_WORKATION,
```

(keep list style consistent — if it's all string literals, use the enum members anyway; they are assignable to string.)

- [ ] **Step 3: Shanti Deva retrofit** — replace the inline `wa.me` construction at `page.tsx:488` with the helper. The current code builds from `retreat.contact.whatsapp` (a display phone string), not a message — so use:

```tsx
href={getWhatsAppUrl('')}
```

is WRONG (empty message). Correct retrofit: keep the number-based link semantics but route through the shared base only if the number equals `CONTACT_PHONE_NUMBER`; check `src/data` for `retreat.contact.whatsapp` — if it is the same number as `CONTACT_PHONE_NUMBER`, replace the anchor href with `CONTACT_URLS.WHATSAPP`; if it is a different number, leave the line untouched and note it in the commit message. Do not force the helper where the semantics differ.

- [ ] **Step 4: Verify + commit**

```bash
pnpm lint && pnpm test && pnpm build
git add -A && git commit -m "feat(routing): register experiences pages in sitemap and bare-path redirects"
```

---

### Task 7: Full validation

- [ ] **Step 1:** `pnpm lint && pnpm test && pnpm build` — all green.
- [ ] **Step 2:** `pnpm dev` + browser: `/en/experiences`, `/nl/experiences`, `/de/experiences` — card order (Cosmos, Horizon, Workation, Solo, Together), primary green WhatsApp button with benefit line, muted platform links, workation badge + single CTA; 5-card grid doesn't break.
- [ ] **Step 3:** `/en|nl|de/experiences/focused-workation` — all sections render, hero + footer WhatsApp links contain the locale's encoded prefill, contact-form fallback link works.
- [ ] **Step 4:** bare `http://localhost:3000/experiences/focused-workation` redirects to a localized path.
- [ ] **Step 5:** Fix anything found; commit fixes.

## Self-Review Notes

- Spec §1–§6 all covered (Task 1 = spec §1; Task 2 = §3; Task 3 = §5; Task 4 = §2; Task 5 = §4; Task 6 = §6; Task 7 = testing).
- Type names consistent across tasks (`WhatsAppCtaLocation`, `FocusedWorkationOffer`, `directBooking`, `bookingMessage`).
- Price anchor deliberately absent (spec non-goal — owner input needed).
