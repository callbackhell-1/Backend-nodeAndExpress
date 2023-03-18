function ageDetector(req, res, next) {
  if (req.query.age > 18) {
    res.send("You can vote");
    next();
  } else {
    res.send("You cannot vote ");
  }
}

module.exports = ageDetector;
