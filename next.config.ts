import type { NextConfig } from 'next'

import { UMAMI_COLLECT_PATH, UMAMI_SCRIPT_PATH } from './src/constants/analytics'

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

/** Base URL of the Umami service. Empty when unset, so the rewrites below register nothing. */
const umamiUrl = (process.env.UMAMI_URL ?? '').replace(/\/$/, '')

interface Rewrite {
  source: string
  destination: string
}

/**
 * Exactly the two paths the tracker needs, never a wildcard proxy to the whole
 * Umami service. Registered only when UMAMI_URL is set — an unset variable
 * used to fall back to Next's own dev port, which proxied the site to itself.
 */
function umamiRewrites(): Rewrite[] {
  if (umamiUrl === '') {
    return []
  }
  return [
    { source: UMAMI_SCRIPT_PATH, destination: `${umamiUrl}/script.js` },
    { source: UMAMI_COLLECT_PATH, destination: `${umamiUrl}/api/send` },
  ]
}

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
      afterFiles: umamiRewrites(),
      fallback: [],
    })
  },
}

export default nextConfig
