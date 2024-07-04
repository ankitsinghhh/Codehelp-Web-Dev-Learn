import { FaShoppingCart } from "react-icons/fa"
import { CiShop } from "react-icons/ci";
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div>

      <div className="flex flex-row justify-between">

        <NavLink to="/" className="text-4xl flex items-center gap-1 font-bold text-green-500 ">
          <CiShop /> <span className="text-xl">ShopNow</span>
        </NavLink>

        <div className="flex items-center gap-3 text-xl">

          <NavLink to="/">
            <p>Home</p>

          </NavLink>

          <NavLink to="/cart">

            <div>

              <FaShoppingCart />
            </div>
          </NavLink>
        </div>

      </div>

    </div>
  )
};

export default Navbar;
