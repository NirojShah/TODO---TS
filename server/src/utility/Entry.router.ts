import { Router } from "express";
import type { Router as RouterType } from "express";
import todoRoute from "../module/todo/todo.route.js";

const AppRouter: RouterType = Router();

AppRouter.use("/todo",todoRoute);

export default AppRouter;
