/**
 * IP address anonymization for privacy-compliant logging
 * IPv4: zeroes the last octet (/24 prefix)
 * IPv6: truncates to first 2 groups (/32 prefix, below individual subscriber allocation)
 */

const IPV4_PATTERN = /^(\d{1,3}\.\d{1,3}\.\d{1,3})\.\d{1,3}$/
const FULL_IPV6_GROUPS = 8
const PRESERVED_IPV6_GROUPS = 2

function anonymizeIpv6(ip: string): string {
  const fullForm = expandIpv6(ip)
  const groups = fullForm.split(':')
  const preserved = groups.slice(0, PRESERVED_IPV6_GROUPS)
  const zeroed = Array<string>(FULL_IPV6_GROUPS - PRESERVED_IPV6_GROUPS).fill('0000')
  return [...preserved, ...zeroed].join(':')
}

function expandIpv6(ip: string): string {
  if (!ip.includes('::')) {
    return ip
  }

  const [left, right] = ip.split('::')
  const leftGroups = left ? left.split(':') : []
  const rightGroups = right ? right.split(':') : []
  const missingGroups = FULL_IPV6_GROUPS - leftGroups.length - rightGroups.length
  const fillerGroups = Array<string>(missingGroups).fill('0000')

  return [...leftGroups, ...fillerGroups, ...rightGroups].join(':')
}

export function anonymizeIp(ip: string): string {
  const ipv4Match = ip.match(IPV4_PATTERN)
  if (ipv4Match) {
    return `${ipv4Match[1]}.0`
  }

  if (ip.includes(':')) {
    return anonymizeIpv6(ip)
  }

  return 'anonymous'
}
