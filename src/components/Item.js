import React,{useState} from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState (false);
  const addItem = () =>{
    setInCart(true);
  }
  return (
    <li className={inCart ? 'in-cart': null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {addItem} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;