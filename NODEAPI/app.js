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

app.get("/userid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
});

/*
Note : MAke sure dynamic route put at the end

because: 

app.get("/userid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
});

app.get("/userid/special",(req,res)=>{
  res.json({
    success:true,
    message:"Hola"
  })
})

-> in this case dynamic routing is above static routing
so when we hit  endpoint : /userid/special

then,
app.get("/userid/:id....
/special is considered as id , and it will try to find user based on that id and leads to error.


-> so its better to put dynamic route at the end 

correct order:

app.get("/userid/special",(req,res)=>{
  res.json({
    success:true,
    message:"Hola"
  })
})

app.get("/userid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
});

 */

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
