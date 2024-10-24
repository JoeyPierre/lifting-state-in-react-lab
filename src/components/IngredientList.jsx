import React from "react";

const IngredientList = (props)=> {
    return <ul>
    {ingredients.map((ingredient, index) => (
      <li 
        key={index} 
        style={{ color: ingredient.color }} 
        onClick={() => addToBurger(ingredient.name)}
      >
        {ingredient.name}
      </li>
    ))}
  </ul>
};
export default IngredientsList;


