import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/auth.routes.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:51214",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test check",
  });
});
app.use('/api/v1/users',userRouter)

app.listen(port, () => {
  console.log(`Backend is listning at ${port}`);
});
