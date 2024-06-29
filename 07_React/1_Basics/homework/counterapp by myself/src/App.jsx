import { useState } from 'react'


import './App.css'

function App() {

  let [count, setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    
      setCount(count-1)
    }

  function setInput(e){
      count =parseInt(e.target.value);
      // console.log(count)
      console.log(typeof count)
     

  }

  function reset(){
    setCount(0)
  }

  function submithandle(e){
    e.preventDefault();
    
    setCount(count)
    console.log(typeof count)
  }
  

  return (
    <>
      <div className="wrapper m-0 p-0 flex flex-col items-center justify-center bg-orange-500 w-[100vw] h-[100vh]">

        <h1 className='mb-8 text-[30px]'> Counter App using React </h1>

        <div className="counter-container flex gap-3 bg-white p-3 rounded-md text-[30px] items-center justify-center hover:shadow-2xl ">

          <button className="dec  px-6 pb-3 text-6xl hover:text-blue-600 hover:scale-[1.2] transition-all duration-200" onClick={decrement}>&minus;</button>
          <p className='px-8 text-[40px] border-r-2  border-l-2 font-medium hover:drop-shadow-2xl'>{count}</p>
          <button className="inc px-6 pb-3 text-6xl  hover:text-blue-600 hover:scale-[1.2] transition-all duration-200" onClick={increment}>&#43;</button>

        </div>

        <div className="setinput my-4 flex">
          <form action="
          " onSubmit={submithandle}>
                
          <input type="text" placeholder=' enter number to set' onChange={setInput} className='border-r-0 rounded-sm border-blue-400 border-2 focus:border-r-0 focus:outline-none focus:border-black py-2 px-4  focus:drop-shadow-2xl' />
          <button type="submit" className='rounded-l-none border-l-0 border-blue-400 border-2 py-2 px-4 rounded-md bg-yellow-200 hover:shadow-2xl ' >Set</button>
          </form>
        </div>

        <div className="setinput my-4">
         <button className='bg-white rounded-full px-8 py-2 hover:bg-yellow-200 transition-all duration-500 hover:scale-[1.1] hover:font-[500]' onClick={reset}>Reset the counter</button>
        </div>

      </div>
    </>
  )
}

export default App
