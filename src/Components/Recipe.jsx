import React from "react";
import IngredientList from "./IngredientList";
const Recipe = ({ name, servings, cookTime, instruction, ingredient }) => {
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger mr-1">Delete</button>
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
          <div>{instruction}</div>
        </div>

        <div>
          <span>Ingredients: </span>
          <div>
            <IngredientList ingredient={ingredient} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
