import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserCreds",
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      lowercase: true,
      sparse: true,
    },

    phone: {
      type: String,
    },

    address: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("UserProfile", userProfileSchema);
