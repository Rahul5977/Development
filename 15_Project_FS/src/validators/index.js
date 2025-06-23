import { body } from "express-validator";

const userReistrationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username should be atleast 3 char")
      .isLength({ max: 10 })
      .withMessage("Username should me atmost 10 char"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Min lenght should be 8"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("password cannot be empty"),
  ];
};

export { userReistrationValidator, userLoginValidator };
