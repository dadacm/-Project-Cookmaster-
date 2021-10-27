const connection = require('./connection');

const createUser = async ({ name, email, password }) => {
    const db = await connection();
    const newUser = await db.collection('users').insertOne({ name, email, password });
    return { user: { name, email, role: 'user', _id: newUser.isertedId } };
};

const findByEmail = async (email) => {
    const db = await connection();
    const getByEmail = await db.collection('users').findOne({ email });
    return getByEmail;
 };

module.exports = { createUser, findByEmail };
