async function todoController(req, res) {
  const { todoService } = this;
  const resData=await todoService.getAll();
  res.send(resData);
}
module.exports = todoController;
