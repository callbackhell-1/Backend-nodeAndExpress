import express from "express";
import { getMyTask, newTask } from "../controller/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Adding new task
router.post("/new", isAuthenticated, newTask);

// get me/user task
router.get("/my", isAuthenticated, getMyTask);

// To update(completed or not) & delete
router.route("/:id").put().delete();

export default router;
