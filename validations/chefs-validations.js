import { param } from "express-validator";

export const validateGetChef = [
  param("username")
    .trim()
    .escape()
    .isString()
    .withMessage("Chef username is not valid"),
]