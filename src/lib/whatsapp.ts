import { CONTACT_URLS } from '@/constants/contact'

export function getWhatsAppUrl(message: string): string {
  const separator = CONTACT_URLS.WHATSAPP.includes('?') ? '&' : '?'
  return `${CONTACT_URLS.WHATSAPP}${separator}text=${encodeURIComponent(message)}`
}
