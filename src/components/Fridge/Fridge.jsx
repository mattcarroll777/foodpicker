import React, { useState } from 'react';
import './Fridge.css';

// let background = './fridgeimages/fridge.jpg';
const Fridge = ({ setGetFood, getFood }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setGetFood(e.target[0].value);
  };

  return (
    <div
      style={{
        flex: 2,
        // backgroundImage: `url(${background})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
      }}
    >
      <div id="greeting">Enter an Ingredient and Recieve Meal Ideas</div>
      <div id="instructions"> Enter one of over 500 ingredients!</div>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Enter an Ingrident: (ex beef, garlic, cheese)
          {<br />}
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Fridge;
