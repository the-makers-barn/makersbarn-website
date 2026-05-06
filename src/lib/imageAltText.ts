import { Language } from '@/types'
import { IMAGE_ALT_TEXT } from '@/data/imageAltText'

/**
 * Retrieves alt text for an image by its key and language.
 *
 * @param key - The image key. Either a file path ('/images/sauna.jpg') or a logical identifier ('chef.{slug}.avatar').
 * @param language - The language code (defaults to English)
 * @returns The alt text for the image in the specified language, or English if not available, or empty string if image not found
 */
export function getImageAltText(
  key: string,
  language: Language = Language.EN
): string {
  if (!Object.prototype.hasOwnProperty.call(IMAGE_ALT_TEXT, key)) {
    return ''
  }

  const imageData = IMAGE_ALT_TEXT[key]
  return imageData[language] || imageData[Language.EN] || ''
}

