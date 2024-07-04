import { useState } from "react";

const Product = ({post}) => {
  const [selected, setSelected]= useState(true)
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt={post.title}/>
      </div>
      <div>
        <p>Price: ${post.price}</p>
      </div>
      <button>
        {
          selected ? <p>Remove Item</p> : <p>Add To Cart</p>
        }
      </button>
    </div>
  )
};

export default Product;
