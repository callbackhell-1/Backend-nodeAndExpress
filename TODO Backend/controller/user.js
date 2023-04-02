import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {};

// login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email }).select("+password");
  /**
   * As we have made select password false in user schema, so we cant access password directly,so here by using select("+password"); we can access password
   */

  // if user doesn't exist
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email/password", //but originally user is not exist
    });
  }

  //   if user exist
  const isMatch = await bcrypt.compare(password, user.password);
  /**
   * here password is req.body.password and
   * user.password is password that stored in DB
   */
  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Password or email not matching", // but here originally password not matching
    });
  }
  sendCookie(user,res,`Welcome ${user.name}`,200)
};

// create new user
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  //   finding user
  let user = await User.findOne({ email: email });
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
