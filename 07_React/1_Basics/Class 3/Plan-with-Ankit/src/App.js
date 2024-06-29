import React from "react";
import Tours from "./components/Tours";
import data from "./data"
import {useState} from "react"

const App = () => {

  const [tours,setTours] = useState(data)

  // ye function call ho rha hai card.js me se 
  function removeTour(id) {
    // Call the function to remove the tour from the list
    const newTours = tours.filter(tour => tour.id !== id) 
    // it filters out the data whose id is equal to the id received and rest of the data which have different passes to the tours.js

    setTours(newTours) // here the tours array is updated with the newTours array 
}

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button> 
      </div>
    )
  } // since tours array will be updated with new tours each time after filtering , so then a time will come when it will be empty 

  return (
    <div className="App">
  

      <Tours tours={tours} removeTour = {removeTour}></Tours> 
      {/* // passing remove tour to tours.js and tours array of objects to tours.js */}

    </div>
  )
};

export default App;
