import express from "express";

const app = express();

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "John",
    city: "LA",
    country: "Ind",
  });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

/*  Note : */

/* 
-- Local means whole object :{name: "John",city: "LA",country: "Ind"}

-- If we use local.name , result will be same

--  We use render for dynamic data

--

*/
