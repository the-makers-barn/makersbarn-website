import {
  ChefStatus,
  DayRateUnit,
  DietaryCapability,
  NlRegion,
  PriceTier,
  RetreatType,
} from '@/constants/chef'
import { asIsoDateString, Language } from '@/types'
import type { Chef } from '@/types'

export const SUZANNE_VAN_DEN_HEUVEL_CHEF: Chef = {
  slug: 'suzanne-van-den-heuvel',
  status: ChefStatus.DRAFT, // Flip to PUBLISHED only after the chef has approved the page.
  primaryLanguage: Language.NL,
  inquiryEmail: 'suzanne@studiogember.nl', // Confirmed on studiogember.nl/contact (decoded from Cloudflare email obfuscation).
  updatedAt: asIsoDateString('2026-05-01'),

  name: 'Suzanne van den Heuvel',
  avatar: {
    src: '/images/chefs/suzanne-van-den-heuvel/avatar.jpg',
    altKey: 'chef.suzanne-van-den-heuvel.avatar',
  },
  tagline: {
    [Language.EN]: 'Vegetarian natural cuisine for retreats — at home in silence and meditative presence',
    [Language.NL]: 'Vegetarische natuurkeuken voor retraites — thuis in stilte en meditatieve aanwezigheid',
  },
  homeBase: { city: 'Odiliapeel', region: NlRegion.NOORD_BRABANT },
  servesRegions: [NlRegion.NOORD_BRABANT], // TODO_FROM_CHEF: confirm additional regions; site states "Studio Gember komt naar je toe!" (comes to you) without listing specific regions.
  travelsNationwide: true, // Site copy: "Studio Gember komt naar je toe! Op verzoek op locatie voor catering en workshops" — TODO_FROM_CHEF: confirm.
  groupSize: { min: 1, max: 1 }, // TODO_FROM_CHEF: site does not publish min/max group size. Placeholder values; chef must supply real range.
  languagesSpoken: [Language.NL], // TODO_FROM_CHEF: only Dutch confirmed by site copy; chef to confirm EN/DE.
  yearsExperience: 0, // TODO_FROM_CHEF: site mentions burn-out in 1999 as start of bewustwording-pad, no explicit chef-years count. Chef to supply.

  rightFor: [RetreatType.MEDITATION, RetreatType.YOGA, RetreatType.WELLNESS],
  // RetreatType.MEDITATION justified verbatim: "Vanuit mijn eigen beoefening voel ik mij als een vis in het water op
  // plekken waar stilte en meditatieve aanwezigheid dragend zijn." Yoga/Wellness inferred from partner business (yogamood,
  // mind-workZ — meditatie/retraites) — TODO_FROM_CHEF: confirm yoga & wellness fit.
  cuisineStyles: [
    { [Language.EN]: 'Vegetarian natural cuisine', [Language.NL]: 'Vegetarische natuurkeuken' },
    { [Language.EN]: 'Vegan on request', [Language.NL]: 'Op verzoek veganistisch' },
    { [Language.EN]: 'Mindful, plant-protein-forward', [Language.NL]: 'Mindful, plantaardige eiwitten' },
  ],
  dietaryCapabilities: [
    DietaryCapability.VEGETARIAN,
    DietaryCapability.VEGAN,
    // TODO_FROM_CHEF: chef to confirm gluten-free / dairy-free / allergy-aware capability — not stated on site.
  ],
  dayRate: {
    amountEur: 0, // TODO_FROM_CHEF: site does not publish day rate. Placeholder; chef must supply.
    unit: DayRateUnit.PER_PERSON_PER_DAY,
    tier: PriceTier.STANDARD, // TODO_FROM_CHEF: tier guess pending chef confirmation.
  },

  gallery: {
    hero: {
      src: '/images/chefs/suzanne-van-den-heuvel/hero.jpg',
      altKey: 'chef.suzanne-van-den-heuvel.hero',
    },
    supporting: [
      { src: '/images/chefs/suzanne-van-den-heuvel/gallery-1.jpg', altKey: 'chef.suzanne-van-den-heuvel.gallery-1' },
      { src: '/images/chefs/suzanne-van-den-heuvel/gallery-2.jpg', altKey: 'chef.suzanne-van-den-heuvel.gallery-2' },
      { src: '/images/chefs/suzanne-van-den-heuvel/gallery-3.jpg', altKey: 'chef.suzanne-van-den-heuvel.gallery-3' },
      // TODO_FROM_CHEF: site has more usable photos; add gallery-4 once chef approves additional images.
    ],
  },
  about: {
    headline: {
      [Language.EN]: 'Vegetarian natural cuisine cooked with attention — at home where silence and meditative presence carry the room.',
      [Language.NL]: 'Vegetarische natuurkeuken met aandacht bereid — thuis waar stilte en meditatieve aanwezigheid dragend zijn.',
    },
    paragraphs: [
      {
        [Language.EN]:
          'Suzanne cooks the principles of vegetarian (or vegan on request) natural cuisine in a wide range of settings — retreats, trainings, weekends, buffets. Tongue-pleasing, flavourful, and deeply satisfying. Inner work, she says, deserves to be well fed.',
        [Language.NL]:
          'Ik kook volgens de principes van de vegetarische (of vegan) natuurkeuken op uiteenlopende plekken. Voor retraites, opleidingen, weekenden, buffetten. Tongstrelend, smaakvol en voldoening schenkend. Innerlijk werk mag goed gevoed worden.',
      },
      {
        [Language.EN]:
          'From her own practice, she feels like a fish in water in places where silence and meditative presence carry the room.',
        [Language.NL]:
          'Vanuit mijn eigen beoefening voel ik mij als een vis in het water op plekken waar stilte en meditatieve aanwezigheid dragend zijn.',
      },
      {
        [Language.EN]:
          'After a burn-out in 1999, Suzanne began a path of awareness and personal development. A former teacher of visual arts and stylist, she found her way home to herself through learning about food and how to prepare it. The books "Savor" by Thich Nhat Hanh and "Mindful Eating" by Jan Chozen Bays gave her a way to link her passion for food with spiritual awareness — which now expresses itself in her work as a mindful cook for retreats and trainings.',
        [Language.NL]:
          'Door een burn-out in 1999 ben ik het pad van bewustwording opgegaan. Ik was werkzaam als docent beeldende vorming en later als vormgever, stylist. In het leren over voeding en het bereiden ervan kwam ik thuis bij mezelf. Toen ik de boeken "Savor" van Thich Nhat Hanh en "Mindful Eating" van Jan Chozen Bays las vond ik een ingang om mijn passie voor eten te koppelen aan spirituele bewustwording. Dit uit zich onder meer in mijn werkzaamheden als mindful kok voor retraites en plekken waar mensen trainingen, opleidingen en cursussen volgen ten behoeve van hun persoonlijke ontwikkeling.',
      },
      {
        [Language.EN]:
          'Pure, fresh, honest, organic, and prepared with attention to delight the senses. Eye-pleasing, flavourful, and satisfying. Studio Gember works exclusively vegetarian and, on request, vegan.',
        [Language.NL]:
          'Puur, vers, eerlijk, biologisch en met aandacht bereid voor het prikkelen van de zintuigen. Oogstrelend, smaakvol, én voldoening brengend. Studio Gember werkt daarom uitsluitend vegetarisch en op verzoek veganistisch.',
      },
    ],
  },
  signatureDishes: [], // TODO_FROM_CHEF: site does not list specific dishes. Chef to supply 2–4 signature dishes verbatim.
  testimonials: [], // TODO_FROM_CHEF: no on-site testimonials found. Chef to supply 1–2 quotes (with author + role).

  atAGlance: {
    sourcing: {
      [Language.EN]: 'Pure, fresh, honest, organic — vegetarian, vegan on request',
      [Language.NL]: 'Puur, vers, eerlijk, biologisch — vegetarisch, op verzoek veganistisch',
    },
    credentials: {
      [Language.EN]: 'Mindfulness trainer & coach · Mindful Eating practitioner (Thich Nhat Hanh / Jan Chozen Bays lineage) · Co-founder mind-workZ (meditation retreats)',
      [Language.NL]: 'Mindfulness trainer & coach · Mindful Eating beoefenaar (lijn Thich Nhat Hanh / Jan Chozen Bays) · Mede-oprichter mind-workZ (meditatie-retraites)',
    },
    // TODO_FROM_CHEF: no press mentions found on site — leave press field unset until chef supplies.
  },
  pastRetreats: [], // TODO_FROM_CHEF: site mentions retraites/opleidingen generically but names no specific hosts. Chef to supply.
}
