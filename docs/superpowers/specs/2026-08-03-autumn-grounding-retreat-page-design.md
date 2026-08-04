# Autumn Grounding Retreat Page — Design

**Date:** 2026-08-03
**Status:** Design approved; slice plan (§8) awaiting approval

## Problem

The Instagram ad for **The Autumn Grounding: Ayurvedic Care for Women** (17–18 October
2026) currently points straight at Hipsy. Nana wants the ad to land on themakersbarn.nl
instead — "this way people land on our website, that gives more trust and also more
traffic. but they can still buy with 1 click" — which requires a retreat page on our
site that carries the event content *and* the ticketshop.

No such page exists. `FEATURED_RETREATS` (`src/data/experiences.ts:64`) holds the
retreat as an `externalUrl` to Hipsy, and `RetreatHighlight` on the homepage renders it
as an outbound anchor (`RetreatHighlight.tsx:53`). Verified absent from the repo, from
every local and remote branch, and from the live sitemap.

## Goals

1. A retreat page at `/experiences/autumn-grounding-retreat` in EN/NL/DE carrying the
   full event content, so the ad has a credible destination that we own.
2. Buying stays **one click** from anywhere on the page: the Hipsy ticketshop is
   embedded, in a sticky right rail on desktop and behind a pinned bottom bar on mobile.
3. Sales made through our page are attributable in Hipsy, including which ad creative
   produced them.
4. Homepage entry points stop leaking to Hipsy and point at our own page.

## Non-Goals

- No `/go` short-link slug. That system is hard-wired to `utm_source=qr,
  utm_medium=print` (`src/constants/redirects.ts:78`) for printed QR cards; reworking it
  for paid social is separate work.
- No generalised retreat CMS or shared retreat type across Shanti Deva and this one.
  Two retreats is not enough evidence to design the abstraction.
- No changes to the Shanti Deva page.
- No changes to the Instagram ad itself — Nana sets the destination URL and campaign
  UTMs in Meta Ads Manager.

## Design

### 1. Route and entry points

- `Route.AUTUMN_GROUNDING_RETREAT = '/experiences/autumn-grounding-retreat'` in
  `src/types/navigation.ts`, matching the `shanti-deva-retreat` naming.
- Registered in `src/app/sitemap.ts` (alongside line 45–46) and in the bare-path
  redirect list in `src/middleware.ts:121`.
- `FEATURED_RETREATS` entry `autumn-grounding-2026` swaps `externalUrl` for
  `internalUrl: Route.AUTUMN_GROUNDING_RETREAT`.
- `RetreatHighlight` currently early-returns `null` unless `externalUrl` is set
  (`RetreatHighlight.tsx:19`) and renders an `<a target="_blank">`. It changes to a
  localized `next/link` via `getLocalizedPath`, dropping the `ExternalLinkIcon`.
- `FeaturedRetreats` already handles both `internalUrl` and `externalUrl`; its card for
  this retreat becomes internal with no component change.

**Ad destination:** `https://themakersbarn.nl/nl/experiences/autumn-grounding-retreat`
plus Nana's campaign UTMs.

### 2. Page structure

CSS Grid, content column + rail; collapses to one column below ~1000px.

Content order: hero (title, subtitle, Sat 17 – Sun 18 Oct 2026, Wijhe) → invitation copy
→ weekend schedule (Saturday and Sunday) → what's included → your hosts (Nana, Elaine) →
practical info (women-only, held in English, address, getting there) → venue gallery →
ticketshop anchor (`#tickets`).

The rail is `position: sticky` and holds the live Hipsy widget. On mobile it unstacks:
the widget renders after "what's included", and a pinned bottom bar (`from €295.80` +
Book) anchors to `#tickets`. The bar hides via `IntersectionObserver` once the widget is
on screen, so it cannot cover Hipsy's own checkout button.

### 3. The Hipsy embed

New client component `src/components/client/HipsyTicketShop/`.

- Base URL `https://hipsy.nl/shop/235781-the-autumn-grounding-ayurvedic-care-for-women`.
  Note this is the `/shop/` URL, not the `/event/` URL currently in `experiences.ts`;
  the `/event/` URL stays as the human-facing fallback link.
- Reads incoming params with `useSearchParams()` inside a `<Suspense>` boundary, so only
  this subtree opts out of static rendering.
- Forwards `utm_source`, `utm_campaign`, `utm_content`, `utm_term` from the visitor.
  Pins `utm_medium=iframe` unconditionally, so a sale through our page is always
  identifiable as such while `utm_source=instagram` still says which ad drove it.
  Defaults to `utm_source=themakersbarn` when the visitor arrives without UTMs.
- URL built with `new URL(HIPSY_SHOP_URL)` + `searchParams.set()` over a fixed
  allow-list. The origin is never derived from input, so a crafted query string cannot
  repoint the frame. Values are length-capped; unknown params are dropped.
- Fixed height — cross-origin frames cannot self-size. Starting at ~640px in the rail
  and ~560px on mobile, tuned against the real widget.
- `title`, `loading="lazy"`, and a visible "Trouble loading? Open the ticketshop ↗"
  fallback link beneath the frame for browsers that block third-party frames.
- `AnalyticsEvent.TICKETSHOP_CTA_CLICKED` fires on the sticky bar / rail CTA, with a
  `location` property, following the `WhatsAppCtaLink` pattern.

**No CSP change needed.** Nothing in the repo sets `frame-src`; `X-Frame-Options:
SAMEORIGIN` (`next.config.ts`) governs us being framed, not us framing Hipsy.

**Pre-verified fallback:** if the widget renders unusably at rail width, the layout
falls back to a summary card in the rail plus a full-width embed below the content. This
fallback is pre-approved and is not a mid-run question.

### 4. Data and content model

`src/data/retreats/autumn-grounding.ts`, alongside `shanti-deva.ts`.

It gets **its own type**, not `RetreatData`. `RetreatData` (`src/types/retreats.ts:64`)
assumes a `priceBreakdown` + single `totalPrice` + `paymentTermKeys` +
`cancellationPolicyKeys` and arrival/study/final days. Autumn Grounding has three
*purchasable ticket tiers* and a two-day arc. Bending one shape over both would make
both harder to read. Shared primitives (`ScheduleItem`, `DaySchedule`, `RetreatLocation`)
are reused; `ScheduleDayType` gains `SATURDAY` and `SUNDAY`; `RetreatId` gains
`AUTUMN_GROUNDING`.

Content is transcribed from the Hipsy event — schedule, inclusions, host bios, and the
three tiers (€295.80 weekend, €45.80 1:1 head massage, €60.80 extra Friday night).
Prices are displayed as our own copy *and* live in the widget; if they diverge, the
widget is the source of truth.

### 5. i18n

Full `autumnGrounding` dictionary block in `en.ts`, `nl.ts`, `de.ts` plus
`src/i18n/types.ts`, per CLAUDE.md. The retreat itself runs in English, so the NL and DE
pages state that explicitly in practical info rather than implying a translated retreat.
The Hipsy widget renders in Hipsy's own language regardless of our locale — a known
seam, called out to Nana rather than worked around.

### 6. SEO

`Event` structured data with the three offers, `AUTUMN_GROUNDING_EVENT_ID` in
`src/lib/structuredData.ts`, and breadcrumbs — mirroring the Shanti Deva page
(`page.tsx:587`). OG image set to the existing `/images/autumn-grounding-retreat.png` so
the link previews correctly when shared from the ad or in DMs.

## Open assumption

The venue gallery reuses existing farm photos (`practice-rooms-with-mats.jpg`,
`graden_view_with_hammocks.JPG`, `pond-complete.jpg`), as Shanti Deva does. If Nana has
photos specific to this retreat they would be better. **Vetoable — flagged in the QA
brief with screenshots.**

## Testing

Unit (vitest, co-located): UTM merge logic — forwarding, allow-list rejection, the
pinned `utm_medium`, the organic default, origin immutability against a crafted query
string.

Per-slice gate: `pnpm lint`, `tsc --noEmit`, `pnpm test`, `pnpm build`. Slice 3 adds a
browser pass at 375px and 1440px with screenshots.

## 8. Slice plan

Run's starting `main`: `f223977`. Cap ~1.5k lines/diff. Landed to local `main`,
**never pushed**.

### Slice 1 — Data, types, i18n (~650 lines)

Types (`RetreatId.AUTUMN_GROUNDING`, `ScheduleDayType.SATURDAY|SUNDAY`,
`AutumnGroundingRetreat`), the data module, and the full EN/NL/DE dictionary block +
`i18n/types.ts`.

- **Acceptance:** data and dictionaries typecheck; all three locales structurally
  complete; no route, no component, no page.
- **Dark:** nothing renders it. Zero user-facing surface.
- **Gates:** lint, tsc, test, build.
- **Depends on:** nothing.

### Slice 2 — The page, dark (~600 lines)

Route enum, page + CSS module rendering every content section, structured data,
middleware bare-path redirect.

- **Acceptance:** page renders in all three locales at its URL with correct content and
  `Event` schema; no embed, no rail, no sticky bar.
- **Dark:** **deliberately not added to `sitemap.ts`** and linked from nowhere — the
  homepage still points at Hipsy. Reachable only by typing the URL.
- **Gates:** lint, tsc, test, build.
- **Depends on:** Slice 1.

### Slice 3 — Embed, rail, go-live (~600 lines)

`HipsyTicketShop` + UTM tests, `StickyBookingBar`, the two-column rail layout, the
analytics event, sitemap registration, and the homepage rewire
(`FEATURED_RETREATS` → `internalUrl`, `RetreatHighlight` → internal `Link`).

- **First step:** verify the widget at rail width; take the pre-approved full-width
  fallback if it is unusable. Not a question.
- **Acceptance:** ticket purchase reachable in one click at 375px and 1440px; UTMs
  forwarded per §3; homepage no longer links to Hipsy; page in sitemap.
- **Dark:** none — this slice is the go-live. It is last precisely so everything before
  it is invisible.
- **Gates:** lint, tsc, test, build, browser pass at 375px + 1440px with screenshots.
- **Depends on:** Slice 2.

## Vetoable product calls (each ships with a screenshot in the QA brief)

Slug `autumn-grounding-retreat`; section order; venue gallery photos; sticky-bar
hide-on-visible behaviour; iframe heights; NL/DE copy tone; displaying prices in our own
copy alongside the widget.
