const router = express.Router();
import express from "express";
import * as repository from "../../persistence/recipes-repository.js";
import { getPages, validateLimit, validatePage } from "../../helper/helper.js";
import { validationResult } from "express-validator";
import * as validations from "../../validations/recipes-validations.js";
import { isAuthenticated } from "../../middleware/auth-middleware.js";
import { createAuthorizer } from "../../middleware/authorization-middleware.js"
import { getTags } from "../../middleware/getTags-middleware.js";
import fs from "fs";
import { unlink, rename } from "fs/promises";
import path from "path";
import multer, { MulterError } from "multer";
import { fileURLToPath } from 'url'
import * as helper from '../../helper/helper.js'
import { User } from "../../models/User.js";
import { Recipe } from "../../models/Recipe.js";
import { getTagsByRecipe } from "../../persistence/tags-repository.js";
import { Rating } from "../../models/Rating.js"
import { NotFoundError, BadRequestError } from "../../helper/index.js"
import { generateRecipeUniqueName } from "../../persistence/recipes-repository.js"

const authorizer = createAuthorizer(async (req) => {
  const recipe = await Recipe.findOne({ where: { recipe_unique_name: req.params.name }, raw: true });
  if (!recipe) {
    return null;
  }
  const user = await User.findByPk(recipe.user_id);
  if (!user) {
    return null;
  }

  return user.username;
})

router.get("/recipes", validations.validateGetRecipes, async function (req, res, next) {
  try {
    const query = Object.assign({}, req.query);

    query.limit = validateLimit(query.limit);
    query.page = validatePage(query.page);

    const results = await repository.getRecipes(query);
    const pages = getPages(results.count, query.limit, query.page);

    const response = {
      count: results.count,
      limit: query.limit,
      currentPage: query.page,
      previousPage: pages.previousPage,
      nextPage: pages.nextPage,
      totalPages: pages.totalPages,
      results: results.results,
    };

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/summaries", validations.validateGetRecipes, async function (req, res, next) {
  try {
    const query = Object.assign({}, req.query);

    query.limit = validateLimit(query.limit);
    query.page = validatePage(query.page);

    const results = await repository.getRecipesSummary(query);

    const pages = getPages(results.count, query.limit, query.page);

    const response = {
      count: results.count,
      limit: query.limit,
      currentPage: query.page,
      previousPage: pages.previousPage,
      nextPage: pages.nextPage,
      totalPages: pages.totalPages,
      results: results.results,
    };

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

router.get("/users/:username/recipes", validations.validateGetRecipesByUser, async function (req, res, next) {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const user = await User.findOne({
      where: { username: req.params.username },
      raw: true
    })

    if (user === null) {
      return next(new BadRequestError("This user was not found in DB."));
    };

    const query = Object.assign({}, req.query)

    query.limit = helper.validateLimit(query.limit)
    query.page = helper.validatePage(query.page)
    query.offset = (query.page - 1) * query.limit

    const recipes = await repository.getRecipesByUserId(user.id, query)

    const recipesId = recipes.recipes.map(recipe => recipe.id)

    let recipesArray = []

    for (let i = 0; i < recipesId.length; i++) {
      const recipesSummaries = await Recipe.findByPk(recipesId[i], {
        attributes: ['title', 'createdAt', 'updatedAt', 'avg_rating', 'img_url', "recipe_unique_name"],
        raw: true
      });

      const totalRatings = await Rating.count({ where: { recipe_id: recipesId[i] } })
      const tags = await getTagsByRecipe(recipesId[i]);
      const tagsTitles = tags.map(tag => tag.tags)

      const currentRecipe = [
        {
          "title": recipesSummaries.title,
          "totalRatings": totalRatings,
          "username": user.username,
          "tags": tagsTitles,
          "createdAt": recipesSummaries.createdAt,
          "updatedAt": recipesSummaries.updatedAt,
          "avgRating": recipesSummaries.avg_rating,
          "imgUrl": recipesSummaries.img_url,
          "recipeUniqueName": recipesSummaries.recipe_unique_name
        }
      ]

      recipesArray.push(currentRecipe);

    }

    const pages = helper.getPages(recipes.count, query.limit, query.page)

    const response = {
      "count": recipes.count,
      "limit": query.limit,
      "currentPage": query.page,
      "previousPage": pages.previousPage,
      "nextPage": pages.nextPage,
      "totalPages": pages.totalPages,
      "results": recipesArray
    }


    res.status(200).json({ "recipes": response })

  }
  catch (err) {
    next(err)
  }
});

const upload = multer({
  dest: "./public/images/recipeImages/temp/",
  limits: {
    fileSize: (process.env.MAX_FILE_SIZE_MB ?? 5) * 1000000, //Max field value size (in bytes)
    files: 1
  },
});

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

async function deleteTempFile(tempPath, status, message, next) {
  try {
    await unlink(tempPath);
    const error = new Error();
    error.status = status;
    error.message = message;
    return next(error);
  } catch (err) {
    next(err);
  }
}

async function deleteImageFile(imagePath, next) {
  try {
    await unlink(imagePath);
  } catch (err) {
    next(err);
  }
}


router.post("/recipes", getTags, isAuthenticated, upload.single("recipeImg"), validations.validateCreateRecipe, async (req, res, next) => {
  try {
    const tempPath = req.file?.path;
    if (tempPath) {

      const result = validationResult(req);
      if (!result.isEmpty()) {
        const status = 400;
        const errors = result.errors;
        await deleteTempFile(tempPath, status, errors, next);
        return;
      }

      const body = Object.assign({}, req.body);

      const recipeUniqueName = await repository.generateRecipeUniqueName(body.title)

      const fileExtension = path.extname(req.file.originalname).toLowerCase();

      if (fileExtension === ".png" || fileExtension === ".jpg" || fileExtension === ".jpeg") {
        const targetPath = path.join(__dirname, "../../public/images/recipeImages/" + recipeUniqueName + fileExtension);
        await rename(tempPath, targetPath);
      } else {
        const status = 400;
        const message = "Only .png, .jpeg and .jpg files are allowed.";
        await deleteTempFile(tempPath, status, message, next);
        return;
      }

      body.imgUrl = "/images/recipeImages/" + recipeUniqueName + fileExtension;

      body.username = req.session.username; //getting username from the session

      try {
        const createdRecipeUniqueName = await repository.createRecipe(body);
        const response = { createdRecipeUniqueName };
        res.status(200).json(response);
        next()
      } catch (err) {
        //incorrect tags or username that are not in the DB
        return next(new BadRequestError("Error creating a recipe. Check the tags or user entry"));
      }

    } else {
      return next(new BadRequestError("Image is mandatory"));
    }


  } catch (err) {
    next(err);
  }
},
  (err, req, res, next) => {
    if (err instanceof MulterError) {
      const limitFileSize = err.code === 'LIMIT_FILE_SIZE'
      const message = limitFileSize ? "File size is too big. Max size is 5 MB" : err.message;
      err = new BadRequestError(message, { cause: err });
    }

    next(err)
  });

router.get("/recipes/summaries/top", validations.validateGetRecipes, async function (req, res, next) {
  try {
    const query = Object.assign({}, req.query);

    query.limit = validateLimit(query.limit);
    query.page = validatePage(query.page);

    const results = await repository.getRecipesTop(query);

    const pages = getPages(results.count, query.limit, query.page);

    const response = {
      count: results.count,
      limit: query.limit,
      currentPage: query.page,
      previousPage: pages.previousPage,
      nextPage: pages.nextPage,
      totalPages: pages.totalPages,
      results: results.results,
    };

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/summaries/featured", validations.validateGetRecipes, async function (req, res, next) {
  try {
    const query = Object.assign({}, req.query);

    query.limit = validateLimit(query.limit);
    query.page = validatePage(query.page);

    //send the featured flag always
    query.featured = "y";

    const results = await repository.getRecipesSummary(query);

    const pages = getPages(results.count, query.limit, query.page);

    const response = {
      count: results.count,
      limit: query.limit,
      currentPage: query.page,
      previousPage: pages.previousPage,
      nextPage: pages.nextPage,
      totalPages: pages.totalPages,
      results: results.results,
    };

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:name", validations.valitateGetRecipeById, async (req, res, next) => {
  try {
    const result = validationResult(req)

    if (!result.isEmpty()) {
      const err = new BadRequestError();
      err.errors = result.errors;
      return next(err);
    }

    const response = await repository.getRecipeByName(req.params.name)
    if (response === null) {
      return next(new NotFoundError("Recipe was not found."));
    }

    const tags = response.tags.map(tag => tag.tags)

    const formatedResponse = {
      title: response.recipe.title,
      description: response.recipe.description,
      procedure: response.recipe.procedure,
      servings: response.recipe.servings,
      tags: tags,
      ingredients: response.ingredientsAmount,
      recipeUniqueName: response.recipe.recipeUniqueName,
      timeInMinutes: response.recipe.timeInMinutes,
      avgRating: response.recipe.avgRating,
      imgUrl: response.recipe.imgUrl,
      username: response.user.username,
      createdAt: response.recipe.createdAt,
      updatedAt: response.recipe.updatedAt
    }

    return res.status(200).json({ "recipe": formatedResponse })

  } catch (err) {
    next(err)
  }
});

router.put("/recipes/:name", isAuthenticated, authorizer, upload.single("recipeImg"), validations.validatePutRecipeById, async (req, res, next) => {

  try {
    const results = validationResult(req)
    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const recipe = await repository.getRecipeByUniqueName(req.params.name)
    if (recipe === null) {
      return next(new NotFoundError("Recipe does not exist."));
    }

    const newRecipeUniqueName = await generateRecipeUniqueName(req.body.title);
    recipe.recipeUniqueName = newRecipeUniqueName;

    //upload image to server
    const tempPath = req.file?.path;
    if (tempPath) {
      const fileExtension = path.extname(req.file.originalname).toLowerCase();

      if (fileExtension === ".png" || fileExtension === ".jpg" || fileExtension === ".jpeg") {
        const targetPath = path.join(__dirname, "../../public/images/recipeImages/" + recipe.recipeUniqueName + fileExtension);
        await rename(tempPath, targetPath);
        await deleteImageFile(path.join(__dirname, '../../public' + recipe.imgUrl), next)
      } else {
        const status = 400;
        const message = "Only .png, .jpeg and .jpg files are allowed.";
        await deleteTempFile(tempPath, status, message, next);
        return;
      }
      req.body.imgUrl = "/images/recipeImages/" + recipe.recipeUniqueName + fileExtension;
    } else {
      return next(new BadRequestError("Image is mandatory"));
    }

    //Maybe we need to format a procedure structure before to send to database.
    const updatedRecipe = await repository.updateRecipeByName(recipe, req.body)

    res.status(200).json({ "recipeUniqueName": updatedRecipe.recipe.recipeUniqueName })

  } catch (error) {
    next(error)
  }
}, (err, req, res, next) => {
  if (err instanceof MulterError) {
    const limitFileSize = err.code === 'LIMIT_FILE_SIZE'
    const message = limitFileSize ? "File size is too big. Max size is 5 MB" : err.message;
    err = new BadRequestError(message, { cause: err });
  }

  next(err)
})

router.patch("/recipes/:name", isAuthenticated, authorizer, upload.single("recipeImg"), validations.validatePathRecipe, async (req, res, next) => {
  try {
    const results = validationResult(req);

    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const recipe = await repository.getRecipeByUniqueName(req.params.name)
    if (recipe === null) {
      return next(new NotFoundError("Recipe does not exist."));
    }

    const oldRecipeUniqueName = recipe.recipeUniqueName;

    if (req.body.title && (req.body.title != recipe.title)) {
      const newRecipeUniqueName = await generateRecipeUniqueName(req.body.title);
      recipe.recipeUniqueName = newRecipeUniqueName;
    }


    if (req.body.title && (req.body.title != recipe.title) && !req.file) {
      const extension = recipe.imgUrl.substr(recipe.imgUrl.lastIndexOf(".") + 1)
      const oldPath = path.join(__dirname, '../../public/images/recipeImages', `${oldRecipeUniqueName}.${extension}`);
      const newPath = path.join(__dirname, '../../public/images/recipeImages', `${recipe.recipeUniqueName}.${extension}`);

      try {
        await rename(oldPath, newPath);
        req.body.imgUrl = `/images/recipeImages/${recipe.recipeUniqueName}.${extension}`

      } catch (error) {
        return next(error)
      }
    }

    //upload image to server
    const tempPath = req.file?.path;
    if (tempPath) {
      const fileExtension = path.extname(req.file.originalname).toLowerCase();

      if (fileExtension === ".png" || fileExtension === ".jpg" || fileExtension === ".jpeg") {
        const targetPath = path.join(__dirname, "../../public/images/recipeImages/" + recipe.recipeUniqueName + fileExtension);
        await rename(tempPath, targetPath);
        await deleteImageFile(path.join(__dirname, '../../public' + recipe.imgUrl), next)
      } else {
        const status = 400;
        const message = "Only .png, .jpeg and .jpg files are allowed.";
        await deleteTempFile(tempPath, status, message, next);
        return;
      }
      req.body.imgUrl = "/images/recipeImages/" + recipe.recipeUniqueName + fileExtension;
    }

    const response = await repository.updateRecipeFieldsByName(recipe, req.body)

    return res.status(200).json({ "recipeUniqueName": response })

  } catch (error) {
    next(error)
  }
});

router.delete("/recipes/:name", isAuthenticated, authorizer, validations.validateRecipeById, async (req, res, next) => {
  try {
    const results = validationResult(req)
    if (!results.isEmpty()) {
      const err = new BadRequestError();
      err.errors = results.errors;
      return next(err);
    }

    const recipe = await repository.getRecipeByUniqueName(req.params.name)
    if (recipe === null) {
      return next(new NotFoundError("Recipe does not exist."));
    }

    const response = await repository.deleteRecipeByName(req.params.name)

    if (response === 0) {
      const err = new Error();
      err.status = 500;
      err.message = "Error deleting recipe"
      return next(err)
    } else {
      await deleteImageFile(path.join(__dirname, '../../public' + recipe.imgUrl), next)
    }

    res.status(200).json({ "message": "Recipe was sucessfully deleted." })

  } catch (error) {
    next(error)
  }
})

export default router;
