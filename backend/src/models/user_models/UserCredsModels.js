import mongoose from "mongoose";

const previousPasswords = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserCreds",
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdTS: {
    type: Date,
    default: Date.now,
  },
});

const userCredsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwords: [previousPasswords],
  },
  { timestamps: true },
);

export default mongoose.model("UserCreds", userCredsSchema);
