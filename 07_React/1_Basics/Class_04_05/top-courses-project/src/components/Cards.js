import React from 'react'
import Card from "./Card"
import {useState} from 'react'

//sara data ek array me daal rhe hai
const Cards = (props) => {

    let courses = props.courses
    let category = props.category
    const [likedCourses ,setLikedCourses] = useState([])

    const getCourses =() =>{

        if(category === "All") {
            let allCourses = [];

            // abhi sara data arrray k andar key , values pairs m pda hai where keys are Business , Desing, ,Developer, lifestyle
            // Object.values(courses) ye ek array de dega values ka sirf
    
            // it returns  a list of all courses recieved from the api repsonse
           const getCourses =  Object.values(courses).forEach( (courseCategory)=>{
                courseCategory.forEach( (courseData) =>{
                    allCourses.push(courseData)
                })
            })
            return allCourses;
        }
        else
        {
            //sirf specific cateogry ka data pass krunga
            return courses[category];
        }
       
    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4" >
        {
        getCourses().map((course) =>{
         return  <Card key={course.id} 
         course={course}  
         likedCourses={likedCourses} 
         setLikedCourses={setLikedCourses} />
        })
        }
    </div>
  )
}

export default Cards