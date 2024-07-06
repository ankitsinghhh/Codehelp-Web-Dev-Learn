//routes -- kis path ko kis controller se map krna chahte hai 

//creating instace of express
const express = require('express');
// creating instance of router
const router = express.Router();

//import controller
const {createTodo} = require('../controllers/createTodo');
const {getTodo,getTodobyId} = require('../controllers/getTodo');
const {updateTodo}  = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');

//define api routes
router.post("/createTodo",createTodo) // mapping path to the controller
router.get("/getTodos",getTodo) // mapping path to the controller
router.get("/getTodos/:id", getTodobyId) // getTodos/:id --> jo getTodos k baad padaa hoga vo id me store hojaega
router.put("/updateTodo/:id", updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

//exporting the router
module.exports = router;


