import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     hello world this is vite here
     <div className='text-red-500 text-[50px] bg-blue-700 border-4 border-black '>
      this is a box
     </div>
    </>
  )
}

export default App
