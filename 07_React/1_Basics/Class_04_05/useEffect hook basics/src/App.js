import React, { useEffect } from "react";
import {useState} from "react"

const App = () => {


  const [text,setText] = useState(' ')
  const [name, setName] = useState('love')

  //useEffect hook\

  // jis v component k andar useeffect hook hoga , vo us component k render hone k baad iske andar jo v code likha hoga vo run krega --/// -- har ek render pe ye execute hoga

  //useEffect takes 2 parameters - > useEffect ( callback function, array of dependencies)

  //variation 1 - Every render execution
  // useEffect(() => {
  //   console.log("UI rendering done")
  // }) 


  //variation 2 - at first render only execution (when Ui renders at first) -> when empty array passed as 2nd parameter
  useEffect( () => {
    console.log("UI rendering done")
  },[]) // ye second parameter dependency ki list ko darshata h 

  //note : agr ek bar print krwana h initially toh index.js m strict mode hta do


//variation 3 -> on first render + whenever dependency changes
// useEffect( ()=> {
//     console.log("change observed successfully")
// },[text]) // har case me chlega jab v text ki value change hogi
// useEffect( ()=> {
//     console.log("change observed successfully")
// },[name]) //jab v name change hogi tb chlega


//variation 4 -> to handle unmounting  of component - > naya listener lgane se pehle purane wala remove kro

useEffect(()=>{
  //add event listener
  console.log("listener added")

  return ()=>{
    console.log("listener removed") // for cleaning 
  }
},[text]) // is case me pehle listener remove ho rha hai phir add ho rha hai -> reason ? -> no reason -> aise hi hota h ye bs 

// important terms 
// mount = > component rendered to dom
//unmount = > component removed from dom



  function changeHandler(e){
    setText(e.target.value)
    console.log(text);
  }

  return (

 

    <div className="App">
      {/* useState -> hum jo change variable me kr rhe hai , use ui pr reflect krane k lie , useSate use hota h - -> state kisi particular varibale ki value ko darshata h 
      
      useEffect -> to manage side effects - application k andar jitne side effects h unko manage krne k lie
        
      side effect -> here -> means ek aisa change jo ki jis component pe render k rhe hai uske outside ho rha h -----> aisa smjho ki hum kisi component pe action kr rhe hai aur us component ko chhodkr kr kahi aur change ho rha h ->
      sideffect kisi particular function/flow ko darshata hai
      */}

     <input type="text" onChange={changeHandler} className="bg-green-50 border-2 p-2 mx-auto my-2"></input>

    </div>
  );
};
 
export default App;
