import {body, param} from 'express-validator'
import { validate as uuidValidate, version as uuidVersion } from 'uuid';

export const validateGetReview = [
  param("name")
    .trim()
    .escape()
    .isString()
    .withMessage("Recipe name is not valid"),
]

export const validateDeleteReview = [
  param("name")
    .trim()
    .escape()
    .isString()
    .withMessage("Recipe name is not valid"),
  param("id")
    .trim()
    .escape()
    .isString()
    .custom(value => uuidValidate(value) && uuidVersion(value) === 4) .withMessage('ID must be a UUID version 4')
    .withMessage("Review id is not valid"),
]

export const validatePUTReviewsById = [
  param("name")
    .trim()
    .escape()
    .isString()
    .isLength({min: 1, max:255})
    .withMessage("Recipe Unique Name is not valid."), 
  param("id")
    .custom(value => uuidValidate(value) && uuidVersion(value) === 4)
    .withMessage('ID must be a UUID version 4'),
  body("title")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 55 })
    .withMessage("Title is not valid. Must be a valid string between 1 and 55 chars"),
  body("text")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 255 })
    .withMessage("Text is not valid. Must be a valid string between 1 and 255 chars."),
]

export const validatePatchReviewsById = [
  param("name")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 255 })
    .withMessage("Recipe Unique Name is not valid."),
  param("id")
    .custom(value => uuidValidate(value) && uuidVersion(value) === 4)
    .withMessage('ID must be a UUID version 4'),
  body("title")
    .optional()
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 55 })
    .withMessage("Title is not valid. Must be a valid string between 1 and 55 chars"),
  body("text")
    .optional()
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 255 })
    .withMessage("Text is not valid. Must be a valid string between 1 and 255 chars."),
]

export const validatePOSTReviews = [
  param("name")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 255 })
    .withMessage("Recipe Unique Name is not valid."),
  body("title")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 55 })
    .withMessage("Title is not valid. Must be a valid string between 1 and 55 chars"),
  body("text")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 255 })
    .withMessage("Text is not valid. Must be a valid string between 1 and 255 chars."),
]

