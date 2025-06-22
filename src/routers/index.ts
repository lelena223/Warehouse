import { Router } from "express";
import receiptsRouter from "./receipts.route";

const router = Router();

router.use("/receipts", receiptsRouter);

export default router;
