import {
  AUDIT_CATEGORIES_ORDER,
  type AuditCategory,
  type AuditQuestion,
  CATEGORY_RISK_BANDS,
} from '@/data/tools'

export type RiskBand = 'green' | 'amber' | 'red'

export interface CategoryRisk {
  category: AuditCategory
  score: number
  max: number
  band: RiskBand
}

export interface FlaggedMistake {
  question: AuditQuestion
  weighted: number
}

export function bandFor(score: number, max: number): RiskBand {
  if (max === 0) {
    return 'green'
  }
  const ratio = score / max
  for (const band of CATEGORY_RISK_BANDS) {
    if (ratio >= band.min && ratio <= band.max) {
      return band.band
    }
  }
  return 'green'
}

const weightOf = (
  question: AuditQuestion,
  optionId: string | undefined,
): number => {
  if (!optionId) {
    return 0
  }
  const opt = question.options.find((o) => o.id === optionId)
  if (!opt) {
    return 0
  }
  return opt.weight * (question.multiplier ?? 1)
}

export function scoreByCategory(
  questions: readonly AuditQuestion[],
  answers: Record<string, string>,
): CategoryRisk[] {
  return AUDIT_CATEGORIES_ORDER.map((category) => {
    const qs = questions.filter((q) => q.category === category)
    const max = qs.reduce((sum, q) => sum + 2 * (q.multiplier ?? 1), 0)
    const score = qs.reduce((sum, q) => sum + weightOf(q, answers[q.id]), 0)
    return { category, score, max, band: bandFor(score, max) }
  })
}

export function topFlaggedMistakes(
  questions: readonly AuditQuestion[],
  answers: Record<string, string>,
  limit = 5,
): FlaggedMistake[] {
  const flagged: FlaggedMistake[] = []
  for (const q of questions) {
    const weighted = weightOf(q, answers[q.id])
    if (weighted > 0) {
      flagged.push({ question: q, weighted })
    }
  }
  flagged.sort((a, b) => b.weighted - a.weighted)
  return flagged.slice(0, limit)
}
