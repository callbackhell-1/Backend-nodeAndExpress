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

// Model/collection creation
const Message = mongoose.model("Messages", messageSchema);

const app = express();

// Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
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
