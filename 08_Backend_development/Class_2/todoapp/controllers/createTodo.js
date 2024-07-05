//controller-contains the business logic



//import the model
const Todo = require('../models/todo')

//define the route handler 

exports.createTodo = async (req, res) => {
    try {
        // extract title and description from request ki body
        const { title, description } = req.body
        // create a new todo object with the extracted data and insert the extracted data into the db
        const response = await Todo.create({ title, description });
        //send json response with success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Todo data entry created successfully'
            }
        )

    } catch (error) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                message: 'Server Error: Failed to create todo data entry',
                data: "internal server error"
            }
        )
    }
} 