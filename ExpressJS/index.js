const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/about", (req, res) => {
  res.send("Hello from About");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error in listener", port);
  }
  console.log("Server is running on port ", port);
});
