import type { Language } from '@/types/common'
import type { BenchmarkPrice } from '@/types/tools'

export const formatEuro = (n: number): string => `€${Math.round(n).toLocaleString()}`
export const formatPercent = (n: number): string => `${Math.round(n * 100)}%`

export function formatBenchmark(
  benchmark: BenchmarkPrice,
  locale: Language,
  vatPercent: number,
  includeVat: boolean,
): string {
  const factor = includeVat && vatPercent > 0 ? 1 + vatPercent / 100 : 1
  return benchmark.amounts.reduce<string>((acc, amount, index) => {
    const adjusted = Math.round(amount * factor)
    return acc.replaceAll(`{${index}}`, formatEuro(adjusted))
  }, benchmark.template[locale])
}
