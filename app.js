import Fastify from "fastify";

import indexRoutes from "./routes/index.js";

export default async function appFramework() {
  const fastify = Fastify({ logger: true });
  fastify.register(indexRoutes);

  await fastify.ready();

  return fastify;
}
