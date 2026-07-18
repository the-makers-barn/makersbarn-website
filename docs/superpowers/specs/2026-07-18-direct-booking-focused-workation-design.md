# Direct Booking First + Focused Workation — Design

**Date:** 2026-07-18
**Status:** Approved (rev 2 — after architecture, UX, and content/i18n/SEO agent reviews)

## Problem

The `/[locale]/experiences` page's only booking CTAs on the accommodation cards are
external Airbnb/Natuurhuisje links, so visitors who arrive intending to book directly
(including traffic sent back from focus-retreat.nl) leak to third-party platforms and
their commissions. There is also no Focused Workation offer on themakersbarn.nl at all,
even though focus-retreat.nl points its "Plan your workation" CTA at our site.

## Goals

1. Make **"Book your stay with us"** (direct contact via WhatsApp) the primary booking
   path on the experiences page; demote Airbnb/Natuurhuisje to secondary links.
2. Add a **Focused Workation** offer: a card on the experiences page plus a dedicated
   page at `/experiences/focused-workation`, with a "Book now" CTA that opens WhatsApp
   with a prefilled message.
3. Make the shift measurable: WhatsApp booking CTA clicks are tracked as an analytics
   event.

## Non-Goals

- Building an actual booking engine ("our own booking page" is future work; the direct
  CTA is designed so only its href changes later).
- Removing the Airbnb/Natuurhuisje listings or changing anything on focus-retreat.nl.
- Indicative "from €X / night" prices on cabin cards. UX review flagged this as the
  second-strongest conversion lever, but no rate data exists in the codebase and prices
  must not be invented. **Follow-up: ask the owner for indicative rates**, then add.

## Design

### 1. WhatsApp booking CTA infrastructure

- `src/lib/whatsapp.ts`: `getWhatsAppUrl(message: string): string` returning
  `${CONTACT_URLS.WHATSAPP}?text=${encodeURIComponent(message)}` — builds on the
  existing constant in `src/constants/contact.ts`, does not re-derive the number.
  Exported through the `src/lib/index.ts` barrel; unit test co-located at
  `src/lib/whatsapp.test.ts` (pattern: `validation.test.ts`).
- Retrofit the inline `wa.me` construction on the Shanti Deva page
  (`src/app/[locale]/experiences/shanti-deva-retreat/page.tsx`) to use the helper.
- `src/components/client/WhatsAppCtaLink/`: small `'use client'` anchor component that
  fires a Vercel Analytics `track` event on click (pattern: `ShareLink.tsx`), with a
  new `AnalyticsEvent.WHATSAPP_BOOKING_CLICKED` in `src/constants/analytics.ts` and a
  `location` property (`cabin-cosmos`, `cabin-horizon`, `workation-hero`,
  `workation-footer`). All `wa.me` anchors: `target="_blank" rel="noopener noreferrer"`,
  always show a WhatsApp glyph so desktop users self-select knowingly (desktop wa.me
  goes through an interstitial + WhatsApp Web).
- Prefilled messages are translated copy in the i18n dictionaries (EN/NL/DE); see §5.

### 2. Experiences page — hierarchy inversion + reorder

Files: `src/app/[locale]/experiences/page.tsx`, `src/app/experiences/page.module.css`.

- Accommodation cards (`ExperienceType.ACCOMMODATION`):
  - Primary CTA: prominent button **"Book your stay with us"** (site `--color-primary`
    green with white WhatsApp glyph — not WhatsApp green, which fails contrast on
    white) → WhatsApp URL with the per-cabin prefilled message.
  - Directly under the button, one benefit line: *"Book direct for the best rate — no
    platform fees"* plus a response-expectation note (*"We typically reply within a few
    hours"*). This is the conversion lever that justifies demoting instant-book
    platforms.
  - Airbnb/Natuurhuisje become small **muted text links** (existing brand-colored pill
    styles `bookingLinkAirbnb`/`bookingLinkNatuurhuisje` are removed — the red Airbnb
    pill must not visually outrank the primary button) with an external-link icon,
    under an "Also bookable via" label.
- `OfferContent` union in `page.tsx` gains a third shape and the render logic follows
  the existing double-guard narrowing pattern:
  - `'booking'` additionally carries the per-cabin prefill message + direct-booking
    labels; render branch adds the primary button above the demoted links.
  - New `'workation'` kind carrying `internalUrl` + CTA label; render guard is
    `content.kind === 'workation' && offer.type === ExperienceType.FOCUSED_WORKATION`
    (mirrors the existing `'cta'`/`'booking'` guards — TS cannot narrow `offer` from
    `content.kind` alone).
- Reorder `EXPERIENCE_OFFERS` in `src/data/experiences.ts`:
  1. `accommodation-cosmos` (direct booking)
  2. `accommodation-horizon` (direct booking)
  3. `focused-workation` (new)
  4. `solo-retreat`
  5. `together-retreat`
  Five cards in the 4-column grid leaves an orphan on the second row — verify visually
  and adjust grid CSS if it looks broken.

### 3. Type changes

`src/types/experiences.ts`:

- `ExperienceType` gains `FOCUSED_WORKATION = 'focused_workation'`.
- New `FocusedWorkationOffer { id: string; type: ExperienceType.FOCUSED_WORKATION; image: string; internalUrl: string }`,
  added to the `ExperienceOffer` union.
- Card image: an existing asset from `src/data/images.ts` (no dedicated workation
  photo exists — pick the best interior/desk or cabin shot during implementation).

`src/types/navigation.ts`: `Route.FOCUSED_WORKATION = '/experiences/focused-workation'`.
No localized slug variants — verified: `getLocalizedPath` only prefixes the locale;
all routes keep one slug across EN/NL/DE.

### 4. Dedicated page `/experiences/focused-workation`

- New route `src/app/[locale]/experiences/focused-workation/` (`page.tsx` +
  `page.module.css`), following the Shanti Deva page pattern: `generatePageMetadata`
  (auto canonical + hreflang), breadcrumb structured data.
- Structured data: `generatePageBreadcrumbs` **plus** reuse of
  `generateLocalBusinessSchema({ type: 'LodgingBusiness' })` (already models fibre
  Wi-Fi, sauna, pond, capacity, both cabins). **Not** an `Event` schema — the
  workation has no fixed dates, so copying Shanti Deva's Event markup would be
  invalid.
- Sections:
  1. Hero — focus + calm + nature positioning (slow-living brand voice, not
     productivity-hustle; fresh copy, not copied from focus-retreat.nl), with primary
     WhatsApp Book CTA.
  2. Who it's for — remote workers, founders, creatives.
  3. What's included — verified amenity claims only: fibre Wi-Fi across the whole
     farm, sauna, hot tub, natural swimming pond, walking trails, free bikes. Work
     surfaces described concretely (Cosmos: writing desk by the window; Horizon:
     long table with plenty of outlets) — no unbacked plural "workspaces" claim.
  4. The two cabins (Cosmos sleeps 2, Horizon up to larger groups) — lead with the
     cabins, not the 14-bed group figure.
  5. How booking works — 3-step strip: message us on WhatsApp → we confirm dates and
     rate → you're booked.
  6. Practical details — Wijhe location, train + free bikes, nearby Hanseatic towns.
  7. Footer CTA — WhatsApp Book Now (workation prefill) **plus** an adjacent
     non-WhatsApp alternative (link to contact page) as the desktop-friendly fallback.
- Full EN/NL/DE copy; venue name via `SITE_CONFIG.name` (codebase has inconsistent
  apostrophe usage — do not add a third variant).

### 5. i18n additions (gate the build — all three dictionaries must change in lockstep)

`src/i18n/types.ts`:

- `ExperiencesTranslations` gains: `directBooking { ctaLabel; benefitLine; responseNote; alsoBookableVia }`;
  each `cabins` entry gains `bookingMessage` (WhatsApp prefill); new `focusedWorkation`
  card block `{ badge; title; description; features; ctaLabel }` — the card has a
  **single CTA** (link to the dedicated page). UX review: two CTAs on an unexplained
  new offer produce decision friction and low-intent chats; the dedicated page owns
  WhatsApp conversion (hero + footer).
- New top-level `FocusedWorkationTranslations` interface (modeled on
  `ShantiDevaRetreatTranslations`): `metaTitle`, `metaDescription`, hero, whoItsFor,
  included, cabins, howItWorks, practical, `bookingMessage` (workation prefill),
  CTA + fallback labels. Feature lists as `readonly string[]`.
- `Dictionary` gains `focusedWorkation: FocusedWorkationTranslations`.

### 6. Routing integration

- `src/app/sitemap.ts` `PAGE_ROUTES` gains `Route.FOCUSED_WORKATION`
  (`changeFrequency: 'monthly', priority: 0.8`) **and** the pre-existing omissions
  `Route.EXPERIENCES` and `Route.SHANTI_DEVA_RETREAT` — a workation page under a
  non-sitemapped hub is a weak crawl signal.
- `src/middleware.ts` `knownRoutes` gains `Route.FOCUSED_WORKATION` so the bare
  (locale-less) URL redirects instead of 404ing — focus-retreat.nl may link it bare.

## Error handling

Static content; no new runtime failure modes. WhatsApp links are plain anchors; the
analytics wrapper only adds a click handler.

## Testing

- `pnpm lint`, `pnpm test`, `pnpm build` pass.
- Unit tests: `getWhatsAppUrl` (base URL reuse + message encoding).
- Manual browser check of `/en|nl|de/experiences` and
  `/en|nl|de/experiences/focused-workation`: card order, primary/secondary CTA
  hierarchy (Airbnb pill demoted), per-locale prefilled WhatsApp messages, bare-URL
  redirect, 5-card grid layout.
