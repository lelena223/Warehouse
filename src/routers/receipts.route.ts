import { Router } from "express";
import * as receiptsController from "../controllers/receipts.controller";

const router = Router();

router.post("/", receiptsController.createReceipt);

export default router;
