import { ToolVariant } from '@/constants/tools'
import type { CalculatorContentMap } from '@/types/tools'

import { YOGA_CONTENT } from './yogaContent'
import { WELLNESS_CONTENT } from './wellnessContent'
import { MEDITATION_CONTENT } from './meditationContent'
import { COACHING_CONTENT } from './coachingContent'
import { GENERIC_CONTENT } from './genericContent'

export { YOGA_CONTENT } from './yogaContent'
export { WELLNESS_CONTENT } from './wellnessContent'
export { MEDITATION_CONTENT } from './meditationContent'
export { COACHING_CONTENT } from './coachingContent'
export { GENERIC_CONTENT } from './genericContent'

export const CALCULATOR_CONTENT: CalculatorContentMap = {
  [ToolVariant.GENERIC]: GENERIC_CONTENT,
  [ToolVariant.YOGA]: YOGA_CONTENT,
  [ToolVariant.WELLNESS]: WELLNESS_CONTENT,
  [ToolVariant.MEDITATION]: MEDITATION_CONTENT,
  [ToolVariant.COACHING]: COACHING_CONTENT,
}

/*
 * Source citations are preserved in the original calculatorContent.ts file.
 */
