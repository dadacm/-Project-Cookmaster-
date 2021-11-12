const Router = require('express').Router();
const multer = require('multer');
const validateToken = require('../api/auth/validatejwt');
const recipesController = require('../controllers/recipesController');

Router.post('/', validateToken, recipesController.createRecipe);

Router.get('/', recipesController.getAllRecipes);

Router.get('/:id', recipesController.getRecipeById);

Router.put('/:id', validateToken, recipesController.updateRecipe);

Router.delete('/:id', validateToken, recipesController.deleteRecipe);

const storage = multer.diskStorage({
    destination: 'src/uploads',
    filename: (req, file, cb) => {
      const { id } = req.params;
      return cb(null, `${id}.jpeg`);
    },
  });
  
  const upload = multer({ storage });

Router.put('/:id/image', upload.single('image'), validateToken, recipesController.addImage);

module.exports = Router;