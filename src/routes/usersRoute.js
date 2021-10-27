const Router = require('express').Router();
const usersController = require('../controllers/usersController');
const emailValidation = require('../midlewares/validateEmail');

Router.post('/', emailValidation, usersController.createUser);

module.exports = Router;
