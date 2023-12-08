const router = express.Router();
import express from "express";
import * as repository from "../../persistence/users-repository.js";
import { validationResult } from "express-validator";
import * as validations from "../../validations/auth-validations.js";
import * as bcrypt from "bcrypt";
import basicAuth from "basic-auth"
import { UnauthenticatedError, ConflictError, BadRequestError } from "../../helper/index.js"



router.post('/signup', validations.validateSignup, async (req, res, next) => {
  try {

    const result = validationResult(req);
    if (!result.isEmpty()) {
      const err = new BadRequestError();
      err.errors = result.errors;
      return next(err);
    }

    const user = await repository.getUser(req.body.username, req.body.email)
    if (user === null) {
      const passwordHash = await bcrypt.hash(req.body.password, 10);
      const createdUser = await repository.createUser(req.body.username, req.body.email, passwordHash, req.body.name);
      const newSession = req.session;
      newSession.username = req.body.username;
      const response = {
        message: "User created succesfully",
        username: createdUser.username
      }
      res.status(201).json(response);
    }
    else {
      return next(new ConflictError("Username or email already in use"));
    }

  }
  catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const userBasicAuth = basicAuth(req);
    if (!userBasicAuth) {
      return next(new BadRequestError("Username and password are mandatory"));
    }
    const user = await repository.getUser(userBasicAuth.name, userBasicAuth.name)
    if (user != null) {
      let passwordHash = user.password;
      const authenticated = await bcrypt.compare(userBasicAuth.pass, passwordHash)
      if (authenticated) {
        req.session.username = user.username;
        const role = await repository.getRole(user.role_id);
        const response = {
          message: "User logged in succesfully",
          user: {
            id: user.id,
            username: user.username,
            name: user.name,
            email: user.email,
            role
          }
        }
        res.status(200).json(response);
      }
      else {
        return next(new UnauthenticatedError("Username/email or password are incorrect"));
      }
    }
    else {
      return next(new UnauthenticatedError("Username/email or password are incorrect"));
    }
  } catch (err) {
    next(err);
  }
});

router.post('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.sendStatus(200);
  }
  catch (err) {
    next(err);
  }
});

export default router;