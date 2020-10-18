const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { v1, v2 } = req.body;
  const sum = v1 + v2;
  res.send(`The Sum of number is ${sum}`);
});

app.listen(port, () => {
  console.log(`Server Running at port ${port}`);
});
