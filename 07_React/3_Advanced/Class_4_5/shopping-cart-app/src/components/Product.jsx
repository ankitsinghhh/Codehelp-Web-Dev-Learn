// import { useState } from "react";
import {toast} from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/cartSlice"

const Product = ({post}) => {
  // const [selected, setSelected]= useState(true)

  const {cart} = useSelector((state)=>state)
  // const cart = useSelector((state) => state.cart || []); // Ensure cart is always an array

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post))
    toast.success("Item added to Cart")
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id))
    toast.error("Item removed from Cart")
  }



  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] shadow-lg rounded-xl outline outline-slate-300 gap-3 p-4 mt-10 ml-5 group ">

      <div className="text-gray-700 font-semibold text-left truncate w-40 mt-1">
        <p>{post.title}</p>
      </div>
      <div>
        <p
        className="w-40 text-gray-400 font-normal text-[10px] text-left  "
        >{post.description.split( " ").splice(0,10).join(" ")+ "..."}</p>
      </div>
      <div className="h-[180px] ">
        <img 
        src={post.image} 
        alt={post.title}
        className="h-full w-full"
        />
      </div>


      <div className="flex justify-between w-full">
      <div>
        <p className="text-green-600 font-semibold  ">${post.price}</p>
      </div>
      {
        cart.some((p)=>p.id === post.id) ?  (
        <button
        className="text-orange-700 rounded-full border border-orange-700 font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-red-700 
        group-hover:text-white transition-all duration-300 ease-in "
        onClick={removeFromCart}
        >
          Remove Item
        </button>) : 
        (
          <button
                  className="text-gray-700 rounded-full border border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 
        group-hover:text-white transition-all duration-300 ease-in "
          onClick={addToCart}
          >
            Add To Cart
          </button>
        ) 
      }
      </div>
    
    </div>
  )
};

export default Product;
