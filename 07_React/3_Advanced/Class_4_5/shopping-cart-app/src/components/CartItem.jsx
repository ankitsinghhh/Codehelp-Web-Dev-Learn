import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, ItemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item removed");
  };

  return (
    <div className="flex items-center p-4 border-b">
      <div className="w-[200px] mr-3 ">
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-col gap-3">
        <div>
          <h1 className="text-lg font-semibold mb-2">
            {item.title}
          </h1>
          <p className="text-gray-500 text-sm">
            {item.description.split( " ").splice(0,20).join(" ")+ "..."}
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-bold">${item.price}</p>
          <div
            onClick={removeFromCart}
            className="cursor-pointer text-red-500 hover:text-red-700 p-2 bg-red-300 rounded-full"
          
          >
            <FcDeleteDatabase  size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
