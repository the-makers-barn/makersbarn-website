import { CALCULATOR_INPUT_RANGES, CALCULATOR_URL_PARAMS } from '@/constants/tools'
import type { CalculatorInputs } from '@/types/tools'

type NumericInputKey = {
  [K in keyof CalculatorInputs]: CalculatorInputs[K] extends number ? K : never
}[keyof CalculatorInputs]

interface FieldSpec {
  key: NumericInputKey
  param: string
  min: number
  max: number
}

const FIELD_SPECS: FieldSpec[] = [
  { key: 'guests', param: CALCULATOR_URL_PARAMS.GUESTS, min: CALCULATOR_INPUT_RANGES.GUESTS_MIN, max: CALCULATOR_INPUT_RANGES.GUESTS_MAX },
  { key: 'nights', param: CALCULATOR_URL_PARAMS.NIGHTS, min: CALCULATOR_INPUT_RANGES.NIGHTS_MIN, max: CALCULATOR_INPUT_RANGES.NIGHTS_MAX },
  { key: 'pricePerGuest', param: CALCULATOR_URL_PARAMS.PRICE_PER_GUEST, min: CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MIN, max: CALCULATOR_INPUT_RANGES.PRICE_PER_GUEST_MAX },
  { key: 'venuePerNight', param: CALCULATOR_URL_PARAMS.VENUE, min: CALCULATOR_INPUT_RANGES.VENUE_PER_NIGHT_MIN, max: CALCULATOR_INPUT_RANGES.VENUE_PER_NIGHT_MAX },
  { key: 'foodPerGuestPerDay', param: CALCULATOR_URL_PARAMS.FOOD_PER_DAY, min: CALCULATOR_INPUT_RANGES.FOOD_PER_GUEST_PER_DAY_MIN, max: CALCULATOR_INPUT_RANGES.FOOD_PER_GUEST_PER_DAY_MAX },
  { key: 'facilitatorFee', param: CALCULATOR_URL_PARAMS.FACILITATOR_FEE, min: CALCULATOR_INPUT_RANGES.FACILITATOR_FEE_MIN, max: CALCULATOR_INPUT_RANGES.FACILITATOR_FEE_MAX },
  { key: 'marketingAndOther', param: CALCULATOR_URL_PARAMS.MARKETING_OTHER, min: CALCULATOR_INPUT_RANGES.MARKETING_AND_OTHER_MIN, max: CALCULATOR_INPUT_RANGES.MARKETING_AND_OTHER_MAX },
  { key: 'travel', param: CALCULATOR_URL_PARAMS.TRAVEL, min: CALCULATOR_INPUT_RANGES.TRAVEL_MIN, max: CALCULATOR_INPUT_RANGES.TRAVEL_MAX },
  { key: 'insurance', param: CALCULATOR_URL_PARAMS.INSURANCE, min: CALCULATOR_INPUT_RANGES.INSURANCE_MIN, max: CALCULATOR_INPUT_RANGES.INSURANCE_MAX },
  { key: 'paymentFeePercent', param: CALCULATOR_URL_PARAMS.PAYMENT_FEE_PERCENT, min: CALCULATOR_INPUT_RANGES.PAYMENT_FEE_PERCENT_MIN, max: CALCULATOR_INPUT_RANGES.PAYMENT_FEE_PERCENT_MAX },
  { key: 'planningDays', param: CALCULATOR_URL_PARAMS.PLANNING_DAYS, min: CALCULATOR_INPUT_RANGES.PLANNING_DAYS_MIN, max: CALCULATOR_INPUT_RANGES.PLANNING_DAYS_MAX },
]

export function encodeCalculatorInputs(inputs: CalculatorInputs): URLSearchParams {
  const params = new URLSearchParams()
  for (const spec of FIELD_SPECS) {
    params.set(spec.param, String(inputs[spec.key]))
  }
  params.set(CALCULATOR_URL_PARAMS.HIRES_FACILITATORS, inputs.hiresFacilitators ? '1' : '0')
  return params
}

export function decodeCalculatorInputs(
  params: URLSearchParams,
  defaults: CalculatorInputs
): CalculatorInputs {
  const decoded = { ...defaults }
  for (const spec of FIELD_SPECS) {
    const raw = params.get(spec.param)
    if (raw === null) { continue }
    const num = Number(raw)
    if (!Number.isFinite(num)) { continue }
    if (num < spec.min || num > spec.max) { continue }
    decoded[spec.key] = num
  }
  const hiresRaw = params.get(CALCULATOR_URL_PARAMS.HIRES_FACILITATORS)
  if (hiresRaw === '1') {
    decoded.hiresFacilitators = true
  } else if (hiresRaw === '0') {
    decoded.hiresFacilitators = false
  }
  if (!decoded.hiresFacilitators) {
    decoded.facilitatorFee = 0
  }
  return decoded
}
