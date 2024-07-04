import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { Link } from "react-router-dom";




const Cart = () => {

  const { cart } = useSelector((state) => state)
  // const cart = useSelector((state) => state.cart || []); // Add default value


  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))

  }, [cart])

  return (
    <div

    >
      {
        cart.length > 0 ?
          (
            <div
              className=" flex  max-w-6xl gap-6 mx-auto mt-20 "
            >
              <div className="  flex flex-col gap-6">

                {
                  cart.map((item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))
                }


              </div>

              <div className=" w-[50%]  flex flex-col gap-[16rem] ">

                <div>

                  <div className="text-green-500 font-bold">Your Cart </div>
                  <div className="text-green-700 text-5xl font-bold">Summary</div>
                  <p>
                    <span>Total Items: {cart.length} </span>
                  </p>


                </div>

                <div>
                  <p className="text-lg font-bold">Total Amount : ${totalAmount}</p>
                  <button
                    className="w-full bg-green-600 text-white text-xl py-3 rounded-md"
                  >Checkout Now</button>
                </div>

              </div>



            </div>
          ) :
          (
            <div>
              <h1> Your Cart is Empty</h1>
              <Link to="/">

                <button>
                  Shop Now
                </button>

              </Link>
            </div>
          )
      }
    </div>
  )
};

export default Cart;
