import { Router } from "express";
import { userAuthRouter } from "./UserAuthController.js";

export const userAuthRoutes = Router();

userAuthRoutes.use(
  "/user",
  // #swagger.tags= ['User Aunthentication']
  userAuthRouter,
);
