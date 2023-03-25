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

/*
app.get("/", (req, res) => {
  res.render("index");
});
*/

// Rendering Login Page or Home/root page
app.get("/", isAuthenticated, (req, res) => {
  res.render("logout");
});

app.post("/login", (req, res) => {
  // cookie set
  res.cookie("token", "iamin", {
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

app.get("/add", async (req, res) => {
  await Message.create({
    name: "Dummy2",
    email: "sample2@eemail.com",
  });
  res.send("Data created !");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", async (req, res) => {
  {
    /* const hmaraData = {
     name: req.body.name,
     email: req.body.email,
   };
   console.log(hmaraData); // send hmaraData to create(hmaraData) or below method :
  */
  }

  await Message.create({
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
