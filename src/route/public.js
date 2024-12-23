import express from "express";
import powerController from "../controller/power-controller.js";

const publicRouter = new express.Router();
publicRouter.get("/m4m", powerController.read);
publicRouter.get("/dashboard", powerController.dashboard);

export { publicRouter };
