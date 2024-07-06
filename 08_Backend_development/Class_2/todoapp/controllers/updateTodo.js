
//import the model
const Todo = require('../models/todo')

//define the route handler 

exports.updateTodo = async (req, res) => {
    try {
       const {id} = req.params
        const { title, description } = req.body

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description, updatedAt: Date.now()},
        )

        res.status(200).send({
            success: true,
            message: 'Todo data updated successfully',
            data: todo
        })

    } catch (error) {
       console.error(error)
       res.status(500).send(
        {
            success: false,
            message: 'Server Error: Failed to update todo data',
            data: "internal server error"
        }
       )
    }
} 