import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String, //isko encrypt krna h
    role: {
      type: String,
      enum: ["user", "admin"], // inhi mese data select krna
      default: "user",
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    varificationToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpiries: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
