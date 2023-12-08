import express from 'express';
import * as helper from '../../helper/helper.js'
import * as repository from '../../persistence/ingredients-repository.js'
import * as validations from '../../validations/ingredients-validation.js'
import { validationResult } from 'express-validator'
import { BadRequestError } from "../../helper/index.js"

const router = express.Router();

router.get("/", validations.checkQueryParams, validations.validateQuery, async (req, res, next) => {
  try {

    const results = validationResult(req)
    if (!results.isEmpty()) {
      const err = new BadRequestError()
      err.errors = results.errors
      return next(err)
    }

    const query = Object.assign({}, req.query)

    query.limit = helper.validateLimit(query.limit)
    query.page = helper.validatePage(query.page)
    query.offset = helper.getOffset(query.page, query.limit)

    const ingredients = await repository.getIngredients(query)

    const pages = helper.getPages(ingredients.count, query.limit, query.page)

    const response = {
      count: ingredients.count,
      limit: query.limit,
      currentPage: query.page,
      previousPage: pages.previousPage,
      nextPage: pages.nextPage,
      totalPages: pages.totalPages,
      results: ingredients.results,
    };
    return res.status(200).json(response)

  } catch (err) {
    next(err)
  }
})

export default router;