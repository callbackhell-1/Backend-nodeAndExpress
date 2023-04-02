import express from "express";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";

// export const port = 3000;

export const app = express();

dotenv.config({
  path: "./data/config.env",
});

// Middlewares
app.use(express.json());
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello from Project");
});
