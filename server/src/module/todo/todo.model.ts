import mongoose, { model } from "mongoose";
import type { Model } from "mongoose";

export interface ITodo {
  taskName: string;
  taskId: number;
  status: boolean;
}

const TodoSchema = new mongoose.Schema<ITodo>(
  {
    taskName: {
      type: String,
      required: [true, "Task name is required."],
    },
    taskId: {
      type: Number,
      required: [true, "Task Id is required."],
    },
    status: {
      type: Boolean,
      required: [true, "Status is required."],
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Todo: Model<ITodo> = model<ITodo>("Todo", TodoSchema);

export default Todo;
