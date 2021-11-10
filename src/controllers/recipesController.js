const recipesService = require('../services/recipesService');

const createRecipe = async (req, res) => {
const param = req.body;
const { _id } = req.user;
const { status, message, result } = await recipesService.createRecipes(param, _id);
if (message) {
  return res.status(status).json({ message });
}
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

const updateRecipe = async (req, res) => {
  const id = req.params;
  const { _id } = req.user;
  const param = req.body;
  const userId = _id;
  const { status, recipe } = await recipesService.updateRecipe(id, userId, param);
  return res.status(status).json(recipe);
};

const deleteRecipe = async (req, res) => {
  const id = req.params;
  const { _id } = req.user;
  const userId = _id;
  const deleted = await recipesService.deleteRecipe(id, userId);
  if (!deleted) {
    return res.status(405).json({ message: 'message' });
  }
  return res.status(204).send(deleted);
};

module.exports = { createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe };
