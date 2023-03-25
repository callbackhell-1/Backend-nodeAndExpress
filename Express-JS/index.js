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
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Model/collection creation
const Message = mongoose.model("Messages", messageSchema);

const app = express();

// Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// setting up view engine
app.set("view engine", "ejs");
/*
app.get("/", (req, res) => {
  res.render("index");
});
*/

// Rendering Login Page
app.get("/", (req, res) => {
  console.log(req.cookies); //{ token: 'iamin' }

  // const token = req.cookie.token
  //destructuring the same as

  const { token } = req.cookies;
  console.log(token); //{ token: 'iamin' }

  if (token) {
    res.render("logout");
  } else {
    res.render("login");
  }
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
-- app.post("/contact", async (req, res) => {
  
Method 1: 
  await Message.create({name : req.body.name ,email :req.body.email});

Method 2:
    const hmaraData = {
     name: req.body.name,
     email: req.body.email,
   };
  await Message.create(hmaraData);

Method 3:
  const { name, email} = req.body;
    await Message.create({name ,email});
    

-- If key value pair is same then no need to pass like
{name : name ,email : email}
Just pass {name ,email}
--  

--

*/
