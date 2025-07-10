import User from "../models/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exist",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password:hashedPassword,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not registered !",
      });
    }
    //creating a verification token->using crypto (node package)

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token;
    await user.save();

    //send token as email to user
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
    const mailOpt = {
      from: "rahul.raj9237@gmail.com",
      to: user.email,
      subject: "Hello ✔",
      text: `Please click on the following link:
    ${process.env.BASE_URL}/api/v1/users/verify/${token}
    `,
    };
    const sender = transporter.sendMail(mailOpt);

    res.status(201).json({
      message: "Registered Successfully !",
      success: true,
    });

    console.log(req.body);
  } catch (error) {
    res.status(400).json({
      message: "USer not registered !",
      error,
      sucess: false,
    });
  }
};

const verifyUser = async (req, res) => {
  //get token from url
  //validate token
  //find user based on token
  //mil gaya user to => isVerified :true
  //remove verification token
  //save
  //return response

  const { token } = req.params; //params se link se data ata h
  console.log(token);
  if (!token) {
    return res.status(400).json({
      message: "Invalid user",
    });
  }
  const user = await User.findOne({
    varificationToken: token,
  });
  if (!user) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
  user.isVarified = true;
  res.status(201).json({
    message: "User verified !",
  });
  user.varificationToken = undefined;
  await user.save();
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are needed !",
    });
  }
  //passwork ko encypt krna h if email exist
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password !",
      });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    console.log(isMatched);
    if (!isMatched) {
      return res.status(400).json({
        message: "Invalid email or password !",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie("test", token,  cookieOptions );

    res.status(200).json({
      message: "Successfully loged in",
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Error loging in",
      error,
    });
  }
};

const getMe = async (req, res) => {
  try {
    //token me se data nikalna h
    //token cookies se milegi
    // const data=req.user
    console.log("Reached at getMe");
    // console.log(data);
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found!",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {}
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {});
    res.status(200).json({
      success: true,
      message: "Logged Out !!",
    });
  } catch (error) {}
};

const forgotPassword = async (req, res) => {
  try {
    //get emai from req.body
    const email=req.body
    //find user based on email
    const user=await User.findOne({email})
    //reset token +reset expiry =>Date.now() +10*6*1000=> user.save()
    //send mail =>design url
  } catch (error) {}
};
const resetPassword = async (req, res) => {
  try {
    //collect token from params
    // password from req.body
    //find user
    const { token } = req.params;
    const { password } = req.body;
    try {
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpiries: { $gt: Date.now() },
      });
      //set password in user 
      //resetToken,resetExpiry=>empty 
      //save
    } catch (error) {}
  } catch (error) {}
};

export {
  registerUser,
  verifyUser,
  loginUser,
  getMe,
  logoutUser,
  resetPassword,
  forgotPassword,
};
