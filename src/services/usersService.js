const usersModel = require('../models/usersModel');

const findByEmail = async (email) => {
const result = usersModel.findByEmail(email);
return result;
};

const createUser = async (param) => {
    if (!param.name || !param.email || !param.password) { 
        return { status: 400, message: 'Invalid entries. Try again.' };
    }
    const checkEmail = await findByEmail(param.email);
    if (checkEmail) { return { status: 409, message: 'Email already registered' }; }
    const result = await usersModel.createUser(param);
    return { status: 201, result };
};

const validateLogin = async (param) => {
if (!param.email || !param.password) {
return { status: 401, message: 'All fields must be filled' };
}
const login = await usersModel.validateLogin(param);
// await console.log(login);
if (!login) {
return { status: 401, message: 'Incorrect username or password' };
}
return { status: 200, data: login };
};

module.exports = { createUser, validateLogin };
