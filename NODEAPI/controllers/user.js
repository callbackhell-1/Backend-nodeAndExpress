import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  // find all user from db
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};

// create new user
export const register = async (req, res) => {
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
};

// user details
export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
};

// updateUserDetails logic.
//deleteUserDetails logic
