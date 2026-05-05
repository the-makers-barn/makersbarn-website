export function formatMinutesAsTime(minutes: number): string {
  const safe = Math.max(0, Math.min(24 * 60 - 1, Math.round(minutes)))
  const h = Math.floor(safe / 60)
  const m = safe % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function formatDuration(minutes: number): string {
  const safe = Math.max(0, Math.round(minutes))
  if (safe < 60) {
    return `${safe} min`
  }
  const h = Math.floor(safe / 60)
  const m = safe % 60
  if (m === 0) {
    return `${h}h`
  }
  return `${h}h ${m}m`
}

const TIME_PATTERN = /^([01]?\d|2[0-3]):([0-5]\d)$/

export function parseTimeToMinutes(value: string): number | null {
  const match = TIME_PATTERN.exec(value.trim())
  if (!match) {
    return null
  }
  return Number.parseInt(match[1], 10) * 60 + Number.parseInt(match[2], 10)
}
