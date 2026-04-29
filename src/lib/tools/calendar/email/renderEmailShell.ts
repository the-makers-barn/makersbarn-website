import { escapeHtml } from '@/lib/html'

interface RenderEmailShellInput {
  greeting: string
  introHtml: string
  bodyHtml: string
  ctaLine: string
  ctaUrl: string
  ctaLabel: string
  signoff: string
}

export function renderEmailShell(input: RenderEmailShellInput): string {
  return `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#1f130c;max-width:560px;margin:0 auto">
      <h1 style="font-family:Georgia,serif;font-size:1.5rem">${escapeHtml(input.greeting)}</h1>
      <p style="line-height:1.5">${input.introHtml}</p>
      ${input.bodyHtml}
      <hr style="border:0;border-top:1px solid #e0d8c8;margin:2rem 0" />
      <p style="line-height:1.5">${escapeHtml(input.ctaLine)} <a href="${escapeHtml(input.ctaUrl)}" style="color:#294b3a;font-weight:600">${escapeHtml(input.ctaLabel)}</a></p>
      <p style="color:#5c554c">${escapeHtml(input.signoff)}</p>
    </div>
  `
}
