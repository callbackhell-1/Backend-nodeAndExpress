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
  //   show task of user who logged in
  // get user id
  const userId = req.user._id;

  // find all task of user whose id we got/who's logged in
  const tasks = await Task.find({ user: userId });

  res.status(200).json({
    success: true,
    tasks, // array
  });
};

// Update task

export const updateTask = async (req, res, next) => {
  const { id } = req.params;

  // find task with that id
  const task = await Task.findById(id);

  // if no task
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Invalid Id",
    });
  }

  //update
  task.isCompleted = !task.isCompleted; //making opposite , if true then false, vice-versa

  await task.save();

  res.status(200).json({
    success: true,
    message: "Task Updated !",
  });
};

// Delete task
export const deleteTask = async (req, res, next) => {
  // find task with that id
  const task = await Task.findById(req.params.id);

  // if no task
  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Invalid Id",
    });
  }

  // removing task
  await task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task Deleted",
  });
};
