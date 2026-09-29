import {
  INSIGHTS_RATE_LIMIT,
  INSIGHTS_RATE_LIMIT_KEY,
  INSIGHTS_TIMEOUT_MS,
  InsightsErrorCode,
  InsightsPeriod,
} from '@/constants/insights'
import { isAuthorized } from '@/lib/insights/auth'
import { buildWebInsights } from '@/lib/insights/buildWebInsights'
import { resolvePeriods } from '@/lib/insights/periods'
import { createLogger } from '@/lib/logger'
import { RateLimiter } from '@/lib/security'
import { createUmamiClient, UmamiError } from '@/services/umami'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const logger = createLogger('insights-web')
const rateLimiter = new RateLimiter(INSIGHTS_RATE_LIMIT)

const NO_STORE = 'private, no-store'
const PERIOD_PARAM = 'period'

enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  TOO_MANY_REQUESTS = 429,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

function json(body: unknown, status: HttpStatus): Response {
  return Response.json(body, { status, headers: { 'cache-control': NO_STORE } })
}

function errorResponse(code: InsightsErrorCode, status: HttpStatus): Response {
  return json({ error: code }, status)
}

function isPeriod(value: string | null): value is InsightsPeriod {
  return value !== null && (Object.values(InsightsPeriod) as string[]).includes(value)
}

/**
 * Duck-types on `Error.name` rather than `instanceof`: in tests, `vi.resetModules()`
 * reloads `@/services/umami` for the dynamically re-imported route, so an `UmamiError`
 * built from the test file's stale top-level import would fail an `instanceof` check
 * against the freshly loaded class even though it is the same error type.
 */
function isUmamiError(error: unknown): error is UmamiError {
  return error instanceof Error && error.name === UmamiError.name
}

class BuildTimeoutError extends Error {}

function withBudget<T>(work: Promise<T>, budgetMs: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new BuildTimeoutError('insights build exceeded its budget')), budgetMs)
    work.then(resolve, reject).finally(() => clearTimeout(timer))
  })
}

export async function GET(request: Request): Promise<Response> {
  const secret = process.env.INSIGHTS_API_SECRET ?? ''
  if (secret === '') {
    logger.error('INSIGHTS_API_SECRET is not set')
    return errorResponse(InsightsErrorCode.NOT_CONFIGURED, HttpStatus.SERVICE_UNAVAILABLE)
  }
  if (!isAuthorized(request.headers.get('authorization'), secret)) {
    return errorResponse(InsightsErrorCode.UNAUTHORIZED, HttpStatus.UNAUTHORIZED)
  }
  if (!rateLimiter.isAllowed(INSIGHTS_RATE_LIMIT_KEY)) {
    return errorResponse(InsightsErrorCode.RATE_LIMITED, HttpStatus.TOO_MANY_REQUESTS)
  }
  const period = new URL(request.url).searchParams.get(PERIOD_PARAM)
  if (!isPeriod(period)) {
    return errorResponse(InsightsErrorCode.BAD_PERIOD, HttpStatus.BAD_REQUEST)
  }

  const now = new Date()
  const reader = createUmamiClient({
    baseUrl: process.env.UMAMI_URL ?? '',
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? '',
    apiKey: process.env.UMAMI_API_KEY ?? '',
  })

  try {
    const insights = await withBudget(buildWebInsights(reader, resolvePeriods(period, now), now), INSIGHTS_TIMEOUT_MS)
    return json(insights, HttpStatus.OK)
  } catch (error) {
    if (error instanceof BuildTimeoutError) {
      logger.warn('insights build timed out', { period })
      return errorResponse(InsightsErrorCode.TIMEOUT, HttpStatus.GATEWAY_TIMEOUT)
    }
    if (isUmamiError(error)) {
      logger.error('umami request failed', { period, status: error.status }, error)
      return errorResponse(InsightsErrorCode.UPSTREAM, HttpStatus.BAD_GATEWAY)
    }
    throw error
  }
}
