import express from "express";
import path from "path";

const app = express();

// Middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

/*  Note : */

/* 
-- First it will check in public folder , if idex.html is ther then it will render that only , if not then it will go to index.ejs

-- To get form data we have to use middle ware (app.use(express.urlencoded({ extended: true }));
)

--  

--

*/
