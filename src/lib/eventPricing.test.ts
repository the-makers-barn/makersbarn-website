import { describe, expect, it } from 'vitest'

import { Language } from '@/types'

import { formatEventPrice, formatWholeEventPrice } from './eventPricing'

const normalise = (value: string) => value.replace(/\u00a0/g, ' ')

describe('formatEventPrice', () => {
  it('keeps the euro sign in front for English', () => {
    expect(normalise(formatEventPrice('60.80', 'EUR', Language.EN))).toBe('€60.80')
  })

  it('uses a comma decimal and spaced sign for Dutch, matching the Hipsy widget', () => {
    expect(normalise(formatEventPrice('60.80', 'EUR', Language.NL))).toBe('€ 60,80')
  })

  it('puts the sign after the amount for German', () => {
    expect(normalise(formatEventPrice('89.99', 'EUR', Language.DE))).toBe('89,99 €')
  })
})

describe('formatWholeEventPrice', () => {
  it('drops the decimals in every language', () => {
    expect(normalise(formatWholeEventPrice('795', 'EUR', Language.EN))).toBe('€795')
    expect(normalise(formatWholeEventPrice('795', 'EUR', Language.NL))).toBe('€ 795')
    expect(normalise(formatWholeEventPrice('795', 'EUR', Language.DE))).toBe('795 €')
  })
})
