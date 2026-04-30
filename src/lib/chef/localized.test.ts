import { describe, expect, it } from 'vitest'

import { Language } from '@/types'

import { localize } from './localized'

describe('localize', () => {
  const field = {
    [Language.EN]: 'Plant-forward, fire-cooked',
    [Language.NL]: 'Plantaardig, op vuur bereid',
  }

  it('returns the requested locale when present', () => {
    expect(localize(field, Language.EN)).toBe('Plant-forward, fire-cooked')
    expect(localize(field, Language.NL)).toBe('Plantaardig, op vuur bereid')
  })

  it('falls back to EN when the requested locale is missing', () => {
    expect(localize(field, Language.DE)).toBe('Plant-forward, fire-cooked')
  })

  it('works with non-string types (e.g., string arrays)', () => {
    const arrayField = {
      [Language.EN]: ['a', 'b'],
      [Language.NL]: ['x', 'y'],
    }
    expect(localize(arrayField, Language.NL)).toEqual(['x', 'y'])
    expect(localize(arrayField, Language.DE)).toEqual(['a', 'b'])
  })
})
