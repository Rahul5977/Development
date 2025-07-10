import { Router } from "express";
import { validateProjectPermission } from "../middleware/auth.middleware.js";
import { UserRoleEnum } from "../utils/constants.js";

const router = Router();

router
  .route("/:projectId")
  .get(validateProjectPermission([UserRoleEnum.MEMBER,UserRoleEnum.ADMIN]),getNotes)
  .post(
    validateProjectPermission([UserRoleEnum.ADMIN, UserRoleEnum.MEMBER]),
    createNote
  );

export default router;
