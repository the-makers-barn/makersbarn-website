# Art & Creative Retreats Silo — Implementation Plan

**Spec:** `2026-06-08-art-creative-retreats-silo-design.md`
**Branch:** `feature/art-creative-retreats-silo` (worktree)

Ordered so the compiler guides correctness — each step's type errors are resolved by the next.

1. **Types** — `src/types/silo.ts`: add `ART_RETREATS = 'art-retreats'` to `SiloSlug`.
   `src/types/navigation.ts`: add `ART_RETREATS = '/art-retreats'` to `Route`.
2. **i18n type** — `src/i18n/types.ts`: add `artRetreats: { title: string; pitch: string }`
   inside the `retreats.cards` object.
3. **Dictionaries** — add `cards.artRetreats` (title + pitch) to `en.ts`, `nl.ts`, `de.ts`,
   native-quality translations matching sibling register.
4. **Content data** — `src/data/silos/art-retreats.ts`: `ART_RETREATS_SILO: SiloContent`,
   trilingual, per spec §3. Hero/section images: `hayHouseSun`, `kasteelNijenhuis`,
   `lunchTogether`.
5. **Silo barrel** — `src/data/silos/index.ts`: `export { ART_RETREATS_SILO }` + append
   `SILO_HUB_CARDS` entry (slug, route, `hayHouseSun`, trilingual `imageAlt`).
6. **Hub page** — `src/app/[locale]/host-a-retreat/page.tsx`: import + add
   `[SiloSlug.ART_RETREATS]: ART_RETREATS_SILO` to `SILO_BY_SLUG`.
7. **getSiloCardLabel** — `src/lib/structuredData.ts`: add
   `case SiloSlug.ART_RETREATS: return cards.artRetreats`.
8. **Page route** — `src/app/[locale]/art-retreats/page.tsx`: mirror
   `photography-workshops/page.tsx`, swap the constant.
9. **Sitemap** — `src/app/sitemap.ts`: `{ path: Route.ART_RETREATS, changeFrequency: 'monthly', priority: 0.85 }`.
10. **Middleware** — `src/middleware.ts`: add literal `'/art-retreats'` to `knownRoutes`.

## Validation gates
- `pnpm lint` — clean (strict ESLint, no hardcoded-string violations; copy is data, not code).
- `pnpm test` — existing suite green.
- `pnpm build` — App Router typecheck + exhaustive `SiloSlug` switch + `Record<SiloSlug,…>`
  all pass (these are the wiring guarantees).
- **Agent: NL/DE translation review** — native-quality pass on the new copy.
- **FE smoke (Playwright)** — `/art-retreats`, `/host-a-retreat` (card present + links),
  `/nl/art-retreats`, `/de/art-retreats`; `/sitemap.xml` contains the route.
- **Agent: code review** of the final diff before reporting done.

## Notes
- No new component or CSS — `SiloLandingPage` is reused unchanged.
- No `schedule` block (optional; omitted like most siblings).
- Do not commit (per task instruction) unless a genuine blocker arises.
