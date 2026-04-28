import { CALCULATOR_INPUT_RANGES, CALCULATOR_URL_PARAMS, RetreatRole } from '@/constants/tools'
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
  { key: 'venuePerNight', param: CALCULATOR_URL_PARAMS.VENUE, min: 0, max: 1_000_000 },
  { key: 'foodPerGuestPerDay', param: CALCULATOR_URL_PARAMS.FOOD_PER_DAY, min: 0, max: 500 },
  { key: 'facilitatorFee', param: CALCULATOR_URL_PARAMS.FACILITATOR_FEE, min: 0, max: 1_000_000 },
  { key: 'marketingAndOther', param: CALCULATOR_URL_PARAMS.MARKETING_OTHER, min: 0, max: 1_000_000 },
  { key: 'travel', param: CALCULATOR_URL_PARAMS.TRAVEL, min: 0, max: 1_000_000 },
  { key: 'insurance', param: CALCULATOR_URL_PARAMS.INSURANCE, min: 0, max: 100_000 },
  { key: 'paymentFeePercent', param: CALCULATOR_URL_PARAMS.PAYMENT_FEE_PERCENT, min: 0, max: 20 },
  { key: 'planningDays', param: CALCULATOR_URL_PARAMS.PLANNING_DAYS, min: 0, max: 365 },
]

const VALID_ROLES = new Set<string>(Object.values(RetreatRole))

export function encodeCalculatorInputs(inputs: CalculatorInputs): URLSearchParams {
  const params = new URLSearchParams()
  for (const spec of FIELD_SPECS) {
    params.set(spec.param, String(inputs[spec.key]))
  }
  params.set(CALCULATOR_URL_PARAMS.ROLE, inputs.role)
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
  const roleRaw = params.get(CALCULATOR_URL_PARAMS.ROLE)
  if (roleRaw !== null && VALID_ROLES.has(roleRaw)) {
    decoded.role = roleRaw as RetreatRole
  }
  return decoded
}
