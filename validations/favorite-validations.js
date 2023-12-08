import { param } from 'express-validator';

export const validateGetFavorites = [
  param("user")
    .trim()
    .escape()
    .isString()
    .withMessage("Username is not valid.")
]

export const validateFavoritePath = [
  param("user")
    .trim()
    .escape()
    .isString()
    .withMessage("Username is not valid."),
  param("recipeName")
    .trim()
    .escape()
    .isString()
    .withMessage("Username is not valid."),
]