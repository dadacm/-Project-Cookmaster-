const Router = require('express').Router();
const validateToken = require('../api/auth/validatejwt');
const recipesContoller = require('../controllers/recipesController');

Router.post('/', validateToken, recipesContoller.createRecipe);

Router.get('/', recipesContoller.getAllRecipes);

Router.get('/:id', recipesContoller.getRecipeById);

module.exports = Router;