import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json" with { type: "json" };
import { conDB } from "./data/dbConfig.js";
import { allApis } from "./controllers/index.js";
import { GlobalExceptionHandler } from "./middlewares/GlobalExceptionMiddleware.js";
import { LoggingHandler } from "./middlewares/LoggingMiddleware.js";

dotenv.config();
conDB();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(LoggingHandler);
app.use(allApis);

app.use(GlobalExceptionHandler);

app.get("/", (req, res) => {
  /* 
    #swagger.tags = ['Home']
    #swagger.summary = 'Api Running Check'
    #swagger.path = '/'
  */
  res.status(200).json("Ultimate Authentication Service Running");
});

app.listen(port, () => console.log(`Server Started http://localhost:${port}`));
