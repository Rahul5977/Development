import User from "../models/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      messae: "All fields are required",
    });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "User already exist",
    });
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    return res.status(400).json({
      message: "User not reistered !",
    });
  }
  //creating a verification token->using crypto (node package)

  const token = crypto.randomBytes(32).toString("hex");
  console.log(token);
  user.varificationToken = token;
  await user.save();

  //send token as email to user
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_POST,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });
  const mailOpt = {
    from: process.env.MAILTRAP_SENDEREMAIL,
    to: user.email,
    subject: "Hello ✔",
    text: `Please click on the following link:
    ${process.env.BASE_URL}/api/v1/user/verify/${token}
    `,
  };
  const sender = transporter.sendMail(mailOpt);

  console.log(req.body);
  
};

// const login = async (req, res) => {
//   res.send("Login");
// };
export { registerUser };
