import appFramework from "./app.js";

async function initAppServer() {
  // Trigger the application framework to load
  const app = await appFramework();

  // Start the server
  try {

      await app.listen({
      // @ts-ignore
      port: app.config.HTTP_PORT,
      // @ts-ignore
      host: app.config.HTTP_HOST,
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

initAppServer();
