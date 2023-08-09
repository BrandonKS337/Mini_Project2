'use strict'

const User = require('./user')
const Creature = require('./creature')
const Character = require('./character')

async function init() {
  await User.sync(), //set {this is where you would potentially enter in the force=true to push a new col into place inside existing schema}
  await Creature.sync(),
  await Character.sync()
}

init()

module.exports = {
  User,
  Creature,
  Character
}