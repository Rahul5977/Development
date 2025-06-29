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
  const existingUser = User.findOne({ email });
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
  const verificationUrl = `http://localhost:5000//api/v1/verify?token=${unHashedToken}`;
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

const loginUser = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});
const logOutUser = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
});

const verifyEmail = asyncHandler(async (req, res) => {
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
export { registerUser };
