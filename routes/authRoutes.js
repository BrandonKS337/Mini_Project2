const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

router.post("/signup", (req, res) => {
  Controllers.authController.signUpUser(req.body, res)
})

router.post("/login", (req, res) => {
  Controllers.authController.loginUserByEmail(req, res)
})

module.exports = router;





// NOTES from walkthrough
// Make a fetch call with post method to this endpoint:
// /api/auth/login

// In the request body, you should pass:
// {
//   "email": email,  <--- I changed this from emailId (ew) to email
//   "password:": password
// }