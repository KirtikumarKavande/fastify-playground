async function v1Router(fastify,options){
 fastify.register(require('./todos/index'),{prefix:"/v1"})
}

module.exports = v1Router