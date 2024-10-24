const BurgerStack =(props)=> {
    return <ul>
    {stack.map((ingredient, index) => (
      <li 
        key={index} 
        onClick={() => removeFromBurger(ingredient)}
      >
        {ingredient}
      </li>
    ))}
  </ul>;
};
export default BurgerStack;