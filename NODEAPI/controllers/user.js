import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  // find all user from db
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};
