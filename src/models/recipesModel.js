const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createRecipe = async ({ name, ingredients, preparation }, userId,
  ) => {
    const db = await connection();
    const newRecipe = await db.collection('recipes')
    .insertOne({ name, ingredients, preparation, userId });
    const { _id } = newRecipe.ops[0];
    return { name, ingredients, preparation, _id, userId };
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

const deleteRecipe = async (id) => {
  const db = await connection();
  const deleted = await db.collection('recipes').deleteOne({ _id: id });

  return deleted;
};

module.exports = { createRecipe, getAllRecipes, getRecipe, updateRecipe, deleteRecipe };
