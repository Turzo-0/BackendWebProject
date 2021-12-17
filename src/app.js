const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 9000;

//public static path
const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
const templatePath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

//routing......
//home  page
app.get("/", (req, res) => {
  res.render("index");
});

//about page
app.get("/about", (req, res) => {
  res.render("about");
});

//weather page
app.get("/weather", (req, res) => {
  res.render("weather");
});

//bloggin page
app.get("/blog", (req, res) => {
  res.render("blog");
});

//contact page
app.get("/contact", (req, res) => {
  res.render("contact");
});

//error page
app.get("*", (req, res) => {
  res.render("404 error paage opps");
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
