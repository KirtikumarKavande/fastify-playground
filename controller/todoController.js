async function getTodoController(req, res) {
  const { todoService } = this;
  const resData = await todoService.getAll();
  res.send(resData);
}

async function postTodoController(req, res) {
  const { todoService } = this;
  const resData = await todoService.createTodo(req.body);
console.log("check controller",resData)
  res.send(resData);
}
module.exports = { getTodoController, postTodoController };
