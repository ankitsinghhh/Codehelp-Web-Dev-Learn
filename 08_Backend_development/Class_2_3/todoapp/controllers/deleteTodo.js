
//import the model
const Todo = require('../models/todo')

//define the route handler 

exports.deleteTodo = async (req, res) => {
    try 
    {
        const {id} = req.params
        await Todo.findByIdAndDelete(id)

        res.json({
            success: true,
            message: 'Todo data entry deleted successfully'
        })

    } 
    catch (error) 
    {
        console.error(error)
        res.status(404)
        .json({
            success: false,
            message: 'No todo data entry found with this ID',
            message:error.message,
        })
    }
} 