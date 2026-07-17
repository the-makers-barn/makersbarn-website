# Terms & Conditions Page + Footer Link — Design

**Date:** 2026-07-17
**Status:** Approved

## Goal

Publish The Makers Barn's rental terms (Algemene Voorwaarden, source: `Algemene_Voorwaarden_The_Makers_Barn (1).pdf`) as an HTML page on the website, linked from the footer.

## Decisions

- **Format:** HTML page rendering the full Dutch legal text. No PDF hosting, no translation of the legal content (translation carries legal risk; the Dutch text is authoritative).
- **URL:** `/terms-and-conditions` (consistent with existing English route slugs), served under all three locales via `[locale]`.
- **Footer placement:** bottom bar, next to the copyright line.

## Route & Page

- Add `Route.TERMS_AND_CONDITIONS = '/terms-and-conditions'` to `src/types/navigation.ts`.
- Add the route to `src/app/sitemap.ts`.
- New page `src/app/[locale]/terms-and-conditions/page.tsx` following the existing static-page pattern (see `slow-living-vs-commercial-hospitality/page.tsx`):
  - Server component.
  - `generateMetadata` via `generatePageMetadata` with localized meta title/description (EN "Terms & Conditions", NL "Algemene Voorwaarden", DE "Allgemeine Geschäftsbedingungen"), following the `meta.title[locale]` pattern used by `COMPARISON_CONTENT`.
  - Breadcrumb structured data via `generatePageBreadcrumbs`.
  - Styling via `page.module.css` using the typography CSS custom properties (Playfair headings, semantic color tokens).

## Content

- Full Dutch text transcribed faithfully from the PDF into a structured data file `src/data/terms.ts`:
  - Identity block: location name (The Makers Barn), beheer (The Makers Barn B.V.), exploitant (JambalayaTMB), KvK-nummer (42017220), address (Duisterendijk 2, 8131RA Wijhe).
  - Introduction ("Inleiding & Identiteit").
  - 11 articles as `{ title, clauses[] }`, preserving numbered clauses and nested lists.
  - Article 5 cancellation table (3 rows: timing → consequence).
  - Highlighted warning callout about the zwemvijver (swimming pond) from Article 6.
- Page body is Dutch for all locales.
- Language notice for non-NL locales: a short translated note at the top of the page — EN/DE only — stating the terms are provided in Dutch and the Dutch version is legally binding. Stored in `src/data/terms.ts` as a per-locale record with proper EN and DE translations.

## Footer

- New dictionary key `footer.termsAndConditions` in all three dictionaries (`en.ts`, `nl.ts`, `de.ts`) and the dictionary type:
  - EN: "Terms & Conditions"
  - NL: "Algemene voorwaarden"
  - DE: "AGB"
- Rendered in `Footer.tsx` bottom bar as a localized `Link` next to the copyright text.
- CSS: copyright + link inline on desktop, stacked on mobile.

## Out of Scope

- Hosting the PDF file itself.
- Privacy policy, cookie banner, or other legal pages.
- Translating the legal text.

## Validation

- `pnpm lint`, `pnpm test`, `pnpm build` all pass.
- Manual check: page renders at `/en/terms-and-conditions`, `/nl/terms-and-conditions`, `/de/terms-and-conditions`; footer link appears with correct label per locale; language notice shows on EN/DE only.
