import type { CalculatorInputs, CalculatorResults } from '@/types/tools'

export function calculateRetreatProfitability(inputs: CalculatorInputs): CalculatorResults {
  const totalRevenue = inputs.guests * inputs.pricePerGuest

  const food = inputs.guests * inputs.nights * inputs.foodPerGuestPerDay
  const paymentFees = (totalRevenue * inputs.paymentFeePercent) / 100

  const venueTotal = inputs.venuePerNight * inputs.nights

  const costBreakdown = {
    venueAccommodation: venueTotal,
    food,
    facilitatorFee: inputs.facilitatorFee,
    marketingAndOther: inputs.marketingAndOther,
    travel: inputs.travel,
    insurance: inputs.insurance,
    paymentFees,
  }

  const totalCosts =
    costBreakdown.venueAccommodation +
    costBreakdown.food +
    costBreakdown.facilitatorFee +
    costBreakdown.marketingAndOther +
    costBreakdown.travel +
    costBreakdown.insurance +
    costBreakdown.paymentFees

  const netProfit = totalRevenue - totalCosts
  const profitMargin = totalRevenue > 0 ? netProfit / totalRevenue : 0

  const totalWorkdays = inputs.planningDays + inputs.nights
  const profitPerWorkday = totalWorkdays > 0 ? netProfit / totalWorkdays : 0

  const breakevenGuests = computeBreakevenGuests(inputs)

  return {
    totalRevenue,
    totalCosts,
    netProfit,
    profitMargin,
    profitPerWorkday,
    breakevenGuests,
    costBreakdown,
  }
}

function computeBreakevenGuests(inputs: CalculatorInputs): number {
  const fixedCosts =
    inputs.venuePerNight * inputs.nights +
    inputs.facilitatorFee +
    inputs.marketingAndOther +
    inputs.travel +
    inputs.insurance

  const variableCostPerGuest =
    inputs.nights * inputs.foodPerGuestPerDay +
    (inputs.pricePerGuest * inputs.paymentFeePercent) / 100

  const contributionPerGuest = inputs.pricePerGuest - variableCostPerGuest

  if (contributionPerGuest <= 0) {
    return Number.POSITIVE_INFINITY
  }

  return Math.ceil(fixedCosts / contributionPerGuest)
}
