import { Language } from '@/types/common'
import type { LocalizedString } from '@/types/tools'

/**
 * The 25-question retreat-mistakes audit. Each question maps to a researched
 * mistake category (see commit message / research notes). Weights stay 0–2:
 *   0 = green (no risk signal)
 *   1 = amber (worth flagging)
 *   2 = red   (high-risk pattern from the research)
 *
 * Some questions carry a `multiplier` > 1 because the underlying mistake is
 * disproportionately catastrophic in the literature (e.g. pricing for max
 * capacity, no liability paperwork, no warm audience). The multiplier is
 * applied once to the chosen option's weight at scoring time.
 */

export enum AuditCategory {
  PRICING = 'pricing',
  AUDIENCE = 'audience',
  VENUE = 'venue',
  PROGRAMME = 'programme',
  LEGAL = 'legal',
  FIT = 'fit',
}

export const AUDIT_CATEGORIES_ORDER: readonly AuditCategory[] = [
  AuditCategory.PRICING,
  AuditCategory.AUDIENCE,
  AuditCategory.VENUE,
  AuditCategory.PROGRAMME,
  AuditCategory.LEGAL,
  AuditCategory.FIT,
] as const

export const AUDIT_CATEGORY_LABELS: Record<AuditCategory, LocalizedString> = {
  [AuditCategory.PRICING]: {
    [Language.EN]: 'Pricing & money',
    [Language.NL]: 'Prijs & geld',
    [Language.DE]: 'Preis & Geld',
  },
  [AuditCategory.AUDIENCE]: {
    [Language.EN]: 'Audience & marketing',
    [Language.NL]: 'Publiek & marketing',
    [Language.DE]: 'Publikum & Marketing',
  },
  [AuditCategory.VENUE]: {
    [Language.EN]: 'Venue & contracts',
    [Language.NL]: 'Locatie & contracten',
    [Language.DE]: 'Location & Verträge',
  },
  [AuditCategory.PROGRAMME]: {
    [Language.EN]: 'Programme & schedule',
    [Language.NL]: 'Programma & schema',
    [Language.DE]: 'Programm & Ablauf',
  },
  [AuditCategory.LEGAL]: {
    [Language.EN]: 'Legal & risk',
    [Language.NL]: 'Juridisch & risico',
    [Language.DE]: 'Recht & Risiko',
  },
  [AuditCategory.FIT]: {
    [Language.EN]: 'Audience fit & screening',
    [Language.NL]: 'Doelgroep-fit & screening',
    [Language.DE]: 'Zielgruppen-Fit & Screening',
  },
}

export interface AuditOption {
  id: string
  label: LocalizedString
  weight: 0 | 1 | 2
}

export interface AuditQuestion {
  id: string
  category: AuditCategory
  prompt: LocalizedString
  /** Why this is a mistake — shown in the report when the user picks a risky option. */
  fix: LocalizedString
  options: readonly AuditOption[]
  /** Multiplier applied to the chosen option's weight (default 1). */
  multiplier?: 1 | 2 | 3
  /** Optional cross-link to an existing tool when this mistake is flagged. */
  crossLinkToolKey?: 'pricing' | 'profitability' | 'calendar' | 'host'
}

const en = (s: string): LocalizedString => ({
  [Language.EN]: s,
  [Language.NL]: s,
  [Language.DE]: s,
})

const yes: AuditOption = { id: 'yes', label: en('Yes'), weight: 0 }
const no: AuditOption = { id: 'no', label: en('No'), weight: 2 }
const partly: AuditOption = { id: 'partly', label: en('Roughly / not in writing'), weight: 1 }

export const AUDIT_QUESTIONS: readonly AuditQuestion[] = [
  // ── PRICING ────────────────────────────────────────────────────────────────
  {
    id: 'p1-priced-from-fear',
    category: AuditCategory.PRICING,
    multiplier: 2,
    prompt: en("How did you decide your ticket price?"),
    fix: en(
      'Pricing from fear is the #1 reason retreats break even or lose money. Build the price up from real costs (your time, hidden fees, payment processing, taxes) plus the margin you actually need to live.',
    ),
    crossLinkToolKey: 'pricing',
    options: [
      { id: 'cost-plus', label: en('Built up from real costs + the margin I need'), weight: 0 },
      { id: 'matched', label: en("I matched what other hosts charge"), weight: 1 },
      { id: 'gut', label: en('What I think people will pay'), weight: 2 },
      { id: 'undecided', label: en("Not sure yet"), weight: 2 },
    ],
  },
  {
    id: 'p2-breakeven-basis',
    category: AuditCategory.PRICING,
    multiplier: 2,
    prompt: en('At what occupancy does your retreat break even?'),
    fix: en(
      'Most successful hosts price so the retreat breaks even at ~50% capacity. Pricing for "fully sold out" is the single most common path to losing money.',
    ),
    crossLinkToolKey: 'profitability',
    options: [
      { id: 'half', label: en('At ~50% full or below'), weight: 0 },
      { id: 'twothirds', label: en('At ~70% full'), weight: 1 },
      { id: 'sellout', label: en('Only when fully sold out'), weight: 2 },
      { id: 'unknown', label: en("I haven't calculated this"), weight: 2 },
    ],
  },
  {
    id: 'p3-buffer',
    category: AuditCategory.PRICING,
    prompt: en('Did you add a 10–20% buffer for hidden costs?'),
    fix: en(
      'Transaction fees, gratuities, exchange rates, last-minute supply runs, staff tips — these eat 10–20% of an unbuffered budget. Bake the buffer into the price, not your savings.',
    ),
    options: [yes, partly, no],
  },
  {
    id: 'p4-pay-yourself',
    category: AuditCategory.PRICING,
    multiplier: 2,
    prompt: en('Is your own time and travel a budget line item?'),
    fix: en(
      'Hosting is a generous act, but it should not be free. Most under-earning hosts forgot to pay themselves and forgot to include their own flights and lodging.',
    ),
    options: [
      { id: 'yes-paid', label: en('Yes, with a day rate'), weight: 0 },
      { id: 'travel-only', label: en('Travel only'), weight: 1 },
      { id: 'no', label: en('No, I take what is left over'), weight: 2 },
    ],
  },
  {
    id: 'p5-deposits',
    category: AuditCategory.PRICING,
    prompt: en('Do you collect non-refundable deposits before holding a venue?'),
    fix: en(
      'Putting down a 5,000+ euro venue deposit before any guest has paid is how hosts end up personally underwriting their own retreat. Get 3–4 deposits in first.',
    ),
    options: [yes, partly, no],
  },

  // ── AUDIENCE & MARKETING ───────────────────────────────────────────────────
  {
    id: 'a1-warm-list',
    category: AuditCategory.AUDIENCE,
    multiplier: 2,
    prompt: en('How big is the warm list (email + DMs) you can promote to?'),
    fix: en(
      'Retreats are a high-trust, high-ticket sale. Without a warm list you trust, you are cold-selling a 2,000-euro ticket. Build the list before you build the retreat.',
    ),
    crossLinkToolKey: 'host',
    options: [
      { id: 'large', label: en('500+ engaged contacts'), weight: 0 },
      { id: 'medium', label: en('100–500 contacts'), weight: 1 },
      { id: 'small', label: en('Under 100, mostly social followers'), weight: 2 },
      { id: 'none', label: en('No real list yet'), weight: 2 },
    ],
  },
  {
    id: 'a2-runway',
    category: AuditCategory.AUDIENCE,
    multiplier: 2,
    prompt: en('How many months before the retreat does promotion begin?'),
    fix: en(
      'Six weeks is too late: most hosts who marketed late report half-empty rooms. Plan for at least 4–6 months of marketing runway.',
    ),
    crossLinkToolKey: 'calendar',
    options: [
      { id: 'long', label: en('6+ months'), weight: 0 },
      { id: 'medium', label: en('3–5 months'), weight: 1 },
      { id: 'short', label: en('Under 3 months'), weight: 2 },
    ],
  },
  {
    id: 'a3-copy-shape',
    category: AuditCategory.AUDIENCE,
    prompt: en('Does your hero copy lead with transformation or with logistics?'),
    fix: en(
      '"Come back to yourself" outsells "3 nights, 4 days in Costa Rica". Lead with the change in the guest, not the itinerary.',
    ),
    options: [
      { id: 'transform', label: en('Transformation first'), weight: 0 },
      { id: 'mixed', label: en('A mix'), weight: 1 },
      { id: 'logistics', label: en('Mostly dates, location, what is included'), weight: 2 },
    ],
  },
  {
    id: 'a4-channel-mix',
    category: AuditCategory.AUDIENCE,
    prompt: en('Are you using more than one promotion channel?'),
    fix: en(
      'Email-only or Instagram-only retreats stall at half capacity. Combine email + social + in-person word of mouth + at least one partner channel.',
    ),
    options: [
      { id: 'multi', label: en('Three or more channels'), weight: 0 },
      { id: 'two', label: en('Two channels'), weight: 1 },
      { id: 'one', label: en('Just one'), weight: 2 },
    ],
  },

  // ── VENUE & CONTRACTS ──────────────────────────────────────────────────────
  {
    id: 'v1-visited',
    category: AuditCategory.VENUE,
    multiplier: 2,
    prompt: en('Have you visited the venue in person, or stayed there?'),
    fix: en(
      'Photos lie. Steep unpaved access roads, undersized practice rooms, kitchen capacity, noise — none of these show up on Instagram. Visit before you sign.',
    ),
    options: [
      { id: 'stayed', label: en('Stayed at least one night'), weight: 0 },
      { id: 'visited', label: en('Day visit only'), weight: 1 },
      { id: 'photos', label: en('Photos and a video call'), weight: 2 },
    ],
  },
  {
    id: 'v2-contract',
    category: AuditCategory.VENUE,
    prompt: en('Are all promises (capacity, food, staff, equipment) in the contract?'),
    fix: en(
      'If it is not in the contract, it does not exist. Push back and get every promise in writing before you sign — this is the most common venue regret.',
    ),
    options: [yes, partly, no],
  },
  {
    id: 'v3-deposit-size',
    category: AuditCategory.VENUE,
    prompt: en('What deposit is the venue asking for?'),
    fix: en(
      'A normal deposit is 25–50%. Above 50% is a red flag — either the venue is over-leveraged or your contract is unbalanced.',
    ),
    options: [
      { id: 'normal', label: en('25–50%'), weight: 0 },
      { id: 'high', label: en('Above 50%'), weight: 1 },
      { id: 'very-high', label: en('Above 75% or full prepayment'), weight: 2 },
    ],
  },
  {
    id: 'v4-fees-itemised',
    category: AuditCategory.VENUE,
    prompt: en('Are cleaning, gratuities, taxes, and surcharges itemised in writing?'),
    fix: en(
      "À la carte venues are where hidden fees live. Demand a line-itemised quote — sales tax, gratuities, cleaning, transfers, late check-out — before signing.",
    ),
    options: [yes, partly, no],
  },

  // ── PROGRAMME & SCHEDULE ───────────────────────────────────────────────────
  {
    id: 'pr1-density',
    category: AuditCategory.PROGRAMME,
    prompt: en('Roughly how much of each day is structured activity?'),
    fix: en(
      'Research-backed retreats sit around 60% structured / 40% unstructured. Above 80% structured leads to attendee burnout — the very thing they came to escape.',
    ),
    options: [
      { id: 'balanced', label: en('Around 60% — there is real downtime'), weight: 0 },
      { id: 'busy', label: en('Around 75–80%'), weight: 1 },
      { id: 'packed', label: en('Above 80% — every slot is filled'), weight: 2 },
    ],
  },
  {
    id: 'pr2-host-doing-logistics',
    category: AuditCategory.PROGRAMME,
    prompt: en('Will the lead facilitator also be running on-site logistics?'),
    fix: en(
      'When the facilitator runs the schedule, transfers, dietary changes, and the WhatsApp group at the same time, the practice quality drops. Have a logistics buddy on site.',
    ),
    options: [
      { id: 'separate', label: en('No, a logistics buddy is on site'), weight: 0 },
      { id: 'mostly', label: en('Mostly separate, but I cover gaps'), weight: 1 },
      { id: 'solo', label: en('Yes, I am doing both'), weight: 2 },
    ],
  },
  {
    id: 'pr3-outcomes-promised',
    category: AuditCategory.PROGRAMME,
    prompt: en('How many transformation outcomes does your sales page promise?'),
    fix: en(
      'Promising "more money + best-shape body + better relationships + spiritual awakening" reads as disjointed. Pick one transformation and own it.',
    ),
    options: [
      { id: 'one', label: en('One clear outcome'), weight: 0 },
      { id: 'two', label: en('Two related outcomes'), weight: 1 },
      { id: 'many', label: en('Three or more'), weight: 2 },
    ],
  },
  {
    id: 'pr4-backup-plan',
    category: AuditCategory.PROGRAMME,
    prompt: en('Is there a written plan for bad weather, illness, or a no-show facilitator?'),
    fix: en(
      'A 5-line plan B per scenario (rain, illness, transfers, kitchen issue) is the difference between a story you laugh about and a refund situation.',
    ),
    options: [yes, partly, no],
  },

  // ── LEGAL & RISK ───────────────────────────────────────────────────────────
  {
    id: 'l1-insurance',
    category: AuditCategory.LEGAL,
    multiplier: 2,
    prompt: en('Do you carry your own retreat liability insurance?'),
    fix: en(
      "Assuming the venue's insurance covers you is the most common legal mistake. Their policy covers them. Get your own general liability + professional liability cover.",
    ),
    options: [
      { id: 'own', label: en('Yes, my own policy'), weight: 0 },
      { id: 'venue', label: en("I'm relying on the venue's"), weight: 2 },
      { id: 'none', label: en('No coverage in place'), weight: 2 },
    ],
  },
  {
    id: 'l2-waivers',
    category: AuditCategory.LEGAL,
    multiplier: 2,
    prompt: en('Will guests sign a full liability + assumption-of-risk form?'),
    fix: en(
      'A short waiver is not a legal form. Use a full assumption-of-risk + release tailored to retreat activities, signed before arrival.',
    ),
    options: [
      { id: 'full', label: en('Full legal form, signed pre-arrival'), weight: 0 },
      { id: 'short', label: en('A short waiver'), weight: 1 },
      { id: 'none', label: en("None planned"), weight: 2 },
    ],
  },
  {
    id: 'l3-cancellation',
    category: AuditCategory.LEGAL,
    prompt: en('Is your cancellation policy tiered (e.g. > 90 days vs < 30 days)?'),
    fix: en(
      'A flat "no refunds" or "100% refund up to start" policy will lose disputes and goodwill. A tiered policy is industry standard and easier to defend.',
    ),
    options: [
      { id: 'tiered', label: en('Yes, multiple tiers'), weight: 0 },
      { id: 'flat', label: en('Flat policy'), weight: 1 },
      { id: 'none', label: en('No written policy'), weight: 2 },
    ],
  },
  {
    id: 'l4-travel-insurance',
    category: AuditCategory.LEGAL,
    prompt: en('Do you require or strongly recommend travel insurance?'),
    fix: en(
      "Medical, family-emergency, and trip-cancellation insurance is what protects guests when life intervenes. Make it a booking requirement, not a footnote.",
    ),
    options: [
      { id: 'required', label: en('Required'), weight: 0 },
      { id: 'recommended', label: en('Recommended'), weight: 1 },
      { id: 'silent', label: en("Not mentioned"), weight: 2 },
    ],
  },

  // ── FIT & SCREENING ────────────────────────────────────────────────────────
  {
    id: 'f1-who-its-for',
    category: AuditCategory.FIT,
    prompt: en("Can you describe who this retreat is for in one sentence?"),
    fix: en(
      "Retreats that try to please everyone please no one. \"For burnt-out 35-50 yr-old founders\" outsells \"for anyone seeking peace\" every time.",
    ),
    options: [
      { id: 'sharp', label: en('Yes — a single, sharp sentence'), weight: 0 },
      { id: 'fuzzy', label: en("Roughly, but it's a bit broad"), weight: 1 },
      { id: 'none', label: en("Not really"), weight: 2 },
    ],
  },
  {
    id: 'f2-screening',
    category: AuditCategory.FIT,
    prompt: en('Is there a screening step (intake form or call) before payment?'),
    fix: en(
      'Unscreened groups end up with one or two participants in acute crisis who absorb attention from everyone else. A short intake form filters fit, allergies, and red flags.',
    ),
    options: [
      { id: 'call', label: en('Intake call for every guest'), weight: 0 },
      { id: 'form', label: en('Intake form only'), weight: 1 },
      { id: 'none', label: en('Open booking, no screening'), weight: 2 },
    ],
  },
  {
    id: 'f3-power-mix',
    category: AuditCategory.FIT,
    prompt: en("Are you mixing groups with strong power or skill differences (e.g. boss + reports, beginners + 20-year practitioners)?"),
    fix: en(
      'Mixed-power rooms suppress the very vulnerability the retreat is selling. If you must mix, structure for it (sub-groups, ground rules, optional sessions).',
    ),
    options: [
      { id: 'no', label: en('No, the group is fairly homogenous'), weight: 0 },
      { id: 'structured', label: en('Yes, but the format accounts for it'), weight: 1 },
      { id: 'unstructured', label: en('Yes, and the format does not address it'), weight: 2 },
    ],
  },
  {
    id: 'f4-on-call-care',
    category: AuditCategory.FIT,
    prompt: en('Is there a clear support pathway if a guest has a wellbeing crisis on retreat?'),
    fix: en(
      'You will have one. Plan for it: a named on-call person, a quiet room, the local emergency number, the policy on early departure refunds.',
    ),
    options: [yes, partly, no],
  },
] as const

export const AUDIT_QUESTIONS_BY_CATEGORY: Record<
  AuditCategory,
  readonly AuditQuestion[]
> = AUDIT_CATEGORIES_ORDER.reduce(
  (acc, category) => {
    acc[category] = AUDIT_QUESTIONS.filter((q) => q.category === category)
    return acc
  },
  {} as Record<AuditCategory, readonly AuditQuestion[]>,
)

export interface CategoryRiskBand {
  min: number
  max: number
  band: 'green' | 'amber' | 'red'
}

/**
 * Risk bands as a fraction of the category's max possible weighted score.
 * Used to colour each category card on the result page.
 */
export const CATEGORY_RISK_BANDS: readonly CategoryRiskBand[] = [
  { min: 0, max: 0.2, band: 'green' },
  { min: 0.2, max: 0.5, band: 'amber' },
  { min: 0.5, max: 1, band: 'red' },
] as const
