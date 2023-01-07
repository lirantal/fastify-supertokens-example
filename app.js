import Fastify from "fastify";

import indexRoutes from "./routes/index.js";
import config from "./plugins/config.js";

export default async function appFramework() {
  const fastify = Fastify({ logger: true });
  fastify.register(config);
  fastify.register(indexRoutes);

  await fastify.ready();

  return fastify;
}
