/**
 * Simple bot detection and device classification
 * Used to filter crawlers from QR code scan statistics
 */

const BOT_PATTERNS = [
  'bot',
  'crawl',
  'spider',
  'slurp',
  'mediapartners',
  'facebookexternalhit',
  'linkedinbot',
  'twitterbot',
  'telegrambot',
  'discordbot',
  'applebot',
  'googlebot',
  'bingbot',
  'yandexbot',
  'baiduspider',
  'duckduckbot',
  'semrushbot',
  'ahrefsbot',
  'mj12bot',
  'dotbot',
  'petalbot',
  'uptimerobot',
  'pingdom',
  'headlesschrome',
  'phantomjs',
  'prerender',
  'lighthouse',
  'pagespeed',
] as const

export enum DeviceCategory {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
  UNKNOWN = 'unknown',
}

const TABLET_PATTERN = /ipad|android(?!.*mobile)|tablet/i
const MOBILE_PATTERN = /mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i

export function isBot(userAgent: string): boolean {
  const lowerUA = userAgent.toLowerCase()
  return BOT_PATTERNS.some((pattern) => lowerUA.includes(pattern))
}

export function getDeviceCategory(userAgent: string): DeviceCategory {
  if (TABLET_PATTERN.test(userAgent)) {
    return DeviceCategory.TABLET
  }
  if (MOBILE_PATTERN.test(userAgent)) {
    return DeviceCategory.MOBILE
  }
  if (userAgent && userAgent !== 'unknown') {
    return DeviceCategory.DESKTOP
  }
  return DeviceCategory.UNKNOWN
}
