import Fastify from "fastify";
import fastifyPlugin from "fastify-plugin";

import indexRoutes from "./routes/index.js";

export default async function appFramework() {
  const fastify = Fastify({ logger: true });
  fastify.register(fastifyPlugin(indexRoutes));

  await fastify.ready();

  return fastify;
}
