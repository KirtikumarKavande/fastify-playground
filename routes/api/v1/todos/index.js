async function todoRouter(fastify,options){
    fastify.get('/todos',require("../../../../controller/todoController"))
}

module.exports = todoRouter