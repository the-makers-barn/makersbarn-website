import { describe, expect, it } from 'vitest'

import type { CalculatorInputs } from '@/types/tools'

import { calculateRetreatProfitability } from './calculate'

const baseYogaInputs: CalculatorInputs = {
  guests: 12,
  teamCount: 0,
  nights: 5,
  pricePerGuest: 1200,
  venuePerNight: 900,
  foodPerGuestPerDay: 40,
  facilitatorFee: 2500,
  marketingAndOther: 800,
  travel: 0,
  insurance: 150,
  paymentFeePercent: 3,
  planningDays: 5,
  hiresFacilitators: false,
  pricesIncludeVat: false,
  vatPercent: 0,
}

describe('calculateRetreatProfitability', () => {
  it('computes total revenue as guests * pricePerGuest', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.totalRevenue).toBe(14400)
  })

  it('computes total food cost as guests * nights * foodPerGuestPerDay (no team)', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.costBreakdown.food).toBe(2400)
  })

  it('includes the team in food cost when teamCount > 0', () => {
    const r = calculateRetreatProfitability({ ...baseYogaInputs, teamCount: 2 })
    // (12 + 2) * 5 * 40 = 2800
    expect(r.costBreakdown.food).toBe(2800)
  })

  it('computes payment fees as percentage of revenue', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.costBreakdown.paymentFees).toBeCloseTo(432, 2)
  })

  it('sums all cost categories into totalCosts', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    // venue(900*5=4500) + food(2400) + facilitator(2500) + marketing(800) + 0 + 0 + insurance(150) + fees(432) = 10782
    expect(r.totalCosts).toBeCloseTo(10782, 2)
  })

  it('computes net profit as revenue minus total costs', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.netProfit).toBeCloseTo(3618, 2)
  })

  it('computes profit margin as netProfit / totalRevenue', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.profitMargin).toBeCloseTo(3618 / 14400, 4)
  })

  it('computes profit per workday from planningDays + nights', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.profitPerWorkday).toBeCloseTo(3618 / 10, 2)
  })

  it('computes breakeven guests as ceil of fixed costs over per-guest contribution', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    // fixed = venue(4500) + facilitator(2500) + marketing(800) + insurance(150) + teamFood(0) = 7950
    // contribution per guest = 1200 - 200 - 36 = 964
    // breakeven = ceil(7950 / 964) = 9
    expect(r.breakevenGuests).toBe(9)
  })

  it('treats team food as a fixed cost in the breakeven calculation', () => {
    const r = calculateRetreatProfitability({ ...baseYogaInputs, teamCount: 2 })
    // fixed = 4500 + 2500 + 800 + 150 + teamFood(2*5*40=400) = 8350
    // contribution per guest = 964
    // breakeven = ceil(8350 / 964) = 9 (since 8350/964 ≈ 8.66)
    expect(r.breakevenGuests).toBe(9)
  })

  it('returns 0 margin and Infinity breakeven when revenue is zero', () => {
    const inputs: CalculatorInputs = { ...baseYogaInputs, guests: 0, pricePerGuest: 0 }
    const r = calculateRetreatProfitability(inputs)
    expect(r.totalRevenue).toBe(0)
    expect(r.profitMargin).toBe(0)
    expect(r.breakevenGuests).toBe(Number.POSITIVE_INFINITY)
  })

  it('strips VAT from inputs when pricesIncludeVat is true', () => {
    const r = calculateRetreatProfitability({
      ...baseYogaInputs,
      pricesIncludeVat: true,
      vatPercent: 9,
    })
    // revenue: 12 * (1200 / 1.09) = 12 * 1100.917... = 13211.0091...
    expect(r.totalRevenue).toBeCloseTo((12 * 1200) / 1.09, 2)
    // food: 12 * 5 * (40 / 1.09)
    expect(r.costBreakdown.food).toBeCloseTo((12 * 5 * 40) / 1.09, 2)
    // venue: 5 * (900 / 1.09)
    expect(r.costBreakdown.venueAccommodation).toBeCloseTo((5 * 900) / 1.09, 2)
  })

  it('keeps inputs as-entered when pricesIncludeVat is false', () => {
    const withoutVat = calculateRetreatProfitability(baseYogaInputs)
    const sameButFlagOn = calculateRetreatProfitability({
      ...baseYogaInputs,
      pricesIncludeVat: false,
      vatPercent: 21,
    })
    expect(sameButFlagOn.totalRevenue).toBe(withoutVat.totalRevenue)
    expect(sameButFlagOn.costBreakdown.food).toBe(withoutVat.costBreakdown.food)
  })

  it('handles a coaching retreat scenario (smaller, higher-priced)', () => {
    const inputs: CalculatorInputs = {
      ...baseYogaInputs,
      guests: 6,
      nights: 4,
      pricePerGuest: 3200,
      venuePerNight: 875,
      foodPerGuestPerDay: 50,
      facilitatorFee: 5000,
    }
    const r = calculateRetreatProfitability(inputs)
    expect(r.totalRevenue).toBe(19200)
    // food: 6*4*50 = 1200; payment fees: 19200*0.03 = 576
    // total costs: 3500+1200+5000+800+0+0+150+576 = 11226
    expect(r.totalCosts).toBeCloseTo(11226, 2)
    expect(r.netProfit).toBeCloseTo(7974, 2)
  })

})
