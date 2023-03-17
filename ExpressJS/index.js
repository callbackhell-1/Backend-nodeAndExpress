const express = require("express");
const port = 3000;
const path = require("path");

const app = express();

const dirPath = path.join(__dirname, "public");
// console.log(dirPath);

app.use(express.static(dirPath));

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/about", (req, res) => {
  res.send("Hello from About");
});

app.get("/contact", (req, res) => {
  res.send(`<h1>Thanks for contacting us</h1>`);
});

// convert object data into JSON data in Browser.
app.get("/download", (req, res) => {
  res.send({
    name: "John",
    age: 22,
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in listener", port);
  }
  console.log("Server is running on port ", port);
});
