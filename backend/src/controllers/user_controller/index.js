import { Router } from "express";
import { userAuthRouter } from "./UserAuthController.js";

export const userAuthRoutes = Router();

userAuthRoutes.use(
  "/users",
  // #swagger.tags= ['User Aunthentication']
  userAuthRouter,
);
