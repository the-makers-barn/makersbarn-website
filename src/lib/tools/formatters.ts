export const formatEuro = (n: number): string => `€${Math.round(n).toLocaleString()}`
export const formatPercent = (n: number): string => `${Math.round(n * 100)}%`
