import { Router } from "express";
import type { Router as RouterType } from "express";
import TodoController from "./todo.controller.js";

const todoRoute: RouterType = Router();

const todoController: TodoController = new TodoController();

todoRoute.post("/", todoController.createTodo);
todoRoute.get("/", todoController.getAllTodo);
todoRoute.patch("/", todoController.updateTodo);
todoRoute.delete("/", todoController.deleteTodo);

export default todoRoute;
