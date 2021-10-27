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

module.exports = { createUser };
