const recipesService = require('../services/recipesService');

const createRecipe = async (req, res) => {
const param = req.body;
const { _id } = req.user;
const { status, message, result } = await recipesService.createRecipes(param);
if (message) {
  return res.status(status).json({ message });
}
 result.userId = _id;
  return res.status(status).json({
      recipe: result,
     });
};

module.exports = { createRecipe };
