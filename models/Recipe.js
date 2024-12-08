const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  Name: String,
  Ingredients: Array,
  Cuisine: String,
});

const RecipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeModel;  // Assurez-vous que c'est bien exporté
 