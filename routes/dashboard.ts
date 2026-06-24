import fastifyPlugin from 'fastify-plugin'
import Session from 'supertokens-node/recipe/session/index.js'
import Multitenancy from 'supertokens-node/recipe/multitenancy/index.js'

async function dashboardRoutes (server, options) {
  server.get('/sessioninfo', async (request, reply) => {
    const session = await Session.getSession(request, reply)
    return session !== null
      ? {
          sessionHandle: session.getHandle(),
          userId: session.getUserId(),
          accessTokenPayload: session.getAccessTokenPayload()
        }
      : { result: 'Unable to get session info' }
  })

  server.get('/tenants', async (request, reply) => {
    return await Multitenancy.listAllTenants()
  })
}

export default fastifyPlugin(dashboardRoutes)
