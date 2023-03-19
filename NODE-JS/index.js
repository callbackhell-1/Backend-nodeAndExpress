import http from "http";
import { percent } from "./feature.js";

console.log(percent);
console.log(percent());

/*
[Function: percent]
57
*/

const server = http.createServer((req, res) => {
  // routing

  if (req.url == "/") {
    res.end("<h1>Welcome to Home page</h1>");
  } else if (req.url == "/about") {
    res.end(`<h1>Welcome to About page and percent is ${percent()}</h1>`);
  } else if (req.url == "/contact") {
    res.end("<h1>Welcome to contact page</h1>");
  } else {
    res.end("<h1>Error : 404 page</h1>");
  }
});

// Event listener
server.listen(3000, (err) => {
  if (err) {
    console.log("Error in server", err);
  }
  console.log("Server is up & running at 3000");
});
