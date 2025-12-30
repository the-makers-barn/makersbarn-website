/**
 * Security utilities for blocking malicious requests and monitoring attacks
 */

export interface SecurityEvent {
  timestamp: Date
  ip: string
  userAgent: string
  path: string
  reason: string
  blocked: boolean
}

export enum SecurityPatternCategory {
  ENV_FILES = 'Environment file access attempt',
  CMS_ATTACKS = 'CMS vulnerability scan',
  ATTACK_PATHS = 'Admin panel access attempt',
  FILE_INCLUSION = 'File inclusion attack attempt',
  BACKUP_FILES = 'Version control/backup file access attempt',
  PATH_TRAVERSAL = 'Path traversal attempt',
  DOUBLE_ENCODING = 'Double encoding attempt',
}

const SECURITY_PATTERNS = {
  ENV_FILES: [
    '/.env',
    '/.env.local',
    '/.env.production',
    '/.env.development',
    '/.env.test',
    '/config.php',
    '/config.js',
    '/config.json',
    '/.config',
  ],

  CMS_ATTACKS: [
    '/wp-content',
    '/wp-admin',
    '/wp-includes',
    '/wp-config.php',
    '/wp-login.php',
    '/wordpress',
    '/wp-json',
    '/xmlrpc.php',
  ],

  ATTACK_PATHS: [
    '/phpmyadmin',
    '/admin',
    '/administrator',
    '/admin.php',
    '/admin.html',
    '/manager',
    '/cpanel',
    '/shell',
    '/cmd',
    '/console',
    '/debug',
    '/test.php',
    '/info.php',
    '/phpinfo.php',
  ],

  FILE_INCLUSION: [
    '/file.php',
    '/shell.php',
    '/cmd.php',
    '/exec.php',
    '/system.php',
    '/passthru.php',
    '/eval.php',
    '/include.php',
    '/require.php',
  ],

  BACKUP_FILES: [
    '/.git',
    '/.svn',
    '/.hg',
    '/.bzr',
    '/.gitignore',
    '/.gitattributes',
    '/.htaccess',
    '/.htpasswd',
    '/backup',
    '/db.sql',
    '/database.sql',
    '/dump.sql',
  ],
} as const

function normalizePathname(pathname: string): string {
  return decodeURIComponent(pathname).toLowerCase()
}

function hasPathTraversal(pathname: string): boolean {
  return pathname.includes('..') || pathname.includes('\\')
}

function hasDoubleEncoding(pathname: string): boolean {
  return pathname.includes('%2e%2e') || pathname.includes('%5c')
}

function matchesPatterns(pathname: string, patterns: readonly string[]): boolean {
  return patterns.some(
    (pattern) =>
      pathname.startsWith(pattern.toLowerCase()) || pathname.includes(pattern.toLowerCase())
  )
}

export function isMaliciousPath(pathname: string): boolean {
  const normalizedPath = normalizePathname(pathname)

  if (hasPathTraversal(normalizedPath) || hasDoubleEncoding(pathname.toLowerCase())) {
    return true
  }

  const allPatterns = [
    ...SECURITY_PATTERNS.ENV_FILES,
    ...SECURITY_PATTERNS.CMS_ATTACKS,
    ...SECURITY_PATTERNS.ATTACK_PATHS,
    ...SECURITY_PATTERNS.FILE_INCLUSION,
    ...SECURITY_PATTERNS.BACKUP_FILES,
  ]

  return matchesPatterns(normalizedPath, allPatterns)
}

export function getBlockReason(pathname: string): SecurityPatternCategory {
  const normalizedPath = normalizePathname(pathname)

  if (hasPathTraversal(normalizedPath)) {
    return SecurityPatternCategory.PATH_TRAVERSAL
  }

  if (hasDoubleEncoding(pathname.toLowerCase())) {
    return SecurityPatternCategory.DOUBLE_ENCODING
  }

  if (matchesPatterns(normalizedPath, SECURITY_PATTERNS.ENV_FILES)) {
    return SecurityPatternCategory.ENV_FILES
  }

  if (matchesPatterns(normalizedPath, SECURITY_PATTERNS.CMS_ATTACKS)) {
    return SecurityPatternCategory.CMS_ATTACKS
  }

  if (matchesPatterns(normalizedPath, SECURITY_PATTERNS.ATTACK_PATHS)) {
    return SecurityPatternCategory.ATTACK_PATHS
  }

  if (matchesPatterns(normalizedPath, SECURITY_PATTERNS.FILE_INCLUSION)) {
    return SecurityPatternCategory.FILE_INCLUSION
  }

  if (matchesPatterns(normalizedPath, SECURITY_PATTERNS.BACKUP_FILES)) {
    return SecurityPatternCategory.BACKUP_FILES
  }

  return SecurityPatternCategory.ATTACK_PATHS
}

interface RateLimiterConfig {
  windowMs: number
  maxRequests: number
}

const DEFAULT_RATE_LIMIT_CONFIG: RateLimiterConfig = {
  windowMs: 60000,
  maxRequests: 100,
}

export class RateLimiter {
  private requests: Map<string, number[]> = new Map()
  private readonly windowMs: number
  private readonly maxRequests: number

  constructor(config: Partial<RateLimiterConfig> = {}) {
    this.windowMs = config.windowMs ?? DEFAULT_RATE_LIMIT_CONFIG.windowMs
    this.maxRequests = config.maxRequests ?? DEFAULT_RATE_LIMIT_CONFIG.maxRequests
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now()
    const windowStart = now - this.windowMs

    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, [now])
      return true
    }

    const requests = this.requests.get(identifier)!
    const recentRequests = requests.filter((time) => time > windowStart)

    if (recentRequests.length >= this.maxRequests) {
      return false
    }

    recentRequests.push(now)
    this.requests.set(identifier, recentRequests)

    this.cleanup(windowStart)

    return true
  }

  private cleanup(windowStart: number): void {
    for (const [identifier, requests] of this.requests.entries()) {
      const recentRequests = requests.filter((time) => time > windowStart)
      if (recentRequests.length === 0) {
        this.requests.delete(identifier)
      } else {
        this.requests.set(identifier, recentRequests)
      }
    }
  }
}
