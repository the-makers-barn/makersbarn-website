import { MilestoneStatus } from '@/constants/tools'
import { escapeHtml } from '@/lib/html'

interface RenderMilestoneRowInput {
  text: string
  status: MilestoneStatus
}

const STRIKE_THROUGH_STYLE = 'text-decoration:line-through;color:#9a9a9a'

export function renderMilestoneRow({ text, status }: RenderMilestoneRowInput): string {
  const safeText = escapeHtml(text)
  if (status === MilestoneStatus.DONE) {
    return `<li>✓ ${safeText}</li>`
  }
  if (status === MilestoneStatus.DISMISSED) {
    return `<li style="${STRIKE_THROUGH_STYLE}">${safeText}</li>`
  }
  return `<li>${safeText}</li>`
}
