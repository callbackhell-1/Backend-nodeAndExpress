import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {};

// create new user
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  //   finding user
  let user = await User.findOne({ email });
  if (user) {
    return res.status(404).json({
      success: false,
      message: "user already exist",
    });
  }
  // hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //   if user not available then create
  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  //   calling feature code for cookies

  sendCookie(user, res, "Registered successfully", 201);
};

// user details
export const getUserDetails = async (req, res) => {};
