import express from "express";
import fs from "fs";
import path from "path";

const app = express();

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});


/* 
-- for render we use  view(ejs)

-- either set view engine : app.set("view engine", "ejs"); 

"or"
--  res.render("index.ejs"); (give extension also)

--If we set view engine no need to give ext.

*/
