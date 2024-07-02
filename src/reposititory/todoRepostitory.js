const fp = require("fastify-plugin");
class TodoRepository {
  constructor(db) {
    this.db = db;
  }
  async getAll() {
    console.log("request recahed", this.db);
    return await this.db;
  }
  getOne(id) {}
  deleteAll(id) {}
  deleteOne() {}
}
async function todoRepository(fastify, options) {
  const { db } = fastify;
  console.log(db);
  const repo = new TodoRepository(db);
  fastify.decorate("todoRepository", repo);
}
module.exports = fp(todoRepository);
