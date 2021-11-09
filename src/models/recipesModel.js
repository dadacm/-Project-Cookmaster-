const connection = require('./connection');

const createRecipe = async ({ name, ingredients, preparation },
  ) => {
    const db = await connection();
    const newRecipe = await db.collection('recipes').insertOne({ name, ingredients, preparation });
    const { _id } = newRecipe.ops[0];
    return { name, ingredients, preparation, _id };
};

module.exports = { createRecipe };
