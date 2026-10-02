import { RetreatData, RetreatId, RetreatDateId, RetreatDayKind } from '@/types'

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
    accessibilityKeys: ['carFromZwolle', 'freePickup', 'returnTransport'],
  },

  programmeKeys: ['joyfulEffort', 'mahayana', 'meditation'],

  schedule: [
    {
      kind: RetreatDayKind.ARRIVAL,
      items: [
        { time: '14:00–17:00', activityKey: 'checkIn' },
        { time: '17:00–17:45', activityKey: 'farmTour' },
        { time: '17:45', activityKey: 'welcomeReception' },
        { time: '18:00', activityKey: 'dinner' },
        { time: '19:00', activityKey: 'introduction' },
      ],
    },
    {
      kind: RetreatDayKind.STUDY,
      items: [
        { time: '07:00', activityKey: 'meditation' },
        { time: '08:00', activityKey: 'breakfast' },
        { time: '09:00–12:00', activityKey: 'teaching' },
        { time: '12:00', activityKey: 'lunch' },
        { time: '14:00–17:00', activityKey: 'teachingsAndWorkshops' },
        { time: '18:00', activityKey: 'dinner' },
        { time: '19:00', activityKey: 'questionsAndAnswers' },
      ],
    },
    {
      kind: RetreatDayKind.FINAL,
      items: [
        { time: '07:30', activityKey: 'breakfast' },
        { time: '08:30', activityKey: 'closing' },
        { time: '12:00', activityKey: 'checkOut' },
      ],
    },
  ],

  accommodationKeys: ['duration', 'sharedRooms', 'coupleRoom', 'bedding'],

  serviceKeys: ['vegetarianMeals', 'drinks', 'farmFacilities', 'workshops'],

  pricing: {
    currency: 'EUR',
    total: '795',
    base: '657',
    vatPercent: 21,
    deposit: '200',
  },

  contact: {
    whatsapp: '+31-6-14941874',
    email: 'tete17@gmail.com',
    instagram: 'https://www.instagram.com/shanti_deva_buddhist_retreat',
    bookingFormUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScUGaQJwZ9zka5MDRbWlc1qt2Uj2UcpkBEflw1W3KOhi-xYKg/viewform',
    brochureUrl: 'https://habait-nl.com/wp-content/uploads/2026/09/5-shanti-deva-retreats-2027-brochure.pdf',
  },
}
