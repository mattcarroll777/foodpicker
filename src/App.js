import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Fridge from './components/Fridge/Fridge';
import RecipeList from './components/RecipeList/RecipeList';
import { getFoodData } from './api';

function App() {
  const [foods, setFoods] = useState({});
  const [getFood, setGetFood] = useState('chicken_breast');

  useEffect(() => {
    getFoodData(getFood).then((data) => {
      setFoods(data);
    });
  }, [getFood]);

  return (
    <div style={{ backgroundColor: '#af5f25' }}>
      <Header />
      <Fridge setGetFood={setGetFood} getFood={getFood} />
      <RecipeList foods={foods.meals} />
    </div>
  );
}

export default App;
