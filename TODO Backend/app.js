import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// export const port = 3000;

export const app = express();

dotenv.config({
  path: "./data/config.env",
});

// Middlewares
app.use(express.json());
app.use(cookieParser());

// using routers
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task",taskRouter)

app.get("/", (req, res) => {
  res.send("Hello from Project");
});
