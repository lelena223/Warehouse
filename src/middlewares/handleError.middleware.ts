import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError.util";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};
