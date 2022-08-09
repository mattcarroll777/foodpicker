import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ meal }) => {
  return (
    <div>
      {!meal ? (
        'Loading....'
      ) : (
        <div>
          <h3 style={{ textAlign: 'center' }}> {meal.strMeal}</h3>
          <img id="mealImage" src={meal.strMealThumb} alt="recipe" />
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
