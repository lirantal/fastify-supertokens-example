import fastifyEnv from "@fastify/env";
import fastifyPlugin from "fastify-plugin";

async function configPlugin(server, options, done) {
  const schema = {
    type: "object",
    required: ["HTTP_PORT"],
    properties: {
      HTTP_PORT: {
        type: "number",
        default: 3001,
      },
      SUPERTOKENS_CONNECTION_URI: {
        type: "string",
      },
      SUPERTOKENS_API_KEY: {
        type: "string",
      },
      SUPERTOKENS_APPNAME: {
        type: "string",
      },
      SUPERTOKENS_API_DOMAIN: {
        type: "string",
      },
      SUPERTOKENS_API_BASE_PATH: {
        type: "string",
      },
      SUPERTOKENS_WEBSITE_DOMAIN: {
        type: "string",
      },
      SUPERTOKENS_WEBSITE_BASE_PATH: {
        type: "string",
      },
      SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_ID: {
        type: "string",
      },
      SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_SECRET: {
        type: "string",
      },
      SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_ID: {
        type: "string",
      },
      SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_SECRET: {
        type: "string",
      },
      CORS_ORIGIN_URL: {
        type: "string",
      },
    },
  };

  const configOptions = {
    // decorate the Fastify server instance with `config` key
    // such as `fastify.config('PORT')
    confKey: "config",
    // schema to validate
    schema: schema,
    // source for the configuration data
    data: process.env,
    // will read .env in root folder
    dotenv: true,
    // will remove the additional properties
    // from the data object which creates an
    // explicit schema
    removeAdditional: true,
  };

  return fastifyEnv(server, configOptions, done);
}

export default fastifyPlugin(configPlugin);
