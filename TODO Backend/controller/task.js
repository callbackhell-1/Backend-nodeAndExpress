import { Task } from "../models/task";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user, //only logged in user can add task
  });
};
