import type { AgendaLength, AgendaNiche } from '@/constants/tools'
import { escapeHtml } from '@/lib/html'
import type { AgendaResolvedDay } from '@/types/tools'

import { formatDuration, formatMinutesAsTime } from '../format'

interface RenderAgendaEmailInput {
  niche: AgendaNiche
  length: AgendaLength
  days: AgendaResolvedDay[]
  ctaLine: string
  ctaUrl: string
  ctaLabel: string
  greeting: string
  intro: string
  signoff: string
}

function renderBlockRow(block: AgendaResolvedDay['blocks'][number]): string {
  const time = escapeHtml(formatMinutesAsTime(block.startMinute))
  const duration = escapeHtml(formatDuration(block.durationMinute))
  const title = escapeHtml(block.title)
  const notes = block.notes ? escapeHtml(block.notes) : ''
  return `
    <tr>
      <td style="padding:0.4rem 0.75rem 0.4rem 0;color:#5c554c;font-variant-numeric:tabular-nums;white-space:nowrap;vertical-align:top">${time}</td>
      <td style="padding:0.4rem 0;vertical-align:top">
        <div style="font-weight:600;color:#1f130c">${title}</div>
        ${notes ? `<div style="color:#5c554c;font-size:0.9rem;margin-top:0.15rem">${notes}</div>` : ''}
        <div style="color:#b8894a;font-size:0.8rem;margin-top:0.15rem">${duration}</div>
      </td>
    </tr>
  `
}

function renderDaySection(day: AgendaResolvedDay): string {
  const title = escapeHtml(day.title)
  const heading = `Day ${day.dayIndex}`
  return `
    <section style="margin-bottom:1.5rem">
      <p style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#b8894a;font-weight:600;margin:0">${escapeHtml(heading)}</p>
      <h2 style="font-family:Georgia,serif;font-size:1.1rem;margin:0.25rem 0 0.5rem">${title}</h2>
      ${
        day.blocks.length === 0
          ? '<p style="color:#5c554c;font-size:0.9rem;margin:0">— No blocks scheduled —</p>'
          : `<table style="border-collapse:collapse;width:100%">${day.blocks.map(renderBlockRow).join('')}</table>`
      }
    </section>
  `
}

export function renderAgendaEmailHtml(input: RenderAgendaEmailInput): string {
  const body = input.days.map(renderDaySection).join('')
  return `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#1f130c;max-width:560px;margin:0 auto">
      <h1 style="font-family:Georgia,serif;font-size:1.5rem">${escapeHtml(input.greeting)}</h1>
      <p style="line-height:1.5">${escapeHtml(input.intro)}</p>
      ${body}
      <hr style="border:0;border-top:1px solid #e0d8c8;margin:2rem 0" />
      <p style="line-height:1.5">${escapeHtml(input.ctaLine)} <a href="${escapeHtml(input.ctaUrl)}" style="color:#294b3a;font-weight:600">${escapeHtml(input.ctaLabel)}</a></p>
      <p style="color:#5c554c">${escapeHtml(input.signoff)}</p>
    </div>
  `
}
