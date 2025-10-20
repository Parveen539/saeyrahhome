import { Router } from "express";
import homeRouter from "./hompage/home.router.js";

const approuter = Router();

approuter.use("/home", homeRouter);

export default approuter;
