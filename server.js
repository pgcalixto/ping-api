const restify = require("restify");

const pingController = require("./src/controllers/pingController");

const server = restify.createServer({
  name: "ping-api",
  version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

pingController(server);

server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});
