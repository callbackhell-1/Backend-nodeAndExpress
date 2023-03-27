import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";

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
app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hi I'm Groot</h1>");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});

/**
 * Now to access data
 * endpoint : localhost:3000/users/all
 * -> all user will show
 */
