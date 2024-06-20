const fp = require("fastify-plugin");

async function customRoutes(fastify, options) {
const customControllers=require("./controller/index.controller")

  fastify.get("/ping",customControllers.pingController );
}
module.exports = fp(customRoutes);
