async function todoRouter(fastify,options){
    fastify.get('/todos',()=>{
        return "todos"
    })
}

module.exports = todoRouter