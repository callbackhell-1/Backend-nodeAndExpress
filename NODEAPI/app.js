import express from "express";
import userRouter from "./routes/user.js";

export const port = 3000;

export const app = express();

// using Middleware
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hi I'm Groot</h1>");
});
