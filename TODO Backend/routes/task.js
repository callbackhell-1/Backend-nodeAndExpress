import express from "express"
import { newTask } from "../controller/task.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

// Adding new task
router.post("/new",isAuthenticated,newTask);

export default router;