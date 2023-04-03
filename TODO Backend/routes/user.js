import express from "express";
import {
  getAllUsers,
  register,
  login,
} from "../controller/user.js";

const router = express.Router();

// Display all user
router.get("/all", getAllUsers);

// create new user
router.post("/new", register);

// login user
router.post("/login", login);

// Profile of user
router.get("/me", getMyProfile);

export default router;
