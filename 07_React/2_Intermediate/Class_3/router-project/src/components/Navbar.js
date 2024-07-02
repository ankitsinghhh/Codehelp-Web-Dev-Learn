import React from 'react'
import logo from '../assets/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn


    return (
        <div className='flex justify-evenly bg-[#343C41] text-white'>

            <Link to="/">

                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className='flex gap-3'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            {/* login signup logout dashboard button */}

            <div className='flex ml-5 mr-3 gap-3'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button
                        
                        >
                            Signup
                            </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={ ()=> {
                            setIsLoggedIn(false)
                            toast.success("Logged Out")
                        }} >
                            Logout
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                }
            </div>


        </div>


    )
}

export default Navbar