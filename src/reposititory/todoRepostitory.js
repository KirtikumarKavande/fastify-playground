const fp = require("fastify-plugin");
class TodoRepository {
  constructor(db) {
    this.db = db;
  }
  async createTodo(todo){
  const {todos}=this.db
 await todos.push(todo)
  return todo

  }
  async getAll() {
    return await this.db;
  }
  getOne(id) {}
  deleteAll(id) {}
  deleteOne() {}
}
async function todoRepository(fastify, options) {
  const { db } = fastify;
  const repo = new TodoRepository(db);
  fastify.decorate("todoRepository", repo);
}
module.exports = fp(todoRepository);
