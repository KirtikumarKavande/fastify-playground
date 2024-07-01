const { port } = require("./config/server.config");

const fastify = require("fastify")({ logger: true });

fastify.register(require("./app"));

fastify.listen({ port: port }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log("server is running on port" + " " + port);
});
