import swaggerAutogen from "swagger-autogen";
const swagger = swaggerAutogen({ openapi: "3.0.0" });
const doc = {
  info: {
    title: "Ultimate Authentication",
    description:
      "Ultimate Authentication provider for small scale appilcations",
  },
  host: "localhost:9999",
  schemes: ["http"],
};

const outputFile = "./src/swagger-output.json";
const endpointsFiles = [
  "./index.js",
  "./src/controllers/user_controller/index.js",
  "./src/controllers/user_controller/UserAuthController.js",
];

swagger(outputFile, endpointsFiles, doc).then(() => {
  import("./index.js");
});
