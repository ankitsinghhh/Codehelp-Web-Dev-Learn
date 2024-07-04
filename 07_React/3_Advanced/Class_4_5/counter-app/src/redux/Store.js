import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice
     },
})

// ek centralized sotre bna rhe h configure store fucntions ki help se taaki har koi access kr ske

// store -> yahape saaara ka sara data pda hoga slices k form me 
// slice -> ek ek portion of data hai 

// Store --> global State of project - > centralized entity -> jaha pe saare k saare states store hote hai in form of slices -> slices is a portion of data , reducers is basically a functionality



// to make any applications 
// you need to create a slice and store 

//1. creating slice -> 
// using createSlice functions - > 3 argument leta hai - > name , initialState and reducers 
// hamesha 2 chize export krenge - > saare functions ( actions creator me se nikaalke ) and reducers 

//2.Store --> global State of project - > cent
// saare k saare slice list krne hote h yahaa pe 
// how to make store --- > using configure Store -> ye input me object leta hai ---> is object me hum reducer mention krte hai with key and that reducer name like Counter: CounterSlice




//how to links code of redux to react 
//using Provider -> to link redux and react 
