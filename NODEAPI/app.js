import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

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

// creating Schema
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Model/collection creation
const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("<h1>Hi I'm Groot</h1>");
});

app.get("/users/all", async (req, res) => {
  // find all user from db
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
});

// create new user
app.post("/users/new", async (req, res) => {
  // user create
  await User.create({
    name: "Wick",
    email: "email@email.com",
    password: "1",
  });
  // sending response
  res.json({
    success: true,
    message: "Registered",
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
