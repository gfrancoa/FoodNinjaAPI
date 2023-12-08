import { body } from "express-validator";

export const validateSignup = [
  body("name")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 55 })
    .withMessage("Name is not valid. Maximum 55 characters"),
  body("username")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 8, max: 20 })
    .matches(/^[a-zA-Z0-9_.-]{8,20}$/)
    .withMessage("Username is not valid. Min 8, max 20 characters. Can only include dashes, numbers and underscores"),
  body("password")
    .isString()
    .isLength({ min: 8, max: 20 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
    .withMessage("Password must be between 8-20 characters and must contain at least one lower case, one upper case, one number and one special character"),
  body("email")
    .trim()
    .escape()
    .isString()
    .isEmail()
    .isLength({ min: 1, max: 120 })
    .withMessage("E-mail is not valid")
]

export const validateLogin = [
  body("user")
    .trim()
    .escape()
    .isString()
    .withMessage("Username or email is not valid"),
  body("password")
    .isString()
    .isLength({ min: 8, max: 20 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
    .withMessage("Password must be between 8-20 characters and must contain at least one lower case, one upper case, one number and one special character"),
]