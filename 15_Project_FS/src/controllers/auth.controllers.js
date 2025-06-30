import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import {
  sendMail,
  emailVerificationMailGenContent,
  forgotPasswordMailGenContent,
} from "../utils/mail.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, fullname } = req.body;
  //validation is done already
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(402, "User exist with similar email");
  }
  // const hashedPassword = await bcrypt.hash(password, 10);
  const user = User.create({
    email,
    password,
    username,
    fullname,
  });
  // const token = crypto.randomBytes(32).toString("hex")
  // user.emailVerificationToken=token
  const { hashedToken, unHashedToken, tokenExpiry } =
    await user.generateTemporaryToken();
  newUser.emailVerificationToken = hashedToken;
  newUser.emailVerificationExpiry = tokenExpiry;
  await newUser.save();

  // Prepare and send verification email
  const verificationUrl = `http://localhost:3000/api/v1/verify?token=${unHashedToken}`;
  const mailGenContent = emailVerificationMailGenContent(
    newUser.username,
    verificationUrl
  );

  await sendMail({
    email: user.email,
    subject: "Verify your email address",
    mailGenContent,
    body: mailGenContent.body,
  });

  const safeUser = {
    id: user._id,
    email: user.email,
    username: user.username,
    role: user.role,
  };
  res
    .status(201)
    .json(
      new ApiResponse(201, { user: safeUser }, "User registered successfully")
    );
});

const verifyEmail = asyncHandler(async (req, res) => {
  const token = req.params;
  if (!token) {
    throw new ApiError(400, "Token not found");
  }
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpiry: { $gt: Date.now() },
  });
  if (!user) {
    throw new ApiError(400, "Invalid token");
  }
  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpiry = undefined;
  await user.save();
  res.status(200).json(new ApiResponse(200, null, "User verified"));
});

const loginUser = asyncHandler(async (req, res) => {
  //get user data
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "User does not exist");
  }
  if (!user.isEmailVerified) {
    throw new ApiError(400, "Email is not verified!");
  }
  const isMatch = await user.isPasswordCorrect(password);
  if (!isMatch) {
    throw new ApiError(401, "Incorrect password");
  }
  // Generate access token
  const accessToken = await user.generateAccesToken();
  const refreshToken = await user.generateRefreshToken();
  // Save refreshToken in DB
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });
  // Set token in HTTP-only cookie
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Set true in production
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  // Safe user object
  const safeUser = {
    id: user._id,
    email: user.email,
    username: user.username,
    fullname: user.fullname,
  };

  res
    .status(200)
    .json(new ApiResponse(200, { user: safeUser }, "Login successful"));
});
const logOutUser = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});

const resendEmailVerification = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});
const refreshAccessToken = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});

const getCurrentUser = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});
export { registerUser, verifyEmail, loginUser };
