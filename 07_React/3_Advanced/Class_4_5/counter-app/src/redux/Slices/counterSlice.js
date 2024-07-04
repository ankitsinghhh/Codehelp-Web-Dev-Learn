import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0,
}

const CounterSlice = createSlice(
    {
        name:"counter",
        initialState,
        reducers:{
            increment: (state) => {
                state.value+=1;
            },
            decrement: (state) => {
                state.value-=1;
            }
        }

    }
) // this function takes an object with three keys => name, initialState , reducers

//action creators are generated for each reducer functions 
export const { increment, decrement } = CounterSlice.actions; // destructuring actions from CounterSlice
export default CounterSlice.reducer


//saare reducers functions ki implementation actions creator ke andar aa jati 
// agr functions ki implemenation ko slice me se baahar nikaalna hai toh vo actions creater me se hi nikalte hai 

//actions creator ko CounterSlice.actions krke access kr skte hai 
//actions creator me se implemenation ko fetch kr rhe hai aur export kr rhe hai