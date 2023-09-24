import fastifyPlugin from "fastify-plugin";

async function indexRoutes(server, options) {
  server.get("/", async (request, reply) => {
    return {
      hello: "hello world",
    };
  });
}

export default fastifyPlugin(indexRoutes);
