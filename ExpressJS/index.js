const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

// Template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "HomePage",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About from view eng",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in listener", port);
  }
  console.log("Server is running on port ", port);
});
