import recipeController from "../controllers/recipeController.js";
import Recipe from "../models/Recipe.js";
import express from "express";
const router = express.Router();

router.get("/api/recipes", recipeController.getAll);

router.get("/api/recipes/:id", recipeController.getRecipe);

router.post("/api/recipes", recipeController.createRecipe);

router.patch("/api/recipes/:id", recipeController.updateRecipe);

router.delete("/api/recipes/:id", recipeController.destroyRecipe);

export default router;
