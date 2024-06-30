
import './App.css';
import {useState} from 'react'


function App() {

  // const [firstName , setFirstName] = useState("")
  // const [lastName , setLastName] = useState("")

  // // event.target input tag ko darshata h jispe event handler lgae h hum
  // function changeFirstNameHandler(event){
  //   // console.log("printing first name")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value) // value ko state me set kr diya h
  // }

  // function changeLastNameHandler(event){
  //   // console.log("printing last name")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value) // value ko state me set kr diya h

  // }
  // above code is good only to use when small forms are there , but in case of larger forms , we will need to create so many variables so code may get messy 

  // solution is to ===> pass an object to useState

  const [formData, setFormData] = useState( { firstName:"", lastName:"",email:"" , comments:"", isVisible:true, mode:"" , favAnimal:""} )

  console.log(formData)
 
  function changeHandler(event){

    setFormData(prevFormData =>{
      console.log(event.target)
      const {name,value,checked , type} = event.target // destructuring

      return {...prevFormData, // previous state copy kr rha hai 
        [name]: type==="checkbox" ? checked : value // jis value k kaaran trigger hoga usko update kr rhe hai
        // property access krne k lie fomrs k lie specific square brackets lgane padhte h ---> its syntax --> no reason for this
       }
    })
  }


  //CONTROLLED COMPONENTS -->  maintain state inside components


  function submitHandler(event){
    event.preventDefault() // form submission default behavior ko block krna hai
    //print
    console.log("finally submit kr diya" ,formData)
  }


  return (
    <div className="App">

    <fieldset>
      <legend>
          Form-to-fill
      </legend>


      <form onSubmit={submitHandler}>
      <input
       type="text" 
       placeholder='first name'
      //  onChange={changeFirstNameHandler}
      onChange={changeHandler}
      name = "firstName"
      value={formData.firstName}
       />

       <br></br>
       <br/>

      <input
       type="text" 
       placeholder='last name' 
      //  onChange={changeLastNameHandler}
      onChange={changeHandler}
      name = "lastName"
      value={formData.lastName}  // jab v input me write krenge tab re-render hoga aur fir tab bol rhe hai ki value ko is particular formData.lastname se initialize kr dena ----> achhe se smjh nhi aaya
       />

      <br/>
      <input
       type="email" 
       placeholder='Enter your emial here' 
      //  onChange={changeLastNameHandler}
      onChange={changeHandler}
      name = "email"
      value={formData.email}
       />

      <br/>
      <br/>

      <textarea 
      placeholder='enter your commments'
      onChange={changeHandler}
      name = "comments"
      value={formData.comments}
      />
      <br/>
      <br/>

      <input 
      type='checkbox'
      onChange={changeHandler}
      name = "isVisible"
      id='isVisible'  // for label to access the checkbox by id
      checked={formData.isVisible} // checbox k lie value ki field use nhi krte balki checked field ko use krte hai to know if checkbox is checked or not 
      />
      <label htmlFor='isVisible' > Am I Visible ? </label>

      <br/>
      <br/>
     
      <input
       type="radio"
       onChange={changeHandler}
       name = "mode"

       value="Online-mode"
       id="Online-mode"
       checked={formData.mode==="Online-mode"} //agr online mode h toh checked hoga
      />
      <label htmlFor='Online-mode' > Online Mode </label>

      <input
       type="radio"
       onChange={changeHandler}
       name = "mode"

       value="Offline-mode"
       id="Offline-mode"
       checked={formData.mode==="Offline-mode"}  //agr offline mode h toh checked hoga
      />
      <label htmlFor='Online-mode' > Offline Mode </label>

      <br/>


      <label htmlFor='favAnimal' >Tell me your favorite Animal</label>
      <select
      onChange={changeHandler}
      name='favAnimal'
      value = {formData.favAnimal}
      id="favAnimal"
      >

        <option value="scorpio">Scorpio</option>
       <option value="lion">Lion</option>
       <option value="tiger">Tiger</option>
       <option value="bear">Bear</option>
       <option value="giraffe">Giraffe</option>
       <option value="elephant">Elephant</option>
       <option value="monkey">Monkey</option>
        
      </select>

      <br/>
      <br/>

      {/* <input type="submit"
      value=""
      ></input> */}

      <button >Submit</button> 
      {/* form k andar by default button ka type submit hi hota h 
      jab hum button form k andar daalte h tab , form me button click krne pr ek on Submit event trigger hota h 
      */}
    


      
      </form>

    </fieldset>

   


<br/>
<br/>

<fieldset>
  <legend>Form values entered above</legend>

      <div> Your name : {formData.firstName} {formData.lastName} </div>
      <div> Your email :{formData.email} </div>
      <div> Your comments :{formData.comments} </div>
      <div> Is visible : {formData.isVisible? "Yes" : "No"} </div>  
      {/* // ternary operator ki use kr rhe hai, jab isVisible true h to "Yes" show kr rhe hai aur false to "No" show kr rhe hai */}
      <div> Mode : {formData.mode} </div>
      <div> Favourite Animal : {formData.favAnimal} </div>
</fieldset>

     

      
  
    </div>
  );
}

export default App;
