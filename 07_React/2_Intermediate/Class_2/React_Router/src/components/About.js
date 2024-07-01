import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()
    function clickHandler(e) {
        navigate("/support")
    }
  return (
    <div>
        This is about page


        <button onClick={clickHandler} className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mx-5' > Move to Support Page</button>
    </div>
  )
}

export default About