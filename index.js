import "dotenv/config";
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import helmet from "helmet";
import { Recipe } from "./models/Recipe.js";
import { Chef } from "./models/Chef.js";
import { Review } from "./models/Review.js";
import { Rating } from "./models/Rating.js";
import { Favorite } from "./models/Favorite.js";
import { Role } from "./models/Role.js";
import { User } from "./models/User.js";
import { Permission } from "./models/Permission.js";
import { PermissionByRole } from "./models/PermissionByRole.js";
import { Tag } from "./models/Tag.js";
import { TagByRecipe } from "./models/TagByRecipe.js";
import { Ingredient } from "./models/Ingredient.js";
import { IngredientAmount } from "./models/IngredientAmount.js";
import router from "./routes/v1/index.js";
import { errorHandler } from "./middleware/error-handler.js";
import './models/Associations.js';
import session from "express-session";
import * as expressSession from 'express-session';
import expressMySqlSession from "express-mysql-session";
import { database } from "./persistence/persistence.js";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from 'url'

await initialize();
//Session storage
const MySQLStore = expressMySqlSession(expressSession);
const sessionStore = new MySQLStore({
  expiration: process.env.SESSION_DURATION * 60000, // Session expiration time (in milliseconds)
  createDatabaseTable: true, // Create the session table if it doesn't exist
}, database);

const app = express();
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(morgan("dev"));

//Session middleware
app.use(session({
  key: 'session_cookie',
  secret: process.env.SESSION_COOKIE_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: true,
  //TODO: Question: Do I need to need to specify the duration here if is define in the sessionStore?
  //default values: { path: '/', httpOnly: true, secure: false, maxAge: null } //secure - Ensures the browser only sends the cookie over HTTPS.
  //cookie: { maxAge: process.env.SESSION_DURATION * 60000 }
}));

//Optionally use onReady() to get a promise that resolves when store is ready.
sessionStore.onReady().then(() => {
  // MySQL session store ready for use.
  console.log('MySQLStore ready');
}).catch(error => {
  // Something went wrong.
  console.error("something went wrong with session store ", error);
});
app.use(express.static('public'))

app.use("/api/v1", router);
app.use(errorHandler);

async function initialize() {
  // create db if it doesn't already exist
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  }); //TODO: Question: Do I need to close this?
  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE_SCHEMA}\`;`
  );

  //connect to db, init models
  //sync all models with database

  await Role.sync(); //{ alter: true }
  //users
  await User.sync(); //{ alter: true }
  //permissions
  await Permission.sync(); //{ alter: true }
  //permissions_by_role
  await PermissionByRole.sync(); //{ alter: true }
  //chef
  await Chef.sync(); //{ alter: true }
  //recipes
  await Recipe.sync(); //{ alter: true }
  //reviews
  await Review.sync(); //{ alter: true }
  //ratings
  await Rating.sync(); //{ alter: true }
  //favorites
  await Favorite.sync(); //{ alter: true }
  //tags
  await Tag.sync(); //{ alter: true }
  //tags_by_recipe
  await TagByRecipe.sync(); //{ alter: true }
  //ingredients
  await Ingredient.sync(); //{ alter: true }
  //ingredient_amount
  await IngredientAmount.sync(); //{ alter: true }
}

// Start your server
app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});
