import React from 'react'
import IngredientList from './IngredientList';
const Recipe = ({name , servings , cookTime,instruction , ingredient}) =>{
 return(
  <div>
    <h3>{name}</h3>
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
    <div>
      <span>Cooking Time: </span>
      <span>{cookTime}</span>
    </div>
    <div>
      <span>Serving: </span>
      <span>{servings}</span>
    </div>
    <div>
      <span>Instruction: </span>
      <div>
        {instruction}
      </div>
    </div>

    <div>
      <span>Ingredients: </span>
      <div>
        <IngredientList ingredient={ingredient} /> 
      </div>
    </div>
  </div>
 )
}
export default Recipe;