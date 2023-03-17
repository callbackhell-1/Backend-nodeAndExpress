const express = require("express");

// Router
const router = express.Router();


router.get("/", (req, res) => {
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
