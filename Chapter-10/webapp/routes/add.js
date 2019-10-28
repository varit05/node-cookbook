const { Router } = require("express");
const restify = require("restify");
var clients = require("restify-clients");
const router = Router();

router.get("/", (req, res, next) => {
  res.render("add", { first: 0, second: 0, result: 0 });
});

router.post("/calculate", (req, res, next) => {
  const client = clients.createJsonClient({
    url: "http://localhost:8080"
  });
  const { first, second } = req.body;
  client.get(`/add/${first}/${second}`, (err, svcReq, svcRes, result) => {
    if (err) {
      next(err);
      return;
    }
    res.render("add", { first, second, result });
  });
});

module.exports = router;
