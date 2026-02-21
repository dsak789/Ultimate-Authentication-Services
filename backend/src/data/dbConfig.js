import mongoose from "mongoose";

import { config } from "dotenv";

config();
const mongoUrl = process.env.MONGO_URL;
export const conDB = async () => {
  await mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("MONGODB Connected");
    })
    .catch((err) => {
      console.log(`MONGODB not Connected... Error: ${err}`);
    });
};
