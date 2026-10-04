export enum AnalyticsEvent {
  CONTACT_FORM_SUBMITTED = 'contact_form_submitted',
  BOOKING_FORM_SUBMITTED = 'booking_form_submitted',
  QUESTION_FORM_SUBMITTED = 'question_form_submitted',
  CALCULATOR_LOADED = 'calculator_loaded',
  CALCULATOR_SHARED = 'calculator_shared',
  CALCULATOR_EMAIL_CAPTURED = 'email_captured',
  CALCULATOR_MAKERSBARN_CTA_CLICKED = 'makersbarn_cta_clicked',
  WHATSAPP_BOOKING_CLICKED = 'whatsapp_booking_clicked',
  TICKETSHOP_CTA_CLICKED = 'ticketshop_cta_clicked',
}

export enum TicketShopCtaLocation {
  STICKY_BAR = 'sticky-bar',
  TICKETSHOP_FALLBACK = 'ticketshop-fallback',
}

export enum WhatsAppCtaLocation {
  CABIN_COSMOS = 'cabin-cosmos',
  CABIN_HORIZON = 'cabin-horizon',
  CABIN_COSMOS_PAGE = 'cabin-cosmos-page',
  CABIN_HORIZON_PAGE = 'cabin-horizon-page',
  SOLO_RETREAT = 'solo-retreat',
  WORKATION_HERO = 'workation-hero',
  WORKATION_FOOTER = 'workation-footer',
}

/** Where a visit came from, decided once on the landing page and attached to every event. */
export enum Channel {
  INSTAGRAM_PAID = 'instagram_paid',
  META_ORGANIC = 'meta_organic',
  AI_ASSISTANT = 'ai_assistant',
  GOOGLE = 'google',
  DIRECT = 'direct',
  OTHER = 'other',
  UNKNOWN = 'unknown',
}

/** Event property keys. Prefixed so they never collide with call-site properties such as `channel`. */
export const ATTRIBUTION_CHANNEL_KEY = 'attribution_channel'
export const ATTRIBUTION_CAMPAIGN_KEY = 'attribution_campaign'
export const ATTRIBUTION_STORAGE_KEY = 'tmb.attribution'
/** Event property key for the visitor's own "How did you hear about us?" answer. */
export const HEARD_ABOUT_EVENT_KEY = 'heard_about'

export const META_UTM_SOURCES: ReadonlySet<string> = new Set(['instagram', 'ig', 'facebook', 'fb', 'meta'])
export const PAID_UTM_MEDIUMS: ReadonlySet<string> = new Set([
  'paid',
  'paid-social',
  'paid_social',
  'paidsocial',
  'cpc',
  'ppc',
])
export const AI_ASSISTANT_UTM_SOURCES: ReadonlySet<string> = new Set(['chatgpt.com'])
export const AI_ASSISTANT_HOSTS: ReadonlySet<string> = new Set([
  'chatgpt.com',
  'chat.openai.com',
  'perplexity.ai',
  'claude.ai',
  'gemini.google.com',
  'copilot.microsoft.com',
  'meta.ai',
  'you.com',
])
export const META_HOSTS: ReadonlySet<string> = new Set([
  'instagram.com',
  'l.instagram.com',
  'facebook.com',
  'l.facebook.com',
  'lm.facebook.com',
  'm.facebook.com',
])
export const GOOGLE_HOST_PATTERN = /^google\.[a-z.]+$/
export const META_CLICK_ID_PARAM = 'fbclid'

/** Events queued in the browser until the tracker script has loaded. */
export const MAX_QUEUED_EVENTS = 20

/** Same-origin prefix the browser uses for the Umami tracker and its collect endpoint. */
export const STATS_PROXY_PREFIX = '/stats'
/** Same-origin path next.config rewrites to the Umami tracker script. */
export const UMAMI_SCRIPT_PATH = `${STATS_PROXY_PREFIX}/script.js`
/** Same-origin path next.config rewrites to Umami's collect endpoint. */
export const UMAMI_COLLECT_PATH = `${STATS_PROXY_PREFIX}/api/send`
