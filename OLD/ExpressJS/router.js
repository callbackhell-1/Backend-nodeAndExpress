const express = require("express");
constMiddleware = require("./middleware");

// Router
const router = express.Router();
// router.use(middleware);

router.get("/",middleware, (req, res) => {
  res.render("index", {
    title: "HomePage",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About from view eng",
  });
});

module.exports = router;
