import http from "http";


/*--------- Method-1---------  */
// import hero,{ hero1, hero2 } from "./feature.js";
// console.log(hero);
// console.log(hero1);
// console.log(hero2);

/*--------- Method-2---------  */
// import { hero1, hero2 } from "./feature.js";
// console.log(hero);
// console.log(hero1);
// console.log(hero2);

import * as myObj from "./feature.js";

// console.log(myObj);
// [Module] { default: 'Thor', hero1: 'IronMan', hero2: 'Batman' }

console.log(myObj.default);
console.log(myObj.hero1);
console.log(myObj.hero2);

/*
Thor
IronMan
Batman
*/

const server = http.createServer((req, res) => {
  // routing

  if (req.url == "/") {
    res.end("<h1>Welcome to Home page</h1>");
  } else if (req.url == "/about") {
    res.end("<h1>Welcome to About page</h1>");
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
