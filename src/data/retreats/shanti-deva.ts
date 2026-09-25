import { RetreatData, RetreatId, RetreatDateId } from '@/types'

export const SHANTI_DEVA_RETREAT: RetreatData = {
  id: RetreatId.SHANTI_DEVA,
  slug: 'shanti-deva-retreat',
  heroImage: '/images/retreats/shanti-deva/geshe-pema-dorjee.jpg',

  videoEmbedUrl:
    'https://player.mediadelivery.net/embed/743630/655e13e9-73d2-4040-9532-d05915b26075?autoplay=true&loop=true&muted=true&preload=true&responsive=true',

  teachers: [
    {
      id: 'geshe-pema-dorjee',
      name: 'Gen La Geshe Pema Dorjee',
      title: 'gesheTitle',
      imageUrl: '/images/retreats/shanti-deva/geshe-pema-dorjee.jpg',
    },
  ],

  dates: [
    {
      id: RetreatDateId.JUNE_2027,
      startDate: '2027-06-22',
      endDate: '2027-06-27',
    },
    {
      id: RetreatDateId.JULY_AUGUST_2027,
      startDate: '2027-07-30',
      endDate: '2027-08-04',
    },
    {
      id: RetreatDateId.AUGUST_2027,
      startDate: '2027-08-06',
      endDate: '2027-08-11',
    },
  ],

  location: {
    nameKey: 'countrysideFarm',
    address: 'Duisterendijk 2, Wijhe, Netherlands',
    accessibilityKeys: [
      'carFromZwolle',
      'freePickup',
      'sharedTransport',
    ],
  },

  dayFlowKeys: [
    'morningMeditation',
    'breakfastBuffet',
    'teachingLectures',
    'lunch',
    'restAndDigest',
    'afternoonWorkshop',
    'dinnerGathering',
    'qaSession',
    'eveningConnect',
  ],

  contact: {
    whatsapp: '+31-6-14941874',
    email: 'tete17@gmail.com',
    instagram: 'https://www.instagram.com/shanti_deva_buddhist_retreat',
    bookingFormUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScUGaQJwZ9zka5MDRbWlc1qt2Uj2UcpkBEflw1W3KOhi-xYKg/viewform',
  },
}
