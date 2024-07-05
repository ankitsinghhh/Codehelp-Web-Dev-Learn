//routes -- kis path ko kis controller se map krna chahte hai 

//creating instace of express
const express = require('express');
// creating instance of router
const router = express.Router();

//import controller
const {createTodo} = require('../controllers/createTodo');

//define api routes
router.post("/createTodo",createTodo) // mapping path to the controller

//exporting the router
module.exports = router;


