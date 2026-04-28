import { describe, expect, it } from 'vitest'

import type { CalculatorInputs } from '@/types/tools'

import { decodeCalculatorInputs, encodeCalculatorInputs } from './urlState'

const sample: CalculatorInputs = {
  guests: 12,
  nights: 5,
  pricePerGuest: 1200,
  venuePerNight: 900,
  foodPerGuestPerDay: 40,
  facilitatorFee: 2500,
  marketingAndOther: 800,
  coFacilitators: 0,
  travel: 0,
  insurance: 150,
  paymentFeePercent: 3,
  planningDays: 5,
}

describe('encodeCalculatorInputs', () => {
  it('encodes all numeric fields into URLSearchParams', () => {
    const params = encodeCalculatorInputs(sample)
    expect(params.get('g')).toBe('12')
    expect(params.get('n')).toBe('5')
    expect(params.get('p')).toBe('1200')
    expect(params.get('v')).toBe('900')
    expect(params.get('f')).toBe('40')
    expect(params.get('ff')).toBe('2500')
    expect(params.get('m')).toBe('800')
    expect(params.get('cf')).toBe('0')
    expect(params.get('t')).toBe('0')
    expect(params.get('i')).toBe('150')
    expect(params.get('pf')).toBe('3')
    expect(params.get('pd')).toBe('5')
  })
})

describe('decodeCalculatorInputs', () => {
  it('round-trips through encode and decode unchanged', () => {
    const params = encodeCalculatorInputs(sample)
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded).toEqual(sample)
  })

  it('falls back to defaults for missing params', () => {
    const params = new URLSearchParams()
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded).toEqual(sample)
  })

  it('falls back to defaults for non-numeric values', () => {
    const params = new URLSearchParams({ g: 'abc' })
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded.guests).toBe(sample.guests)
  })

  it('falls back to defaults for negative or out-of-range values', () => {
    const params = new URLSearchParams({ g: '-5', n: '999' })
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded.guests).toBe(sample.guests)
    expect(decoded.nights).toBe(sample.nights)
  })

  it('preserves valid partial overrides', () => {
    const params = new URLSearchParams({ g: '20', p: '2000' })
    const decoded = decodeCalculatorInputs(params, sample)
    expect(decoded.guests).toBe(20)
    expect(decoded.pricePerGuest).toBe(2000)
    expect(decoded.nights).toBe(sample.nights)
  })
})
