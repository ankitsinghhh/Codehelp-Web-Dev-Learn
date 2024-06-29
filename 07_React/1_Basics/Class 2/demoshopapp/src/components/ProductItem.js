import React, { useState } from 'react'; // importing useState - > it is a reacthook -> which is a utility function
 
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
// useState(initializing value) => output =>returns array which contains value of varibale , is value ko update krne wala function , 
// title jo h starting me initializing value se initialize hoga
  const [title, setTitle] =  useState(props.title);  // to repaint UI , we use states 
// setTitle function will be called to change the value of the title

// useState hook returns 

// why const? => In JavaScript, const is used to declare variables that are constant in the sense that the identifier cannot be reassigned. However, this does not mean that the value itself is immutable—if the value is an object or array, its properties or elements can still be changed.

// setTitle function is scheduled  ? -> yes 

  function clickHandler() {
    //title = "Popcorn";
    setTitle("Popcorn"); // react bs ek hi baar dom paint krti h , isilie jab hum koi normal event handling k lie function likhte h toh vo dom paint hone k baad call hoti h isilie vo update nhi hota h UI pe , coz ui not repainted

    // to repaint UI , we use states 
    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button> // in react for event handling , we use Props - they always starts with "on" and note: its a good practice to write the functions name ending with "handler"
    </Card>
  );
}

export default ProductItem;