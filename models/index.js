'use strict'

const User = require('./user')
const Creature = require('./creature')
const Character = require('./character')

async function init() {
  await User.sync(),
  await Creature.sync(),
  await Character.sync()
}

init()

module.exports = {
  User,
  Creature,
  Character
}