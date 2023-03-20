import React from 'react';
import RecipeList from "./Components/RecipeList";
import './style/app.css'

function App() {
  return (
    <div>
      <RecipeList recipe={sampleRecipes} />
    </div>
  );
}



// We make this array to kinda like a JSON file so that we can extract the value side the object and use it in the compoenets..
const sampleRecipes = [
  {
    id: 1,
    name: 'Plane Paneer',
    servings: 3,
    cookTime: '1.45',
    instruction: " 1. put salt on paneer \n  2. Put paneer in oven \n  3. Eat Paneer",
    ingredient: [
      {
        id: 1,
        name: 'paneer',
        amount: '4 pices'
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 Tbs'
      }
    ]
  },

  {
    id: 2,
    name: 'Plane Mushroom',
    servings: 5,
    cookTime: '0.45',
    instruction: " 1. put salt on mushroom \n  2. Put mushroom in oven \n  3. Eat chicken",
    ingredient: [
      {
        id: 1,
        name: 'mushroom',
        amount: '10 pices'
      },
      {
        id: 2,
        name: 'paper',
        amount: '2 Tbs'
      }
    ]
  },

]

export default App;
