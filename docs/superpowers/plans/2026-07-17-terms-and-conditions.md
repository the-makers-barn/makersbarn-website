# Terms & Conditions Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish The Makers Barn's rental terms (Algemene Voorwaarden) as an HTML page at `/terms-and-conditions` with a localized footer link.

**Architecture:** A static server-rendered page under `src/app/[locale]/terms-and-conditions/` reads structured content from `src/data/terms/` (Dutch original + English courtesy translation; NL locale → Dutch, EN/DE locales → English with a binding-version disclaimer). A new `Route` enum entry wires the page into the sitemap and the footer bottom bar.

**Tech Stack:** Next.js 15 App Router, TypeScript, CSS Modules with the project's typography CSS variables, vitest.

**Spec:** `docs/superpowers/specs/2026-07-17-terms-and-conditions-design.md`

## Global Constraints

- No hardcoded strings scattered in components — content lives in `src/data/terms/`, route in the `Route` enum, footer labels in the i18n dictionaries.
- pnpm is the package manager; run commands with `pnpm`.
- Path alias `@/*` for all internal imports; group imports builtin → external → internal.
- Max file length ~300 lines → the terms content is split into `nl.ts` and `en.ts` (content-only files may exceed the soft cap; code files must not).
- Commits: no Claude/AI references in commit messages.
- Legal text is transcribed faithfully from the source PDF. Two evident typos in the PDF are corrected: Art. 1.1 "and de contractpartij" → "en de contractpartij"; Art. 4.3 "the toegang" → "de toegang". A stray trailing `"` in Art. 6.6 is dropped.
- The Dutch text is the legally binding version; the English variant opens with a disclaimer stating this.

---

### Task 1: Route enum + sitemap entry

**Files:**
- Modify: `src/types/navigation.ts` (Route enum, after `COACHING_RETREAT_AGENDA_BUILDER`)
- Modify: `src/app/sitemap.ts` (PAGE_ROUTES array)

**Interfaces:**
- Produces: `Route.TERMS_AND_CONDITIONS = '/terms-and-conditions'` — used by Tasks 4 and 5.

- [ ] **Step 1: Add the enum entry**

In `src/types/navigation.ts`, add as the last member of `enum Route`:

```ts
  TERMS_AND_CONDITIONS = '/terms-and-conditions',
```

- [ ] **Step 2: Add the sitemap entry**

In `src/app/sitemap.ts`, append to `PAGE_ROUTES` (after the `COACHING_RETREAT_AGENDA_BUILDER` line):

```ts
  { path: Route.TERMS_AND_CONDITIONS, changeFrequency: 'monthly', priority: 0.3 },
]
```

- [ ] **Step 3: Verify**

Run: `pnpm lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/types/navigation.ts src/app/sitemap.ts
git commit -m "feat(routing): add terms-and-conditions route and sitemap entry"
```

---

### Task 2: Terms content types

**Files:**
- Create: `src/types/terms.ts`
- Modify: `src/types/index.ts` (add barrel export)

**Interfaces:**
- Consumes: `Language` enum from `src/types/common.ts`.
- Produces: `TermsVariant`, `TermsArticle`, `TermsClause`, `TermsDefinition`, `TermsTable`, `TermsCallout`, `TermsIdentityEntry`, `TermsMeta`, `TermsDisclaimer` — used by Tasks 3 and 4.

- [ ] **Step 1: Create `src/types/terms.ts`**

```ts
import { Language } from './common'

export interface TermsIdentityEntry {
  label: string
  value: string
}

export interface TermsDefinition {
  term: string
  description: string
}

export interface TermsClause {
  text: string
  items?: readonly string[]
}

export interface TermsTable {
  columns: readonly [string, string]
  rows: ReadonlyArray<readonly [string, string]>
}

export interface TermsCallout {
  title: string
  body: string
}

export interface TermsArticle {
  title: string
  intro?: string
  definitions?: readonly TermsDefinition[]
  clauses?: readonly TermsClause[]
  table?: TermsTable
  callout?: TermsCallout
}

export interface TermsVariant {
  documentTitle: string
  subtitle: string
  identity: readonly TermsIdentityEntry[]
  introTitle: string
  introParagraphs: readonly string[]
  articles: readonly TermsArticle[]
}

export type TermsLocalizedString = Record<Language, string>

export interface TermsMeta {
  title: TermsLocalizedString
  description: TermsLocalizedString
}

export interface TermsDisclaimer {
  title: string
  body: string
}
```

- [ ] **Step 2: Export from the barrel**

In `src/types/index.ts`, add after `export * from './comparison'`:

```ts
export * from './terms'
```

- [ ] **Step 3: Verify**

Run: `pnpm lint`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/types/terms.ts src/types/index.ts
git commit -m "feat(types): add terms and conditions content types"
```

---

### Task 3: Terms content data (NL original + EN translation)

**Files:**
- Create: `src/data/terms/nl.ts`
- Create: `src/data/terms/en.ts`
- Create: `src/data/terms/index.ts`
- Test: `src/data/terms/terms.test.ts` (colocated `.test.ts` is this repo's pattern; vitest includes `src/**/*.test.ts`)

**Interfaces:**
- Consumes: types from Task 2, `Route` not needed here.
- Produces:
  - `TERMS_META: TermsMeta`
  - `getTermsVariant(locale: Language): TermsVariant` — NL → Dutch variant, EN/DE → English variant
  - `getTermsDisclaimer(locale: Language): TermsDisclaimer | null` — `null` for NL, disclaimer object otherwise

- [ ] **Step 1: Write the failing test `src/data/terms/terms.test.ts`**

```ts
import { describe, expect, it } from 'vitest'

import { Language } from '@/types'

import { TERMS_META, getTermsVariant, getTermsDisclaimer } from './index'

const ARTICLE_COUNT = 11
const KVK_NUMBER = '42017220'

describe('terms content', () => {
  it.each([Language.NL, Language.EN, Language.DE])(
    'variant for %s has all articles and identity data',
    (locale) => {
      const variant = getTermsVariant(locale)
      expect(variant.articles).toHaveLength(ARTICLE_COUNT)
      expect(variant.identity.map((entry) => entry.value)).toContain(KVK_NUMBER)
      expect(variant.introParagraphs.length).toBeGreaterThan(0)
    }
  )

  it('serves the Dutch original on NL and the English translation elsewhere', () => {
    expect(getTermsVariant(Language.NL).documentTitle).toBe(
      'Algemene Voorwaarden Verhuur'
    )
    expect(getTermsVariant(Language.EN).documentTitle).toBe(
      'General Terms and Conditions of Rental'
    )
    expect(getTermsVariant(Language.DE)).toBe(getTermsVariant(Language.EN))
  })

  it('includes the cancellation table and swimming pond callout in both variants', () => {
    for (const locale of [Language.NL, Language.EN]) {
      const variant = getTermsVariant(locale)
      const withTable = variant.articles.filter((article) => article.table)
      const withCallout = variant.articles.filter((article) => article.callout)
      expect(withTable).toHaveLength(1)
      expect(withTable[0].table?.rows).toHaveLength(3)
      expect(withCallout).toHaveLength(1)
    }
  })

  it('provides a binding-version disclaimer for non-NL locales only', () => {
    expect(getTermsDisclaimer(Language.NL)).toBeNull()
    expect(getTermsDisclaimer(Language.EN)?.body).toContain('Dutch')
    expect(getTermsDisclaimer(Language.DE)).toEqual(
      getTermsDisclaimer(Language.EN)
    )
  })

  it('has meta title and description for every locale', () => {
    for (const locale of Object.values(Language)) {
      expect(TERMS_META.title[locale]).toBeTruthy()
      expect(TERMS_META.description[locale]).toBeTruthy()
    }
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `pnpm test -- src/data/terms/terms.test.ts`
Expected: FAIL — cannot resolve `./index`.

- [ ] **Step 3: Create `src/data/terms/nl.ts`** — the Dutch original, transcribed from the PDF:

```ts
import type { TermsVariant } from '@/types'

export const TERMS_NL: TermsVariant = {
  documentTitle: 'Algemene Voorwaarden Verhuur',
  subtitle:
    'The Makers Barn — Algemene voorwaarden voor organisatoren en facilitators',
  identity: [
    { label: 'Locatienaam', value: 'The Makers Barn' },
    { label: 'Beheer', value: 'The Makers Barn B.V.' },
    { label: 'Exploitant', value: 'JambalayaTMB' },
    { label: 'KVK-nummer', value: '42017220' },
    { label: 'Adres', value: 'Duisterendijk 2, 8131RA Wijhe' },
  ],
  introTitle: 'Inleiding & Identiteit',
  introParagraphs: [
    'Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten met betrekking tot de huur en het gebruik van de groepsaccommodatie en het terrein van The Makers Barn. The Makers Barn wordt beheerd door The Makers Barn B.V. en geëxploiteerd door de onderneming JambalayaTMB, gevestigd te Duisterendijk 2, 8131RA Wijhe, ingeschreven in het handelsregister van de Kamer van Koophandel onder nummer 42017220.',
    'Aangezien de locatie in de markt en bij het publiek algemeen bekend staat als "The Makers Barn", worden deze namen in dit document als synoniemen gebruikt. De juridische contractpartij waarmee de overeenkomst wordt gesloten is te allen tijde JambalayaTMB.',
  ],
  articles: [
    {
      title: 'Artikel 1: Toepasselijkheid en Wijziging',
      clauses: [
        {
          text: 'Deze algemene voorwaarden zijn van toepassing op elke offerte, aanbieding en overeenkomst tussen JambalayaTMB (hierna: "The Makers Barn") en de contractpartij die de locatie huurt (hierna: "Contractant").',
        },
        {
          text: 'Deze voorwaarden zijn specifiek van toepassing op Contractanten die de accommodatie huren in hun hoedanigheid van organisator en/of facilitator ten behoeve van een door hen georganiseerde retraite, workshop, training of groepsbijeenkomst.',
        },
        {
          text: 'Bepalingen of voorwaarden gesteld door de Contractant die afwijken van, of niet voorkomen in, deze algemene voorwaarden zijn voor The Makers Barn alleen bindend indien en voor zover deze vooraf uitdrukkelijk en schriftelijk zijn aanvaard.',
        },
        {
          text: 'The Makers Barn behoudt zich het recht voor deze algemene voorwaarden te wijzigen of aan te vullen. Wijzigingen worden schriftelijk of elektronisch aan de Contractant bekendgemaakt.',
        },
        {
          text: 'Wijzigingen treden in werking op de bij de bekendmaking vermelde datum en zijn tevens van toepassing op reeds lopende overeenkomsten. Indien een wijziging een ingrijpende verandering betreft die wezenlijk in het nadeel van de Contractant is, heeft de Contractant het recht de overeenkomst tot de ingangsdatum van de wijziging kosteloos te ontbinden. Deze ontbindingsmogelijkheid geldt niet indien de wijziging rechtstreeks voortvloeit uit dwingende overheidsmaatregelen.',
        },
      ],
    },
    {
      title: 'Artikel 2: Definities',
      intro: 'In deze voorwaarden wordt verstaan onder:',
      definitions: [
        {
          term: 'The Makers Barn / Ondernemer',
          description:
            'JambalayaTMB, gevestigd aan de Duisterendijk 2, 8131RA Wijhe, ingeschreven onder KvK-nummer 42017220.',
        },
        {
          term: 'Contractant',
          description:
            'De natuurlijke persoon of rechtspersoon die de overeenkomst aangaat met The Makers Barn om de locatie te huren ten behoeve van het aanbieden van een eigen programma (als organisator/facilitator).',
        },
        {
          term: 'Groep / Groepsleden',
          description:
            'Het geheel van individuen (deelnemers, gasten, trainers, assistenten en overige door de Contractant toegelaten personen) dat krachtens de overeenkomst het recht heeft op het terrein en in de accommodatie te verblijven.',
        },
        {
          term: 'Accommodatie',
          description:
            'Het totaal aan of een gedeelte van de gebouwen, kamers, voorzieningen, inventaris en het omliggende buitenterrein van The Makers Barn.',
        },
        {
          term: 'Overeengekomen prijs',
          description:
            'De totale vergoeding die verschuldigd is voor de huur van de accommodatie, zoals vastgelegd in de schriftelijke overeenkomst of factuur.',
        },
        {
          term: 'Annulering',
          description:
            'De schriftelijke of elektronische beëindiging van de overeenkomst door de Contractant vóór de ingangsdatum van het verblijf.',
        },
      ],
    },
    {
      title: 'Artikel 3: Optie en Reservering',
      clauses: [
        {
          text: 'Een schriftelijk of per e-mail aangevraagde optie op de accommodatie is maximaal 5 dagen geldig, waarna deze van rechtswege komt te vervallen zonder dat hiervoor een nadere opzegging of herinnering vanuit The Makers Barn vereist is.',
        },
        {
          text: 'De optie wordt pas definitief omgezet in een bindende reservering op het moment dat de aanbetaling van € 250,- (de "reserve the dates"-fee) volledig door The Makers Barn is ontvangen.',
        },
        {
          text: 'Totdat deze eerste aanbetaling is voldaan, behoudt The Makers Barn zich het volledige recht voor om de data vrij te geven voor andere aanvragen indien de betalingstermijn is verstreken.',
        },
      ],
    },
    {
      title: 'Artikel 4: Betalingsvoorwaarden en Termijnen',
      clauses: [
        {
          text: 'De betaling van de overeengekomen prijs geschiedt in vaste termijnen volgens onderstaand schema:',
          items: [
            'Termijn 1 (Direct bij reservering): € 250,- reserveringsfee om de data definitief vast te leggen.',
            'Termijn 2 (3 maanden voor aanvang): Betaling van het overeengekomen basisbedrag.',
            'Termijn 3 (1 week na afloop): Aanvullende betaling c.q. eindafrekening op basis van het werkelijke aantal deelnemers, aanvullende diensten, extra verbruik, eventuele schadecompensatie of extra schoonmaakkosten indien de locatie in een onredelijke staat is achtergelaten.',
          ],
        },
        {
          text: 'Indien de Contractant, ondanks voorafgaande schriftelijke herinnering, zijn betalingsverplichting binnen de gestelde termijn niet nakomt, is deze van rechtswege in verzuim. The Makers Barn heeft dan het recht de overeenkomst met onmiddellijke ingang op te zeggen, waarbij de annuleringsvoorwaarden onverminderd van kracht blijven.',
        },
        {
          text: 'Indien The Makers Barn op de dag van aankomst niet in het bezit is van de tot dan toe opeisbare bedragen (Termijn 1 en Termijn 2), is zij gerechtigd de Contractant en de Groep de toegang tot het terrein te ontzeggen.',
        },
      ],
    },
    {
      title: 'Artikel 5: Annulering en Wijziging door de Contractant',
      clauses: [
        {
          text: 'Annulering van de overeenkomst dient te allen tijde schriftelijk of per e-mail te geschieden.',
        },
        {
          text: 'De initiële aanbetaling van € 250,- ("reserve the dates") is onder geen enkele omstandigheid restitueerbaar en dient ter dekking van de reserverings- en administratiekosten.',
        },
        {
          text: 'Wijzigingsregeling (1 tot 3 maanden voor aanvang): Indien de Contractant de boeking annuleert of wenst te verplaatsen binnen de termijn van 1 tot 3 maanden vóór de geplande ingangsdatum, wordt de eenmalige mogelijkheid geboden om de boeking te verplaatsen naar een andere beschikbare datum binnen 12 maanden na de oorspronkelijke datum. Voor deze eenmalige verplaatsing is een vaste wijzigingsvergoeding (fee) verschuldigd van € 250,- per gereserveerde nacht van het geplande evenement (bijvoorbeeld € 500,- bij een evenement van 2 nachten).',
        },
        {
          text: 'Annulering korter dan één maand voor aanvang: Indien de Contractant de boeking annuleert of verplaatst korter dan 1 maand voor de ingangsdatum, vervalt de mogelijkheid tot verplaatsing en is de Contractant een annuleringsvergoeding verschuldigd van 100% van de overeengekomen basisprijs.',
        },
      ],
      table: {
        columns: [
          'Tijdstip van Annulering / Wijziging',
          'Verschuldigde Vergoeding / Gevolgen',
        ],
        rows: [
          [
            'Direct na boeking (tijdens optie/reservering)',
            'De reserveringsfee van € 250,- wordt behouden en is niet-restitueerbaar.',
          ],
          [
            'Tussen 1 en 3 maanden voor aanvang',
            'Eenmalige verplaatsing van de datum is toegestaan tegen betaling van een vaste fee van € 250,- per gereserveerde nacht.',
          ],
          [
            'Korter dan 1 maand voor aanvang',
            'Geen verplaatsing of restitutie mogelijk. 100% van de overeengekomen basisprijs is verschuldigd.',
          ],
        ],
      },
    },
    {
      title: 'Artikel 6: Gebruik van de Locatie en Faciliteiten',
      clauses: [
        {
          text: 'De faciliteiten en de accommodatie dienen met de grootst mogelijke zorgvuldigheid en volgens eventuele instructies te worden gebruikt. Schade veroorzaakt door onzorgvuldig of oneigenlijk gebruik komt volledig voor rekening van de Contractant.',
        },
        {
          text: 'De Contractant draagt de volledige verantwoordelijkheid voor het gedrag en de acties van alle groepsleden gedurende het gehele verblijf op het terrein.',
        },
        {
          text: 'Faciliteiten: Het terrein van The Makers Barn beschikt over specifieke faciliteiten die ter beschikking staan van de groep, te weten: een sauna, zweethut, vuurplaats, barbecue (BBQ) en een zwemvijver (open water).',
        },
        {
          text: 'Zwemvijver: De zwemvijver is een natuurlijke open waterpartij. Er is geen badmeester of toezicht aanwezig. Het gebruik van de zwemvijver geschiedt geheel en uitsluitend op eigen risico van de Contractant en de Groepsleden.',
        },
        {
          text: 'Beschikbaarheid faciliteiten: The Makers Barn streeft ernaar om alle faciliteiten (waaronder de zwemvijver, sauna, vuurplaats en andere ondersteunende voorzieningen) te allen tijde in een goed werkende en veilige staat aan te bieden. Indien bepaalde ondersteunende faciliteiten door onvoorziene omstandigheden, onderhoud of veiligheidsoverwegingen tijdelijk niet beschikbaar zijn of gesloten moeten worden, behoudt The Makers Barn zich het recht voor deze te sluiten zonder dat dit leidt tot enig recht op restitutie, korting of schadevergoeding voor de Contractant.',
        },
        {
          text: 'Overmacht: The Makers Barn behoudt zich het recht voor om naar aanleiding van extreme weersverwachtingen, overmacht of andere onvoorziene omstandigheden aanpassingen te doen in het programma op het terrein, het gebruik van de faciliteiten, dan wel het evenement in zijn geheel te annuleren. In het geval van een dergelijke annulering is The Makers Barn niet gehouden tot het betalen van enige schadevergoeding of compensatie. In eerste instantie zal worden gezocht naar een passende verplaatsing van het evenement naar een nieuwe datum. Indien verplaatsing onmogelijk blijkt, zal uitsluitend de reeds betaalde huursom worden gerestitueerd, onder aftrek van de eventueel reeds door The Makers Barn gemaakte onkosten.',
        },
      ],
      callout: {
        title: 'Belangrijk voorschrift omtrent de zwemvijver',
        body: 'Indien er kinderen of minderjarigen op het terrein aanwezig zijn, dienen de ouders of wettelijke begeleiders te allen tijde zelf de volledige verantwoordelijkheid en het actieve toezicht te dragen. The Makers Barn sluit elke vorm van aansprakelijkheid voor ongevallen, letsel of verdrinking in of rondom de zwemvijver uit.',
      },
    },
    {
      title: 'Artikel 7: Risicovolle Activiteiten en Verantwoordelijkheid Organisator',
      clauses: [
        {
          text: 'Verhoogd risico: Voor activiteiten met een verhoogd risico die op het terrein of in de faciliteiten van The Makers Barn plaatsvinden – waaronder uitdrukkelijk begrepen, maar niet beperkt tot, het organiseren van een zweethutsessie, intensief ademwerk, ijsbaden of andere ingrijpende fysieke, mentale of spirituele rituelen – is de Contractant verplicht The Makers Barn vooraf volledig in te lichten en hiervoor expliciete goedkeuring te verkrijgen.',
        },
        {
          text: 'Verantwoordelijkheid organisator: De Contractant (in de hoedanigheid van organisator en facilitator) alsmede de specifieke persoon die de activiteit feitelijk leidt of organiseert, draagt de volledige, exclusieve en hoofdelijke verantwoordelijkheid voor een veilige, deskundige en verantwoorde uitvoering hiervan.',
        },
        {
          text: 'Screening en begeleiding: De organisator/facilitator dient te zorgen voor een adequate screening van deelnemers (op eventuele contra-indicaties), professionele en veilige begeleiding gedurende het proces.',
        },
        {
          text: 'Aansprakelijkheid: The Makers Barn stelt uitsluitend de locatie ter beschikking en aanvaardt geen enkele aansprakelijkheid voor fysieke, psychische of materiële schade, letsel of incidenten die voortvloeien uit deze activiteiten. De Contractant vrijwaart The Makers Barn (JambalayaTMB) volledig voor alle aanspraken van derden en groepsleden in dit verband.',
        },
      ],
    },
    {
      title: 'Artikel 8: Verplichtingen Contractant en Huisregels',
      clauses: [
        {
          text: 'De Contractant heeft de strikte verplichting de overeenkomst, de algemene voorwaarden en de specifieke huisregels van The Makers Barn na te leven. Hij draagt er zorg voor dat alle groepsleden en door hem ingeschakelde derden deze eveneens strikt naleven.',
        },
        {
          text: 'De Contractant is gehouden om uiterlijk op de dag van aankomst een nauwkeurige lijst met namen van alle groepsleden en aanwezigen te overhandigen aan The Makers Barn.',
        },
        {
          text: 'Het is de Contractant en groepsleden niet toegestaan om op het terrein rondom de accommodatie ingrijpende wijzigingen aan te brengen zonder voorafgaande schriftelijke toestemming van de Ondernemer.',
        },
        {
          text: 'De Contractant laat de accommodatie en het terrein na afloop van de overeengekomen periode bezemschoon en in de oorspronkelijke staat achter.',
        },
        {
          text: 'Schoonmaakkosten bij gebrekkige oplevering: Indien de accommodatie of het terrein na vertrek niet in de vereiste schone staat wordt achtergelaten en The Makers Barn genoodzaakt is om extra schoonmaakwerkzaamheden te verrichten die meer dan 20 uur in beslag nemen, zullen de volledige kosten van deze extra uren integraal en achteraf op de Contractant (organisator) worden verhaald.',
        },
      ],
    },
    {
      title: 'Artikel 9: Tussentijdse Beëindiging en Ontruiming',
      clauses: [
        {
          text: 'The Makers Barn kan de overeenkomst met onmiddellijke ingang opzeggen en ontruiming van de locatie vorderen indien:',
          items: [
            'De Contractant en/of de groepsleden de verplichtingen uit de overeenkomst, de voorwaarden of de huisregels, ondanks voorafgaande waarschuwing, niet of niet behoorlijk naleven;',
            'De Contractant en/of de groepsleden ernstige overlast bezorgen aan The Makers Barn, omwonenden of de omgeving;',
            'Het gebruik van de accommodatie in strijd is met de bestemming van het terrein.',
          ],
        },
        {
          text: 'Na opzegging dient de Contractant ervoor te zorgen dat de accommodatie onmiddellijk is ontruimd en de Groep het terrein heeft verlaten. De Contractant blijft in dit geval gehouden om de volledige overeengekomen prijs te voldoen, zonder recht op restitutie.',
        },
      ],
    },
    {
      title: 'Artikel 10: Aansprakelijkheid en Overmacht',
      clauses: [
        {
          text: 'Beperking aansprakelijkheid: De wettelijke aansprakelijkheid van JambalayaTMB (The Makers Barn) voor materiële schade of vermogensschade is beperkt tot het wettelijk/verzekeringstechnisch maximum per gebeurtenis waarvoor The Makers Barn adequaat is verzekerd.',
        },
        {
          text: 'The Makers Barn is niet aansprakelijk voor ongeval, diefstal, verlies of schade aan goederen op haar terrein, tenzij dit het rechtstreekse gevolg is van opzet of grove schuld van The Makers Barn.',
        },
        {
          text: 'Overmacht: The Makers Barn is niet aansprakelijk voor de gevolgen van extreme weersinvloeden, storingen in de nutsvoorzieningen buiten haar schuld om, of andere vormen van overmacht, onverminderd het bepaalde in Artikel 6.4.',
        },
        {
          text: 'De Contractant is jegens The Makers Barn volledig en hoofdelijk aansprakelijk voor alle schade die is of wordt veroorzaakt door het doen of nalaten van hemzelf, de groepsleden of door hen genodigde derden.',
        },
      ],
    },
    {
      title: 'Artikel 11: Toepasselijk Recht en Geschillen',
      clauses: [
        {
          text: 'Op alle rechtsbetrekkingen tussen JambalayaTMB (The Makers Barn) en de Contractant is uitsluitend Nederlands recht van toepassing.',
        },
        {
          text: 'Alle geschillen die verband houden met of voortvloeien uit deze overeenkomst zullen in eerste instantie bij uitsluiting worden voorgelegd aan de bevoegde rechter in het arrondissement waarin The Makers Barn is gevestigd.',
        },
      ],
    },
  ],
}
```

- [ ] **Step 4: Create `src/data/terms/en.ts`** — the English courtesy translation:

```ts
import type { TermsDisclaimer, TermsVariant } from '@/types'

export const TERMS_DISCLAIMER_EN: TermsDisclaimer = {
  title: 'Courtesy translation',
  body: 'This English text is a courtesy translation of the original Dutch "Algemene Voorwaarden" of The Makers Barn. In the event of any discrepancy or dispute, the Dutch version is the legally binding text.',
}

export const TERMS_EN: TermsVariant = {
  documentTitle: 'General Terms and Conditions of Rental',
  subtitle:
    'The Makers Barn — General terms and conditions for organisers and facilitators',
  identity: [
    { label: 'Location name', value: 'The Makers Barn' },
    { label: 'Management', value: 'The Makers Barn B.V.' },
    { label: 'Operator', value: 'JambalayaTMB' },
    { label: 'Chamber of Commerce (KvK) number', value: '42017220' },
    { label: 'Address', value: 'Duisterendijk 2, 8131RA Wijhe' },
  ],
  introTitle: 'Introduction & Identity',
  introParagraphs: [
    'These general terms and conditions apply to all agreements relating to the rental and use of the group accommodation and grounds of The Makers Barn. The Makers Barn is managed by The Makers Barn B.V. and operated by the business JambalayaTMB, located at Duisterendijk 2, 8131RA Wijhe, registered in the trade register of the Dutch Chamber of Commerce under number 42017220.',
    'As the location is commonly known in the market and to the public as "The Makers Barn", these names are used interchangeably in this document. The legal contracting party with whom the agreement is concluded is at all times JambalayaTMB.',
  ],
  articles: [
    {
      title: 'Article 1: Applicability and Amendments',
      clauses: [
        {
          text: 'These general terms and conditions apply to every quotation, offer and agreement between JambalayaTMB (hereinafter: "The Makers Barn") and the contracting party renting the location (hereinafter: the "Contractor").',
        },
        {
          text: 'These terms and conditions apply specifically to Contractors who rent the accommodation in their capacity as organiser and/or facilitator for a retreat, workshop, training or group gathering organised by them.',
        },
        {
          text: 'Provisions or conditions set by the Contractor that deviate from, or do not appear in, these general terms and conditions are binding on The Makers Barn only if and insofar as they have been expressly accepted in writing in advance.',
        },
        {
          text: 'The Makers Barn reserves the right to amend or supplement these general terms and conditions. Amendments will be communicated to the Contractor in writing or electronically.',
        },
        {
          text: 'Amendments take effect on the date stated in the notification and also apply to agreements already in progress. If an amendment constitutes a substantial change that is materially to the disadvantage of the Contractor, the Contractor has the right to dissolve the agreement free of charge up to the effective date of the amendment. This right of dissolution does not apply if the amendment arises directly from mandatory government measures.',
        },
      ],
    },
    {
      title: 'Article 2: Definitions',
      intro: 'In these terms and conditions, the following definitions apply:',
      definitions: [
        {
          term: 'The Makers Barn / Operator',
          description:
            'JambalayaTMB, located at Duisterendijk 2, 8131RA Wijhe, registered under Chamber of Commerce (KvK) number 42017220.',
        },
        {
          term: 'Contractor',
          description:
            'The natural person or legal entity entering into the agreement with The Makers Barn to rent the location for the purpose of offering their own programme (as organiser/facilitator).',
        },
        {
          term: 'Group / Group Members',
          description:
            'The entirety of individuals (participants, guests, trainers, assistants and other persons admitted by the Contractor) who, under the agreement, have the right to stay on the grounds and in the accommodation.',
        },
        {
          term: 'Accommodation',
          description:
            'All or part of the buildings, rooms, facilities, inventory and the surrounding outdoor grounds of The Makers Barn.',
        },
        {
          term: 'Agreed price',
          description:
            'The total fee payable for the rental of the accommodation, as recorded in the written agreement or invoice.',
        },
        {
          term: 'Cancellation',
          description:
            'The written or electronic termination of the agreement by the Contractor before the start date of the stay.',
        },
      ],
    },
    {
      title: 'Article 3: Option and Reservation',
      clauses: [
        {
          text: 'An option on the accommodation requested in writing or by e-mail is valid for a maximum of 5 days, after which it lapses by operation of law without any further notice or reminder from The Makers Barn being required.',
        },
        {
          text: 'The option is only definitively converted into a binding reservation once the down payment of € 250 (the "reserve the dates" fee) has been received in full by The Makers Barn.',
        },
        {
          text: 'Until this first down payment has been made, The Makers Barn reserves the full right to release the dates for other requests if the payment term has expired.',
        },
      ],
    },
    {
      title: 'Article 4: Payment Terms and Instalments',
      clauses: [
        {
          text: 'Payment of the agreed price is made in fixed instalments according to the following schedule:',
          items: [
            'Instalment 1 (immediately upon reservation): € 250 reservation fee to definitively secure the dates.',
            'Instalment 2 (3 months before the start): payment of the agreed base amount.',
            'Instalment 3 (1 week after the end): additional payment or final settlement based on the actual number of participants, additional services, extra consumption, any damage compensation or extra cleaning costs if the location has been left in an unreasonable state.',
          ],
        },
        {
          text: 'If the Contractor, despite a prior written reminder, fails to meet their payment obligation within the set term, they are in default by operation of law. The Makers Barn then has the right to terminate the agreement with immediate effect, with the cancellation conditions remaining fully in force.',
        },
        {
          text: 'If, on the day of arrival, The Makers Barn has not received the amounts due up to that point (Instalment 1 and Instalment 2), it is entitled to deny the Contractor and the Group access to the grounds.',
        },
      ],
    },
    {
      title: 'Article 5: Cancellation and Changes by the Contractor',
      clauses: [
        {
          text: 'Cancellation of the agreement must at all times be made in writing or by e-mail.',
        },
        {
          text: 'The initial down payment of € 250 ("reserve the dates") is non-refundable under any circumstances and serves to cover reservation and administration costs.',
        },
        {
          text: 'Change arrangement (1 to 3 months before the start): if the Contractor cancels the booking or wishes to reschedule it within the period of 1 to 3 months before the planned start date, a one-time opportunity is offered to move the booking to another available date within 12 months of the original date. For this one-time rescheduling, a fixed change fee of € 250 per reserved night of the planned event is payable (for example, € 500 for a 2-night event).',
        },
        {
          text: 'Cancellation less than one month before the start: if the Contractor cancels or reschedules the booking less than 1 month before the start date, the option to reschedule lapses and the Contractor owes a cancellation fee of 100% of the agreed base price.',
        },
      ],
      table: {
        columns: [
          'Time of cancellation / change',
          'Fee payable / consequences',
        ],
        rows: [
          [
            'Immediately after booking (during option/reservation)',
            'The reservation fee of € 250 is retained and is non-refundable.',
          ],
          [
            'Between 1 and 3 months before the start',
            'A one-time rescheduling of the date is permitted against payment of a fixed fee of € 250 per reserved night.',
          ],
          [
            'Less than 1 month before the start',
            'No rescheduling or refund possible. 100% of the agreed base price is payable.',
          ],
        ],
      },
    },
    {
      title: 'Article 6: Use of the Location and Facilities',
      clauses: [
        {
          text: 'The facilities and the accommodation must be used with the greatest possible care and in accordance with any instructions. Damage caused by careless or improper use is entirely at the expense of the Contractor.',
        },
        {
          text: 'The Contractor bears full responsibility for the behaviour and actions of all group members throughout the entire stay on the grounds.',
        },
        {
          text: 'Facilities: the grounds of The Makers Barn feature specific facilities available to the group, namely: a sauna, sweat lodge, fire pit, barbecue (BBQ) and a swimming pond (open water).',
        },
        {
          text: 'Swimming pond: the swimming pond is a natural body of open water. There is no lifeguard or supervision present. Use of the swimming pond is entirely and exclusively at the own risk of the Contractor and the Group Members.',
        },
        {
          text: 'Availability of facilities: The Makers Barn strives to offer all facilities (including the swimming pond, sauna, fire pit and other supporting amenities) in good working and safe condition at all times. If certain supporting facilities are temporarily unavailable or must be closed due to unforeseen circumstances, maintenance or safety considerations, The Makers Barn reserves the right to close them without this giving rise to any right to a refund, discount or compensation for the Contractor.',
        },
        {
          text: 'Force majeure: The Makers Barn reserves the right, in response to extreme weather forecasts, force majeure or other unforeseen circumstances, to make adjustments to the programme on the grounds or the use of the facilities, or to cancel the event in its entirety. In the event of such a cancellation, The Makers Barn is not obliged to pay any damages or compensation. In the first instance, a suitable rescheduling of the event to a new date will be sought. If rescheduling proves impossible, only the rent already paid will be refunded, less any expenses already incurred by The Makers Barn.',
        },
      ],
      callout: {
        title: 'Important rule regarding the swimming pond',
        body: 'If children or minors are present on the grounds, the parents or legal guardians must at all times bear full responsibility and provide active supervision themselves. The Makers Barn excludes any form of liability for accidents, injury or drowning in or around the swimming pond.',
      },
    },
    {
      title: "Article 7: High-Risk Activities and the Organiser's Responsibility",
      clauses: [
        {
          text: 'Elevated risk: for activities with an elevated risk taking place on the grounds or in the facilities of The Makers Barn — expressly including, but not limited to, organising a sweat lodge session, intensive breathwork, ice baths or other intense physical, mental or spiritual rituals — the Contractor is obliged to fully inform The Makers Barn in advance and to obtain explicit approval.',
        },
        {
          text: "Organiser's responsibility: the Contractor (in the capacity of organiser and facilitator), as well as the specific person actually leading or organising the activity, bears full, exclusive and joint and several responsibility for its safe, competent and responsible execution.",
        },
        {
          text: 'Screening and guidance: the organiser/facilitator must ensure adequate screening of participants (for any contraindications) and professional, safe guidance throughout the process.',
        },
        {
          text: 'Liability: The Makers Barn merely makes the location available and accepts no liability whatsoever for physical, psychological or material damage, injury or incidents arising from these activities. The Contractor fully indemnifies The Makers Barn (JambalayaTMB) against all claims from third parties and group members in this regard.',
        },
      ],
    },
    {
      title: "Article 8: Contractor's Obligations and House Rules",
      clauses: [
        {
          text: 'The Contractor has the strict obligation to comply with the agreement, the general terms and conditions and the specific house rules of The Makers Barn. The Contractor ensures that all group members and third parties engaged by them also strictly comply with these.',
        },
        {
          text: 'The Contractor is required to provide The Makers Barn, no later than on the day of arrival, with an accurate list of the names of all group members and attendees.',
        },
        {
          text: 'The Contractor and group members are not permitted to make substantial alterations to the grounds surrounding the accommodation without the prior written consent of the Operator.',
        },
        {
          text: 'At the end of the agreed period, the Contractor leaves the accommodation and the grounds broom-clean and in their original state.',
        },
        {
          text: 'Cleaning costs in case of inadequate handover: if the accommodation or the grounds are not left in the required clean state after departure and The Makers Barn is forced to carry out additional cleaning work taking more than 20 hours, the full costs of these additional hours will be recovered in full and retrospectively from the Contractor (organiser).',
        },
      ],
    },
    {
      title: 'Article 9: Early Termination and Eviction',
      clauses: [
        {
          text: 'The Makers Barn may terminate the agreement with immediate effect and demand that the location be vacated if:',
          items: [
            'The Contractor and/or the group members fail to comply, or fail to comply properly, with the obligations under the agreement, the terms and conditions or the house rules, despite a prior warning;',
            'The Contractor and/or the group members cause serious nuisance to The Makers Barn, local residents or the surrounding area;',
            'The use of the accommodation conflicts with the designated purpose of the grounds.',
          ],
        },
        {
          text: 'After termination, the Contractor must ensure that the accommodation is vacated immediately and that the Group has left the grounds. In this case, the Contractor remains obliged to pay the full agreed price, without any right to a refund.',
        },
      ],
    },
    {
      title: 'Article 10: Liability and Force Majeure',
      clauses: [
        {
          text: 'Limitation of liability: the statutory liability of JambalayaTMB (The Makers Barn) for material damage or financial loss is limited to the statutory/insurance-based maximum per event for which The Makers Barn is adequately insured.',
        },
        {
          text: 'The Makers Barn is not liable for accidents, theft, loss of or damage to goods on its grounds, unless this is the direct result of intent or gross negligence on the part of The Makers Barn.',
        },
        {
          text: 'Force majeure: The Makers Barn is not liable for the consequences of extreme weather conditions, failures in utility services beyond its control, or other forms of force majeure, without prejudice to the provisions of Article 6.6.',
        },
        {
          text: 'The Contractor is fully and jointly and severally liable towards The Makers Barn for all damage caused, or yet to be caused, by the acts or omissions of the Contractor, the group members or third parties invited by them.',
        },
      ],
    },
    {
      title: 'Article 11: Applicable Law and Disputes',
      clauses: [
        {
          text: 'All legal relationships between JambalayaTMB (The Makers Barn) and the Contractor are governed exclusively by Dutch law.',
        },
        {
          text: 'All disputes connected with or arising from this agreement will in the first instance be submitted exclusively to the competent court in the district in which The Makers Barn is located.',
        },
      ],
    },
  ],
}
```

Note: the Dutch original's Article 10.3 references "Artikel 6.4", but the force majeure provision it points to is clause 6 of Article 6. The Dutch text is transcribed as-is (faithful transcription); the English translation references Article 6.6 (the actual force majeure clause). If the user prefers, mirror the original's 6.4 — flag during review.

- [ ] **Step 5: Create `src/data/terms/index.ts`**

```ts
import { Language } from '@/types'
import type { TermsDisclaimer, TermsMeta, TermsVariant } from '@/types'

import { TERMS_EN, TERMS_DISCLAIMER_EN } from './en'
import { TERMS_NL } from './nl'

export const TERMS_META: TermsMeta = {
  title: {
    [Language.EN]: 'Terms & Conditions',
    [Language.NL]: 'Algemene Voorwaarden',
    [Language.DE]: 'Allgemeine Geschäftsbedingungen',
  },
  description: {
    [Language.EN]:
      'General terms and conditions for renting The Makers Barn as a retreat, workshop or group venue — reservation, payment, cancellation and house rules.',
    [Language.NL]:
      'Algemene voorwaarden voor de huur van The Makers Barn als retraite-, workshop- of groepslocatie — reservering, betaling, annulering en huisregels.',
    [Language.DE]:
      'Allgemeine Geschäftsbedingungen für die Miete von The Makers Barn als Retreat-, Workshop- oder Gruppenlocation — Reservierung, Zahlung, Stornierung und Hausregeln.',
  },
}

export function getTermsVariant(locale: Language): TermsVariant {
  return locale === Language.NL ? TERMS_NL : TERMS_EN
}

export function getTermsDisclaimer(locale: Language): TermsDisclaimer | null {
  return locale === Language.NL ? null : TERMS_DISCLAIMER_EN
}
```

- [ ] **Step 6: Run the test to verify it passes**

Run: `pnpm test -- src/data/terms/terms.test.ts`
Expected: PASS (5 test cases).

- [ ] **Step 7: Commit**

```bash
git add src/data/terms
git commit -m "feat(terms): add rental terms content in Dutch and English"
```

---

### Task 4: Terms page

**Files:**
- Create: `src/app/[locale]/terms-and-conditions/page.tsx`
- Create: `src/app/[locale]/terms-and-conditions/page.module.css`

**Interfaces:**
- Consumes: `Route.TERMS_AND_CONDITIONS` (Task 1); `TERMS_META`, `getTermsVariant`, `getTermsDisclaimer` (Task 3); existing helpers `generatePageMetadata`, `getValidLocale`, `getLocalizedPath`, `generatePageBreadcrumbs`, `StructuredData`.
- Produces: the rendered page at `/{locale}/terms-and-conditions`.

- [ ] **Step 1: Create `src/app/[locale]/terms-and-conditions/page.tsx`**

```tsx
import type { Metadata } from 'next'

import { StructuredData } from '@/components/server'
import { TERMS_META, getTermsVariant, getTermsDisclaimer } from '@/data/terms'
import { generatePageMetadata } from '@/lib/metadata'
import { getValidLocale } from '@/lib/locale'
import { getLocalizedPath } from '@/lib/routing'
import { generatePageBreadcrumbs } from '@/lib/structuredData'
import { Route } from '@/types'
import type { TermsArticle } from '@/types'

import styles from './page.module.css'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  return generatePageMetadata({
    title: TERMS_META.title[validLocale],
    description: TERMS_META.description[validLocale],
    path: Route.TERMS_AND_CONDITIONS,
    locale: validLocale,
  })
}

function ArticleSection({ article }: { article: TermsArticle }) {
  return (
    <section className={styles.article}>
      <h2 className={styles.articleTitle}>{article.title}</h2>
      {article.intro && <p className={styles.articleIntro}>{article.intro}</p>}
      {article.definitions && (
        <dl className={styles.definitions}>
          {article.definitions.map((definition) => (
            <div key={definition.term} className={styles.definition}>
              <dt className={styles.definitionTerm}>{definition.term}</dt>
              <dd className={styles.definitionDescription}>
                {definition.description}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {article.clauses && (
        <ol className={styles.clauses}>
          {article.clauses.map((clause) => (
            <li key={clause.text} className={styles.clause}>
              {clause.text}
              {clause.items && (
                <ul className={styles.clauseItems}>
                  {clause.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}
      {article.table && (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {article.table.columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {article.table.rows.map(([timing, consequence]) => (
                <tr key={timing}>
                  <td>{timing}</td>
                  <td>{consequence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {article.callout && (
        <aside className={styles.callout}>
          <h3 className={styles.calloutTitle}>{article.callout.title}</h3>
          <p className={styles.calloutBody}>{article.callout.body}</p>
        </aside>
      )}
    </section>
  )
}

export default async function TermsAndConditionsPage({ params }: PageProps) {
  const { locale } = await params
  const validLocale = getValidLocale(locale)
  const terms = getTermsVariant(validLocale)
  const disclaimer = getTermsDisclaimer(validLocale)
  const breadcrumb = generatePageBreadcrumbs({
    name: TERMS_META.title[validLocale],
    path: getLocalizedPath(Route.TERMS_AND_CONDITIONS, validLocale),
  })

  return (
    <main className={styles.page}>
      <StructuredData data={[breadcrumb]} />
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.title}>{terms.documentTitle}</h1>
          <p className={styles.subtitle}>{terms.subtitle}</p>
        </div>
      </header>
      <div className={styles.body}>
        {disclaimer && (
          <aside className={styles.disclaimer}>
            <h2 className={styles.disclaimerTitle}>{disclaimer.title}</h2>
            <p className={styles.disclaimerBody}>{disclaimer.body}</p>
          </aside>
        )}
        <dl className={styles.identity}>
          {terms.identity.map((entry) => (
            <div key={entry.label} className={styles.identityRow}>
              <dt className={styles.identityLabel}>{entry.label}</dt>
              <dd className={styles.identityValue}>{entry.value}</dd>
            </div>
          ))}
        </dl>
        <section className={styles.article}>
          <h2 className={styles.articleTitle}>{terms.introTitle}</h2>
          {terms.introParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
        {terms.articles.map((article) => (
          <ArticleSection key={article.title} article={article} />
        ))}
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Create `src/app/[locale]/terms-and-conditions/page.module.css`**

```css
.page {
  background-color: #f8f4ec;
  color: var(--color-text);
}

.hero {
  padding: 5rem 1.5rem 3rem;
  background-color: var(--color-primary);
}

.heroInner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.title {
  margin: 0 0 0.75rem;
  font-family: var(--font-playfair);
  font-size: var(--font-size-4xl);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text-inverse);
}

.subtitle {
  margin: 0;
  font-size: var(--font-size-md);
  line-height: var(--line-height-snug);
  color: var(--color-text-inverse-muted);
}

.body {
  max-width: 760px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
}

.disclaimer {
  margin-bottom: 2.5rem;
  padding: 1.25rem 1.5rem;
  border-left: 3px solid var(--color-secondary);
  background-color: rgba(184, 137, 74, 0.08);
  border-radius: 0 8px 8px 0;
}

.disclaimerTitle {
  margin: 0 0 0.5rem;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-secondary);
}

.disclaimerBody {
  margin: 0;
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-muted);
}

.identity {
  margin: 0 0 3rem;
  padding: 1.5rem;
  border-left: 3px solid var(--color-primary);
  background-color: rgba(41, 75, 58, 0.06);
  border-radius: 0 8px 8px 0;
}

.identityRow {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.25rem 0;
}

.identityLabel {
  min-width: 11rem;
  font-weight: 600;
  color: var(--color-primary);
}

.identityValue {
  margin: 0;
  color: var(--color-text-muted);
}

.article {
  margin-bottom: 3rem;
}

.articleTitle {
  margin: 0 0 1.25rem;
  font-family: var(--font-playfair);
  font-size: var(--font-size-xl);
  line-height: var(--line-height-tight);
  color: var(--color-primary);
}

.articleIntro,
.paragraph {
  margin: 0 0 1rem;
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-muted);
}

.definitions {
  margin: 0;
}

.definition {
  margin-bottom: 1rem;
}

.definitionTerm {
  font-weight: 600;
  color: var(--color-text);
}

.definitionDescription {
  margin: 0.25rem 0 0;
  line-height: var(--line-height-relaxed);
  color: var(--color-text-muted);
}

.clauses {
  margin: 0;
  padding-left: 1.5rem;
}

.clause {
  margin-bottom: 1rem;
  line-height: var(--line-height-relaxed);
  color: var(--color-text-muted);
}

.clause::marker {
  font-weight: 600;
  color: var(--color-primary);
}

.clauseItems {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
}

.clauseItems li {
  margin-bottom: 0.5rem;
}

.tableWrapper {
  margin-top: 1.5rem;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.table th {
  padding: 0.75rem 1rem;
  text-align: left;
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  font-weight: 600;
}

.table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(41, 75, 58, 0.15);
  color: var(--color-text-muted);
  line-height: var(--line-height-snug);
  vertical-align: top;
}

.callout {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  border-left: 3px solid var(--color-text-error);
  background-color: rgba(220, 38, 38, 0.06);
  border-radius: 0 8px 8px 0;
}

.calloutTitle {
  margin: 0 0 0.5rem;
  font-family: var(--font-quicksand);
  font-size: var(--font-size-sm);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-text-error);
}

.calloutBody {
  margin: 0;
  line-height: var(--line-height-relaxed);
  color: var(--color-text-muted);
}
```

- [ ] **Step 3: Verify the page renders**

Run: `pnpm dev` and open `http://localhost:3000/nl/terms-and-conditions` (Dutch, no disclaimer), `http://localhost:3000/en/terms-and-conditions` and `http://localhost:3000/de/terms-and-conditions` (English with disclaimer). Then stop the dev server.
Expected: hero title, identity block, intro, 11 articles, cancellation table under Article 5, red swimming-pond callout under Article 6.

- [ ] **Step 4: Lint**

Run: `pnpm lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add "src/app/[locale]/terms-and-conditions"
git commit -m "feat(terms): add terms and conditions page"
```

---

### Task 5: Footer link

**Files:**
- Modify: `src/i18n/types.ts` (`FooterTranslations`, line ~86)
- Modify: `src/i18n/dictionaries/en.ts`, `src/i18n/dictionaries/nl.ts`, `src/i18n/dictionaries/de.ts` (`footer` sections, line ~226/229)
- Modify: `src/components/server/Footer/Footer.tsx` (bottom bar, line ~164)
- Modify: `src/components/server/Footer/Footer.module.css` (`.bottom`, line ~197)

**Interfaces:**
- Consumes: `Route.TERMS_AND_CONDITIONS` (Task 1), existing `getLocalizedPath`, `t.footer`.
- Produces: `t.footer.termsAndConditions` dictionary key.

- [ ] **Step 1: Extend `FooterTranslations`**

In `src/i18n/types.ts`, add to `FooterTranslations`:

```ts
  termsAndConditions: string
```

- [ ] **Step 2: Add the key to all three dictionaries**

`src/i18n/dictionaries/en.ts` footer section:

```ts
    termsAndConditions: 'Terms & Conditions',
```

`src/i18n/dictionaries/nl.ts` footer section:

```ts
    termsAndConditions: 'Algemene voorwaarden',
```

`src/i18n/dictionaries/de.ts` footer section:

```ts
    termsAndConditions: 'AGB',
```

- [ ] **Step 3: Render the link in the footer bottom bar**

In `src/components/server/Footer/Footer.tsx`, replace:

```tsx
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>
```

with:

```tsx
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {t.footer.copyright}
          </p>
          <Link
            href={getLocalizedPath(Route.TERMS_AND_CONDITIONS, language)}
            className={styles.legalLink}
          >
            {t.footer.termsAndConditions}
          </Link>
        </div>
```

- [ ] **Step 4: Style the bottom bar**

In `src/components/server/Footer/Footer.module.css`, replace the `.bottom` rule:

```css
.bottom {
  border-top: 1px solid rgba(247, 243, 238, 0.18);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .bottom {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
}
```

and add after `.copyright`:

```css
.legalLink {
  font-size: var(--font-size-sm);
  color: var(--color-text-inverse-muted);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.legalLink:hover {
  color: var(--color-text-inverse);
}
```

- [ ] **Step 5: Verify**

Run: `pnpm lint`
Expected: no errors (missing dictionary keys would fail the `Dictionary` type check via lint/tsc).

Run: `pnpm dev`, check the footer on `http://localhost:3000/en`, `/nl`, `/de` — link label per locale, navigates to the localized terms page. Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add src/i18n/types.ts src/i18n/dictionaries/en.ts src/i18n/dictionaries/nl.ts src/i18n/dictionaries/de.ts src/components/server/Footer/Footer.tsx src/components/server/Footer/Footer.module.css
git commit -m "feat(footer): link terms and conditions from footer bottom bar"
```

---

### Task 6: Full validation

**Files:** none (verification only)

- [ ] **Step 1: Run the full test suite**

Run: `pnpm test`
Expected: all tests pass, including `src/data/terms/terms.test.ts`.

- [ ] **Step 2: Lint**

Run: `pnpm lint`
Expected: no errors.

- [ ] **Step 3: Production build**

Run: `pnpm build`
Expected: build succeeds; `/[locale]/terms-and-conditions` appears in the route list.

- [ ] **Step 4: Commit any stragglers**

```bash
git status
```

Expected: clean working tree (all work already committed in Tasks 1–5).
