import { Language } from '@/types/common'
import type { LocalizedString } from '@/types/tools'

export const localized = (en: string, nl: string): LocalizedString => ({
  [Language.EN]: en,
  [Language.NL]: nl,
  [Language.DE]: en,
  [Language.ES]: en,
  [Language.FR]: en,
})
