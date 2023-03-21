import express from "express";
import path from "path";
import mongoose from "mongoose";

// DB connection
mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "backend",
  })
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log("Not Connected to db", error);
  });

// Schema creation
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const app = express();

const users = [];

// Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  users.push({
    name: req.body.name,
    email: req.body.email,
  });
  res.redirect("/success"); // /success is route, not the file
});

app.get("/users", (req, res) => {
  res.json({
    users, //users is an array
  });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

/*  Note : */

/* 
-- 

-- 

--  

--

*/
