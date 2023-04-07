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
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Hello from Project");
});

// error Handling
app.use((err, req, res, next) => {
  console.log(err);
  /*
Error: Nice
    at deleteTask (file:///C:/Users/Epitome/Desktop/Backend-nodeAndExpress/TODO%20Backend/controller/task.js:67:17)
  */
 console.log(err.message); //Nice
  return res.status(404).json({
    success: false,
    message: "Invalid Id",
  });
});
