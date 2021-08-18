const express = require("express");
const hbs = require("hbs");
const path = require("path");
require("dotenv").config();
const app = express();

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static(path.resolve(__dirname + "/public")));
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Jeancarlo Mamani",
    titulo: "Curso de Node",
  });
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Jeancarlo Mamani",
    titulo: "Curso de Node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Jeancarlo Mamani",
    titulo: "Curso de Node",
  });
});
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
 