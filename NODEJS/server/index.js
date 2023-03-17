const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const jsonData = fs.readFileSync("api.json", "utf-8");
  const objData = JSON.parse(jsonData);

  if (req.url == "/") {
    res.end("hi this is my first nodejs server");
  } else if (req.url === "/download") {
    res.end("hi this is my first download page");
  } else if (req.url === "/user") {
    res.end(objData[0].name);
  } else {
    res.end("404: Page could not be found");
  }
});

server.listen(3000, () => {
  console.log("server Listening on port  no. 3000");
});
