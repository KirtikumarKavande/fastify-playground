const fp=require('fastify-plugin')
class TodoServices{
    constructor(todoRepository){
        this.todoRepository=todoRepository
    }
    async getAll(){
        return await this.todoRepository.getAll()
    }

    async createTodo(todo){
        return await this.todoRepository.createTodo(todo)
    }
    getOne(id){
        return this.todoRepository.getOne(id)
    }
    deleteAll(){
        return this.todoRepository.deleteAll()
    }
    deleteOne(id){
    return this.todoRepository.deleteOne(id)
    }
}
async function todoService(fastify, options) {
   const {todoRepository}=fastify
   const service=new TodoServices(todoRepository)
   fastify.decorate("todoService", service);
}
module.exports=fp(todoService)