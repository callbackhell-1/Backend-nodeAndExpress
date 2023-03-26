import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const port = 3000;

const app = express();

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running server ${err}`);
  }
  console.log(`Server is up & running on ${port}`);
});
