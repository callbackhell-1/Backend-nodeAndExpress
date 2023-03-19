const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.end("Heloo from NodeJS ");
  res.end(`<h1>Hellllooo NOde</h1>`);
});

// Event listener
server.listen(3000, (err) => {
  if (err) {
    console.log("Error in server", err);
  }
  console.log("Server is up & running at 3000");
});

/*

/
/about
/about/us

 */
