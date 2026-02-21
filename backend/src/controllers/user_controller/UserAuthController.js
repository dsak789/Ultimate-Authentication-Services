import { Router } from "express";
import { register } from "../../services/user_services/UserAuthSerives.js";
export const userAuthRouter = Router();

userAuthRouter.get(
  "/auth",
  /* 
    #swagger.tags = ['User Authentication']
    #swagger.summary = 'Get user'
    #swagger.path = '/api/user/auth'
  */
  register,
);
userAuthRouter.post(
  "/auth",
  // #swagger.tags = ['User Authentication']
  /* 
    #swagger.tags = ['User Authentication']
    #swagger.summary = 'Register user'
    #swagger.path = '/api/user/auth'
  */
  register,
);
