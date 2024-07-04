import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from "../redux/Slices/counterSlice"

const Counter = () => {

    // useSelector hook is used to fetch a particular value of slice 
    // It returns the current state of the selected slice
    const count = useSelector((state)=>state.counter.value) // to access state
    const dispatch = useDispatch() // to access functions 

    return (
        <div>
            
            <button
            onClick={()=> dispatch(increment())}
            >
                Increment
            </button>
            <br/>
            <br/>

            <div>
                { count }
            </div>

            <br/>
            <br/>

            <button
            onClick={()=> dispatch(decrement())}
            >
                Decrement
            </button>




        </div>
    )
}

export default Counter