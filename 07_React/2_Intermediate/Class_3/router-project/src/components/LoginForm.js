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

        console.log(formData);
        // setFormData({
        //     email:"",
        //     password:""
        // })
    }

  return (
 <form onSubmit={submitHandler}
 className='flex flex-col w-full gap-y-4 mt-6' >

    {/* hum original htmlFor k tarike se v link kr skte h input field ko label k saath
    ya fir direct label k andar likh skte h, tb v link hojaega apne aap
    */}
    
    <label className='w-full ' >
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address <sup className='text-pink-200'>*</sup> </p>
        <input 
        type="email" 
        name="email"
        placeholder="Enter Email Address"
        value={formData.email}
        onChange={changeHandler}
        required 
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-b-richblack-200'/>
    </label>

    <label className='w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  '>Password <sup className='text-pink-200'>*</sup> </p>
        <input 
        type={showPassword ? ('text') : ('password')} 
        name = "password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={changeHandler}
        required
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-b-richblack-200' />

        <span className='absolute right-3 top-[38px] cursor-pointer'
        onClick={ () => setShowPassword((prev) => !prev)}>
            {
                showPassword ?
                 ( <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> ) 
                 : 
                 ( <AiOutlineEye fontSize={24} fill='#AFB2BF' /> ) 

            }
        </span>

        <Link to="#">

        <p className='text-blue-100 mt-1 text-xs max-w-max ml-auto'
        >Forgot Password ?</p>
        
        </Link>

    </label>


    <button 
    className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>
        Sign in
    </button>

 </form>
  )
}

export default LoginForm