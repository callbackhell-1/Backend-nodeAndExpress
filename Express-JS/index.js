import express from "express";
import path from "path";

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

// seeing users from array by sending res as json
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
-- First it will check in public folder , if idex.html is ther then it will render that only , if not then it will go to index.ejs

-- To get form data we have to use middle ware (app.use(express.urlencoded({ extended: true }));
)

--  render(""):no need of url , redirect need of url (which is route)

--

*/
