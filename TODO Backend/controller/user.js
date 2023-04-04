import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {};

// login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email }).select("+password");

  // if user doesn't exist
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid Email/password",
    });
  }

  //   if user exist
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Password or email not matching",
    });
  }
  sendCookie(user, res, `Welcome ${user.name}`, 200);
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
export const getMyProfile = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  /**
   * if user is login then only ,he get token
   */
  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login first",
    });
  }
  // if we have token , we can fetch all the data
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Decoded data :", decodedData); //Decoded data : { _id: '642b4445b056c12905b01e66', iat: 1680641381 }

  // find user
  const user = await User.findById(decodedData._id);

  res.status(200).json({
    success: true,
    user,
  });
};
