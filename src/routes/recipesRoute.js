const Router = require('express').Router();
const validateToken = require('../api/auth/validatejwt');
const recipesContoller = require('../controllers/recipesController');

Router.post('/', validateToken, recipesContoller.createRecipe);

Router.get('/', recipesContoller.getAllRecipes);

module.exports = Router;