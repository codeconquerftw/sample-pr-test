const express = require("express");
const app = express();
const { add } = require("./utils/math");

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ result: add(a, b) });
});

app.listen(3000, () => console.log("Server running"));
