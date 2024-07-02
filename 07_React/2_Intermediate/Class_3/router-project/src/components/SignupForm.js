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

        console.log("print account data")
        console.log(accountData)

        navigate("/dashboard")


    }

    return (
        <div>

            {/* student instructor Tab */}
            <div>
                <button>
                    Student
                </button>
                <button>
                    instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >

                {/* first name and lastname */}

                <div className='flex flex-row'>

                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter first name'
                            value={formData.firstname}

                        />
                    </label>


                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter last name'
                            value={formData.lastname}

                        />
                    </label>

                </div>

                {/* email Address */}
                <label>
                    <p>Email<sup>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        value={formData.email}

                    />
                </label>

                {/* createPassword and confirm password  */}
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword1 ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.password}
                        />

                        <span onClick={() => setShowPassword1((prev) => !prev)}>
                            {
                                showPassword1 ?
                                    (<AiOutlineEyeInvisible />)
                                    :
                                    (<AiOutlineEye />)

                            }
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword2 ? ('text') : ('password')}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm password'
                            value={formData.confirmPassword}
                        />
                        <span onClick={() => setShowPassword2((prev) =>!prev)}>
                            {
                                showPassword2?
                                    (<AiOutlineEyeInvisible />)
                                    :
                                    (<AiOutlineEye />)
                            }
                        </span>
                        
                    </label>
                </div>

                {/* create Account button */}
                <button>
                    Create Account
                </button>




            </form>



        </div>
    )
}

export default SignupForm