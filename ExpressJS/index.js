const express = require("express");
const path = require("path");
const router = require("./router");
const port = 3000;

const app = express();

// Router
app.use(router);

// Template engine
app.set("view engine", "ejs");

app.listen(port, (err) => {
  if (err) {
    console.log("Error in listener", port);
  }
  console.log("Server is running on port ", port);
});
