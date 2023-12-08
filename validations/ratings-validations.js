import { param, body } from "express-validator";

export const validateGetRating = [
  param("recipeName")
    .trim()
    .escape()
    .isString()
    .withMessage("Recipe name is not valid"),
  param("username")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 8, max: 20 })
    .matches(/^[a-zA-Z0-9_.-]{8,20}$/)
    .withMessage("Username is not valid"),
]

export const validateCreateRating = [
  param("recipeName")
    .trim()
    .escape()
    .isString()
    .withMessage("Recipe name is not valid"),
  param("username")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 8, max: 20 })
    .matches(/^[a-zA-Z0-9_.-]{8,20}$/)
    .withMessage("Username is not valid"),
  body("rating")
    .trim()
    .escape()
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be an int between 1 and 5"),
]

export const validateUpdateRating = [
  param("recipeName")
    .trim()
    .escape()
    .isString()
    .withMessage("Recipe name is not valid"),
  param("username")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 8, max: 20 })
    .matches(/^[a-zA-Z0-9_.-]{8,20}$/)
    .withMessage("Username is not valid"),
  body("rating")
    .trim()
    .escape()
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be an int between 1 and 5"),
]

export const validateDeleteRating = [
  param("recipeName")
    .trim()
    .escape()
    .isString()
    .withMessage("Recipe name is not valid"),
  param("username")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 8, max: 20 })
    .matches(/^[a-zA-Z0-9_.-]{8,20}$/)
    .withMessage("Username is not valid"),
]