import { describe, expect, it } from 'vitest'

import { isProductionDeployment } from './deployment'

describe('isProductionDeployment', () => {
  it('is true for the Vercel production deployment', () => {
    expect(isProductionDeployment({ VERCEL_ENV: 'production' })).toBe(true)
  })

  it('is true for the Railway production environment', () => {
    expect(isProductionDeployment({ RAILWAY_ENVIRONMENT_NAME: 'production' })).toBe(true)
  })

  it('is false for preview and staging deployments on either host', () => {
    expect(isProductionDeployment({ VERCEL_ENV: 'preview' })).toBe(false)
    expect(isProductionDeployment({ RAILWAY_ENVIRONMENT_NAME: 'staging' })).toBe(false)
  })

  it('is false when no host marks the deployment, such as local development', () => {
    expect(isProductionDeployment({ NODE_ENV: 'production' })).toBe(false)
  })
})
