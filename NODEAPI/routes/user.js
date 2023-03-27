import express from "express";
import { User } from "../models/user.js";
import { getAllUsers, register, getUserDetails } from "../controllers/user.js";

const router = express.Router();

// Display all user
router.get("/all", getAllUsers);

// create new user
router.post("/new", register);

// Detail of user Based in ID
router.get("/userid/:id", getUserDetails);

export default router;
