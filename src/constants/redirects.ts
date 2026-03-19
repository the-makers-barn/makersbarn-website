/**
 * QR code redirect configuration
 * Maps URL slugs to external destination URLs
 *
 * Usage: /go/{slug} redirects to the configured destination
 * Change destination URLs here without reprinting QR codes
 */

export enum RedirectSlug {
  INSTAGRAM = 'instagram',
  GOOGLE_MAPS_REVIEW = 'google-maps-review',
  WHATSAPP_HORIZON = 'whatsapp-horizon',
  WHATSAPP_COSMOS = 'whatsapp-cosmos',
}

interface RedirectEntry {
  destination: string
  label: string
  enabled: boolean
}

export const REDIRECT_CONFIG: Record<RedirectSlug, RedirectEntry> = {
  [RedirectSlug.INSTAGRAM]: {
    destination: 'https://www.instagram.com/the.makersbarn/',
    label: 'Instagram',
    enabled: true,
  },
  [RedirectSlug.GOOGLE_MAPS_REVIEW]: {
    destination: 'https://search.google.com/local/writereview?placeid=ChIJ_9hzpb_nx0cRTezoja_BQ7g',
    label: 'Google Maps Review',
    enabled: true,
  },
  [RedirectSlug.WHATSAPP_HORIZON]: {
    destination: 'https://chat.whatsapp.com/IJB2OQRYO1sFPnaQrd6QeS',
    label: 'WhatsApp Horizon',
    enabled: true,
  },
  [RedirectSlug.WHATSAPP_COSMOS]: {
    destination: 'https://chat.whatsapp.com/Gpwux64ZfhU2TQmzH9TVvy',
    label: 'WhatsApp Cosmos',
    enabled: true,
  },
}

export const REDIRECT_FALLBACK_PATH = '/' as const

export const REDIRECT_STATUS = 302 as const

export const UTM_PARAMS = {
  SOURCE: 'utm_source',
  MEDIUM: 'utm_medium',
  CAMPAIGN: 'utm_campaign',
} as const

export const UTM_PREFIX = 'utm_' as const

export const UTM_DEFAULTS = {
  SOURCE: 'qr',
  MEDIUM: 'print',
} as const

export const ALLOWED_PASSTHROUGH_PARAMS = ['source', 'room'] as const
