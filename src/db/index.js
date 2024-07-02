const fp = require("fastify-plugin");
async function inMemoryDB(fastify, options) {
  fastify.decorate("db", { todos: [] });
}

module.exports = fp(inMemoryDB);
