import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
// import db
import {connectDB} from "./data/database.js";

const port = 3000;

const app = express();

// connecting the db
connectDB();

// using Middleware
app.use(express.json());
app.use("/users", userRouter);

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
 *
 *
 *
 */
