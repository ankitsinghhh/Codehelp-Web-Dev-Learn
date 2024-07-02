import React from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {
  

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

    const [showPassword, setShowPassword] = useState( false ) // suru me password nhi dikhana h isiliye false rakhe h value 

    const navigate = useNavigate();

    // jab hum callback function me , example :  setFormData( () => ( )) , () => () , direct parentheses use krte hai tab return likhne jarurat nhi pdti , lekin agr curly brackets use krenge toh return likhna pdega 

    function changeHandler(event) {
        setFormData( (prevData) =>( 
            {...prevData, 
                [event.target.name]: event.target.value
            }
         ) )
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In")
        navigate('/dashboard'); // agr user logged in h toh dashboard page p route krna pdega

        // console.log(formData);
        // setFormData({
        //     email:"",
        //     password:""
        // })
    }

  return (
 <form onSubmit={submitHandler} >

    {/* hum original htmlFor k tarike se v link kr skte h input field ko label k saath
    ya fir direct label k andar likh skte h, tb v link hojaega apne aap
    */}
    
    <label>
        <p>Email Address <sup>*</sup> </p>
        <input 
        type="email" 
        name="email"
        placeholder="Enter Email ID"
        value={formData.email}
        onChange={changeHandler}
        required />
    </label>

    <label>
        <p>Password <sup>*</sup> </p>
        <input 
        type={showPassword ? ('text') : ('password')} 
        name = "password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={changeHandler}
        required />

        <span onClick={ () => setShowPassword((prev) => !prev)}>
            {
                showPassword ?
                 ( <AiOutlineEyeInvisible/> ) 
                 : 
                 ( <AiOutlineEye/> ) 

            }
        </span>

        <Link to="#">

        <p>Forgot Password</p>
        
        </Link>

    </label>


    <button >
        Sign in
    </button>

 </form>
  )
}

export default LoginForm