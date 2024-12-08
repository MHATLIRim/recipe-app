const express = require('express');
const router = express.Router();

// Importer le modèle de recette
const RecipeModel = require('../models/Recipe');




// Ajouter une recette
router.post('/', async (req, res) => {
  try {
    const { Name, Ingredients, Cuisine } = req.body;
    const newRecipe = new RecipeModel({ Name, Ingredients, Cuisine });
    await newRecipe.save(); // Attendre que la recette soit sauvegardée
    return res.status(200).send({ message: 'Les données ont été ajoutées !', data: newRecipe });
  } catch (error) {
    return res.status(400).send({ message: 'Une erreur s\'est produite !', error: error.message });
  }
});

// Obtenir la liste des recettes
router.get('/', async (req, res) => {
  try {
    const recipes = await RecipeModel.find({}); // Attendre que les recettes soient récupérées
    return res.status(200).send({ message: 'Les données ont été récupérées !', data: recipes });
  } catch (error) {
    return res.status(400).send({ message: 'Une erreur s\'est produite !', error: error.message });
  }
});

// Mettre à jour une recette
router.put('/:recipeId', async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const { Name, Ingredients, Cuisine } = req.body;
    await RecipeModel.findByIdAndUpdate(recipeId, { Name, Ingredients, Cuisine }, { new: true });
    return res.status(200).send({ message: 'La recette a été mise à jour !' });
  } catch (error) {
    return res.status(400).send({ message: 'Une erreur s\'est produite lors de la mise à jour !', error: error.message });
  }
});

// Supprimer une recette
router.delete('/:recipeId', async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    await RecipeModel.findByIdAndDelete(recipeId); // Attendre que la recette soit supprimée
    return res.status(200).send({ message: 'La recette a été supprimée !' });
  } catch (error) {
    return res.status(400).send({ message: 'Une erreur s\'est produite lors de la suppression !', error: error.message });
  }
});

module.exports = router;
