import type { Request, Response } from "express";
import asyncErrorHandler from "../../../utility/asyncErrorHandler.js";
import todoImplementation from "./todo.service.impl.js";
import type ResponseDto from "../response.dto.js";

class TodoController {
  todoService = new todoImplementation();

  createTodo = asyncErrorHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { todoName } = req.body;

      const resp = await this.todoService.processCreate(todoName);

      res
        .status(resp.statusCode)
        .json({ message: resp.message, data: resp.data });
    },
  );

  updateTodo = asyncErrorHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { taskId } = req.query;
      const resp = await this.todoService.processUpdate(Number(taskId));
      res.status(resp.statusCode).json({
        message: resp.message,
        data: resp.data,
      });
    },
  );

  deleteTodo = asyncErrorHandler(
    async (req: Request, res: Response): Promise<void> => {
      const { taskId } = req.query;
      const resp = await this.todoService.processDelete(Number(taskId));
      res.status(resp.statusCode).json({
        message: resp.message,
        data: resp.data,
      });
    },
  );

  getAllTodo = asyncErrorHandler(
    async (req: Request, res: Response): Promise<void> => {
      const resp = await this.todoService.processGetAll();
      res.status(resp.statusCode).json({
        message: resp.message,
        data: resp.data,
      });
    },
  );
}

export default TodoController;
