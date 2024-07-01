import './App.css';
import { useState } from 'react';

function App() {
  // Initialize state to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  });

  // Handle changes to form inputs
  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    setFormData(prevFormData => {
      return {
        // Update form data state
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  // Handle form submission
  function submitHandler(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form data after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotification: ""
    });
  }

  return (
    <div className="wrapper w-[100vw] m-0 p-0">
      <div className="container w-[80%] md:w-[57%] mx-auto py-6 bg-white border-2 border-l-gray-300 border-r-gray-300 border-b-0 px-6">
        <form className="flex flex-col" onSubmit={submitHandler}>
          {/* First Name input */}
          <label className="text-[15px] mb-1">First Name: </label>
          <input
            className="border border-b-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={changeHandler}
            value={formData.firstName}
          />

          {/* Last Name input */}
          <label className="text-[15px] mb-1">Last Name: </label>
          <input
            className="border border-t-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={changeHandler}
            value={formData.lastName}
          />

          {/* Email Address input */}
          <label className="text-[15px] mb-1">Email Address: </label>
          <input
            className="border border-b-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            type="text"
            name="email"
            placeholder="Enter your email address"
            onChange={changeHandler}
            value={formData.email}
          />

          {/* Country selection */}
          <label className="text-[15px] mb-1">Select your Country </label>
          <select
            className="border border-t-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            name="country"
            onChange={changeHandler}
            value={formData.country}
          >
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>

          {/* Street Address input */}
          <label className="text-[15px] mb-1">Street Address: </label>
          <input
            className="border border-b-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            type="text"
            name="streetAddress"
            placeholder="Enter your street address"
            onChange={changeHandler}
            value={formData.streetAddress}
          />

          {/* City input */}
          <label className="text-[15px] mb-1">City </label>
          <input
            className="border border-b-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            type="text"
            name="city"
            placeholder="Enter your city name"
            onChange={changeHandler}
            value={formData.city}
          />

          {/* State/Province input */}
          <label className="text-[15px] mb-1">State/Province </label>
          <input
            className="border border-b-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            type="text"
            name="state"
            placeholder="Enter your state/province"
            onChange={changeHandler}
            value={formData.state}
          />

          {/* Postal Code input */}
          <label className="text-[15px] mb-1">Postal Code: </label>
          <input
            className="border border-b-blue-400 border-slate-400 rounded-md mb-4 px-2 focus:border-blue-800 focus:border-[1.5px] outline-none"
            type="text"
            name="postalCode"
            placeholder="Enter your postal code"
            onChange={changeHandler}
            value={formData.postalCode}
          />

          {/* By Email notifications */}
          <h3 className="text-[18px] mt-4 mb-2">By Email</h3>
          <div className="flex flex-col mb-4">
            {/* Comments checkbox */}
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
              />
              <span className="ml-2">Comments</span>
              <span className="text-sm ml-4">Get notified when someone posts a comment on a posting</span>
            </label>
            {/* Candidates checkbox */}
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                name="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
              />
              <span className="ml-2">Candidates</span>
              <span className="text-sm ml-4">Get notified when a candidate applies for a job</span>
            </label>
            {/* Offers checkbox */}
            <label className="flex items-center">
              <input
                type="checkbox"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
              />
              <span className="ml-2">Offers</span>
              <span className="text-sm ml-4">Get notified when a candidate accepts or rejects an offer</span>
            </label>
          </div>

          {/* Push Notifications section */}
          <h3 className="text-[18px] mt-4 mb-2">Push Notifications</h3>
          <div className="mb-4">
            <p className="text-sm mb-2">These are delivered via SMS to your mobile phone</p>
            {/* Everything radio button */}
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="pushNotification"
                value="everything"
                checked={formData.pushNotification === "everything"}
                onChange={changeHandler}
              />
              <span className="ml-2">Everything</span>
            </label>
            {/* Same as Email radio button */}
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="pushNotification"
                value="sameAsEmail"
                checked={formData.pushNotification === "sameAsEmail"}
                onChange={changeHandler}
              />
              <span className="ml-2">Same as Email</span>
            </label>
            {/* No Push Notifications radio button */}
            <label className="flex items-center">
              <input
                type="radio"
                name="pushNotification"
                value="noPushNotifications"
                checked={formData.pushNotification === "noPushNotifications"}
                onChange={changeHandler}
              />
              <span className="ml-2">No Push Notifications</span>
            </label>
          </div>

          {/* Submit button */}
          <button className="px-3 py-1 bg-blue-300 self-start rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
