import mongoose from "mongoose";
import bcypt from "bcrypt";

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

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
