import express from "express";
import mongoose from "mongoose";

const port = 3000;

const app = express();

// DB connection
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "BACKENDAPI",
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log("Not Connected to db", error);
  });



// using Middleware
app.use(express.json()); // as we are sending JSON so we use this

app.get("/", (req, res) => {
  res.send("<h1>Hi I'm Groot</h1>");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
