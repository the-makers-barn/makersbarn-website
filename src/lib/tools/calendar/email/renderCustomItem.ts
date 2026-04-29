import { MilestoneStatus } from '@/constants/tools'
import { escapeHtml } from '@/lib/html'

interface RenderCustomItemInput {
  text: string
  status: MilestoneStatus
}

const STRIKE_THROUGH_STYLE = 'text-decoration:line-through;color:#9a9a9a'
const CUSTOM_BADGE = '<span style="font-size:0.75rem;color:#b8894a;text-transform:uppercase;letter-spacing:0.04em">custom</span>'

export function renderCustomItem({ text, status }: RenderCustomItemInput): string {
  const safeText = escapeHtml(text)
  const prefix = status === MilestoneStatus.DONE ? '✓ ' : ''
  const style = status === MilestoneStatus.DISMISSED ? ` style="${STRIKE_THROUGH_STYLE}"` : ''
  return `<li${style}>${prefix}${safeText} ${CUSTOM_BADGE}</li>`
}
