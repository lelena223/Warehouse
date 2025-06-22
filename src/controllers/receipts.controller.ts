import { NextFunction, Request, Response } from "express";
import * as receiptService from "../services/receipts.service";

export const createReceipt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const receipt = await receiptService.createReceipt(req.body);
    res.status(201).json(receipt);
  } catch (error) {
    next(error);
  }
};
