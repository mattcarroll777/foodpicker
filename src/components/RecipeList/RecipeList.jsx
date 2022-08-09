import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeList = ({ foods }) => {
  return (
    <div>
      {!foods
        ? 'Please try a different ingredient'
        : foods.map((meal, i) => <RecipeCard meal={meal} key={i} />)}
    </div>
  );
};

export default RecipeList;
