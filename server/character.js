//SUDO: This defines Character model that interacts with MongoDB

const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    class: { type: String, required: true },

});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;