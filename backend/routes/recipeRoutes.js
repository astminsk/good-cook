const express = require("express");
const router = express.Router();
const {
    getRecipes,
    getRecipeById,
} = require("../controller/recipeControllers");

//@desc   GET all recipes from db
//@route   GET /api/recipes
//@access Public
router.get('/', getRecipes);

//@desc   GET a recipe by id from db
//@route   GET /api/recipes/:id
//@access Public
router.get('/:id', getRecipeById);

module.exports = router;