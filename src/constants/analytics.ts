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
  WORKATION_HERO = 'workation-hero',
  WORKATION_FOOTER = 'workation-footer',
}
