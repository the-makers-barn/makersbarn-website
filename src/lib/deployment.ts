/**
 * Where this build is running.
 *
 * Both hosts mark their production deployment with an environment variable:
 * Vercel sets VERCEL_ENV to "production" for the production branch, and
 * Railway sets RAILWAY_ENVIRONMENT_NAME to the environment name, which is
 * "production" for the default environment. NODE_ENV cannot be used for this:
 * preview and staging builds also run with NODE_ENV=production.
 */
const PRODUCTION_ENVIRONMENT = 'production'

/** process.env, or a plain map of it, so tests can pass a fixture instead of mutating the real one. */
type DeploymentEnv = Readonly<Record<string, string | undefined>>

/** True only on the deployment that serves the public domain. */
export function isProductionDeployment(env: DeploymentEnv = process.env): boolean {
  return (
    env.VERCEL_ENV === PRODUCTION_ENVIRONMENT || env.RAILWAY_ENVIRONMENT_NAME === PRODUCTION_ENVIRONMENT
  )
}
