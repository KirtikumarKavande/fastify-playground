const fp = require("fastify-plugin");
async function app(fastify, options) {
  fastify.register(require("./routes/api/apiRouter"));
}


module.exports = fp(app);
