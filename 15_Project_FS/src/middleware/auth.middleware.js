import jwt from "jsonwebtoken";
import { ApiError } from "../utils/api-error";
import { asyncHandler } from "../utils/async-handler";
import { User } from "../models/user.models";
import { ProjectMember } from "../models/projectmember.models";
import mongoose from "mongoose";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) throw new ApiError(401, "Unauthorised req");
  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
    );
    if (!user) throw new ApiError(401, "Unauthorised request");
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

export const validateProjectPermission = (roles = []) =>
  asyncHandler(async (req, res, next) => {
    const { projectId } = req.params;
    if (!projectId) {
      throw new ApiError(401, "Invalid projectId");
    }
    const projectMember = await ProjectMember.findOne({
      project: mongoose.Types.ObjectId(projectId),
      user: mongoose.Types.ObjectId(req.user._id),
    });
    if (!projectMember) {
      throw new ApiError(401, "");
    }
    const givenRole = projectMember.role;
    req.user.role = givenRole;

    if (!roles.includes(givenRole)) {
      throw new ApiError(
        401,
        "You do not have permission to permorm this action"
      );
    }
});
