import statusCodes from "../../utility/StatusCodes.js";
import ResponseDto from "../response.dto.js";
import type { TodoService } from "./todo.service.js";
import generateTaskId from "./todo.utility.js";
import Todo, { type ITodo } from "./todo.model.js";

class TodoImplementation implements TodoService {
  async processCreate(todoName: string): Promise<ResponseDto<any>> {
    const taskId = await generateTaskId(Todo);

    if (!todoName || todoName.trim() === "") {
      return new ResponseDto(
        statusCodes.BAD_REQUEST,
        "Todo name is required",
        null,
      );
    }

    const newTodo = await Todo.create({
      taskName: todoName,
      taskId,
    });

    return new ResponseDto(
      statusCodes.CREATED,
      "Todo created successfully",
      newTodo,
    );
  }

  async processGetAll(): Promise<ResponseDto<any>> {
    const todos: ITodo[] | null = await Todo.find();
    return new ResponseDto(statusCodes.OK, "Todos fetched successfully", todos);
  }

  async processUpdate(taskId: number): Promise<ResponseDto<any>> {
    const taskExists = await Todo.findOne({ taskId });

    if (!taskExists) {
      return new ResponseDto(statusCodes.NOT_FOUND, "Task not found", null);
    }

    taskExists.status = !taskExists.status;
    await taskExists.save();

    return new ResponseDto(statusCodes.OK, "Task Updated.", taskExists);
  }

  async processDelete(taskId: number): Promise<ResponseDto<any>> {
    const taskExists = await Todo.findOne({
      taskId: taskId,
    });

    if (!taskExists) {
      return new ResponseDto(statusCodes.NOT_FOUND, "Task Not found.", null);
    }

    await taskExists.deleteOne();

    return new ResponseDto(
      statusCodes.NO_CONTENT,
      "Successfully deleted.",
      null,
    );
  }
}

export default TodoImplementation;
