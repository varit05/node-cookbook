const restify = require("restify");

function respond(req, res, next) {
  const first = req.params.first;
  const second = req.params.second;
  const result = (parseInt(first, 10) + parseInt(second, 10)).toString();
  res.send(result);
  next();
}

const server = restify.createServer();
server.get("/add/:first/:second", respond);

server.listen(8080, () => {
  console.log("%s listening to %s", server.name, server.url);
});
