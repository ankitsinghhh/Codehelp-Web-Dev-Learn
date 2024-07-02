import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"

const Template = ({title , desc1 , desc2, image, formType, setIsLoggedIn}) => {
  
  return (
    <div>

        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
            formType === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn} />):
            (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Signup with google</p>
            </button>


        </div>

        <div>
            <img src={frameImage} 
            alt="Pattern"
            width={558} 
            height={504}
            loading="lazy"
            
            ></img>

            <img src={image} 
            alt="Students"
            width={558} 
            height={504}
            loading="lazy"
            
            ></img>
        </div>


    </div>
  )
}

export default Template