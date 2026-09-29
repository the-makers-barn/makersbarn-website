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

/** Environment variables the route needs before it can build a response. Missing any of them is a 503, not a 502 from a Umami client built with an empty base URL. */
enum RequiredEnvVar {
  INSIGHTS_API_SECRET = 'INSIGHTS_API_SECRET',
  UMAMI_URL = 'UMAMI_URL',
  UMAMI_API_KEY = 'UMAMI_API_KEY',
  UMAMI_WEBSITE_ID = 'NEXT_PUBLIC_UMAMI_WEBSITE_ID',
}

const loggedMissingEnvVars = new Set<RequiredEnvVar>()

/** Logs a missing required variable once per process, so a misconfigured deploy does not spam the log on every request. */
function logMissingEnvVarOnce(name: RequiredEnvVar): void {
  if (loggedMissingEnvVars.has(name)) {
    return
  }
  loggedMissingEnvVars.add(name)
  logger.error(`${name} is not set`)
}

/** First required Umami variable that is empty, or null when all are set. */
function firstMissingUmamiVar(umamiUrl: string, umamiApiKey: string, umamiWebsiteId: string): RequiredEnvVar | null {
  const entries: [RequiredEnvVar, string][] = [
    [RequiredEnvVar.UMAMI_URL, umamiUrl],
    [RequiredEnvVar.UMAMI_API_KEY, umamiApiKey],
    [RequiredEnvVar.UMAMI_WEBSITE_ID, umamiWebsiteId],
  ]
  return entries.find(([, value]) => value === '')?.[0] ?? null
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
    logMissingEnvVarOnce(RequiredEnvVar.INSIGHTS_API_SECRET)
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

  const umamiUrl = process.env.UMAMI_URL ?? ''
  const umamiApiKey = process.env.UMAMI_API_KEY ?? ''
  const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? ''
  const missingUmamiVar = firstMissingUmamiVar(umamiUrl, umamiApiKey, umamiWebsiteId)
  if (missingUmamiVar !== null) {
    logMissingEnvVarOnce(missingUmamiVar)
    return errorResponse(InsightsErrorCode.NOT_CONFIGURED, HttpStatus.SERVICE_UNAVAILABLE)
  }

  const now = new Date()
  const reader = createUmamiClient({ baseUrl: umamiUrl, websiteId: umamiWebsiteId, apiKey: umamiApiKey })

  try {
    const insights = await withBudget(buildWebInsights(reader, resolvePeriods(period, now), now), INSIGHTS_TIMEOUT_MS)
    return json(insights, HttpStatus.OK)
  } catch (error) {
    if (error instanceof BuildTimeoutError) {
      logger.warn('insights build timed out', { period })
      return errorResponse(InsightsErrorCode.TIMEOUT, HttpStatus.GATEWAY_TIMEOUT)
    }
    if (error instanceof UmamiError) {
      logger.error('umami request failed', { period, status: error.status }, error)
      return errorResponse(InsightsErrorCode.UPSTREAM, HttpStatus.BAD_GATEWAY)
    }
    logger.error('insights request failed', { period }, error)
    throw error
  }
}
