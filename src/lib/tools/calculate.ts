import type { CalculatorInputs, CalculatorResults } from '@/types/tools'

interface NetInputs {
  pricePerGuest: number
  venuePerNight: number
  foodPerGuestPerDay: number
  facilitatorFee: number
  marketingAndOther: number
  travel: number
  insurance: number
}

function toNet(inputs: CalculatorInputs): NetInputs {
  if (!inputs.pricesIncludeVat || inputs.vatPercent <= 0) {
    return {
      pricePerGuest: inputs.pricePerGuest,
      venuePerNight: inputs.venuePerNight,
      foodPerGuestPerDay: inputs.foodPerGuestPerDay,
      facilitatorFee: inputs.facilitatorFee,
      marketingAndOther: inputs.marketingAndOther,
      travel: inputs.travel,
      insurance: inputs.insurance,
    }
  }
  const divisor = 1 + inputs.vatPercent / 100
  return {
    pricePerGuest: inputs.pricePerGuest / divisor,
    venuePerNight: inputs.venuePerNight / divisor,
    foodPerGuestPerDay: inputs.foodPerGuestPerDay / divisor,
    facilitatorFee: inputs.facilitatorFee / divisor,
    marketingAndOther: inputs.marketingAndOther / divisor,
    travel: inputs.travel / divisor,
    insurance: inputs.insurance / divisor,
  }
}

export function calculateRetreatProfitability(inputs: CalculatorInputs): CalculatorResults {
  const net = toNet(inputs)
  const totalHeadcount = inputs.guests + Math.max(0, inputs.teamCount)

  const totalRevenue = inputs.guests * net.pricePerGuest
  const food = totalHeadcount * inputs.nights * net.foodPerGuestPerDay
  const paymentFees = (totalRevenue * inputs.paymentFeePercent) / 100
  const venueTotal = net.venuePerNight * inputs.nights

  const costBreakdown = {
    venueAccommodation: venueTotal,
    food,
    facilitatorFee: net.facilitatorFee,
    marketingAndOther: net.marketingAndOther,
    travel: net.travel,
    insurance: net.insurance,
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

  const breakevenGuests = computeBreakevenGuests(inputs, net)

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

function computeBreakevenGuests(inputs: CalculatorInputs, net: NetInputs): number {
  const teamFood = Math.max(0, inputs.teamCount) * inputs.nights * net.foodPerGuestPerDay
  const fixedCosts =
    net.venuePerNight * inputs.nights +
    net.facilitatorFee +
    net.marketingAndOther +
    net.travel +
    net.insurance +
    teamFood

  const variableCostPerGuest =
    inputs.nights * net.foodPerGuestPerDay +
    (net.pricePerGuest * inputs.paymentFeePercent) / 100

  const contributionPerGuest = net.pricePerGuest - variableCostPerGuest

  if (contributionPerGuest <= 0) {
    return Number.POSITIVE_INFINITY
  }

  return Math.ceil(fixedCosts / contributionPerGuest)
}
