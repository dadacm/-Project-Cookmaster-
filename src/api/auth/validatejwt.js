const jwt = require('jsonwebtoken');
const usersModel = require('../../models/usersModel');

const secretToken = 'chefeMestre';

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: 'missing auth token' });
  }
  try {
    const decoded = jwt.verify(token, secretToken);
    const { email } = decoded;
    const user = await usersModel.findByEmail(email);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'jwt malformed' });
    }
    req.user = user;
    next();
  } catch (err) { return res.status(401).json({ message: 'jwt malformed' }); }
   };
module.exports = tokenValidation;