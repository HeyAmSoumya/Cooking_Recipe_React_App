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
    name: 'Plain Panir',
    servings: 3,
    cookTime: '1.45',
    instruction: " 1. put salt on panir \n  2. Put panir in oven \n  3. Eat chicken",
    ingredient: [
      {
        id: 1,
        name: 'panir',
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
    name: 'Plain Mushroom',
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
