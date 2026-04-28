import { describe, expect, it } from 'vitest'

import type { CalculatorInputs } from '@/types/tools'

import { calculateRetreatProfitability } from './calculate'

const baseYogaInputs: CalculatorInputs = {
  guests: 12,
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
}

describe('calculateRetreatProfitability', () => {
  it('computes total revenue as guests * pricePerGuest', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.totalRevenue).toBe(14400)
  })

  it('computes total food cost as guests * nights * foodPerGuestPerDay', () => {
    const r = calculateRetreatProfitability(baseYogaInputs)
    expect(r.costBreakdown.food).toBe(2400)
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
    // fixed = venue(900*5=4500) + facilitator(2500) + marketing(800) + insurance(150) + co(0) + travel(0) = 7950
    // contribution per guest = price - foodPerDay*nights - price*paymentFee%
    //                        = 1200 - 200 - 36 = 964
    // breakeven = ceil(7950 / 964) = 9 (since 7950/964 ≈ 8.247)
    expect(r.breakevenGuests).toBe(9)
  })

  it('returns 0 margin and Infinity breakeven when revenue is zero', () => {
    const inputs: CalculatorInputs = { ...baseYogaInputs, guests: 0, pricePerGuest: 0 }
    const r = calculateRetreatProfitability(inputs)
    expect(r.totalRevenue).toBe(0)
    expect(r.profitMargin).toBe(0)
    expect(r.breakevenGuests).toBe(Number.POSITIVE_INFINITY)
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
