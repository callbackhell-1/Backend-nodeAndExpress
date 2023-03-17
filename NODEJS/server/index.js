const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hi this is my first nodejs server");
  } else if (req.url === "/download") {
    res.end("hi this is my first download page");
  } else {
    res.end("404: Page could not be found");
  }
});

server.listen(3000, () => {
  console.log("server Listening on port  no. 3000");
});
