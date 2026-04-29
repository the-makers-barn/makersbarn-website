/**
 * Stable IDs for calendar milestones. These IDs are part of the
 * localStorage state contract — once shipped, they cannot be changed
 * without a state migration.
 *
 * Convention:
 *   p<phase-number>-<slug>   = canonical milestone (present in 12-month preset)
 *   m<preset-months>-<slug>  = preset-specific milestone (only in that preset)
 */
export const CALENDAR_MILESTONE_IDS = {
  // Phase 1 — Foundation
  P1_VISION: 'p1-vision',
  P1_AVATAR: 'p1-avatar',
  P1_FORMAT: 'p1-format',
  P1_BUDGET: 'p1-budget',
  P1_VENUE_SCOUT: 'p1-venue-scout',
  P1_PRICING_MODEL: 'p1-pricing-model',
  P1_RESEARCH: 'p1-research',
  P1_COFACILITATOR_DECISION: 'p1-cofacilitator-decision',
  P1_LEGAL_RESEARCH: 'p1-legal-research',
  // Phase 2 — Anchor
  P2_VENUE_CONTRACT: 'p2-venue-contract',
  P2_INSURANCE: 'p2-insurance',
  P2_WAIVERS: 'p2-waivers',
  P2_COFAC_AGREEMENT: 'p2-cofac-agreement',
  P2_LANDING_PAGE: 'p2-landing-page',
  P2_PROGRAM_ARC: 'p2-program-arc',
  P2_REGISTRATION_SYSTEM: 'p2-registration-system',
  P2_AUDIENCE_WARMUP: 'p2-audience-warmup',
  P2_ASSETS_PHOTO: 'p2-assets-photo',
  P2_DEPOSIT_POLICY: 'p2-deposit-policy',
  // Phase 3 — Launch & sell
  P3_ANNOUNCEMENT: 'p3-announcement',
  P3_EARLY_BIRD: 'p3-early-bird',
  P3_EMAIL_SEQUENCE: 'p3-email-sequence',
  P3_SOCIAL_CADENCE: 'p3-social-cadence',
  P3_REFERRALS: 'p3-referrals',
  P3_PARTNERSHIPS: 'p3-partnerships',
  P3_FIRST_REGISTRATIONS: 'p3-first-registrations',
  P3_VENDOR_SHORTLIST: 'p3-vendor-shortlist',
  P3_ITINERARY_REFINE: 'p3-itinerary-refine',
  // Phase 4 — Lock-in
  P4_GO_NO_GO: 'p4-go-no-go',
  P4_VENDORS_CONFIRMED: 'p4-vendors-confirmed',
  P4_PROGRAM_FINAL: 'p4-program-final',
  P4_WELCOME_PACKET: 'p4-welcome-packet',
  P4_PACKING_LIST: 'p4-packing-list',
  P4_DIETARY_SURVEY: 'p4-dietary-survey',
  P4_ROOMMATE_MATCHING: 'p4-roommate-matching',
  P4_ACCESSIBILITY_CHECK: 'p4-accessibility-check',
  P4_RUN_OF_SHOW: 'p4-run-of-show',
  // Phase 5 — Final weeks
  P5_DETAILED_ITINERARY: 'p5-detailed-itinerary',
  P5_TRAVEL_LOGISTICS: 'p5-travel-logistics',
  P5_ARRIVAL_DETAILS: 'p5-arrival-details',
  P5_ROSTERS: 'p5-rosters',
  P5_NAME_TAGS: 'p5-name-tags',
  P5_EMERGENCY_CONTACTS: 'p5-emergency-contacts',
  P5_SIGNAGE: 'p5-signage',
  // Phase 6 — Post-retreat
  P6_THANK_YOU: 'p6-thank-you',
  P6_PHOTO_GALLERY: 'p6-photo-gallery',
  P6_FEEDBACK_SURVEY: 'p6-feedback-survey',
  P6_TESTIMONIALS: 'p6-testimonials',
  P6_RECONCILIATION: 'p6-reconciliation',
  // Preset-specific milestones — 6-month sprint preset
  M6_SPRINT_VENUE_LOCK: 'm6-sprint-venue-lock',
  M6_SPRINT_PARALLEL_LANDING: 'm6-sprint-parallel-landing',
  // Preset-specific milestones — 3-month preset
  M3_VENUE_PREBOOKED: 'm3-venue-prebooked',
  M3_WARM_OUTREACH: 'm3-warm-outreach',
  M3_FOUNDING_TIER: 'm3-founding-tier',
  M3_LIMITED_COHORT: 'm3-limited-cohort',
} as const

export type CalendarMilestoneId = (typeof CALENDAR_MILESTONE_IDS)[keyof typeof CALENDAR_MILESTONE_IDS]

export const CALENDAR_KNOWN_MILESTONE_IDS: ReadonlySet<string> = new Set(
  Object.values(CALENDAR_MILESTONE_IDS),
)
