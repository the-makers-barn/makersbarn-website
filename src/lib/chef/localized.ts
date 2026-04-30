import { Language, type LocalizedWithFallback } from '@/types'

export function localize<T>(field: LocalizedWithFallback<T>, lang: Language): T {
  return field[lang] ?? field[Language.EN]
}
