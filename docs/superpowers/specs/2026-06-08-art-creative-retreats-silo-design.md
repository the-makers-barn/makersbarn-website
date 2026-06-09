# Art & Creative Retreats Silo — Design Spec

**Date:** 2026-06-08
**Branch:** `feature/art-creative-retreats-silo`
**Status:** Design approved, awaiting implementation plan
**Related:** `src/data/silos/*` (existing 10 silos), `host-a-retreat` hub page

## 1. Goal & Framing

Add an eleventh silo to the `host-a-retreat` hub: a programmatic-SEO landing page at
`/art-retreats` (and locale variants `/en|/nl|/de`) targeting organizers who run
**multi-day residential art & creative retreats** and are looking for a venue.

The silo follows the exact same template and data shape as the existing ten silos
(`SiloContent` → `SiloLandingPage`). This is **content + wiring only** — no new
component, no layout/CSS work.

### Positioning (decided in brainstorming)

- **One combined silo** — not separate "art" and "creative" pages. Avoids cannibalising
  the existing Writing and Photography silos.
- **Broad creative focus** — painters, illustrators, mixed-media artists, makers, and
  craft facilitators. Leans into the "Makers Barn" brand: the Hay House barn as a
  large, mess-friendly studio; plein-air work in the planted woodland, fields, and at
  Kasteel Nijenhuis's sculpture garden; a long table for evening shares / critique.
- **URL slug `/art-retreats`** (enum `ART_RETREATS`) for SEO weight on "art retreat
  venue"-class queries, while the **card title and on-page copy read "Art & creative
  retreats"** to signal the broader fit.
- **Cohort 6–12, 3–7 days, residential** — same envelope as the other silos.

### Honest constraint

The image library has no "people making art / work in progress" photograph. Imagery
leans on the barn-as-studio (`hayHouseSun`), the sculpture-garden castle
(`kasteelNijenhuis`), and the long table (`lunchTogether`). This is acceptable given the
existing assets and is consistent with how the Photography silo handles the same gap.

### Out of scope

- New photography/illustration assets.
- Any change to the shared `SiloLandingPage` component or its CSS.
- A schedule block (`SiloSchedule` is optional; most silos omit it — we omit it too).
- Navbar changes (silos are not in the primary nav; they are reached via the hub).

## 2. File Layout

### New files

```
src/data/silos/art-retreats.ts            # ART_RETREATS_SILO: SiloContent (EN/NL/DE)
src/app/[locale]/art-retreats/page.tsx    # route + metadata wiring (mirrors photography-workshops)
```

### Modified files (wiring — 8 touchpoints)

- `src/types/silo.ts` — add `ART_RETREATS = 'art-retreats'` to `SiloSlug`.
- `src/types/navigation.ts` — add `ART_RETREATS = '/art-retreats'` to `Route`.
- `src/data/silos/index.ts` — `export { ART_RETREATS_SILO }` **and** append an entry to
  `SILO_HUB_CARDS` (slug, route, `imageSrc`, trilingual `imageAlt`).
- `src/app/[locale]/host-a-retreat/page.tsx` — import `ART_RETREATS_SILO` and add the
  `[SiloSlug.ART_RETREATS]: ART_RETREATS_SILO` entry to the `SILO_BY_SLUG`
  `Record<SiloSlug, SiloContent>` (the `Record` type makes this a compile error until added).
- `src/lib/structuredData.ts` — add `case SiloSlug.ART_RETREATS: return cards.artRetreats`
  to `getSiloCardLabel` (switch is exhaustive — TS will error without it, which is the
  intended safety net).
- `src/i18n/types.ts` — add `artRetreats: { title: string; pitch: string }` to the
  `retreats.cards` type.
- `src/i18n/dictionaries/en.ts` — add `cards.artRetreats` (title + pitch).
- `src/i18n/dictionaries/nl.ts` — add `cards.artRetreats` (title + pitch).
- `src/i18n/dictionaries/de.ts` — add `cards.artRetreats` (title + pitch).
- `src/app/sitemap.ts` — add `{ path: Route.ART_RETREATS, changeFrequency: 'monthly', priority: 0.85 }`.
- `src/middleware.ts` — add `'/art-retreats'` to the allowed silo-path list.

> Note: 11 modified files total. `getSiloCardLabel` exhaustiveness, the `SILO_BY_SLUG`
> `Record<SiloSlug, …>`, and the i18n type addition are the compile-time guarantees that
> the wiring is complete.

## 3. Content Outline (`ART_RETREATS_SILO`)

All fields trilingual (EN/NL/DE), matching the tone/length of `photography-workshops.ts`.

- **slug** `ART_RETREATS` · **route** `ART_RETREATS`
- **heroImageSrc / heroImageAlt** — `IMAGES.accommodation.hayHouseSun` (barn as studio).
- **meta.title** — keep the exact primary phrase intact: EN "Art Retreat Venue —
  Overijssel, Netherlands" (do **not** fracture it as "Art & Creative Retreat Venue").
  The broader "& creative" framing lives in the eyebrow, description, and hub card.
- **meta.description** — farm/studio framing, cohort, location anchors; "creative" here.
- **hero**
  - eyebrow — "For artists & creative facilitators"
  - title — "A Barn Studio for Multi-Day Art & Creative Retreats"
  - subtitle — light, space, the farm handling beds/meals so the host can teach.
- **hook**
  - text — studio by day, long table by evening.
  - caption — "Built for cohorts of six to twelve, three to seven days, residential."
- **sections** (3):
  1. **The barn as a working studio** — Hay House: **65 m² of heated wooden floor**,
     dimmable light, sound system, room for a circle of twelve to spread out. Honest on
     the floor: it is a wooden floor, so we lay dust sheets and the messiest / solvent
     work moves to the courtyard or outdoors in good weather. Daylight is generous but
     shifts through the day (not a fixed north-light studio). Image `hayHouseSun`.
  2. **Subjects and inspiration outside the door** — planted woodland, the IJssel,
     Kasteel Nijenhuis sculpture garden, the Salland horizon for plein-air; image
     `kasteelNijenhuis`.
  3. **A long table for the evening share** — critique / show-and-tell, meals handled;
     image `lunchTogether`.
- **facts** (3):
  - `6–12` — cohort size, room for one-to-one feedback.
  - `65 m²` — heated barn studio with dimmable light (replaces a location fact with the
     working-space fact an art organizer actually weighs).
  - `5 min` — to the IJssel and Kasteel Nijenhuis sculpture park (plein-air subjects).
- **faq** (5) — covering the *physical* concerns art organizers actually raise:
  1. **Can we paint indoors with oils, solvents, or fixatives — is there ventilation?**
     Windows and barn doors open for airflow; in good weather the messiest work goes
     outside or to the courtyard. No mechanical extraction — heavy solvent work is an
     outdoor activity here.
  2. **What about the floor and mess — and damage?** It is a heated wooden floor. We
     supply dust sheets / floor covering, ask that solvent and wet-clay work be done on
     covered surfaces or outdoors, and take a refundable damage deposit for art retreats.
  3. **Where do we wash brushes and dispose of solvent waste?** Utility and kitchen
     sinks for water-based clean-up; solvent waste must be collected in your own
     containers and taken away — it cannot go into the farm's septic system.
  4. **Can drying or wet work be stored safely overnight?** Yes — flat and rack space in
     the barn, lockable, though the barn is cool overnight (plan canvas drying around it).
  5. **Do you supply materials, easels, or a kiln?** Bring your own kit. We provide the
     space, long work tables, and storage. **No kiln, printing press, or specialist
     studio equipment** — air-dry / unfired clay only. (Life-drawing models: we don't
     provide them but have local contacts, same as our photography workshops.)
- **finalCta** — title + body asking for dates, cohort size, and medium.
- **organizerSeo**
  - audience — "Artists and creative facilitators running multi-day retreats" (×3 langs).
  - cohortSize — `{ min: 6, max: 12 }`.
  - keywords (×3 langs) — medium-specific primaries (clean, non-cannibalising):
    "art retreat venue Netherlands", "painting retreat venue", "plein air painting
    retreat", "art workshop venue Netherlands", "painting holiday venue", "mixed media
    art retreat venue", "residential art retreat venue", plus "creative retreat venue"
    as a secondary. **Excluded:** "artist residency venue" (wrong search intent — no
    residency program) and "craft retreat venue" (owned by the Writing silo).

## 4. Hub Card Copy (`retreats.cards.artRetreats`)

- **EN** title "Art & creative retreats" · pitch ~ "For painters, makers, and creative
  facilitators. A barn studio with big light, 1.3 hectares of subjects, and a base camp
  that handles the rest."
- **NL / DE** — faithful translations, matching the register of the sibling card pitches.

Hub card image: `IMAGES.accommodation.hayHouseSun` (not used by any other card).

## 5. Testing & Validation

- **Unit/type**: `pnpm lint` + `pnpm test` + `pnpm build` (App Router type-checks routes;
  `getSiloCardLabel` exhaustiveness and the i18n type both fail the build if wiring is
  incomplete).
- **i18n parity**: confirm the three dictionaries stay structurally identical (a test or
  a script check) — no missing key in NL/DE.
- **FE smoke (Playwright/Chrome)**: dev server → `/art-retreats` renders hero, 3 sections,
  facts, FAQ, final CTA; `/host-a-retreat` shows the new card linking correctly; spot-check
  `/nl/art-retreats` and `/de/art-retreats`.
- **SEO**: new route present in `/sitemap.xml`; EventVenue JSON-LD emitted on the silo page.

## 6. Risks

- **Tone drift** across three languages — mitigated by mirroring `photography-workshops.ts`
  sentence-for-sentence in structure and using a native-quality translation pass.
- **Image mismatch** (no art-in-progress photo) — accepted, documented above.
- **Overlap with Writing/Photography silos** — mitigated by the broad-but-distinct
  "making things / visual art" framing and a non-overlapping keyword set.
