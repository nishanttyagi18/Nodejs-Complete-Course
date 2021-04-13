const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", "templates/views");

app.get("/shop", (req, res) => {
  res.render("shop", { title: "MyShop", user: "Nishant" });
});

app.get("/", (req, res) => {
  //
});

app.listen(3000, () => console.log("listening at port 3000"));
