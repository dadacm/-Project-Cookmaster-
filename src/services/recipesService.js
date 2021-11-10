const recipesModel = require('../models/recipesModel');
const usersModel = require('../models/usersModel');

const createRecipes = async (param, userId) => {
    if (!param.name || !param.ingredients || !param.preparation) { 
        return { status: 400, message: 'Invalid entries. Try again.' };
    }
    const result = await recipesModel.createRecipe(param, userId);
    return { status: 201, result };
};

const getAllRecipes = async () => {
 const recipe = await recipesModel.getAllRecipes();
 if (!recipe) {
    return { status: 404, message: 'recipe not found' };
  }
 return { status: 200, recipe };
};

const getRecipeById = async (id) => {
const recipe = await recipesModel.getRecipe(id);
if (!recipe) {
    return { status: 404, message: 'recipe not found' };
  }
return { status: 200, recipe };
};

const updateRecipe = async (id, userId, param) => {
const recipe = await recipesModel.updateRecipe(id, userId, param);
return { status: 200, recipe };
};

const deleteRecipe = async (id, userId) => {
const findRecipe = await recipesModel.getRecipe(id.id);
const user = await usersModel.findById(userId);
if (user.role === 'user' && findRecipe.userId.toString() !== userId.toString()) {
  return null;
}
const deletedRecipe = await recipesModel.deleteRecipe(id);
if (!deletedRecipe) { return { message: 'error' }; }
return deletedRecipe;
};

module.exports = { createRecipes, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe }; 
