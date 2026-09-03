import { RetreatId, SweatLodgeEvent } from '@/types'

/**
 * Onder mannen — Zweethut, Sunday 4 October 2026.
 *
 * Content transcribed from the Hipsy event listing. Prices are shown in our own
 * copy for scannability, but the embedded ticketshop is the source of truth: if
 * the two ever diverge, update this file rather than trusting the page.
 */
export const SWEAT_LODGE_EVENT: SweatLodgeEvent = {
  id: RetreatId.SWEAT_LODGE,
  slug: 'mens-sweat-lodge',
  heroImage: '/images/retreats/sweat-lodge/sweat-lodge-frame-sunset.jpg',

  // Offsets are explicit so schema.org consumers do not read these as UTC.
  // 4 October 2026 falls before EU summer time ends (25 October), so CEST.
  startDate: '2026-10-04T09:30:00+02:00',
  endDate: '2026-10-04T17:00:00+02:00',
  currency: 'EUR',

  location: {
    nameKey: 'countrysideFarm',
    address: 'Duisterendijk 2, 8131 RA Wijhe, Netherlands',
    accessibilityKeys: ['carFromZwolle', 'freePickup', 'sharedTransport'],
  },

  host: {
    id: 'edwin',
    name: 'Edwin Haasjes',
    organisation: 'Rites of Passage & Zweethut',
    email: 'edwin.haasjes.contact@gmail.com',
  },

  schedule: [
    { time: '09:30', activityKey: 'arrival' },
    { time: '10:00', activityKey: 'start' },
    { time: '~12:00', activityKey: 'lodge' },
    { time: '', activityKey: 'sharedMeal' },
    { time: '~17:00', activityKey: 'closing' },
  ],

  bringKeys: ['towels', 'clothing', 'water', 'lunch', 'dishToShare'],

  ticketTiers: [
    { id: 'standard', price: '89.99' },
    { id: 'youth', price: '60.80' },
  ],

  ticketShopUrl: 'https://hipsy.nl/shop/241568-onder-mannen-zweethut-at-the-makers-barn',
  eventUrl: 'https://hipsy.nl/event/241568-onder-mannen-zweethut-at-the-makers-barn',
}
