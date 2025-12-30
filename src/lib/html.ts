/**
 * HTML utility functions for safe content handling
 */

const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
} as const

/**
 * Escapes HTML special characters to prevent XSS attacks
 */
export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char] || char)
}

/**
 * Escapes HTML in all string values of an object
 */
export function escapeHtmlObject<T extends Record<string, unknown>>(obj: T): T {
  const result = { ...obj }

  for (const key in result) {
    const value = result[key]
    if (typeof value === 'string') {
      ;(result as Record<string, unknown>)[key] = escapeHtml(value)
    }
  }

  return result
}
