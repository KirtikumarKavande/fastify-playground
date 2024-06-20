
const testService=require("../service/test.service")
    async function pingController(request, res) {
        const data=await testService.pingService()
        console.log(data)
        res.send(data)        

      }
    
      module.exports = {pingController};