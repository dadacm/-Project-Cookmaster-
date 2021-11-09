const recipesModel = require('../models/recipesModel');

const createRecipes = async (param) => {
    if (!param.name || !param.ingredients || !param.preparation) { 
        return { status: 400, message: 'Invalid entries. Try again.' };
    }
    const result = await recipesModel.createRecipe(param);
    return { status: 201, result };
};

module.exports = { createRecipes }; 
