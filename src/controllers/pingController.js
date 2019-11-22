const pingService = require("../service/pingService");

async function pingHosts(req, res, next) {
  const pingResponses = await pingService.pingHosts();

  res.send({ pingResponses });

  return next();
}

function pingController(server) {
  server.get("/servers/ping", pingHosts);
}

module.exports = pingController;
