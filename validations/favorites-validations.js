import { param } from 'express-validator';

export const validateFavoritePath = [
  param("user")
    .trim()
    .escape()
    .isString() 
    .withMessage("Username is not valid."),
  param("recipeName")
    .notEmpty()
    .escape()
    .withMessage("You must insert an valid text."),
]
