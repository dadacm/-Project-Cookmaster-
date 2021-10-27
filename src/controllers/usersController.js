const usersService = require('../services/usersService');

const createUser = async (req, res) => {
    const param = req.body;
    const { status, message, result } = await usersService.createUser(param);
    if (message) {
        return res.status(status).json({ message });
    }
    return res.status(status).json(result);
};

module.exports = { createUser };
