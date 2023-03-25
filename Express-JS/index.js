import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

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
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Model/collection creation
const User = mongoose.model("User", userSchema);

const app = express();

// Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// setting up view engine
app.set("view engine", "ejs");

// Middle ware
const isAuthenticated = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    // res.render(logout);
    next();
  } else {
    res.render("login");
  }
};

// Rendering Login Page or Home/root page
app.get("/", isAuthenticated, (req, res) => {
  res.render("logout");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  //create new user
  const userId = await User.create({
    name,
    email,
    password,
  });

  // creating token from jwt
  const token = jwt.sign({ _id: userId._id }, "iamsecretkey");

  console.log(token);
  /* o/p :
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFmM2EzMjM0NzYxMGNhYzRhYTExZTAiLCJpYXQiOjE2Nzk3NjgxMTR9.UVcivd4AAZvep0CPL5pHvIBN1Gc-CgXDpxGkny9uzV4
  */
  // cookie set : As user id , when we create user we get userId in db
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  res.redirect("/");
});

// Logout
app.get("/logout", (req, res) => {
  // cookie set
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

/*  Note : */

/* 
-- if we decoke token from jwt.io , we will get same id , which is there in DB.
-- 
--  

--

*/
