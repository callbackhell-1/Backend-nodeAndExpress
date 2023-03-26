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

// param
// /userid/node : here node is dynamic url
// /userid/react here react is dynamic url

app.get("/userid/:someRandom", async (req, res) => {
  // const { id } = req.params;
  // const user = await User.findById(id);
  // console.log(id);
  console.log(req.params);
  /*
  // Example 1: 
  route: app.get("/userid/:id" ... 
i have sent end point as : 
-> localhost:3000/userid/node
  -> console.log(req.params);
   -> { id: 'node' }
 
// Example 2 :
 route: app.get("/userid/:someRandom" ...
 i have sent end point as : 
-> localhost:3000/userid/node
  -> console.log(req.params);
    ->{ someRandom: 'node' }
*/
  res.json({
    success: true,
    user: {},
  });
});

/**
-> we pass endpoint as :
localhost:3000/userid?id=642068d6479bbab3172c3b64

we get response as :
{
    "success": true,
    "user": {}
}

*/
app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
