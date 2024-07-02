const fp = require("fastify-plugin");
async function app(fastify, options) {
  await fastify.register(require("./routes/api/apiRouter"));

  await fastify.register(require("./src/db/index"));
  await fastify.register(require("./src/reposititory/todoRepostitory"));
  await fastify.register(require("./src/services/todoServices"));
}

module.exports = fp(app);
