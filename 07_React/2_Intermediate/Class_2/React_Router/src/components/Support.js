import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

    const navigate = useNavigate()
    function clickHandler(){
        navigate('/labs')
    }


    function backHandler(){
        navigate(-1)
    }
  return (
    <div>Support

<button onClick={clickHandler} className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mx-5' > Move to Labs Page</button>

<button onClick={backHandler} className='bg-orange-500 text-white px-4 py-2 rounded-md mt-4 mx-5' > Go Back</button>
    </div>
  )
}

export default Support