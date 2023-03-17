const express = require("express");
const port = 3000;
const path = require("path");

const app = express();

// const dirPath = path.join(__dirname, "public");
// console.log(dirPath);
// app.use(express.static(dirPath));

// Template engine
app.set("view engine", "ejs");
// console.log(app.get("view engine")); //ejs
// console.log(__dirname,"views");


app.get("/", (req, res) => {
  //   res.sendFile(`${dirPath}/index.html`);
});

app.get("/about", (req, res) => {
  //   res.sendFile(`${dirPath}/about.html`);
});

app.get("/contact", (req, res) => {
  //   res.send(`<h1>Thanks for contacting us</h1>`);
});

app.get("/download", (req, res) => {
  //   res.download(`${dirPath}/index.html`);
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in listener", port);
  }
  console.log("Server is running on port ", port);
});
