import Fastify, { type FastifyInstance } from 'fastify'

import config from './plugins/config.js'
import auth from './plugins/auth.js'
import indexRoutes from './routes/index.js'
import dashboardRoutes from './routes/dashboard.js'

export default async function appFramework (): Promise<FastifyInstance> {
  const fastify = Fastify({ logger: true })
  await fastify.register(config)
  await fastify.register(auth)
  await fastify.register(indexRoutes)
  await fastify.register(dashboardRoutes)

  await fastify.ready()

  return await fastify
}
