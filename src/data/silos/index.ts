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
      [Language.DE]: 'Beheizter Shala in der Heuscheune mit ausgelegten Yogamatten',
      [Language.ES]: 'Shala con calefacción en el granero de heno con esterillas de yoga',
      [Language.FR]: 'Shala chauffé dans la grange à foin avec tapis de yoga déployés',
    },
  },
  {
    slug: SiloSlug.MEDITATION_RETREATS,
    route: Route.MEDITATION_RETREATS,
    imageSrc: IMAGES.accommodation.fieldWalking,
    imageAlt: {
      [Language.EN]: 'Retreat guests walking in silence through the fields',
      [Language.NL]: 'Retraite-gasten lopen in stilte door de velden',
      [Language.DE]: 'Retreat-Gäste, die schweigend durch die Felder gehen',
      [Language.ES]: 'Huéspedes del retiro caminando en silencio por los campos',
      [Language.FR]: 'Invités de la retraite marchant en silence à travers les champs',
    },
  },
  {
    slug: SiloSlug.WRITING_RETREATS,
    route: Route.WRITING_RETREATS,
    imageSrc: IMAGES.accommodation.lunchTogether,
    imageAlt: {
      [Language.EN]: 'A long workshop table at The Makers Barn',
      [Language.NL]: 'Een lange werktafel bij The Makers Barn',
      [Language.DE]: 'Ein langer Arbeitstisch bei The Makers Barn',
      [Language.ES]: 'Una larga mesa de trabajo en The Makers Barn',
      [Language.FR]: 'Une longue table d\'atelier à The Makers Barn',
    },
  },
  {
    slug: SiloSlug.TEAM_OFFSITES,
    route: Route.TEAM_OFFSITES,
    imageSrc: IMAGES.accommodation.outsideGuitarCircle,
    imageAlt: {
      [Language.EN]: 'A small group around the fire pit at The Makers Barn',
      [Language.NL]: 'Een kleine groep rond de vuurplaats',
      [Language.DE]: 'Eine kleine Gruppe rund um die Feuerstelle bei The Makers Barn',
      [Language.ES]: 'Un grupo pequeño alrededor de la hoguera en The Makers Barn',
      [Language.FR]: 'Un petit groupe autour du foyer à The Makers Barn',
    },
  },
  {
    slug: SiloSlug.BREATHWORK_SOUND_HEALING,
    route: Route.BREATHWORK_SOUND_HEALING,
    imageSrc: IMAGES.accommodation.fireCircleGathering,
    imageAlt: {
      [Language.EN]: 'Group gathering around the fire circle',
      [Language.NL]: 'Groep rond de vuurplaats',
      [Language.DE]: 'Gruppe versammelt rund um die Feuerstelle',
      [Language.ES]: 'Grupo reunido alrededor del círculo de fuego',
      [Language.FR]: 'Groupe rassemblé autour du cercle de feu',
    },
  },
  {
    slug: SiloSlug.COACHING_INTENSIVES,
    route: Route.COACHING_INTENSIVES,
    imageSrc: IMAGES.accommodation.hayHouseBench,
    imageAlt: {
      [Language.EN]: 'A bench at the Hay House at sunset',
      [Language.NL]: 'Een bank bij het Hay House bij zonsondergang',
      [Language.DE]: 'Eine Bank am Hay House bei Sonnenuntergang',
      [Language.ES]: 'Un banco en la Hay House al atardecer',
      [Language.FR]: 'Un banc à la Hay House au coucher du soleil',
    },
  },
  {
    slug: SiloSlug.SOMATIC_THERAPY_RETREATS,
    route: Route.SOMATIC_THERAPY_RETREATS,
    imageSrc: IMAGES.accommodation.pondCoachingSession,
    imageAlt: {
      [Language.EN]: 'A one-to-one session by the pond',
      [Language.NL]: 'Een één-op-één-sessie bij de vijver',
      [Language.DE]: 'Eine Einzelsitzung am Teich',
      [Language.ES]: 'Una sesión individual junto al estanque',
      [Language.FR]: 'Une séance individuelle au bord de l\'étang',
    },
  },
  {
    slug: SiloSlug.WELLNESS_DETOX_RETREATS,
    route: Route.WELLNESS_DETOX_RETREATS,
    imageSrc: IMAGES.accommodation.yogaPondJettyReflection,
    imageAlt: {
      [Language.EN]: 'Yoga on the jetty by the swimming pond',
      [Language.NL]: 'Yoga op de steiger bij de zwemvijver',
      [Language.DE]: 'Yoga auf dem Steg am Schwimmteich',
      [Language.ES]: 'Yoga en el embarcadero junto al estanque para nadar',
      [Language.FR]: 'Yoga sur le ponton près de l\'étang de baignade',
    },
  },
  {
    slug: SiloSlug.CIRCLE_RETREATS,
    route: Route.CIRCLE_RETREATS,
    imageSrc: IMAGES.accommodation.playingMusicFirePit,
    imageAlt: {
      [Language.EN]: 'A circle gathered around the fire pit',
      [Language.NL]: 'Een kring rond de vuurplaats',
      [Language.DE]: 'Ein Kreis rund um die Feuerstelle',
      [Language.ES]: 'Un círculo reunido alrededor de la hoguera',
      [Language.FR]: 'Un cercle réuni autour du foyer',
    },
  },
  {
    slug: SiloSlug.PHOTOGRAPHY_WORKSHOPS,
    route: Route.PHOTOGRAPHY_WORKSHOPS,
    imageSrc: IMAGES.accommodation.gardenViewWithHammocks,
    imageAlt: {
      [Language.EN]: 'Wide garden view with hammocks at The Makers Barn',
      [Language.NL]: 'Wijds tuinzicht met hangmatten bij The Makers Barn',
      [Language.DE]: 'Weite Gartenansicht mit Hängematten bei The Makers Barn',
      [Language.ES]: 'Amplia vista del jardín con hamacas en The Makers Barn',
      [Language.FR]: 'Vaste vue du jardin avec hamacs à The Makers Barn',
    },
  },
] as const
