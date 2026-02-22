import { Router } from "express";
import { userAuthServices } from "../../services/index.js";
export const userAuthRouter = Router();

userAuthRouter.post(
  "/register",
  /* 
    #swagger.tags = ['User Authentication']
    #swagger.summary = 'Register user'
    #swagger.path = '/api/users/register'

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: { type: "string", example: "dsak789" },
              password: { type: "string", example: "StrongPass@123" },
              name: { type: "string", example: "Sai Ajith Kumar" }
            },
            required: ["username", "password","name"]
          }
        }
      }
    }

    #swagger.responses[201] = {
      description: "User registered successfully"
    }

    #swagger.responses[400] = {
      description: "Validation error"
    }
  */
  userAuthServices.register,
);

userAuthRouter.post(
  "/login",
  /* 
    #swagger.tags = ['User Authentication']
    #swagger.summary = 'Login user'
    #swagger.path = '/api/users/login'

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: { type: "string", example: "dsak789" },
              password: { type: "string", example: "StrongPass@123" },
            },
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "User Loggedin successfully"
    }

    #swagger.responses[400] = {
      description: "Validation error"
    }
  */
  userAuthServices.login,
);

userAuthRouter.post(
  "/changePassword",
  /* 
    #swagger.tags = ['User Authentication']
    #swagger.summary = 'Change user password'
    #swagger.path = '/api/users/changePassword'

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              username: { type: "string", example: "dsak789" },
              oldpassword: { type: "string", example: "OldStrongPass@123" },
              newpassword: { type: "string", example: "NewStrongPass@123" },
              cnfpassword: { type: "string", example: "NewStrongPass@123" },
            },
          }
        }
      }
    }

    #swagger.responses[200] = {
      description: "User password changed successfully"
    }

    #swagger.responses[400] = {
      description: "Validation error"
    }
  */
  userAuthServices.passwordChange,
);

userAuthRouter.get(
  "/getUsers",
  /* 
    #swagger.tags = ['User Authentication']
    #swagger.summary = 'Get users'
    #swagger.path = '/api/users/getUsers'
  */
  userAuthServices.getUsers,
);
