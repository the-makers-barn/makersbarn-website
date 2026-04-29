import { CalendarPhaseId } from '@/constants/tools'
import type { CalendarContent, CalendarMilestone, CalendarPhase, LocalizedString } from '@/types/tools'

import { CALENDAR_MILESTONE_IDS } from './calendarMilestoneIds'

// During scaffolding, NL/DE/ES/FR strings are EN-verbatim per CLAUDE.md i18n policy.
// Real NL/DE translations land in a later commit.
const en = (s: string): LocalizedString => ({ en: s, nl: s, de: s, es: s, fr: s })

const milestone = (id: string, text: string): CalendarMilestone => ({ id, text: en(text) })

const PHASE_FOUNDATION: CalendarPhase = {
  id: CalendarPhaseId.FOUNDATION,
  range: en('9–12 months before'),
  rangeStartMonth: 12,
  rangeEndMonth: 9,
  eyebrow: en('Phase 1 · Foundation'),
  title: en('Set the vision and secure your venue'),
  milestones: [
    milestone(CALENDAR_MILESTONE_IDS.P1_VISION, 'Define your retreat vision, theme, and the transformation it offers'),
    milestone(CALENDAR_MILESTONE_IDS.P1_AVATAR, 'Identify your ideal guest avatar'),
    milestone(CALENDAR_MILESTONE_IDS.P1_FORMAT, 'Decide on length, group size, and residential vs day-retreat format'),
    milestone(CALENDAR_MILESTONE_IDS.P1_BUDGET, 'Draft an initial budget with a 10–15% buffer'),
    milestone(CALENDAR_MILESTONE_IDS.P1_VENUE_SCOUT, 'Begin venue scouting (popular venues book 12 months out)'),
    milestone(CALENDAR_MILESTONE_IDS.P1_PRICING_MODEL, 'Decide on pricing strategy and payment model'),
    milestone(CALENDAR_MILESTONE_IDS.P1_RESEARCH, 'Research comparable retreats in your niche'),
    milestone(CALENDAR_MILESTONE_IDS.P1_COFACILITATOR_DECISION, 'Decide whether to co-lead or hire facilitators'),
    milestone(CALENDAR_MILESTONE_IDS.P1_LEGAL_RESEARCH, 'Research legal and tax implications of hosting a retreat'),
  ],
}

const PHASE_ANCHOR: CalendarPhase = {
  id: CalendarPhaseId.ANCHOR,
  range: en('6–9 months before'),
  rangeStartMonth: 9,
  rangeEndMonth: 6,
  eyebrow: en('Phase 2 · Anchor'),
  title: en('Lock contracts and build the landing page'),
  milestones: [
    milestone(CALENDAR_MILESTONE_IDS.P2_VENUE_CONTRACT, 'Sign the venue contract — verify cancellation policy, capacity, dietary, and AV'),
    milestone(CALENDAR_MILESTONE_IDS.P2_INSURANCE, 'Secure event and liability insurance'),
    milestone(CALENDAR_MILESTONE_IDS.P2_WAIVERS, 'Draft participant waivers'),
    milestone(CALENDAR_MILESTONE_IDS.P2_COFAC_AGREEMENT, 'Sign co-facilitator and hired-facilitator agreements'),
    milestone(CALENDAR_MILESTONE_IDS.P2_LANDING_PAGE, 'Publish the retreat landing page (messaging, sample itinerary, pricing)'),
    milestone(CALENDAR_MILESTONE_IDS.P2_PROGRAM_ARC, 'Draft the program arc — day-by-day skeleton'),
    milestone(CALENDAR_MILESTONE_IDS.P2_REGISTRATION_SYSTEM, 'Set up your registration and payment system'),
    milestone(CALENDAR_MILESTONE_IDS.P2_AUDIENCE_WARMUP, 'Warm up your audience with a content cadence'),
    milestone(CALENDAR_MILESTONE_IDS.P2_ASSETS_PHOTO, 'Gather marketing assets — venue photos, retreat-style imagery'),
    milestone(CALENDAR_MILESTONE_IDS.P2_DEPOSIT_POLICY, 'Define deposit and refund policy'),
  ],
}

const PHASE_LAUNCH: CalendarPhase = {
  id: CalendarPhaseId.LAUNCH,
  range: en('3–6 months before'),
  rangeStartMonth: 6,
  rangeEndMonth: 3,
  eyebrow: en('Phase 3 · Launch & sell'),
  title: en('Announce, sell early-bird, build momentum'),
  milestones: [
    milestone(CALENDAR_MILESTONE_IDS.P3_ANNOUNCEMENT, 'Public announcement post and email'),
    milestone(CALENDAR_MILESTONE_IDS.P3_EARLY_BIRD, 'Launch early-bird pricing tier with a deadline'),
    milestone(CALENDAR_MILESTONE_IDS.P3_EMAIL_SEQUENCE, 'Schedule the announcement → social proof → urgency email sequence'),
    milestone(CALENDAR_MILESTONE_IDS.P3_SOCIAL_CADENCE, 'Plan social cadence — behind-the-scenes, founder story, day-in-the-life'),
    milestone(CALENDAR_MILESTONE_IDS.P3_REFERRALS, 'Set up referral incentives'),
    milestone(CALENDAR_MILESTONE_IDS.P3_PARTNERSHIPS, 'Reach out for podcast guesting and partner promotions'),
    milestone(CALENDAR_MILESTONE_IDS.P3_FIRST_REGISTRATIONS, 'Track and respond to the first wave of paid registrations'),
    milestone(CALENDAR_MILESTONE_IDS.P3_VENDOR_SHORTLIST, 'Shortlist vendors — catering, transport, photography, AV, special activities'),
    milestone(CALENDAR_MILESTONE_IDS.P3_ITINERARY_REFINE, 'Refine the itinerary based on early registrant feedback'),
  ],
}

const PHASE_LOCK_IN: CalendarPhase = {
  id: CalendarPhaseId.LOCK_IN,
  range: en('1–3 months before'),
  rangeStartMonth: 3,
  rangeEndMonth: 1,
  eyebrow: en('Phase 4 · Lock-in'),
  title: en('Go/no-go and finalize every detail'),
  milestones: [
    milestone(CALENDAR_MILESTONE_IDS.P4_GO_NO_GO, 'Hit your minimum-viable headcount — go/no-go decision'),
    milestone(CALENDAR_MILESTONE_IDS.P4_VENDORS_CONFIRMED, 'Confirm all vendors with signed agreements'),
    milestone(CALENDAR_MILESTONE_IDS.P4_PROGRAM_FINAL, 'Finalize program content and printed/digital materials'),
    milestone(CALENDAR_MILESTONE_IDS.P4_WELCOME_PACKET, 'Send welcome packet with intentions email'),
    milestone(CALENDAR_MILESTONE_IDS.P4_PACKING_LIST, 'Send packing list and what-to-expect email'),
    milestone(CALENDAR_MILESTONE_IDS.P4_DIETARY_SURVEY, 'Send dietary and allergy survey'),
    milestone(CALENDAR_MILESTONE_IDS.P4_ROOMMATE_MATCHING, 'Confirm roommate matching and special requests'),
    milestone(CALENDAR_MILESTONE_IDS.P4_ACCESSIBILITY_CHECK, 'Check in on accessibility needs'),
    milestone(CALENDAR_MILESTONE_IDS.P4_RUN_OF_SHOW, 'Brief the on-site team and finalize the run-of-show'),
  ],
}

const PHASE_FINAL_WEEKS: CalendarPhase = {
  id: CalendarPhaseId.FINAL_WEEKS,
  range: en('0–1 month before'),
  rangeStartMonth: 1,
  rangeEndMonth: 0,
  eyebrow: en('Phase 5 · Final weeks'),
  title: en('Detailed itinerary, travel logistics, day-of prep'),
  milestones: [
    milestone(CALENDAR_MILESTONE_IDS.P5_DETAILED_ITINERARY, 'Share the detailed itinerary 4 weeks out'),
    milestone(CALENDAR_MILESTONE_IDS.P5_TRAVEL_LOGISTICS, 'Send travel logistics confirmation 2 weeks out'),
    milestone(CALENDAR_MILESTONE_IDS.P5_ARRIVAL_DETAILS, 'Send arrival details and final note 1 week out'),
    milestone(CALENDAR_MILESTONE_IDS.P5_ROSTERS, 'Print attendance rosters and check-in sheets'),
    milestone(CALENDAR_MILESTONE_IDS.P5_NAME_TAGS, 'Prepare name tags and welcome materials'),
    milestone(CALENDAR_MILESTONE_IDS.P5_EMERGENCY_CONTACTS, 'Compile emergency-contact list and safety protocols'),
    milestone(CALENDAR_MILESTONE_IDS.P5_SIGNAGE, 'Prepare on-site signage and materials kit'),
  ],
}

const PHASE_POST_RETREAT: CalendarPhase = {
  id: CalendarPhaseId.POST_RETREAT,
  range: en('1–2 weeks after'),
  rangeStartMonth: 0,
  rangeEndMonth: -1,
  eyebrow: en('Phase 6 · Post-retreat'),
  title: en('Close the loop, gather social proof, plan the next one'),
  milestones: [
    milestone(CALENDAR_MILESTONE_IDS.P6_THANK_YOU, 'Send personal thank-you emails to every attendee'),
    milestone(CALENDAR_MILESTONE_IDS.P6_PHOTO_GALLERY, 'Share the photo gallery'),
    milestone(CALENDAR_MILESTONE_IDS.P6_FEEDBACK_SURVEY, 'Send the feedback survey'),
    milestone(CALENDAR_MILESTONE_IDS.P6_TESTIMONIALS, 'Request and publish testimonials'),
    milestone(CALENDAR_MILESTONE_IDS.P6_RECONCILIATION, 'Reconcile finances and document lessons learned'),
  ],
}

export const CALENDAR_CONTENT: CalendarContent = {
  canonical: [
    PHASE_FOUNDATION,
    PHASE_ANCHOR,
    PHASE_LAUNCH,
    PHASE_LOCK_IN,
    PHASE_FINAL_WEEKS,
    PHASE_POST_RETREAT,
  ],
  overrides: {
    // Filled in Tasks 3.2–3.4
  },
}
