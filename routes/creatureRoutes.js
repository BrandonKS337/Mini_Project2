//setting up the routes to be used for trafficking new data

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//route sudo notes here for each route to help with testing or writing.

//localhost: 8000/api/users <<-- base route

//localhost: 8000/api/users/
router.get("/", (req, res) => {
  Controllers.creatureController.getCreature(res);
  /*
    1: looks inside our controllers folder because of line 7
    2: looks inside our useController.js
    3: references the getUsers function in useController.js and pulls in the response data
    */
});
//localhost:8000/api/users/:<user_id>
router.get("/:id", (req, res) => {
  Controllers.creatureController.getCreaturesById(req, res);
});

//localhost:8000/api/users/create
router.post("/create", (req, res) => {
  Controllers.creatureController.createCreature(req.body, res);
});

//saving but commenting out. The creatures are db stored and don't require a user to login to them.
//localhost:8000/api/users/login
// router.post("/login", (req, res) => {
//   Controllers.userController.getUsersByEmail(req, res);
// });

//don't worry about login in our app

//localhost:8000/api/users/:<user_id>
router.put("/:id", (req, res) => {
  Controllers.userController.updateCreature(req, res);
});

//localhost:8000/api/users/:<user_id>
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteCreature(req, res);
});

module.exports = router;