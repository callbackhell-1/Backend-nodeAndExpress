import express from "express";

// create server
const app = express();
// console.log(app);

// Listen server
app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

// npm run dev
