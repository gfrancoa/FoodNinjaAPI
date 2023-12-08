import { check } from 'express-validator'



export const validateQuery = [
  check('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page should be an integer and greater than 0'),
  check('limit')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Limit should be an integer and greater than 0'),
  check('ingredient')
    .optional()
    .isString()
    .withMessage('Name should be a string')
]

export const checkQueryParams = (req, res, next) => {
  const validParams = ['page', 'limit', 'ingredient'];
  const keys = Object.keys(req.query);

  if (!keys.every(key => validParams.includes(key))) {
    return next(new BadRequestError("Invalid query parameter. Should be page, limit or ingredient."));
  }
  next();
};