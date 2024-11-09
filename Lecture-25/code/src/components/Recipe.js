import React, { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [recipes, setRecipes] = useState(data);

  return (
    <>
      <h3>Recipe</h3>
      {recipes.map((recipe) => {
        return (
          <div>
            <h4>{recipe.strCategory}</h4>
            <Link to={`/recipe/${recipe.idCategory}`}>
              <img src={recipe.strCategoryThumb} />
            </Link>
            <p>{recipe.strCategoryDescription}</p>
          </div>
        );
      })}
    </>
  );
};

export default Recipe;
