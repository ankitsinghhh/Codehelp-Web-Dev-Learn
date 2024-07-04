import { FaShoppingCart } from "react-icons/fa"
import { CiShop } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const Navbar = () => {

  const {cart} = useSelector(state => state)
  return (
    <div className="">

      <nav className="flex flex-row justify-between py-2 px-5  text-white h-16 max-w-6xl mx-auto ">

        <NavLink to="/" className="text-4xl flex items-center gap-1 font-bold text-green-500 text-[">
          <CiShop className="font-semibold" /> <span className="text-xl">ShopNow</span>
        </NavLink>

        <div className="flex items-center gap-5 text-xl">

          <NavLink to="/">
            <p>Home</p>

          </NavLink>

          <NavLink to="/cart">

            <div className="text-xl relative">

              <FaShoppingCart  className="text-2xl" />
              {
                cart.length>0 && (<span className="absolute  -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex place-content-center place-items-center animate-bounce  rounded-full font-bold" >{cart.length}</span>) 
              }
            </div>
          </NavLink>
          
        </div>

      </nav>

    </div>
  )
};

export default Navbar;
