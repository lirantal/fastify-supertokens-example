import cors from "@fastify/cors";
import formDataPlugin from "@fastify/formbody";
import fastifyPlugin from "fastify-plugin";

import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session/index.js";
import EmailPassword from "supertokens-node/recipe/emailpassword/index.js";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword/index.js";
import {
  plugin,
  errorHandler,
} from "supertokens-node/framework/fastify/index.js";

async function auth(server, options) {
  supertokens.init({
    framework: "fastify",
    supertokens: {
      // These are the connection details of the app you created on supertokens.com
      connectionURI: server.config.SUPERTOKENS_CONNECTION_URI,
      apiKey: server.config.SUPERTOKENS_API_KEY,
    },
    appInfo: {
      // learn more about this on https://supertokens.com/docs/session/appinfo
      appName: server.config.SUPERTOKENS_APPNAME,
      apiDomain: server.config.SUPERTOKENS_API_DOMAIN,
      websiteDomain: server.config.SUPERTOKENS_WEBSITE_DOMAIN,
      apiBasePath: server.config.SUPERTOKENS_API_BASE_PATH,
      websiteBasePath: server.config.SUPERTOKENS_WEBSITE_BASE_PATH,
    },
    recipeList: [
      EmailPassword.init(), // initializes signin / sign up features
      ThirdPartyEmailPassword.init({
        providers: [
          // We have provided you with development keys which you can use for testing.
          // IMPORTANT: Please replace them with your own OAuth keys for production use.
          ThirdPartyEmailPassword.Google({
            clientId: server.config.SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_ID,
            clientSecret:
              server.config.SUPERTOKENS_3RD_PARTY_GOOGLE_CLIENT_SECRET,
          }),
          ThirdPartyEmailPassword.Github({
            clientId: server.config.SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_ID,
            clientSecret:
              server.config.SUPERTOKENS_3RD_PARTY_GITHUB_CLIENT_SECRET,
          }),
        ],
      }),
      Session.init(), // initializes session features
    ],
  });

  // we register a CORS route to allow requests from the frontend
  server.register(cors, {
    origin: server.config.CORS_ORIGIN_URL,
    allowedHeaders: ["Content-Type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  });

  server.register(formDataPlugin);
  server.register(plugin);

  server.setErrorHandler(errorHandler());
}

export default fastifyPlugin(auth);
