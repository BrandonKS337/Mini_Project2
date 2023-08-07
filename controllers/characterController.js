'use strict'

const bcrypt = require('bcrypt')

const Models = require('../models')

const getCharacter = (res) => {
  Models.Character.findAll({})
    .then((data) => {
      // Do NOT return passwords
      res.send({result: 200, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

const getCharacterById = (req, res) => {
  Models.Character.findAll({ where: {id: req.params.id}})
    .then((data) => {
      //Do NOT return passwords
      res.send({result: 200, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

//notes from robert. bad practice or not best practice to place in front end but should be ok
// Should not use this to create users from front end, instead use the auth route/controller
// Leaving this here for your reference
// const createCharacter = async (data, res) => {
//   // Bcrypt documentation: https://www.npmjs.com/package/bcrypt
//   // Generate a salt, define the rounds
//   const rounds = 10 //any more than 10 will take exponentially more CPU power
//   const salt = await bcrypt.genSaltSync(rounds);
//   const originalPassword = data.password
//   const hashedPassword = bcrypt.hashSync(originalPassword, salt);
//   data.password = hashedPassword;
  
//   Models.Character.create(data)
//     .then((data) => {
//       data.password = undefined; //Remove the password property
//       res.send({result: 201, data: data})
//     })
//     .catch(err => {
//       console.log("Error:", err)
//       throw err
//     })
// }
const createCharacter = (req, res) => {
  Models.Character.create(req.body, { where: {id: req.params.id}})
    .then((data) => {
      res.send({result: 201, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

const updateCharacter = (req, res) => {
  Models.Character.update(req.body, { where: {id: req.params.id}})
    .then((data) => {
      res.send({result: 201, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

const deleteCharacter = (req, res) => {
  Models.Character.destroy( {where: {id: req.params.id}})
    .then((data) => {
      res.send({result: 201, data: data})
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
}

module.exports = {
  getCharacter, getCharacterById, createCharacter, updateCharacter, deleteCharacter
}