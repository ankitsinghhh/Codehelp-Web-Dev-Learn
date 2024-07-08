import { useState } from 'react'
import './App.css'

function App() {
 
const [selected , setSelected] = useState(null)

  return (
    <>
   
//Accordion 
//single selection / multi selection

<div className='wrapper'>

<div className="acoordion">
  {
    data && data.length>0 ? 
    
    data.map(dataItem => (
      <div className='item'>
        <div className='title'>
            
        </div>
      </div>
    ))

    :<div>No data Found</div>
  }
</div>


</div>




    </>
  )
}

export default App
