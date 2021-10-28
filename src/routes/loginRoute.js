const Router = require('express').Router();
const usersController = require('../controllers/usersController');

Router.post('/login', usersController.loginUser);

module.exports = Router;