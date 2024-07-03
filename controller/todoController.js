async function getTodoController(req, res) {
  const { todoService } = this;
  const resData=await todoService.getAll();
  res.send(resData);
}

async function postTodoController(req, res) {
  const { todoService } = this;
  const resData=await todoService.getAll();
  res.send(resData);
}
module.exports = {getTodoController,postTodoController};
