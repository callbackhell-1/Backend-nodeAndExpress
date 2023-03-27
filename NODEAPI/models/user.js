import mongoose from "mongoose";

// creating Schema
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Model/collection creation
export const User = mongoose.model("User", schema);
