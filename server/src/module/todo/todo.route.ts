import { Router } from "express";
import type { Router as RouterType } from "express";
import TodoController from "./todo.controller.js";
import type { Request, Response } from "express";

const todoRoute: RouterType = Router();

const todoController = new TodoController();

todoRoute.post(
  "/",
  async (req: Request, res: Response, next) =>
    await todoController.createTodo(req, res, next),
);
todoRoute.get(
  "/",
  async (req: Request, res: Response, next) =>
    await todoController.getAllTodo(req, res, next),
);
todoRoute.patch(
  "/",
  async (req: Request, res: Response, next) =>
    await todoController.updateTodo(req, res, next),
);
todoRoute.delete(
  "/",
  async (req: Request, res: Response, next) =>
    await todoController.deleteTodo(req, res, next),
);

export default todoRoute;
