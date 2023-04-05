import { Task } from "../models/task";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  await Task.create({ title, description });

  /**
   * 1 more way to create is:
   * const task = new Task({title});
   * await task.save();
   */
};
