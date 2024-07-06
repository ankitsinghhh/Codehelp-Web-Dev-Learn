
//import the model
const Todo = require('../models/todo')


//define the route handler 

exports.getTodo = async (req, res) => {
    try {
            //fetch all todo items from dtabase
            const todos = await Todo.find({}); 

            //response ko update kr dete h saare flags aur data k saath
            res.status(200)
            .json({
                success: true,
                data: todos,
                message:"Entire Todo Data is fetched"
            })

    } 
    catch (error) {
       console.error(error)
       res.status(500).json({
            success: false,
            message: error.message,
            data: "internal server error"
        })
    }
} 

exports.getTodobyId = async (req, res) => {

    try{
        //extract Todo items based on ID 
        const id = req.params.id;
        const todo =await Todo.findById({_id: id})

        //data for given id not found 
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "Todo item not found with given ID "
            })
        }
        //data for given id Found
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo item fetched by ID"
        })
    }
    catch(error){
        console.error(error)
        res.status(500)
        .json({
            success: false,
            message: error.message,
            data: "server error"
        })
    }
}


// 6688c7d31baed18e837b58d0