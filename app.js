const http = require("http");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST"><input type="text" name="productName"><button type="submit">Add</button></form>`
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("from home route");
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
