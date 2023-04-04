import express from "express";
import {
  getAllUsers,
  register,
  login,
  getMyProfile,
} from "../controller/user.js";

import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Display all user
router.get("/all", getAllUsers);

// create new user
router.post("/new", register);

// login user
router.post("/login", login);

// Profile of user
router.get("/me", isAuthenticated, getMyProfile);

export default router;
