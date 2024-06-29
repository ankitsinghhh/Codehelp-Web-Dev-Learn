import Card from "./Card"
import {useState} from "react"

function Tours({tours,removeTour}) {
// this tours is an array of objects and is coming to this file from the data.js through app.js file ( in which we passed as props to the Tours custom element)
    return (
        <div className="container">
            <h2 className="title">
                Plan With Ankit
            </h2>

            {/* // cards  */}
            <div className="cards">
              {/* //creating a map function to populate the table data in all 7 cards through one function insted of writing seven cards and giving data through in each of them */}

              {
                tours.map( (tour) => {  //now pasing remvoetour function to the card.js 
                    return <Card key={tour.id} {...tour} removeTour ={removeTour}></Card>
                    // ye eke achi practice maani jaati h ki jab hum map function ko use krte hai , tab hum ek unique key pass kre , aur agr koi identifier nhi h ( unlike in this case , as it had id ) , then index pass kr skte h -> it can create problems in prodcution , so consider it as a rule of thumb and always follow it 
                })
              }
            </div>

        </div>
    )
}

export default Tours