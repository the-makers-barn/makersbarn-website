import { AccommodationCabin, BookingPlatform, CabinDetail, Route } from '@/types'

import { IMAGES } from './images'

export const CABIN_DETAILS: Record<AccommodationCabin, CabinDetail> = {
  [AccommodationCabin.COSMOS]: {
    cabin: AccommodationCabin.COSMOS,
    route: Route.COSMOS_CABIN,
    gallery: [
      IMAGES.accommodation.cosmosOutside,
      IMAGES.accommodation.cosmosView,
      IMAGES.accommodation.cosmosCouch,
      IMAGES.accommodation.cosmosKitchen,
      IMAGES.accommodation.hotTubInField,
      IMAGES.accommodation.sauna,
      IMAGES.accommodation.pondComplete,
      IMAGES.accommodation.fireCircleGathering,
      IMAGES.accommodation.gardenViewWithHammocks,
    ],
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
    stay: {
      maxGuests: 4,
      bedrooms: 1,
      checkInFrom: '15:00',
      checkInUntil: '22:00',
      checkOutUntil: '11:00',
      petsAllowed: false,
    },
    rating: {
      platform: BookingPlatform.NATUURHUISJE,
      score: 9,
      outOf: 10,
      reviewCount: 20,
    },
  },
  [AccommodationCabin.HORIZON]: {
    cabin: AccommodationCabin.HORIZON,
    route: Route.HORIZON_LOFT,
    gallery: [
      IMAGES.accommodation.horizonLounge,
      IMAGES.accommodation.horizonDiningKitchen,
      IMAGES.accommodation.horizonBedroom,
      IMAGES.accommodation.horizonOpenKitchen,
      IMAGES.accommodation.horizonShower,
      IMAGES.accommodation.horizonLoftOverview,
      IMAGES.accommodation.horizonDiningTable,
      IMAGES.accommodation.horizonTableSet,
      IMAGES.accommodation.horizonReadingChair,
      IMAGES.accommodation.horizonLanding,
      IMAGES.accommodation.horizonBathroom,
      IMAGES.accommodation.twoBedsInHorizon,
      IMAGES.accommodation.horizonExtraRoom,
      IMAGES.accommodation.horizonExterior,
      IMAGES.accommodation.horizonGardenRoom,
      IMAGES.accommodation.horizonHammocks,
      IMAGES.accommodation.horizonGardenTree,
      IMAGES.accommodation.sauna,
      IMAGES.accommodation.pondComplete,
      IMAGES.accommodation.fireCircleGathering,
      IMAGES.accommodation.gardenViewWithHammocks,
    ],
    bookingLinks: [
      {
        platform: BookingPlatform.NATUURHUISJE,
        url: 'https://www.natuurhuisje.nl/vakantiehuisje/91228',
      },
    ],
    stay: {
      maxGuests: 3,
      bedrooms: 1,
      checkInFrom: '15:00',
      checkInUntil: '22:00',
      checkOutUntil: '11:00',
      petsAllowed: false,
    },
    rating: {
      platform: BookingPlatform.NATUURHUISJE,
      score: 9.6,
      outOf: 10,
      reviewCount: 5,
    },
  },
}

/** The cabin to suggest at the bottom of a cabin page. */
export const OTHER_CABIN: Record<AccommodationCabin, AccommodationCabin> = {
  [AccommodationCabin.COSMOS]: AccommodationCabin.HORIZON,
  [AccommodationCabin.HORIZON]: AccommodationCabin.COSMOS,
}
