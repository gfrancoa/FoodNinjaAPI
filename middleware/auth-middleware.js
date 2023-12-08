import { User } from "../models/User.js"
import { UnauthenticatedError } from "../helper/index.js"

export async function isAuthenticated(req, res, next) {
  if (req.session && req.session.username) {
    const user = await User.findOne({
      where: { username: req.session.username },
      raw: true
    })

    if (user) {
      // The user is authenticated, proceed to the next middleware or route
      req.session.user = user;
      return next();
    }
  }
  // The user is not authenticated; 
  return next(new UnauthenticatedError());
}



