const fastify = require('fastify')()
fastify.register(require('./index'),{prefix: '/api'})
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log("server started on port 3000")
})