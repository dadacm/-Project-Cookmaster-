const recipesService = require('../services/recipesService');

const createRecipe = async (req, res) => {
const param = req.body;
const { _id } = req.user;
const { status, message, result } = await recipesService.createRecipes(param);
if (message) {
  return res.status(status).json({ message });
}
 result.userId = _id;
  return res.status(status).json({
      recipe: result,
     });
};

const getAllRecipes = async (req, res) => {
  const { status, recipe } = await recipesService.getAllRecipes();
  return res.status(status).json(recipe);
};

const getRecipeById = async (req, res) => {
  const { id } = await req.params;
const { status, recipe, message } = await recipesService.getRecipeById(id);
if (message) {
  return res.status(status).json({ message });
}
return res.status(status).json(recipe);
}; 

module.exports = { createRecipe, getAllRecipes, getRecipeById };
