const axios = require('axios');

const URL = 'https://themealdb.p.rapidapi.com/filter.php';
const HOST = 'themealdb.p.rapidapi.com';

export const getFoodData = async (food) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        i: food,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': HOST,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
