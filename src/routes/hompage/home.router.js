import { Router } from "express";
import { sendHomePage } from "../../controller/home.controller.js";

const homeRouter = Router();

homeRouter.get("/", sendHomePage);

export default homeRouter;
