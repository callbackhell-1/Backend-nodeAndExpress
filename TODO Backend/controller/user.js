import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import jwt from "jsonwebtoken";
import ErrorHandler from "../middlewares/error.js";

export const getAllUsers = async (req, res) => {};

// login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email }).select("+password");

  // if user doesn't exist
  if (!user) {
    return next(new ErrorHandler("Invalid Email/password", 400));
  }

  //   if user exist
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new ErrorHandler("Password or email not matching", 400));
  }

  sendCookie(user, res, `Welcome ${user.name}`, 200);
};

// create new user
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  //   finding user
  let user = await User.findOne({ email: email });

  if (user) {
    return next(new ErrorHandler("user already exist", 400));
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
export const getMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

// logout
export const logout = (req, res) => {
  // logout means destroying cookie
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
      message: "Logout out successfully",
    });
};
