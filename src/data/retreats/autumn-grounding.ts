import {
  AutumnGroundingRetreat,
  RetreatId,
  ScheduleDayType,
} from '@/types'

/**
 * The Autumn Grounding: Ayurvedic Care for Women — 17–18 October 2026.
 *
 * Content transcribed from the Hipsy event listing. Prices are shown in our own
 * copy for scannability, but the embedded ticketshop is the source of truth: if
 * the two ever diverge, update this file rather than trusting the page.
 */
export const AUTUMN_GROUNDING_RETREAT: AutumnGroundingRetreat = {
  id: RetreatId.AUTUMN_GROUNDING,
  slug: 'autumn-grounding-retreat',
  heroImage: '/images/autumn-grounding-retreat.png',
  heroBackground: '/images/field-walking-women.jpg',

  startDate: '2026-10-17T09:30',
  endDate: '2026-10-18T17:00',
  currency: 'EUR',

  location: {
    nameKey: 'countrysideFarm',
    address: 'Duisterendijk 2, 8131 RA Wijhe, Netherlands',
    accessibilityKeys: [
      'carFromZwolle',
      'freePickup',
      'sharedTransport',
    ],
  },

  hosts: [
    {
      id: 'nana',
      name: 'Nana',
      organisation: 'The Makers Barn',
    },
    {
      id: 'elaine',
      name: 'Elaine',
      organisation: 'AlmSens Wellness',
    },
  ],

  schedule: [
    {
      dayType: ScheduleDayType.SATURDAY,
      items: [
        { time: '09:30–10:00', activityKey: 'arrivalCheckin' },
        { time: '10:00–10:30', activityKey: 'welcomeCircle' },
        { time: '10:30–12:00', activityKey: 'ayurvedicWorkshop' },
        { time: '12:00–12:30', activityKey: 'autumnWalk' },
        { time: '12:30–14:00', activityKey: 'lunchAndRest' },
        { time: '14:00–16:00', activityKey: 'yinYoga' },
        { time: '16:00–18:30', activityKey: 'freeTimeSauna' },
        { time: '18:30–19:30', activityKey: 'dinner' },
        { time: '19:30–21:00', activityKey: 'fireCircle' },
      ],
    },
    {
      dayType: ScheduleDayType.SUNDAY,
      items: [
        { time: '08:00–09:00', activityKey: 'morningFlow' },
        { time: '09:00–10:00', activityKey: 'breakfast' },
        { time: '10:00–13:00', activityKey: 'freeTimeMassages' },
        { time: '13:00–14:00', activityKey: 'lunch' },
        { time: '14:00–14:30', activityKey: 'closingCircle' },
        { time: '14:30–16:30', activityKey: 'slowCheckout' },
      ],
    },
  ],

  includedKeys: [
    'fullProgramme',
    'allMeals',
    'teaAndSnacks',
    'saunaAndGrounds',
    'selfCarePackage',
    'accommodation',
  ],

  ticketTiers: [
    {
      id: 'weekend',
      price: '295.80',
      requiresWeekendTicket: false,
    },
    {
      id: 'headMassage',
      price: '45.80',
      requiresWeekendTicket: true,
    },
    {
      id: 'extraFriday',
      price: '60.80',
      requiresWeekendTicket: true,
    },
  ],

  ticketShopUrl: 'https://hipsy.nl/shop/235781-the-autumn-grounding-ayurvedic-care-for-women',
  eventUrl: 'https://hipsy.nl/event/235781-the-autumn-grounding-ayurvedic-care-for-women',

  gallery: [
    { src: '/images/practice-rooms-with-mats.jpg', altKey: 'practiceRoom' },
    { src: '/images/graden_view_with_hammocks.JPG', altKey: 'garden' },
    { src: '/images/pond-complete.jpg', altKey: 'pond' },
  ],
}
