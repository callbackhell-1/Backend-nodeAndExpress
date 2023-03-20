import express from "express";
import fs from "fs";
import path from "path";
const app = express();

app.get("/", (req, res) => {
  const pathLoc = path.resolve();

  console.log(pathLoc);
  /* C:\Users\Epitome\Desktop\Backend-nodeAndExpress\Express-JS
   */
  res.sendFile(path.join(pathLoc, "./index.html"));
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

// npm run dev

// 1:04:40
