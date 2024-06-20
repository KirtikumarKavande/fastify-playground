async function pingService(request, reply) {
  return { message: "pong" };
}
module.exports = { pingService };
