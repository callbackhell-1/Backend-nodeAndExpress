import express from "express";
import path from "path";

const app = express();

// Static - handler
app.use(express.static(path.join(path.resolve(), "public")));

console.log(path.join(path.resolve(), "public"));
/* C:\Users\Epitome\Desktop\Backend-nodeAndExpress\Express-JS\public
 */

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.sendFile("index");
  res.render("index");
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
