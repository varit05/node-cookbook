const request = require("superagent");
const { test } = require("tap");

test("Add Test", t => {
  t.plan(2);

  request
    .post("http://localhost:3000/add/calculate")
    .send("first=1")
    .send("second=2")
    .end((err, res) => {
      t.equal(err, null);
      t.ok(/result = 3/gi.test(res.text));
    });
});
