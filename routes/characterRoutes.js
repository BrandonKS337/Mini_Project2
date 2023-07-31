const express = require('express');
const router = express.Router();
const Character = require('../server/character'); // Correct the import path for the Character model

// Char creation route
router.post('/create', (req, res) => {
  const { name, race, charClass } = req.body; // Change 'class' to 'charClass'
  // Create a new character using the Character model and save it to the database
  const newCharacter = new Character({ name, race, charClass });
  newCharacter.save()
    .then((character) => {
      console.log('Character created successfully:', character);
      res.json({ message: 'Character created successfully' });
    })
    .catch((error) => {
      console.error('Error creating character:', error);
      res.status(500).json({ error: 'Failed to create character' });
    });
});

// Get all characters route
router.get('/all', (req, res) => {
  // Find all characters in the database and send them back
  Character.find()
    .then((characters) => {
      res.json(characters);
    })
    .catch((error) => {
      console.error('Error fetching characters:', error);
      res.status(500).json({ error: 'Failed to fetch characters' });
    });
});

// Pull Char info route (specific char by ID)
router.get('/:characterId', (req, res) => {
  const characterId = req.params.characterId;
  // SUDO: character pull data/logic/info goes here
  // (Find char with the provided ID from array or data storage)
  const character = characters.find((char) => char.characterId === parseInt(characterId));
  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ error: 'Character not found' });
  }
});

module.exports = router;
