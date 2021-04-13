const express = require("express");
const expressHbs = require("express-handlebars");
const app = express();

app.engine(
  "hbs",
  expressHbs({ layoutsDir: "views/layouts/", extname: ".hbs" })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/shop", (req, res) => {
  res.render("home", { title: "MYShop" });
});

app.get("/", (req, res) => {
  //
});

app.listen(3000, () => console.log("listening at port 3000"));
