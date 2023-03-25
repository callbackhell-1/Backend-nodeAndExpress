import express from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

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

  // cookie set : As user id , when we create user we get userId in db
  res.cookie("token", userId._id, {
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
-- Here we are passing cookie as user._id(which is there in db while creating user).But when we check on browser we can see that there cookie value is same as user._id .so for that we will use JWT ( in next commit)
-- 
--  

--

*/
