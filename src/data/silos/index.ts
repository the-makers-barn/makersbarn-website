import { IMAGES } from '@/data/images'
import { Language, Route, SiloHubCardSummary, SiloSlug } from '@/types'

export { BREATHWORK_SOUND_HEALING_SILO } from './breathwork-sound-healing'
export { CIRCLE_RETREATS_SILO } from './circle-retreats'
export { COACHING_INTENSIVES_SILO } from './coaching-intensives'
export { MEDITATION_RETREATS_SILO } from './meditation-retreats'
export { PHOTOGRAPHY_WORKSHOPS_SILO } from './photography-workshops'
export { SOMATIC_THERAPY_RETREATS_SILO } from './somatic-therapy-retreats'
export { TEAM_OFFSITES_SILO } from './team-offsites'
export { WELLNESS_DETOX_RETREATS_SILO } from './wellness-detox-retreats'
export { WRITING_RETREATS_SILO } from './writing-retreats'
export { YOGA_TEACHERS_SILO } from './yoga-teachers'

export const SILO_HUB_CARDS: readonly SiloHubCardSummary[] = [
  {
    slug: SiloSlug.YOGA_TEACHERS,
    route: Route.YOGA_TEACHERS,
    imageSrc: IMAGES.accommodation.practiceRoomsWithMats,
    imageAlt: {
      [Language.EN]: 'Heated hay barn shala with yoga mats laid out',
      [Language.NL]: 'Verwarmde hooischuur-shala met yogamatten',
    },
  },
  {
    slug: SiloSlug.MEDITATION_RETREATS,
    route: Route.MEDITATION_RETREATS,
    imageSrc: IMAGES.accommodation.fieldWalking,
    imageAlt: {
      [Language.EN]: 'Retreat guests walking in silence through the fields',
      [Language.NL]: 'Retraite-gasten lopen in stilte door de velden',
    },
  },
  {
    slug: SiloSlug.WRITING_RETREATS,
    route: Route.WRITING_RETREATS,
    imageSrc: IMAGES.accommodation.lunchTogether,
    imageAlt: {
      [Language.EN]: 'A long workshop table at The Makers Barn',
      [Language.NL]: 'Een lange werktafel bij The Makers Barn',
    },
  },
  {
    slug: SiloSlug.TEAM_OFFSITES,
    route: Route.TEAM_OFFSITES,
    imageSrc: IMAGES.accommodation.outsideGuitarCircle,
    imageAlt: {
      [Language.EN]: 'A small group around the fire pit at The Makers Barn',
      [Language.NL]: 'Een kleine groep rond de vuurplaats',
    },
  },
  {
    slug: SiloSlug.BREATHWORK_SOUND_HEALING,
    route: Route.BREATHWORK_SOUND_HEALING,
    imageSrc: IMAGES.accommodation.fireCircleGathering,
    imageAlt: {
      [Language.EN]: 'Group gathering around the fire circle',
      [Language.NL]: 'Groep rond de vuurplaats',
    },
  },
  {
    slug: SiloSlug.COACHING_INTENSIVES,
    route: Route.COACHING_INTENSIVES,
    imageSrc: IMAGES.accommodation.hayHouseBench,
    imageAlt: {
      [Language.EN]: 'A bench at the Hay House at sunset',
      [Language.NL]: 'Een bank bij het Hay House bij zonsondergang',
    },
  },
  {
    slug: SiloSlug.SOMATIC_THERAPY_RETREATS,
    route: Route.SOMATIC_THERAPY_RETREATS,
    imageSrc: IMAGES.accommodation.pondCoachingSession,
    imageAlt: {
      [Language.EN]: 'A one-to-one session by the pond',
      [Language.NL]: 'Een één-op-één-sessie bij de vijver',
    },
  },
  {
    slug: SiloSlug.WELLNESS_DETOX_RETREATS,
    route: Route.WELLNESS_DETOX_RETREATS,
    imageSrc: IMAGES.accommodation.yogaPondJettyReflection,
    imageAlt: {
      [Language.EN]: 'Yoga on the jetty by the swimming pond',
      [Language.NL]: 'Yoga op de steiger bij de zwemvijver',
    },
  },
  {
    slug: SiloSlug.CIRCLE_RETREATS,
    route: Route.CIRCLE_RETREATS,
    imageSrc: IMAGES.accommodation.playingMusicFirePit,
    imageAlt: {
      [Language.EN]: 'A circle gathered around the fire pit',
      [Language.NL]: 'Een kring rond de vuurplaats',
    },
  },
  {
    slug: SiloSlug.PHOTOGRAPHY_WORKSHOPS,
    route: Route.PHOTOGRAPHY_WORKSHOPS,
    imageSrc: IMAGES.accommodation.gardenViewWithHammocks,
    imageAlt: {
      [Language.EN]: 'Wide garden view with hammocks at The Makers Barn',
      [Language.NL]: 'Wijds tuinzicht met hangmatten bij The Makers Barn',
    },
  },
] as const
