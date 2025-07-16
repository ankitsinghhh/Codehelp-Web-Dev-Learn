import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({children, active, linkto}) => {
    // we need text inside button , where button will lead to , should color be yellow or black of this button
  return (
    <Link to={linkto}> 
        <div className={`text-[13px] text-center px-6 py-3 rounded-md font-bold shadow-sm
        
        ${active ? 'bg-yellow-50 text-black' : 'bg-richblack-800'}  hover:scale-95 transition-all duration-200` }>
            {children}
        </div>
    </Link>
  )
}

export default CTAButton
