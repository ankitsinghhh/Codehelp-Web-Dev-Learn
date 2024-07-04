import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div>
      <div className="bg-slate-900 fixed w-full top-0 z-50">
          <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/cart" element={ <Cart/> } />
      </Routes>
    </div>
  )
};

export default App;
