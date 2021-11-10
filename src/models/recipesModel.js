const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createRecipe = async ({ name, ingredients, preparation },
  ) => {
    const db = await connection();
    const newRecipe = await db.collection('recipes').insertOne({ name, ingredients, preparation });
    const { _id } = newRecipe.ops[0];
    return { name, ingredients, preparation, _id };
};

const getAllRecipes = async () => {
const db = await connection();
const allRecipes = await db.collection('recipes').find().toArray();
return allRecipes;
};

const getRecipe = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  return recipe;
};

const updateRecipe = async (id, userId, { name, ingredients, preparation }) => {
  const db = await connection();
  const recipe = await db.collection('recipes').findOneAndUpdate({ _id: id }, 
  { $set: { name, ingredients, preparation } }, { returnOriginal: false })
  .then(() => ({ _id: id, name, ingredients, preparation, userId }));
  return recipe;
};

module.exports = { createRecipe, getAllRecipes, getRecipe, updateRecipe };
