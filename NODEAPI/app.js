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

app.get("/userid", async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
});

/**
//  1. using post method
 *If we send get req at url localhost:3000/userid

 and pass id as {
    "id":"642068d6479bbab3172c3b64"
}

then we get infor of user with that pparticular id

//2. USing query param
-> we can use this as query param also by: 
localhost:3000/userid?id=642068d6479bbab3172c3b64
 
const id =req.query.id;
then we can use find the info of user using this id.


*/
app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
