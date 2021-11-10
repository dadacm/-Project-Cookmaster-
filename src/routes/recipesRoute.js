const Router = require('express').Router();
const validateToken = require('../api/auth/validatejwt');
const recipesController = require('../controllers/recipesController');

Router.post('/', validateToken, recipesController.createRecipe);

Router.get('/', recipesController.getAllRecipes);

Router.get('/:id', recipesController.getRecipeById);

Router.put('/:id', validateToken, recipesController.updateRecipe);

module.exports = Router;