// src/app.ts
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routers from "./src/routers/index";
import { errorHandler } from "./src/middlewares/handleError.middleware";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use("/api", routers);
app.use(errorHandler);

export default app;
