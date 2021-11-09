const jwt = require('jsonwebtoken');
const usersService = require('../services/usersService');

const secretToken = 'chefeMestre';
const jwtConfig = {
  expiresIn: '8h',
  algorithm: 'HS256',
  };

const createUser = async (req, res) => {
    const param = req.body;
    const { status, message, result } = await usersService.createUser(param);
    if (message) {
      return res.status(status).json({ message });
    }
      return res.status(status).json(result);
};

const loginUser = async (req, res) => {
const param = req.body;
const { status, message, data } = await usersService.validateLogin(param);
if (message) { return res.status(status).json({ message }); }
const token = jwt.sign(data, secretToken, jwtConfig);
// await console.log(token);
res.status(200).json({ token });
};

module.exports = { createUser, loginUser };
