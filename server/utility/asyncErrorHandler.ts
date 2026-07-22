
import type { NextFunction, Request, Response } from "express";

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

let asyncErrorHandler = (func: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    func(req, res, next).catch((err: Error) => {
      next(err);
    });
  };
};

export default asyncErrorHandler;