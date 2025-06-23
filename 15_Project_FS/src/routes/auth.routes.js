import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middleware/validator.middleware.js";
import { userReistrationValidator } from "../validators/index.js";

const router = Router();

router
  .route("/register")
  .post(userReistrationValidator(), validate, registerUser);
export default router;
