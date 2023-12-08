import express from 'express';
const router = express.Router();
import * as validations from "../../validations/chefs-validations.js";
import * as repository from "../../persistence/chefs-repository.js";
import { validationResult } from "express-validator";
import { getPages, validateLimit, validatePage } from '../../helper/helper.js';
import { NotFoundError, BadRequestError } from "../../helper/index.js"

router.get('/:username', validations.validateGetChef, async (req, res, next) => {
  try {

    const result = validationResult(req);
    if (!result.isEmpty()) {
      const err = new BadRequestError();
      err.errors = result.errors;
      return next(err);
    }

    const response = await repository.getChefByName(req.params.username);
    if (response === null) {
      return next(new NotFoundError("Chef not found"));
    }

    res.status(200).send(response);

  }
  catch (err) {
    next(err);
  }
});

router.get('/:username/recipes', validations.validateGetChef, async (req, res, next) => {
  try {

    const result = validationResult(req);
    if (!result.isEmpty()) {
      const err = new BadRequestError();
      err.errors = result.errors;
      return next(err);
    }

    const limit = validateLimit(req.query.limit);
    const page = validatePage(req.query.page);

    const recipes = await repository.getRecipesByChef(page, limit, req.params.username);
    const count = await repository.getRecipesCountByChef(req.params.username);

    const pages = getPages(count[0].count, limit, page);

    const response = {
      count: count[0].count,
      limit,
      currentPage: page,
      previousPage: pages.previousPage,
      nextPage: pages.nextPage,
      totalPages: pages.totalPages,
      results: recipes,
    };

    res.status(200).send(response);

  }
  catch (err) {
    next(err);
  }
});

export default router;


