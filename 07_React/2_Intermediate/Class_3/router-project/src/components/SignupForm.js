import React from 'react'
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from "react";
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
       

    })

    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    const [accountType, setAccountType] = useState("student")

    const navigate = useNavigate();


    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault()
        // validate form
        if (formData.password != formData.confirmPassword){
            toast.error('Passwords do not match')
            return
        }

        setIsLoggedIn(true)
        toast.success('Account Created')
        const accountData={
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("print final account data")
        console.log(finalData)

        navigate("/dashboard")

    


    }

    return (
        <div>

            {/* student instructor Tab */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 rounded-full my-6 max-w-max '>

                <button 
                className={`${accountType === 'student' ? 
                    "bg-richblack-900 text-richblack-5" 
                    : 

                    "bg-transparent text-richblack-200 " } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("student")}
                >
                    Student
                </button>

                <button
                 className={`${accountType === 'instructor' ? 
                    "bg-richblack-900 text-richblack-5" 
                    : 

                    "bg-transparent text-richblack-200 " } py-2 px-5 rounded-full transition-all duration-200`}
                 onClick={() => setAccountType("instructor")}
                >
                    Instructor
                </button>

            </div>

            <form onSubmit={submitHandler} >

                {/* first name and lastname */}

                <div className='flex gap-x-4 mt-[20px]'>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '
                        >First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter first name'
                            value={formData.firstname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-b-richblack-200'

                        />
                    </label>


                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '
                        >Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter last name'
                            value={formData.lastname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-b-richblack-200'

                        />
                    </label>

                </div>

                {/* email Address */}
                <div className='mt-[20px]'></div>
                <label className='w-full relative mt-4'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                    >Email<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-b-richblack-200'

                    />
                </label>

                {/* createPassword and confirm password  */}
                <div className='flex flex-row gap-x-4 mt-[20px]'>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Create Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword1 ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-b-richblack-200'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'
                         onClick={() => setShowPassword1((prev) => !prev)}>
                            {
                                showPassword1 ?
                                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                                    :
                                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)

                            }
                        </span>
                    </label>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword2 ? ('text') : ('password')}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-b-richblack-200'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                         onClick={() => setShowPassword2((prev) =>!prev)}>
                            {
                                showPassword2?
                                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                                    :
                                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                        
                    </label>
                </div>

                {/* create Account button */}
                <button
                 className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full '
                >
                    Create Account
                </button>




            </form>



        </div>
    )
}

export default SignupForm