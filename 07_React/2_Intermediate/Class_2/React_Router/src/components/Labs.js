import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

    const navigate = useNavigate()
    
    function clickHandler(){
        // move to about page
        navigate('/about')
    }


  return (
    <div>
<p>        this is Labs page</p>

        <button onClick={clickHandler} className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mx-5' > Move to About</button>





    </div>

    
  )
}

export default Labs