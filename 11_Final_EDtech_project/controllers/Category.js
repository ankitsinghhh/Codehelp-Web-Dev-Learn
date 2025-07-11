const { ModuleCacheMap } = require("vite/runtime")
const Category = require("../models/Category")

//create category ka handler function 
const createCategory = async (req,res) =>{
    try {
        //fetch data 
        const {name, description} = req.body

        //validation
        if(!name || !description){
            return res.status(401).json({
                success:false,
                message:"Please enter all the fields"
            })
        }


        //creating entry of category in db
        const categoryDetails = await Category.create({
            name,
            description
        })

        console.log(categoryDetails)

        //return success response
        return res.status(200).json({
            success:true,
            message:"category created Successfully",
            categoryDetails
        })


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Error while creating a category"
        })
    }
}

const getAllCategory = async (req,res) =>{
    try {
      //fetching data
      const allCategory = await Category.find({}, { name: true, description: true }); // means that find all but find those only whree name is present ( not null ) and description is present ( not null )

      return res.status(200).json({
        success:true,
        message:"All Category fetched Successfully",
        allCategory
      });
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            error:error.message,
            message:"Error while fetching all Category"
        })
    }
}


module.exports = {
    createCategory, 
    getAllCategory
}