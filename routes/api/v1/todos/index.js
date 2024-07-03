const todos=require("../../../../controller/todoController")
async function todoRouter(fastify,options){
    fastify.get('/todos',todos.getTodoController)
    fastify.post('/todos',todos.postTodoController)
}

module.exports = todoRouter