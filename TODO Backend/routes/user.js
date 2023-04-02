import express from "express";
import {
  getAllUsers,
  register,
  getUserDetails,
  login,
} from "../controller/user.js";

const router = express.Router();

// Display all user
router.get("/all", getAllUsers);

// create new user
router.post("/new", register);

// login user
router.post("/login", login);

// Detail of user Based in ID
router.get("/userid/:id", getUserDetails);

export default router;
