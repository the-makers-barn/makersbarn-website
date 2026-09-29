import type { NextConfig } from 'next'

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/** Optimised images are immutable per URL (the hash of size and quality), so caches may keep them for a month. */
const OPTIMIZED_IMAGE_CACHE_SECONDS = 60 * 60 * 24 * 30

/** Same-origin prefix the browser uses for the Umami tracker and its collect endpoint. */
const STATS_PROXY_PREFIX = '/stats'
/** Local fallback so the config loads without an Umami service (the tracker is not rendered then). */
const DEFAULT_UMAMI_URL = 'http://localhost:3000'
const umamiUrl = (process.env.UMAMI_URL ?? DEFAULT_UMAMI_URL).replace(/\/$/, '')

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: OPTIMIZED_IMAGE_CACHE_SECONDS,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'country-flag-icons'],
  },
  // Ensure trailing slashes are consistent to prevent duplicate URLs
  trailingSlash: false,
  headers() {
    return Promise.resolve([
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ])
  },
  rewrites() {
    return Promise.resolve({
      beforeFiles: [],
      afterFiles: [
        {
          source: `${STATS_PROXY_PREFIX}/:path*`,
          destination: `${umamiUrl}/:path*`,
        },
      ],
      fallback: [],
    })
  },
}

export default nextConfig
