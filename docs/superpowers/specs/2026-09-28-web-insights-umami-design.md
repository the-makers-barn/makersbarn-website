# Web insights: Umami analytics and the `/api/insights/web` endpoint

Date: 2026-09-28, revised 2026-09-29 after three reviews (backend/security, frontend tracking, Umami API verification against v3.4.0 source and docs)
Status: approved in conversation; revised per review; being implemented

## Purpose

The site moved from Vercel to Railway on 2026-09-24 and lost Vercel Analytics. Benny runs a scheduled Claude task that writes a recurring email. That task should grow into a weekly and monthly business digest covering web traffic first, and later bookings, back office and tasks. This design gives the website a self-hosted analytics store (Umami) and one read endpoint that hands the scheduled task clean numbers. The website never writes or sends the email.

Decisions already taken:

- Umami, self-hosted in the existing Railway project, chosen over PostHog Cloud, Plausible, Rybbit and Cloudflare Web Analytics (research artifact of 2026-09-26).
- The insights data lives behind an endpoint on the site, not in direct Umami API calls from the scheduled task.
- Recipients and wording of the email belong to the scheduled task. This repo only exposes data.

## Non-goals

- No email sending, no Claude call and no cron job in this repository.
- No dashboard of our own. Umami's dashboard at `analytics.themakersbarn.nl` is the UI.
- No consent banner work. Umami is cookieless and stores no personal data.
- No booking or back-office data yet. The endpoint shape is designed so those can be added later under `/api/insights/<domain>`.

## Architecture

```
visitor browser ── /stats/script.js, /stats/api/send ──▶ Next.js site (Railway)
                                                            │ rewrite /stats/:path* → UMAMI_URL/:path*
                                                            ▼
                                                  Umami service (Railway)
                                                            │
                                                  Postgres service (Railway)

scheduled Claude task ── GET /api/insights/web?period=week ──▶ Next.js site ── Umami API (Bearer API key) ──▶ Umami
                         Authorization: Bearer <INSIGHTS_API_SECRET>
```

Three components: Umami on Railway, tracking in the site, and the insights endpoint in the site.

## 1. Umami on Railway

- Project: the existing `makersbarn-website` Railway project (SIP workspace), same environment as the site.
- Service `Postgres`: Railway managed Postgres. Umami uses its own database in it; a future backend can use the same instance with a separate database.
- Service `umami`: Docker image pinned to `ghcr.io/umami-software/umami:postgresql-v3.4.0`. A floating `latest` tag would let a redeploy change API response shapes under the endpoint. Variables: `DATABASE_URL` (reference `${{Postgres.DATABASE_URL}}`), `APP_SECRET` (random 32 bytes), `DISABLE_TELEMETRY=1`. The image already binds `0.0.0.0:3000`. Health check `GET /api/heartbeat` returns `{ "ok": true }`; the first boot runs database migrations, so the health check timeout is set to 300 seconds.
- Domain: `analytics.themakersbarn.nl`, Cloudflare CNAME to the Railway target, DNS-only. Railway issues the certificate. The dashboard is for Benny only.
- First login is `admin` / `umami`. Benny changes the password in the dashboard.
- Setup done by the build, using the admin login once through the API: create website `themakersbarn.nl` (its id becomes `NEXT_PUBLIC_UMAMI_WEBSITE_ID`), create team `insights` with the website in it, create user `insights-reader` as a view-only team member, log in as that user and create an API key. The key is `umami_` plus 32 characters and never expires. If team permissions block the reader's key from `event-data`, the fallback is an API key created by admin, recorded on the run ledger as a decision.
- Backups: Railway Postgres daily backups are enabled on the service. Nothing else.

Cost estimate: 3 to 5 euro per month, nearly all of it Postgres.

## 2. Tracking in the site

### Script loading

- A client component `src/components/client/UmamiTracker/UmamiTracker.tsx`, rendered once in `src/app/layout.tsx`, renders Umami's tracker with `next/script`, strategy `afterInteractive`. It renders nothing when `NEXT_PUBLIC_UMAMI_WEBSITE_ID` is unset, so local development sends nothing.
- Script attributes: `src="/stats/script.js"`, `data-website-id`, `data-exclude-hash="true"` (the site navigates to `#booking` fragments, which must not split path metrics). No `data-host-url`: the tracker derives its host from the script's own directory, so it posts to `/stats/api/send`.
- Two exact rewrites in `next.config.ts`, phase `afterFiles`: `{ source: '/stats/script.js', destination: `${UMAMI_URL}/script.js` }` and `{ source: '/stats/api/send', destination: `${UMAMI_URL}/api/send` }` — never a `/:path*` wildcard, so nothing else under `/stats` reaches Umami. Both sources derive from one exported `STATS_PROXY_PREFIX` constant (`src/constants/analytics.ts`). Next.js proxies external rewrites with the request body, method and headers intact and adds `x-forwarded-host`; through Cloudflare the `cf-connecting-ip`, `cf-ipcountry` and `user-agent` headers reach Umami, which reads them for IP and country.
- `UMAMI_URL` is read at build time. Unset → no rewrites are registered (`afterFiles` is empty) and no script tag, so local dev works without Umami and never proxies to Next's own dev port. Changing it needs a rebuild.
- Middleware: `/stats/` is added to `SKIP_PATHS`. `/stats/script.js` already skips via its extension; `/stats/api/send` has no extension and would otherwise hit the unknown-path 404.
- The `UmamiTracker` component's `onLoad` calls `flushQueuedEvents()` (below) and `rememberAttribution()`.

### Channel attribution on the client

Umami records referrers and UTM tags per session, but its events API cannot join an event to the session's referrer. Contacts per channel therefore come from a property the site attaches to every event.

- New module `src/lib/attribution.ts` (client-safe, pure functions plus a thin storage wrapper):
  - `classifyChannel(input: { referrer: string; currentHost: string; params: URLSearchParams }): Channel`.
  - `rememberAttribution()` classifies from `document.referrer`, `window.location`, and stores `{ attribution_channel, attribution_campaign? }` in `sessionStorage` under one key. It never overwrites an existing value, so the landing page wins.
  - `getAttribution(): Attribution` reads it back; when nothing is stored it classifies and stores lazily (so an event fired before the tracker's `onLoad` still gets the landing attribution). When storage is unavailable it returns `{ attribution_channel: Channel.UNKNOWN }` without throwing.
- `Channel` enum in `src/constants/analytics.ts`: `INSTAGRAM_PAID = 'instagram_paid'`, `META_ORGANIC = 'meta_organic'`, `AI_ASSISTANT = 'ai_assistant'`, `GOOGLE = 'google'`, `DIRECT = 'direct'`, `OTHER = 'other'`, `UNKNOWN = 'unknown'`. Instagram and Facebook organic traffic share one bucket: the ads run on Instagram, and organic Meta traffic is one line in the digest.
- All comparisons are case-insensitive on lower-cased values; referrer host is the hostname with a leading `www.` removed. Rules, evaluated in this order:
  0. A referrer whose host equals `currentHost` counts as no referrer (internal navigation in a fresh tab or with blocked storage).
  1. `utm_source` in `META_UTM_SOURCES` = {instagram, ig, facebook, fb, meta} and `utm_medium` in `PAID_UTM_MEDIUMS` = {paid, paid-social, paid_social, paidsocial, cpc, ppc} → `INSTAGRAM_PAID`. Paid is decided by UTM tags only.
  2. `utm_source` is `chatgpt.com`, or referrer host is in `AI_ASSISTANT_HOSTS` = {chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com, meta.ai, you.com} → `AI_ASSISTANT`. Checked before Google so `gemini.google.com` is not swallowed.
  3. `utm_source` in `META_UTM_SOURCES` without a paid medium, or `fbclid` present, or referrer host in `META_HOSTS` = {instagram.com, l.instagram.com, facebook.com, l.facebook.com, lm.facebook.com, m.facebook.com} → `META_ORGANIC`. Meta appends `fbclid` to organic outbound clicks too, so it never means paid.
  4. referrer host matches `^google\.[a-z.]+$` → `GOOGLE`.
  5. no referrer and no `utm_source` → `DIRECT`.
  6. anything else → `OTHER`.
  The lists are named constants in `src/constants/analytics.ts`.
- `attribution_campaign` is `utm_campaign` when present and non-empty; otherwise the property is omitted (Umami stores an empty string as a value).
- Until the person running the ads adds UTM tags, Instagram ad clicks land in `META_ORGANIC` or, when the in-app browser strips the referrer, in `DIRECT`. The rollout hands them the template.

### `track()`

- `src/lib/analytics.ts` keeps its signature `track(event: AnalyticsEvent, properties?: AnalyticsProperties)`.
- It builds `{ ...getAttribution(), ...properties }` (call-site properties win; the attribution keys are prefixed so nothing collides with the existing `channel` property that the share buttons send) and calls `window.umami.track(event, merged)` when `window.umami` exists.
- When `window.umami` is absent it queues the call in a module-scope array capped at `MAX_QUEUED_EVENTS = 20` and logs at debug level. `flushQueuedEvents()` drains the queue into `window.umami.track` once the tracker has loaded. In local dev without a website id the queue simply fills to the cap and stops; nothing throws.
- The 11 existing call sites in 9 files do not change.
- `src/types/umami.d.ts`: `interface UmamiTracker { track(event: string, data?: AnalyticsProperties): void }` and `declare global { interface Window { umami?: UmamiTracker } }` with `export {}`. Optional so tests can assign and delete it.

## 3. The insights endpoint

### Route

- `GET /api/insights/web?period=week|month` in `src/app/api/insights/web/route.ts`, Node runtime, `dynamic = 'force-dynamic'`.
- Every response carries `Cache-Control: private, no-store`. The `.nl` domain is proxied by Cloudflare and must never cache a 200.
- Order of checks:
  1. `INSIGHTS_API_SECRET` unset → 503 `{ error: 'not_configured' }`, logged once.
  2. `Authorization: Bearer <secret>` compared with `crypto.timingSafeEqual` after a length check. Missing or wrong → 401 `{ error: 'unauthorized' }`.
  3. Rate limit after auth, keyed by the constant `INSIGHTS_RATE_LIMIT_KEY` (there is one legitimate caller), using the existing `RateLimiter` with `INSIGHTS_RATE_LIMIT = { windowMs: 15 min, maxRequests: 30 }` from `src/constants/insights.ts`. Exceeded → 429. The limiter is in-memory per process, which is fine on Railway's single instance. Limiting after auth means an anonymous prober cannot lock the real caller out.
  4. `period` missing or not an `InsightsPeriod` enum value → 400 `{ error: 'bad_period' }`.
- Umami failures surface as `UmamiError` → 502 `{ error: 'upstream' }`; the whole build has one budget `INSIGHTS_TIMEOUT_MS = 30_000` → 504 `{ error: 'timeout' }`.
- Callers must use `https://themakersbarn.nl`; the `.com` and `www` hosts answer with a 308 redirect first.

### Periods

`src/lib/insights/periods.ts`, pure, takes `now: Date` and uses `@date-fns/tz` (added as a direct dependency; it is already in the lockfile as a transitive dependency) with `Europe/Amsterdam`:

- `week`: the last complete Monday-to-Sunday week (`startOfWeek` with `weekStartsOn: 1` in the zone, minus one week) and the week before it.
- `month`: the last complete calendar month and the month before it.
- Each range is `{ startAt, endAt }` in Unix milliseconds, `startAt` inclusive and `endAt` exclusive at Amsterdam midnight, plus `from` and `to` as inclusive `YYYY-MM-DD` strings for the JSON. Never subtract `7 * 86400000`: DST weeks are 167 or 169 hours.

### Umami client

`src/services/umami.ts`, one `UMAMI_URL`, no runtime fallback:

- Every call sends `Authorization: Bearer ${UMAMI_API_KEY}`. Umami 3.4 self-hosted accepts API keys in that header. No login, no token cache.
- `getStats(range)` → `GET /api/websites/{id}/stats?startAt&endAt`; the response is `{ pageviews, visitors, visits, bounces, totaltime, comparison }` with plain numbers. The client ignores `comparison`; the builder asks for the previous period explicitly so `month` compares calendar months.
- `getMetrics(range, type: UmamiMetricType, limit)` → `GET /api/websites/{id}/metrics?type=…&limit=…`, response `[{ x, y }]`. Types used: `path`, `referrer`, `channel`, `event`.
- `getUtmMetrics(range, type: UmamiUtmType)` → `GET /api/websites/{id}/utm/metrics?type=utm_campaign|utm_source|utm_medium`, response `[{ utm, views }]`. Verified against the live instance at build time; if the endpoint differs on v3.4.0, the fallback is the `utmCampaign` / `utmSource` / `utmMedium` metric types on `/metrics`.
- `getEventPropertyValues(range, eventName, propertyName)` → `GET /api/websites/{id}/event-data/values?eventName&propertyName`, response `[{ value, total }]`.
- Each fetch has `UMAMI_REQUEST_TIMEOUT_MS = 10_000` via `AbortSignal.timeout`. Non-2xx or non-JSON → `UmamiError` with the status.
- In production `UMAMI_URL` is the private Railway URL `http://umami.railway.internal:3000` (IPv6 private network; Node's fetch handles it). The rollout verifies it from the site container and falls back to the public URL if it does not resolve.

### Builder

`src/lib/insights/buildWebInsights.ts`, pure, takes a `UmamiReader` interface so tests use a fake. All Umami calls run with `Promise.all`.

1. Stats for current and previous period → totals and changes.
2. `path` metrics, capped at `TOP_ROWS = 10` → `topPages`.
3. `channel` metrics → `umamiChannels`, passed through exactly as Umami names them (`direct`, `paidAds`, `referral`, `llm`, `organicSearch`, `organicSocial`, `paidSocial`, …). Note: with the recommended UTM template Umami classifies Instagram ads as `paidAds`, because `utm_medium=paid-social` matches its `paid` rule.
4. `referrer` metrics, top 10 → `topReferrers`.
5. UTM metrics for campaign, source and medium, top 10 each, values truncated to `MAX_UTM_VALUE_LENGTH = 100` → `campaigns`.
6. `event` metrics for both periods → `events` with current and previous counts.
7. For each contact event in `CONTACT_EVENTS = [CONTACT_FORM_SUBMITTED, BOOKING_FORM_SUBMITTED, QUESTION_FORM_SUBMITTED, WHATSAPP_BOOKING_CLICKED, TICKETSHOP_CTA_CLICKED]` (members of `AnalyticsEvent`), `event-data/values` on property `attribution_channel` → `contactsByChannel`, summed over those events and keyed by the `Channel` enum. Any value that is not a `Channel` member (the collect endpoint is public, so properties are untrusted) is folded into `Channel.UNKNOWN`.

Formulas: `avgVisitSeconds = round(totaltime / visits)`, `bounceRatePct = round1(bounces / visits * 100)`, `changePct = round1((current - previous) / previous * 100)`, `null` when `previous === 0`; `round1` is one decimal.

### Response

```json
{
  "domain": "web",
  "period": { "kind": "week", "from": "2026-09-21", "to": "2026-09-27", "timezone": "Europe/Amsterdam" },
  "previousPeriod": { "from": "2026-09-14", "to": "2026-09-20" },
  "totals": {
    "visitors": { "current": 812, "previous": 740, "changePct": 9.7 },
    "pageviews": { "current": 2310, "previous": 2105, "changePct": 9.7 },
    "visits": { "current": 903, "previous": 811, "changePct": 11.3 },
    "avgVisitSeconds": { "current": 96, "previous": 88, "changePct": 9.1 },
    "bounceRatePct": { "current": 41.2, "previous": 44.0, "changePct": -6.4 }
  },
  "topPages": [ { "path": "/nl", "visitors": 640 } ],
  "topReferrers": [ { "host": "instagram.com", "visitors": 120 } ],
  "umamiChannels": [ { "channel": "organicSocial", "visitors": 130 } ],
  "campaigns": {
    "utm_campaign": [ { "value": "autumn-retreat", "views": 44 } ],
    "utm_source": [ { "value": "instagram", "views": 60 } ],
    "utm_medium": [ { "value": "paid-social", "views": 44 } ]
  },
  "events": [ { "name": "contact_form_submitted", "current": 7, "previous": 4 } ],
  "contactsByChannel": [ { "channel": "instagram_paid", "contacts": 3 } ],
  "generatedAt": "2026-09-28T06:00:12Z",
  "source": "umami"
}
```

`domain` and `source` are enum values (`InsightsDomain.WEB`, `InsightsSource.UMAMI`). Umami metric `y` values are visitors for `path`, `referrer` and `channel`.

### Environment variables

Added to `.env.example` and set on Railway:

| Variable | Where | Meaning |
|---|---|---|
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | site | Umami website id; tracker renders only when set |
| `UMAMI_URL` | site | Umami base URL for the rewrite and the API; private Railway URL in production; build-time |
| `UMAMI_API_KEY` | site | API key of the `insights-reader` user |
| `INSIGHTS_API_SECRET` | site | bearer secret the scheduled task sends |
| `DATABASE_URL`, `APP_SECRET`, `DISABLE_TELEMETRY` | umami | Umami's own configuration |

## Security

- Umami holds no personal data: no cookies, hashed and daily-salted visitor ids.
- The site never stores the Umami admin password. The reader's API key can only view one website.
- The endpoint returns aggregates only. No IPs, no session ids.
- The secret is compared with `crypto.timingSafeEqual` after a length check; a missing server secret is a 503, never a comparison against an empty string.
- The `/stats/api/send` rewrite exposes Umami's collect endpoint on the site's domain; `/stats/script.js` is the only other path proxied, and both are exact matches, never a wildcard. That is by design and is what Umami's own proxy guide recommends. Umami validates the website id on every hit. Event property values, top pages, referrer hosts, Umami channel names and UTM values are therefore untrusted and are sanitised (`sanitizePlainText`, capped length) in the builder.

## Testing

- `src/lib/attribution.test.ts`: a table of referrer and query combinations covering every rule and the precedence (UTM paid beats a Meta referrer; `fbclid` alone is organic; `gemini.google.com` is AI, not Google; same-origin referrer is direct; storage unavailable returns UNKNOWN).
- `src/lib/insights/periods.test.ts`: week and month ranges around month and year boundaries and both DST changes, with `now` injected.
- `src/lib/insights/buildWebInsights.test.ts`: fake reader with canned Umami responses; totals, formulas including the zero-previous case, top-10 caps, value truncation, `contactsByChannel` summation and the unknown-value fold.
- `src/services/umami.test.ts`: fetch mocked; bearer header sent, 401 and 500 become `UmamiError`, timeout becomes `UmamiError`, non-JSON body becomes `UmamiError`.
- `src/app/api/insights/web/route.test.ts`: 503 without server secret, 401 without and with wrong secret and with a different-length secret, 400 bad period, 429 after the limit, 200 shape with the builder mocked, `Cache-Control: private, no-store` on every response.
- `src/lib/analytics.test.ts` updated: `track()` calls `window.umami.track` with merged attribution when present; queues and flushes when absent; the queue caps at 20; call-site properties win over attribution keys.
- Existing test suite stays green.

## Rollout

1. Railway: Postgres and Umami are up, `analytics.themakersbarn.nl` is in Cloudflare. Pin the image tag. Benny changes the admin password. The build creates the website entry, team, reader user and API key through the API.
2. Site: deploy the tracking change with `NEXT_PUBLIC_UMAMI_WEBSITE_ID` and `UMAMI_URL` set. Verify from the site container that `http://umami.railway.internal:3000/api/heartbeat` answers. Verify in Umami's realtime view that a visit and one test event arrive with an `attribution_channel` property, and that visitors are not all one country (if they are, set `CLIENT_IP_HEADER` on Umami).
3. Site: deploy the endpoint. Verify with `curl -H "Authorization: Bearer …" "https://themakersbarn.nl/api/insights/web?period=week"`.
4. Hand Benny a one-paragraph instruction for the scheduled task: URL, header, and the JSON fields to use.
5. Forward the UTM template to the person running the ads: `utm_source=instagram&utm_medium=paid-social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`. Until they add it, ad clicks count as Meta organic or direct.

## Open points

- Umami's built-in channel grouping and our own `Channel` enum will not match one to one. The endpoint returns both; the email agent decides which to show.
- The first week after launch has no previous period; `changePct` is `null` and the agent should say so.
