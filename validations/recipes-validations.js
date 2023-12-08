
import { param, body, query, validationResult } from 'express-validator'


const validTags = [
  "dessert",
  "drinks",
  "gluten free",
  "halal",
  "holidays",
  "ketogenic",
  "kosher",
  "lactose free",
  "spicy",
  "vegan",
  "vegetarian",
  "featured"
]

export const validateRecipeById = [
  param("name")
    .notEmpty()
    .escape()
    .withMessage("You must insert an valid text."),
];

export const validateGetRecipes = [
  query("limit")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Limit is not valid"),
  query("page")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Page is not valid"),
  query("search")
    .optional()
    .trim()
    .escape()
    .isString()
    .withMessage("Search text is not valid"),
  query("tags")
    .optional()
    .trim()
    .escape()
    .isString()
    .withMessage("Tags must be separated by a comma"),
  query("featured")
    .optional()
    .trim()
    .escape()
    .isString()
    .equals("y")
    .withMessage("Send the value 'y' to filter by featured"),
  query("minRating")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1, max: 5 })
    .withMessage("minRating must be an integer between 1 and 5"),
  query("maxRating")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1, max: 5 })
    .withMessage("maxRating must be an integer between 1 and 5"),
  query("ingredients")
    .optional()
    .trim()
    .escape()
    .isString()
    .withMessage("Ingredients must be separated by a comma"),
];

export const validateGetRecipesByUser = [
  query("limit")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Limit is not valid"),
  query("page")
    .optional()
    .trim()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Page is not valid"),
  param("username")
    .trim()
    .escape()
    .isString()
    .withMessage("Username is not valid"),
];

export const validateCreateRecipe = [
  body("title")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 120 })
    .withMessage("Title is not valid. Maximum 120 characters"),
  body("description")
    .trim()
    .escape()
    .isString()
    .notEmpty()
    .isLength({ min: 1, max: 500 })
    .withMessage("Description is not valid. Maximum 500 characters"),
  body("procedure")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 3000 })
    .withMessage("Procedure is not valid. Maximum 3000 characters"),
  body("servings")
    .escape()
    .isInt({ min: 1 })
    .withMessage("Serving field must be an integer"),
  body("timeInMinutes")
    .escape()
    .isInt({ min: 1 })
    .withMessage("Time in minutes must be and integer"),
  body("tags")
    .customSanitizer(value => {
      try {
        return JSON.parse(value)
      } catch (err) {
        return null
      }

    })
    .exists()
    .escape()
    .isArray({ min: 1 })
    .withMessage("Tags has to be an array of minimum one element"),
  body("tags.*")
    .escape()
    .custom((tag, { req }) => validTags.includes(tag))
    .withMessage(`Check if all tags are correct.`),
  body("ingredients")
    .customSanitizer(value => {
      try {
        return JSON.parse(value)
      } catch (err) {
        return null
      }
    })
    .exists()
    .isArray()
    .custom((value, { req }) => {
      return value.every((ingredient) => {
        return (
          Object.keys(ingredient).includes("name") &&
          Object.keys(ingredient).includes("unit")
        );
      });
    })
    .withMessage("Each ingredient must be an object with a name and unit.")
    .exists({ checkNull: true })
    .withMessage("Ingredients is mandatory"),
  body("ingredients.*.name")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 55 })
    .withMessage("Ingredient name is not valid"),
  body("ingredients.*.unit")
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 18 })
    .withMessage("Ingredient unit is not valid"),
];

export const valitateGetRecipeById = [
  param('name')
    .notEmpty()
    .isString()
    .escape()
    .withMessage('You must insert an valid text.')
]

export const validatePutRecipeById = [

  param('name', `Recipe's unique name cannot be empty in PUT route.`)
    .notEmpty()
    .escape()
    .exists({ checkNull: true })
    .withMessage('your_field cannot be null.'),
  body('title', `Recipe's title cannot be empty in PUT route.`)
    .notEmpty()
    .isString()
    .escape()
    .isLength({ min: 5, max: 120 })
    .withMessage('Title must be between 5 and 120 characters')
    .exists({ checkNull: true })
    .withMessage('your_field cannot be null.'),
  body('description', `Recipe's description cannot be empty in PUT route.`)
    .notEmpty()
    .isString()
    .escape()
    .isLength({ min: 5, max: 500 })
    .withMessage("Description must be between 5 and 500 characters.")
    .exists({ checkNull: true })
    .withMessage('your_field cannot be null.'),
  body('procedure', `Procedure cannot be empty.`)
    .notEmpty()
    .isString()
    .escape()
    .isLength({ min: 5, max: 3000 })
    .withMessage(`Description must be between 5 and 3000 characters.`)
    .exists({ checkNull: true })
    .withMessage('your_field cannot be null.'),
  body('servings', 'Servings cannot be empty in PUT route.')
    .notEmpty()
    .escape()
    .isInt({ min: 1, max: 150 })
    .withMessage(`Servings must be an Integer between 1 and 150`)
    .exists({ checkNull: true })
    .withMessage('your_field cannot be null.'),
  body('timeInMinutes', `timeInMinutes cannot be empty in PUT route`)
    .notEmpty()
    .escape()
    .isInt({ min: 1, max: 3072 })
    .withMessage(`timeInMinutes must be an Integer between 1 and 3072 ( 3 days )`)
    .exists({ checkNull: true })
    .withMessage('your_field cannot be null.'),
  body("tags")
    .customSanitizer(value => {
      try {
        return JSON.parse(value)
      } catch (err) {
        return null
      }
    })
    .exists()
    .escape()
    .isArray({ min: 1 })
    .withMessage("Tags has to be an array of minimum one element"),
  body("tags.*")
    .optional()
    .escape()
    .custom((tag, { req }) => validTags.includes(tag))
    .withMessage(`Check if all tags are correct.`),
  body('ingredients', 'Ingredients cannot be null in PUT route.')
    .customSanitizer(value => {
      try {
        return JSON.parse(value)
      } catch (err) {
        return null
      }
    })
    .exists()
    .isArray()
    .custom((value, { req }) => {
      return value.every((ingredient) => {
        return Object.keys(ingredient).includes("name") && Object.keys(ingredient).includes("unit");
      });
    })
    .withMessage('Each ingredient must be an object with a name and unit.')
    .exists({ checkNull: true })
    .withMessage('your_field cannot be null.')
]

export const validatePathRecipe = [
  body("title")
    .optional()
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 120 })
    .withMessage("Title is not valid"),
  body("description")
    .optional()
    .trim()
    .escape()
    .isString()
    .notEmpty()
    .isLength({ min: 1, max: 500 })
    .withMessage("Description is not valid"),
  body("procedure")
    .optional()
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 3000 })
    .withMessage("Procedure is not valid"),
  body("servings")
    .optional()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Serving entry is not valid"),
  body("timeInMinutes")
    .optional()
    .escape()
    .isInt({ min: 1 })
    .withMessage("Time in minutes entry is not valid"),
  body("tags")
    .customSanitizer(value => {
      try {
        return JSON.parse(value)
      } catch (err) {
        return null
      }
    })
    .optional()
    .escape()
    .isArray({ min: 1 })
    .withMessage("Tags has to be an array of minimum one element"),
  body("tags.*")
    .optional()
    .escape()
    .custom((tag) => validTags.includes(tag))
    .withMessage(`Check if all tags are correct.`),
  body("ingredients")
    .customSanitizer(value => {
      try {
        return JSON.parse(value)
      } catch (err) {
        return null
      }
    })
    .optional()
    .isArray()
    .custom((value, { req }) => {
      return value.every((ingredient) => {
        return (
          Object.keys(ingredient).includes("name") &&
          Object.keys(ingredient).includes("unit")
        );
      });
    })
    .withMessage("Each ingredient must be an object with a name and unit.")
    .exists({ checkNull: true })
    .withMessage("Ingredients is mandatory"),
  body("ingredients.*.name")
    .optional()
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 55 })
    .withMessage("Ingredient name is not valid"),
  body("ingredients.*.unit")
    .optional()
    .trim()
    .escape()
    .isString()
    .isLength({ min: 1, max: 18 })
    .withMessage("Ingredient unit is not valid"),
];
