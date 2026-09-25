import {
  ExperienceType,
  AccommodationCabin,
  BookingPlatform,
  ExperienceOffer,
  FeaturedRetreat,
  Route,
} from '@/types'

import { IMAGES } from './images'

export const EXPERIENCE_OFFERS: ExperienceOffer[] = [
  {
    id: 'accommodation-cosmos',
    type: ExperienceType.ACCOMMODATION,
    cabin: AccommodationCabin.COSMOS,
    image: IMAGES.accommodation.cosmosOutside,
    bookingLinks: [
      {
        platform: BookingPlatform.AIRBNB,
        url: 'https://www.airbnb.nl/rooms/1577611712640094818',
      },
      {
        platform: BookingPlatform.NATUURHUISJE,
        url: 'https://www.natuurhuisje.nl/vakantiehuisje/86113',
      },
    ],
  },
  {
    id: 'accommodation-horizon',
    type: ExperienceType.ACCOMMODATION,
    cabin: AccommodationCabin.HORIZON,
    image: IMAGES.accommodation.horizonExterior,
    bookingLinks: [
      {
        platform: BookingPlatform.NATUURHUISJE,
        url: 'https://www.natuurhuisje.nl/vakantiehuisje/91228',
      },
    ],
  },
  {
    id: 'focused-workation',
    type: ExperienceType.FOCUSED_WORKATION,
    image: IMAGES.accommodation.horizonKitchen,
    internalUrl: Route.FOCUSED_WORKATION,
  },
  {
    id: 'solo-retreat',
    type: ExperienceType.SOLO_RETREAT,
    image: IMAGES.accommodation.cosmosView,
  },
]

export const FEATURED_RETREATS: FeaturedRetreat[] = [
  {
    id: 'shanti-deva-2027',
    title: 'Shanti Deva Buddhist Tibetan Retreat',
    image: '/images/retreats/shanti-deva/teaching-room.jpg',
    dateRange: 'June, July & August 2027',
    internalUrl: '/experiences/shanti-deva-retreat',
  },
  {
    id: 'autumn-grounding-2026',
    title: 'The Autumn Grounding: Ayurvedic Care for Women',
    image: '/images/autumn-grounding-retreat.png',
    dateRange: 'October 17–18, 2026',
    internalUrl: Route.AUTUMN_GROUNDING_RETREAT,
  },
  {
    id: 'sweat-lodge-2026',
    title: 'Onder mannen: a men\'s sweat lodge day',
    image: '/images/retreats/sweat-lodge/sweat-lodge-frame-sunset.jpg',
    dateRange: 'Sunday 4 October 2026',
    internalUrl: Route.MENS_SWEAT_LODGE,
  },
]
