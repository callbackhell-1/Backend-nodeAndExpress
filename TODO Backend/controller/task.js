import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user, //only logged in user can add task
  });

  res.status(201).json({
    success: true,
    message: "Task created !",
  });
};

// my task
export const getMyTask = async (req, res, next) => {
  // TODO:  show task of user who logged in
  // get user id
  const userId = req.user._id;

  // find all task of user whose id we got/who's logged in
  const tasks = await Task.find({ user: userId });

  res.status(200).json({
    success:true,
    tasks, // array
  })
};
