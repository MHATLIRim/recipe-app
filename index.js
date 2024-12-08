const express = require('express'); // Importer express
const mongoose = require('mongoose'); // Importer mongoose
const recipeRoutes = require('./routes/index'); // les routes définies pour les recettes

const app = express(); // application express

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB 
mongoose
  .connect('mongodb://127.0.0.1:27017/recipes') // Aucune option obsolète
  .then(() => console.log('Connexion réussie à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB :', err));


// Utilisation des routes définies pour les recettes
app.use('/recipes', recipeRoutes);

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
