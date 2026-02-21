import { Router } from "express";
import { userAuthRoutes } from "./user_controller/index.js";

export const allApis = Router();

allApis.use("/api/", userAuthRoutes);
