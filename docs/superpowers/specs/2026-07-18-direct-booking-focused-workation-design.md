# Direct Booking First + Focused Workation — Design

**Date:** 2026-07-18
**Status:** Approved

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

## Non-Goals

- Building an actual booking engine ("our own booking page" is future work; the direct
  CTA is designed so only its href changes later).
- Removing the Airbnb/Natuurhuisje listings or changing anything on focus-retreat.nl.

## Design

### 1. WhatsApp booking CTA infrastructure

- New helper (in `src/lib/`, e.g. `whatsapp.ts`): `getWhatsAppUrl(message: string): string`
  that builds `https://wa.me/<number>?text=<encoded message>` from the existing
  `CONTACT_PHONE_NUMBER` in `src/constants/contact.ts`.
- Prefilled messages are translated copy in the i18n dictionaries (EN/NL/DE):
  - Per cabin: e.g. "Hi! I'd like to book a stay in the Cosmos cabin."
  - Workation: e.g. "Hi! I'd like to book a Focused Workation at The MakersBarn."

### 2. Experiences page — hierarchy inversion + reorder

File: `src/app/[locale]/experiences/page.tsx` (+ `src/app/experiences/page.module.css`).

- Accommodation cards (`ExperienceType.ACCOMMODATION`):
  - Primary CTA: prominent button **"Book your stay with us"** → WhatsApp URL with the
    per-cabin prefilled message.
  - Airbnb/Natuurhuisje become small secondary text links under an
    "Also bookable via…" label, visually subordinate to the primary button.
- Reorder `EXPERIENCE_OFFERS` in `src/data/experiences.ts`:
  1. Cosmos cabin (direct booking)
  2. Horizon cabin (direct booking)
  3. Focused Workation (new)
  4. Solo Retreat
  5. Together Retreat

### 3. Dedicated page `/experiences/focused-workation`

- New route `src/app/[locale]/experiences/focused-workation/` (`page.tsx` +
  `page.module.css`), following the Shanti Deva retreat page pattern:
  `generatePageMetadata`, breadcrumb structured data, new `Route` enum entry,
  localized paths via `getLocalizedPath`.
- Sections:
  1. Hero — productivity + nature + wellbeing positioning (fresh copy, not copied
     from focus-retreat.nl).
  2. Who it's for — remote workers, founders, creatives.
  3. What's included — Wi-Fi, workspaces, sauna, hot tub, natural pond, walking
     trails, free bikes.
  4. The two cabins (Cosmos, Horizon).
  5. Practical details — Wijhe location, capacity, getting there.
  6. Prominent **"Book now" → WhatsApp** CTA (workation prefill), repeated in hero
     and page footer.
- Full EN/NL/DE copy in `src/i18n/dictionaries/`.

### 4. New Focused Workation offer card

- New variant `ExperienceType.FOCUSED_WORKATION` in `src/types/experiences.ts` with an
  `internalUrl` (dedicated page). Card shows:
  - Link to the dedicated page (learn more), and
  - A direct "Book now" WhatsApp CTA so visitors can skip straight to contact.

## Error handling

Static content only; no new runtime failure modes. WhatsApp links are plain anchors.

## Testing

- `pnpm lint` and `pnpm test` (vitest) pass.
- Unit test for the WhatsApp URL helper (number formatting + message encoding).
- Manual check of `/en|nl|de/experiences` and `/en|nl|de/experiences/focused-workation`:
  card order, primary/secondary CTA hierarchy, prefilled WhatsApp messages per locale.
