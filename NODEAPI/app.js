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

// using Middleware
app.use(express.json()); // as we are sending JSON so we use this

app.get("/", (req, res) => {
  res.send("<h1>Hi I'm Groot</h1>");
});

app.get("/users/all", async (req, res) => {
  // find all user from db
  const users = await User.find({});

  /*----query param------*/
  //1.  our url : localhost:3000/users/all/?city=Newyork
  console.log(req.query);
  // op: { city: 'Newyork' }

  //2. our url: localhost:3000/users/all/?city=Newyork&country=US&continet=NA
  console.log(req.query);
  // o/p: { city: 'Newyork', country: 'US', continet: 'NA' }

  // 3. use case
  const country = req.query.country;
  console.log(country);
  // o/p: US

  res.json({
    success: true,
    users,
  });
});

// create new user
app.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  // user create
  await User.create({
    name,
    email,
    password,
  });
  // sending response
  res.status(201).cookie("ctoken", "tokenval").json({
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
