import {
  ExperienceType,
  AccommodationCabin,
  BookingPlatform,
  ExperienceOffer,
  FeaturedRetreat,
} from '@/types'

import { IMAGES } from './images'

export const EXPERIENCE_OFFERS: ExperienceOffer[] = [
  {
    id: 'solo-retreat',
    type: ExperienceType.SOLO_RETREAT,
    image: IMAGES.accommodation.cosmosView,
    externalUrl: 'https://thanksforthetrip.com/cosmos-solo-yoga-retreat/',
  },
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
    id: 'together-retreat',
    type: ExperienceType.TOGETHER_RETREAT,
    image: IMAGES.accommodation.outsideGuitarCircle,
    externalUrl: 'https://soulrevivetogetherretreat.umso.co/',
  },
]

export const FEATURED_RETREATS: FeaturedRetreat[] = [
  {
    id: 'shanti-deva-2026',
    title: 'Shanti Deva Buddhist Tibetan Retreat',
    image: '/images/buddhist-retreat.png',
    dateRange: 'June & August 2026',
    internalUrl: '/experiences/shanti-deva-retreat',
  },
]
