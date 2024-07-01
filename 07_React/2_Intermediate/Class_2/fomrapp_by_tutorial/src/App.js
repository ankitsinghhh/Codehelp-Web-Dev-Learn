import "./App.css";
import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications:""

  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  // formData.forEach(element => {
  //   console.log(element)
  // });

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the form Data",formData)
    
//resetFormData
    setFormData(
      {
        firstName: "",
        lastName: "",
        email: "",
        country: "India",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        comments: false,
        candidates: false,
        offers: false,
        pushNotifications:""
    
      }
    )
  }



  return (
    <div className="flex flex-col items-center">

      <form className=""
      onSubmit={submitHandler}
      >


        <label htmlFor="firstName" className="">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline "
        />
        <br />

        <label htmlFor="lastName" className="">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline "
        />
        <br></br>

        <label htmlFor="email" className="">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={changeHandler}
          className="outline "
        />

        <br></br>
        <label htmlFor="country">Select your Country ? </label>
        <br></br>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option value="India">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
        </select>

        <br></br>

        <label htmlFor="streetAddress" className="">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Enter your street address"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline "
        />
        <br></br>

        <label htmlFor="city" className="">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={changeHandler}
          className="outline "
        />
        <br></br>

        <label htmlFor="state" className="">State/Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Enter your state"
          value={formData.state}
          onChange={changeHandler}
          className="outline "
        />
        <br></br>

        <label htmlFor="postalCode" className="">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Enter your postal code"
          checked={formData.postalCode}
          onChange={changeHandler}
          className="outline "
        />
        <br></br>

        <br/>

        <fieldset>
          <legend>By Email</legend>

          <div className="flex"> 
          <input
            type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>
          <label htmlFor="comments">Comments</label>
          <p>Get notified when someone posts a comment on a posting.</p>
          </div>
          </div>


          <div className="flex"> 
          <input
            type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div>
          <label htmlFor="candidates">Candidates</label>
          <p>Get notified when candidate applies for a job</p>
          </div>
          </div>



          <div className="flex"> 
          <input
            type="checkbox"
            id="offers"
            name="offers"
            value={formData.offers}
            onChange={changeHandler}
          />
          <div>
          <label htmlFor="offers">Offers</label>
          <p>Get notified when a candidates accepts or rejects an offer</p>
          </div>
          </div>


        </fieldset>


<br/>
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your Mobile phone.</p>

          <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
          
           />
          <label htmlFor="pushEverything">Everything</label>
  <br></br>
          <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="same as Email"
          onChange={changeHandler}
          
           />
          <label htmlFor="pushEmail">Same as Email</label>
<br></br>
          <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No push notification"
          onChange={changeHandler}
          
           />
          <label htmlFor="pushNothing">No Push</label>

        </fieldset>

        <button className="bg-blue-500 text-white rounded-md font-bold py-2 px-4">Save</button>






      </form>

    </div>
  );
}

export default App;
