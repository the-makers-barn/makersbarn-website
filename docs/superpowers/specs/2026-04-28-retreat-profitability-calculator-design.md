# Retreat Profitability Calculator — Design Spec

**Date:** 2026-04-28
**Status:** Draft, awaiting user review
**Owner:** Benny Vaksendiser

---

## 1. Goal & Strategy

Launch a free SEO-targeted tool that ranks for retreat-pricing keywords (primary: "how to price a yoga retreat"), captures retreat-facilitator leads, and funnels qualified prospects into the MakersBarn venue-booking pipeline.

The strategy follows the Tibo Louis-Lucas (Taplio / TweetHunter) free-tool playbook: a genuinely useful, ungated, interactive tool sits inside a long-form guide page; the guide content earns the ranking, the tool earns the engagement and leads, and a contextual non-numeric CTA channels self-identifying prospects to a custom-quote request.

The tool is the first of an intended `/tools/` hub. The architecture must accommodate further tools without rework.

### Success criteria (measured 8–16 weeks post-launch)

- All pages live, indexed, structured data validates clean in Google Rich Results Test.
- Mobile Core Web Vitals "Good" across all variant pages.
- ≥3-minute average time-on-page on variant pages.
- ≥15% calculator-interaction rate (any input change).
- ≥1 variant ranking on Google page 1 for its primary keyword (English) within 12–16 weeks.
- ≥1 quote-CTA click per ~50 unique visitors on variant pages.

These are dials to watch, not hard targets — they inform what to invest in next (more variants, more languages, second tool).

---

## 2. Information Architecture & URLs

**Section root:** `/[locale]/tools/`

The `/tools/` umbrella was chosen over `/resources/` or `/learn/` because it signals interactive intent to both users and search engines, and leaves room for future tools beyond calculators.

### Page inventory (v1)

| Page | URL pattern | Primary keyword target |
| --- | --- | --- |
| Hub index | `/[locale]/tools/` | "free retreat tools" (low-volume, navigational) |
| Canonical calculator | `/[locale]/tools/retreat-profitability-calculator/` | "retreat profitability calculator", "retreat pricing calculator" |
| Yoga variant | `/[locale]/tools/yoga-retreat-pricing-calculator/` | "how to price a yoga retreat", "yoga retreat pricing" |
| Wellness variant | `/[locale]/tools/wellness-retreat-pricing-calculator/` | "wellness retreat pricing" |
| Meditation variant | `/[locale]/tools/meditation-retreat-pricing-calculator/` | "meditation retreat pricing" |
| Coaching variant | `/[locale]/tools/coaching-retreat-pricing-calculator/` | "coaching retreat pricing", "coaching intensive cost" |

Locales for v1: **EN and NL**. Total localized outputs: 6 pages × 2 = **12**.

### Each variant is its own canonical URL

Variants are not `rel=canonical` aliases of the hub. Each targets a distinct keyword cluster with distinct H1, intro, copy, defaults, benchmark numbers, and guide content. They share the calculator component and page chrome only.

### Cross-linking flow

```
Existing silo pages (authoritative)        New tools pages (need authority)

/[locale]/yoga-teachers/            ──►    /[locale]/tools/yoga-retreat-pricing-calculator/
/[locale]/wellness-detox-retreats/  ──►    /[locale]/tools/wellness-retreat-pricing-calculator/
/[locale]/meditation-retreats/      ──►    /[locale]/tools/meditation-retreat-pricing-calculator/
/[locale]/coaching-intensives/      ──►    /[locale]/tools/coaching-retreat-pricing-calculator/

                                  ◄──────  (calculator pages link back to the silo
                                            via the "Considering MakersBarn?" CTA)

/[locale]/tools/  ◄────►  All variants     (two-way, sibling block)
Each variant      ◄────►  2-3 sibling      ("Related calculators" block)
```

The existing silo pages get an editorial CTA block linking to their matching calculator variant. This transfers link equity from already-ranking silos to the new pages.

### Deferred linking

Embedding the live calculator component directly on existing silo pages is **deferred to v2+** (not v1) to avoid intent cannibalization between venue-shopping silos and pricing-tool pages. Revisit after measuring v1 ranking data.

### Locale handling

EN and NL are translated and indexed. DE / ES / FR routes fall back to the English version with `hreflang="x-default"` and a polite in-page notice ("Read in English while we translate") rather than a "coming soon" stub, so we don't lose those visits.

### Sitemap & robots

- All tools pages added to `src/app/sitemap.ts`. Priority 0.7, change frequency monthly (variants) / weekly (hub index).
- No special robots rules — fully indexable.
- Verify the existing malicious-path-blocking middleware does not match `/tools/*`.

---

## 3. The Calculator: UX, Inputs, Outputs

### Interaction model

Live-updating split layout. No "Calculate" button. State updates as the user adjusts any input.

- **Desktop:** two-column. Inputs left (~40%), live results sticky right (~60%).
- **Mobile:** single column. Results panel collapses into a sticky bottom bar showing the headline number; tap to expand the full breakdown. Inputs stack above.

### Inputs — visible by default (~7 fields)

| Field | Control | Default (yoga variant) | Inline benchmark helper |
| --- | --- | --- | --- |
| Number of guests | Slider 4–30 | 12 | — |
| Retreat length (nights) | Slider 2–10 | 5 | — |
| Price per guest | Slider with number input €500–€5,000 | €1,200 | "Yoga retreats typically charge €900–€1,800 for 5 nights" |
| Venue & accommodation total | Number (€) | €4,500 | "Total venue rental + accommodation for the whole retreat" |
| Food per guest per day | Number (€) | €40 | "Retreat-quality food typically runs €30–€55/guest/day" |
| Facilitator compensation (your fee) | Number (€) | €2,500 | "What you're paying yourself for the retreat" |
| Marketing & other costs | Number (€) | €800 | "Ads, content, swag, supplies, contingency" |

The benchmark strings are placeholders. Real ranges will be sourced by the content-verification agent from defensible public data (BookRetreats, Retreat Guru, industry reports) before any variant ships.

### Inputs — "Advanced" disclosure (collapsed by default)

| Field | Control | Default |
| --- | --- | --- |
| Co-facilitators / guest teachers | Number (€) | €0 |
| Travel & transport (yours) | Number (€) | €0 |
| Payment processing fee | Percentage | 3% |
| Insurance | Number (€) | €150 |
| Planning days (for profit-per-workday calc) | Number | 5 |

### Outputs — live results panel

A clear hierarchy, not a wall of numbers:

- **Headline:** Net Profit — large, color-coded green/red.
- **Subheadline (one dynamic sentence):** *"At €1,200/person with 12 guests, you'll net €4,800 in profit — a 33% margin."*
- **Breakdown:**
  - Total revenue
  - Total costs (with expandable line-by-line breakdown)
  - Profit margin %
  - Profit per workday (planning days + retreat days)
  - Breakeven occupancy: *"You need at least 7 guests at this price to break even."*
- **Visual:** a horizontal stacked bar showing revenue split into cost categories + profit. Pure CSS, no chart library.

### Smart per-variant defaults

Each variant page loads with realistic, type-specific defaults so the page is immediately useful before any interaction. Defaults live in a single typed config object per variant (see Section 5).

| Variant | Profile (placeholder ranges, to be verified) |
| --- | --- |
| Yoga | 10–14 guests, 5–7 nights, €1,000–€1,800/person |
| Wellness | 8–12 guests, 6–8 nights, €1,500–€2,500/person |
| Meditation | 12–16 guests, 3–5 nights, €700–€1,200/person |
| Coaching | 4–8 guests, 3–5 nights, €2,000–€5,000/person |

### "Intuitive" details (UX guardrails)

These details, not the math, determine whether the tool feels good:

1. No "Calculate" button — everything updates live.
2. Inline benchmarks beside every cost field.
3. Units visible everywhere ("5 nights", "€40 / guest / day"), never bare numbers.
4. "Restore example values" reset button.
5. Sliders for the big-three inputs (guests, nights, price); number fields for cost lines.
6. Result rendered as a sentence, not just numbers, for memorability.

### Save / share / export

- **Shareable URL:** all input state encoded in URL params, debounced replace-state writes (no history pollution). "Copy link" button. Lets users share calculations with co-facilitators and lets Google deep-link to interesting calculation states.
- **Email me my summary:** optional inline form below results, sends a styled HTML email via the existing Postmark pipeline. Optional checkbox for soft newsletter opt-in. **Primary lead-capture mechanism.** No PDF in v1 — HTML email is sufficient.
- **MakersBarn contextual CTA:** non-numeric, no MakersBarn pricing surfaced. Example copy: *"Considering MakersBarn for your retreat? We tailor pricing to your group and dates — request a custom quote →"*. Links to existing contact / booking flow with a query param identifying the source variant.

### Lead-capture stance

The calculator is **fully ungated**. No email wall, no signup gate. Email capture is opt-in, secondary to engagement. This is non-negotiable for v1 because the SEO objective requires high engagement signals and earns backlinks; a gated tool earns neither.

---

## 4. Page Anatomy & Guide Content

Each calculator page (the canonical and each variant) follows the same template; different content, same structure.

```
Navbar (existing)
HERO
  • H1 (variant-specific keyword)
  • One-sentence value prop
  • 40–70 word intro paragraph
THE CALCULATOR (Section 3)
  • Inputs left, results right
  • Email-summary capture below
  • MakersBarn contextual CTA below
"How to use this calculator"  (4-step quick-start, 80–120 words)
GUIDE CONTENT  (the SEO body, ~1,000–1,500 words)
  • H2: What goes into retreat pricing
  • H2: Benchmark pricing for [variant]
  • H2: How to calculate your breakeven
  • H2: Common pricing mistakes
  • H2: When to charge more (positioning)
  • H2: Marketing budget rules of thumb
FAQ  (6–10 Q&As, 400–800 words; wrapped in FAQPage JSON-LD)
"Related calculators"  (2–3 sibling variant links)
"Considering MakersBarn?"  (CTA block: photos, 1-line pitch, contact link)
Footer (existing)
```

**Word counts (variant pages):** ~1,800–2,400 words total. The hub canonical is similar but generic, ~1,500–2,000 words. The hub *index* page (`/tools/`) is a directory, ~300–500 words intro + tool list, no calculator embed.

### Linkable assets per variant

Each variant page includes 1–2 citable assets (a benchmark table, a formula visualization) so bloggers, Reddit posters, and industry roundups have something specific to link to. Numbers must be sourced from defensible public data.

### Content authoring approach

**AI-drafted, agent-verified, editorially passed.**

1. **Draft:** AI generates the per-variant guide content from a structured prompt that includes the variant profile, target keyword, required H2 sections, and tone guidelines.
2. **Verify:** A dedicated verification subagent cross-checks every numeric claim, benchmark, and pricing range against public sources (BookRetreats, Retreat Guru, industry reports, retreat-facilitator blogs). Any unverifiable claim is flagged and either re-sourced or removed.
3. **Edit:** Benny does an editorial pass on every section before publishing. AI-drafted content never goes live unverified.

This applies to both EN and NL content. NL is translated from verified EN via the existing translation infrastructure, with a Dutch-speaker review for industry terminology before launch.

---

## 5. Component Architecture

### File layout

```
src/
├── app/[locale]/tools/
│   ├── layout.tsx                                # tools-section layout (optional)
│   ├── page.tsx                                  # /tools — hub index
│   ├── retreat-profitability-calculator/
│   │   └── page.tsx                              # canonical
│   ├── yoga-retreat-pricing-calculator/
│   │   └── page.tsx
│   ├── wellness-retreat-pricing-calculator/
│   │   └── page.tsx
│   ├── meditation-retreat-pricing-calculator/
│   │   └── page.tsx
│   └── coaching-retreat-pricing-calculator/
│       └── page.tsx
├── components/
│   ├── client/
│   │   └── RetreatProfitabilityCalculator/
│   │       ├── RetreatProfitabilityCalculator.tsx   # 'use client' orchestrator
│   │       ├── InputsPanel.tsx
│   │       ├── ResultsPanel.tsx
│   │       ├── AdvancedDisclosure.tsx
│   │       ├── EmailCapture.tsx
│   │       ├── ShareLink.tsx
│   │       ├── CostBreakdownBar.tsx                  # CSS stacked bar
│   │       ├── useCalculator.ts                      # state + URL sync hook
│   │       ├── calculate.ts                          # pure pricing math (no React)
│   │       ├── RetreatProfitabilityCalculator.module.css
│   │       └── index.ts
│   └── server/
│       └── ToolPageShell/
│           ├── ToolPageShell.tsx                     # hero + slots + guide + FAQ + CTAs
│           ├── ToolPageShell.module.css
│           └── index.ts
├── data/
│   └── tools/
│       ├── calculatorVariants.ts                     # per-variant defaults, benchmarks, copy
│       ├── calculatorContent.ts                      # per-variant guide content per locale
│       └── index.ts
├── constants/
│   └── tools.ts                                      # ToolVariant enum, slug constants, ranges
├── lib/
│   └── tools/
│       ├── urlState.ts                               # encode/decode calculator state ↔ URL
│       └── benchmarks.ts                             # shared benchmark formatting helpers
├── actions/
│   └── tools/
│       └── emailCalculatorSummary.ts                 # server action: send styled HTML email
├── i18n/dictionaries/
│   ├── en.ts                                         # +tools section keys
│   └── nl.ts                                         # +tools section keys
└── types/
    └── tools.ts                                      # CalculatorInputs, CalculatorResults,
                                                     # ToolVariant, VariantConfig
```

### Key architectural decisions

1. **Pure math separated from UI.** `calculate.ts` exports `calculateRetreatProfitability(inputs): Results`, zero React or DOM. Trivially unit-testable. The component calls it on every state change.
2. **Variant config is data, not code.** `calculatorVariants.ts` exports a typed object map keyed by `ToolVariant` enum. Each entry: defaults, benchmark strings, hero copy, related-variant slugs. Adding variant N+1 = one new entry + one new `page.tsx`.
3. **`page.tsx` files are tiny.** Each variant's page (~30 lines) pulls metadata, structured data, and variant config, then renders `<ToolPageShell variant="...">`. No logic duplication across variants.
4. **`ToolPageShell` is a server component.** Hero, guide content, FAQ, CTAs all SSR'd. Slots in `<RetreatProfitabilityCalculator />` (client component) only where interactivity is needed. Maximizes static HTML for SEO.
5. **Guide content lives in `data/tools/calculatorContent.ts`** as `{ [variant]: { [locale]: { sections: [...] } } }`. Sections are typed (heading, body, optional callout). Editing copy never touches components.
6. **URL state sync.** `useCalculator` hook reads initial state from URL params on mount, debounced replace-state writes back on change. No browser-history pollution.
7. **Constants & enums per CLAUDE.md.** `ToolVariant` enum, slug constants, default ranges all in `src/constants/tools.ts`. No hardcoded strings.
8. **End-to-end type safety.** `CalculatorInputs`, `CalculatorResults`, `ToolVariant`, `VariantConfig` in `src/types/tools.ts`. `calculate()` fully typed. Zod schema on the email-capture server action.

### Code-quality guardrails (per project CLAUDE.md)

- `RetreatProfitabilityCalculator.tsx` is a thin orchestrator (~80 lines); sub-components own their slices.
- Files capped ~300 lines, functions ~50, max parameters 4 (options object beyond).
- Math logic split into small named functions in `calculate.ts`.
- No `any`, no `@ts-ignore` without 10+ char justification, no swallowed errors.
- Form validation centralized via Zod; server action rejects malformed payloads.
- All multi-value sets are enums; single values are typed constants.

---

## 6. SEO Machinery

### Metadata (per page, locale-aware)

Each page exports its own `generateMetadata()` using the existing `generatePageMetadata()` helper.

- **Title:** keyword-led, brand-suffixed.
  Examples:
  - `"Yoga Retreat Pricing Calculator — Free Tool | The MakersBarn"`
  - `"Coaching Retreat Pricing Calculator — Free Tool | The MakersBarn"`
- **Description:** ~150 chars, leads with utility, ends with subtle brand. Variant-specific.
- **Canonical:** each variant is its own canonical. Variants are NOT canonicalized to the hub.
- **OG / Twitter:** custom OG image per variant via `next/og` route handler — title + variant name on a branded background. No per-image manual asset work.
- **hreflang:** EN and NL alternates linked. DE / ES / FR fall back to EN with `x-default`.

### Structured data (JSON-LD, server-rendered)

Each variant page emits multiple schemas via the existing `StructuredData` component pattern:

| Schema | Purpose |
| --- | --- |
| `WebApplication` | Marks the calculator as a free interactive tool. |
| `HowTo` | Wraps the "How to use this calculator" steps. Eligible for HowTo rich result. |
| `FAQPage` | Wraps the FAQ section. Eligible for FAQ accordion in SERPs. |
| `BreadcrumbList` | Tools → calculator (variant). Existing helper. |
| `Organization` | Already present site-wide. |

The hub canonical page gets the same set. The `/tools/` index gets `BreadcrumbList` + `CollectionPage` (lists tools as `ItemList`).

### Internal linking

Detailed in Section 2. Summary: existing silo pages link to matching variants via editorial CTA blocks; variants link back via the "Considering MakersBarn?" block; hub and variants cross-link; sibling variants cross-link via "Related calculators".

### Performance (Core Web Vitals are an SEO signal)

- Calculator is `'use client'` but the page shell is server-rendered → most HTML is SSR'd before hydration. LCP is the H1 / hero, not the calculator.
- Math is synchronous and lightweight.
- Cost-breakdown bar is pure CSS — no chart library.
- Images via `next/image` with proper sizing.
- Fonts via `next/font/google` (already optimized).

### Tracking

Four custom events via the existing `@vercel/analytics` integration:

- `calculator_loaded` (props: variant)
- `calculator_shared` (props: variant)
- `email_captured` (props: variant)
- `makersbarn_cta_clicked` (props: variant, source URL)

No per-input field tracking. These four signals are enough to compare variant performance and decide what to invest in next.

---

## 7. v1 Scope

### Included in v1

| Item | Status |
| --- | --- |
| `/tools/` hub index page | ✅ EN + NL |
| Canonical `/tools/retreat-profitability-calculator/` | ✅ EN + NL |
| Yoga variant | ✅ EN + NL |
| Wellness variant | ✅ EN + NL |
| Meditation variant | ✅ EN + NL |
| Coaching variant | ✅ EN + NL |
| Reusable `RetreatProfitabilityCalculator` component | ✅ |
| Variant config system (typed, data-driven) | ✅ |
| Live-updating split layout, smart defaults, mobile sticky bar | ✅ |
| Inline benchmarks, advanced disclosure, reset | ✅ |
| Shareable URL state | ✅ |
| Email-me-my-summary HTML (Postmark) | ✅ |
| MakersBarn contextual CTA + custom-quote link | ✅ |
| Structured data (WebApp, HowTo, FAQPage, Breadcrumb) | ✅ |
| Sitemap, hreflang, metadata per variant | ✅ |
| Internal-link CTA blocks added to existing silo pages | ✅ |
| Analytics events (loaded / shared / email / cta) | ✅ |
| Guide content per variant (AI-drafted + verified + edited) | ✅ |

### Explicitly deferred to v2+

- Additional variants: breathwork, somatic, writing, photography, circle, team-offsites. Add based on which v1 variants rank best.
- DE / ES / FR translations. Wait until at least one EN variant breaks into top-10 for its keyword.
- Embedding the live calculator on existing silo pages. Wait for ranking data to avoid intent cannibalization.
- PDF export. HTML email is sufficient until users ask.
- Saved-calculation accounts / login.
- A/B testing of copy or pricing benchmarks.
- A second tool entirely (e.g., Retreat Marketing Budget Calculator). Scope separately once tool #1 has data.

### Risks worth naming

1. **AI-drafted content with inadequate verification** could damage trust signals or contain wrong pricing advice. Mitigation: the verification agent + editorial pass is non-negotiable. If a number can't be sourced, it doesn't ship.
2. **Variant cannibalization**: three or four variants competing for related queries could split ranking signals. Mitigation: each variant has a clearly distinct primary keyword in title/H1/meta; the four chosen are intent-distinct enough that this is unlikely. Monitor in Search Console.
3. **NL translation quality** for retreat-industry terminology (facilitator, breakeven, occupancy). Mitigation: Dutch-speaker review of all NL content before launch.
4. **MakersBarn pricing exposure**: the calculator never shows MakersBarn-specific prices. Venue cost is user-entered; the MakersBarn nudge is non-numeric and points to a custom-quote request.

---

## Appendix: Key terminology

- **Variant**: a retreat-type-specific calculator page (yoga, wellness, meditation, coaching). Same component, different config and content.
- **Canonical** (in this doc): the variant-agnostic generic calculator page at `/tools/retreat-profitability-calculator/`. Not a `rel=canonical` alias of variants.
- **Hub** / **hub index**: the `/tools/` directory page listing all tools in the section.
- **Silo**: existing landing pages targeting venue-shopping intent (`/yoga-teachers/`, `/coaching-intensives/`, etc.). Different intent from the new tools pages.
