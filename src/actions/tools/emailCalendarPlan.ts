'use server'

/**
 * STUB — replaced by the real implementation in Phase 6.
 *
 * Phase 5 ships the UI that calls this action. Until Phase 6 lands the
 * Postmark + rate-limit + Slack pipeline, the stub returns a
 * non-success result so the form's error path is exercised in
 * production. Phase 6 will replace the body of this function with the
 * real send.
 */

import type { EmailCalendarPlanInput, EmailCalendarPlanResult } from '@/types/tools'

export function emailCalendarPlan(
  _input: EmailCalendarPlanInput,
): Promise<EmailCalendarPlanResult> {
  return Promise.resolve({ ok: false, error: 'send_failed' })
}
