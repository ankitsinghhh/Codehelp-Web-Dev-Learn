import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
// import About from "./components/About"
// import Contact from "./components/Contact"
import Login from "./pages/Login"
import Singup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { Routes, Route } from "react-router-dom"
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return <div>

<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />

<Routes>

  <Route path="/" element={<Home />} />
  {/* <Route path="/about" element={<About />} /> */}
  {/* <Route path="/contact" element={<Contact />} /> */}
  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  />}  />
  <Route path="/signup" element={<Singup setIsLoggedIn={setIsLoggedIn} />} />
  <Route path="/dashboard" element={<Dashboard />} />


</Routes>




  </div>;
}

export default App;
