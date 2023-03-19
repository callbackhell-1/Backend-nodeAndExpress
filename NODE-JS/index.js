const http = require("http");

const server = http.createServer(() => {
  console.log("Hello from NodeJS");
});

// Event listener
server.listen(3000, (err) => {
  if (err) {
    console.log("Error in server", err);
  }
  console.log("Server is up & running at 3000");
});
