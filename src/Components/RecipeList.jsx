import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipe }) => {
  return (
    <div className="recipe-list">
      <div>
        {/* The code is that we itrate recipe "array" through map and we are saying render all the key value pair by {...Oprator} -> this will render all key value pair inside the recipe array. When the recipe[0] will be render it goes to another index recipe[1] and re-render the <Recipe /> again with differnet values , we gave the key={recipe.id} if we change anything in the id= 1 it will not affect the id=2 component... */}

        {recipe.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      {/* This is ben style className for the style */}
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary">Add Recipe</button>
      </div>
    </div>
  );
};

export default RecipeList;
