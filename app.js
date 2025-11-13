const express = require("express");
const app = express();
const math = require("./utils/math");

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/sum", async (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  const result = math.add(a, b);

  await new Promise(r => setTimeout(r, 100));

  res.send("Result is: " + result);
});

app.get("/test", (req, res) => {
  setTimeout(() => {
    res.send("done");
  }, 5000);
});

app.listen(3000);
