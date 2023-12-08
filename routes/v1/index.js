import express from "express";
import recipeRoutes from "./recipes-route.js";
import tagsRoute from "./tags-routes.js";
import authRoutes from "./auth-route.js";
import reviewsRoutes from "./reviews-route.js";
import ingredientRoutes from "./ingredients-route.js";
import ratingsRoutes from "./ratings-route.js";
import chefsRoutes from "./chefs-route.js";
import favoriteRoutes from "./favorites-route.js"



const router = express.Router();

router.use(ratingsRoutes);
router.use(recipeRoutes);
router.use("/tags", tagsRoute);
router.use("/auth", authRoutes);
router.use(reviewsRoutes)
router.use("/ingredients", ingredientRoutes)
router.use("/chefs", chefsRoutes)
router.use(favoriteRoutes);

export default router;
