# Chefs Listing Page — Design Spec

**Date:** 2026-05-01
**Branch:** `feature/chef-directory-page`
**Status:** Design approved, awaiting implementation plan
**Related spec:** `2026-04-30-retreat-chefs-directory-chef-page-design.md` (chef detail page)

## 1. Goal & Framing

Build `/chefs` (and its locale variants `/en/chefs`, `/nl/chefs`, `/de/chefs`) as the listing/landing page for the Makers Barn chef directory.

Primary goal: **SEO**. The page is a programmatic-SEO (pSEO) utility resource targeting "private chef for retreats in the Netherlands"-class queries. It must be genuinely useful even to a visitor who never engages with Makers Barn — guidance on finding, evaluating, and booking a private chef for a retreat in NL — with Makers Barn appearing as soft context (one trusted source among the guidance) rather than the central pitch.

Secondary goal: **dual-audience conversion** via two contact CTAs:
- Retreat hosts looking for a chef → matched from the directory.
- Chefs working in the Netherlands → applying to join the directory.

Launch reality: at ship time, `PUBLISHED_CHEFS` is empty (the only chef data file, Liesbeth, is `ChefStatus.DRAFT`). The page must look right with zero published chefs and scale gracefully as chefs are added.

Out of scope (future):
- Sub-pages like `/chefs/yoga-retreats`, `/chefs/team-offsites`. The components are kept small and single-purpose so future template extraction is cheap, but no template abstraction is built today.
- Self-serve chef onboarding form.
- "Subscribe for updates" capture.
- Search / filter UI on the chef grid (warranted only when many chefs exist).

## 2. File & Component Layout

### New files

```
src/app/[locale]/chefs/page.tsx                         # route + metadata + JSON-LD wiring

src/components/server/ChefsListingPage/
  ChefsListingPage.tsx                                  # composer
  ChefsListingPage.module.css
  ChefsListingPage.test.tsx                             # render + state tests
  ChefsHero.tsx               + .module.css
  ChefsIntro.tsx              + .module.css
  ChefsContentSection.tsx     + .module.css             # reused 3x
  ChefGrid.tsx                + .module.css
  ChefCard.tsx                + .module.css
  LaunchingSoonPanel.tsx      + .module.css
  ChefsFactsStrip.tsx         + .module.css
  ChefsFaq.tsx                + .module.css
  ChefsDualCta.tsx            + .module.css
  ChefsStructuredData.tsx
  ChefsStructuredData.test.tsx
  index.ts                                              # barrel: exports ChefsListingPage
```

### Modified files

- `src/app/sitemap.ts` — add `Route.CHEFS` to `PAGE_ROUTES` (priority `0.85`, `changeFrequency: 'monthly'`). Detail pages already handled by the existing `PUBLISHED_CHEFS` loop.
- `src/types/contact.ts` — extend `ContactIntent` enum with `LOOKING_FOR_CHEF = 'looking-for-chef'` and `CHEF_JOIN = 'chef-join'`.
- `src/components/client/UnifiedContact/UnifiedContact.tsx` — render a chef-specific lead-in panel above the form when intent is `LOOKING_FOR_CHEF` or `CHEF_JOIN`. `IntentSelector` continues to show only the existing two public intents (option ii from brainstorming).
- `src/actions/contact.ts` — add intent-aware Postmark subject lines and Slack labels for the two new intent values.
- `src/i18n/dictionaries/{en,nl,de}.ts` — add `chefsListing` namespace + small additions to `unifiedContact` + server-action subject/label strings (see §7 for full schema).
- `src/i18n/types.ts` (or equivalent) — add `ChefsListingDict` interface and extend the root dictionary type.
- `src/components/client/Navbar/...` — add "Chefs" link to the primary nav, pointing to `Route.CHEFS`. Localized via existing nav i18n keys.
- 3–5 related pages — add a single in-body link "Working with a chef? See our guide →" to `host-a-retreat`, `experiences`, `yoga-teachers`, `writing-retreats`, `meditation-retreats` (final list confirmed during implementation; the heuristic is "pages where catering matters"). Light touch only — no refactor.
- `src/components/server/ChefDetailPage/ChefDetailPage.tsx` (or wherever `chef.backLink` is wired) — confirm/wire the back-link destination to `getLocalizedPath(Route.CHEFS, locale)`.

### Constants

- `src/constants/contactIntent.ts` (or extend the existing contact constants file) — already covered by the `ContactIntent` enum extension.
- `src/constants/chefsListing.ts` — small const object holding the on-page anchor IDs (e.g. `CHEFS_LISTING_ANCHOR.GRID = 'chefs-grid'`, `…DUAL_CTA = 'chefs-dual-cta'`) so the `LaunchingSoonPanel` inline link and the dual-CTA section share a single source of truth.

## 3. Page Anatomy

Top-to-bottom render order on `/[locale]/chefs`:

1. **`ChefsHero`** — full-width hero with eyebrow ("Chefs"), H1 ("Private chefs for retreats in the Netherlands"), subtitle framing the page as a guide. Background photo from existing image registry.
2. **`ChefsIntro`** — single hook paragraph immediately under the hero. Utility-first, mentions Makers Barn once in passing.
3. **`ChefsContentSection` ×3** — three educational H2 blocks, each a heading + 1–3 paragraphs + optional image:
   - "What to look for in a retreat chef" (group-cooking experience, dietary range, sourcing, communication).
   - "How retreat-chef pricing works in the Netherlands" (rate structures: day rate vs per-meal vs all-inclusive; typical NL ranges; what's included/excluded).
   - "Regional coverage and travel" (chef supply by province; who travels nationwide; lead times). Closes with one sentence soft-mentioning Makers Barn / the directory below.
4. **`ChefGrid`** — H2 "Chefs in our directory" + framing line. Renders one of:
   - `chefs.length === 0` → `<LaunchingSoonPanel />`.
   - `chefs.length >= 1` → grid of `<ChefCard>` (1 col mobile, 2 col tablet, 3 col desktop) in input order.
5. **`ChefsFactsStrip`** — 3–4 general benchmark stats (e.g. "Typical retreat group: 8–20 · Day rate range €350–€650 · Lead time 4–8 weeks · Common dietary fits: vegetarian, gluten-free, dairy-free"). Useful reference data, not Makers-Barn-specific.
6. **`ChefsFaq`** — H2 + 5–6 FAQ items targeting real searches (cost, lead time, travel, dietary, contracting, DIY alternative). Two answers may softly mention Makers Barn where genuinely relevant.
7. **`ChefsDualCta`** — two side-by-side cards (stacked on mobile):
   - **"Need help finding the right chef?"** → `/[locale]/contact#looking-for-chef`
   - **"Are you a chef working in the Netherlands?"** → `/[locale]/contact#chef-join`

The H2 "Chefs in our directory" stays present whether the grid has 0, 1, or N cards — only the body below it changes (panel vs cards). The page outline (and structured data) does not churn between deploys.

## 4. Data Sourcing & Empty-State Behaviour

### Page must work in three states
1. **Production with zero published chefs** (launch reality).
2. **Preview / dev with drafts visible** (Liesbeth currently).
3. **Future state with multiple published chefs.**

### Data source
- The page calls `getChefsForEnv()` from `src/data/chefs/index.ts` — same gating already used by the chef detail route. Production → `PUBLISHED_CHEFS` only; non-prod → `ALL_CHEFS` (drafts visible). Single source of truth, no new gating logic.

### `ChefGrid` rendering
- `chefs.length === 0` → render `<LaunchingSoonPanel />` only. No empty grid, no "0 chefs found" placeholder.
- `chefs.length >= 1` → render `<ChefCard>` per chef.
- Drafts marked via the existing `DraftBadge` component (already used on the detail page) so preview deployments make it obvious which cards won't ship to prod.

### `ChefCard` content
- Avatar (square, rounded), chef name (H3), home base (`city · localized region label`), tagline (1–2 lines, via `localize(chef.tagline, locale)`), 2–3 cuisine-style chips (via `localize(chef.cuisineStyles[i], locale)`), "View profile →" link to `/[locale]/chefs/[slug]` (built via `getChefDetailPath`). `<DraftBadge />` shown only when `chef.status === ChefStatus.DRAFT`.

### `LaunchingSoonPanel` content
- One bordered, lightly-tinted card spanning the grid width.
- Headline + body (utility-first copy).
- Inline link → host CTA below (anchored to the dual-CTA section via `CHEFS_LISTING_ANCHOR.DUAL_CTA`).
- No subscribe form. The dual CTA below is the only conversion path.

### Structured-data implications
- `ItemList` JSON-LD is built from `PUBLISHED_CHEFS` only — **never** from `getChefsForEnv()` — regardless of environment. Drafts must never appear in any structured data, even on preview URLs (Googlebot can crawl preview deployments unless explicitly noindexed). Mirrors the rule already in `sitemap.ts:81`.
- `CollectionPage`, `FAQPage`, `BreadcrumbList` always emitted, even with empty list.
- `robots: noindex,nofollow` automatically applied on non-prod by `generatePageMetadata` (existing site pattern).

## 5. SEO

### Metadata (via `generatePageMetadata`)
- `title`: "Private chefs for retreats in the Netherlands | Makers Barn" (~58 chars).
- `description`: utility-led, ~155 chars: "A practical guide to finding, evaluating, and booking a private chef for your retreat in the Netherlands. Pricing, lead times, dietary fit, and our curated directory."
- `path: Route.CHEFS`, `locale` — emits canonical + EN/NL/DE hreflang + x-default automatically.
- `robots: noindex,nofollow` automatically on non-prod.
- OpenGraph: `type: 'website'`, hero image (1200×630), localized title + description.

### Structured data (single `<ChefsStructuredData>` server component)

Always emitted:
1. **`BreadcrumbList`** — Home → Chefs.
2. **`CollectionPage`** — `@id` = canonical URL; `name` = page title; `description` = page meta description; `inLanguage` = current locale; `isPartOf` references the site WebSite.
3. **`FAQPage`** — `mainEntity` built from the same FAQ items rendered in `ChefsFaq` (single source of truth — no copy duplication between display and JSON-LD).

Conditionally emitted:
4. **`ItemList`** — only when `PUBLISHED_CHEFS.length > 0`. `itemListElement` = array of `ListItem` with `position`, `url` → chef detail page, `name` = chef name. Built from `PUBLISHED_CHEFS` (not `getChefsForEnv()`). Omitted entirely when empty (no empty `ItemList`).

Not emitted: `Person` schema. The chef detail pages already emit rich `Person` schema; the `ItemList` references those URLs and Google merges them via canonical resolution. Duplicating `Person` here would risk schema-validation warnings.

### Internal linking
- **Listing → detail:** every `ChefCard` links to `/[locale]/chefs/[slug]`.
- **Detail → listing:** wire the existing `chef.backLink` ("← Discover more chefs") on the detail page to `getLocalizedPath(Route.CHEFS, locale)` if not already.
- **Primary nav:** add a "Chefs" link to the primary nav (same place yoga-teachers / meditation-retreats appear). Site-wide internal-link signal from day one.
- **Cross-page links:** add a single "Working with a chef? See our guide →" link near the bottom of `host-a-retreat`, `experiences`, `yoga-teachers`, `writing-retreats`, `meditation-retreats`. Light touch, no refactor.
- **Sitemap:** `Route.CHEFS` added to `PAGE_ROUTES` in `sitemap.ts` with `priority: 0.85, changeFrequency: 'monthly'`. Detail pages continue to use the separate `PUBLISHED_CHEFS` loop — no change there.

## 6. Dual CTA & Contact Wiring

### Approach
Reuse and extend the existing hash-driven `ContactIntent` mechanism in `UnifiedContact` (driven by URL hash, persisted via `history.replaceState`). Do not invent a parallel `?subject=` query-param signal.

### Enum extension (`src/types/contact.ts`)
```ts
export enum ContactIntent {
  QUESTION = 'question',
  BOOKING = 'booking',
  LOOKING_FOR_CHEF = 'looking-for-chef',  // new
  CHEF_JOIN = 'chef-join',                // new
}
```
`UnifiedContact.parseContactIntent` already validates against `Object.values(ContactIntent)`, so the new values become recognised automatically.

### `ChefsDualCta` links
- Left CTA → `/[locale]/contact#looking-for-chef`
- Right CTA → `/[locale]/contact#chef-join`
- Pure server component (no JS). Two anchor links, side-by-side cards (stacked on mobile).

### `UnifiedContact` behaviour
- `IntentSelector` continues to show only `QUESTION` and `BOOKING` buttons. Direct `/contact` visitors see no chef-specific UI.
- When the URL hash sets intent to `LOOKING_FOR_CHEF` or `CHEF_JOIN`, render a new chef-specific lead-in panel above the existing form ("You're asking about: …"), then render the existing `QuestionForm` (no new form component).
- On submit, the intent value flows through to the server action so Postmark subject lines and Slack notifications clearly tag which CTA fired.

### Server action
- Add intent-aware subject lines and Slack labels for `LOOKING_FOR_CHEF` and `CHEF_JOIN` in the existing intent-handling switch / map. Two small dictionary additions; no logic restructure.

## 7. i18n

### New `chefsListing` namespace (in `src/i18n/dictionaries/{en,nl,de}.ts`)

```ts
chefsListing: {
  meta: { title: string; description: string },
  hero: { eyebrow: string; h1: string; subtitle: string },
  intro: string,
  sections: {
    whatToLookFor: { h2: string; paragraphs: readonly string[] },
    pricing:       { h2: string; paragraphs: readonly string[] },
    coverage:      { h2: string; paragraphs: readonly string[] },
  },
  grid: {
    h2: string,                         // "Chefs in our directory"
    framingLine: string,                // "These are chefs we've worked with..."
    card: { viewProfile: string; draftBadge: string },
  },
  launchingSoon: {
    headline: string,
    body: string,
    inlineCtaLabel: string,             // "Tell us what you're planning →"
  },
  facts: ReadonlyArray<{ number: string; description: string }>,  // 3-4 items
  faq: {
    h2: string,
    items: ReadonlyArray<{ question: string; answer: string }>,     // 5-6 items
  },
  dualCta: {
    looking: { eyebrow: string; h3: string; body: string; button: string },
    join:    { eyebrow: string; h3: string; body: string; button: string },
  },
}
```

### Additions to existing `unifiedContact` namespace
```ts
unifiedContact: {
  intentLeadIn: {
    looking: string,   // "You're asking about finding a chef for your retreat."
    join:    string,   // "You're asking about joining the Makers Barn chef directory."
  },
  // ... existing keys unchanged
}
```

### Additions to `src/actions/contact.ts` intent-handling dictionary
- Postmark subject line for `LOOKING_FOR_CHEF`
- Postmark subject line for `CHEF_JOIN`
- Slack label for `LOOKING_FOR_CHEF`
- Slack label for `CHEF_JOIN`

### Translation policy
- All three locales (EN, NL, DE) authored at the same time. Strict `Record<Language, string>` shape — no fallback rendering, keys must exist in all three.
- Real translations, not auto-translated placeholders.
- EN authored first; NL and DE follow.

### Reused (not duplicated)
- Region labels via existing `chef.enums.region` map (already shipped for the detail page).
- Cuisine-style chip text via `localize(chef.cuisineStyles[i], lang)` — chef-authored data, not dictionary copy.
- `DraftBadge` label reused from the detail page if already extracted; otherwise the `chefsListing.grid.card.draftBadge` key is the new home.

### Constants vs dictionary
- New `ContactIntent` values are enum constants, not dictionary entries.
- Anchor IDs (`CHEFS_LISTING_ANCHOR`) are constants in `src/constants/`.
- Numeric ranges in the facts strip (e.g. `"€350–€650"`) are raw strings in the dictionary — matches site convention (no `Intl.NumberFormat`).

## 8. Testing

Test scope mirrors `ChefDetailPage.test.tsx` and `ChefStructuredData.test.tsx`. Render-level unit tests; no full E2E.

### `ChefsListingPage.test.tsx`
- Empty chef list → `LaunchingSoonPanel` present, no `ChefCard`, dual-CTA links resolve to `/contact#looking-for-chef` and `/contact#chef-join`, all H2 section headings present.
- One chef → one `ChefCard` rendered with name, region, view-profile link; no `LaunchingSoonPanel`.
- Multiple chefs → grid contains exactly N cards in input order.
- A draft chef in the input → `DraftBadge` shown on that card.

### `ChefsStructuredData.test.tsx`
- `BreadcrumbList`, `CollectionPage`, `FAQPage` always emitted.
- `ItemList` omitted when `PUBLISHED_CHEFS` is empty.
- `ItemList` emitted with correct `position` + `url` when `PUBLISHED_CHEFS` has 2+ entries.
- `ItemList` excludes drafts even when `getChefsForEnv()` includes them (inject draft + published; assert only published appears).
- `FAQPage.mainEntity` count matches the rendered `ChefsFaq` items count (single-source-of-truth check).

### `UnifiedContact` test additions
- Hash `#looking-for-chef` → intent state is `LOOKING_FOR_CHEF`, lead-in panel renders correct copy, form submits with that intent.
- Hash `#chef-join` → analogous with `CHEF_JOIN`.
- Hash with an unknown value → falls back to `QUESTION` (regression check).
- `IntentSelector` continues to show only `QUESTION` and `BOOKING` buttons when a chef intent is active.

### Sitemap test
- If `sitemap.ts` is currently tested: assert `/chefs` route appears for all three locales; detail pages continue to use `PUBLISHED_CHEFS` and don't regress.
- If not currently tested: no new test added.

### Server action test addition
- Action called with `intent: LOOKING_FOR_CHEF` produces the expected Postmark subject and Slack label. Same for `CHEF_JOIN`.

### Intentionally not tested
- Visual styling / responsive layout — covered by manual browser check in dev before declaring complete.
- Translation content — TypeScript enforces key presence; content is reviewed by humans.
- E2E click-through from `/chefs` → `/contact` → form submit — out of scope this iteration.

## 9. Open Questions / Risks

- **Hero image asset** — needs to be selected from the existing `imageAltText` registry or added. Confirmed during implementation, not blocking the design.
- **Final cross-link page list** — confirmed during implementation by reviewing each candidate page; the design commits to the heuristic ("pages where catering matters") and a count of 3–5.
- **Nav placement on mobile** — depends on current Navbar capacity; if the mobile drawer is already crowded, "Chefs" may need to slot under a "Discover" group rather than top-level. Decided during implementation against the current Navbar.

## 10. Success Criteria

- `/chefs`, `/en/chefs`, `/nl/chefs`, `/de/chefs` render in production with zero published chefs and look intentional, not unfinished.
- The page is indexed (sitemap entry, no `noindex`) and emits valid `BreadcrumbList`, `CollectionPage`, `FAQPage` JSON-LD on prod. `ItemList` correctly omitted while empty.
- A retreat host clicking the "Looking for a chef?" CTA arrives on `/contact` with a chef-specific lead-in and submits an inquiry tagged with `LOOKING_FOR_CHEF`. Postmark and Slack notifications make the source unambiguous. Same for the "Are you a chef?" CTA.
- The detail page's existing "← Discover more chefs" back-link resolves to `/chefs`.
- All new copy translated in EN, NL, DE — no fallback rendering on the listing page.
- No regression on the chef detail route or sitemap.
