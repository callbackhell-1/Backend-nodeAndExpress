import express from "express";
import { User } from "../models/user.js";
import {getAllUsers} from "../controllers/user.js";

const router = express.Router();

// Display all user
router.get("/all", getAllUsers);

// create new user
router.post("/new", async (req, res) => {
  const { name, email, password } = req.body;
  // user create
  await User.create({
    name,
    email,
    password,
  });
  // sending response
  res.status(201).cookie("ctoken", "tokenval").json({
    success: true,
    message: "Registered",
  });
});

// Detail of user Based in ID
router.get("/userid/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
});

export default router;
