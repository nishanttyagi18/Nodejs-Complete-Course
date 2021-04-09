const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware running...");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("passed through users route");
  res.send("from user route");
});

app.use("/", (req, res, next) => {
  console.log("passed through home route");
  res.send("from home route");
});

app.use((req, res, next) => {
  console.log("last middleware running...");
  res.send("<h1>Hello from express</h1>");
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
