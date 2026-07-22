import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  return res.status(500).json({
    success: "failed",
    message: error.message,
  });
};

export default globalErrorHandler;
