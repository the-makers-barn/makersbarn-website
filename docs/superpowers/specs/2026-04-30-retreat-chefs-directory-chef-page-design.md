# Retreat Chefs Directory — Chef Detail Page — Design Spec

**Status:** Draft (awaiting user review) — ready for implementation planning once approved
**Date:** 2026-04-30
**Owner:** Benny Vaksendiser
**Route:** `/[locale]/chefs/[slug]`
**Scope:** Single chef detail page only. Listing/index page deferred to a future spec.

---

## 1. Goal & Strategic Context

Add a new content surface to the MakersBarn site: a **directory of retreat chefs in the Netherlands**. The first deliverable is the **chef detail page** template — a rich, indexable, schema.org-structured profile per chef. The page serves three goals:

1. **SEO**: long-tail organic capture for queries like "retreat chef Netherlands", "vegan retreat chef Overijssel", "{chef name} catering" — a meaningful expansion of MakersBarn's keyword surface beyond the venue itself.
2. **Industry value**: position MakersBarn as a connector in the Dutch retreat ecosystem, not just one more venue. Chefs in the directory may cook at MakersBarn or at any other venue (a hybrid posture — see §2 #1).
3. **Lead capture**: a structured "Send {chef} an inquiry" form on each page, routed through MakersBarn's existing Postmark + Slack pipeline. The chef receives the inquiry; MakersBarn is CC'd for visibility.

Chef onboarding is a manual cold-outreach process: build the page locally with researched data, screenshot the preview-deployment URL, send to the chef for review, refine based on their feedback, then flip the chef from `DRAFT` to `PUBLISHED` and merge. The page architecture supports this workflow via a draft/published gate that hides drafts in production but surfaces them on Vercel preview deployments.

### Success criteria

- Each published chef gets a unique, indexable URL per locale (EN, NL, DE) with valid `Person` + `Offer` JSON-LD structured data.
- Drafts are reachable on Vercel preview URLs with a visible `DRAFT` badge but never reachable in production and never appear in `sitemap.ts`.
- Inquiry form submits via the existing Postmark + Slack infrastructure with shared rate limiting, structured validation, and a clear consent step.
- Each chef's data lives in a single TypeScript file under `src/data/chefs/` matching the established `silos/` pattern, allowing per-chef PRs and clean `git blame`.
- Chrome (labels, form, errors) is fully translated EN/NL/DE; chef-specific content (bio, dishes) is `LocalizedWithFallback<T>` with EN required and NL/DE optional, falling back to EN at render.

---

## 2. Locked Decisions

| #  | Decision |
|----|----------|
| 1  | **Hybrid relationship**: chefs are independent and travel to any venue (including MakersBarn). Page copy reads neutrally; soft cross-link to `/host-a-retreat` only where contextually honest. |
| 2  | **Inquiry routing**: structured 7-field form → MakersBarn server action → Postmark to chef + CC `POSTMARK_ADMIN_EMAIL` + Slack notification. No mailto links. |
| 3  | **Detail-page only in v1**. Listing page deferred. Back link ("← Discover more chefs") renders as a non-link visual element for now. |
| 4  | **~10–20 chefs at launch** via cold outreach. All shipped initially as `DRAFT`; flipped to `PUBLISHED` after each chef approves. |
| 5  | **Draft/published gate**: in `VERCEL_ENV === 'production'`, only `PUBLISHED` chefs render; others `notFound()`. In dev and Vercel preview deployments (`VERCEL_ENV !== 'production'`), all chefs render with a visible `DraftBadge`. |
| 6  | **i18n**: `LocalizedWithFallback<T>` type requires EN, allows optional NL/DE. Runtime helper `localize(field, lang)` falls back to EN when a translation is missing. Chrome strings (labels, form, errors) are fully translated EN/NL/DE in `src/i18n/dictionaries/`. |
| 7  | **URL pattern**: `/{locale}/chefs/{slug}`. Slug = kebab-case of chef name. |
| 8  | **"Save to shortlist" omitted in v1**. Will be reconsidered if/when a listing or comparison page is built. |
| 9  | **Past Retreats outbound links**: links render as `<a target="_blank" rel="noopener nofollow">` to honor the neutral-directory stance. |
| 10 | **Inquiry form fields**: name, email, retreat dates (free text), group size (number), location/venue, dietary needs (textarea, optional), message — plus honeypot and explicit consent checkbox. |
| 11 | **Static generation** with `generateStaticParams` + `dynamicParams = false`. Pages are pre-rendered at build time. |
| 12 | **Robots gating**: `noindex, nofollow` metadata on every chef page when `VERCEL_ENV !== 'production'` — defense in depth so a leaked preview URL never indexes. |
| 13 | **Per-chef data files** under `src/data/chefs/{slug}.ts` with a barrel registry exporting `CHEFS_BY_SLUG`, `PUBLISHED_CHEFS`, `getChefsForEnv()`. |
| 14 | **Server-first composition**: only `ChefGallery` and `ChefInquiryForm` are client components. Everything else is server-rendered. |
| 15 | **schema.org JSON-LD**: `Person` + nested `Offer` with `areaServed` (per-region). Not `LocalBusiness` — chefs are individuals, not businesses with storefronts. |
| 16 | **Sticky mobile CTA**: on screens < 1024px, a sticky bottom bar with "Send {chef} an inquiry" appears once the user scrolls past the header. |
| 17 | **Canonical + hreflang**: each chef page is canonical to its own locale URL with `hreflang` alternates for the other two locales plus `x-default` → EN. |
| 18 | **Rate limiting**: shared in-memory token bucket (5 requests / 15 min / IP) reused from `emailCalculatorSummary`. |
| 19 | **Inline HTML for both emails** (chef-facing and visitor confirmation), no Postmark templates — keeps env-var sprawl at zero. |
| 20 | **Tier label placeholder**: `Budget · Standard · Premium`. Marked as TBD in dictionaries; one-line edit per locale to refine post-onboarding-feedback. |

### Deferred to v2 (explicitly out of scope)

- Listing/index page at `/chefs` (separate spec).
- Filtering / sorting by region, dietary, retreat type, price tier.
- Comparison / shortlist UI.
- Chef-side admin (self-serve onboarding, dashboard).
- Per-chef availability calendar.
- Reviews / ratings beyond the testimonials in the data file.
- Per-niche fan-out (e.g., `/yoga-retreat-chefs/`).
- Chef email-preview builder UI.

---

## 3. Data Model

### 3.1 The `Chef` type

Lives in `src/types/chef.ts`. Reuses the existing `Language` enum from `src/types`.

```ts
import { Language } from '@/types'

export type LocalizedWithFallback<T> = { [Language.EN]: T } & Partial<Record<Language.NL | Language.DE, T>>

export type IsoDateString = string & { readonly __brand: 'IsoDateString' }
export const asIsoDateString = (s: string): IsoDateString => s as IsoDateString

export type Chef = {
  // — Identity & gating —
  slug: string                              // 'liesbeth-van-der-velden'
  status: ChefStatus                        // DRAFT | PUBLISHED
  primaryLanguage: Language                 // chef's native language; used for chef-facing email chrome
  inquiryEmail: string                      // where Send-Inquiry routes
  updatedAt: IsoDateString                  // ISO date (use asIsoDateString) — drives sitemap lastModified

  // — Header —
  name: string                              // 'Liesbeth van der Velden'
  avatar: ImageRef                          // circular 240x240+ photo
  tagline: LocalizedWithFallback<string>    // 'Plant-forward, fire-cooked, deeply Dutch'
  homeBase: { city: string; region: NlRegion }
  servesRegions: NlRegion[]                 // for 'Strongest in...' label + small map
  travelsNationwide: boolean                // toggles 'Travels nationwide' vs 'Travels regionally'
  groupSize: { min: number; max: number }
  languagesSpoken: Language[]
  yearsExperience: number

  // — Stat strip —
  rightFor: RetreatType[]
  cuisineStyles: LocalizedWithFallback<string>[]  // free-text, e.g. 'Plant-based', 'Fire / live-fire'
  dietaryCapabilities: DietaryCapability[]
  dayRate: { amountEur: number; unit: DayRateUnit; tier: PriceTier }

  // — Body —
  gallery: { hero: ImageRef; supporting: ImageRef[] }   // hero + 4–8 supporting
  about: { headline: LocalizedWithFallback<string>; paragraphs: LocalizedWithFallback<string>[] }
  signatureDishes: { name: LocalizedWithFallback<string>; note: LocalizedWithFallback<string> }[]
  testimonials: { quote: LocalizedWithFallback<string>; author: string; role: LocalizedWithFallback<string> }[]

  // — Sidebar —
  atAGlance: {
    sourcing: LocalizedWithFallback<string>
    credentials: LocalizedWithFallback<string>
    press?: LocalizedWithFallback<string>
  }
  pastRetreats: { name: string; url?: string }[]
}

export type ImageRef = {
  src: string                               // path relative to /public, e.g. '/images/chefs/liesbeth-van-der-velden/hero.jpg'
  altKey: string                            // key into imageAltText.ts (existing pattern)
}
```

### 3.2 Enums

Live in `src/constants/chef.ts`. Per CLAUDE.md global rules: never hardcoded strings, always enums for multi-value sets.

```ts
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
  BUDGET = 'budget',       // €
  STANDARD = 'standard',   // €€
  PREMIUM = 'premium',     // €€€
}

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
```

### 3.3 Localization runtime helper

```ts
// src/lib/chef/localized.ts
import { Language } from '@/types'
import type { LocalizedWithFallback } from '@/types/chef'

export function localize<T>(field: LocalizedWithFallback<T>, lang: Language): T {
  return field[lang] ?? field[Language.EN]
}
```

Single fallback rule: `lang ?? EN`. Used everywhere chef content renders.

### 3.4 Registry

```ts
// src/data/chefs/index.ts
import { LIESBETH_VAN_DER_VELDEN_CHEF } from './liesbeth-van-der-velden'
import { ChefStatus } from '@/constants/chef'
import type { Chef } from '@/types/chef'

// Naming convention: each chef file exports a single const named <SLUG_UPPER_SNAKE>_CHEF
// (mirrors the existing silos pattern, e.g. YOGA_TEACHERS_SILO).
const ALL_CHEFS: readonly Chef[] = [LIESBETH_VAN_DER_VELDEN_CHEF, /* ... */]

export const CHEFS_BY_SLUG: Readonly<Record<string, Chef>> =
  Object.fromEntries(ALL_CHEFS.map((c) => [c.slug, c]))

export const PUBLISHED_CHEFS: readonly Chef[] =
  ALL_CHEFS.filter((c) => c.status === ChefStatus.PUBLISHED)

export function getChefsForEnv(): readonly Chef[] {
  return process.env.VERCEL_ENV === 'production' ? PUBLISHED_CHEFS : ALL_CHEFS
}

export function getChefBySlug(slug: string): Chef | undefined {
  const chef = CHEFS_BY_SLUG[slug]
  if (!chef) return undefined
  if (process.env.VERCEL_ENV === 'production' && chef.status !== ChefStatus.PUBLISHED) {
    return undefined
  }
  return chef
}
```

`getChefBySlug` is the single source of truth used by both the page route and the server action — defense in depth so a draft URL is unreachable in prod even if someone constructs it manually.

---

## 4. Page Architecture

### 4.1 File layout

```
src/
├── app/[locale]/chefs/[slug]/
│   └── page.tsx                          # Server component
│
├── components/
│   ├── server/ChefDetailPage/
│   │   ├── index.ts                      # Barrel export
│   │   ├── ChefDetailPage.tsx            # Top-level composer
│   │   ├── ChefHeader.tsx                # Avatar, name, tagline, meta line, CTAs
│   │   ├── ChefStatStrip.tsx             # 4-cell band: Right For / Cooks / Accommodates / Day Rate
│   │   ├── ChefAbout.tsx
│   │   ├── ChefSignatureDishes.tsx
│   │   ├── ChefTestimonials.tsx
│   │   ├── ChefSidebar.tsx               # Composes the three sidebar cards
│   │   ├── ChefOperatesIn.tsx            # Travels label + region + small NL map
│   │   ├── ChefAtAGlance.tsx             # Definition list
│   │   ├── ChefPastRetreats.tsx          # Bulleted list with outbound links
│   │   ├── ChefStructuredData.tsx        # JSON-LD <script>
│   │   ├── DraftBadge.tsx                # Renders only when status=DRAFT
│   │   ├── StickyMobileCta.tsx           # < 1024px sticky bottom bar
│   │   └── *.module.css
│   │
│   └── client/
│       ├── ChefGallery/                  # 1 hero + 4–8 thumbs; reuses Lightbox
│       │   ├── index.ts
│       │   ├── ChefGallery.tsx
│       │   └── ChefGallery.module.css
│       └── ChefInquiryForm/              # 7-field form modal, posts to server action
│           ├── index.ts
│           ├── ChefInquiryForm.tsx
│           ├── ChefInquiryModal.tsx
│           └── *.module.css
│
├── actions/chef/
│   └── sendChefInquiry.ts                # Server action
│
├── services/                             # (existing, reused)
│   ├── email.ts                          # Postmark client
│   └── slack.ts                          # Slack webhook
│
├── lib/chef/
│   ├── localized.ts                      # localize<T>() helper
│   └── inquirySchema.ts                  # Validation
│
├── data/chefs/
│   ├── index.ts                          # Registry (CHEFS_BY_SLUG, PUBLISHED_CHEFS, getChefsForEnv, getChefBySlug)
│   ├── liesbeth-van-der-velden.ts
│   └── ...                               # one file per chef
│
├── constants/chef.ts                     # All chef-related enums
├── types/chef.ts                         # Chef, LocalizedWithFallback<T>, IsoDateString, ImageRef
└── i18n/dictionaries/{en,nl,de}.ts       # Add `chef` namespace
```

### 4.2 Route handler (`app/[locale]/chefs/[slug]/page.tsx`)

Responsibilities:

1. `generateStaticParams()` returns `{ slug }` for every chef from `getChefsForEnv()`, multiplied across the three locales.
2. `dynamicParams = false` — unknown slugs 404 immediately, not via fallback rendering.
3. `generateMetadata()` returns title, description, OG/Twitter, canonical, hreflang, and `robots: { index: false, follow: false }` when `VERCEL_ENV !== 'production'`.
4. Page body resolves `chef = getChefBySlug(slug)`; if undefined, calls `notFound()`. Otherwise composes `<ChefDetailPage chef={chef} lang={locale} />`.

### 4.3 Component composition

`ChefDetailPage` is a server composer with no internal state. It renders, in order:

```
<ChefDetailPage>
  <DraftBadge>                      (only if status === DRAFT)
  <ChefHeader>
    avatar · name · tagline · meta line · [Send inquiry] [Save to shortlist (hidden v1)]
  <ChefStatStrip>
    [Right For] [Cooks] [Accommodates] [Day Rate]
  <main + aside grid>
    <main>
      <ChefGallery>                 (client island — hero + 4–8 thumbs, Lightbox-enabled)
      <ChefAbout>
      <ChefSignatureDishes>
      <ChefTestimonials>
    <aside>
      <ChefSidebar>
        <ChefOperatesIn>
        <ChefAtAGlance>
        <ChefPastRetreats>
  <StickyMobileCta>                 (< 1024px only)
  <ChefInquiryModal>                (client island, hidden until CTA clicked)
  <ChefStructuredData>              (JSON-LD <script>)
```

### 4.4 Operates-In map illustration

A single shared `nl-outline.svg` lives at `public/images/chefs/_assets/nl-outline.svg`. A constant `NL_REGION_COORDINATES: Record<NlRegion, { x: number; y: number }>` in `src/constants/chef.ts` maps each region to viewBox coordinates. `ChefOperatesIn` overlays a positioned dot for `homeBase.region` via absolute CSS. Same SVG, no per-chef assets, easy to maintain.

### 4.5 Image strategy

- **Avatar**: `public/images/chefs/{slug}/avatar.{ext}` — 240×240 minimum, circular crop applied via CSS.
- **Gallery hero**: `public/images/chefs/{slug}/hero.{ext}` — 1600×1200 minimum, served at responsive sizes via `next/image`.
- **Gallery supporting**: `public/images/chefs/{slug}/gallery-{n}.{ext}` — 800×800 minimum, square-cropped via CSS.
- **Alt text** registered in `src/data/imageAltText.ts` (existing i18n pattern), keyed by `ImageRef.altKey`.
- **`next/image` `sizes` attribute** explicitly set per breakpoint to avoid serving oversized images on mobile.

### 4.6 Reused infrastructure

- `Lightbox` (existing `client/Lightbox`) — opened by `ChefGallery` on tap.
- `getServerTranslations` (existing i18n helper) — used by every server component for chrome.
- `cn` utility (existing `lib/cn`) — class-name composition.
- Typography CSS variables from `src/constants/typography.ts` and `globals.css` — never hardcoded font sizes/colors.
- `Route` enum (existing `src/types`) — extended with `Route.CHEF_DETAIL` and a `getChefDetailPath(slug, locale)` helper.

---

## 5. Inquiry Server Action & Form

### 5.1 Form fields

| Field | Type | Validation | Notes |
|---|---|---|---|
| Name | text | required, 2–80 chars | |
| Email | email | required, RFC validated | |
| Retreat dates | text | required, 2–80 chars | Free text — "weekend of Sep 12" or "5–9 May 2026" |
| Group size | number | required, 2–60 | Numeric input |
| Location / venue | text | required, 2–120 chars | "MakersBarn, Overijssel" or "TBD — somewhere near Utrecht" |
| Dietary needs / preferences | textarea | optional, 0–500 chars | "3 vegan, 1 gluten-free" |
| Message | textarea | required, 20–1500 chars | Minimum 20 to discourage drive-by spam |
| Honeypot (`website`) | hidden | must be empty | Spam trap |
| Consent | checkbox | must be `true` | "I consent to MakersBarn forwarding this inquiry to {chef name}." |

### 5.2 Server action signature

```ts
// src/actions/chef/sendChefInquiry.ts
'use server'

export async function sendChefInquiry(
  chefSlug: string,
  formData: FormData
): Promise<ChefInquiryResult>

export type ChefInquiryResult =
  | { ok: true }
  | { ok: false; error: ChefInquiryError; fieldErrors?: Record<string, string> }

export enum ChefInquiryError {
  RATE_LIMITED = 'rate_limited',
  VALIDATION = 'validation',
  CHEF_NOT_FOUND = 'chef_not_found',
  EMAIL_FAILED = 'email_failed',
  UNKNOWN = 'unknown',
}
```

Discriminated union — never throws across the action boundary.

### 5.3 Server action flow

1. **Rate limit by IP**: shared in-memory token bucket, 5 requests / 15 min / IP. Module exported from existing `lib/security` (or `lib/rate-limit` — wherever `emailCalculatorSummary` currently consumes it). Both actions share state.
2. **Resolve chef**: `getChefBySlug(chefSlug)`. Returns `CHEF_NOT_FOUND` if absent or if draft-in-prod.
3. **Validate input**: `parseChefInquiryInput(formData)` from `lib/chef/inquirySchema.ts`. Returns either parsed data or a `fieldErrors` map. Honeypot non-empty → return `{ ok: true }` (silent success — don't tell the bot).
4. **Send to chef** via Postmark. From: `POSTMARK_SENDER_EMAIL`. To: `chef.inquiryEmail`. CC: `POSTMARK_ADMIN_EMAIL`. Subject + body in `chef.primaryLanguage`. Visitor's message body included verbatim — never translated.
5. **Slack notification** to `SLACK_WEBHOOK_USER_CONTACTS`: `New chef inquiry · {chef name} · {visitor name} · {group size} guests · {dates}`. Suppressed if `SUPPRESS_SLACK_MESSAGES === 'true'`.
6. **Visitor confirmation email** via Postmark to the visitor's email. Chrome in `visitor.locale`.
7. **Return** `{ ok: true }`.

If any external call fails: log via existing `lib/logger`, return `EMAIL_FAILED`. Slack still gets a "send failed" notification so you find out without polling logs.

### 5.4 Client form (`ChefInquiryForm`)

- Triggered by the header CTA and the sticky mobile CTA. Renders inside a `ChefInquiryModal` overlay.
- Uses `useActionState` (Next 15) for form state and `useFormStatus` for the submit button's disabled-while-pending state.
- Inline field errors rendered from `result.fieldErrors`. Server errors (rate limit, network) shown as a single banner above the form.
- Success state replaces the form with a confirmation panel. No redirect.
- Modal closes via Esc, X-button, or click-outside. Focus is trapped while open. First field auto-focused on open.
- All copy from `chef.inquiry.*` dictionary keys (see §6).

### 5.5 Email templates

**Chef-facing email** (inline HTML, no Postmark template):

```
Subject: New retreat inquiry from {visitorName} via MakersBarn

Hoi {chefFirstName},

You have a new retreat inquiry via your MakersBarn directory page.

Name:        {visitorName}
Email:       {visitorEmail}
Group size:  {groupSize}
Dates:       {dates}
Location:    {location}
Dietary:     {dietary or '—'}

Message:
{message}

—
This inquiry came via https://makersbarn.nl/{locale}/chefs/{slug}.
Reply directly to {visitorEmail} to take the conversation off-platform.
A copy was sent to MakersBarn for our records.
```

(Subject and chrome translated to `chef.primaryLanguage`. Message body verbatim.)

**Visitor confirmation email** (also inline HTML, no Postmark template):

```
Subject: Your inquiry to {chefName} is on its way

Hi {visitorName},

Thanks for reaching out via MakersBarn — your inquiry has been forwarded to {chefName}.

{chefName} usually responds within 2–3 days. If you don't hear back, just reply to this
email and we'll follow up on your behalf.

—
The MakersBarn team
```

Subject and body in the visitor's locale.

---

## 6. SEO, Metadata & Structured Data

### 6.1 Per-locale metadata

```
Title (EN): {Chef Name} — Retreat Chef in {Primary Region}, Netherlands
Title (NL): {Chef Name} — Retreatchef in {Region}, Nederland
Title (DE): {Chef Name} — Retreat-Koch in {Region}, Niederlande

Description: {tagline}. Cooks for {min}–{max} guests across {regions}. {languagesSpoken}. {yearsExperience}+ years.
            (truncated to ~155 chars)

OG image:    gallery.hero, served at 1200×630 via next/image
OG type:     profile
Twitter:     summary_large_image
```

### 6.2 Canonical & hreflang

- Canonical: `https://makersbarn.nl/{locale}/chefs/{slug}`
- hreflang alternates: all three locales + `x-default` → EN.
- Matches existing localized-route patterns elsewhere in the codebase.

### 6.3 Robots / indexing matrix

| Environment | Chef status | Behavior |
|---|---|---|
| Production | `PUBLISHED` | Page renders, indexable, in `sitemap.ts` |
| Production | `DRAFT` | `notFound()` — 404 — never reachable |
| Preview / Dev | `PUBLISHED` | Page renders, `noindex, nofollow` (preview ≠ prod) |
| Preview / Dev | `DRAFT` | Page renders with `<DraftBadge>`, `noindex, nofollow` |

### 6.4 Sitemap (`src/app/sitemap.ts`)

Extend the existing sitemap to iterate `PUBLISHED_CHEFS` (not `getChefsForEnv()`) and emit one URL per chef per locale, with `lastModified` from `chef.updatedAt`. The sitemap always emits published-only regardless of environment — preview deployments may render drafts, but the sitemap itself never lists them. No changes outside the sitemap file.

### 6.5 JSON-LD structured data

`<ChefStructuredData chef={chef} />` renders a single `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Liesbeth van der Velden",
  "jobTitle": "Retreat Chef",
  "image": "https://makersbarn.nl/images/chefs/liesbeth-van-der-velden/hero.jpg",
  "description": "Plant-forward, fire-cooked, deeply Dutch.",
  "knowsLanguage": ["nl", "en", "de"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Deventer",
    "addressRegion": "Overijssel",
    "addressCountry": "NL"
  },
  "makesOffer": {
    "@type": "Offer",
    "name": "Retreat catering",
    "priceCurrency": "EUR",
    "price": 65,
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "unitText": "PER_PERSON_PER_DAY"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Overijssel" },
      { "@type": "AdministrativeArea", "name": "Gelderland" }
    ]
  }
}
```

Rationale: chefs are individuals, so `Person` + nested `Offer` is more accurate than `LocalBusiness`. `areaServed` populates from `chef.servesRegions`. Press mentions, if present, fold into the `description` field rather than emitting a second JSON-LD block.

---

## 7. i18n & Formatting

### 7.1 `LocalizedWithFallback<T>` semantics

- Type requires EN, allows optional NL/DE.
- Runtime `localize(field, lang)` returns `field[lang] ?? field[Language.EN]`.
- TypeScript catches missing EN at the chef's data file. Missing NL/DE = runtime fallback to EN, no error.

### 7.2 Chrome dictionary keys

Added to `src/i18n/dictionaries/{en,nl,de}.ts` under a new `chef` namespace. Approximately 60 keys × 3 languages = ~180 strings. Key listing:

```
chef.backLink, chef.draftBadge
chef.cta.sendInquiry

chef.statStrip.rightFor / cooks / accommodates / dayRate / dayRateUnit
chef.statStrip.tierLabel.{budget|standard|premium}

chef.headerMeta.guests, chef.headerMeta.yearsCooking

chef.about, chef.signatureDishes, chef.signatureDishes.itemPrefix, chef.testimonials

chef.sidebar.operatesIn, chef.sidebar.travelsNationwide, chef.sidebar.travelsRegional
chef.sidebar.strongestIn, chef.sidebar.homeBase
chef.sidebar.atAGlance.{groupSize|languages|experience|sourcing|credentials|press}
chef.sidebar.pastRetreats

chef.enums.retreatType.{...}, chef.enums.dietary.{...}, chef.enums.region.{...}

chef.inquiry.modalTitle
chef.inquiry.field.{name|email|dates|groupSize|location|dietary|message}
chef.inquiry.consent
chef.inquiry.submit, chef.inquiry.submitting
chef.inquiry.success.{title|body}
chef.inquiry.errors.{rate_limited|validation|chef_not_found|email_failed|unknown}
```

### 7.3 Locale-aware formatting

| What | API | Example |
|---|---|---|
| Currency | `Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' })` | `€65` (en) / `€ 65,00` (nl) |
| Group size range | Template `{min}–{max}` with `Intl.NumberFormat` for each | `8–24` |
| List concatenation (languages, regions) | `Intl.ListFormat(locale, { style: 'long', type: 'conjunction' })` | `Dutch, English, and German` (en) / `Nederlands, Engels en Duits` (nl) / `Niederländisch, Englisch und Deutsch` (de) |
| Years experience | Template + `Intl.NumberFormat` | `12 years cooking` |

### 7.4 Email language rules

- **Chef-facing email**: chrome (subject, greeting, footer) in `chef.primaryLanguage`. Visitor's message body verbatim.
- **Visitor confirmation email**: chrome in `visitor.locale`.
- **Slack notification**: English (operator audience).

### 7.5 Tier labels

Placeholder strings in dictionaries:

| Tier | EN | NL | DE |
|---|---|---|---|
| BUDGET | Budget | Budget | Budget |
| STANDARD | Standard | Standaard | Standard |
| PREMIUM | Premium | Premium | Premium |

**Marked TBD** — refine post-onboarding-feedback (one-line change per locale, no code).

---

## 8. Mobile / Responsive Layout

### 8.1 Breakpoint behavior

- **Desktop ≥ 1024px**: 2-column grid — main content (gallery, about, dishes, testimonials) + 320–360px right sidebar (operates in, at a glance, past retreats).
- **Tablet 640–1023px**: single column. Sidebar cards move below testimonials. Stat strip becomes 2×2 grid. Header layout unchanged.
- **Mobile < 640px**:
  - Header: avatar above name (stacked), tagline below name, meta line wraps. Both header CTAs full-width, stacked.
  - Stat strip: 1-column stack.
  - Photo gallery: hero full-width; supporting photos in horizontal swipe-strip.
  - Signature dishes: 1-column stack.
  - Testimonials: 1-column stack.
  - Sidebar cards: 1-column stack at bottom.
  - Inquiry modal: full-screen.

### 8.2 Sticky mobile CTA

On screens < 1024px, once the user scrolls past `<ChefHeader>` (detected via `IntersectionObserver` on the header sentinel), `<StickyMobileCta>` appears at the bottom of the viewport with a single full-width "Send {chef} an inquiry" button. Hidden on desktop.

### 8.3 Image sizing via `next/image`

- Hero gallery: 1200×800 desktop, 800×600 tablet, 640×480 mobile.
- Supporting thumbs: 400×400.
- Avatar: 120×120 desktop, 80×80 mobile.

### 8.4 Lightbox

Reuses existing `Lightbox` client component. Tap any gallery image → opens with the full gallery as a swipeable carousel. Esc / swipe-down / X-button to close.

### 8.5 Accessibility

- Localized alt text on every image (`imageAltText.ts` pattern).
- Stat strip uses `<dl>` semantics — screen readers read "Day Rate: 65 euros per person per day, Premium tier".
- Form: `<label>` per input, `aria-describedby` for errors, `aria-live="polite"` for success.
- Sticky mobile CTA: keyboard-focusable, `aria-label` matches visible text.
- Color contrast: all colors from existing CSS variables (assumed AA-compliant).
- Lightbox: focus trap, Esc to close, alt text from same `ImageRef.altKey`.

---

## 9. Testing Strategy

### 9.1 Unit tests (vitest, colocated)

- `lib/chef/localized.test.ts` — fallback returns NL when present, EN when missing, all three locales.
- `lib/chef/inquirySchema.test.ts` — every field's validation: required, length bounds, email format, group size bounds, honeypot detection, consent enforcement.
- `data/chefs/registry.test.ts` — `getChefsForEnv()` and `getChefBySlug()` behavior under different `process.env.VERCEL_ENV` values; draft-in-prod returns undefined.

### 9.2 Server action tests (`actions/chef/sendChefInquiry.test.ts`)

- **Happy path**: valid input → Postmark called once with chef email + once for visitor confirmation, Slack called once.
- **Rate limit hit**: 6th request from same IP returns `RATE_LIMITED`, **Postmark and Slack not called** (asserted, mirroring calendar test pattern).
- **Draft chef in production**: returns `CHEF_NOT_FOUND`, no email sent.
- **Honeypot triggered**: returns `{ ok: true }` (silent), Postmark and Slack not called.
- **Postmark failure**: returns `EMAIL_FAILED`, Slack still called with failure notification.
- **Validation errors**: returns `fieldErrors` map, no external calls.

### 9.3 Component tests (light)

- `ChefDetailPage.test.tsx` — fixture chef renders all sections; omits `Press` row when undefined; omits `pastRetreats` section when empty; renders `<DraftBadge>` only when status=DRAFT.
- `ChefStructuredData.test.tsx` — output is valid JSON; has `@type: Person`; `makesOffer.areaServed` matches `servesRegions` length and names.

### 9.4 No tests for

- `Lightbox` itself (existing component, tested elsewhere).
- Visual regression — eyeball + browser testing per project conventions.
- E2E with Playwright — not part of project's testing setup.

---

## 10. Risks & Known Limitations

- **Cold-outreach assumes chef email discovery** — out of scope for the website; `chef.inquiryEmail` is type-required, so a chef without an email cannot be added.
- **NL/DE drafts ship as English fallback** — accepted per locked decision #6, but a Dutch SEO landing page reads in English until translations land. Worth a note in the publishing checklist.
- **Outbound `pastRetreats` links leak some traffic** — accepted per locked decision #9. Mitigated by `rel="noopener nofollow"` so no link juice flows out and `window.opener` is not exposed.
- **Thin-content risk** — a chef page with sparse copy reads thin. Mitigated by the manual publishing checklist (§11): no chef goes from DRAFT to PUBLISHED until minimum content is filled.
- **Shared rate limiter is in-memory** — a deploy resets the bucket. Acceptable for v1 traffic levels; revisit if abuse becomes a problem (move to Vercel KV or similar).
- **No CAPTCHA** — relying on honeypot + rate limit + 20-char min message + email validation. Sufficient for current threat model; revisit if spam volume rises.
- **No new env vars required** — both emails are inline HTML, reusing existing `POSTMARKAPP_API_TOKEN`, `POSTMARK_SENDER_EMAIL`, and `POSTMARK_ADMIN_EMAIL`.

---

## 11. Publishing Checklist (Manual Gate)

Tick before flipping a chef from `ChefStatus.DRAFT` to `ChefStatus.PUBLISHED`:

- [ ] Chef has approved the page (email reply on file).
- [ ] Bio (`about.headline` + `about.paragraphs`) provided in EN minimum.
- [ ] At least one signature dish provided.
- [ ] At least one testimonial provided.
- [ ] All 5+ gallery images uploaded to `public/images/chefs/{slug}/`.
- [ ] Avatar photo uploaded (≥ 240×240).
- [ ] `inquiryEmail` is the chef's actual address (not a placeholder).
- [ ] `homeBase` and `servesRegions` accurate.
- [ ] `dayRate.amountEur` and `dayRate.tier` confirmed with chef.
- [ ] Alt-text registered for all images in `imageAltText.ts`.
- [ ] `updatedAt` set to today's date.

This checklist ships as `docs/superpowers/chef-publishing-checklist.md` for re-use during onboarding.

---

## 12. Implementation Sequencing (high-level — full plan in writing-plans phase)

1. **Foundations**: types, enums, `Route.CHEF_DETAIL`, `localize()` helper, dictionary scaffolding (empty values).
2. **Data layer**: `Chef` type, registry, one fully-populated chef file (Liesbeth — used as fixture and template).
3. **Server components**: `ChefDetailPage` and all sub-components, layout-only first, then content.
4. **Client islands**: `ChefGallery` (Lightbox integration) and `ChefInquiryForm` + modal.
5. **Server action**: `sendChefInquiry`, validation, Postmark integration, Slack notification, rate-limit wiring.
6. **Route handler**: `app/[locale]/chefs/[slug]/page.tsx` with `generateStaticParams`, `generateMetadata`, draft gating.
7. **SEO**: `ChefStructuredData`, sitemap extension, robots metadata, hreflang.
8. **Mobile / responsive**: stat-strip stacking, sticky CTA, gallery swipe-strip.
9. **Tests**: unit + server action + component coverage.
10. **Polish**: typography pass against CSS variables, accessibility audit, cross-browser smoke.

The full implementation plan with task breakdown lives in the writing-plans phase output.
