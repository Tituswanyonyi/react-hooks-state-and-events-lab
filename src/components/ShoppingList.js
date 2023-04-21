import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
   const [selectCategory, setSelectCategory] = useState ("All")
   function handleFilterCategory(event){
    setSelectCategory(event.target.value);
  }

  const displayItems = items.filter((item) => {
    if (selectCategory === "All") {
      return true;
    } else {
      return item.category === selectCategory;
    }
  }); 

  const itemList = displayItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  )); 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleFilterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;