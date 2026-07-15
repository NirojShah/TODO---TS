import type { Model } from "mongoose";
import type { ITodo } from "./todo.model.js";

const generateTaskId = async (model: Model<ITodo>): Promise<number> => {
  const lastTask = await model.findOne().sort({ taskId: -1 });

  if (!lastTask) {
    return 1;
  }

  return lastTask.taskId + 1;
};

export default generateTaskId;
