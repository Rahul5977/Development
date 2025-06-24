import { asyncHandler } from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user data
  const { email, username, password, role } = req.body;
  //validation
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
