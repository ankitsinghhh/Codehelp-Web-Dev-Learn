import "./App.css";

// importing components
import Home from "./components/Home"
import Support from "./components/Support"
import Labs from "./components/Labs"
import About from "./components/About"
import Notfound from "./components/Notfound"
import MainHeader from "./components/MainHeader"

// Importing Link component from react-router-dom to create navigation links.
import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {

// useNavigate Hook - > helps in navigating to different routes using this hook




  return (
    <div>
      {/* link basiclaly route toh kr dega us link pe lekin vo link us time active nhi dikehtga
 lekin agr navlink use krenge toh vo apne jispe v hum click krenge uspe navlink ek active class lga dega , it will help in seeing which page we are currently on 
*/}


      <nav>
        <ul className="flex flex-row gap-4 bg-violet-500 text-white py-2 px-4 justify-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

        </ul>
      </nav>


      <Routes>
        {/* <Route path="/" element={<Home/>} />
    <Route path="/support" element={<Support/>} />
    <Route path="/labs" element={<Labs/>} />
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<Notfound/>} /> */}

        {/* Nested Routing */}
        <Route path="/" element={<MainHeader />} >
        <Route index element={<Home />} />  
        {/* Default Route =====  in this way , by writing index -> home page becomes our default route */}
          <Route path="/support" element={<Support />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>


      </Routes>



{/* homework - > 

Default Route:


<Route index element={<Home />} />

When the path is / and no specific child route (like /support, /labs, /about) is provided, the Home component will be rendered.
This is specified by the index prop, which means it serves as the default child route for its parent (/).
Catch-All Route:


<Route path="*" element={<Notfound />} />

The path="*" route acts as a catch-all for any paths that do not match the defined routes (/support, /labs, /about, etc.).
If a user navigates to a path that doesn't match any of the specified routes, the Notfound component will be rendered.

*/}



    </div>
  );
}

export default App;
