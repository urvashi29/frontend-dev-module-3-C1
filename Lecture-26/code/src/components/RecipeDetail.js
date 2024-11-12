import React from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const params = useParams();
  console.log(params.recipe_id);

  const filteredData = data.filter(
    (recipe) => recipe.idCategory == params.recipe_id
  );

  console.log(filteredData);

  return (
    <div>
      <h3>Recipe Detail</h3>
      {filteredData.map((recipe) => {
        return (
          <div>
            <h4>{recipe.strCategory}</h4>

            <img src={recipe.strCategoryThumb} />

            <p>{recipe.strCategoryDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeDetail;
