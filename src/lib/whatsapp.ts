import { CONTACT_URLS } from '@/constants/contact'

export function getWhatsAppUrl(message: string): string {
  return `${CONTACT_URLS.WHATSAPP}?text=${encodeURIComponent(message)}`
}
