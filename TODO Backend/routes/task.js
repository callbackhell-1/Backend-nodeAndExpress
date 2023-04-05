import express from "express"
import { newTask } from "../controller/task.js";
const router = express.Router();

// Adding new task
router.post("/new",newTask);

export default router;