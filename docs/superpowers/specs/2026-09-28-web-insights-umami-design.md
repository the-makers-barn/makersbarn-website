# Web insights: Umami analytics and the `/api/insights/web` endpoint

Date: 2026-09-28
Status: approved in conversation, awaiting written review

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
visitor browser ── /stats/script.js, /stats/send ──▶ Next.js site (Railway)
                                                        │ rewrites
                                                        ▼
                                              Umami service (Railway)
                                                        │
                                              Postgres service (Railway)

scheduled Claude task ── GET /api/insights/web?period=week ──▶ Next.js site ── Umami API ──▶ Umami
                         Authorization: Bearer <INSIGHTS_API_SECRET>
```

Three components: Umami on Railway, tracking in the site, and the insights endpoint in the site.

## 1. Umami on Railway

- Project: the existing `makersbarn-website` Railway project (SIP workspace), same environment as the site.
- New service `postgres`: Railway managed Postgres. Umami uses its own database in it; a future backend can use the same instance with a separate database.
- New service `umami`: Docker image `ghcr.io/umami-software/umami:postgresql-latest`. Variables: `DATABASE_URL` (reference to the Postgres service), `APP_SECRET` (random 32 bytes). Port 3000. Health check `/api/heartbeat`.
- Domain: `analytics.themakersbarn.nl`, Cloudflare CNAME to the Railway target, DNS-only. The dashboard is for Benny, not for visitors, so no proxy or cache is needed there.
- First login is `admin` / `umami`. Benny changes the password in the dashboard. Then a website entry `themakersbarn.nl` is created; its id becomes `NEXT_PUBLIC_UMAMI_WEBSITE_ID`.
- A second, non-admin Umami user `insights-reader` with view access to that website is created for the endpoint, so the site never holds the admin password.
- Backups: Railway Postgres daily backups are enabled on the service. Nothing else.

Cost estimate: 3 to 5 euro per month, nearly all of it Postgres.

## 2. Tracking in the site

### Script loading

- `src/app/layout.tsx` renders Umami's tracker with `next/script`, strategy `afterInteractive`, only when `NEXT_PUBLIC_UMAMI_WEBSITE_ID` is set. Local development without that variable sends nothing.
- The script is loaded from the site's own origin: `src="/stats/script.js"` with `data-host-url="/stats"` and `data-website-id`. Two `rewrites()` entries in `next.config.ts` forward `/stats/script.js` to `${UMAMI_URL}/script.js` and `/stats/send` to `${UMAMI_URL}/api/send`. Ad blockers match on hostnames and the word "umami"; neither appears.
- `data-exclude-search="true"` is not set: UTM and click ids in the query string are what the attribution needs. Umami stores them per session, not as page paths.
- Middleware: `/stats/` is added to `SKIP_PATHS` so the rewrite is not treated as an unknown route.

### Channel attribution on the client

Umami records referrers and UTM tags per session, but its events API cannot join an event to the session's referrer. Contacts per channel therefore come from a property the site attaches to every event.

- New module `src/lib/attribution.ts` (client-safe, pure functions plus a thin storage wrapper):
  - `classifyChannel(referrer: string, params: URLSearchParams): Channel` returns one of the `Channel` enum values below.
  - `rememberAttribution()` runs once per visit on first page load: it classifies, stores `{ channel, campaign }` in `sessionStorage`, and never overwrites an existing value, so the landing page wins.
  - `getAttribution(): Attribution` reads it back, with `Channel.UNKNOWN` when storage is unavailable.
- `Channel` enum in `src/constants/analytics.ts`: `INSTAGRAM_PAID`, `INSTAGRAM_ORGANIC`, `FACEBOOK`, `GOOGLE`, `AI_ASSISTANT`, `DIRECT`, `OTHER`, `UNKNOWN`.
- Rules, evaluated in this order:
  1. `utm_source` in {instagram, ig, facebook, fb, meta} and `utm_medium` in {paid, paid-social, paidsocial, cpc, ppc} → `INSTAGRAM_PAID` (Facebook sources also count as paid Meta traffic; the label stays "Instagram paid" because that is where the ads run).
  2. `fbclid` present → `INSTAGRAM_PAID`. Meta adds this to ad clicks even when the ad has no UTM tags.
  3. referrer host is `instagram.com` or `l.instagram.com` → `INSTAGRAM_ORGANIC`; `facebook.com`, `l.facebook.com`, `lm.facebook.com` → `FACEBOOK`.
  4. `utm_source` is `chatgpt.com`, or referrer host is one of `chatgpt.com`, `chat.openai.com`, `perplexity.ai`, `claude.ai`, `gemini.google.com`, `copilot.microsoft.com`, `you.com` → `AI_ASSISTANT`.
  5. referrer host matches `google.` → `GOOGLE`.
  6. no referrer and no UTM → `DIRECT`.
  7. anything else → `OTHER`.
  The host lists are named constants in `src/constants/analytics.ts`.
- `campaign` is `utm_campaign` when present, else empty.

### `track()`

- `src/lib/analytics.ts` keeps its signature `track(event: AnalyticsEvent, properties?: AnalyticsProperties)`.
- It merges `{ channel, campaign }` from `getAttribution()` into the properties and calls `window.umami.track(event, merged)` when `window.umami` exists. When it does not (local dev, blocked script), it logs at debug level as today.
- The 10 existing call sites do not change.
- A `window.umami` type declaration lives in `src/types/umami.d.ts`.

## 3. The insights endpoint

### Route

- `GET /api/insights/web?period=week|month` in `src/app/api/insights/web/route.ts`, Node runtime, `dynamic = 'force-dynamic'`.
- Auth: header `Authorization: Bearer <INSIGHTS_API_SECRET>`, compared in constant time. Missing or wrong → 401 with `{ error: 'unauthorized' }`. Missing `period` or unknown value → 400.
- The route is excluded from the marketing middleware's locale handling: `/api/` is already in `SKIP_PATHS`.
- Rate limit: the existing `RateLimiter` from `src/lib/security.ts`, 30 requests per 15 minutes per client, so a leaked secret cannot hammer Umami.

### Periods

`src/lib/insights/periods.ts`, pure and tested:

- `week`: the last complete Monday-to-Sunday week in `Europe/Amsterdam`, and the week before it as the comparison. Run on Monday morning it reports the week that just ended.
- `month`: the last complete calendar month, and the month before it.
- Both return `{ current: { from, to }, previous: { from, to }, label }` as Unix milliseconds plus ISO date strings for the JSON.

### Umami client

`src/services/umami.ts`:

- Logs in with `POST /api/auth/login` using `UMAMI_API_USERNAME` and `UMAMI_API_PASSWORD`, keeps the token in module scope, and logs in again on a 401.
- `getStats(range)` → `GET /api/websites/{id}/stats?startAt&endAt` (pageviews, visitors, visits, bounces, totaltime).
- `getMetrics(range, type, limit)` → `GET /api/websites/{id}/metrics?type=…` for `path`, `referrer`, `channel`, `event`, `query`.
- `getEventPropertyValues(range, event, property)` → `GET /api/websites/{id}/event-data/values?event&propertyName`.
- All calls go to `UMAMI_URL` over the private Railway network when available (`http://umami.railway.internal:3000`), falling back to the public URL. Timeout 10 seconds per call. Errors surface as a typed `UmamiError`; the route answers 502 with a short message.

### Builder

`src/lib/insights/buildWebInsights.ts`, pure, takes a `UmamiReader` interface so tests use a fake:

1. Stats for current and previous period → totals and percentage changes.
2. `path` metrics, top 10 → `topPages`.
3. `channel` metrics from Umami (its own grouping, for example `organicSearch`, `organicSocial`, `paidSocial`, `referral`) → `umamiChannels`, passed through exactly as Umami names them.
4. `referrer` metrics → `topReferrers`, top 10.
5. `query` metrics filtered to `utm_` keys → `campaigns`.
6. `event` metrics → `events` with current and previous counts.
7. For each contact event (`contact_form_submitted`, `booking_form_submitted`, `question_form_submitted`, `whatsapp_booking_clicked`, `ticketshop_cta_clicked`), `event-data/values` on property `channel` → `contactsByChannel` summed over those events, keyed by our `Channel` enum.

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
  "topPages": [ { "path": "/nl", "views": 640 } ],
  "topReferrers": [ { "host": "instagram.com", "visitors": 120 } ],
  "umamiChannels": [ { "channel": "organicSocial", "visitors": 130 } ],
  "campaigns": [ { "key": "utm_campaign", "value": "autumn-retreat", "visitors": 44 } ],
  "events": [ { "name": "contact_form_submitted", "current": 7, "previous": 4 } ],
  "contactsByChannel": [ { "channel": "instagram_paid", "contacts": 3 } ],
  "generatedAt": "2026-09-28T06:00:12Z",
  "source": "umami"
}
```

`changePct` is `null` when the previous value is 0.

### Environment variables

Added to `.env.example` and set on Railway:

| Variable | Where | Meaning |
|---|---|---|
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | site | Umami website id; script loads only when set |
| `UMAMI_URL` | site | Umami base URL for rewrites and API, private Railway URL in production |
| `UMAMI_API_USERNAME` | site | the `insights-reader` user |
| `UMAMI_API_PASSWORD` | site | its password |
| `INSIGHTS_API_SECRET` | site | bearer secret the scheduled task sends |
| `DATABASE_URL`, `APP_SECRET` | umami | Umami's own configuration |

`next.config.ts` reads `UMAMI_URL` at build time for the rewrites. When it is unset, the rewrites point at `http://localhost:3000` and the script tag is not rendered, so local dev works without Umami.

## Security

- Umami holds no personal data: no cookies, hashed and daily-salted visitor ids.
- The site never stores the Umami admin password. The reader user can only view one website.
- The endpoint returns aggregates only. No IPs, no session ids.
- The secret is compared with `crypto.timingSafeEqual` after length check.
- The `/stats/send` rewrite exposes Umami's collect endpoint on the site's domain. That is by design and is what Umami's own proxy guide recommends. Umami validates the website id on every hit.

## Testing

- `src/lib/attribution.test.ts`: every rule above with a table of referrer and query combinations, including precedence (UTM paid beats Instagram referrer; fbclid beats organic).
- `src/lib/insights/periods.test.ts`: week and month ranges around month and year boundaries and DST changes, fixed "now" injected.
- `src/lib/insights/buildWebInsights.test.ts`: fake reader returning canned Umami responses; asserts totals, `changePct` including the zero-previous case, top-10 caps, `contactsByChannel` summation.
- `src/app/api/insights/web/route.test.ts`: 401 without and with a wrong secret, 400 for a bad period, 200 shape with the builder mocked.
- `src/lib/analytics.test.ts` updated: `track()` calls `window.umami.track` with merged attribution when present, logs when absent.
- Existing test suite stays green.

## Rollout

1. Railway: add Postgres, add Umami, set variables, add `analytics.themakersbarn.nl` in Cloudflare. Benny logs in and changes the password. Create website entry and reader user.
2. Site: deploy the tracking change with `NEXT_PUBLIC_UMAMI_WEBSITE_ID` set. Verify in Umami's realtime view that a visit and one test event arrive with a `channel` property.
3. Site: deploy the endpoint. Verify with `curl -H "Authorization: Bearer …" https://themakersbarn.nl/api/insights/web?period=week`.
4. Hand Benny a one-paragraph instruction for the scheduled task: URL, header, and the JSON fields to use.
5. Forward the UTM template to the person running the ads: `utm_source=instagram&utm_medium=paid-social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`. Until they add it, `fbclid` still marks paid clicks.

## Open points

- Umami's built-in channel grouping and our own `Channel` enum will not match one to one. The endpoint returns both; the email agent decides which to show. If that proves confusing, drop `umamiChannels` later.
- The first week after launch has no previous period; `changePct` is `null` and the agent should say so.
