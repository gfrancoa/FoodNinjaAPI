import { checkIfIsAdmin } from "../persistence/users-repository.js"
import { Recipe } from '../models/Recipe.js'
import { User } from '../models/User.js'
import { Review } from '../models/Review.js'
import {UnauthorizedError} from "../helper/unauthorized-error.js"
import { NotFoundError } from "../helper/index.js"

export function createAuthorizer(getUsername) {
  return async function isAuthorized(req, res, next) {
    try {
      const user = req.session.user;
      const userIsAdmin = await checkIfIsAdmin(user.role_id);

      if (userIsAdmin) {
        return next()
      }

      const username = await getUsername(req);
      if (username === user.username) {
        return next()
      }
      return next(new UnauthorizedError());
    } catch (error) {
      next(error)
    }
  }
}


